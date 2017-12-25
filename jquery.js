$(document).ready(function(){
   $("#box4").hover(function() {
      $("#box4").css("background", "#0bb8ff");
   });
   $("#box4").mouseleave(function(){
      $("#box4").css("background", "#094a8f");
   });

   $("#box2").hover(function() {
      $("#box2").css("background", "red");
   });
   $("#box2").mouseleave(function(){
      $("#box2").css("background", "#9f0f17");
   });
});
