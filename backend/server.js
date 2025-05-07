
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const submissionRoutes = require('./Routes/SubmissionRoutes');
const authRoutes = require('./Routes/authRoutes');

dotenv.config();
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/submissions', submissionRoutes);
app.use('/api/auth', authRoutes);
app.use('/uploads', express.static('uploads'));

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
