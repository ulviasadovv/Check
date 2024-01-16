const myIcon = document.querySelector("#circle");
const myDiv = document.querySelector("#container");
const myLightBulb = document.querySelector(".fa-lightbulb");
const myBody = document.querySelector("body");

const myRadioContainer = document.querySelector("#radio-container");
const myRadio = document.querySelector("#radio-border");
const myCircle = document.querySelector("#radio-circle");

let i = true;
let j = true;

myRadio.addEventListener("click", () => {
    if (j) {
        j = false;
        myRadio.style.border = "8px solid rgb(0, 132, 255)";
        myCircle.style.display = "block";

        myRadioContainer.addEventListener("mouseover", () => {
            myRadio.style.border = "8px solid rgba(0, 132, 255, 0.5)";
            myCircle.style.backgroundColor = "rgba(0, 132, 255, 0.5)";
        });

        myRadioContainer.addEventListener("mouseout", () => {
                myRadio.style.border = "8px solid rgb(0, 132, 255)";
                myCircle.style.backgroundColor = "rgb(0, 132, 255)";
        });

    } else {
        j = true;
        myRadio.style.border = "4px solid rgb(133, 133, 133)";
        myCircle.style.display = "none";

        myRadioContainer.addEventListener("mouseover", () => {
            myRadio.style.border = "4px solid rgba(133, 133, 133, 0.5)"
        });

        myRadioContainer.addEventListener("mouseout", () => {
            myRadio.style.border = "4px solid rgb(133, 133, 133)"
        })
    }
})





myIcon.addEventListener("click", () => {

    if (i) {
        i = false;
        myIcon.style.transform = "translateX(125px)";
        myIcon.style.backgroundColor = "rgb(0, 215, 14)";
        myDiv.style.backgroundColor = "rgb(3, 180, 36)";
        myLightBulb.classList.remove("fa-regular");
        myLightBulb.classList.add("fa-solid");
        myLightBulb.style.color = "white";

    } else {
        i = true;
        myIcon.style.transform = "translateX(0)";
        myIcon.style.backgroundColor = "rgb(165, 165, 165)";
        myDiv.style.backgroundColor = "rgb(40, 40, 40)";
        myLightBulb.classList.remove("fa-solid");
        myLightBulb.classList.add("fa-regular");
        myLightBulb.style.color = "black";
    };
});