const etchASketchContainer = document.querySelector("#eas-container");
createSketch(16);
changeColor();

function createSketch(dimension) {
    for (let i = 0; i < dimension; i++) {
        const etchASketchRow = document.createElement("div");
        etchASketchRow.classList.add("eas-row");
        etchASketchContainer.appendChild(etchASketchRow);
        for (let i =0; i < dimension; i++) {
            const etchASketchItem = document.createElement("div");
            etchASketchItem.classList.add("eas-item");
            etchASketchItem.classList.add("prevent-select");
            etchASketchRow.appendChild(etchASketchItem);
        }
    }
    const etchASketchItems = document.querySelectorAll(".eas-item");
    etchASketchItems.forEach((item) => {
        item.style.width = `${etchASketchContainer.offsetWidth / dimension}px`;
        item.style.height = `${etchASketchContainer.offsetWidth / dimension}px`;
    })
}

function generateColor() {
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += hexArray[Math.floor(Math.random() * 16)];
    }
    return code;
}

function changeColor() {
    const itemColors = document.querySelectorAll(".eas-item");
    itemColors.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.backgroundColor = "red";
        })
    })
}

const inputButton = document.querySelector("#gridBtn");
inputButton.addEventListener("click", () => {
    const inputField = document.querySelector("#gridInt");
    if (inputField.value < 0) {
        etchASketchContainer.innerHTML = "";
        createSketch(1);
        changeColor();
    } else if (inputField.value > 100) {
        etchASketchContainer.innerHTML = "";
        createSketch(100);
        changeColor();
    } else {
        etchASketchContainer.innerHTML = "";
        createSketch(inputField.value);
        changeColor();
    }
})