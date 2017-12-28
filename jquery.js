$(document).ready(function() {
   var redLight = "red";
   var redOFF = "#9f0f17";
   var greenLight = "green"
   var greenOFF = "#008000";
   var blueLight = "blue";
   var blueOFF = "#094a8f";
   var yellowLight = "yellow";
   var yellowOFF = "#cca707";
   var arrBot = [];
   var arrPlayer = [];
   // arrBot.push(random);

   function lightUp(box, colorON, colorOFF) {
      $(box).css("background-color", colorON);
      setTimeout(function() {
         $(box).css("background-color", colorOFF);
      }, 1000);
   }
   // alert(random);


   setInterval(function() {
      random = Math.floor((Math.random() * 10) + 2);
      if (random <= 3) {
         lightUp("#box1", greenLight, greenOFF);
      } else if (random <= 6) {
         lightUp("#box2", redLight, redOFF);
      } else if (random <= 9) {
         lightUp("#box3", yellowLight, yellowOFF);
      } else if (random <= 12) {
         lightUp("#box4", blueLight, blueOFF);
      }
   },2000);

});