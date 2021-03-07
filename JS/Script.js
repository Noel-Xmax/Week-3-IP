$(document).ready(function(){

  // console.log("bdfdf")
  $('form#contact-details').submit(function(event){  
    event.preventDefault();
    // console.log("fjfd")
    var name= $("input#name").val();
    var email= $("input#email").val();
    var message= $("#msg").val();
    console.log(name,email,message)
    if (name=="" || email=="" || msg==""){
      alert("Please fill in above detals");
    }else{
    alert("Hello" + name + " , we have received your message. Thank you for reaching out to us.");
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
$('.portfolio').click(function(){
  $(".col-md-3");fadeIn();
  $(".descp");fadeOut();
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