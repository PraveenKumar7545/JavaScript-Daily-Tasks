# Day-19: Fetch API

## 📌 Overview

This day focuses on using the **Fetch API in JavaScript** to work with data from external APIs.

The tasks demonstrate how JavaScript can fetch user data, search through API results, handle loading states, and display error messages when something goes wrong.

These concepts are important for building dynamic web applications that communicate with backend services and external APIs.

---

## 🎯 Learning Objectives

* Understand the concept of APIs.
* Understand the JavaScript Fetch API.
* Fetch data from an external API.
* Display API data dynamically.
* Work with JSON data.
* Search fetched data.
* Handle loading states.
* Handle API errors.
* Use Promises with Fetch.
* Practice `async` and `await`.
* Manipulate API response data using JavaScript.

---

## 🛠️ Technologies Used

* HTML5
* JavaScript
* Fetch API
* REST API
* JSON
* DOM Manipulation
* Async/Await

---

## 📂 Folder Structure

```text
Day-19-Fetch-API/
│
├── Task-44-Fetch-Users/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
├── Task-45-Fetch-Search/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
└── Task-46-Loading-Error/
    ├── index.html
    ├── script.js
    └── Output_Screenshots/
```

---

# 📚 Tasks

## 🔹 Task-44: Fetch Users

### 📌 Description

Create an application to **fetch user information from an external API** using JavaScript.

The fetched user data is converted from JSON format and displayed dynamically on the webpage.

### 💡 Concepts Practiced

* Fetch API
* API Requests
* JSON
* `fetch()`
* `async`
* `await`
* DOM Manipulation
* Arrays and Objects
* Dynamic HTML

### Example

```javascript
async function fetchUsers() {
    const response = await fetch("API_URL");
    const users = await response.json();

    console.log(users);
}
```

The API response is converted into JavaScript data and can then be displayed on the webpage.

---

## 🔹 Task-45: Fetch Search

### 📌 Description

Create a **Search Application using Fetch API**.

The application fetches data from an API and allows the user to search for specific users or information from the fetched data.

The search results are displayed dynamically based on the entered search value.

### 💡 Concepts Practiced

* Fetch API
* API Data
* Search Functionality
* Input Events
* Array Methods
* `filter()`
* String Methods
* DOM Manipulation
* Dynamic Results

### Example

```javascript
const result = users.filter(function(user) {
    return user.name.toLowerCase().includes(searchValue.toLowerCase());
});
```

The fetched data can be filtered based on the user's search input.

---

## 🔹 Task-46: Loading & Error

### 📌 Description

Create an application that handles **Loading and Error States** while fetching data from an API.

A loading message is displayed while the API request is being processed. If the request fails, an appropriate error message is displayed.

### 💡 Concepts Practiced

* Fetch API
* Loading State
* Error Handling
* `try...catch`
* `async`
* `await`
* HTTP Response Handling
* DOM Manipulation
* Conditional Statements

### Example

```javascript
try {
    loading.textContent = "Loading...";

    const response = await fetch("API_URL");

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    loading.textContent = "";
} catch (error) {
    loading.textContent = "Something went wrong";
}
```

This improves the user experience by informing the user when data is loading or when an API request fails.

---

# 🧠 Key Concepts Learned

## 1. Fetch API

The `fetch()` method is used to make network requests and retrieve data from an API.

```javascript
fetch("API_URL");
```

It returns a Promise containing the server response.

---

## 2. `async` and `await`

`async` and `await` make asynchronous JavaScript easier to understand and write.

```javascript
async function getData() {
    const response = await fetch("API_URL");
    const data = await response.json();

    console.log(data);
}
```

---

## 3. JSON

APIs commonly return data in **JSON format**.

JavaScript can convert the response into usable data using:

```javascript
const data = await response.json();
```

---

## 4. API Response

After fetching data, the response can be checked before processing it.

```javascript
if (!response.ok) {
    throw new Error("Request failed");
}
```

This helps detect unsuccessful HTTP responses.

---

## 5. Search and Filter

Fetched API data can be searched using JavaScript array methods.

```javascript
const result = users.filter(function(user) {
    return user.name.includes(searchValue);
});
```

This allows users to find specific information from the API results.

---

## 6. Loading State

A loading message can be displayed while waiting for the API response.

```javascript
loading.textContent = "Loading...";
```

After the data is received, the loading message can be removed.

---

## 7. Error Handling

The `try...catch` statement can be used to handle errors during API requests.

```javascript
try {
    const response = await fetch("API_URL");
} catch (error) {
    console.log("Error occurred");
}
```

This prevents the application from failing silently.

---

# 📸 Output Screenshots

Each task contains an **Output_Screenshots** folder containing the respective output screenshots.

* **Task-44:** Fetch Users Output
* **Task-45:** Fetch Search Output
* **Task-46:** Loading & Error Output

---

# 📋 Task Summary

| Task    | Project         | Main Concept                    |
| ------- | --------------- | ------------------------------- |
| Task-44 | Fetch Users     | Fetch API + JSON                |
| Task-45 | Fetch Search    | Fetch API + Search + `filter()` |
| Task-46 | Loading & Error | Loading State + Error Handling  |

---

# 📖 Concepts Covered

* API
* Fetch API
* REST API
* HTTP Requests
* JSON
* `fetch()`
* `async`
* `await`
* Promises
* `response.json()`
* `response.ok`
* `try...catch`
* Error Handling
* Loading State
* Search Functionality
* `filter()`
* String Methods
* Input Events
* DOM Manipulation
* Dynamic HTML
* API Data Handling

---

### ✅ Day-19 Completed

**Day:** 19
**Topic:** Fetch API
**Tasks Completed:** 44, 45, 46
**Status:** Completed
