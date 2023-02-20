import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<h1>Hi from react router dom</h1>} />
      </Routes>
    </Router>
    );}

export default App;