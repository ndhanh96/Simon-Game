$(document).ready(function() {
   var startClicked = false;
   var runGame;
   var gameOn = false;
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

   function TurnON() {
      var random = Math.floor((Math.random() * 10) + 2);
      if (random <= 3) {
         lightUp("#box1", greenLight, greenOFF);
      } else if (random <= 6) {
         lightUp("#box2", redLight, redOFF);
      } else if (random <= 9) {
         lightUp("#box3", yellowLight, yellowOFF);
      } else if (random <= 12) {
         lightUp("#box4", blueLight, blueOFF);
      }
   }

   function turnOFF(argument) {
      // body...
      $("#box1").css("background-color", greenOFF);
      $("#box2").css("background-color", redOFF);
      $("#box3").css("background-color", yellowOFF);
      $("#box4").css("background-color", blueOFF);
   }
   // alert(random);

   $("input[type=checkbox]").click(function(event) {
      /* Act on the event */
      if (!gameOn) {
         gameOn = true;
         runGame = setInterval(function() { TurnON() }, 3000);
      } else {
         gameOn = false;
         clearInterval(runGame);
         turnOFF();
         startClicked = false;
         $("#startButton").removeClass('startButton').addClass('startButtonOff');
      }
   });

   $("#startButton").click(function(event) {
      if(startClicked) {
         $("#startButton").removeClass('startButton').addClass('startButtonOff');
         startClicked = false;
      } else if(!startClicked && gameOn) {
         startClicked = true;
         $("#startButton").removeClass('startButtonOff').addClass('startButton');
      }
   });
});