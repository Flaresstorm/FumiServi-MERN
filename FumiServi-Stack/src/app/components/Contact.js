import React, { Component } from 'react';
import '../assets/css/Contact.css';





    class Contact extends Component {
        render(){
            return( 
                
               <div className="container">
                   <a name="Contacto"></a> 
                   <br/>
                        <h5  className="center h3">Contacto</h5>
                        <h2 style={{marginTop:'-5px'}} className="center">¿Quieres Contactarnos?</h2>
                    <div className="row">
                        <div className=" col s12">
                        <div className=" col s6 m6">
                            <div className=" mt center">
                                <i className="medium material-icons">email</i>
                                <h2 style={{marginTop:'-5px'}}>Contactanos</h2>
                                <p style={{textAlign:'justify'}}>Ponte en contacto con nosostros por medio de nuestro telefono de oficina o email corporativo, tambien 
                                    puedes seguir nuestras redes sociales para estar al tanto de nuestra actividad.
                                </p>
                            </div>
                        </div>
                        <div className=" col s6 ">
                            
                            <div className="card-panel ">
                            <div className="center">
                                <h5 className="center">Social</h5>
                            <a title="Facebook" href="https://es-la.facebook.com/" target="_blank"  className="btn-floating btn-large indigo darken-3">               
                            <ion-icon style={{marginTop:'10px'}} size="large" name="logo-facebook"></ion-icon>
                            </a>&emsp;
                            <a title="Twitter" href="https://twitter.com/iniciarsesion?lang=es" target="_blank" className="btn-floating btn-large blue lighten-2">
                            <ion-icon style={{marginTop:'10px'}} size="large" name="logo-twitter"></ion-icon>
                            </a>&emsp;
                            <a title="Instagram" href="https://www.instagram.com/?hl=es-la" target="_blank" className="btn-floating btn-large pink lighten-2">
                            <ion-icon style={{marginTop:'10px'}} size="large" name="logo-instagram"></ion-icon>
                            </a>&emsp;
                            <a title="LikedIn" href="https://www.linkedin.com/uas/login?_l=es" target="_blank"className="btn-floating btn-large blue darken-3">
                            <ion-icon style={{marginTop:'10px'}} size="large" name="logo-linkedin"></ion-icon>
                            </a>&emsp;
                            </div>
                            <hr/>
                            <p>  <a title="Enviar Email" href="mailto:victorbriceno2@gmail.com.com?Subject=Consulta"  className="btn-floating btn-large red darken-2" >
                            <ion-icon style={{marginTop:'10px'}} size="large" name="mail-unread"></ion-icon>
                            </a>&emsp; Escribenos a <a href="mailto:FumiServi@gmail.com.com?Subject=Consulta">FumiServi@gmail.com</a></p>
                            <hr/>
                            <p> <a title="Llamar" href="tel:0424-6274024"  className="btn-floating btn-large brown darken-3 " >
                            <ion-icon style={{marginTop:'10px'}} size="large " name="call"></ion-icon>
                            </a> &emsp;Llama al <a href="tel:0265-6511618">(0265)-6511618 </a> o <a href="tel:0265-4151032">(0265)-4151032</a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
               



            );
        }  
    }

    export default Contact;