import React, { useState } from "react";
import SvgComponent from "./components/home"; // Assuming SvgComponent is in components/home.js
import LuckyWheel from "./components/wheel"; // Assuming LuckyWheel is in components/wheel.js

const App = () => {
  const [showLuckyWheel, setShowLuckyWheel] = useState(false); // State to control the display of LuckyWheel

  // Toggle visibility of the Lucky Wheel
  const handleShowLuckyWheel = () => {
    setShowLuckyWheel(true);
  };

  return (
    <div className="App">
      <SvgComponent onClick={handleShowLuckyWheel} /> {/* Pass handle function as a prop */}
      {showLuckyWheel && <LuckyWheel />} {/* Conditionally render LuckyWheel */}
    </div>
  );
};

export default App;
