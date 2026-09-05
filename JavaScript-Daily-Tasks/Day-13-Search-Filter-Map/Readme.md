# Day-13: Search, Filter & Map

## 📌 Overview

This day focuses on important JavaScript array methods and practical data-handling techniques using **Search, Filter, and Map**.

The tasks demonstrate how to search through data, filter products based on conditions, and transform student data using the `map()` method.

These concepts are commonly used when working with dynamic lists, search functionality, product filtering, and data transformation in web applications.

---

## 🎯 Learning Objectives

* Understand the `filter()` method in JavaScript.
* Implement a product search functionality.
* Filter products based on their price.
* Understand the `map()` method.
* Transform data from an Array of Objects.
* Display processed data dynamically using the DOM.
* Practice combining JavaScript arrays with DOM manipulation.

---

## 🛠️ Technologies Used

* HTML5
* JavaScript
* DOM Manipulation

---

## 📂 Folder Structure

```text
Day-13-Search-Filter-Map/
│
├── Task-26-Product-Search/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
├── Task-27-Price-Filter/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
└── Task-28-Student-Map/
    ├── index.html
    ├── script.js
    └── Output_Screenshots/
```

---

# 📚 Tasks

## 🔹 Task-26: Product Search

### 📌 Description

Create a **Product Search** functionality using JavaScript.

The user can enter a product name in the search field, and the matching products are displayed dynamically on the webpage.

The task uses an array of product objects and the `filter()` method to search for matching products.

### 💡 Concepts Practiced

* Arrays
* Objects
* Array of Objects
* `filter()`
* `includes()`
* `toLowerCase()`
* Search Functionality
* DOM Manipulation
* Dynamic Content Display

### Example

```javascript
const products = [
    {
        name: "Laptop",
        price: 55000
    },
    {
        name: "Mobile",
        price: 25000
    },
    {
        name: "Headphones",
        price: 3000
    }
];
```

Search can be performed using:

```javascript
const result = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
);
```

---

## 🔹 Task-27: Price Filter

### 📌 Description

Create a **Price Filter** functionality using JavaScript.

The products are filtered based on their price, and only the products that satisfy the given price condition are displayed.

This task helps understand how `filter()` can be used to select specific objects from an array based on a condition.

### 💡 Concepts Practiced

* Arrays
* Objects
* Array of Objects
* `filter()`
* Comparison Operators
* Conditional Filtering
* DOM Manipulation
* Dynamic Content Display

### Example

```javascript
const products = [
    {
        name: "Laptop",
        price: 55000
    },
    {
        name: "Mobile",
        price: 25000
    },
    {
        name: "Mouse",
        price: 800
    }
];
```

Example price filtering:

```javascript
const result = products.filter((product) =>
    product.price <= 30000
);
```

This returns products whose price is less than or equal to ₹30,000.

---

## 🔹 Task-28: Student Map

### 📌 Description

Create a **Student Map** functionality using JavaScript.

The task uses the `map()` method to iterate through an array of student objects and transform the required student information into a new array.

The processed data is then displayed dynamically on the webpage.

### 💡 Concepts Practiced

* Arrays
* Objects
* Array of Objects
* `map()`
* Data Transformation
* Template Literals
* DOM Manipulation
* Dynamic Content Display

### Example

```javascript
const students = [
    {
        name: "Praveen",
        mark: 85
    },
    {
        name: "Arun",
        mark: 78
    }
];
```

Using `map()`:

```javascript
const studentNames = students.map((student) =>
    student.name
);
```

The `map()` method creates a new array containing the transformed values.

---

# 🧠 Key Concepts Learned

## 1. `filter()`

The `filter()` method creates a new array containing elements that satisfy a specified condition.

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.filter((number) =>
    number > 20
);
```

**Output:**

```text
[30, 40]
```

---

## 2. `map()`

The `map()` method creates a new array by transforming every element in the original array.

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.map((number) =>
    number * 2
);
```

**Output:**

```text
[2, 4, 6, 8]
```

---

## 3. `includes()`

The `includes()` method checks whether a string contains a specific value.

```javascript
"Laptop".toLowerCase().includes("lap");
```

**Output:**

```text
true
```

---

## 4. `toLowerCase()`

The `toLowerCase()` method converts text into lowercase and is useful for creating case-insensitive searches.

```javascript
const searchValue = "LAPTOP";

searchValue.toLowerCase();
```

**Output:**

```text
laptop
```

---

## 5. Search Functionality

Search functionality can be implemented by combining:

* `filter()`
* `includes()`
* `toLowerCase()`

Example:

```javascript
const result = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
);
```

---

## 6. Data Transformation

The `map()` method can be used to transform an Array of Objects into a new array containing only the required information.

```javascript
const names = students.map((student) =>
    student.name
);
```

---

# 📸 Output Screenshots

Each task contains an **Output_Screenshots** folder containing the respective output screenshots.

* **Task-26:** Product Search Output
* **Task-27:** Price Filter Output
* **Task-28:** Student Map Output

---

# 📋 Task Summary

| Task    | Project        | Main Concept                  |
| ------- | -------------- | ----------------------------- |
| Task-26 | Product Search | `filter()` + Search           |
| Task-27 | Price Filter   | `filter()` + Conditions       |
| Task-28 | Student Map    | `map()` + Data Transformation |

---

# 📖 Concepts Covered

* JavaScript Arrays
* JavaScript Objects
* Array of Objects
* `filter()`
* `map()`
* `includes()`
* `toLowerCase()`
* Comparison Operators
* Conditional Filtering
* Search Functionality
* Data Transformation
* Template Literals
* DOM Selection
* DOM Manipulation
* Dynamic Content Rendering

---

### ✅ Day-13 Completed

**Day:** 13
**Topic:** Search, Filter & Map
**Tasks Completed:** 26, 27, 28
**Status:** Completed
