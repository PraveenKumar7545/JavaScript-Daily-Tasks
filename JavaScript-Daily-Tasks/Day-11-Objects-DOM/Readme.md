# Task-20: Employee Object

## 📌 Task Description

Create an **Employee Object** using JavaScript and display the employee details dynamically on the webpage using the **DOM (Document Object Model)**.

This task helps to understand how JavaScript **objects** store related information and how object properties can be accessed and displayed using DOM manipulation.

---

## 🎯 Objectives

* Create an Employee object using JavaScript.
* Store employee details as object properties.
* Access object properties using JavaScript.
* Display employee information dynamically using the DOM.
* Practice basic DOM manipulation.

---

## 🛠️ Technologies Used

* HTML5
* JavaScript
* DOM Manipulation

---

## 📂 Project Structure

```text
Task-20-Employee-Object/
│
├── index.html
├── script.js
├── README.md
│
└── Output_Screenshots/
    └── output.png
```

---

## 👨‍💻 Employee Object

The employee object contains details such as:

* Employee Name
* Employee ID
* Department
* Designation
* Salary

Example:

```javascript
const employee = {
    name: "Praveen Kumar",
    id: 101,
    department: "IT",
    designation: "Software Developer",
    salary: 50000
};
```

---

## 💻 JavaScript Concept Used

### Object

An object is used to store multiple related values as **key-value pairs**.

```javascript
const employee = {
    name: "Praveen Kumar",
    id: 101,
    department: "IT"
};
```

### Accessing Object Properties

```javascript
employee.name
employee.id
employee.department
```

### DOM Manipulation

The employee details are displayed on the webpage using JavaScript DOM methods.

```javascript
document.getElementById("output").innerHTML = `
    Name: ${employee.name}
    <br>
    ID: ${employee.id}
    <br>
    Department: ${employee.department}
`;
```

---

## 📸 Output

The program displays the employee information on the webpage.

Check the **Output_Screenshots** folder for the output image.

---

## 📚 Concepts Learned

* JavaScript Objects
* Object Properties
* Key-Value Pairs
* Accessing Object Values
* Template Literals
* DOM Selection
* DOM Manipulation
* Dynamic Content Display

---

## 🚀 How to Run

1. Download or clone the repository.
2. Open the `Task-20-Employee-Object` folder.
3. Open `index.html` in a web browser.
4. The employee details will be displayed on the webpage.

---

## 🔗 Repository

[JavaScript-Daily-Tasks](https://github.com/PraveenKumar7545/JavaScript-Daily-Tasks)

---

### ✅ Task Completed

**Day:** 11
**Task:** 20
**Topic:** Objects & DOM
**Status:** Completed
