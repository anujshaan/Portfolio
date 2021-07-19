import React,{ Component } from "react";
// import { render } from "react-dom";
import "./main.css"
import mainbw from "../../Img/asbw.png";
import maincolor from "../../Img/ascolor.png";

class Main extends Component{
    state = {
        img:mainbw
    };

    render(){
    return(
        <div className="mainContainer">
            <div className="mainContent">
                <p className="note">Welcome Visitor ! My name is</p>
                <h1>Anuj Shaan.</h1>
                <h2>Passion: <span>Designing !</span></h2>
                <h2>Profession: <span>Developing !!</span></h2>
                <br /> <br /> 
                <p className="content">Hello there,<br />
                    I am  NITian but i haven’t done anything like them,
                    I love exploring new things in web development,<br></br> <br />
                    When I ain’t Coding then I am playing videos Games !! 
                </p>
                <br /> <br />
                <button className="resume">Resume</button>
            </div>
            <div className="mainImg">
                <img
                    src={this.state.img}
                    onMouseEnter={() => {
                        this.setState({img: maincolor});
                    }}
                    onMouseOut={() => {
                    this.setState({img: mainbw});
                    }}
                    alt="anuj shaan"
                />
            </div>
        </div>
    )
    }
}    

export default Main;