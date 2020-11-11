
$(function() {

   
   if(window.sessionStorage.getItem("firstname")!=undefined){
      document.getElementById('para1').innerHTML="Welcome "+window.sessionStorage.getItem("firstname");

   }

   $("#campus_div").hide();
   $("#online_div").hide();
   $("#campus_btn").click(function(){
      $("#online_div").hide();
      $("#campus_div").toggle();
   });
   $("#online_btn").click(function(){
      $("#campus_div").hide();
      $("#online_div").toggle();
   });

});

