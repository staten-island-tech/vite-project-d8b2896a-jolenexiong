import "../css/style.css";
import { food } from "./food";

function displayall() {
    DOMSelectors.app.insertAdjacentHtml(
        "afterbegin",
        `<div class="card">
<h2>${food.name}</h2>
<img src = "${food.img}">
<h2>${food.rating}</h2>
<h2>${food.price}</h2>
</div>`
    );
};
displayall();



console.log(food)





const DOMSelectors = {
    pop: document.querySelector("#mostpopbtn"),
    bev: document.querySelector("#bevbtn"),
    szn: document.querySelector("#sznbtn"),
    app:document.querySelector(".app"),
};

// function pop() {
//     document.querySelector(".pop").forEach((btn))

// }