document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("Canvas");
  const ctx = canvas.getContext("2d");
  const startGameButton = document.getElementById("Start-Game-Button");
  const stopGameButton = document.getElementById("Stop-Game-Button");
  const fruitColor = ["yellow", "white"];
  let snakeLength = [
    { x: 50, y: 50 },
    { x: 40, y: 50 },
    { x: 30, y: 50 },
  ];
  const gridSize = 10;
  const rows = canvas.height / gridSize; // 60
  const cols = canvas.width / gridSize; //100
  let dx = +gridSize;
  let dy = 0;
  let direction;
  window.addEventListener("keydown", (event) => {
    direction = event.key;

    if (event.key === "ArrowUp" && dy !== +gridSize) {
       dx = 0;
      dy = -gridSize;
      console.log(dx);
      console.log(dy);
    } else if (event.key === "ArrowDown" && dy !== -gridSize) {
      dx = 0;
      dy = +gridSize;
      console.log(dx);
      console.log(dy);
    } else if (event.key === "ArrowLeft" && dx !== +gridSize) {
      dx = -gridSize;
      dy = 0;
      console.log(dx);
      console.log(dy);
    } else if (event.key === "ArrowRight" && dx !== -gridSize) {
      dx = +gridSize;
      dy = 0;
      console.log(dx);
      console.log(dy);
    }
  });

  function startGame() {
    let score = 0;
    // let xAxis, yAxis;
    // xAxis = Math.floor(Math.random() * cols) * gridSize;
    // yAxis = Math.floor(Math.random() * rows) * gridSize;
    // let snakeFood = { x: xAxis, y: yAxis };
    function generateFood() {
      let xAxis, yAxis;
      xAxis = Math.floor(Math.random() * cols) * gridSize;
      yAxis = Math.floor(Math.random() * rows) * gridSize;

      return { x: xAxis, y: yAxis };
    }
    let snakeFood = generateFood();
    const foodColor = Math.floor(Math.random() * fruitColor.length);
    function drawFood(snakeFood) {
      ctx.fillStyle = fruitColor[foodColor];
      ctx.fillRect(snakeFood.x, snakeFood.y, gridSize, gridSize);
    }

    function wallCollision(head) {
      if (
        head.x < 0 ||
        head.x > canvas.width ||
        head.y < 0 ||
        head.y > canvas.height
      ) {
        console.log("Snake Collided with wall ");
        console.log(
          "if anything went wrong on wall collision part then check wallCollision function",
        );
        return true;
      }
    }

    function selfCollision(head) {
      for (let index = 1; index < snakeLength.length; index++) {
        const element = snakeLength[index];
        if (element.x === head.x && element.y === head.y) {
          console.log("Snake Collided with itself ");
          console.log(
            "if anything went wrong on self collision part then check selfCollision function",
          );
          return true;
        }
      }
    }

    function foodCollision(head, snakeFood) {
      if (head.x === snakeFood.x && head.y === snakeFood.y) {
        console.log("Snake Collided with food ");
        console.log(
          "if anything went wrong on food collision part then check foodCollision function",
        );
        score++;
        return true;
      }
    }

    function checkCollision(head) {
      if (wallCollision(head)) {
        alert("Wall Collision happened");
      }
      if (selfCollision(head)) {
        alert("Self Collision happened");
      }
    }

    function drawSnake(snakeLengthArray) {
      ctx.fillStyle = "#171123";
      for (let index = 0; index < snakeLengthArray.length; index++) {
        ctx.fillRect(
          snakeLengthArray[index].x,
          snakeLengthArray[index].y,
          gridSize,
          gridSize,
        );
      }
    }

    function gameLoop() {
      const head = snakeLength[0];
      let newHead = { x: head.x + dx, y: head.y + dy };
      checkCollision(newHead);
      snakeLength.unshift(newHead);
      if (foodCollision(newHead, snakeFood)) {
        snakeFood = generateFood();
      } else {
        snakeLength.pop();
      }
      ctx.fillStyle = "#006992";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawFood(snakeFood);
      drawSnake(snakeLength);
      console.log(snakeLength);
    }
    // const refreshInterval =
    setInterval(gameLoop, 500);
    // return refreshInterval;
  }

  startGameButton.addEventListener("click", () => {
     startGame();
  });

  stopGameButton.addEventListener("click", () => {
  });
});
