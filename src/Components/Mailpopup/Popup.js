import React from 'react'
import "./popup.css"
function Popup(props) {
    return (props.trigger)?(
        <div className="popup">
            <div className="innerPopup">
                <button className="closeBtn"
                    onClick={()=>props.setTrigger(false)}
                >x</button>
               <form action="">
                    <input type="text"placeholder="Full name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea name="" id="" cols="20" rows="5"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    ):"";
}

export default Popup;
