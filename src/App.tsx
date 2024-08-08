// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import Tickets from './pages/Tickets';
import Theaters from './pages/Theaters';
import Account from './pages/Account';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Home />} /> 
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/theaters" element={<Theaters />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
