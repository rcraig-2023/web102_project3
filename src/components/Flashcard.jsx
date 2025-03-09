import React, { useState, useEffect } from 'react';

function Flashcard({ card, onNext, onPrevious, checkAnswer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [inputStyle, setInputStyle] = useState({});

  useEffect(() => {
    setUserAnswer('');
    setInputStyle({});
  }, [card]);

  const handleFlip = () => {
    setShowAnswer(!showAnswer);
  };

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = () => {
    const isCorrect = checkAnswer(userAnswer, card.english);
    setInputStyle({
      outline: `2px solid ${isCorrect ? 'blue' : 'red'}`,
    });
  };

  return (
    <div className="flashcard">
      <div className="card-content">
        <div className="word-card" onClick={handleFlip}>
          <h2>{!showAnswer ? card.spanish : card.english}</h2>
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Place your answer here"
            value={userAnswer}
            onChange={handleInputChange}
            style={inputStyle}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <div className="controls">
        <button onClick={onPrevious}>Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default Flashcard;
  
