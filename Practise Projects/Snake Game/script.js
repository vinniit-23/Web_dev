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
  const headX = snakeLength[0].x;
  const headY = snakeLength[0].y;
  let score = 0;
  let xAxis, yAxis;
  xAxis = Math.floor(Math.random() * cols) * gridSize;
  yAxis = Math.floor(Math.random() * rows) * gridSize;

  // console.log(snakeLength);

  // const getInterval =
  function startGame() {
    // function generateFood() {
    // let xAxis, yAxis;
    // xAxis = Math.floor(Math.random() * cols) * gridSize;
    // yAxis = Math.floor(Math.random() * rows) * gridSize;

    //   return { x: xAxis, y: yAxis };
    // }

    function drawFood(snakeFood) {
      const foodColor = [Math.floor(Math.random() * fruitColor.length)];
      ctx.fillStyle = fruitColor[foodColor];
      // ctx.fillRect(snakeFood.x, snakeFood.y, gridSize, gridSize);
      // ctx.fillRect(xAxis, yAxis, gridSize, gridSize);
      ctx.fillRect(snakeFood.x, snakeFood.y, gridSize, gridSize);
    }
    // let snakeFood = generateFood();
    // let snakeFood = { x: xAxis, y: yAxis };
    let snakeFood = { x: 100, y: 50 };
    drawFood(snakeFood);

    function wallCollision() {
      if (
        headX < 0 ||
        headX > canvas.width ||
        headY < 0 ||
        headY > canvas.height
      ) {
        console.log("Snake Collided with wall ");
        console.log(
          "if anything went wrong on wall collision part then check wallCollision function",
        );
        return true;
      }
    }

    function selfCollision() {
      for (let index = 0; index < snakeLength.length; index++) {
        const element = snakeLength[index];
        if (element.x === headX && element.y === headY) {
          console.log("Snake Collided with itself ");
          console.log(
            "if anything went wrong on self collision part then check selfCollision function",
          );
          return true;
        }
      }
    }

    function foodCollision() {
      if (headX === snakeFood.x && headY === snakeFood.y) {
        console.log("Snake Collided with food ");
        console.log(
          "if anything went wrong on food collision part then check foodCollision function",
        );
        score++;
        return true;
      }
    }

    function checkCollision() {
      if (wallCollision()) {
        alert("Wall Collision happened");
      }
      if (selfCollision()) {
        alert("Self Collision happened");
      }
      if (!foodCollision()) {
        snakeLength.pop();
      }
    }

    function snakeMovement() {
      const dx = headX;
      const dy = headY;
      // const direction;
      window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
          // console.log("The up arrow key was pressed!");
          dx = dx;
          dy = dy - gridSize;
          console.log(dx);
          console.log(dy);
        } else if (event.key === "ArrowDown") {
          dx = dx;
          dy = dy + gridSize;
          console.log(dx);
          console.log(dy);
        } else if (event.key === "ArrowLeft") {
          dx = dx - gridSize;
          dy = dy;
          console.log(dx);
          console.log(dy);
        } else if (event.key === "ArrowRight") {
          dx = dx + gridSize;
          dy = dy;
          console.log(dx);
          console.log(dy);
        }
        // else {
        //   return;
        // }
      });
    }

    // function checkCollision(snakeLengthArray) {

    //   let x = snakeLengthArray[0].x;
    //   let y = snakeLengthArray[0].y;
    //   if (x <= 0 || x >= canvas.width || y <= 0 || y >= canvas.height) {
    //     alert("Restart the game");
    //   }
    //   // for (let index = 0; index < snakeLengthArray.length; index++) {
    //   //   const element = snakeLengthArray[index];
    //   //   if (element.x === x && element.y === y) {
    //   //     alert("Restart the game");
    //   //   }
    //   // }
    // }

    // function foodCollision(snakeLengthArray) {
    //   if (
    //     snakeFood.x === snakeLengthArray[0].x &&
    //     snakeFood.y === snakeLengthArray[0].y
    //   ) {
    //     // let snakeTail = snakeLengthArray[snakeLengthArray.length - 1];
    //     let snakeTail = snakeLengthArray.length - 1;
    //     console.log(snakeTail);

    //     // let newsnakeTail = { x: snakeTail.x + gridSize, y: snakeTail.y };
    //     // snakeLengthArray.push(newsnakeTail);
    //     // console.log(snakeLengthArray);
    //   }
    // }

    // function snakeMovement(snakeLengthArray) {
    //   let snakeHead = snakeLengthArray[0];
    //   let newHead;
    //   if (snakeHead.x <= canvas.width && snakeHead.y <= canvas.height) {
    //     // foodCollision(snakeLengthArray);
    //     // checkCollision(snakeLengthArray);
    //     checkCollision();
    //     newHead = { x: snakeHead.x + gridSize, y: snakeHead.y };
    //     // console.log(snakeLengthArray);
    //     // foodEaten(snakeLengthArray);
    //     return newHead;
    //   }
    //   // else {
    //   //   checkCollision(snakeLengthArray);
    //   //   return (newHead = { x: 0, y: snakeHead.y });
    //   // }
    // }
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
      drawSnake(snakeLength);
      drawFood(snakeFood);
      // let newHead = snakeMovement(snakeLength);
      // snakeLength.unshift(newHead);
      // snakeLength.pop();
      // console.log(drawSnake(snakeLength));
    }
    // const refreshInterval =
    setInterval(gameLoop, 1000);
    // return refreshInterval;
  }

  // function stop(interval) {
  //   clearInterval(interval);
  // }

  startGameButton.addEventListener("click", () => {
    // getInterval();
    startGame();
  });

  // stopGameButton.addEventListener("click", () => {
  //   stop(getInterval());
  //   console.log("Stop button clicked");
  // });
});
