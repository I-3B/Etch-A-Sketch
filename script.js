function RandomBackgroundColor(){
    let colors=['tomato','brown','chartreuse','slateblue','olive'];
    return  colors[Math.floor(Math.random()*colors.length)];
}

document.body.style.setProperty('--background-color',RandomBackgroundColor());
document.addEventListener('mouseover', logKey);

var ctrlPressed=false;
var shiftPressed=false;
var size=16;
var cells;
const clear=document.getElementById('clear');
const container = document.getElementById('container');
const grid=document.createElement('div');
const input=document.getElementById('size-input');
const message=document.createElement('div');

grid.setAttribute('id','grid');
container.appendChild(grid);

message.setAttribute('id','message');

message.innerHTML='<p>Drawing: Ctrl + mouse<br>Erasing: Shift + mouse<p>';
container.appendChild(message);
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      setSize(document.getElementById("size-input").value);
      makeGrid(size);
    }
  });
  function logKey(e) {
    ctrlPressed=e.ctrlKey;
    shiftPressed=e.shiftKey;
    
  }
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
    if(ctrlPressed)
        i.setAttribute('style','background-color:black;');
    else if(shiftPressed)
        i.setAttribute('style','background-color:default;');
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
    cells.forEach(i=>i.setAttribute('style','background-color:default;'));
});


