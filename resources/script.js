const body = document.querySelector('body')
let container = document.querySelector('.container')
let color = 'black'
let mouseDown = 0;
document.body.onmousedown = function() { 
  mouseDown = 1;
}
document.body.onmouseup = function() {
  mouseDown = 0;
}

function changeColor(newColor) {
    color = newColor
}

function animateGrid () {
    const squares = document.querySelectorAll('.gridElement')
squares.forEach(div => {
    div.addEventListener('mouseover', e => {
    if(mouseDown==1) {
    e.target.style.backgroundColor = color}
})
})
}


function createGrid (x) {
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
    }
}
animateGrid()
}

createGrid(24)