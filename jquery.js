$(document).ready(function() {
   $("#box1").click(function(event) {
      /* Act on the event */
      $("#box1").css({
         background: '#13ff7c'
      });
      setTimeout(function() {
         $("#box1").css({
            background: '#00a74a'
         });
      }, 2000);
   });
});