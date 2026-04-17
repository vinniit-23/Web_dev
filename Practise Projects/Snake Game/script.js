document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("Canvas");
  const ctx = canvas.getContext("2d");
  const startGameButton = document.getElementById("Start-Game-Button");
  const stopGameButton = document.getElementById("Stop-Game-Button");
  let fruitColor = ["yellow", "white"];
  let snakeLength = [
    { x: 50, y: 50 },
    { x: 40, y: 50 },
    { x: 30, y: 50 },
  ];
  const gridSize = 10;
  const rows = canvas.height / gridSize; // 60
  const cols = canvas.width / gridSize; //100

  console.log(snakeLength);

  startGameButton.addEventListener("click", () => {
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

    function snakeMovement(snakeLengthArray) {
      let snakeHead = snakeLengthArray[0];
      let newHead;
      if (snakeHead.x <= canvas.width && snakeHead.y <= canvas.height) {
        newHead = { x: snakeHead.x + gridSize, y: snakeHead.y };
        // console.log(snakeLengthArray);
        checkCollision(snakeLengthArray);
        foodEaten(snakeLengthArray);
        return newHead;
      }
      // else {
      //   checkCollision(snakeLengthArray);
      //   return (newHead = { x: 0, y: snakeHead.y });
      // }
    }

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
    // drawFood(snakeFood);

    function checkCollision(snakeLengthArray) {
      if (
        snakeLengthArray[0].x === 0 ||
        snakeLengthArray[0].x === 1000 ||
        snakeLengthArray[0].y === 0 ||
        snakeLengthArray[0].y === 600
      ) {
        alert("Restart the game");
      }
    }

    function foodEaten(snakeLengthArray) {
      if (
        snakeFood.x === snakeLengthArray[0].x &&
        snakeFood.y === snakeLengthArray[0].y
      ) {
        let snakeTail = snakeLengthArray.length - 1;
        let newsnakeTail = { x: snakeTail.x + gridSize, y: snakeTail.y };
        snakeLengthArray.push(newsnakeTail);
        console.log(snakeLengthArray);
      }
    }

    // drawSnake(snakeLength);
    function gameLoop() {
      ctx.fillStyle = "#006992";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawSnake(snakeLength);
      drawFood(snakeFood);
      let newHead = snakeMovement(snakeLength);
      snakeLength.unshift(newHead);
      snakeLength.pop();
      // console.log(drawSnake(snakeLength));
    }
    setInterval(gameLoop, 500);
  });

  function stop(params) {}

  stopGameButton.addEventListener("click", () => {
    stop();
  });
});
