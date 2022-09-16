
//Default 16x16 Creator
const mainContainer = document.querySelector(".mainContain");
for(let i =0; i<(16*16);i++){
    const square = document.createElement("div");
    square.classList.add("square");
    mainContainer.appendChild(square);
}

//add squareHovered class
function addSquareHoveredClassToDiv(e){
     this.classList.add("squareHovered");
}

//add hover event listener
const hoverableDivs = document.querySelectorAll(".square")
hoverableDivs.forEach(div => div.addEventListener('mouseover', addSquareHoveredClassToDiv));