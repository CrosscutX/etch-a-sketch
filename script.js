const boxContainer = document.querySelector('.box-container');
const boxRow = document.querySelector('.box-row');
function createGrid(){
    for(let column = 0; column <= 17; column++){
        let box = document.createElement('div');
        box.className = 'box';
        boxContainer.appendChild(box);
    }
}
createGrid();