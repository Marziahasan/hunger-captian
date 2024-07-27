import React from "react";
import logo from "../../assets/img/Logoo.svg"
import mainBanner from "../../assets/img/background.png"
import whitebanner from "../../assets/img/white-banner.svg"
const Header=()=>{
    return(
        <>
        <header>
            <img src={mainBanner} alt="" />
            <img className="white-border" src={whitebanner} alt="" />
        </header>
        <section className="logo">
            <img src={logo} alt="" />
        </section>
        <section className="text">
            <p>Good Food is <br /> The Foundation of <br /><span>GENUINE HAPPINESS</span>
             </p>
        </section>
        </>
    )
}
export default Header