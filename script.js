const boxContainer = document.querySelector('.box-container');


function createGrid(){
    
    for(let column = 0; column < 16; column++){
        let boxRow = document.createElement('div');
        boxRow.className = 'box-row';
        boxContainer.appendChild(boxRow);
        for(let row = 0; row < 16; row++){
            let box = document.createElement('div');
            box.className = 'box';
            boxRow.appendChild(box);
        }
    }
}
createGrid();