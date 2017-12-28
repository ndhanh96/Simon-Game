$(document).ready(function() {
   var strictMode = false;
   var userColor = 0;
   var wrongColor = false;
   var times = 0;
   var count = 0;
   var startClicked = false;
   var runGame;
   var gameOn = false;
   var redLight = "red";
   var redOFF = "#993300";
   var greenLight = "#66ff33";
   var greenOFF = "#008000";
   var blueLight = "#0099cc";
   var blueOFF = "#006699";
   var yellowLight = "#ffff66";
   var yellowOFF = "#999900";
   var arrBot = [];
   var arrPlayer = [];
   var redSound = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
   var greenSound = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
   var blueSound = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
   var yellowSound = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
   var isGameRunning = true;
   // arrBot.push(random);

   function lightUp(box, colorON, colorOFF, sound) {
      $(box).css("background-color", colorON);
      // new Audio(sound).play();
      $("audio").attr('src', sound);
      setTimeout(function() {
         $(box).css("background-color", colorOFF);
      }, 1000);
   }

   function Move(color) {
      if (color == "green") {
         lightUp("#box1", greenLight, greenOFF, greenSound);
      } else if (color == "red") {
         lightUp("#box2", redLight, redOFF, redSound);
      } else if (color == "yellow") {
         lightUp("#box3", yellowLight, yellowOFF, yellowSound);
      } else if (color == "blue") {
         lightUp("#box4", blueLight, blueOFF, blueSound);
      }
   }

   function TurnON() {
      isGameRunning = true;
      userColor = 0;
      if (count > 99) {
         turnOFF();
      }

      if (typeof arrBot[times] == "string") {
         Move(arrBot[times]);
         times++;
      } else if (typeof arrBot[times] != "string" && !wrongColor) {
         var random = Math.floor((Math.random() * 10) + 2);
         if (random <= 3) {
            arrBot.push("green");
            Move("green");
         } else if (random <= 6) {
            arrBot.push("red");
            Move("red");
         } else if (random <= 9) {
            arrBot.push("yellow");
            Move("yellow");
         } else if (random <= 12) {
            arrBot.push("blue");
            Move("blue");
         }
         count++;
         setTimeout(function() {
            paused();
            times = 0;
            isGameRunning = false;
         }, 1000);
      } else if (typeof arrBot[times] != "string" && wrongColor) {
         wrongColor = false;
         setTimeout(function() {
            paused();
            times = 0;
            isGameRunning = false;
         }, 1000);
      }
      $("#countTime").text(count);

   }

   function paused() {
      $("#box1").css("background-color", greenOFF);
      $("#box2").css("background-color", redOFF);
      $("#box3").css("background-color", yellowOFF);
      $("#box4").css("background-color", blueOFF);
      $("#countTime").text(count);
      clearInterval(runGame);
   }

   function turnOFF() {
      $("#box1").css("background-color", greenOFF);
      $("#box2").css("background-color", redOFF);
      $("#box3").css("background-color", yellowOFF);
      $("#box4").css("background-color", blueOFF);
      $("#startButton").removeClass('startButton').addClass('startButtonOff');
      clearInterval(runGame);
      $("#countTime").text("00");
      $("#countTime").removeClass('countBoxContentON').addClass('countBoxContent');
   }

   $("input[type=checkbox]").click(function(event) {
      /* Act on the event */
      if (!gameOn) {
         gameOn = true;

      } else {
         startClicked = false
         strictMode = false;
         $("#strictled").removeClass('strictLedON').addClass('strictLedOFF');
         wrongColor = false;
         times = 0;
         arrBot = [];
         count = 0;
         gameOn = false;
         clearInterval(runGame);
         turnOFF();
         startClicked = false;
         $("#startButton").removeClass('startButton').addClass('startButtonOff');
         $("#countTime").text("--");
      }
   });

   function reStart() {
      // alert("restart");
      times = 0;
      count = 0;
      $("#countTime").text("00");
      $("#startButton").removeClass('startButton').addClass('startButtonOff');
      $("#countTime").removeClass('countBoxContentON').addClass('countBoxContent');
      setTimeout(function() {
         $("#startButton").removeClass('startButtonOff').addClass('startButton');
         $("#countTime").removeClass('countBoxContent').addClass('countBoxContentON');
      }, 500);
      clearInterval(runGame);
      turnOFF();
      runGame = setInterval(function() { TurnON() }, 2000);
   }

   $("#startButton").click(function(event) {
      if (startClicked && gameOn) {
         arrBot = [];
         reStart();
      } else if (!startClicked && gameOn) {
         startClicked = true;
         $("#countTime").text("00");
         $("#startButton").removeClass('startButtonOff').addClass('startButton');
         $("#countTime").removeClass('countBoxContent').addClass('countBoxContentON');
         runGame = setInterval(function() { TurnON() }, 2000);
      }
   });

   function playerMove(color) {
      if (arrBot[userColor] == color) {
         Move(color);
         userColor++;
         if (typeof arrBot[userColor] != "string") {
            times = 0;
            runGame = setInterval(function() { TurnON() }, 2000);
         }
      } else if (arrBot[userColor] != color && !strictMode) {
         isGameRunning = true;
         wrongColor = true;
         $("#countTime").text("!!");
         times = 0;
         runGame = setInterval(function() { TurnON() }, 2000);
      } else if (arrBot[userColor] != color && strictMode) {
         isGameRunning = true;
         $("#countTime").text("!!");
         setTimeout(function() {
            arrBot = [];
            userColor = 0;
            wrongColor = false;
            reStart();
         }, 1000);
      }
   }

   $("#strictButton").click(function() {
      if (!startClicked && gameOn && !strictMode) {
         strictMode = true;
         $("#strictled").removeClass('strictLedOFF').addClass('strictLedON');
      } else if (strictMode && gameOn && startClicked) {
         strictMode = false;
         $("#strictled").removeClass('strictLedON').addClass('strictLedOFF');
         arrBot = [];
         userColor = 0;
         wrongColor = false;
         reStart();
      } else if (strictMode && gameOn && !startClicked) {
         strictMode = false;
         $("#strictled").removeClass('strictLedON').addClass('strictLedOFF');
      }
   });

   $("#box1").click(function() {
      if (!isGameRunning) {
         playerMove("green");
      }
   });
   $("#box2").click(function() {
      if (!isGameRunning) {
         playerMove("red");
      }
   });
   $("#box3").click(function() {
      if (!isGameRunning) {
         playerMove("yellow");
      }
   });
   $("#box4").click(function() {
      if (!isGameRunning) {
         playerMove("blue");
      }
   });
});