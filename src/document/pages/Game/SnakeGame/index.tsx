import React, { useState, useEffect, useRef } from "react";
import './snake-game.css'

interface Position {
  x: number;
  y: number;
}

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

interface SnakeGameProps {
  speed?: number;
  width?: number;  // Added width prop
  height?: number; // Added height prop
}

const SnakeGame: React.FC<SnakeGameProps> = ({ 
  speed = 100,
  width = 400,    // Default width
  height = 400    // Default height
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const gridSize: number = 20;
  const maxX: number = width / gridSize;  // Max x position based on width
  const maxY: number = height / gridSize; // Max y position based on height

  const moveSnake = (): void => {
    if (gameOver) return;

    const head: Position = { ...snake[0] };
    switch (direction) {
      case "RIGHT":
        head.x += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "UP":
        head.y -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
      default:
        break;
    }

    // Wrap around borders
    if (head.x >= maxX) head.x = 0;          // Right to left
    else if (head.x < 0) head.x = maxX - 1;  // Left to right
    if (head.y >= maxY) head.y = 0;          // Bottom to top
    else if (head.y < 0) head.y = maxY - 1;  // Top to bottom

    // Check collision with self
    if (snake.some((segment) => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      return;
    }

    const newSnake: Position[] = [head, ...snake];
    if (head.x === food.x && head.y === food.y) {
      setScore((prev) => prev + 1);
      setFood({
        x: Math.floor(Math.random() * maxX),
        y: Math.floor(Math.random() * maxY),
      });
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  const handleKeyPress = (e: KeyboardEvent): void => {
    switch (e.key) {
      case "ArrowUp":
        if (direction !== "DOWN") setDirection("UP");
        break;
      case "ArrowDown":
        if (direction !== "UP") setDirection("DOWN");
        break;
      case "ArrowLeft":
        if (direction !== "RIGHT") setDirection("LEFT");
        break;
      case "ArrowRight":
        if (direction !== "LEFT") setDirection("RIGHT");
        break;
      default:
        break;
    }
  };

  const drawGame = (): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, width, height);  // Use width and height props

    ctx.fillStyle = "green";
    snake.forEach((segment) => {
      ctx.fillRect(
        segment.x * gridSize,
        segment.y * gridSize,
        gridSize - 2,
        gridSize - 2
      );
    });

    ctx.fillStyle = "red";
    ctx.fillRect(
      food.x * gridSize,
      food.y * gridSize,
      gridSize - 2,
      gridSize - 2
    );

    if (gameOver) {
      ctx.fillStyle = "black";
      ctx.font = "24px Arial";
      ctx.fillText(
        `Game Over! Score: ${score}`,
        width / 4,    // Adjusted for new width
        height / 2    // Adjusted for new height
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [snake, direction, gameOver, speed]);

  useEffect(() => {
    drawGame();
  }, [snake, food, gameOver, width, height]); // Added width and height as dependencies

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction]);

  const restartGame = (): void => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection("RIGHT");
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="rgx-snake-game">
      <h2 className="rgx-title">Snake Game</h2>
      <p className="rgx-score">Score: {score}</p>
      <canvas
        ref={canvasRef}
        width={width}    // Use width prop
        height={height}  // Use height prop
        className="rgx-canvas"
      />
      {gameOver && (
        <button className="rgx-restart-btn" onClick={restartGame}>
          Restart
        </button>
      )}
    </div>
  );
};

export default SnakeGame;