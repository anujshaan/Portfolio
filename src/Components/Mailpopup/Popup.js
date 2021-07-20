import React from 'react'
import "./popup.css"
import emailjs from 'emailjs-com';

function Popup(props) {
    const sendEmail = e =>{
         e.preventDefault();
        emailjs.sendForm('service_m9x7bbt', 'template_jvccugo', e.target, 'user_u1Nc5DVR3hVvjyZ03nrRz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return (props.trigger)?(
        <div className="popup">
            <div className="innerPopup">
                <button className="closeBtn"
                    onClick={()=>props.setTrigger(false)}
                >x</button>
               <form onSubmit={sendEmail}>
                    <input type="text"placeholder="Full name" name="name" required/>
                    <input type="email" placeholder="Your Email" name="email" required/>
                    <input type="text" placeholder="Subject" name="subject" required/>
                    <textarea name="message" id="" cols="20" rows="5" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    ):"";
}

export default Popup;
