import "../css/style.css";
import { food } from "./food";

function displayall() {
    const app = document.querySelector("#app")
    food.forEach((meal) => app.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
<h2 class="name">${meal.name}</h2>
<img src = "${meal.img}"class="pic">
<h2>${meal.price}</h2>
</div>`
    ));
}

function displayone(meal) {
    meal.forEach((x) => {
DOMSelectors.app.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2 class="name">${x.name}</h2>
    <img src = "${x.img}"class="pic">
    <h2>${x.price}</h2>
    </div>`
)})
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

// DOMSelectors.Cszn.addEventListener("click", function () {
//     const Cmeal = food.filter((meal) => meal.seasonal === ("Christmas"));
//     clearFields();
//     Cmeal.forEach((Cmeal) => DOMSelectors.app.insertAdjacentHTML(
//         "beforeend",
//         `<div class="card">
//             <h2 class="name">${Cmeal.name}</h2>
//             <img src = "${Cmeal.img}"class="pic">
//             <h2>${Cmeal.price}</h2>
//             </div>`
//     ))
// })

// DOMSelectors.Fszn.addEventListener("click", function () {
//     const Fmeal = food.filter((Fmeal) => Fmeal.seasonal === ("Fall"));
//     clearFields();
//     Fmeal.forEach((meal) => DOMSelectors.app.insertAdjacentHTML(
//         "beforeend",
//         `<div class="card">
//     <h2 class="name">${meal.name}</h2>
//     <img src = "${meal.img}"class="pic">
//     <h2>${meal.price}</h2>
//     </div>`
//     ))
// })

let sznalbutton = [DOMSelectors.Cszn, DOMSelectors.Fszn]

sznalbutton.forEach((btn)=> btn.addEventListener("click", function (){
    const season = btn.textContent
    console.log(season)
    const meal = food.filter((whichszn) => whichszn.seasonal === season)
    console.log(meal)
    clearFields();
    displayone(meal);
}))

DOMSelectors.bev.addEventListener("click", function (){
    const meal = food.filter((yes)=>yes.bev===true);
    console.log(meal)
    clearFields();
    displayone(meal);

})




// DOMSelectors.bev.addEventListener("click", function () {
//     const bevs = food.filter((meal) => meal.bev === true);
//     clearFields();
//     bevs.forEach((meal) => DOMSelectors.app.insertAdjacentHTML(
//         "beforeend",
//         `<div class="card">
//         <h2 class="name">${meal.name}</h2>
//         <img src = "${meal.img}"class="pic">
//         <h2>${meal.price}</h2>
//         </div>`
//     ))
// })




DOMSelectors.theme.addEventListener("click", function () {
    if (document.body.classList.contains("pink")) {
        document.body.classList.add("blue");
        document.body.classList.remove("pink");
    } else {
        document.body.classList.remove("blue");
        document.body.classList.add("pink");
    } 
});

