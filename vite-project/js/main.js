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
    Cszn: document.querySelector("#Csznbtn"),
    bev: document.querySelector("#bevbtn"),
    Fszn: document.querySelector("#sznbtn"),
   


}

DOMSelectors.Cszn.addEventListener("click", function () {
    food.filter((meal) => meal.seasonal.includes("Christmas"))
        .forEach((meal) => parent.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
<h2 class="name">${meal.name}</h2>
<img src = "${meal.img}"class="pic">
<h2>${meal.price}</h2>
</div>`
        ))
})

DOMSelectors.Fszn.addEventListener("click", function () {
    food.filter((meal) => meal.seasonal.includes("Fall"))
        .forEach((meal) => parent.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
    <h2 class="name">${meal.name}</h2>
    <img src = "${meal.img}"class="pic">
    <h2>${meal.price}</h2>
    </div>`
        ))
})

DOMSelectors.bev.addEventListener("click", function () {
    food.filter((meal) => meal.bev===true)
        .forEach((meal) => parent.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
        <h2 class="name">${meal.name}</h2>
        <img src = "${meal.img}"class="pic">
        <h2>${meal.price}</h2>
        </div>`
        ))
})