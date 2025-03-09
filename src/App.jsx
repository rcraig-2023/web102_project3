import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Flashcard from './components/Flashcard';
import flashcards from './flashcards';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  const checkAnswer = (userAnswer, correctAnswer) => {
    return userAnswer.toLowerCase() === correctAnswer.toLowerCase();
  };

  return (
    <div className="App">
      <h1>Food Vocabulary in Spanish!</h1>
      <h2>Test your knowledge here!</h2>
      <h3>Number of Cards: 10</h3>
      <Flashcard
        card={flashcards[currentIndex]}
        onNext={handleNext}
        onPrevious={handlePrevious}
        checkAnswer={checkAnswer}
      />
    </div>
  );
}

export default App;



