function getUsers() {

    let message = document.getElementById("message");
    let list = document.getElementById("userList");

    message.innerText = "Loading...";

    list.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(function(response) {

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            return response.json();
        })

        .then(function(users) {

            message.innerText = "Users loaded successfully";

            users.forEach(function(user) {

                let li = document.createElement("li");

                li.innerText = user.name;

                list.appendChild(li);
            });
        })

        .catch(function(error) {

            message.innerText = "Failed to load users";

            console.log(error);
        });
}