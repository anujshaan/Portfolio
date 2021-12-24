import "./get.css";
import Popup from "../Mailpopup/Popup";
import { useState } from "react";

export default function Get (){

    // const toggle = () =>{
    //     const blur = 
    // }

    const [buttonPopup, setButtonPopup] = useState(false);
    return(
        <div className="getInTouchWrapper">
            <hr />
            <h1>Get In Touch</h1>
            <p>My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.
                Also if you have any project related to MERN feel free to try my knowledge :)
            </p>
            <button 
                className="mailMe"
                onClick={()=>setButtonPopup(true)}
            >
                Mail Me
            </button>
            <Popup className="popupAnimation"
                trigger={buttonPopup} 
                setTrigger = {setButtonPopup}
            >
            </Popup>
            
        </div>
    )
}