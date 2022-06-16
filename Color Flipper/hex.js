const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    //get random number between 0 - 3 colors
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += colors[getRandomNumber()];
        //console.log(hexColor);
    }
    console.log(hexColor);

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
