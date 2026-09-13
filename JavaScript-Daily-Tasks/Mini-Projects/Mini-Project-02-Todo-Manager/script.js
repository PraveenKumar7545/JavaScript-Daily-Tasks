const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const searchInput = document.getElementById("searchInput");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const errorMessage = document.getElementById("errorMessage");
const emptyMessage = document.getElementById("emptyMessage");

const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");
const formTitle = document.getElementById("formTitle");

const filterButtons = document.querySelectorAll(".filterButton");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

let editTodoId = null;

let currentFilter = "all";

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function displayTodos() {

    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    if (currentFilter === "pending") {
        filteredTodos = todos.filter(todo => !todo.completed);
    }

    const searchValue = searchInput.value.toLowerCase().trim();

    filteredTodos = filteredTodos.filter(todo =>
        todo.title.toLowerCase().includes(searchValue)
    );

    if (filteredTodos.length === 0) {
        emptyMessage.classList.remove("hidden");
        return;
    }

    emptyMessage.classList.add("hidden");

    filteredTodos.forEach((todo, index) => {

        const todoItem = document.createElement("div");

        todoItem.className =
            "todoItem bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4";

        todoItem.innerHTML = `
            <div class="flex items-center gap-3">

                <input
                    type="checkbox"
                    ${todo.completed ? "checked" : ""}
                    onchange="toggleTodo(${todo.id})"
                    class="w-5 h-5 cursor-pointer">

                <div>
                    <h3 class="font-medium text-slate-900 ${todo.completed ? "completedTodo" : ""}">
                        ${todo.title}
                    </h3>

                    <p class="text-xs text-slate-400 mt-1">
                        Task ${index + 1}
                    </p>
                </div>

            </div>

            <div class="flex gap-2">

                <button
                    onclick="editTodo(${todo.id})"
                    class="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium">
                    Edit
                </button>

                <button
                    onclick="deleteTodo(${todo.id})"
                    class="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-2 rounded-lg text-sm font-medium">
                    Delete
                </button>

            </div>
        `;

        todoList.appendChild(todoItem);
    });
}

function updateStatistics() {

    totalTasks.textContent = todos.length;

    const completedCount = todos.filter(
        todo => todo.completed
    ).length;

    const pendingCount = todos.filter(
        todo => !todo.completed
    ).length;

    completedTasks.textContent = completedCount;

    pendingTasks.textContent = pendingCount;
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}

function hideError() {
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
}

todoForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = todoInput.value.trim();

    if (title === "") {
        showError("Please enter a task.");
        todoInput.focus();
        return;
    }

    if (editTodoId !== null) {

        todos = todos.map(todo => {

            if (todo.id === editTodoId) {
                return {
                    ...todo,
                    title: title
                };
            }

            return todo;
        });

    } else {

        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
        };

        todos.push(newTodo);
    }

    saveTodos();

    displayTodos();

    updateStatistics();

    resetForm();
});

function toggleTodo(id) {

    todos = todos.map(todo => {

        if (todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            };
        }

        return todo;
    });

    saveTodos();

    displayTodos();

    updateStatistics();
}

function editTodo(id) {

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        return;
    }

    todoInput.value = todo.title;

    editTodoId = id;

    formTitle.textContent = "Edit Todo";

    submitButton.textContent = "Update Task";

    cancelButton.classList.remove("hidden");

    todoInput.focus();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function deleteTodo(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) {
        return;
    }

    todos = todos.filter(todo => todo.id !== id);

    saveTodos();

    displayTodos();

    updateStatistics();
}

function resetForm() {

    todoForm.reset();

    editTodoId = null;

    formTitle.textContent = "Add Todo";

    submitButton.textContent = "Add Task";

    cancelButton.classList.add("hidden");

    hideError();
}

cancelButton.addEventListener("click", function() {
    resetForm();
});

searchInput.addEventListener("input", function() {
    displayTodos();
});

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("activeFilter");
        });

        button.classList.add("activeFilter");

        displayTodos();
    });
});

displayTodos();

updateStatistics();