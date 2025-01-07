import Navbar from "../Components/Navbar"
import About from "./About"
import Testimonials from "./Blog"
import Contact from "./Contact"
import Footer from "./Footer"
import Home from "./Home"
import Portfolio from "./Portfolio"
import Services from "./Services"
import Sliders from "./Slider"


const MainPage = ()=>{
    return(
        <>
<Navbar/>
 <Home/>
 <About/>
 <Services/>
 <Portfolio/>
 <Testimonials/>
 <Contact/>
 <Footer/>
 </>
    )
}
export default MainPage