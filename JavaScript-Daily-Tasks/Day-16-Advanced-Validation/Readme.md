# Day-16: Advanced Validation

## 📌 Overview

This day focuses on **Advanced Form Validation in JavaScript**.

The tasks demonstrate how JavaScript can be used to validate user input, check login credentials, count characters in real time, and evaluate password strength based on different conditions.

These concepts are useful for creating secure, user-friendly, and interactive web forms.

---

## 🎯 Learning Objectives

* Understand advanced form validation using JavaScript.
* Validate login form inputs.
* Check username and password conditions.
* Count characters dynamically.
* Validate password requirements.
* Create a password strength indicator.
* Use conditional statements for validation.
* Handle form and input events.
* Display validation messages dynamically using the DOM.
* Practice regular expressions and string methods.

---

## 🛠️ Technologies Used

* HTML5
* JavaScript
* DOM Manipulation
* Form Validation

---

## 📂 Folder Structure

```text
Day-16-Advanced-Validation/
│
├── Task-35-Login-Validation/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
├── Task-36-Character-Counte/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
└── Task-37-Password-Strength/
    ├── index.html
    ├── script.js
    └── Output_Screenshots/
```

---

# 📚 Tasks

## 🔹 Task-35: Login Validation

### 📌 Description

Create a **Login Form Validation** using JavaScript.

The form validates user input before allowing the login process to continue. Different conditions are checked to ensure that the required fields contain valid information.

### 💡 Concepts Practiced

* Form Validation
* Input Validation
* DOM Selection
* `value`
* `trim()`
* Conditional Statements
* `if...else`
* Error Messages
* Form Events
* DOM Manipulation

### Example

```javascript
const username = usernameInput.value.trim();
const password = passwordInput.value.trim();

if (username === "") {
    message.textContent = "Username is required";
} else if (password === "") {
    message.textContent = "Password is required";
} else {
    message.textContent = "Login Successful";
}
```

The form checks the entered values and displays the appropriate validation message.

---

## 🔹 Task-36: Character Counter

### 📌 Description

Create a **Character Counter** using JavaScript.

The number of characters entered by the user is counted dynamically while typing in the input field or textarea.

This task demonstrates how JavaScript can respond to input events and update the webpage in real time.

### 💡 Concepts Practiced

* Input Events
* `input` Event
* String `length`
* DOM Manipulation
* Dynamic Content Update
* Textarea/Input Handling
* Real-Time Validation

### Example

```javascript
input.addEventListener("input", () => {
    count.textContent = input.value.length;
});
```

The character count is updated whenever the user enters or removes text.

---

## 🔹 Task-37: Password Strength

### 📌 Description

Create a **Password Strength Checker** using JavaScript.

The entered password is evaluated based on different conditions such as password length, uppercase letters, lowercase letters, numbers, and special characters.

The result indicates whether the password is weak, medium, or strong.

### 💡 Concepts Practiced

* Password Validation
* String Methods
* Conditional Statements
* Regular Expressions
* `length`
* `test()`
* Input Events
* DOM Manipulation
* Password Strength Evaluation

### Example

```javascript
let strength = 0;

if (password.length >= 8) {
    strength++;
}

if (/[A-Z]/.test(password)) {
    strength++;
}

if (/[a-z]/.test(password)) {
    strength++;
}

if (/[0-9]/.test(password)) {
    strength++;
}

if (/[^A-Za-z0-9]/.test(password)) {
    strength++;
}
```

The password strength can then be determined based on the number of conditions satisfied.

---

# 🧠 Key Concepts Learned

## 1. Form Validation

JavaScript can validate form inputs before processing the submitted data.

```javascript
if (username === "") {
    message.textContent = "Username is required";
}
```

---

## 2. `trim()`

The `trim()` method removes unnecessary spaces from the beginning and end of a string.

```javascript
const username = input.value.trim();
```

This is useful when validating user input.

---

## 3. `length`

The `length` property returns the number of characters in a string.

```javascript
const count = text.length;
```

It can be used for character counting and password length validation.

---

## 4. `input` Event

The `input` event occurs whenever the value of an input element changes.

```javascript
input.addEventListener("input", () => {
    console.log(input.value);
});
```

This is useful for real-time validation and character counters.

---

## 5. Regular Expressions

Regular expressions can be used to check whether a string contains specific types of characters.

### Uppercase Letter

```javascript
/[A-Z]/
```

### Lowercase Letter

```javascript
/[a-z]/
```

### Number

```javascript
/[0-9]/
```

### Special Character

```javascript
/[^A-Za-z0-9]/
```

---

## 6. `test()`

The `test()` method checks whether a regular expression matches a string.

```javascript
/[A-Z]/.test(password);
```

It returns:

```text
true
```

or

```text
false
```

---

## 7. Conditional Validation

Conditions can be combined to create advanced validation logic.

```javascript
if (password.length >= 8) {
    console.log("Valid Length");
} else {
    console.log("Password is too short");
}
```

---

# 📸 Output Screenshots

Each task contains an **Output_Screenshots** folder containing the respective output screenshots.

* **Task-35:** Login Validation Output
* **Task-36:** Character Counter Output
* **Task-37:** Password Strength Output

---

# 📋 Task Summary

| Task    | Project           | Main Concept                     |
| ------- | ----------------- | -------------------------------- |
| Task-35 | Login Validation  | Form Validation                  |
| Task-36 | Character Counter | Input Event + `length`           |
| Task-37 | Password Strength | Validation + Regular Expressions |

---

# 📖 Concepts Covered

* Form Validation
* Input Validation
* DOM Selection
* DOM Manipulation
* Form Events
* Input Events
* `value`
* `trim()`
* `length`
* `input`
* `if...else`
* Conditional Statements
* Regular Expressions
* `test()`
* Password Validation
* Password Strength
* Real-Time Validation
* Dynamic Error Messages
* Dynamic Content Updates

---

### ✅ Day-16 Completed

**Day:** 16
**Topic:** Advanced Validation
**Tasks Completed:** 35, 36, 37
**Status:** Completed
