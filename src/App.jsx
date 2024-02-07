import Navbar from "./componant/Navbar";
import FirstCompo from "./componant/First-compo";
import SecondCompo from "./componant/Second-compo";
import ThirdCompo from "./componant/Third-compo";
import ForthCompo from "./componant/Forth-compo";
import FifthCompo from "./componant/Fifth-compo";
import SlideCompo from "./componant/Slider-compo";
import SixthCompo from "./componant/Sixth-compo";
import Footer from "./componant/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
// import LoginSignUp from "./assest/Loginsignup/LoginSignUp";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <FirstCompo />
        <SecondCompo />
        <ThirdCompo />
        <ForthCompo />
        <FifthCompo />
        <SlideCompo />
        <SixthCompo />
        <Footer />
        {/* <LoginSignUp /> */}
      </div>
    </>
  );
}

export default App;
