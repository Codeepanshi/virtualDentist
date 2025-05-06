const Submission = require('../model/Submission');
const fs = require('fs');
const path = require('path');

// Create a new submission
exports.createSubmission = async (req, res) => {
  try {
    const { name, email, phone, issue, duration, treatments, allergies, additional } = req.body;
    const files = req.files;

    console.log("Form Data:", req.body);
    console.log("Uploaded Files:", files);
    
    const submission = new Submission({
      name,
      email,
      phone,
      issue,
      duration,
      treatments,
      allergies,
      additional,
      images: files.map(file => file.path),
    });

    await submission.save();

    res.status(201).json({ message: 'Submission created successfully', submission });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating submission', error });
  }
};



// Get all submissions
exports.getAllSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ createdAt: -1 });
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching submissions', error });
  }
};

// Get a single submission by ID
exports.getSubmissionById = async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    res.status(200).json(submission);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching submission', error });
  }
};

// Delete a submission
exports.deleteSubmission = async (req, res) => {
  try {
    const deleted = await Submission.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    res.status(200).json({ message: 'Submission deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting submission', error });
  }
};
