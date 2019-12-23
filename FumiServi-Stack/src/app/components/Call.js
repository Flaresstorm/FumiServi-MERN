import React, { Component } from 'react';
import '../assets/css/Call.css';

    class Call extends Component {
        render(){
            return( 
                    <div className="cont blue darken-1">
                        <center>
                        <div className="box">
                            <p className="text">Atendemos sus inquietudes personalmente</p>
                            <a title="Llamar" className="waves-effect waves-light btn-small" href="tel:+580424-6274024">Llama Ahora</a>
                        </div>
                        </center>                               
                    </div>




            );
        }  
    }

    export default Call;