const userInput = document.getElementById("userInput");
const btnDisplay = document.getElementById("btnDisplay");
const drinks = document.getElementsByClassName("drinks");
const toppings = document.getElementsByClassName("toppings");
const sizes = document.getElementById("sizes");
const textArea = document.getElementById("displayArea");
const date = document.getElementById("date");
const newBlogs = document.getElementById("newBlogPost");


btnDisplay.addEventListener('click', function() {
    // With text inputs, use object.value
    // with radio buttons, object.checked
    // with checkbox , object.checked and .value
    // with select, grab select object and object.value
    CreateBlog();
    // html objects, use .innerText or .innerHtml



    // alert(sizes.value);
    // Checkboxes
    // for(let i = 0; i < toppings.length; i++) {
    //     if(toppings[i].checked) {
    //         alert(toppings[i].value);
    //     }
       
    // }

    // // Radio - Use return in your if statement to stop from running
    // for(let i = 0; i < drinks.length; i++) {
    //     if(toppings[i].checked) {
    //         alert(toppings[i].value);
    //         return;
    //         // alert(drinks[i].value);
    //     }    
    // }


    
})

function CreateBlog() {

    // blogDiv.classList.add("asdfasdf"); // How to add a class to an element

    var tag = document.createElement("p"); // creates new p tag

    var text = document.createTextNode(userInput.value); // creates new text node
    
    tag.appendChild(text); // ADDS text to p tag
    
    var element = document.getElementById("newBlogPost"); // Grabs parent object
    
    element.appendChild(tag); // Makes p tag CHILD of our div
}