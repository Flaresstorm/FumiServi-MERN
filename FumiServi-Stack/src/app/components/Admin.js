import React, { Component } from 'react';
import M from 'materialize-css';
import Footer from './Footer';
import {Link} from 'react-router-dom';

    
    class Login extends Component {
       
            componentDidMount() {
                // Auto initialize all the things!
                     M.AutoInit();
                }   
               
               validate(){

                    var user = document.getElementById("user").value;
                    var pass = document.getElementById("pass").value;
                    if(user == "admin" && pass == "admin"){ 
                        window.location.href = "http://localhost:3000/Register";          
                        window.M.toast({html: 'Bienvenido Admin'});
                    }else{
                       
                        window.M.toast({html: 'Error de Usuario y/o Contraseña'});
                    }
                      
                } 
                
                
        render(){
            return( 
            <div>
                        <nav className="yellow darken-4">
                            <ul>
                                <li><Link to="/">Servicios DG</Link></li>
                                <li className="right"><Link to="/Contrato">Contrato</Link></li>
                            </ul>
                        </nav>
                        <br/><br/><br/><br/><br/>
                <div className="container">
                <h2 className="center">Administrador</h2>
                    <div className="card center">                       
                        <div className="card-content">
                            
                    <div className="row">
                        <form name="loginform"  className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input  name="user" id="user" type="text" className="validate"/>
                                        <label htmlFor="user">Usuario</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="pass" name="pass" type="password"   className="validate"/>
                                        <label htmlFor="pass">Contraseña</label>
                                </div>
                            </div> 
                            <button title="Ingresar" onClick={this.validate}  type="button" className="btn light-blue darken-4">Ingresar</button>
                                
                        </form>
                        </div>
                        </div>
                    </div>       
                 </div>
                 <br/><br/><br/><br/><br/>
                 <Footer/>
            </div>
  
            );
        }  
    }

    export default Login;