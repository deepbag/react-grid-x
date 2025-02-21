// BlockGame.tsx
import React, { useState, useEffect } from 'react';

interface BlockGameProps {
  width: number;
  height: number;
  speed: number;
}

interface Position {
  x: number;
  y: number;
}

const CELL_SIZE = 30;

const BlockGame: React.FC<BlockGameProps> = ({ width, height, speed }) => {
  const [block, setBlock] = useState<Position>({ x: Math.floor(width / 2), y: 0 });
  const [landed, setLanded] = useState<boolean[][]>(
    Array(height).fill(null).map(() => Array(width).fill(false))
  );
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Check and remove completed lines
  const checkLines = (currentLanded: boolean[][]) => {
    const newLanded = [...currentLanded];
    let linesCleared = 0;

    for (let y = height - 1; y >= 0; y--) {
      if (newLanded[y].every(cell => cell)) {
        // Remove the completed line
        newLanded.splice(y, 1);
        // Add empty line at top
        newLanded.unshift(Array(width).fill(false));
        linesCleared++;
        y++; // Check same index again as everything shifted down
      }
    }

    if (linesCleared > 0) {
      setScore(prev => prev + linesCleared * 100);
    }
    return newLanded;
  };

  // Game loop
  useEffect(() => {
    if (gameOver) return;

    const timer = setInterval(() => {
      setBlock((prev) => {
        const newY = prev.y + 1;
        
        if (newY >= height || landed[newY][prev.x]) {
          const newLanded = [...landed];
          newLanded[prev.y][prev.x] = true;
          
          // Check for game over
          if (prev.y === 0) {
            setGameOver(true);
            return prev;
          }

          // Check and clear lines
          const updatedLanded = checkLines(newLanded);
          setLanded(updatedLanded);

          return { x: Math.floor(width / 2), y: 0 };
        }
        
        return { ...prev, y: newY };
      });
    }, speed);

    return () => clearInterval(timer);
  }, [width, height, speed, landed, gameOver]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver) return;

      setBlock((prev) => {
        switch (e.key) {
          case 'ArrowLeft':
            return prev.x > 0 && !landed[prev.y][prev.x - 1] 
              ? { ...prev, x: prev.x - 1 } 
              : prev;
          case 'ArrowRight':
            return prev.x < width - 1 && !landed[prev.y][prev.x + 1] 
              ? { ...prev, x: prev.x + 1 } 
              : prev;
          case 'ArrowDown':
            return prev.y < height - 1 && !landed[prev.y + 1][prev.x] 
              ? { ...prev, y: prev.y + 1 } 
              : prev;
          default:
            return prev;
        }
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [width, height, landed, gameOver]);

  const containerStyle: React.CSSProperties = {
    width: `${width * CELL_SIZE}px`,
    height: `${height * CELL_SIZE}px`,
    border: '2px solid black',
    position: 'relative',
    backgroundColor: '#f0f0f0',
  };

  const cellStyle = (isBlock: boolean): React.CSSProperties => ({
    width: `${CELL_SIZE}px`,
    height: `${CELL_SIZE}px`,
    backgroundColor: isBlock ? 'blue' : 'transparent',
    border: '1px solid #ddd',
    position: 'absolute',
  });

  const renderGrid = () => {
    const cells = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (landed[y][x]) {
          cells.push(
            <div
              key={`landed-${x}-${y}`}
              style={{
                ...cellStyle(true),
                left: `${x * CELL_SIZE}px`,
                top: `${y * CELL_SIZE}px`,
              }}
            />
          );
        }
      }
    }
    cells.push(
      <div
        key="active-block"
        style={{
          ...cellStyle(true),
          left: `${block.x * CELL_SIZE}px`,
          top: `${block.y * CELL_SIZE}px`,
          backgroundColor: 'red',
        }}
      />
    );
    return cells;
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        Score: {score}
      </div>
      <div style={containerStyle}>
        {gameOver ? (
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
            color: 'red'
          }}>
            Game Over
            <div style={{ fontSize: '18px', marginTop: '10px' }}>
              Final Score: {score}
            </div>
          </div>
        ) : (
          renderGrid()
        )}
      </div>
    </div>
  );
};

export default BlockGame;