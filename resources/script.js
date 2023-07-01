const body = document.querySelector('body')
let container = document.querySelector('.container')

function animateGrid () {
    const squares = document.querySelectorAll('.gridElement')
squares.forEach(div => {
    div.addEventListener('mousedown', e => {
    e.target.classList.add('backgroundColor')
})
div.addEventListener('mouseout', e => {
    e.target.addEventListener('transitionend', e => e.target.classList.remove('backgroundColor'))
})})
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