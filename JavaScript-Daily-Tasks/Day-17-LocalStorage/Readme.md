# Day-17: LocalStorage

## 📌 Overview

This day focuses on **LocalStorage in JavaScript**.

The tasks demonstrate how JavaScript can store, retrieve, update, and remove data from the browser using the `localStorage` API.

These concepts are useful for creating websites that can remember user information, preferences, and settings even after refreshing or reopening the webpage.

---

## 🎯 Learning Objectives

* Understand the concept of LocalStorage.
* Store data in the browser.
* Retrieve stored data using JavaScript.
* Remove specific data from LocalStorage.
* Save and remember usernames.
* Create a save and remove functionality.
* Store user preferences such as themes.
* Use `localStorage.setItem()`.
* Use `localStorage.getItem()`.
* Use `localStorage.removeItem()`.
* Practice DOM manipulation with LocalStorage.

---

## 🛠️ Technologies Used

* HTML5
* JavaScript
* DOM Manipulation
* LocalStorage API

---

## 📂 Folder Structure

```text
Day-17-LocalStorage/
│
├── Task-38-Save-Username/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
├── Task-39-Save-Remove-Name/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
└── Task-40-Remember-Theme/
    ├── index.html
    ├── script.js
    └── Output_Screenshots/
```

---

# 📚 Tasks

## 🔹 Task-38: Save Username

### 📌 Description

Create a simple application to **save a username using LocalStorage**.

The username entered by the user is stored in the browser. Even after refreshing the webpage, the stored username can be retrieved and displayed.

### 💡 Concepts Practiced

* LocalStorage
* `setItem()`
* `getItem()`
* Input Handling
* DOM Manipulation
* Button Events
* String Storage

### Example

```javascript
localStorage.setItem("username", username);

const savedUsername = localStorage.getItem("username");

console.log(savedUsername);
```

The username is stored in the browser and can be retrieved whenever required.

---

## 🔹 Task-39: Save & Remove Name

### 📌 Description

Create an application where the user can **save a name and remove the saved name** from LocalStorage.

The Save button stores the entered name, while the Remove button deletes the stored name.

### 💡 Concepts Practiced

* `localStorage.setItem()`
* `localStorage.getItem()`
* `localStorage.removeItem()`
* Button Events
* Input Handling
* DOM Manipulation
* Data Removal

### Example

```javascript
localStorage.setItem("name", name);

const savedName = localStorage.getItem("name");

localStorage.removeItem("name");
```

This task demonstrates how data can be both stored and removed from browser storage.

---

## 🔹 Task-40: Remember Theme

### 📌 Description

Create a **Theme Remembering Application** using LocalStorage.

The selected theme is stored in the browser. When the webpage is refreshed, the previously selected theme can be retrieved and applied automatically.

For example, the user can switch between **Light Mode** and **Dark Mode**.

### 💡 Concepts Practiced

* LocalStorage
* Theme Switching
* `setItem()`
* `getItem()`
* DOM Manipulation
* CSS Classes
* Click Events
* User Preferences

### Example

```javascript
localStorage.setItem("theme", "dark");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}
```

This allows the website to remember the user's theme preference.

---

# 🧠 Key Concepts Learned

## 1. LocalStorage

`localStorage` allows websites to store data directly in the browser.

The stored data remains available even after refreshing or reopening the webpage.

```javascript
localStorage.setItem("username", "Praveen");
```

---

## 2. `setItem()`

The `setItem()` method is used to store data in LocalStorage.

### Syntax

```javascript
localStorage.setItem("key", "value");
```

### Example

```javascript
localStorage.setItem("username", "Praveen");
```

Here:

* `username` → Key
* `Praveen` → Value

---

## 3. `getItem()`

The `getItem()` method retrieves previously stored data.

```javascript
const username = localStorage.getItem("username");

console.log(username);
```

Output:

```text
Praveen
```

---

## 4. `removeItem()`

The `removeItem()` method removes a specific item from LocalStorage.

```javascript
localStorage.removeItem("username");
```

The stored username will be deleted.

---

## 5. Storing User Preferences

LocalStorage can be used to remember user preferences such as:

* Theme
* Username
* Language
* Selected options
* Website settings

Example:

```javascript
localStorage.setItem("theme", "dark");
```

---

## 6. Checking Stored Data

Before displaying stored information, we can check whether the data exists.

```javascript
const username = localStorage.getItem("username");

if (username) {
    console.log("Welcome " + username);
}
```

---

# 📸 Output Screenshots

Each task contains an **Output_Screenshots** folder containing the respective output screenshots.

* **Task-38:** Save Username Output
* **Task-39:** Save & Remove Name Output
* **Task-40:** Remember Theme Output

---

# 📋 Task Summary

| Task    | Project            | Main Concept                    |
| ------- | ------------------ | ------------------------------- |
| Task-38 | Save Username      | `setItem()` + `getItem()`       |
| Task-39 | Save & Remove Name | `setItem()` + `removeItem()`    |
| Task-40 | Remember Theme     | LocalStorage + Theme Preference |

---

# 📖 Concepts Covered

* LocalStorage
* Browser Storage
* `localStorage`
* `setItem()`
* `getItem()`
* `removeItem()`
* Input Handling
* Button Events
* Click Events
* DOM Manipulation
* Theme Switching
* User Preferences
* Data Persistence
* Conditional Statements
* CSS Classes
* JavaScript Storage API

---

### ✅ Day-17 Completed

**Day:** 17
**Topic:** LocalStorage
**Tasks Completed:** 38, 39, 40
**Status:** Completed
