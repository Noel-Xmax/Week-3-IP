$(document).ready(function(){
$ ('.submit').click(function(event){  
  event.preventdefault();
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var name=document.getElementById("name").value;
  var message=document.getElementById("msg").value;
  if (name=="" || email=="" || message==""){
    alert("This fill in above detals");
  }else{
    alert("Hello" + name +" have received your message. Thank you fro reaching out to us");
  }
});

});
$('.design').click(function(){
  $(".design").toggle();
  $(".design").toggle();
})
$('.development').click(function(){
  $(".development").toggle();
  $(".development").toggle();
})
$('.product').click(function(){
  $(".product").toggle();
  $(".product").toggle();
})
$('.Hover').hover(function(){
    $(this).animate({opacity:"1"});
  function(this){
    $(this)animate({opacity:"0"});
  });
