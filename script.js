const puzzle = [
[5,3,"","",7,"","","",""],
[6,"","",1,9,5,"","",""],
["",9,8,"","","","",6,""],
[8,"","","",6,"","","",3],
[4,"","",8,"",3,"","",1],
[7,"","","",2,"","","",6],
["",6,"","","","",2,8,""],
["","","",4,1,9,"","",5],
["","","","",8,"","",7,9]
];

const solution = [
[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]
];

const board = document.getElementById("sudoku-board");

let seconds = 0;
let timerInterval;

function startTimer(){
timerInterval = setInterval(function(){

seconds++;

let mins = Math.floor(seconds / 60);
let secs = seconds % 60;

if(secs < 10) secs = "0" + secs;
if(mins < 10) mins = "0" + mins;

document.getElementById("timer").innerText = mins + ":" + secs;

},1000);
}

function createBoard(){
board.innerHTML="";

for(let i=0;i<9;i++){
for(let j=0;j<9;j++){

let cell=document.createElement("input");
cell.type="number";
cell.min=1;
cell.max=9;

if(puzzle[i][j]!=""){
cell.value=puzzle[i][j];
cell.disabled=true;
}

cell.id=i+"-"+j;
board.appendChild(cell);

}
}
}

function checkSudoku(){

for(let i=0;i<9;i++){
for(let j=0;j<9;j++){

let value=document.getElementById(i+"-"+j).value;

if(value != solution[i][j]){
document.getElementById("result").innerText="Incorrect Solution ";
return;
}

}
}

clearInterval(timerInterval);

document.getElementById("result").innerText="Correct Solution ";

let celebrate = document.getElementById("celebration");
celebrate.innerText="🎉 YOU SOLVED IT! 🎉";
celebrate.classList.add("win");

}

function resetSudoku(){
seconds = 0;
document.getElementById("timer").innerText="00:00";
document.getElementById("celebration").innerText="";
document.getElementById("result").innerText="";
clearInterval(timerInterval);
startTimer();
createBoard();
}

createBoard();
