import React, { Component } from 'react';
import Mision from '../assets/img/Mision.jpg';
import Vision from '../assets/img/Vision.jpg';
import '../assets/css/About.css';




    class About extends Component {
        render(){
            return( 
             <div className="container"> 
             <a name="Nosotros"></a> 
                    <br/>
                    <h5 className="center h3">Nosotros</h5>
                    <h2 style={{marginTop:'-5px'}} className="center">¿Quienes Somos?</h2>
                    <br/>                   
                    <div className="row">   
                        <div className="col s6">
                            <img className="img" src={Mision}/>
                         </div>
                        <div className="col s6">
                                <h2>Nuestra Misión</h2>
                                <p>Prestar un servicio de calidad, en competencia de control de 
                                    plagas y mantenimiento en general, con personal calificado, 
                                    altamente capacitado, en continuo mejoramiento, con tecnologia 
                                    de vanguardia, generando el máximo valor agregado, en busqueda de 
                                    la excelencia, superando las 
                                    expectativas de nuestros clientes con la mayor eficacia.</p>
                        </div>
                        </div>
                  
                    <div className="row">                         
                        <div className=" col s6">
                                <h2>Nuestra Visión</h2>
                                <p>Ser la principal empresa en el mercado para el control de
                                    plaga en el área industrial, comercial y domestica, prestando 
                                    un servicio de calidad a nuestros clientes, cumpliendo con la 
                                    normativa legal vigente, sin causar impacto al ambiente, 
                                    protegiendo a nuestros trabajadores de cualquier daño a la salud.</p>
                        </div>
                        <div className="col s6">
                            <img className="img" src={Vision}/>
                         </div>
                        </div>
                    </div>

        

            );
        }  
    }

    export default About;