import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import VendorsImg from "../assets/Searles-castle-101.jpg"

function Vendors () {
    return (
        <>
         <Navbar />
        <Hero cName="hero-mid" heroImg={VendorsImg} title="Our Favorite Vendors" text="lorem impsum" btnClass="hide"/>
        </>
    )
}

export default Vendors;