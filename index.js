var task = $('.box').val();
var priority = $('.priority');
var fPriority = $('#first');
var sPriority = $('#second');
var tPriority = $('#third');
var button = $('button');
var divOne = $('.one');
var divTwo = $('.two');
var divThree = $('.three');
var header = $('.title');
var nameInput = $('.enterName').val();
var submitName = $('.submit');
var currentName = localStorage.getItem('nameInput');

button.on("click", addToList);
submitName.on("click", changeTitle);

function addToList() {
  event.preventDefault();
  var task = $('.box').val();
  var priority = $('.priority');
  var fPriority = $('#first');
  var sPriority = $('#second');
  var tPriority = $('#third');

 if(fPriority.checked==true) {
   divOne.append(`<p>${task}</p>`);
 } else if (sPriority.checked==true){
   divTwo.append(`<p>${task}</p>`);
 } else {
   console.log(fPriority.checked==true);
   divThree.append(`<p>${task}</p>`);
 }
}


function changeTitle() {
  event.preventDefault();
  var nameInput = $('.enterName').val();
  var submitName = $('.submit');
  header.text(`${nameInput}'s To-Do List`);
  localStorage.setItem('nameInput', nameInput);
}
