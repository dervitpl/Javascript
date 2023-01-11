
      const NUM_BALLS = 20; 
      const MIN_DISTANCE = 0.2; 
      let balls = [];
      let canvas;
      let ctx;
      let speeds = [];
      let isAnimating = false;
      function init() {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < NUM_BALLS; i++) {
          let ball = { x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 20 + 10 };
          let speed = { x: (Math.random() - 0.5) * 5, y: (Math.random() - 0.5) * 5 };
          balls.push(ball);
          speeds.push(speed);
        }

        document.getElementById("start-button").addEventListener("click", startAnimation);

        document.getElementById("reset-button").addEventListener("click", reset);
      }
      
      function animate() {
        if (!isAnimating) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "black";
        for (let i = 0; i < NUM_BALLS; i++) {
          let ball = balls[i];
          ctx.beginPath();
          ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
          ctx.fill();
}
    ctx.strokeStyle = "red";
    for (let i = 0; i < NUM_BALLS; i++) {
      for (let j = i + 1; j < NUM_BALLS; j++) {
        let distance = Math.sqrt(Math.pow(balls[i].x - balls[j].x, 2) + Math.pow(balls[i].y - balls[j].y, 2));
        if (distance < MIN_DISTANCE * canvas.width) {
          ctx.beginPath();
          ctx.moveTo(balls[i].x, balls[i].y);
          ctx.lineTo(balls[j].x, balls[j].y);
          ctx.stroke();
        }
      }
    }

    for (let i = 0; i < NUM_BALLS; i++) {
      let ball = balls[i];
      let speed = speeds[i];

      if (ball.x + ball.r > canvas.width || ball.x - ball.r < 0) {
        speed.x = -speed.x;
      }
      if (ball.y + ball.r > canvas.height || ball.y - ball.r < 0) {
        speed.y = -speed.y;
      }

      ball.x += speed.x;
      ball.y += speed.y;
    }

    requestAnimationFrame(animate);
  }

  function startAnimation() {
    isAnimating = true;
    requestAnimationFrame(animate);
  }

  function reset() {
    isAnimating = false;
    balls = [];
    speeds = [];

    for (let i = 0; i < NUM_BALLS; i++) {
      let ball = { x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 20 + 10 };
      let speed = { x: (Math.random() - 0.5) * 5, y: (Math.random() - 0.5) * 5 };
      balls.push(ball);
      speeds.push(speed);
    }
  }

  window.addEventListener("load", init);
  
