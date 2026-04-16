document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("Canvas");
  const ctx = canvas.getContext("2d");
  const startGameButton = document.getElementById("Start-Game-Button");
  let fruitColor = ["yellow", "white"];
  let snakeLength = [
    { x: 50, y: 50 },
    { x: 40, y: 50 },
    { x: 30, y: 50 },
  ];
  const gridSize = 10;
  const rows = canvas.height / gridSize; // 60
  const cols = canvas.width / gridSize; //100

  startGameButton.addEventListener("click", () => {
    function generateFood() {
      let xAxis, yAxis;
      xAxis = Math.floor(Math.random() * cols) * gridSize;
      yAxis = Math.floor(Math.random() * rows) * gridSize;

      return { x: xAxis, y: yAxis };
    }

    function drawFood(snakeFood) {
      const foodColor =
        fruitColor[Math.floor(Math.random() * fruitColor.length)];
      ctx.fillStyle = foodColor;
      ctx.fillRect(snakeFood.x, snakeFood.y, gridSize, gridSize);
    }
    let snakeFood = generateFood();
    drawFood(snakeFood);

    function snakeMovement(snakeLengthArray) {
      let snakeHead = snakeLengthArray[0];
      let newHead = { x: snakeHead.x + gridSize, y: snakeHead.y };
      console.log(snakeLengthArray);
      return newHead;
    }
    let newHead = snakeMovement(snakeLength);
    snakeLength.unshift(newHead);
    snakeLength.pop();

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
    // drawSnake(snakeLength);
    function gameLoop() {
      ctx.fillStyle = "#006992";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawFood(snakeFood);
      drawSnake(snakeLength);
    }
    setInterval(gameLoop, 1000);
  });
});
