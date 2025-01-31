const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();


app.use(express.json());
app.use(cors()); 

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/quizz-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Routes
app.use('/api/questions', require('./routes/questions'));
app.use('/api/scores', require('./routes/scores'));

// Server Start
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));