const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const Submission = require('../model/Submission');
const dotenv = require('dotenv');
dotenv.config();

// Use secret from environment
const JWT_SECRET = process.env.JWT_SECRET;
const HARD_CODED_USERNAME = process.env.HARD_CODED_USERNAME;
const HARD_CODED_PASSWORD = process.env.HARD_CODED_PASSWORD;

// Admin Login
exports.loginOwner = async (req, res) => {
  const { username, password } = req.body;

  if (username === HARD_CODED_USERNAME && password === HARD_CODED_PASSWORD) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
};

// Protected Submissions Route
exports.getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
};
