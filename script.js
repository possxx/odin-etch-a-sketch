const etchASketchContainer = document.querySelector("#eas-container");

function createSketch(dimension) {
    for (let i = 0; i < dimension; i++) {
        const etchASketchRow = document.createElement("div");
        etchASketchRow.classList.add("eas-row");
        etchASketchContainer.appendChild(etchASketchRow);
        for (let i = 0; i < dimension; i++) {
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
createSketch(16);

function generateColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = r + ", " + g + ", " + b;
    return color;
}

function changeColor() {
    const itemColors = document.querySelectorAll(".eas-item");
    itemColors.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            if (item.style.backgroundColor == "") {
                item.style.backgroundColor = `rgb(${generateColor()})`;  
                item.setAttribute("id", "1")
            } else {
                // Take current background-color and revert it back to original if needed to decrement the rgb values by 10% for each time a mouseenter event is triggered
                const currentColor = item.style.backgroundColor.slice(4, -1).split(",");
                if (item.getAttribute("id") == "1") {
                    let newColor = `rgb(${(currentColor[0] - (currentColor[0] / 10).toFixed(0))}, ${(currentColor[1] - (currentColor[1] / 10)).toFixed(0)}, ${(currentColor[2] - (currentColor[2] / 10)).toFixed(0)})`;
                    item.style.backgroundColor = newColor;
                    item.setAttribute("id", "0.9");
                } else if (item.getAttribute("id") == "0.9") {
                    let initialColor = [(currentColor[0] / 9 * 10).toFixed(0), (currentColor[1] / 9 * 10).toFixed(0), (currentColor[2] / 9 * 10).toFixed(0)];
                    let newColor = `rgb(${(initialColor[0] - ((initialColor[0] / 10) * 2)).toFixed(0)}, ${(initialColor[1] - ((initialColor[1] / 10) * 2)).toFixed(0)}, ${(initialColor[2] - ((initialColor[2] / 10) * 2)).toFixed(0)})`;
                    item.style.backgroundColor = newColor;
                    item.setAttribute("id", "0.8");
                } else if (item.getAttribute("id") == "0.8") {
                    let initialColor = [(currentColor[0] / 8 * 10).toFixed(0), (currentColor[1] / 8 * 10).toFixed(0), (currentColor[2] / 8 * 10).toFixed(0)];
                    let newColor = `rgb(${(initialColor[0] - ((initialColor[0] / 10) * 3)).toFixed(0)}, ${(initialColor[1] - ((initialColor[1] / 10) * 3)).toFixed(0)}, ${(initialColor[2] - ((initialColor[2] / 10) * 3)).toFixed(0)})`;
                    item.style.backgroundColor = newColor;
                    item.setAttribute("id", "0.7");
                } else if (item.getAttribute("id") == "0.7") {
                    let initialColor = [(currentColor[0] / 7 * 10).toFixed(0), (currentColor[1] / 7 * 10).toFixed(0), (currentColor[2] / 7 * 10).toFixed(0)];
                    let newColor = `rgb(${(initialColor[0] - ((initialColor[0] / 10) * 4)).toFixed(0)}, ${(initialColor[1] - ((initialColor[1] / 10) * 4)).toFixed(0)}, ${(initialColor[2] - ((initialColor[2] / 10) * 4)).toFixed(0)})`;
                    item.style.backgroundColor = newColor;
                    item.setAttribute("id", "0.6");
                } else if (item.getAttribute("id") == "0.6") {
                    let initialColor = [(currentColor[0] / 6 * 10).toFixed(0), (currentColor[1] / 6 * 10).toFixed(0), (currentColor[2] / 6 * 10).toFixed(0)];
                    let newColor = `rgb(${(initialColor[0] - ((initialColor[0] / 10) * 5)).toFixed(0)}, ${(initialColor[1] - ((initialColor[1] / 10) * 5)).toFixed(0)}, ${(initialColor[2] - ((initialColor[2] / 10) * 5)).toFixed(0)})`;
                    item.style.backgroundColor = newColor;
                    item.setAttribute("id", "0.5");
                } else if (item.getAttribute("id") == "0.5") {
                    let initialColor = [(currentColor[0] / 5 * 10).toFixed(0), (currentColor[1] / 5 * 10).toFixed(0), (currentColor[2] / 5 * 10).toFixed(0)];
                    let newColor = `rgb(${(initialColor[0] - ((initialColor[0] / 10) * 6)).toFixed(0)}, ${(initialColor[1] - ((initialColor[1] / 10) * 6)).toFixed(0)}, ${(initialColor[2] - ((initialColor[2] / 10) * 6)).toFixed(0)})`;
                    item.style.backgroundColor = newColor;
                    item.setAttribute("id", "0.4");
                } else if (item.getAttribute("id") == "0.4") {
                    let initialColor = [(currentColor[0] / 4 * 10).toFixed(0), (currentColor[1] / 4 * 10).toFixed(0), (currentColor[2] / 4 * 10).toFixed(0)];
                    let newColor = `rgb(${(initialColor[0] - ((initialColor[0] / 10) * 7)).toFixed(0)}, ${(initialColor[1] - ((initialColor[1] / 10) * 7)).toFixed(0)}, ${(initialColor[2] - ((initialColor[2] / 10) * 7)).toFixed(0)})`;
                    item.style.backgroundColor = newColor;
                    item.setAttribute("id", "0.3");
                } else if (item.getAttribute("id") == "0.3") {
                    let initialColor = [(currentColor[0] / 3 * 10).toFixed(0), (currentColor[1] / 3 * 10).toFixed(0), (currentColor[2] / 3 * 10).toFixed(0)];
                    let newColor = `rgb(${(initialColor[0] - ((initialColor[0] / 10) * 8)).toFixed(0)}, ${(initialColor[1] - ((initialColor[1] / 10) * 8)).toFixed(0)}, ${(initialColor[2] - ((initialColor[2] / 10) * 8)).toFixed(0)})`;
                    item.style.backgroundColor = newColor;
                    item.setAttribute("id", "0.2");
                } else if (item.getAttribute("id") == "0.2") {
                    let initialColor = [(currentColor[0] / 2 * 10).toFixed(0), (currentColor[1] / 2 * 10).toFixed(0), (currentColor[2] / 2 * 10).toFixed(0)];
                    let newColor = `rgb(${(initialColor[0] - ((initialColor[0] / 10) * 9)).toFixed(0)}, ${(initialColor[1] - ((initialColor[1] / 10) * 9)).toFixed(0)}, ${(initialColor[2] - ((initialColor[2] / 10) * 9)).toFixed(0)})`;
                    item.style.backgroundColor = newColor;
                    item.setAttribute("id", "0.1");
                } else {
                    item.style.backgroundColor = "rgb(0, 0, 0)";
                    item.setAttribute("id", "0");
                }
            }
        })
    })
}
changeColor();

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