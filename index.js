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

 if($('#first[type=radio]').prop('checked')) {
   divOne.append(`<label class="indTask">
   <input type="checkbox">
   <span class="checkmark"></span>${task}
   </label>`);
 } else if ($('#second[type=radio]').prop('checked')){
   divTwo.append(`<label class="indTask">
   <input type="checkbox">
   <span class="checkmark"></span>${task}
   </label>`);
 } else {
   console.log(fPriority.checked==true);
   divThree.append(`<label class="indTask">
   <input type="checkbox">
   <span class="checkmark"></span>${task}
   </label>`);
 }
}

function changeTitle() {
  event.preventDefault();
  var nameInput = $('.enterName').val();
  var submitName = $('.submit');
  header.text(`${nameInput}'s To-Do List`);
  localStorage.setItem('nameInput', nameInput);
}
