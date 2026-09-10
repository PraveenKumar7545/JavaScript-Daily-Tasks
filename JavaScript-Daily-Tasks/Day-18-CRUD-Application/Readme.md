# Day-18: CRUD Application

## 📌 Overview

This day focuses on building a basic **CRUD Application using JavaScript**.

CRUD stands for:

* **C** → Create
* **R** → Read
* **U** → Update
* **D** → Delete

The tasks demonstrate how JavaScript can be used to add products, display product data, delete products, and manage complete product information using CRUD operations.

These concepts are important for building dynamic web applications such as product management systems, student management systems, employee management systems, and e-commerce applications.

---

## 🎯 Learning Objectives

* Understand the concept of CRUD operations.
* Create and add product data.
* Display product information dynamically.
* Delete product data.
* Update existing product information.
* Handle form inputs using JavaScript.
* Work with arrays of objects.
* Use DOM manipulation.
* Create dynamic HTML elements.
* Practice event handling.
* Build a complete basic CRUD application.

---

## 🛠️ Technologies Used

* HTML5
* JavaScript
* DOM Manipulation
* JavaScript Arrays
* JavaScript Objects
* Event Handling

---

## 📂 Folder Structure

```text
Day-18-CRUD-Application/
│
├── Task-41-Add-Product/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
├── Task-42-Delete-Product/
│   ├── index.html
│   ├── script.js
│   └── Output_Screenshots/
│
└── Task-43-Product-CRUD/
    ├── index.html
    ├── script.js
    └── Output_Screenshots/
```

---

# 📚 Tasks

## 🔹 Task-41: Add Product

### 📌 Description

Create a simple application to **add product information using JavaScript**.

The user enters product details through a form and the product is added to the product list dynamically.

### 💡 Concepts Practiced

* Form Handling
* Input Values
* Arrays
* Objects
* `push()`
* DOM Manipulation
* Button Events
* Dynamic HTML

### Example

```javascript
let products = [];

let product = {
    name: productName,
    price: productPrice
};

products.push(product);
```

The entered product information is stored inside an array of objects.

---

## 🔹 Task-42: Delete Product

### 📌 Description

Create an application where the user can **delete a product from the product list**.

Each product contains a delete button. When the button is clicked, the selected product is removed from the list.

### 💡 Concepts Practiced

* Arrays
* Objects
* `filter()`
* DOM Manipulation
* Button Events
* Dynamic Data
* Product Deletion

### Example

```javascript
products = products.filter(function(product) {
    return product.id !== id;
});
```

The selected product is removed from the array and the updated product list is displayed.

---

## 🔹 Task-43: Product CRUD

### 📌 Description

Create a complete **Product CRUD Application** using JavaScript.

This task combines all four CRUD operations:

* Create a product
* Read and display products
* Update product information
* Delete a product

The application manages product information dynamically through JavaScript.

### 💡 Concepts Practiced

* Create
* Read
* Update
* Delete
* Arrays of Objects
* DOM Manipulation
* Form Handling
* Event Handling
* Dynamic HTML
* Product Management

### CRUD Operations

| Operation | Description                   |
| --------- | ----------------------------- |
| Create    | Add a new product             |
| Read      | Display product details       |
| Update    | Edit existing product details |
| Delete    | Remove a product              |

---

# 🧠 Key Concepts Learned

## 1. Create

The **Create** operation is used to add new data.

```javascript
products.push(product);
```

A new product object is added to the product array.

---

## 2. Read

The **Read** operation is used to display stored product information.

```javascript
products.forEach(function(product) {
    console.log(product.name);
});
```

The product data can be displayed dynamically on the webpage.

---

## 3. Update

The **Update** operation is used to modify existing product information.

```javascript
products[index].name = newName;
products[index].price = newPrice;
```

The selected product can be updated with new information.

---

## 4. Delete

The **Delete** operation removes unwanted data.

```javascript
products = products.filter(function(product) {
    return product.id !== id;
});
```

The selected product is removed from the product list.

---

## 5. Arrays of Objects

Product information can be stored using an array containing multiple objects.

```javascript
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000
    }
];
```

This structure is commonly used when working with multiple records.

---

## 6. DOM Manipulation

JavaScript can dynamically create and update HTML elements.

```javascript
container.innerHTML = "";
```

The product list can then be generated based on the current data.

---

## 7. Event Handling

Events allow the application to respond to user actions.

```javascript
button.addEventListener("click", function() {
    console.log("Button Clicked");
});
```

Events are used for actions such as:

* Add Product
* Delete Product
* Edit Product
* Update Product

---

# 📸 Output Screenshots

Each task contains an **Output_Screenshots** folder containing the respective output screenshots.

* **Task-41:** Add Product Output
* **Task-42:** Delete Product Output
* **Task-43:** Product CRUD Output

---

# 📋 Task Summary

| Task    | Project        | Main Concept              |
| ------- | -------------- | ------------------------- |
| Task-41 | Add Product    | Create + Arrays + Objects |
| Task-42 | Delete Product | Delete + `filter()`       |
| Task-43 | Product CRUD   | Complete CRUD Operations  |

---

# 📖 Concepts Covered

* CRUD Operations
* Create
* Read
* Update
* Delete
* Arrays
* Objects
* Arrays of Objects
* `push()`
* `filter()`
* `forEach()`
* DOM Manipulation
* Dynamic HTML
* Form Handling
* Input Handling
* Button Events
* Click Events
* Event Listeners
* Product Management
* Dynamic Data Handling

---

### ✅ Day-18 Completed

**Day:** 18
**Topic:** CRUD Application
**Tasks Completed:** 41, 42, 43
**Status:** Completed
