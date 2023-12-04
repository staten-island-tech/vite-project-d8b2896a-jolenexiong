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



const DOMSelectors = {
    Cszn: document.querySelector(".Csznbtn"),
    bev: document.querySelector(".bevbtn"),
    Fszn: document.querySelector(".Fsznbtn"),
    theme: document.querySelector(".Tbtn"),
    app: document.querySelector("#app"),
    all: document.querySelector(".allbtn"),

  
};

function clearFields() {
    DOMSelectors.app.innerHTML = "";
};

DOMSelectors.all.addEventListener("click", function () {
    clearFields();
    displayall();
})

DOMSelectors.Cszn.addEventListener("click", function () {
    const Cmeal = food.filter((meal) => meal.seasonal === ("Christmas"));
    clearFields();
    Cmeal.forEach((Cmeal) => DOMSelectors.app.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
            <h2 class="name">${Cmeal.name}</h2>
            <img src = "${Cmeal.img}"class="pic">
            <h2>${Cmeal.price}</h2>
            </div>`
    ))
})

DOMSelectors.Fszn.addEventListener("click", function () {
    const Fmeal = food.filter((Fmeal) => Fmeal.seasonal === ("Fall"));
    clearFields();
    Fmeal.forEach((meal) => DOMSelectors.app.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
    <h2 class="name">${meal.name}</h2>
    <img src = "${meal.img}"class="pic">
    <h2>${meal.price}</h2>
    </div>`
    ))
})

DOMSelectors.bev.addEventListener("click", function () {
    const bevs = food.filter((meal) => meal.bev === true);
    clearFields();
    bevs.forEach((meal) => DOMSelectors.app.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
        <h2 class="name">${meal.name}</h2>
        <img src = "${meal.img}"class="pic">
        <h2>${meal.price}</h2>
        </div>`
    ))
})
DOMSelectors.theme.addEventListener("click", function () {
    if (document.body.classList.contains("pink")) {
        document.body.classList.add("blue");
        document.body.classList.remove("pink");
    } else {
        document.body.classList.remove("blue");
        document.body.classList.add("pink");
    } 
});

