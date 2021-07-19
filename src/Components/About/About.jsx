import "./about.css"
import anujcolor from "../../Img/anujcolor.png"

export default function About(){
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
                <div className="aboutImg">
                    <img src={anujcolor} alt="" />
                </div>
            </div>            
        </div>
    )
}