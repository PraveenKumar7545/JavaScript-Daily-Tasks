# Day-15: DOM Events

## 📌 Overview

This day focuses on **DOM Events in JavaScript** and how user interactions can be handled to dynamically change webpage content.

The tasks demonstrate how to respond to user actions such as **button clicks**, update text, create a counter, and show or hide a password.

These concepts are important for creating interactive and dynamic web applications.

---

## 🎯 Learning Objectives

* Understand DOM Events in JavaScript.
* Handle user interactions using event listeners.
* Change webpage content dynamically.
* Create a basic counter application.
* Show and hide password input values.
* Practice event-driven programming.
* Manipulate HTML elements using JavaScript.
* Understand how user actions trigger JavaScript functions.

---

## 🛠️ Technologies Used

* HTML5
* JavaScript
* DOM Manipulation
* DOM Events

---

## 📂 Folder Structure

```text
Day-15-DOM-Events/
│
├── Task-32-Text-Change/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
├── Task-33-Counter-App/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
└── Task-34-Show-Hide-Password/
    ├── index.html
    ├── script.js
    └── Output_Screenshots/
```

---

# 📚 Tasks

## 🔹 Task-32: Text Change

### 📌 Description

Create a webpage where clicking a button changes the text displayed on the page.

This task demonstrates how JavaScript can respond to a **click event** and modify the content of an HTML element dynamically.

### 💡 Concepts Practiced

* DOM Selection
* Button Click Event
* `onclick`
* `addEventListener()`
* `textContent`
* Dynamic Content Change
* Event Handling

### Example

```javascript
const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", () => {
    text.textContent = "Text Changed!";
});
```

When the button is clicked, the existing text is replaced with new text.

---

## 🔹 Task-33: Counter App

### 📌 Description

Create a simple **Counter Application** using JavaScript DOM Events.

The counter value changes based on user interaction with buttons.

This task helps understand how event handling can be used to update numerical values dynamically.

### 💡 Concepts Practiced

* DOM Events
* Button Click Events
* Variables
* Increment Operation
* Decrement Operation
* DOM Manipulation
* Dynamic Number Display

### Example

```javascript
let count = 0;

increaseButton.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});
```

The counter value is updated whenever the user interacts with the button.

---

## 🔹 Task-34: Show / Hide Password

### 📌 Description

Create a **Show / Hide Password** functionality using JavaScript.

The password input type is changed dynamically when the user interacts with the button, allowing the password to be either visible or hidden.

### 💡 Concepts Practiced

* DOM Selection
* Click Events
* Input Element Manipulation
* `type` Property
* Conditional Statements
* Show / Hide Functionality
* Event Handling

### Example

```javascript
button.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

});
```

Clicking the button switches the password between hidden and visible states.

---

# 🧠 Key Concepts Learned

## 1. DOM Events

DOM Events allow JavaScript to respond to actions performed by the user.

Common events include:

```text
click
input
change
submit
mouseover
keydown
keyup
```

---

## 2. `onclick`

The `onclick` event can be used to execute JavaScript when an element is clicked.

```javascript
button.onclick = () => {
    console.log("Button Clicked");
};
```

---

## 3. `addEventListener()`

`addEventListener()` is used to attach an event handler to an HTML element.

```javascript
button.addEventListener("click", () => {
    console.log("Button Clicked");
});
```

It provides a flexible way to handle different types of events.

---

## 4. `textContent`

The `textContent` property is used to change the text inside an HTML element.

```javascript
text.textContent = "Hello JavaScript!";
```

---

## 5. Event-Driven Programming

JavaScript can execute specific code when an event occurs.

For example:

```text
User Click
     ↓
Event Triggered
     ↓
JavaScript Function
     ↓
DOM Updated
```

---

## 6. Input Property Manipulation

HTML input properties can be modified dynamically using JavaScript.

For password visibility:

```javascript
password.type = "text";
```

To hide the password again:

```javascript
password.type = "password";
```

---

# 📸 Output Screenshots

Each task contains an **Output_Screenshots** folder containing the respective output screenshots.

* **Task-32:** Text Change Output
* **Task-33:** Counter App Output
* **Task-34:** Show / Hide Password Output

---

# 📋 Task Summary

| Task    | Project              | Main Concept                |
| ------- | -------------------- | --------------------------- |
| Task-32 | Text Change          | Click Event + DOM           |
| Task-33 | Counter App          | Events + Dynamic Value      |
| Task-34 | Show / Hide Password | Events + Input Manipulation |

---

# 📖 Concepts Covered

* DOM
* DOM Selection
* DOM Manipulation
* DOM Events
* Event Listeners
* `onclick`
* `addEventListener()`
* `click` Event
* `textContent`
* Variables
* Increment and Decrement
* Conditional Statements
* Input Properties
* Password Visibility
* Dynamic Content Updates
* Event-Driven Programming

---

### ✅ Day-15 Completed

**Day:** 15
**Topic:** DOM Events
**Tasks Completed:** 32, 33, 34
**Status:** Completed
