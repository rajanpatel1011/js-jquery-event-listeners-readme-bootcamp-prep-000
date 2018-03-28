//define functions here
function getIt(){
  $('p').on("click",function(){
    alert("Hey!");
  });
}
function frameIt(){
  $(document).on("load",function(){
    ('img').addClass("tasty");
  });
}
/*
function PressIt(){
  $('document').on("keydown",function(key){
    if(key.which=='g'){
     alert("pressed G!");
    }
    if(key.which!='g'){
      alert("not G key pressed");
    }
  });
}
*/
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
