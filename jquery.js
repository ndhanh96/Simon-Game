$(document).ready(function() {
   var count = 0;
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
      }, 1000);
   }

   function TurnON() {
      if (count > 99) {
         reStart();
      }
      count++;
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
      $("#countTime").text(count);
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
      } else {
         count = 0
         gameOn = false;
         clearInterval(runGame);
         turnOFF();
         startClicked = false;
         $("#startButton").removeClass('startButton').addClass('startButtonOff');
         $("#countTime").text("--");
      }
   });

   function reStart() {
      count = 0;
      $("#countTime").text(count);
      $("#startButton").removeClass('startButton').addClass('startButtonOff');
      setTimeout(function() {
         $("#startButton").removeClass('startButtonOff').addClass('startButton');
      }, 500);
      clearInterval(runGame);
      turnOFF();
      runGame = setInterval(function() { TurnON() }, 2000);
   }

   $("#startButton").click(function(event) {
      if (startClicked && gameOn) {
         reStart();
      } else if (!startClicked && gameOn) {
         startClicked = true;
         $("#countTime").text(count);
         $("#startButton").removeClass('startButtonOff').addClass('startButton');
         runGame = setInterval(function() { TurnON() }, 2000);
      }
   });
});