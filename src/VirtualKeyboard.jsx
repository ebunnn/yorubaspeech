import {React, useState, useEffect, useCallback } from 'react';
import "./VirtualKeyboard.css";
import axios from 'axios';

export default function VirtualKeyboard({ onNewWord }) {
  // State to hold the typed letters
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      setText((prevText) => prevText.slice(0, -1));
    }
  };

  const handlePlay = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5001/post-words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ yorubaWord: text }),
    })
    .then((response) => response.json())
    .then((data) => {
      onNewWord(data.yorubaWords);
      setText(""); // Clear the input field
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  };

  return (
    <div className='keyboard--container'>
      <form className='keyboard--form-container' onSubmit={handlePlay}>
        <div className='keyboard--text-field-button'>
          <input
            type='text'
            name="yorubaWord"
            placeholder='Type your Yorùbá text here...'
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className='keyboard--text-field'
          />
          <input type='submit' value="Play"/>
          <input type='button' value="Delete" onClick={e => setText(text.slice(0, -1))}/>
        </div>
        <div className='keyboard--lower-keys'>
          <input type='button' value="à" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="a" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="á" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="è" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="e" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="é" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="ẹ̀" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="ẹ" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="ẹ́" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="ì" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="i" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="í" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="ò" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="o" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="ó" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="ọ̀" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="ọ" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="ọ́" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="ṣ" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="ù" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="u" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="ú" onClick={e => setText(text + e.target.value)}/>
        </div>
        <div className='keyboard--upper-keys'>
          <input type='button' value="À" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="A" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Á" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="È" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="E" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="É" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Ẹ̀" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Ẹ" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Ẹ́" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Ì" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="I" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Í" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Ò" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="O" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Ó" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Ọ̀" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Ọ" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Ọ́" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Ṣ" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Ù" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="U" onClick={e => setText(text + e.target.value)}/>
          <input type='button' value="Ú" onClick={e => setText(text + e.target.value)}/>
        </div>
      </form>
    </div>
    
  );
};



  // useOnKeyPress(() => setText(prevText => prevText.slice(0, -1)), 'Delete');

  // function handleDelete() {
  //   setText(text.slice(0, -1));
  // }

// const [typedLetters, setTypedLetters] = useState([]);

//   // Function to handle button click event
//   const handleButtonClick = (letter) => {
//     // Append the clicked letter to the existing typedLetters state
//     setTypedLetters([...typedLetters, letter]);
//   };

//   // Function to handle backspace button click event
//   const handleBackspaceClick = () => {
//     // Remove the last letter from the typedLetters state
//     setTypedLetters(typedLetters.slice(0, -1));
//   };

//   // Global event listener for keyboard key press
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//       if (event.key === 'Backspace') {
//         // Remove the last letter from the typedLetters state
//         setTypedLetters(typedLetters.slice(0, -1));
//       }
//     };

//     // Add event listener for key press
//     document.addEventListener('keydown', handleKeyPress);

//     // Clean up: remove event listener when the component unmounts
//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [typedLetters]); // Add typedLetters as a dependency to avoid stale closure issue

//   const handlePlaySounds = () => {
//     // Send the recorded letters to the Flask backend
//     axios.post('http://localhost:3000/play_words', { word: typedLetters.join('') })
//       .then(response => {
//         console.log(response.data); // This will log "Sounds played successfully"
//       })
//       .catch(error => {
//         console.error('Error sending request:', error);
//       });
//   };
//   return (
//     <div>
//       {/* Your virtual keyboard UI goes here */}
//       <div>
//         {/* For each button, add an onClick event listener */}
//         <button onClick={() => handleButtonClick('e')}>e</button>
//         <button onClick={() => handleButtonClick('r')}>r</button>
//         <button onClick={() => handleButtonClick('é')}>é</button>
//         <button onClick={handlePlaySounds}>Play Sounds</button>
//         {/* Add more buttons for other letters */}
//         <button onClick={handleBackspaceClick}>Backspace</button>
//       </div>
      
//       {/* Display the typed letters */}
//       <input type="text" value={typedLetters.join('')} readOnly />