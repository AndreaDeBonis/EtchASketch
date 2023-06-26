const container = document.querySelector('.container')
for (let index = 0; index <  16; index++) {
    let row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    for (let index = 0; index < 16; index++) {
        let gridElement = document.createElement('div')
        gridElement.classList.add('gridElement')
        row.appendChild(gridElement) 
    }
}