const body = document.querySelector('body')

let currentGrid = 24
let container = document.querySelector('.container')
let color = 'black'
let mouseDown = false;
let rainbowMode = false;

const gridSizeValue = document.getElementById('gridSizeValue')
const gridSizeSlider = document.getElementById('gridSizeSlider')
const colorPicker = document.getElementById('colorPicker')

document.body.onmousedown = function() { 
  mouseDown = true;
}
document.body.onmouseup = function() {
  mouseDown = false;
}

gridSizeSlider.onmousemove = (e) => updateGridSizeValue(e.target.value)
gridSizeSlider.onchange = (e) => createGrid(e.target.value)
colorPicker.oninput = (e) => changeColor(e.target.value)

function changeColor(newColor) {
    if(newColor == 'rainbow') {
        rainbowMode = true
    }
    else {
        rainbowMode = false 
        color = newColor
    }
   
}

function updateGridSizeValue(size) { 
    gridSizeValue.innerHTML= `${size} x ${size}`
}
/* function animateGrid () {
    const squares = document.querySelectorAll('.gridElement')
squares.forEach(div => {
    div.addEventListener('mouseover', e => {
    if(mouseDown) {
    e.target.style.backgroundColor = color}
})
div.addEventListener('mousedown', e => {
    e.target.style.backgroundColor = color
})
})
} */

function activateGrid() {
    const table = document.querySelector('.container')
    table.addEventListener('mouseover', e => {
        if(mouseDown) {
            if(rainbowMode) {
                color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
            }
        e.target.style.backgroundColor = color}
    })
    table.addEventListener('mousedown', e => {
        if(rainbowMode) {
            color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
        }
        e.target.style.backgroundColor = color
})}
 

function createGrid (x = currentGrid) {
    currentGrid = x
    container.remove()
    container = document.createElement('div')
    container.classList.add('container')
    body.appendChild(container)
for (let index = 0; index <  x; index++) {
    let row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    for (let index = 0; index < x; index++) {
        let gridElement = document.createElement('div')
        gridElement.classList.add('gridElement')
        row.appendChild(gridElement) 
    }}
    activateGrid()
}

createGrid(currentGrid)
