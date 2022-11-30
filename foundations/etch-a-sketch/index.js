let board = document.querySelector(".container");
let boardCopy = board

let bWidth = board.offsetWidth;
let bHeight = board.offsetHeight;
let boxesInLine = 25 
let boxSize = bWidth / boxesInLine
let totalBoxes = boxesInLine * boxesInLine // (bWidth / boxesInLine) * (bHeight / boxesInLine) 

for (let i = 0; i < totalBoxes; i++){
    
    let box = document.createElement("div");
    box.classList.add('square');
    box.addEventListener("mouseover", function() {
        box.style.backgroundColor = "green";
    });
    box.style.width = `${boxSize}px`
    box.style.height = `${boxSize}px`
    board.appendChild(box);
    
};

