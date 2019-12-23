import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/Logo.png'
import '../assets/css/Footer.css';

    class Footer extends Component {
        render(){
            return( 
                <footer className="page-footer light-blue darken-4">
                    <div className="container">
                      <div className="row">
                        <div className="col l6 s12">
                        <a href="http://localhost:3000/" ><img className="logoft center" src={Logo}/></a>
                            <p className="grey-text text-lighten-4">Fumigaciones y Servicios DG, CA</p>
                            <p className="grey-text text-lighten-4">RIF: J-31009468-3</p>
                            <p className="grey-text text-lighten-4">Av.22 Local S/N Sector Barrio Unión I Tía Juana, <br/>Municipio Simón Bolívar Estado Zulia.</p>



                        </div>
                        <div className="col l4 offset-l2 s12">
                          <h5 className="white-text">Enlaces</h5>
                          <ul>
                            <li><a href="http://localhost:3000/cdu/" className="grey-text text-lighten-3">Condiciones de Uso</a></li>
                            <li><a href="http://localhost:3000/de/" className="grey-text text-lighten-3" >Derechos de la Empresa</a></li>
                            <li><a  href="https://oig.cepal.org/sites/default/files/2012_leyorgtrabajo_ven.pdf" target="_blank" className="grey-text text-lighten-3">Leyes Empresariales</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="footer-copyright">
                      <div className="container">Derechos Reservados para Fumigaciones &amp; Servicios DG - Venezuela © 2019 Copyright
                      
                      </div>                 
                    </div> 
                               
              </footer>
            );}}
export default Footer;