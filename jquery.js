$(document).ready(function(){
   $("#canvas4").hover(function() {
      $("#canvas4").css("background", "#0bb8ff");
   });
   $("#canvas4").mouseleave(function(){
      $("#canvas4").css("background", "skyblue");
   });

   $("#canvas2").hover(function() {
      $("#canvas2").css("background", "red");
   });
   $("#canvas2").mouseleave(function(){
      $("#canvas2").css("background", "#bf3333");
   });
});