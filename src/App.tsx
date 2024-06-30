import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import List from './components/Karakaku/List';
import Karakaku from './components/Karakaku/Karakaku';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/karakaku" element={<List />} />
          <Route path="/karakaku/:songName" element={<Karakaku />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
