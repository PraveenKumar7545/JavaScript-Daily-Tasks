/* ==========================================
Student Management System
========================================== */

/* ==========================================

1. Get HTML Elements
   ========================================== */

const studentForm = document.getElementById("studentForm");

const studentName = document.getElementById("studentName");
const rollNumber = document.getElementById("rollNumber");
const email = document.getElementById("email");
const department = document.getElementById("department");
const age = document.getElementById("age");
const gender = document.getElementById("gender");

const studentTableBody = document.getElementById("studentTableBody");

const searchInput = document.getElementById("searchInput");

const totalStudents = document.getElementById("totalStudents");
const maleStudents = document.getElementById("maleStudents");
const femaleStudents = document.getElementById("femaleStudents");

const errorMessage = document.getElementById("errorMessage");

const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");

const formTitle = document.getElementById("formTitle");

const emptyMessage = document.getElementById("emptyMessage");

/* ==========================================
2. Student Array
========================================== */

let students = JSON.parse(localStorage.getItem("students")) || [];

/* ==========================================
3. Edit Student ID
========================================== */

let editStudentId = null;

/* ==========================================
4. Display Students
========================================== */

function displayStudents(studentList = students) {


studentTableBody.innerHTML = "";


/* No students */

if (studentList.length === 0) {

    emptyMessage.classList.remove("hidden");

    return;

}


emptyMessage.classList.add("hidden");


/* Create table rows */

studentList.forEach((student, index) => {

    const row = document.createElement("tr");

    row.className = "border-b border-slate-100";


    row.innerHTML = `

        <td class="px-4 py-4 text-sm text-slate-600">
            ${index + 1}
        </td>

        <td class="px-4 py-4 font-medium text-slate-900">
            ${student.name}
        </td>

        <td class="px-4 py-4 text-sm text-slate-600">
            ${student.roll}
        </td>

        <td class="px-4 py-4 text-sm text-slate-600">
            ${student.email}
        </td>

        <td class="px-4 py-4 text-sm text-slate-600">
            ${student.department}
        </td>

        <td class="px-4 py-4 text-sm text-slate-600">
            ${student.age}
        </td>

        <td class="px-4 py-4 text-sm text-slate-600">
            ${student.gender}
        </td>

        <td class="px-4 py-4">

            <div class="flex gap-2">

                <button
                    onclick="editStudent(${student.id})"
                    class="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium">
                    Edit
                </button>

                <button
                    onclick="deleteStudent(${student.id})"
                    class="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-2 rounded-lg text-sm font-medium">
                    Delete
                </button>

            </div>

        </td>

    `;


    studentTableBody.appendChild(row);

});


}

/* ==========================================
5. Update Statistics
========================================== */

function updateStatistics() {


totalStudents.textContent = students.length;


const maleCount = students.filter(
    student => student.gender === "Male"
).length;


const femaleCount = students.filter(
    student => student.gender === "Female"
).length;


maleStudents.textContent = maleCount;

femaleStudents.textContent = femaleCount;

}

/* ==========================================
6. Save Students to LocalStorage
========================================== */

function saveStudents() {

localStorage.setItem(
    "students",
    JSON.stringify(students)
);


}

/* ==========================================
7. Form Validation
========================================== */

function validateForm() {


const nameValue = studentName.value.trim();
const rollValue = rollNumber.value.trim();
const emailValue = email.value.trim();
const departmentValue = department.value;
const ageValue = age.value;
const genderValue = gender.value;


/* Student Name */

if (nameValue === "") {

    showError("Please enter student name.");

    studentName.focus();

    return false;

}


/* Roll Number */

if (rollValue === "") {

    showError("Please enter roll number.");

    rollNumber.focus();

    return false;

}


/* Email */

if (emailValue === "") {

    showError("Please enter email address.");

    email.focus();

    return false;

}


/* Simple Email Validation */

if (!emailValue.includes("@")) {

    showError("Please enter a valid email address.");

    email.focus();

    return false;

}


/* Department */

if (departmentValue === "") {

    showError("Please select department.");

    department.focus();

    return false;

}


/* Age */

if (ageValue === "") {

    showError("Please enter age.");

    age.focus();

    return false;

}


if (Number(ageValue) < 15 || Number(ageValue) > 100) {

    showError("Age must be between 15 and 100.");

    age.focus();

    return false;

}


/* Gender */

if (genderValue === "") {

    showError("Please select gender.");

    gender.focus();

    return false;

}


hideError();

return true;


}

/* ==========================================
8. Show Error
========================================== */

function showError(message) {


errorMessage.textContent = message;

errorMessage.classList.remove("hidden");


}

/* ==========================================
9. Hide Error
========================================== */

function hideError() {


errorMessage.textContent = "";

errorMessage.classList.add("hidden");


}

/* ==========================================
10. Add / Update Student
========================================== */

studentForm.addEventListener("submit", function (event) {


event.preventDefault();


/* Validate */

if (!validateForm()) {

    return;

}


/* Student Object */

const studentData = {

    id: editStudentId || Date.now(),

    name: studentName.value.trim(),

    roll: rollNumber.value.trim(),

    email: email.value.trim(),

    department: department.value,

    age: Number(age.value),

    gender: gender.value

};


/* Update Existing Student */

if (editStudentId !== null) {

    students = students.map(student => {

        if (student.id === editStudentId) {

            return studentData;

        }

        return student;

    });


    alert("Student updated successfully.");

}


/* Add New Student */

else {

    students.push(studentData);

    alert("Student added successfully.");

}


/* Save */

saveStudents();


/* Refresh */

displayStudents();

updateStatistics();


/* Reset */

resetForm();


});

/* ==========================================
11. Edit Student
========================================== */

function editStudent(id) {


const student = students.find(
    student => student.id === id
);


if (!student) {

    return;

}


/* Fill Form */

studentName.value = student.name;

rollNumber.value = student.roll;

email.value = student.email;

department.value = student.department;

age.value = student.age;

gender.value = student.gender;


/* Store ID */

editStudentId = id;


/* Change UI */

formTitle.textContent = "Edit Student";

submitButton.textContent = "Update Student";

cancelButton.classList.remove("hidden");


/* Scroll */

window.scrollTo({
    top: 0,
    behavior: "smooth"
});


}

/* ==========================================
12. Delete Student
========================================== */

function deleteStudent(id) {


const confirmDelete = confirm(
    "Are you sure you want to delete this student?"
);


if (!confirmDelete) {

    return;

}


students = students.filter(
    student => student.id !== id
);


saveStudents();

displayStudents();

updateStatistics();


alert("Student deleted successfully.");

}

/* ==========================================
13. Search Student
========================================== */

searchInput.addEventListener("input", function () {


const searchValue =
    searchInput.value.toLowerCase().trim();


const filteredStudents = students.filter(student => {

    return (

        student.name.toLowerCase().includes(searchValue) ||

        student.roll.toLowerCase().includes(searchValue) ||

        student.email.toLowerCase().includes(searchValue) ||

        student.department.toLowerCase().includes(searchValue)

    );

});


displayStudents(filteredStudents);

});

/* ==========================================
14. Cancel Edit
========================================== */

cancelButton.addEventListener("click", function () {


resetForm();


});

/* ==========================================
15. Reset Form
========================================== */

function resetForm() {


studentForm.reset();


editStudentId = null;


formTitle.textContent = "Add Student";

submitButton.textContent = "Add Student";

cancelButton.classList.add("hidden");


hideError();


}

/* ==========================================
16. Initial Load
========================================== */

displayStudents();

updateStatistics();
