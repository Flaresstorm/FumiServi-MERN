import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Services from './Services';
import Footer from './Footer';
import Contact from './Contact';
import Call from './Call';
import About from './About';
import FAQ from './FAQ';

//import Background from '../assets/img/Banner.jpg';
import '../assets/css/Home.css';
import '../assets/js/Hash';
import '../assets/js/Goup';
import Banner1 from '../assets/img/Banner1.jpg';
import Banner2 from '../assets/img/Banner2.jpg';
import Banner3 from '../assets/img/Banner3.jpg';

    class Home extends Component {
        componentDidMount() {
            // Auto initialize all the things!
                 M.AutoInit();
                
            } 

            
        render(){
            return( 
                    <div>
                        <div className="navbar-fixed ">
                        <nav className="light-blue darken-4">
                            <div className="nav-wrapper">
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul  className="  hide-on-med-and-down">
                                <li><a href="http://localhost:3000/" >Servicios DG</a></li>
                                <li className="active" ><a href="#Nosotros">Nosotros</a></li>
                                <li className="active" ><a href="#Servicios">Servicios</a></li>                                
                                <li className="active"><a href="#Contacto">Contacto</a></li>
                                <li className="active"><a href="#FAQ">FAQ</a></li>                              
                                <li className="right" ><Link to="/Contrato">Contrato</Link></li>  
                                
                                                       
                            </ul>

                            </div>
                        </nav>
                        </div>
                            <ul className="sidenav" id="mobile-demo">
                                <li><a href="http://localhost:3000/" >Servicios DG</a></li>
                                <li className="active" ><a href="#Nosotros">Nosotros</a></li>
                                <li className="active" ><a href="#Servicios">Servicios</a></li>                                
                                <li className="active"><a href="#Contacto">Contacto</a></li>
                                <li className="active"><a href="#FAQ">FAQ</a></li>                              
                                <li ><a href="http://localhost:3000/Contrato" >Contrato</a></li>  
                            </ul>
  
        
                        <header>
                        
                        <div style={{marginTop:'-15px', height:'auto'}} className="slider">
                            <ul>
                                <li><img src={Banner1} alt="ServiciosDG"/></li>
                                <li><img src={Banner2} alt="ServiciosDG"/></li>
                                <li><img src={Banner3} alt="ServiciosDG"/></li>
                                <li><img src={Banner1} alt="ServiciosDG"/></li>
      
                            </ul>
                        </div>
        
                        </header>
                        <About/> 
                        <Call/>                      
                        <Services/>                                                                
                        <Contact/>
                        <FAQ/>                       
                        <Footer/>
                        <span className="ir-arriba ">
                      <i className="medium material-icons">keyboard_arrow_up</i>
                        </span>  
                    </div>




            );
        }  
    }

    export default Home;