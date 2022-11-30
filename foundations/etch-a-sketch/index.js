let board = document.querySelector(".container");
let gridToggle = document.querySelector("#grid-toggle")
let reset = document.querySelector("#reset")

let boardCopy = board;

let bWidth = board.offsetWidth - 4;
let bHeight = board.offsetHeight - 4;
let boxesInLine = 25 ;
let boxSize = bWidth / boxesInLine;
let totalBoxes = boxesInLine * boxesInLine; // (bWidth / boxesInLine) * (bHeight / boxesInLine) 

for (let i = 0; i < totalBoxes; i++){
    
    let box = document.createElement("div");
    box.classList.add('square');
    box.addEventListener("mouseover", function() {
        box.style.backgroundColor = "green";
    });
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    board.appendChild(box);
};

gridToggle.addEventListener('change', function() {
    
    for (const child of board.children) {
        child.classList.toggle('grid');
    }
});

reset.addEventListener('click', function() {
    for (const child of board.children) {
        child.style.backgroundColor = "blue";
    }
});