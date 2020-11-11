$(function() {
   
   if(window.sessionStorage.getItem("firstname")!=undefined){
      document.getElementById('para1').innerHTML="Welcome "+window.sessionStorage.getItem("firstname");

   }
   $('.group_hidden').hide();
   $('#film_div').click(function(){
      $('#film_div1').toggle();
   });
   $('#film_div2').click(function(){
      $(this).next().toggle();
   });
   $('#film_div3').click(function(){
      $(this).next().toggle();
   });


   $(".group_content").click(function(){
      $(this).children(2).slideToggle();
   });

});