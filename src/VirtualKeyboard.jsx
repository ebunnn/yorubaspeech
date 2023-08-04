import React, { useState, useEffect } from 'react';
import "./VirtualKeyboard.css";

export default function VirtualKeyboard() {
  // State to hold the typed letters
  const [typedLetters, setTypedLetters] = useState([]);

  // Function to handle button click event
  const handleButtonClick = (letter) => {
    // Append the clicked letter to the existing typedLetters state
    setTypedLetters([...typedLetters, letter]);
  };

  // Function to handle backspace button click event
  const handleBackspaceClick = () => {
    // Remove the last letter from the typedLetters state
    setTypedLetters(typedLetters.slice(0, -1));
  };

  // Global event listener for keyboard key press
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Backspace') {
        // Remove the last letter from the typedLetters state
        setTypedLetters(typedLetters.slice(0, -1));
      }
    };

    // Add event listener for key press
    document.addEventListener('keydown', handleKeyPress);

    // Clean up: remove event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [typedLetters]); // Add typedLetters as a dependency to avoid stale closure issue


  return (
    <div>
      {/* Your virtual keyboard UI goes here */}
      <div>
        {/* For each button, add an onClick event listener */}
        <button onClick={() => handleButtonClick('e')}>e</button>
        <button onClick={() => handleButtonClick('r')}>r</button>
        <button onClick={() => handleButtonClick('é')}>é</button>
        {/* Add more buttons for other letters */}
        <button onClick={handleBackspaceClick}>Backspace</button>
      </div>
      
      {/* Display the typed letters */}
      <input type="text" value={typedLetters.join('')} readOnly />
    </div>
  );
};


