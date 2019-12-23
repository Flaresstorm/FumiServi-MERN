import React, { Component } from 'react';
import '../assets/css/FAQ.css';

    class FAQ extends Component {
        componentDidMount() {
            // Auto initialize all the things!
                 M.AutoInit();
            }   
        render(){
            return( 
               
                    <div className="cont">
                        <div className="container">
                         <div className="faq"> 
                        <br/>
                         <h5 className="center h3">FAQ</h5>
                             <a name="FAQ"></a>
                            <h2 className="center">¿Alguna Pregunta?</h2>
                             <br/>    
                        </div>
                        <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">unfold_more</i>¿Cuanto tarda atender mi solicitud?</div>
                                        <div style={{backgroundColor:'#FFF'}} className="collapsible-body"><span>Atendemos solicitudes de nuestros clientes lo mas pronto posible sin embargo, atender tu solicitud puede tomar hasta 4 dias habiles
                                            en caso de tardar mas de lo normal puedes llamar directamente a nuestras oficinas, enviar un E-mail o acercarte a nuestras oficinas en Cabimas - Estado Zulia Venezuela </span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">unfold_more</i>¿Donde estan ubicados?</div>
                                        <div style={{backgroundColor:'#FFF'}} className="collapsible-body"><span>Te dejamos acontinuacion toda nuestra informacion legal de manera que sea mucho mas facil ubicarnos
                                        <p>Fumigaciones y Servicios DG, CA</p>
                                        <p>RIF:J-31009468-3</p>
                                        <p>Av.22 Local S/N Sector Barrio Unión 
                                        I Tía Juana, Municipio Simón Bolívar
                                        Estado Zulia.</p>
                                        
                                        </span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">unfold_more</i>¿Que pasa si necesito mas de un servicio?</div>
                                        <div style={{backgroundColor:'#FFF'}} className="collapsible-body"><span>En caso de necesitar mas de un 1 servicio o el mismo servicio de distintos lugares
                                            basta con realizar las peticiones necesario en nuestro formulario de contrato, cabe destacar que cada servicio se cobrar por separado.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">unfold_more</i>Ya no necesito el servicio que pedi, ¿que puedo hacer?</div>
                                        <div style={{backgroundColor:'#FFF'}} className="collapsible-body"><span>En caso de ya no necesita el servicio contratado debe llamar a nuestras oficinar para informar que ya no se requiere el servicio,
                                            para posteriormente ser retirado del sistema.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header"><i className="material-icons">unfold_more</i>¿Como puedo ser clientes regular?</div>
                                        <div style={{backgroundColor:'#FFF'}} className="collapsible-body"><span>Si eres propietario de una empresa o organizacion y necesitas ser cliente regular se debe contratar al menos 1 servicio por primera vez,
                                            luego debe suministrarse los siguientes datos: RIF, Telefono, Nombre de la empresa, Nombre del contacto, de esta manera puede ser registrado en el sistema.</span></div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        
                        
                



            );
        }  
    }

    export default FAQ;