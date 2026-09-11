function getUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function(response) {
            return response.json();
        })
        .then(function(users) {

            let list = document.getElementById("userList");

            list.innerHTML = "";

            users.forEach(function(user) {

                let li = document.createElement("li");

                li.innerText = user.name;

                list.appendChild(li);
            });
        })
        .catch(function(error) {

            alert("Failed to load users");

            console.log(error);
        });
}