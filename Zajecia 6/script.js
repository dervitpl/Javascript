      var ball = document.getElementById("ball");
      var hole = document.getElementById("hole");
      var ballX = 0;
      var ballY = 0;
      var holeX = window.innerWidth / 2 - 50;
      var holeY = window.innerHeight / 2 - 50;
      var score = 0;
      var startTime;
      function moveBall(event) {
        ballX = event.clientX - 25;
        ballY = event.clientY - 25;
        ball.style.left = ballX + "px";
        ball.style.top = ballY + "px";

        if (Math.abs(ballX - holeX) < 50 && Math.abs(ballY - holeY) < 50) {
          score++;
          ballX = 0;
          ballY = 0;
          ball.style.left = ballX + "px";
          ball.style.top = ballY + "px";
        }
      }

      function startTimer() {
        startTime = Date.now();
        setTimeout(endTimer, 60000);
      }

      function endTimer() {
        var endTime = Date.now();
        var timeElapsed = endTime - startTime;
        console.log("Czas: " + (timeElapsed / 1000) + " sekund");
        console.log("Liczba trafień: " + score);

      var record = {
time: timeElapsed,
score: score
};
      var recordsList = JSON.parse(localStorage.getItem("records")) || [];
      recordsList.push(record);
      localStorage.setItem("records", JSON.stringify(recordsList));
      console.log("Lista rekordów: ", recordsList);
      }
      
      window.addEventListener("devicemotion", moveBall);
      window.addEventListener("click", startTimer);