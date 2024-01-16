let myIcon = document.querySelector("#circle");
let myDiv = document.querySelector("#container");
let myLightBulb = document.querySelector(".fa-lightbulb");
let myBody = document.querySelector("body");

let i = true;

myIcon.addEventListener("click", () => {

    if(i){
        i = false;
        myIcon.style.transform = "translateX(125px)";
        myIcon.style.backgroundColor = "rgb(0, 215, 14)";
        myDiv.style.backgroundColor = "rgb(3, 180, 36)";
        myLightBulb.classList.remove("fa-regular");
        myLightBulb.classList.add("fa-solid");
        myLightBulb.style.color = "white";

    }else{
        i = true;
        myIcon.style.transform = "translateX(0)";
        myIcon.style.backgroundColor = "rgb(165, 165, 165)";
        myDiv.style.backgroundColor = "rgb(40, 40, 40)";
        myLightBulb.classList.remove("fa-solid");
        myLightBulb.classList.add("fa-regular");
        myLightBulb.style.color = "black";
    };
});