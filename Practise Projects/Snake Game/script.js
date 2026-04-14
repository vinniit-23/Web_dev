document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("Canvas");
  const ctx = canvas.getContext("2d");
  let fruitColor = ["orange", "yellow", "green", "white", "skyblue"];
  let snakeLength = [];
  const gridSize = 10;
  const rows = canvas.height / gridSize; // 60
  const cols = canvas.width / gridSize;

  function generateFood() {
    let xAxis, yAxis;
    xAxis = Math.floor(Math.random() * cols) * gridSize;
    yAxis = Math.floor(Math.random() * rows) * gridSize;

    return { x: xAxis, y: yAxis };
  }
  let snakeFood = generateFood();
  // console.log(snakeFood.x);
  // console.log(snakeFood.y);
  ctx.fillStyle = fruitColor[Math.floor(Math.random() * fruitColor.length)];
  ctx.fillRect(snakeFood.x, snakeFood.y, gridSize, gridSize);

  function generateSnake() {
    let xAxis, yAxis;
    xAxis = Math.floor(Math.random() * (cols - 2)) * gridSize;
    yAxis = Math.floor(Math.random() * (rows - 2)) * gridSize;
    return { x: xAxis, y: yAxis };
  }
  let generatedSnake = generateSnake();
  // console.log(generatedSnake);
  console.log(snakeLength.push(generatedSnake));
  console.log(snakeLength);
  console.log(snakeLength[0].x);
  console.log(snakeLength[0].y);
  let snakeBody = { x: snakeLength[0].x + gridSize, y: snakeLength[0].y };
  console.log(snakeLength.push(snakeBody));
  let snaketail = { x: snakeLength[1].x + gridSize, y: snakeLength[1].y };
  console.log(snakeLength.push(snaketail));
  ctx.fillStyle = "red";

  for (let index = 0; index < snakeLength.length; index++) {
    if (snakeLength[index].x !== 0 && snakeLength[index].y !== 0) {
      ctx.fillRect(
        snakeLength[index].x,
        snakeLength[index].y,
        gridSize,
        gridSize,
      );
      // ctx.fillRect(generatedSnake.x, generatedSnake.y, gridSize, gridSize);
      // ctx.fillRect(generatedSnake.x, generatedSnake.y, gridSize, gridSize);
      // ctx.fillRect(generatedSnake.x, generatedSnake.y, gridSize, gridSize);



      
      // todo: tomorrow review the code and also check the functional part like how they are working and the make function to move the snake 
    }
  }
});
