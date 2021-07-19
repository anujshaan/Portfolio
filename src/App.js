import Navbar from "./Components/Navbar/Navber";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Projects from "./Components/project/Projects";
import Get from "./Components/GetInTouch/Get";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Get />
      <Footer />
    </div>
  );
}

export default App;
