$(document).ready(function(){

$("#btnGet").click(function(){
	
	var x=$("p").get();
	//var y=x.first();
	x.innerHTML = "999999";
	//alert(x.nodeName +";;"+x.innerHTML);
	//alert($("div").get(2).html());
	$("#btnGet").animate({position:"absolute",left:"100px",width:"200px",paddingLeft:"10px",marginLeft:"10px"});
});





});
