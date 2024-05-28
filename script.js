const etchASketchContainer = document.querySelector("#eas-container");

function createSketch(dimension) {
    for (let i = 0; i < dimension; i++) {
        const etchASketchRow = document.createElement("div");
        etchASketchContainer.appendChild(etchASketchRow);
        for (let i =0; i < dimension; i++) {
            const etchASketchItem = document.createElement("div");
            etchASketchRow.appendChild(etchASketchItem);
        };
    };
};

createSketch(4);