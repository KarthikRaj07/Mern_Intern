import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../App.css';

function Leaderboard() {
  const [scores, setScores] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    axios.get('http://localhost:4000/api/scores')
      .then(res => setScores(res.data))
      .catch(err => console.error(err));
  }, []);

  // Find the current user's score
  const currentUserScore = scores.find(score => score.username === state?.username);
  const otherScores = scores.filter(score => score.username !== state?.username);

  return (
    <div>
      
      {currentUserScore && (
        <div>
         <h3>Your Score</h3>
<p ><strong>{currentUserScore.username}:</strong> {currentUserScore.score}</p>

        </div>
      )}
      <h2>Leaderboard</h2>
      <h3>All Scores</h3>
      <ol>
        {scores.map((score, index) => (
          <li key={index}>
            {score.username} - {score.score}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;
