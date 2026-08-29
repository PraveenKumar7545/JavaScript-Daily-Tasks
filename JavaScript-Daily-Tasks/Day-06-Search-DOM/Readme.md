# 🔍 JavaScript Daily Tasks — Day 06: Search & DOM

This day focuses on practicing **JavaScript DOM manipulation** by creating a simple product search bar. The task helps build an understanding of DOM elements, user input, functions, loops, conditions, and dynamic output.

## 📌 Tasks

| Task        | Description                                        | Concepts                                                                                                        |
| ----------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Task 15** | Create a Search Bar to search and display products | DOM, `getElementById()`, functions, `for...of` loop, `if` condition, `includes()`, `toLowerCase()`, `innerHTML` |

## 🛍️ Product Data

The search bar works with the following products:

```text
Apple
Samsung
Oppo
Vivo
```

The user can enter a product name in the search field and click the **Search** button to display the matching product.

## 📂 Task Structure

```text
Day-06-Search-DOM/
│
├── Task-15-Search-Bar/
│   ├── Output_Screenshots/
│   │   ├── Output_1.png
│   │   └── Output_2.png
│   │
│   ├── index.html
│   └── script.js
│
└── README.md
```

## ⚙️ How It Works

1. The user enters a product name in the search input.
2. The **Search** button calls the `searchProduct()` function.
3. JavaScript gets the value entered by the user using `getElementById()`.
4. The search value is converted to lowercase using `toLowerCase()`.
5. A `for...of` loop checks each product in the products array.
6. The `includes()` method checks whether the product matches the search value.
7. Matching products are displayed dynamically using `innerHTML`.
8. If no matching product is found, **"No product found"** is displayed.

## 🧠 Concepts Practiced

* DOM Manipulation
* `document.getElementById()`
* Getting user input
* JavaScript Functions
* `for...of` Loop
* `if` Condition
* Arrays
* String Methods
* `toLowerCase()`
* `includes()`
* `innerHTML`
* Dynamic Content Display
* Button `onclick` Event

## 🎯 Learning Goals

* Understand how JavaScript interacts with HTML elements.
* Learn how to retrieve user input from an HTML input field.
* Practice using functions with button click events.
* Understand how loops can be used to search through an array.
* Learn how to compare strings without case sensitivity.
* Dynamically update HTML content using JavaScript.
* Improve DOM manipulation and basic problem-solving skills.

## 🖥️ Example

### Search Input

```text
Enter product name: Apple
```

### Output

```text
Search Result

Apple
```

If the user searches for a product that does not exist:

```text
Search Result

No product found
```

## 🚀 Technologies Used

* HTML5
* JavaScript
* DOM Manipulation

## 📸 Output Screenshots

The `Output_Screenshots` folder contains screenshots demonstrating the search functionality and its output.

## ✅ Day 06 Completed

**Task 15 — Search Bar completed successfully ✅**
