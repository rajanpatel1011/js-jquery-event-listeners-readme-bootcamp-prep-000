//define functions here
function getIt(){
  $('p').on("click",function(){
    alert("Hey!");
  });
}

function submitIt(){
  $('form').on("submit",function(){
    alert("Your form is going to be submitted now.");
  });
}


$(document).ready(function(){

// call functions here



getIt();
frameIt();
//PressIt();
submitIt();




});
