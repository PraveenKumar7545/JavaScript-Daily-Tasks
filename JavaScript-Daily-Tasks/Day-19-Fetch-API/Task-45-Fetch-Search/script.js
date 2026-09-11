let users = [];

function getUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            users = data;

            searchUsers();
        })
        .catch(function(error) {

            alert("Failed to load users");

            console.log(error);
        });
}

function displayUsers(data) {

    let list = document.getElementById("userList");

    list.innerHTML = "";

    data.forEach(function(user) {

        let li = document.createElement("li");

        li.innerText = user.name;

        list.appendChild(li);
    });
}

function searchUsers() {

    let searchValue =
        document.getElementById("search").value.toLowerCase();

    let filteredUsers = users.filter(function(user) {

        return user.name.toLowerCase().includes(searchValue);
    });

    displayUsers(filteredUsers);
}