import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// user-specific pages
import { UserLoginPage } from './users/User';
import { StudentLoginPage } from './users/student';
import { PanelLoginPage } from './users/panel';
import { FacultyLoginPage } from './users/faculty';
import { ExamLoginPage } from './users/exam';
import { EDPLoginPage } from './users/EDP';
import NotFoundPage from './shared/components/NotFoundPage';
import LandingPage from './shared/pages/landing/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/user/login" element={<UserLoginPage />} />
          <Route path="/Student/login" element={<StudentLoginPage />} />
          <Route path="/Panel/login" element={<PanelLoginPage />} />
          <Route path="/Faculty/login" element={<FacultyLoginPage />} />
          <Route path="/Exam/login" element={<ExamLoginPage />} />
          <Route path="/EDP/login" element={<EDPLoginPage />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
