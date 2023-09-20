import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import EventsImg from "../assets/sally/Searles-castle-83.jpg"
function Events () {
    return (
        <>
        <Navbar />
        <Hero 
        cName="hero" 
        heroImg={EventsImg} 
        preText="When Impressions Matter"
        title="Corporate Functions" 
        text="Fundraisers, Trade Shows, Award Ceremonies, Shareholders Meetings, Seminars, Holiday Parties, Political Events" 
        url="/contactus"
        buttonText="Book now!" 
        btnClass="show"/>
        </>
    )
}

export default Events;