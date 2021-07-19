import React,{useState, useEffect} from "react";
import Navbar from "./Components/Navbar/Navber";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Projects from "./Components/project/Projects";
import Get from "./Components/GetInTouch/Get";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },6000);
  },[]);
  return (
    <div className="App">
      {
        loading ?
        (<Loading />)
        :
        (
          <>
            <Navbar />
            <Main />
            <About />
            <Projects />
            <Get />
            <Footer />
           </>
        )
      }
      
    </div>
  );
}

export default App;
