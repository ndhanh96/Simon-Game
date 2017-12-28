$(document).ready(function() {
   var redLight = "red";
   var redOFF = "#993300";
   var greenLight = "#66ff33"
   var greenOFF = "#008000";
   var blueLight = "#0099cc";
   var blueOFF = "#006699";
   var yellowLight = "#ffff66";
   var yellowOFF = "#999900";
   var arrBot = [];
   var arrPlayer = [];
   // arrBot.push(random);

   function lightUp(box, colorON, colorOFF) {
      $(box).css("background-color", colorON);
      setTimeout(function() {
         $(box).css("background-color", colorOFF);
      }, 2000);
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
   },3000);

});