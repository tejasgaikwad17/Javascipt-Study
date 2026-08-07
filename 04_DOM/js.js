// // // // let heading = document.getElementById("title");

// // // // console.log(heading);

// // // let paragraphs = document.getElementsByClassName("text");

// // // console.log(paragraphs);

// //      let p = document.getElementsByTagName("p");

// //         console.log(p);


//         let heading = document.getElementById("title");
//         let btn = document.getElementById("btn");

//         btn.addEventListener("click", function() {
//         heading.innerText = "Button Clicked!";
//         heading.style.color = "green";
//         });




// Select elements
let heading = document.getElementById("title");
let button = document.getElementById("btn");
let paras = document.querySelectorAll(".text");

// Change heading style initially
heading.style.color = "blue";

// Print all paragraph text
paras.forEach(p => console.log(p.innerText));

// Button click event
button.addEventListener("click", function() {

    // Change heading
    heading.innerText = "Welcome Tejas";
    heading.style.color = "green";

    // Create new paragraph
    let p = document.createElement("p");
    p.innerText = "New paragraph added!";

    document.body.appendChild(p);
});
