import React, { useState, useEffect } from "react";
import "./bird.css";

interface BirdPosition {
  x: number;
  y: number;
}

const messages = [
  "Customize data with @deepbag/react-grid-x!",
  "Sort smartly with @deepbag/react-grid-x!",
  "Handle big data with @deepbag/react-grid-x!",
  "Paginate easily with @deepbag/react-grid-x!",
  "Style freely with @deepbag/react-grid-x!",
  "Enhance UX with @deepbag/react-grid-x!",
  "Expand rows with @deepbag/react-grid-x!",
  "Load smoothly with @deepbag/react-grid-x!",
  "Select rows with @deepbag/react-grid-x!",
  "Light & dark mode with @deepbag/react-grid-x!",
];
const NEST_POSITION: BirdPosition = {
  x: window.innerWidth - 100, // Adjusted for larger nest size
  y: window.innerHeight - 100,
};

const Bird: React.FC = () => {
  const [position, setPosition] = useState<BirdPosition>({
    x: Math.random() * (window.innerWidth - 60),
    y: Math.random() * (window.innerHeight - 60),
  });
  const [isCaught, setIsCaught] = useState<boolean>(false);
  const [isSleeping, setIsSleeping] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const flyAway = (): void => {
    if (!isCaught && !isSleeping) {
      setPosition({
        x: Math.random() * (window.innerWidth - 60),
        y: Math.random() * (window.innerHeight - 60),
      });

      const randomIndex = Math.floor(Math.random() * 10); // Generates 0 to 6
      if (randomIndex) {
        const randomMessage = messages[randomIndex];
        setCurrentMessage(randomMessage);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 6000);
      }
    }
  };

  const goToNest = (): void => {
    setIsSleeping(true);
    setPosition({
      x: NEST_POSITION.x + 20, // Center bird in larger nest
      y: NEST_POSITION.y + 20,
    });
  };

  const handleClick = (): void => {
    if (isCaught) return;
    if (isSleeping) {
      setIsSleeping(false);
      flyAway();
    } else {
      setIsCaught(true);
      setTimeout(() => {
        setIsCaught(false);
        flyAway();
      }, 1000);
    }
  };

  useEffect(() => {
    const flyInterval: NodeJS.Timeout = setInterval(() => {
      if (!isCaught && !isSleeping) {
        flyAway();
      }
    }, 2000);

    const nestInterval: NodeJS.Timeout = setInterval(() => {
      if (!isCaught) {
        goToNest();
        setTimeout(() => {
          setIsSleeping(false);
          flyAway();
        }, 10000);
      }
    }, 60000);

    return () => {
      clearInterval(flyInterval);
      clearInterval(nestInterval);
    };
  }, [isCaught, isSleeping]);

  return (
    <div
      className={`bird-container ${isCaught ? "caught" : ""} ${
        isSleeping ? "sleeping" : ""
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {showPopup && <div className="popup">{currentMessage}</div>}
      <div onClick={handleClick} className="click-wrapper">
        {/* Bird SVG */}
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          className="bird-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="bodyGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#87CEEB", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#4682B4", stopOpacity: 1 }}
              />
            </linearGradient>
            <linearGradient
              id="wingGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#4682B4", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#2F4F4F", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M30 40 C40 40, 45 30, 40 20 C35 15, 25 15, 20 20 C15 30, 20 40, 30 40"
            fill="url(#bodyGradient)"
            stroke="#4169E1"
            strokeWidth="1"
          />
          <path
            d="M20 35 Q15 40, 10 35 Q15 33, 20 35"
            fill="#4682B4"
            stroke="#2F4F4F"
            strokeWidth="0.5"
          />
          <path
            className="wing left-wing"
            d="M30 30 Q20 20, 15 25 Q20 30, 30 28"
            fill="url(#wingGradient)"
            stroke="#2F4F4F"
            strokeWidth="0.5"
          />
          <path
            className="wing right-wing"
            d="M30 30 Q40 20, 45 25 Q40 30, 30 28"
            fill="url(#wingGradient)"
            stroke="#2F4F4F"
            strokeWidth="0.5"
          />
          <path
            d="M35 25 L42 22 Q40 25, 35 24"
            fill="#FFA500"
            stroke="#FF8C00"
            strokeWidth="0.5"
          />
          <circle
            cx="35"
            cy="22"
            r="2.5"
            fill="white"
            stroke="black"
            strokeWidth="0.5"
          />
          <circle cx="35" cy="22" r="1" fill="black" />
          <path
            d="M25 30 Q27 32, 29 30"
            fill="none"
            stroke="#4169E1"
            strokeWidth="0.5"
          />
          {isSleeping && (
            <>
              <path
                d="M40 15 L45 10 L40 12"
                fill="none"
                stroke="gray"
                strokeWidth="1"
                className="sleep-z z1"
              />
              <path
                d="M45 12 L50 7 L45 9"
                fill="none"
                stroke="gray"
                strokeWidth="1"
                className="sleep-z z2"
              />
            </>
          )}
        </svg>

        {/* Enhanced Nest SVG */}
        {isSleeping && (
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="nest-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="nestGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#A0522D", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#5C4033", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            {/* Base of the Nest */}
            <path
              d="M20 70 Q50 90, 80 70 Q70 50, 30 50 Q20 60, 20 70"
              fill="url(#nestGradient)"
              stroke="#4A2F1F"
              strokeWidth="2"
            />
            {/* Inner Texture */}
            <path
              d="M25 65 Q50 80, 75 65"
              fill="none"
              stroke="#6B4423"
              strokeWidth="1"
              opacity="0.7"
            />
            {/* Twigs */}
            <path
              d="M30 60 L40 55 Q45 58, 50 55"
              stroke="#4A2F1F"
              strokeWidth="1.5"
            />
            <path
              d="M50 55 L60 50 Q65 53, 70 50"
              stroke="#4A2F1F"
              strokeWidth="1.5"
            />
            <path
              d="M20 65 L25 60 Q30 62, 35 60"
              stroke="#4A2F1F"
              strokeWidth="1.5"
            />
            <path
              d="M65 65 L75 60 Q80 62, 85 60"
              stroke="#4A2F1F"
              strokeWidth="1.5"
            />
            {/* Small Leaves */}
            <path
              d="M35 55 Q37 52, 40 55 Q37 58, 35 55"
              fill="#228B22"
              stroke="#006400"
              strokeWidth="0.5"
            />
            <path
              d="M70 55 Q72 52, 75 55 Q72 58, 70 55"
              fill="#228B22"
              stroke="#006400"
              strokeWidth="0.5"
            />
            {/* Shadow */}
            <ellipse cx="50" cy="85" rx="30" ry="5" fill="rgba(0, 0, 0, 0.2)" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Bird;
