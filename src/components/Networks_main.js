import React from "react";
import "../styles/Networks_main.css";
import zlogo from"../assets/Zong_ids-b_mj6w_0.png";
import jlogo from"../assets/new-jazz-seeklogo.png";
import tlogo from"../assets/telenor-seeklogo.png";
import ulogo from"../assets/ufone-4g-seeklogo.png";
function Networks_main(){
    return(
        <div className="Main_div">
        <div className="Main-Heading">
            <h1>We have got all the cellular networks for you. </h1>
            <p>We are comitted to provide you with the latest cellular networks information to you.</p>
        </div>
            <div className="Pics">
                <div className="IMG"><img src={zlogo}></img></div>
                <div className="IMG"><img src={jlogo}></img></div>
                <div className="IMG"><img src={ulogo}></img></div>
                <div className="IMG"><img src={tlogo}></img></div>
            </div>
        </div>
    );
}
export default Networks_main;