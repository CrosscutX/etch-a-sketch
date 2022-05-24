const boxContainer = document.querySelector('.box-container');

let boxRow = document.createElement('div'); 
let box = document.createElement('div'); 

function createGrid(){
    
    for(let column = 0; column < 16; column++){
        boxRow = document.createElement('div');
        boxRow.className = 'box-row';
        boxContainer.appendChild(boxRow);
        
        for(let row = 0; row < 16; row++){
            box = document.createElement('div');
            box.className = 'box';
            boxRow.appendChild(box);
        }
    }
}
createGrid();

const sketch = document.querySelectorAll('.box');
console.log(sketch);

sketch.forEach(box => {
    box.addEventListener('mouseenter' , () => {
        box.style.backgroundColor = 'black';
    });
});
