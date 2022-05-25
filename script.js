const boxContainer = document.querySelector('.box-container');

let boxRow = document.createElement('div'); 
let box = document.createElement('div'); 
//loops through to make initial grid
function createGrid(size = 16){
    
    for(let column = 0; column < size; column++){
        boxRow = document.createElement('div');
        boxRow.className = 'box-row';
        boxContainer.appendChild(boxRow);
        
        for(let row = 0; row < size; row++){
            box = document.createElement('div');
            box.className = 'box';
            boxRow.appendChild(box);
        }
    }
}
createGrid();


const btn = document.querySelector('BUTTON');
let sketch = document.querySelectorAll('.box');
let rowClass = document.querySelectorAll('.box-row')
let resize = 0;

//Allows the grid to color black on mouse hover
sketch.forEach(box => {
    box.addEventListener('mouseenter' , () => {
        box.style.backgroundColor = 'black';
    });
});

//Click event for reset button

btn.addEventListener('click', () =>{
    resize = prompt('Enter a number between 10 and 100!');
    if(resize >= 10 && resize <= 100){
        rowClass.forEach(element => {
            element.parentNode.removeChild(element)
        });
        createGrid(resize);
    
        //Without reassiging rowClass and sketch we will have nothing 
        //selected and reset will not work the second time
        rowClass = document.querySelectorAll('.box-row');
        sketch = document.querySelectorAll('.box');
        
        sketch.forEach(box => {
            box.addEventListener('mouseenter' , () => {
                box.style.backgroundColor = 'black';
            });
        });
        //Makes cancel break out with alerting
    }else if(resize == null){
        return;
    }else{
        alert('Invalid input');
    }
});



