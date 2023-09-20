import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import WeddingsImg from "../assets/Searles-castle-11.jpg"

function Weddings () {
    return (

        <>
            <Navbar />
            <Hero 
            cName="hero"
            heroImg= {WeddingsImg}
            preText="Not just a wedding"
            title={
                <>
                A fairytale wedding, <br /> 
                at Searles Castle
                </>
            }
            text={
                <>
                At Searles Castle, your fairytale wedding awaits. Each lasting moment in your memory will remain as magical as the day you say, “I do.”"
                </>
            }
            url="/contactus"
            btnClass="show"
            buttonText="Book it!"/>
        </>
    )
}

export default Weddings;