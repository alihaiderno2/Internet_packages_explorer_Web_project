import React from "react";
import '../styles/Popular.css';
import{FaArrowRight} from 'react-icons/fa';
import { Link } from "react-router-dom";
function Popular() {
  return (
    <div className="Popular-cards">
      <h1 className="Popular-heading">Popular Packages</h1>
      <div className="Popular-cards-container">
        
        <div className="Card card1">
          <div className="Package-name">Jazz Weekly Super Max Offer</div>
          <ul>
            <li><b>Data:</b> 30GB (10GB from 2AM-2PM)</li>
            <li><b>Validity:</b> 7 Days</li>
            <li><b>Price:</b> Rs. 337</li>
            <li><b>Subscription:</b> *506#</li>
            <li><b>Includes:</b> Internet + Jazz mins + Off-net mins</li>
          </ul>
          <div className="Package-more"><Link to="/Networks" className="link-to-networks" >Explore more Packages <FaArrowRight/></Link> </div>
        </div>

        
        <div className="Card card2">
          <div className="Package-name">Telenor Monthly Social Pack</div>
          <ul>
            <li><b>Data:</b> 10GB (Facebook, WhatsApp, TikTok)</li>
            <li><b>Validity:</b> 30 Days</li>
            <li><b>Price:</b>Rs. 150</li>
            <li><b>Subscription:</b> *911#</li>
            <li><b>Includes:</b> Social media only</li>
          </ul>
          <div className="Package-more"><Link to="/Networks" className="link-to-networks" >Explore more Packages <FaArrowRight/></Link> </div>
        </div>

        
        <div className="Card card3">
          <div className="Package-name">Ufone Weekly Internet Plus</div>
          <ul>
            <li><b>Data:</b> 10GB (5GB 1AM-9AM)</li>
            <li><b>Validity:</b> 7 Days</li>
            <li><b>Price:</b> Rs. 275</li>
            <li><b>Subscription:</b> *260#</li>
            <li><b>Includes:</b> Internet only</li>
          </ul>
          <div className="Package-more"><Link to="/Networks" className="link-to-networks" >Explore more Packages <FaArrowRight/></Link> </div>
        </div>

        
        <div className="Card card4">
          <div className="Package-name">Zong Monthly Pro Offer</div>
          <ul>
            <li><b>Data:</b> 40GB (10GB YouTube, 20GB 1AM-9AM)</li>
            <li><b>Validity:</b> 30 Days</li>
            <li><b>Price:</b> Rs. 1199</li>
            <li><b>Subscription:</b> *7088#</li>
            <li><b>Includes:</b> All-in-one monthly offer</li>
          </ul>
          <div className="Package-more"><Link to="/Networks" className="link-to-networks" >Explore more Packages <FaArrowRight/></Link> </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
