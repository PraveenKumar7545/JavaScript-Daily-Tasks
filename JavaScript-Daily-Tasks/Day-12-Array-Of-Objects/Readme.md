# Day-12: Array Of Objects

## 📌 Overview

This day focuses on **Array of Objects in JavaScript**.

An Array of Objects allows multiple objects containing related information to be stored together in a single array. These objects can then be accessed, processed, searched, filtered, and displayed dynamically using JavaScript and DOM manipulation.

---

## 🎯 Learning Objectives

* Understand Arrays of Objects in JavaScript.
* Create and store multiple objects inside an array.
* Access object properties from an array.
* Iterate through an Array of Objects.
* Display object data dynamically using the DOM.
* Use array methods to process object data.
* Implement a basic search functionality using an Array of Objects.

---

## 🛠️ Technologies Used

* HTML5
* JavaScript
* DOM Manipulation

---

## 📂 Folder Structure

```text
Day-12-Array-Of-Objects/
│
├── Task-23-Student-List/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
├── Task-24-Product-List/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
└── Task-25-Employee-Search/
    ├── index.html
    ├── script.js
    └── Output_Screenshots/
```

---

# 📚 Tasks

## 🔹 Task-23: Student List

### 📌 Description

Create an Array of Student Objects and display the student details dynamically on the webpage.

Each student is represented as an object containing different properties such as name, age, department, and other relevant information.

### 💡 Concepts Practiced

* JavaScript Objects
* Arrays
* Array of Objects
* Object Properties
* `forEach()`
* Template Literals
* DOM Manipulation
* Dynamic Content Display

### Example

```javascript
const students = [
    {
        name: "Praveen",
        age: 21,
        department: "IT"
    },
    {
        name: "Arun",
        age: 20,
        department: "CSE"
    }
];
```

The student objects are stored inside an array and displayed dynamically on the webpage.

---

## 🔹 Task-24: Product List

### 📌 Description

Create an Array of Product Objects and display the product information dynamically on the webpage.

Each product is represented as an object containing properties such as product name, price, category, and other product-related information.

### 💡 Concepts Practiced

* JavaScript Objects
* Arrays
* Array of Objects
* Object Properties
* `forEach()`
* Template Literals
* DOM Manipulation
* Dynamic Content Rendering

### Example

```javascript
const products = [
    {
        name: "Laptop",
        price: 55000,
        category: "Electronics"
    },
    {
        name: "Mobile",
        price: 25000,
        category: "Electronics"
    }
];
```

The product objects are stored inside an array and displayed dynamically on the webpage.

---

## 🔹 Task-25: Employee Search

### 📌 Description

Create an Employee Search functionality using an Array of Employee Objects.

The user can enter an employee name or search value, and the matching employee details are displayed dynamically on the webpage.

### 💡 Concepts Practiced

* JavaScript Objects
* Arrays
* Array of Objects
* `filter()`
* `includes()`
* `toLowerCase()`
* Search Functionality
* Template Literals
* DOM Manipulation
* Dynamic Content Display

### Example

```javascript
const employees = [
    {
        name: "Praveen",
        id: 101,
        department: "IT"
    },
    {
        name: "Arun",
        id: 102,
        department: "HR"
    }
];
```

The `filter()` method can be used to search for matching employees.

```javascript
const result = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchValue.toLowerCase())
);
```

---

# 🧠 Key Concepts Learned

### 1. Array of Objects

Multiple objects can be stored inside an array.

```javascript
const users = [
    { name: "Praveen", age: 21 },
    { name: "Arun", age: 20 }
];
```

---

### 2. Accessing Object Properties

Object properties can be accessed using dot notation.

```javascript
users[0].name;
users[1].age;
```

---

### 3. `forEach()`

Used to iterate through every object in an array.

```javascript
users.forEach((user) => {
    console.log(user.name);
});
```

---

### 4. `filter()`

Used to create a new array containing objects that match a specific condition.

```javascript
const result = users.filter((user) => user.age > 20);
```

---

### 5. `includes()`

Used to check whether a string contains a particular value.

```javascript
user.name.includes("Pra");
```

---

### 6. DOM Manipulation

JavaScript is used to dynamically display the object data on the webpage.

```javascript
document.getElementById("output").innerHTML = result;
```

---

## 📸 Output Screenshots

Each task contains an **Output_Screenshots** folder containing the respective output screenshots.

* **Task-23:** Student List Output
* **Task-24:** Product List Output
* **Task-25:** Employee Search Output

---

## 📋 Task Summary

| Task    | Project         | Main Concept                        |
| ------- | --------------- | ----------------------------------- |
| Task-23 | Student List    | Array of Objects + DOM              |
| Task-24 | Product List    | Array of Objects + DOM              |
| Task-25 | Employee Search | Array of Objects + `filter()` + DOM |

---

## 📖 Concepts Covered

* JavaScript Arrays
* JavaScript Objects
* Array of Objects
* Object Properties
* `forEach()`
* `filter()`
* `includes()`
* `toLowerCase()`
* Template Literals
* DOM Selection
* DOM Manipulation
* Dynamic Data Rendering
* Search Functionality

---

### ✅ Day-12 Completed

**Day:** 12
**Topic:** Array Of Objects
**Tasks Completed:** 23, 24, 25
**Status:** Completed
