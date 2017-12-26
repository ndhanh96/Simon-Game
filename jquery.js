$(document).ready(function(){
   $("#box4").hover(function() {
   });

   $("#box2").hover(function() {
      $("#box2").css("background", "red");
   });
   $("#box2").mouseleave(function(){
      $("#box2").css("background", "#9f0f17");
   });

});
