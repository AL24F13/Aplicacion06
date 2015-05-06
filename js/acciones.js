// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#bntvibrar').on('tap',
	 function(){
		 navigator.vibrate(1000);
	 }); //tap 'btnvibrar'
	 
	 $('#btnbeep').on('tap',
	  function(){
		 navigator.notification.beep(1)
	 });//Tap 'btnbeep'
	   
	$('#izquierda').on('swipeleft',
	function(){
		alert("Izquierda");
	});//Barrido izquierda
	
	$('#derecha').on('swiperight',
	function(){
		alert("Derecha");
	});//Barrido izquierda
	
	document. addEventListener("pause",function(){
		$ ("#listado"). append ("<p>se pauso </p>");
       });
	   
	   $(window).on ("orientationchange",function(e){
		   $("#listado"). append ("<p>orientacion: "+ e.orientation +"</p>");
	   });
}); 
});

