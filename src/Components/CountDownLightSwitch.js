import React, { useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="timer-section">
      <div className="progress-bar">
        <div className="progress" id="progress"></div>
      </div>
      <div className="timer" id="timerDisplay">30s</div>
      <div className="btn-group">
        <button id="startButton" onClick={increment}>Start Timer</button>
        <button id="resetButton" style={{ display: "none" }} onClick={reset}>Reset Timer</button>
      </div>
      <div className="message" id="messageArea"></div>
    </div>
  );
}

function Toggle() {
  const [isLight, setIsLight] = useState(false);

  function doToggle() {
    setIsLight((prev) => !prev);
  }

  return (
    <div className={`header ${isLight ? "light-mode" : ""}`}>
      <h1>Countdown & Light Switch</h1>
      <div className="toggle-container">
        <label className="toggle-switch">
          <input type="checkbox" id="themeToggle" onChange={doToggle} />
          <span className="slider"></span>
        </label>
        <span>{isLight ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </div>
  );
}

function CountDownLightSwitch() {
  return (
    <div>
      <Toggle />
      <Timer />
    </div>
  );
}

export default CountDownLightSwitch;
