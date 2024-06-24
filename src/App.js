import {React, useEffect, useState} from "react";
import './App.css';
import VirtualKeyboard from './VirtualKeyboard';


function App() {

  const [words, setWords] = useState([]);
  const [showWords, setShowWords] = useState(false)

  useEffect(() => {
    fetch("http://127.0.0.1:5001/play-words")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data.yorubaWords)) {
          setWords(data.yorubaWords);
        } else {
          console.error("Fetched data is not an array:", data.yorubaWords);
        }
        console.log(data);
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
  }, []);

  //Basically do what u did above using Flask but in VirtualKeyboard instead of using axios use Flask!
  const handleNewWord = (newWord) => {
    setWords([...words, newWord]);
  };

  function handleShowWords() {
    setShowWords(e => !e)
  }
  const handleHideWords = () => {
    setShowWords(false);
  };
  return (
    <div className="App">
      <header className="App-header">
      <h1>Ẹ́káàbọ sí Yorùbá Speech!</h1>
        <VirtualKeyboard onNewWord={handleNewWord} />

        <h4>History</h4>
        {words.length === 0 ? (
          <p>No words in history...</p>
        ) : (
          <>
            {words.length > 5 ? (
              <>
                {words.slice(0, 5).map((yorubaWord, i) => (
                  <p key={i}>{yorubaWord}</p>
                ))}
                {showWords ? (
                  <>
                    {words.slice(5).map((yorubaWord, i) => (
                      <p key={i + 5}>{yorubaWord}</p>
                    ))}
                    <button onClick={handleHideWords}>See Less</button>
                  </>
                ) : (
                  <button onClick={handleShowWords}>See More</button>
                )}
              </>
            ) : (
              words.map((yorubaWord, i) => (
                <p key={i}>{yorubaWord}</p>
              ))
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
