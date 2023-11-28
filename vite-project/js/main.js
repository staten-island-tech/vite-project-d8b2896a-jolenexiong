import "../css/style.css";
import { food } from "./food";

function displayall() {
    let app = document.querySelector("#app")
    food.forEach((meal) => app.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
<h2 class="name">${meal.name}</h2>
<img src = "${meal.img}"class="pic">
<h2>${meal.price}</h2>
</div>`
    ));
}
displayall()

console.log(food)





const DOMSelectors = {
    pop: document.querySelector("#popbtn"),
    bev: document.querySelector("#bevbtn"),
    szn: document.querySelector("#sznbtn"),


};

function pop() {
    document.querySelector("#popbtn").forEach((btn) => btn.addEventListener('click', function (event) {
        food.filter((item) => item.mostpop === true)
            .forEach((item) => parent.insertAdjacentHTML("beforeend",
                `<div class="card">
    <h2 class="name">${meal.name}</h2>
    <img src = "${meal.img}"class="pic">
    <h2>${meal.price}</h2>
    </div>`

            ))
    })
    );
}
pop()