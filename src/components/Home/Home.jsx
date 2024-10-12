import About from "../About/About";
import Contact from "../Contact/Contact";
import Counts from "../Counts/Counts";
import HeroSection from "../HeroSection/HeroSection";
import Projects from "../Projects/Projects";


const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Counts/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;