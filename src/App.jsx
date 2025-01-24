import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/services/Services';
import Industries from './pages/industries/Industries';
import Career from './pages/career/Career';
import Company from './pages/company/Company';
import Contact from './pages/contact/Contact';
import Technology from './pages/technologies/Technology';
import Layout from './components/Layout';
import HomeLayout from './pages/Home/HomeLayout';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomeLayout/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/industries" element={<Industries/>} />
        <Route path="/technologies" element={<Technology/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;