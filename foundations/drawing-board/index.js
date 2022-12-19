let board = document.querySelector(".db");
let bWidth = board.offsetWidth - 4;
let bHeight = board.offsetHeight - 4;


let colorPicker = document.querySelector("#color-select");
let drawingColor = colorPicker.value;

let gridToggle = document.querySelector("#grid-toggle");

let reset = document.querySelector("#reset");

let gridSizes = document.getElementsByClassName("size-btn");

function createGrid(numBoxes){
    numBoxes = parseInt(numBoxes);
    let boxSize = bWidth / numBoxes;
    let totalBoxes = numBoxes * numBoxes;

    for (let i = 0; i < totalBoxes; i++){
    
        let box = document.createElement("div");
        box.classList.add('square', "grid");
        box.addEventListener("mouseover", function() {
            box.style.backgroundColor = drawingColor;
        });
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
    
        board.appendChild(box);
    }
};

createGrid(16);

gridToggle.addEventListener('change', function() {
    for (const child of board.children) {
        child.classList.toggle('grid');
    }
});

reset.addEventListener('click', function() {
    for (const child of board.children) {
        child.style.backgroundColor = "white";
    }
});

colorPicker.addEventListener('change', function(){
    drawingColor = colorPicker.value;
});

for (let btn of gridSizes){
     btn.addEventListener("click", function(){
        updateGrid(btn.value);
    })
}

function updateGrid(newNum) {
    while (board.firstChild){
        board.removeChild(board.firstChild);
    }
    createGrid(newNum);
}