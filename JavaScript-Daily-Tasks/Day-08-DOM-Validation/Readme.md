# Day 08 – DOM Validation

This folder contains my **Day 08 JavaScript practice tasks** focused on **DOM manipulation, input validation, conditions, calculations, and displaying dynamic results** using JavaScript.

## 📌 Topics Covered

* DOM Manipulation
* Getting values from input fields
* `document.getElementById()`
* Number conversion using `Number()`
* Conditional Statements
* `if`, `else if`, and `else`
* Logical OR (`||`)
* Form/Input Validation
* Calculations using JavaScript
* Dynamic HTML output using `innerHTML`
* JavaScript Functions
* `onclick` Event
* Basic Result/Grade Calculation

---

## 📂 Task List

### Task 17 – Student Result Calculator

A simple **Student Result Calculator** that accepts marks for five subjects and calculates:

* Total Marks
* Average Marks
* Grade
* Pass/Fail based on subject marks

### 📝 Input Fields

The application accepts marks for:

1. Subject 1
2. Subject 2
3. Subject 3
4. Subject 4
5. Subject 5

### ⚙️ Validation

The application checks whether all subject marks have been entered.

If any required mark is missing:

```text
Please enter all marks
```

is displayed.

### 📊 Result Calculation

<img width="595" height="620" alt="Output_1" src="https://github.com/user-attachments/assets/abb7ae0f-b770-4657-902f-f00903116b53" />

<img width="641" height="658" alt="Output_2" src="https://github.com/user-attachments/assets/d83410aa-f393-4ba4-a99a-7b8ed78f6cdf" />

<img width="560" height="656" alt="Output_3" src="https://github.com/user-attachments/assets/7ce4fa95-3273-4b47-bd0b-3668d76cd032" />

The total is calculated as:

```text
Total = Subject 1 + Subject 2 + Subject 3 + Subject 4 + Subject 5
```

The average is calculated as:

```text
Average = Total / 5
```

### 🎓 Grade Logic

| Condition            | Grade   |
| -------------------- | ------- |
| Any subject below 35 | F Grade |
| Average > 90         | O Grade |
| Average >= 75        | A Grade |
| Average >= 60        | B Grade |
| Average >= 50        | C Grade |
| Average < 50         | D Grade |

---

## 🛠️ Technologies Used

* HTML5
* JavaScript
* DOM Manipulation

---

## 📁 Project Structure

```text
Task-17-Student-Result/
│
├── index.html
├── script.js
└── README.md
```

---

## 💡 What I Practiced

Through this task, I practiced taking values from HTML input elements, converting them into numbers, performing calculations, applying conditional logic, validating user input, and dynamically displaying the result on the webpage.

---

## 🚀 How to Run

1. Open the `Task-17-Student-Result` folder.
2. Open `index.html` in a browser.
3. Enter marks for all five subjects.
4. Click **Calculate Result**.
5. The total, average, and grade will be displayed below.

---

## 📌 Example

### Input

```text
Subject 1: 85
Subject 2: 78
Subject 3: 92
Subject 4: 88
Subject 5: 80
```

### Output

```text
Total Marks: 423
Average: 84.6
Grade: A Grade
```

---

## 👨‍💻 Author

**Praveen Kumar**

JavaScript Daily Tasks – Day 08
