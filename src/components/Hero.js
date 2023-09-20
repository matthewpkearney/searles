import "./HeroStyles.css"
import Navbar from "./Navbar";


// we can control this dynamic component for all pages
function Hero(props) {
    return (
        <>
        {/* cName specifies the class to make the hero for */}
        <div className = {props.cName}>   
            <img alt="HeroImg" src={props.heroImg}/>
            <div className="hero-text">
                <br></br>
                <br></br>
                <h2>{props.preText}</h2>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>

            </div>
        </div>
        <Navbar />
        
        </>
    )
}

export default Hero;