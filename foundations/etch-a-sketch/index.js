let board = document.querySelector(".db");
let gridToggle = document.querySelector("#grid-toggle");
let reset = document.querySelector("#reset");

let gridSizes = document.getElementsByName("grid-size");

let boardCopy = board;

let bWidth = board.offsetWidth - 4;
let bHeight = board.offsetHeight - 4;

function createGrid(numBoxes){
    numBoxes = parseInt(numBoxes)
    let boxSize = bWidth / numBoxes;
    let totalBoxes = numBoxes * numBoxes;

    for (let i = 0; i < totalBoxes; i++){
    
        let box = document.createElement("div");
        box.classList.add('square', "grid");
        box.addEventListener("mouseover", function() {
            box.style.backgroundColor = "black";
        });
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
    
        board.appendChild(box);
    };

}

createGrid(16)


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

for (let btn of gridSizes){
     btn.addEventListener("click", function(){
        updateGrid(btn.value);
    })
}

function updateGrid(newNum) {
    while (board.firstChild){
        board.removeChild(board.firstChild);
    }
    createGrid(newNum)
    // let val = 0;
    // let elements = document.getElementsByName("grid-size");
    // for (let element of elements){
    //     if (element.checked){
    //         val = element.value;
    //     }
    // }
    // return val;
}