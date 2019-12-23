import React, { Component } from 'react';
import {Link} from 'react-router-dom';

    
    
    class Calendar extends Component {
        
            componentDidMount() {
                // Auto initialize all the things!
                     M.AutoInit();
                }   
                    
        render(){
            return( 
        <div className="container">
            <div className="fixed-action-btn">
             <a className="btn-floating btn-large red">
              <i className="large material-icons">dehaze</i>
              </a>
            <ul>
            <li><a title="Calendario" href="#modal1" className="btn-floating red modal-trigger "><i className="material-icons">today</i></a></li>
            <li><a title="Calculadora" href="#modal2" className="btn-floating blue modal-trigger"><i className="material-icons">euro_symbol</i></a></li>
            <li><Link to="/Tareas" title="Notas Rapidas" className="btn-floating yellow darken-2 modal-trigger"><i className="material-icons">event_note</i></Link></li>  
            
          </ul>
            </div>
            <div id="modal1" className="modal">
             <div className="modal-content">
              <h4>Calendario</h4>
              <hr/>
              <br/><br/>
              <iframe src="https://calendar.google.com/calendar/embed?src=fumiservi8%40gmail.com&ctz=America%2FCaracas"
              style={{border: '0'}} 
              width="100%" 
              height="300px" 
              scrolling="no">
              </iframe>
              
              <br/><br/>
            </div>
            <hr/>
            <div className="modal-footer">
            <a title="Registrar" target="_blank"href="https://calendar.google.com/calendar/r?cid=victorbriceno2@gmail.com" className=" waves-effect waves-green btn-flat">Registrar Fecha</a>
             <a  className="modal-close waves-effect waves-green btn-flat">Aceptar</a>
            </div>
           </div>

           <div id="modal2" className="modal">
             <div className="modal-content">
              <h4>Calculadora</h4>
              <hr/>
              
             <center> <iframe width="219" height="302" src="http://calculator-1.com/outdoor/?f=0274C8&r=0274C8" scrolling="no" >
                </iframe></center>
              
            </div>
           
            <div className="modal-footer">
             <a  className="modal-close waves-effect waves-green btn-flat">Aceptar</a>
            </div>
           </div>

           
        </div>
            );
        }  
    }

    export default Calendar;