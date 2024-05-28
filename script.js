const etchASketchContainer = document.querySelector("#eas-container");

function createSketch(dimension) {
    for (let i = 0; i < dimension; i++) {
        const etchASketchRow = document.createElement("div");
        etchASketchRow.classList.add("eas-row");
        etchASketchContainer.appendChild(etchASketchRow);
        for (let i =0; i < dimension; i++) {
            const etchASketchItem = document.createElement("div");
            etchASketchItem.classList.add("eas-item");
            etchASketchRow.appendChild(etchASketchItem);
        };
    };
    const etchASketchItems = document.querySelectorAll(".eas-item");
    etchASketchItems.forEach((item) => {
        item.style.width = `${etchASketchContainer.offsetWidth / dimension}px`;
        item.style.height = `${etchASketchContainer.offsetWidth / dimension}px`;
    });
};

createSketch(3)