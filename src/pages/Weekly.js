import react from "react";
import Speedometer from "../components/Speedometer";
import Best_Weekly from "../components/Best_Weekly";
import BroadFilter from "../components/BroadFilter";
function Weekly() {
    return (
        <div>
            <h1>Weekly Packages Page</h1>
            <p>This is the Weekly Packages page content.</p>
            <Speedometer value={7}/>
            <Best_Weekly/>
            <BroadFilter Valid="7 Days"/>
        </div>
    );
}
export default Weekly;