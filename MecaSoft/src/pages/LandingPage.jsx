import NavBar from "../atoms/NavBar";
import Footer from "../atoms/Footer";
import Mision from "../molecules/Mision";
import Section1 from "../molecules/Section1";
import Section2 from "../molecules/Section2";

function LandingPage() {
    return ( 
        <>
        <NavBar/>
        <Mision/>
        <Section1/>    
        <Section2/>    
        <Footer/>
        </>
     );
}

export default LandingPage;