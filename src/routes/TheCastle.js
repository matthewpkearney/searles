import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import TheCastleImg from "../assets/Searles-castle-135.jpg"

function TheCastle () {
    return (
        <>
            <Navbar />
            <Hero 
            cName="hero" 
            heroImg={TheCastleImg} 
            title="History of Searles Castle" 
            btnClass="hide"/>
 
        </>
    )
}

export default TheCastle;