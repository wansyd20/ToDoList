var task = $('.box').val();
var priority = $('.priority');
var fPriority = $('#first').val();
var sPriority = $('#second').val();
var tPriority = $('#third').val();
var button = $('button');
var divOne = $('.one');
var divTwo = $('.two');
var divThree = $('.three');
var header = $('h1')

button.on("click", addToList);

function addToList() {
  var task = $('.box').val();
  var priority = $('.priority');
  var fPriority = $('#first').val();
  var sPriority = $('#second').val();
  var tPriority = $('#third').val();

 if((fPriority).checked == true) {
   divOne.append(`${task}`);
 } else if ((sPriority).checked == true){
   divTwo.append(`${task}`);
 } else {
   divThree.append(`${task}`);
 }
}
console.log(header)
