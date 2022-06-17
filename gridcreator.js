function createGrid(size = undefined) {
    let totalSize = 800;
    let columns = Math.sqrt(size);
    const gridDomSelector = document.getElementById("grid-container");
    gridDomSelector.innerHTML = "";
    if (size === undefined) {
        size = 256;
        columns = Math.sqrt(size);
    }
    for (let i = 0; i < size; i++) {
        const grid = document.createElement("div");
        grid.style.width = `${Math.floor(800 / columns)}px`;
        grid.style.height = `${Math.floor(800 / columns)}px`;
        grid.classList.add("grid-child");
        grid.addEventListener("mouseenter", function () {
            changeColor(grid);
        })
        gridDomSelector.appendChild(grid);
    }
}
function getColor(actual) {
    console.log(actual);
    if (actual === "" || actual === "white") {
        let num = Math.round(0xffffff * Math.random());
        let r = num >> 16;
        let g = num >> 8 & 255;
        let b = num & 255;
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    } else {
        let trim = actual.substring(4, actual.length - 2);
        let arr = trim.split(",");
        for (let i = 0; i < arr.length; i++) {
            arr[i] -= 20;
        }
        return 'rgb(' + arr[0] + ', ' + arr[1] + ', ' + arr[2] + ')';
    }
}

function clear() {
    let allBtns = document.querySelectorAll('.grid-child');
    allBtns.forEach(elem => elem.style.backgroundColor = "white");
}
function changeColor(gridSel) {
    let checkSelector = document.getElementById("randomColorCheck");
    console.log(checkSelector.checked);
    if (checkSelector.checked === true) {
        let newColor = getColor(gridSel.style.backgroundColor);
        gridSel.style.backgroundColor = newColor;
        console.log(newColor);
    } else {
        gridSel.style.backgroundColor = "black";
    }
}
let regenBtn = document.getElementById("regenBtn");
regenBtn.addEventListener("click", function () {
    let value = prompt("Insert number of cols (Ex: 10)");
    while (Number(value) > 100) {
        alert("Value should be less than 100");
        value = prompt("Insert number of cols (Ex: 10) Max: 100");
    }
    let totalChilds = Math.pow(value, 2);
    createGrid(totalChilds);
})
let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clear);


createGrid();