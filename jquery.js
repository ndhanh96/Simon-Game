$(document).ready(function() {
   var times = 0;
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
   var arrBot = [3, 6, 9, 12];
   var arrPlayer = [];
   var redSound = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
   var greenSound = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
   var blueSound = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
   var yellowSound = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
   // arrBot.push(random);

   function lightUp(box, colorON, colorOFF, sound) {
      $(box).css("background-color", colorON);
      // new Audio(sound).play();
      $("audio").attr('src', sound);
      setTimeout(function() {
         $(box).css("background-color", colorOFF);
      }, 1000);
   }

   function TurnON() {
      if (count > 99) {
         reStart();
      }
      count++;
      
      if (count < 10) {
         count = "0" + count.toString();
      }
      $("#countTime").text(count);
      if (typeof arrBot[times] == "number") {
         if (arrBot[times] <= 3) {
            lightUp("#box1", greenLight, greenOFF, greenSound);
         } else if (arrBot[times] <= 6) {
            lightUp("#box2", redLight, redOFF, redSound);
         } else if (arrBot[times] <= 9) {
            lightUp("#box3", yellowLight, yellowOFF, yellowSound);
         } else if (arrBot[times] <= 12) {
            lightUp("#box4", blueLight, blueOFF, blueSound);
         }
         times++;
      } else {
         var random = Math.floor((Math.random() * 10) + 2);
         if (random <= 3) {
            lightUp("#box1", greenLight, greenOFF, greenSound);
         } else if (random <= 6) {
            lightUp("#box2", redLight, redOFF, redSound);
         } else if (random <= 9) {
            lightUp("#box3", yellowLight, yellowOFF, yellowSound);
         } else if (random <= 12) {
            lightUp("#box4", blueLight, blueOFF, blueSound);
         }
         setTimeout(function() {
            turnOFF();
            times = 0;
         },1000);
      }
      
   }

   function turnOFF(argument) {
      // body...
      $("#box1").css("background-color", greenOFF);
      $("#box2").css("background-color", redOFF);
      $("#box3").css("background-color", yellowOFF);
      $("#box4").css("background-color", blueOFF);
      $("#startButton").removeClass('startButton').addClass('startButtonOff');
      clearInterval(runGame);
      $("#countTime").text("00");
   }

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
      times = 0;
      count = 0;
      $("#countTime").text("00");
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
         $("#countTime").text("00");
         $("#startButton").removeClass('startButtonOff').addClass('startButton');
         runGame = setInterval(function() { TurnON() }, 2000);
      }
   });
});