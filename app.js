let gridContainer = document.querySelector(".grid-container");
let gridCreateBtn = document.getElementById("create-grid");
let gridDeleteBtn = document.getElementById("delete-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let clrInput = document.getElementById("clr-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

// events object

let events = {
    mouse: {
        move: "mousemove",
        up: "mouseup",
        down: "mousedown",
    },
    touch: {
        move: "touchmove",
        up: "touchend",
        down: "touchstart",
    }
}

let deviceType = false;

let draw = false;
let erase = false;

const isTouchDevice = () => {
    try{
        document.createElement("TouchEvent");
        deviceType = "touch";
        return true;
    }catch(e){
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();