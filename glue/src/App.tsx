// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* 추가 페이지 라우팅이 필요하면 여기에 Route 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
