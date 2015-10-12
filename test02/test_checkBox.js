$(document).ready(function(){
$("#addContent").html("<p> hello world!!</p>");

$("#btnCancel").dblclick(function(){
//alert("haha..");
$("#news").toggleClass("newspaper");
//alert($("#news").hasClass("newspaper"));
$("#news p").css("color","blue");
//$("#news").addClass("newspaper");
//alert($("#news").attr("class","newspaper").attr("class"));

//$("#news").height(0);
//$("#news").width(0);
$("#news").css("position","absolute");
$("#news").css("left",100);
$("#news").css("top",100);
//alert($("#news").position());
alert($("#news").children("p").css("color","red"));
$("#news").next().css("color","red");
});


});
