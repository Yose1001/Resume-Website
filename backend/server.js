const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

// Load resume data
const resumeData = require('./data/resume.json');

// ─── Routes ──────────────────────────────────────────────

// GET /api/resume  → ข้อมูลทั้งหมด
app.get('/api/resume', (req, res) => {
  res.json({ success: true, data: resumeData });
});

// GET /api/resume/personal  → ข้อมูลส่วนตัว
app.get('/api/resume/personal', (req, res) => {
  res.json({ success: true, data: resumeData.personal });
});

// GET /api/resume/experience  → ประวัติการทำงาน
app.get('/api/resume/experience', (req, res) => {
  res.json({ success: true, data: resumeData.experience });
});

// GET /api/resume/skills  → ทักษะ
app.get('/api/resume/skills', (req, res) => {
  res.json({ success: true, data: resumeData.skills });
});

// GET /api/resume/education  → การศึกษา
app.get('/api/resume/education', (req, res) => {
  res.json({ success: true, data: resumeData.education });
});

// GET /api/resume/projects  → โปรเจค
app.get('/api/resume/projects', (req, res) => {
  res.json({ success: true, data: resumeData.projects });
});

// POST /api/contact  → รับข้อความติดต่อ
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'กรุณากรอกข้อมูลให้ครบถ้วน (name, email, message)',
    });
  }

  console.log(`📩 New contact from ${name} <${email}>`);

  res.json({
    success: true,
    message: 'ขอบคุณสำหรับข้อความ! จะติดต่อกลับโดยเร็ว',
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📋 API Endpoints:`);
  console.log(`   GET  /api/resume`);
  console.log(`   GET  /api/resume/personal`);
  console.log(`   GET  /api/resume/experience`);
  console.log(`   GET  /api/resume/skills`);
  console.log(`   GET  /api/resume/education`);
  console.log(`   GET  /api/resume/projects`);
  console.log(`   POST /api/contact`);
});