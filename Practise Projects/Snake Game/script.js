document.addEventListener("DOMContentLoaded", () => {
  const Canvas = document.getElementById("Canvas");
  const ctx = Canvas.getContext("2d");

  Canvas.width = 400;
  Canvas.height = 400;

  let Snake = [];

  const gridSize = 20;
  const snakeHead = {
    x: 4,
    y: 3,
  };
  Snake.unshift(snakeHead);

  function moveSnake() {
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);

    let newHead = {
      x: 8,
      y: 7,
    };
    Snake.unshift(newHead);
    console.log(Snake);
    ctx.fillRect(
      Snake[0].x * gridSize,
      Snake[0].y * gridSize,
      gridSize,
      gridSize,
    );
  }
  // requestAnimationFrame(moveSnake);
  setTimeout(moveSnake, 1000);

  ctx.fillRect(
    Snake[0].x * gridSize,
    Snake[0].y * gridSize,
    gridSize,
    gridSize,
  );
  // moveSnake()
});
