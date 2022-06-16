const colors = ["green", "violet", "rgb(122,137,230)", "#f1f3f8"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    //get random number between 0 - 3 colors

    const randomNumber = getRandomNumber();
    console.log("Random color is: ", randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]
    //changes the text content in the body 
    color.textContent = colors[randomNumber]
});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
