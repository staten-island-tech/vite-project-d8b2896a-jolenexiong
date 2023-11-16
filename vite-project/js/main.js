import "../css/style.css";
import { food } from "./food";

function displayall() {
    food.forEach((T) => app.parentElement.insertAdjacentHtml =
        "afterbegin",
        `<div class="card">
<h2>${T.name}</h2>
<img src = "${picture.value}">
<h2>${T.rating}</h2>
<h2>${T.price}</h2>
</div>`

    );
}
displayall;

console.log(food)





const DOMSelectors = {
    pop: document.querySelector("#mostpopbtn"),
    bev: document.querySelector("#bevbtn"),
    szn: document.querySelector("#sznbtn"),
};

function pop() {
    document.querySelector(".pop").forEach((btn))

}