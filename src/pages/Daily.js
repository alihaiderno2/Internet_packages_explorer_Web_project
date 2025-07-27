import react from "react";
import '../styles/Daily.css';
import Speedometer from "../components/Speedometer.js";
import Best_Daily from "../components/Best_Daily.js";
import BroadFilter from "../components/BroadFilter.js";
function Daily() {
    return (
    <div className="Daily-hero">
      <Speedometer value={1}/>
      <Best_Daily/>
      <BroadFilter Valid="1 Day"/>
    </div>
  );
    }
    export default Daily;
    // DailyPage.jsx

