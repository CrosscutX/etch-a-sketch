const container = document.querySelector('.box-container');

function createGrid(){
    for(let rows = 0; rows <= 16; rows++){
        for(let columns = 0; columns <= 16; columns++){
            const box = document.createElement('div');
            box.style.border = "1px solid black";
            container.appendChild(box);
            console.log(rows); 
        }     
    }
}

createGrid();