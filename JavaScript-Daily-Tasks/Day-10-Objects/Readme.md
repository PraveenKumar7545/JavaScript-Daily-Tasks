# 🎓 Task-19: Student Object

A simple **JavaScript Student Object** that stores student information such as **name, age, course, and mark**, and displays the details on the webpage when the user clicks the **Display Student** button.

<br>

## 📌 Task Description

Create a Student Information application using **HTML and JavaScript Objects**.

The student details are stored inside a JavaScript object. When the user clicks the **Display Student** button, the application displays the student information dynamically on the webpage.

<br>

## 🚀 Features

* Creates a student object using JavaScript
* Stores student details as object properties
* Stores:

  * Student Name
  * Age
  * Course
  * Mark
* Displays student information using a button
* Uses a JavaScript function
* Uses DOM manipulation
* Uses `innerHTML` to display the output
* Uses dot notation to access object properties

<br>

## 🛠️ Technologies Used

* HTML5
* JavaScript
* JavaScript Objects
* Object Properties
* Functions
* DOM Manipulation
* `getElementById()`
* `innerHTML`
* `onclick` Event
* VS Code
* Git & GitHub

<br>

## 📷 Output
<img width="742" height="445" alt="Output_1" src="https://github.com/user-attachments/assets/df1548cd-6c76-4ea1-81cc-55e329a66552" />

<img width="707" height="352" alt="Output_2" src="https://github.com/user-attachments/assets/41b402ed-d12d-43bb-af03-4b03771964f4" />


<br>

## 📂 Project Structure

```text
Task-19-Student-Object/
│
├── index.html
├── script.js
├── README.md
│
└── Output_Screenshot/
    └── output.png
```

<br>

## 💻 How It Works

1. A student object is created using JavaScript.
2. The object stores the student's name, age, course, and mark.
3. The user clicks the **Display Student** button.
4. The `displayStudent()` function is called using the `onclick` event.
5. JavaScript selects the output element using `getElementById()`.
6. The student object properties are accessed using dot notation.
7. The student information is inserted into the webpage using `innerHTML`.
8. The student details are displayed dynamically on the webpage.

<br>

## 📊 Student Object

The student object contains the following information:

```javascript
let student = {
    name: "Praveen",
    age: 22,
    course: "JavaScript",
    mark: 85
};
```

<br>

### Object Properties

| Property | Value      |
| -------- | ---------- |
| `name`   | Praveen    |
| `age`    | 22         |
| `course` | JavaScript |
| `mark`   | 85         |

<br>

## 🖥️ Example Output

```text
Student Information

[ Display Student ]

Name: Praveen
Age: 22
Course: JavaScript
Mark: 85
```

<br>

## 🧠 JavaScript Concepts Practiced

### JavaScript Object

```javascript
let student = {
    name: "Praveen",
    age: 22,
    course: "JavaScript",
    mark: 85
};
```

A JavaScript object stores data using **key-value pairs**.

<br>

### Accessing Object Properties

```javascript
student.name
student.age
student.course
student.mark
```

The dot (`.`) notation is used to access the values stored inside the object.

<br>

### Function

```javascript
function displayStudent() {

    let output = document.getElementById("output");

    output.innerHTML =
        "Name: " + student.name +
        "<br>Age: " + student.age +
        "<br>Course: " + student.course +
        "<br>Mark: " + student.mark;
}
```

The function displays the student information when the button is clicked.

<br>

### DOM Manipulation

```javascript
document.getElementById("output");
```

`getElementById()` is used to select the HTML element where the output should be displayed.

<br>

### `innerHTML`

```javascript
output.innerHTML = "Name: " + student.name;
```

`innerHTML` is used to insert and display dynamic content inside the HTML element.

<br>

## 📸 Output Screenshot

The output screenshot is available inside the `Output_Screenshot` folder.

<br>

## 🎯 Learning Outcome

Through this task, I practiced:

* Creating JavaScript objects
* Creating object properties
* Storing data using key-value pairs
* Accessing object properties using dot notation
* Creating and calling JavaScript functions
* Using the `onclick` event
* Getting HTML elements using `getElementById()`
* Performing DOM manipulation
* Using `innerHTML`
* Displaying dynamic object data on a webpage

<br>

## 👨‍💻 Author

**Praveen Kumar M**

GitHub: **PraveenKumar7545**

<br>

⭐ This project is part of my **JavaScript Daily Tasks** practice series.
