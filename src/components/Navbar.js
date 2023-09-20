import { Component } from "react";
import "./NavbarStyles.css"
import {MenuItems} from "./MenuItems"
import { Link } from "react-router-dom"
import searles_logo from "../assets/logos/Logo-Searles-Castle-Sq.png"

class Navbar extends Component{
    state = {clicked: false}; 
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1>
                    {/* "/" is the relative route to the home page */}
                    <a className="navbar-logo" href="/">
                        {/* opt 1: text */}
                    At the Castle
                 
                        {/* opt 2: logo(s) */}
                {/* <img className="navbar-logo" src={searles_logo} alt ="n/a" /> */}
                    </a>
                </h1>


                <div className="menu-icons" onClick = 
                {this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : 
                "fas fa-bars"}></i> 
                </div>


                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                        <Link className = {item.cName} 
                        to={item.url}>
                        <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>

                        )
                    })}
                    <a className="button" href="/contactus">
                        <button>Contact Us</button>
                    </a>
                </ul>
            </nav>
        )
    }
}

export default Navbar;