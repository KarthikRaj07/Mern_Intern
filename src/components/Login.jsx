import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/quiz', { state: { username } });
  };

  return (
    <div className="container">
      <h2>Welcome to the Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}

export default Login;
