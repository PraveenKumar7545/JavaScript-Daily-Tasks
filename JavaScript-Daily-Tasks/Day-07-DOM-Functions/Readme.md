# 🧮 JavaScript Daily Tasks — Day 07: DOM & Functions

This day focuses on practicing **JavaScript functions and DOM manipulation** by creating a simple calculator that performs multiple mathematical operations. The task helps build an understanding of functions, user input, DOM selection, type conversion, conditions, and dynamic output.

## 📌 Tasks

| Task        | Description                                                                   | Concepts                                                                               |
| ----------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Task 16** | Perform Addition, Subtraction, Multiplication, and Division using two numbers | Functions, DOM, `getElementById()`, `Number()`, `if` condition, `innerHTML`, `onclick` |

## 📂 Task Structure

```text
Day-07-DOM-Functions/
│
├── Task-16-Multiple-Operations/
│   ├── Output_Screenshots/
│   │   ├── Output_1.png
│   │   ├── Output_2.png
│   │   ├── Output_3.png
│   │   ├── Output_4.png
│   │   └── Output_5.png
│   │
│   ├── index.html
│   └── script.js
│
└── README.md
```

## 🔢 Task 16 — Multiple Operations

This task creates a simple calculator where the user enters two numbers and selects an operation.

The calculator supports four operations:

```text
Addition
Subtraction
Multiplication
Division
```

The result is displayed dynamically on the webpage.

## ⚙️ How It Works

1. The user enters the **First Number**.
2. The user enters the **Second Number**.
3. The user selects one of the operation buttons.
4. The corresponding JavaScript function is executed.
5. The input values are retrieved using `document.getElementById()`.
6. The values are converted from strings to numbers using `Number()`.
7. The selected mathematical operation is performed.
8. The result is displayed dynamically using `innerHTML`.

## ➕ Addition

The `add()` function adds the two entered numbers.

```javascript
const result = num1 + num2;
```

Example:

```text
First Number: 10
Second Number: 5

Addition = 15
```

## ➖ Subtraction

The `subtract()` function subtracts the second number from the first number.

```javascript
const result = num1 - num2;
```

Example:

```text
First Number: 10
Second Number: 5

Subtraction = 5
```

## ✖️ Multiplication

The `multiply()` function multiplies the two entered numbers.

```javascript
const result = num1 * num2;
```

Example:

```text
First Number: 10
Second Number: 5

Multiplication = 50
```

## ➗ Division

The `divide()` function divides the first number by the second number.

```javascript
const result = num1 / num2;
```

The task also includes a condition to prevent division by zero.

```javascript
if (num2 === 0) {
    output.innerHTML = "Cannot divide by zero";
}
```

Example:

```text
First Number: 10
Second Number: 2

Division = 5
```

If the second number is `0`:

```text
Cannot divide by zero
```

## 🧠 Concepts Practiced

* JavaScript Functions
* DOM Manipulation
* `document.getElementById()`
* `onclick` Event
* User Input
* `Number()` Type Conversion
* Variables
* Mathematical Operators
* `if...else` Condition
* `innerHTML`
* Dynamic Output
* Basic Error Handling

## 🎯 Learning Goals

* Understand how JavaScript functions work.
* Learn how to connect HTML buttons with JavaScript functions.
* Practice retrieving values from HTML input elements.
* Understand string-to-number conversion using `Number()`.
* Perform mathematical operations using JavaScript.
* Dynamically update HTML content using DOM manipulation.
* Learn how to handle division-by-zero conditions.
* Improve basic JavaScript problem-solving skills.

## 🚀 Technologies Used

* HTML5
* JavaScript
* DOM Manipulation

## 🖥️ User Interface

The webpage contains:

```text
Multiple Operations

First Number:  [          ]

Second Number: [          ]

[ Add ] [ Subtract ] [ Multiply ] [ Divide ]

Output

Enter two numbers and select an operation
```

## 📸 Output Screenshots

The `Output_Screenshots` folder contains screenshots demonstrating the different operations and their corresponding outputs.
Examples include:

* Addition output
* Subtraction output
* Multiplication output
* Division output
* Division by zero validation


<img width="660" height="512" alt="Output1" src="https://github.com/user-attachments/assets/50a3eeb9-30c9-42c1-af87-f4ec2b806b84" />
<img width="640" height="513" alt="Output2" src="https://github.com/user-attachments/assets/749a366c-63bd-4ad8-98a8-9c0e8b6a2393" />
<img width="607" height="517" alt="Output3" src="https://github.com/user-attachments/assets/c52b52e8-1204-4d78-839d-fe8aa949a8a4" />
<img width="632" height="495" alt="Output4" src="https://github.com/user-attachments/assets/82779867-ebca-42f1-bbbf-0b280193b8d9" />
<img width="642" height="522" alt="Output5" src="https://github.com/user-attachments/assets/dfb7af3f-4748-4779-9963-fc0d99c0b0d7" />


## 📁 Files

### `index.html`

Contains the webpage structure, input fields, operation buttons, and output element.

### `script.js`

Contains the JavaScript functions responsible for performing the mathematical operations and displaying the results.

## ✅ Day 07 Completed

**Task 16 — Multiple Operations completed successfully ✅**

**Day 07 Completed Successfully 🎯**
