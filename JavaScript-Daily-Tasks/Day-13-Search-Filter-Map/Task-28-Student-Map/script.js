let students = [

    {
        name: "Praveen",
        mark: 90,
        image: "https://images.pexels.com/photos/5212323/pexels-photo-5212323.jpeg"
    },

    {
        name: "Arun",
        mark: 75,
        image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
    },

    {
        name: "Karthik",
        mark: 60,
        image: "https://images.pexels.com/photos/5212323/pexels-photo-5212323.jpeg"
    },

    {
        name: "Vijay",
        mark: 40,
        image: "https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg"
    },

];


function showResults() {


    let output =
        document.getElementById("output");


    let results = students.map(function(student) {


        let result;


        if (student.mark >= 90) {

            result = "Excellent";

        }

        else if (student.mark >= 75) {

            result = "Very Good";

        }

        else if (student.mark >= 60) {

            result = "Good";

        }

        else if (student.mark >= 35) {

            result = "Pass";

        }

        else {

            result = "Fail";
        }


        return {

            name: student.name,

            mark: student.mark,

            result: result,

            image: student.image

        };

    });


    output.innerHTML = "";


    for (let i = 0; i < results.length; i++) {


        output.innerHTML +=

            '<div class="card">' +

                '<img src="' +
                results[i].image +
                '" alt="' +
                results[i].name +
                '">' +

                '<div class="content">' +

                    '<h2>' +
                    results[i].name +
                    '</h2>' +

                    '<p class="mark">' +
                    results[i].mark +
                    ' / 100' +
                    '</p>' +

                    '<p>' +
                    'Performance' +
                    '</p>' +

                    '<span class="result">' +
                    results[i].result +
                    '</span>' +

                '</div>' +

            '</div>';
    }
}