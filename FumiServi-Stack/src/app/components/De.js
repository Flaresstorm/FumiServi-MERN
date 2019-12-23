import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Call from './Call';
import FAQ from './FAQ';

    class De extends Component {
      componentDidMount() {
        // Auto initialize all the things!
             M.AutoInit();
        } 
      
        render(){
            return( 
                  <div>
                         <nav className="blue darken-4">
                                          <ul>
                                          <li><a href="http://localhost:3000/" >Servicios DG</a></li>
                                            <li className="right"><Link  to="/Contrato">Contrato</Link></li>
                                          </ul>
                                    </nav>               

        <div className="container">
            <div className="row">
                <h1>Copyright 2019 Fumigaciones y Servicios DG</h1>
                <p>Todos los derechos reservados. Ninguna parte de esta publicación puede ser reproducida, 
                    distribuida o transmitida de ninguna forma ni por ningún medio, incluyendo fotocopiado, 
                    grabación u otros métodos electrónicos o mecánicos, sin el permiso previo por escrito del editor, 
                    excepto en el caso de citas breves incorporadas. en revisiones críticas y ciertos otros usos no comerciales 
                    permitidos por la ley de derechos de autor. 
                    Para las solicitudes de permiso, escriba al editor, dirigido a "Atención: Coordinador de permisos", en la dirección que figura a continuación. </p>
               <p> <strong>Fumigaciones y Servicios DG, CA</strong></p>
               <p> <strong>RIF: J-31009468-3</strong></p>
               <p> <strong>Av.22 Local S/N Sector Barrio Unión I Tía Juana, <br/>Municipio Simón Bolívar Estado Zulia.</strong></p>
                <Link to="/"><a>www.serviciosdg.com</a></Link>
            </div>

        </div>
            <FAQ/>
             <Call/> 
            <Footer/>
            
            </div>

              
  
                

         




            );
        }  
    }
  
    export default De;