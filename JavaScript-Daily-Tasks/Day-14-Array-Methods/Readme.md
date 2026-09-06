# Day-14: Array Methods

## 📌 Overview

This day focuses on commonly used **JavaScript Array Methods** for performing calculations, checking conditions, transforming data, and processing values stored in arrays.

The tasks demonstrate practical usage of array methods with **numbers, student marks, product prices, and employee salaries**.

These methods are useful for handling and processing data efficiently in real-world JavaScript applications.

---

## 🎯 Learning Objectives

* Understand commonly used JavaScript Array Methods.
* Perform mathematical operations on array values.
* Calculate student marks and results.
* Calculate product prices and totals.
* Process employee salary information.
* Use array methods to transform and calculate data.
* Practice working with Arrays of Objects.
* Display calculated results dynamically using the DOM.

---

## 🛠️ Technologies Used

* HTML5
* JavaScript
* DOM Manipulation

---

## 📂 Folder Structure

```text
Day-14-Array-Methods/
│
├── Task-27-Number-Operations/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
├── Task-28-Student-Marks/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
├── Task-29-Price-Calculator/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
└── Task-30-Employee-Salary/
    ├── index.html
    ├── script.js
    └── Output_Screenshots/
```

---

# 📚 Tasks

## 🔹 Task-27: Number Operations

### 📌 Description

Perform different operations on an array of numbers using JavaScript Array Methods.

The task focuses on processing numerical values and performing operations such as finding values, calculating results, and transforming array elements.

### 💡 Concepts Practiced

* Arrays
* Array Methods
* Number Operations
* `map()`
* `filter()`
* `reduce()`
* Mathematical Operations
* DOM Manipulation

### Example

```javascript
const numbers = [10, 20, 30, 40, 50];

const doubled = numbers.map((number) =>
    number * 2
);
```

The `map()` method creates a new array by applying an operation to every number.

---

## 🔹 Task-28: Student Marks

### 📌 Description

Create and process student marks using JavaScript.

The task works with student data and performs calculations or operations on their marks using JavaScript Array Methods.

### 💡 Concepts Practiced

* Arrays
* Objects
* Array of Objects
* Student Marks
* `map()`
* `filter()`
* `reduce()`
* Conditional Operations
* DOM Manipulation

### Example

```javascript
const students = [
    {
        name: "Praveen",
        mark: 85
    },
    {
        name: "Arun",
        mark: 75
    },
    {
        name: "Kumar",
        mark: 90
    }
];
```

Student marks can be processed using Array Methods to calculate totals, averages, or filter students based on their marks.

---

## 🔹 Task-29: Price Calculator

### 📌 Description

Create a **Price Calculator** using JavaScript Array Methods.

The task processes product prices and calculates the required price-related result from an array of products.

This demonstrates how Array Methods can be used to perform calculations on real-world data.

### 💡 Concepts Practiced

* Arrays
* Objects
* Array of Objects
* Product Prices
* `map()`
* `reduce()`
* Mathematical Operations
* Price Calculation
* DOM Manipulation

### Example

```javascript
const prices = [100, 200, 300, 400];

const total = prices.reduce((sum, price) =>
    sum + price, 0
);
```

The `reduce()` method can be used to calculate the total price.

---

## 🔹 Task-30: Employee Salary

### 📌 Description

Create and process an **Employee Salary** system using JavaScript Array Methods.

The task works with employee objects and their salary information to perform calculations and process employee salary data.

### 💡 Concepts Practiced

* Arrays
* Objects
* Array of Objects
* Employee Data
* Salary Calculation
* `map()`
* `filter()`
* `reduce()`
* Conditional Operations
* DOM Manipulation

### Example

```javascript
const employees = [
    {
        name: "Praveen",
        salary: 50000
    },
    {
        name: "Arun",
        salary: 40000
    }
];
```

Salary information can be processed using Array Methods to calculate totals or filter employees based on salary conditions.

---

# 🧠 Key Array Methods Learned

## 1. `map()`

The `map()` method creates a new array by transforming every element.

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

## 2. `filter()`

The `filter()` method creates a new array containing elements that satisfy a condition.

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

## 3. `reduce()`

The `reduce()` method reduces an array to a single value.

```javascript
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) =>
    sum + number, 0
);
```

**Output:**

```text
100
```

---

## 4. Combining Array Methods

Multiple Array Methods can be combined to perform more complex data processing.

Example:

```javascript
const result = numbers
    .filter((number) => number > 20)
    .map((number) => number * 2);
```

This first filters the numbers and then transforms the filtered values.

---

# 📸 Output Screenshots

Each task contains an **Output_Screenshots** folder containing the respective output screenshots.

* **Task-27:** Number Operations Output
* **Task-28:** Student Marks Output
* **Task-29:** Price Calculator Output
* **Task-30:** Employee Salary Output

---

# 📋 Task Summary

| Task    | Project           | Main Concept                      |
| ------- | ----------------- | --------------------------------- |
| Task-27 | Number Operations | Array Methods + Number Operations |
| Task-28 | Student Marks     | Array Methods + Student Data      |
| Task-29 | Price Calculator  | `reduce()` + Price Calculation    |
| Task-30 | Employee Salary   | Array Methods + Salary Processing |

---

# 📖 Concepts Covered

* JavaScript Arrays
* JavaScript Objects
* Array of Objects
* `map()`
* `filter()`
* `reduce()`
* Mathematical Operations
* Conditional Operations
* Data Transformation
* Number Processing
* Student Marks Processing
* Price Calculation
* Employee Salary Processing
* Template Literals
* DOM Selection
* DOM Manipulation
* Dynamic Data Display

---

### ✅ Day-14 Completed

**Day:** 14
**Topic:** Array Methods
**Tasks Completed:** 27, 28, 29, 30
**Status:** Completed
