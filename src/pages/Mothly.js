import React from "react";
import Speedometer from "../components/Speedometer";
import Best_Monthly from "../components/Best_Monthly";
import BroadFilter from "../components/BroadFilter";
import "../styles/BestMonthly.css"
function Mothly() {
  return (
    <div>
      <h1>Monthly Packages Page</h1>
      <p>This is the Monthly Packages page content.</p>
      <Speedometer value={30}/>
      <Best_Monthly/>
      <BroadFilter Valid="30 Days"/>
    </div>
  );
}
export default Mothly;