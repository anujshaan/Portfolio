import { Component } from "react";
import "./about.css"
import anujbw from "../../Img/anujbw.png"
import anujcolor from "../../Img/anujcolor.png"

class About extends Component{
    state = {
        img:anujbw
    };

    render(){
    return(
        <div className="wrapper">
                <div className="aboutHeading"> 
                    <span>#1</span> 
                    About Me 
                    <p><hr /></p>
                </div>
            <div className="aboutMainContent">
                <p>
                Hey again! <br />
                Here I wanna talk about my educational background,
                I have done BCA (Bachelor’s in Computer Application)
                from BIT Mesra, (Noida Campus)
                with 6 CGPA. <br />
                <br />
                Currently I am persuing my Master’s degree in Computer
                Application from NIT Raipur,
                with 6.7 CGPA. <br />
                <br />
                Here are some of Technologies I say I know better: <br />
                &#62;HTML/CSS/JAVASCRIPT <br />
                &#62;ReactJS <br />
                &#62;MongoDB/MySQL <br />
                &#62;ExpressJS <br />
                &#62;NodeJS   <br />
            </p>
            <img
                    src={this.state.img}
                    onMouseEnter={() => {
                        this.setState({img: anujcolor});
                    }}
                    onMouseOut={() => {
                    this.setState({img: anujbw});
                    }}
                    alt="anuj shaan"
                />
            </div>            
        </div>
    )
    }
}
 
export default About;