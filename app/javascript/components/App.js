import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from "./Greeting";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Greeting/>} />
      </Routes>
    </Router>
    );}

export default App;