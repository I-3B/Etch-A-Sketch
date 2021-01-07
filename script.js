function RandomBackgroundColor(){
    let colors=['tomato','brown','chartreuse','slateblue','olive'];
    return  colors[Math.floor(Math.random()*colors.length)];
}

document.body.style.setProperty('--background-color',RandomBackgroundColor());


var size=16;
var cells;
const clear=document.getElementById('clear');
const container = document.getElementById('container');
const grid=document.createElement('div');
const input=document.getElementById('size-input');
grid.setAttribute('id','grid');
container.appendChild(grid);

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      setSize(document.getElementById("size-input").value);
      makeGrid(size);
    }
  });

function makeGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    grid.style.setProperty('--grid-rows', size);
    grid.style.setProperty('--grid-cols', size);
    for (c = 0; c < size**2; c++) {
    let cell = document.createElement('div');
    grid.appendChild(cell).className = 'cell';
    };
    cells=document.querySelectorAll('.cell');
    cells.forEach(i=>i.addEventListener('mouseover',()=>{
    i.setAttribute('style','background-color:black;')
}));
};

function setSize(v){
    if(v>=6&&v<=100)
        size=v;
    else
        alert("Wrong size input");
}
makeGrid(size);
clear.addEventListener('click',()=>{
    makeGrid(size);
});


