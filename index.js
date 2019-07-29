var task = $('.box').val();
var priority = $('.priority');
var fPriority = $('#first');
var sPriority = $('#second');
var tPriority = $('#third');
var button = $('button');
var divOne = $('.one');
var divTwo = $('.two');
var divThree = $('.three');
var header = $('h1')

button.on("click", addToList);

function addToList() {
  var task = $('.box').val();
  var priority = $('.priority');
  var fPriority = $('#first');
  var sPriority = $('#second');
  var tPriority = $('#third');

 if(fPriority.checked) {
   divOne.append(`<p>${task}</p>`);
 } else if (sPriority.checked){
   divTwo.append(`<p>${task}</p>`);
 } else {
   console.log(fPriority.checked);
   divThree.append(`<p>${task}</p>`);
 }
}
