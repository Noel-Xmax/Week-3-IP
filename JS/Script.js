$(document).ready(function(){

$ ('.submit').click(function(event){  
  event.preventdefault();
  function getMessage (){
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var name=document.getElementById("name").value;
  var message=document.getElementById("msg").value;
  if (name=="" || email=="" || message==""){
    alert("This fill in above detals");
  }else{
    alert("Hello" + name +" have received your message. Thank you fro reaching out to us");
  }
}
});
$('#desig').click(function(){
  $('#view1').toggle();
});
$('#dev').click(function(){
  $('#view2').toggle();
});
$('#prod').click(function(){
  $('#view3').toggle();
});














});
// $(".design").click(function(){
// $("#view1").toggle();
// });

// });
// // $('.design').click(function(){
//   $("#design").toggle();
//   $(".hide").toggle();
// })
// $('.development').click(function(){
//   $("#development").toggle();
//   $(".hide").toggle();
// })
// $('#product').click(function(){
//   $("#product").toggle();
//   $(".hide").toggle();
// })
// $('#Image1').click(function(){
//   $('.design').toggle(1000);
//   $('#view1').toggle(1000);
// });
// $('#Image2').click(function(){
//   $('.development').toggle(1000);
//   $('#view2').toggle(1000);
// });
// $('#Image3').click(function(){
//   $('.product').toggle(1000);
//   $('#view3').toggle(1000);
// });
// $('#Image1').click(function(){
//   $('Image1').slideDown('1200').hide('.1000');
//   $('Image1').show('1000'); 
// });
// $('#Image1').click(function(){
//   $('Image1').slideUp('1200');
//   $('Image1').slideDown('1000'); 
// });

// $('#portfolio').hover(function(){
//     $(this).animate({opacity:"1"});
//     function:(this){
//     $(this) animate({opacity:"0"});
//   });
// });