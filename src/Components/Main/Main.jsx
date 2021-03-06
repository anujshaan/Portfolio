
import "./main.css"
import maincolor from "../../Img/ascolor.png";

export default function Main(){
    const downloadFile = () => {
        window.location.href = "https://drive.google.com/uc?id=1jVYYyrgilNxU-V5zxM-fn02LaZL2NuO8&export=download"
    }
    const buyMeCoffee = () => {
        window.location.href= "https://www.buymeacoffee.com/anujshaan"
    }
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
                <button className="resume" onClick={downloadFile}>Resume</button>
    
                <button className="buyMe" onClick={buyMeCoffee}>
                    Buy me a Coffee
                </button>
            </div>
            <div className="mainImg">
                <img src={maincolor} alt="" />
            </div>
        </div>
    )
}