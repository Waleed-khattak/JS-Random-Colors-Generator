let colorCode = document.getElementById("color");
let colorBox;
let colorText;
let max = 17;



window.addEventListener('load', () => {
    for (let i = 0; i <= max; i++) {
        let hexColor = "#" + Math.random().toString(16).slice(2, 8).padEnd(0);
        console.log(hexColor);

        colorBox = document.createElement('span');
        colorText = document.createElement('p');
        colorBox.classList.add("color-box");
        colorText.classList.add("text");
        colorBox.style.background = hexColor;
        colorText.innerHTML = hexColor;
        colorCode.appendChild(colorBox);
        colorBox.appendChild(colorText);
    }
});