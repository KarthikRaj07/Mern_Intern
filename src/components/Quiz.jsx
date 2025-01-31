import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'; 

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate(); 
  const { state } = useLocation(); 
  useEffect(() => {
    axios.get('http://localhost:4000/api/questions') 
      .then(res => setQuestions(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion]?.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
     
      axios.post('http://localhost:4000/api/scores', {
        username: state?.username, 
        score
      })
      .then(() => navigate('/leaderboard', { state: { username: state?.username } }))
      .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <h2>Welcome, {state?.username || 'Guest'}</h2>
      {questions.length > 0 ? (
        <>
          <h3>Question {currentQuestion + 1}</h3>
          <p>{questions[currentQuestion]?.questionText}</p>
          {questions[currentQuestion]?.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}

export default Quiz;
