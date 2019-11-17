'use  strict';
window.onload = function () {

let toDo = [];
  if (localStorage.getItem('todo') != undefined){
    toDo = JSON.parse(localStorage.getItem('todo'));
    out ();
  }
let getAdd = document.getElementById ('add').onclick = function (){
  let getTask = document.getElementById ('addTask').value;
  toDo.push(getTask);
  localStorage.setItem ('todo', JSON.stringify(toDo));
  out ();
  }
function out (){
  let out = document.getElementById ('out');
  let str = '';
  for (let i = 0; i < toDo.length; i++){
    if (toDo[i] !== undefined) {
      str += toDo[i] + '<br>';
    }
  }
  out.innerHTML = str;
}

}
