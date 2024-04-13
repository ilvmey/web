import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
// import Home from './Home';
import About from './About';
// import Info from './Info';

function App() {
  return (
    <Router>
      <div>
        <Header />
        </div>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          {/* 其他路由 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
