import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CallPage from "./pages/CallPage/CallPage";
import HomePage from "./pages/HomePage/HomePage";
import NoMatch from "./pages/NoMatch/NoMatch";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CallPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default App;
