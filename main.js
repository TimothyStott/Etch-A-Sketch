
//Default 16x16 Creator
const mainContainer = document.querySelector(".mainContain");
for(let i =0; i<(16*16);i++){
    const square = document.createElement("div");
    square.classList.add("square");
    mainContainer.appendChild(square);
}

//add eventlistenter for size buttons
const sizeBtn = document.querySelectorAll(".sizeButton")
sizeBtn.forEach(btn => btn.addEventListener('click', changeNumberOfDivs));

//add event listener for clear button
const clearBtn = document.querySelector("#clearButton");
clearBtn.addEventListener('click', clearBlackFromSquares);

//add squareHovered class
function addSquareHoveredClassToDiv(e){
     this.classList.add("squareHovered");
}


//add hover event listener
function addHoverEventListener(){
const hoverableDivs = document.querySelectorAll(".square")
hoverableDivs.forEach(div => div.addEventListener('mouseover', addSquareHoveredClassToDiv));
}


//function for changing number of divs.
function changeNumberOfDivs (e){
    mainContainer.innerHTML = "";
    switch(e.target.id)
    {
        case "16x16":
            for(let i =0; i<(16*16);i++)
            {
                var squares = document.createElement("div");
                squares.classList.add("square");
                mainContainer.style.gridTemplateColumns = "repeat(16,auto)";
                mainContainer.appendChild(squares);
            }
            break;
            
        case "32x32":

            for(let i =0; i<(32*32);i++)
            {
                var squares = document.createElement("div");
                squares.classList.add("square");
                mainContainer.style.gridTemplateColumns = "repeat(32,auto)";
                mainContainer.appendChild(squares);
            }
            break;
        
        case "64x64":
            for (let i = 0; i<(64*64);i++)
            {
                var squares = document.createElement("div");
                squares.classList.add("square");
                mainContainer.style.gridTemplateColumns = "repeat(64,auto)";
                mainContainer.appendChild(squares);
            }
            break;
    }

    addHoverEventListener();

}

//function for clearing div
function removeAllChildren(divToRemoveFrom){
    while(divToRemoveFrom.firstChild){
        divToRemoveFrom.removeChild(divToRemoveFrom.firstChild);
    }
}

//Runs to initialy add the event listener
addHoverEventListener();

//function to clear background
function clearBlackFromSquares(){
    const blackSquares = document.querySelectorAll(".squareHovered");
    blackSquares.forEach(sqr => sqr.classList.remove("squareHovered")); 
    addHoverEventListener();
}

