import "./Welcome.css"

import hero_img from '../Assests/hero_image.png'
import hand from '../Assests/Hamburger_icon.png'
import jsPDF from 'jspdf';
import { Link } from "react-router-dom";
export function Welcome(){
 
    // let btn=document.getElementById('btn');
    // let toogleArea=document.getElementById("toggle")
    // btn.addEventListener("click",()=>{
    //   alert("e")
    // })
 function onClick(){
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    navbarLinks.classList.toggle('active')
    alert(8)

 }
     return(
        <>
        <div className="top-style"></div>
        <div className="hero-container" id="contnet">
        
        <nav className="nav-bar">
              <h3 className="logo">LB⚡</h3>
              <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
             <div class="navbar-links">
              <ul className="ul-list hide" id="toggle" >
                <l1 className="ul-items"><a href="#">HOME</a></l1>
                <l1 className="ul-items"><a href="#m">BILLING</a></l1>
                <l1 className="ul-items"><a href="#C">CONTACT</a></l1>
              </ul>
              </div>
        </nav>

        {/* hero-section */}
        <section className="hero-section">
            <div className="hero-content-container">
             <div className="afterEffects"><img src={hero_img} className="hero_image"></img></div>
              
             <div className="hero-content">
               <h2 className="hero-heading">Ready to <br/>Calculate</h2>
               <p  className="hero-content-1">calculating bill is easy with lb⚡</p>
                <button className="btn btn-hero"><a href="#m" className="btn btn-hero" style={{textDecoration:"none"}}>Get Started</a></button>
            </div> 
            </div>  
            {/* <div className="top-style"></div> */}
        </section>
    

        </div>
        
        </>
     )
    
      
}
