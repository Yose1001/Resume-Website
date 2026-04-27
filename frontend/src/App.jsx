import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/resume')
      .then((res) => {
        if (!res.ok) throw new Error('API Error');
        return res.json();
      })
      .then((json) => {
        setResumeData(json.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-dots">
          <span /><span /><span />
        </div>
        <p className="loading-text">LOADING RESUME...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        ⚠ Cannot connect to API — make sure the backend is running on port 5000
      </div>
    );
  }

  return (
    <>
      <Navbar name={resumeData.personal.nameEn} />
      <main>
        <Hero personal={resumeData.personal} />
        <Experience experience={resumeData.experience} />
        <Skills skills={resumeData.skills} />
        <Education education={resumeData.education} />
        <Projects projects={resumeData.projects} />
        <Contact personal={resumeData.personal} />
      </main>
      <Footer name={resumeData.personal.nameEn} />
    </>
  );
}

export default App;