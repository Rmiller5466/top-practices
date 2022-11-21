let dom = document.querySelector("#starting");

let redp = document.createElement("p");
redp.style.color = "red";
redp.textContent = "Hey I'm red!";
dom.appendChild(redp);

let blueh3 = document.createElement("h3");
blueh3.style.color = "blue";
blueh3.textContent = "I'm a blue h3!";
dom.appendChild(blueh3);

let div = document.createElement("div");
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";


let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

let p2 = document.createElement("p");
p2.textContent = "ME TOO!"

div.appendChild(h1);
div.appendChild(p2);

dom.appendChild(div);

/*    a <p> with red text that says “Hey I’m red!”
    an <h3> with blue text that says “I’m a blue h3!”
    a <div> with a black border and pink background color with the following elements inside of it:
        another <h1> that says “I’m in a div”
        a <p> that says “ME TOO!”
        Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/