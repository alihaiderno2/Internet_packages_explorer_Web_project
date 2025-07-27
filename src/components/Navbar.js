import React from "react";
import logo from "../assets/logo.png";
import '../styles/Navbar.css';
import { useNavigate } from "react-router-dom";
import { Link, NavLink,navigate} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaSearch, FaTimes} from "react-icons/fa";
import { useState } from "react";

function Navbar() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();


    return (
        <nav className="navbar">
        <div className="navbar-logo-container">
            <img src={logo} alt="Logo" className="navbar-logo" onClick={()=>navigate('/')}
            />
        </div>
        
        <div className="navbar-container">
            <ul className="navbar-links">
            <li className="navbar-link"  id="bottomb"><NavLink to="/" className={({isActive})=>isActive?'active-link':''}>HOME</NavLink></li>
            <li className="navbar-link"><NavLink to="/Networks" className={({isActive})=>isActive?'active-link':''}>NETWORKS</NavLink></li>
            <li className="navbar-link"><NavLink to="/Daily" className={({isActive})=>isActive?'active-link':''}>DAILY</NavLink> </li>
            <li className="navbar-link"><NavLink to="/Weekly" className={({isActive})=>isActive?'active-link':''}>WEEKLY</NavLink></li>
            <li className="navbar-link"><NavLink to="/Monthly" className={({isActive})=>isActive?'active-link':''}>MONTHLY</NavLink></li>
            </ul>
        </div>
        <div className="navbar-search-container">
            <div className="navbar-search-toggle">
                <FaSearch
                className={`search-icon-button ${showSearch ? 'hidden' : ''}`}
                onClick={() => setShowSearch(true)}
                />

                <input
                    type="text"
                    className={`search-input ${showSearch ? 'expanded' : 'collapsed'}`}
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSearch(true)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && searchQuery.trim() !== "") {
                        navigate(`/Search?query=${encodeURIComponent(searchQuery.toLowerCase().trim())}`);
                        setShowSearch(false);
                        setSearchQuery(""); 
                        }
                    }}
                />

                <FaTimes
            className={`close-icon ${showSearch ? "" : "hidden"}`}
            onClick={() => setShowSearch(false)}
            />


                </div>

      </div>
        </nav>
    );
}
export default Navbar;