import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import HeroImg1 from "../assets/Searles-castle-100.jpg"
import HeroImg2 from "../assets/michael/michael-1.jpg"




// import Hero from "../components/Hero"
function Home() {
    return (
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg= {HeroImg1}
        title="GRANDEUR"
        text="awe-inspiring + majestic "
        url="/contactus"
        btnClass="show"
        buttonText="Book now!"
        />
        
        </>
    )
}

export default Home;