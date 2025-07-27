import React from 'react';
import './styles/App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Networks from './pages/Networks';
import Daily from './pages/Daily';
import Weekly from './pages/Weekly';  
import Monthly from './pages/Mothly';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import { Routes, Route } from 'react-router-dom';
function App() {
  return(
    <div className='App'>
      <div className='content'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Networks" element={<Networks />} />
          <Route path="/Daily" element={<Daily />} />
          <Route path="/Weekly" element={<Weekly />} />
          <Route path="/Monthly" element={<Monthly />} />
          <Route path="/Search" element={<SearchResults/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}
export default App;
