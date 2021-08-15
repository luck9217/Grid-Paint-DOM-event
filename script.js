
const colorsGrid ={

    red:"rojo",
    black:"negro",
    white:"blanco",
    yellow:"amarillo",
    green:"verde",
    brown:"marron",
    purple:"violeta",
    peru:"peru",

}

let selectedColor

const selectColor= (event)=>{
    
    selectedColor=event.target.id;
    const strongTag=document.querySelector(`#colorSelected`);
    strongTag.textContent=colorsGrid[selectedColor];
   
}

const paintSelector=(event)=>{
    if (!selectedColor) return;
    const selectedSquare=document.querySelector(`#${event.target.id}`)
    selectedSquare.className=`box ${selectedColor}`
}

const paintSquareOnMove= (event)=>{
    if(event.buttons !==1) return;
    paintSelector(event);
}

const resetGrid=()=>{
    gridSquares.forEach(square=>square.className="box")
    selectedColor=null
    const strongTag=document.querySelector(`#colorSelected`);
    strongTag.textContent="";
}

const colorSquare=document.querySelectorAll(".color");

colorSquare.forEach(square=>square.addEventListener("click",selectColor))


const gridSquares=document.querySelectorAll(".box");

gridSquares.forEach(square=>square.addEventListener("click",paintSelector))

gridSquares.forEach(square=>
    square.addEventListener("mousemove",paintSquareOnMove
    ));

const resetBtn= document.querySelector("#reset-btn")

resetBtn.addEventListener("click",resetGrid);