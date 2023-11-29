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
    container: document.querySelector(".container"),
}

function clearfields() {
    DOMSelectors.container.innerHTML = "";
};


DOMSelectors.Cszn.addEventListener("click", function () {
    clearfields();
const Cmeal =  food.filter((meal) => meal.seasonal===("Christmas"));
        Cmeal.forEach((Cmeal) => container.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
<h2 class="name">${Cmeal.name}</h2>
<img src = "${Cmeal.img}"class="pic">
<h2>${Cmeal.price}</h2>
</div>`
        ))
})

DOMSelectors.Fszn.addEventListener("click", function () {
    clearfields();
    food.filter((meal) => meal.seasonal===("Fall"))
        .forEach((meal) => container.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
    <h2 class="name">${meal.name}</h2>
    <img src = "${meal.img}"class="pic">
    <h2>${meal.price}</h2>
    </div>`
        ))
})

DOMSelectors.bev.addEventListener("click", function () {
    clearfields();
    food.filter((meal) => meal.bev === true)
        .forEach((meal) => container.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
        <h2 class="name">${meal.name}</h2>
        <img src = "${meal.img}"class="pic">
        <h2>${meal.price}</h2>
        </div>`
        ))
})