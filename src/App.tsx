import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/aboutuspage";
import PatientPage from "./pages/patientpage";
import ArtsPage from "./pages/artspage";
import LandingPage from "./pages/landingpage";
import DashboardPage from "./pages/dashboardpage";
import Sidebar from "./components/sidebar";

const App: React.FC = () => {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/patients" element={<PatientPage />} />
        <Route path="/artsen" element={<ArtsPage />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
      </Routes>
      <div className="main-sidebar">        
        <Sidebar/>
      </div>
    </Router>
  );
};




export default App;
