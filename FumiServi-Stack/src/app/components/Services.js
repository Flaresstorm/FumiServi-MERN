import React, { Component } from 'react';
import '../assets/css/Services.css';
import Roedores from '../assets/img/Roedores.jpg';
import Palomas from '../assets/img/Palomas.jpg';
import impermeabilizacion from '../assets/img/impermeabilizacion.jpg';
import Verdes from '../assets/img/Verdes.jpg';
import Plaga from '../assets/img/Plaga.jpg';
import Pintura from '../assets/img/Pintura.jpg';


    class Services extends Component {
        componentDidMount() {
            // Auto initialize all the things!
                 M.AutoInit();
            }  
        render(){
            return( 
                    <div className="containerr">
                        <div className="services"> 
                        <br/>
                         <h5  className="center h3">Servicios</h5>
                         <a name="Servicios"></a>
                        <h2  className="center">¿Que Ofrecemos?</h2>
                    <br/>    
                        </div>
                        <section className="gallery">
			                <div className="container">
			                <div className="row">
                        
				            <div title="Roedores" href="#modal1" className="modal-trigger"><img src={Roedores} className="grid-2 hover"/></div>
                           
                            <div id="modal1" className="modal">
                                    <div className="modal-content">
                                     <h4>Control de Roedores</h4>
                                     <hr/>
                                      <p style={{textAlign:'justify'}}>Se colocara un cordón sanitario, estaciones (tubo cilíndricos de 40cm de largo x 3 pul de espesor)
                                           en las áreas de la empresa más o menos cada 4mt de distancia el uno del otro los cuales quedaran enumerados y realizando un mapa para su respectiva identificación en áreas internas.
	                                    Se le suministrara dicho cordón sanitario dentro de el, diversos anti coagulantes, rodenticidas, 
                                        ya que es uno de los mejores métodos para controlar la gran problemática de la infestación de 
                                        roedores.
                                        </p>
                                        <p>De requerir nuestros servicios en otras dependencias no olvide solicitar una nueva cotización a través de nuestros teléfonos, o correo electrónico.
                                        </p>
                                        <p>Precios sujetos a cambios según inflación o cambios de paridad cambiaria.</p>
                                        </div>
                                        <hr/>
                                        <div className="modal-footer">
                                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Aceptar</a>
                                    </div>
                                </div> 
                                

				            <div title="Palomas" href="#modal2" className="modal-trigger"><img src={Palomas} className="grid-2 hover"/></div>

                            <div id="modal2" className="modal">
                                    <div className="modal-content">
                                     <h4>Control, desinfestacion y ahuyentamiento de palomas</h4>
                                     <hr/>
                                      <p>Según los métodos ya ejecutados a nivel de industrias comercio, hotelería y Petroleras, nos a dado un gran éxito el plan de ataque general en la desinfestacion, para la exterminación de todo tipo de plaga manteniendo un control en forma continua desde la realización de un cordón sanitario en las áreas externas y internas de sus instalaciones con productos de usos domésticos antialérgicos e inoloros, estudiados previamente por el personal de SIAHO, para proceder a dicha aplicación. Ya que es uno de los mejores métodos para controlar la gran problemática de la infestación de Palomas
                                        Otro método a utilizar y que es bastante efectivo es la exclusión con redes plásticas cuyas características de peso y resistencia las hace especiales para aves. Para prevenir que se posen sobre los edificios y techos de edificaciones.
                                        También se deben colocar PINCHOS; Este es un sistema utilizado para prevenir que las aves se posen en cornisas, marcos de ventanas, tuberías, entre otros, en general para cualquier lugar sobresaliente de edificios y construcciones donde las aves puedan posarse para descansar, divisar las zonas de alimentación o incluso anida
                                            </p>
                                            <p>De requerir nuestros servicios en otras dependencias no olvide solicitar una nueva cotización a través de nuestros teléfonos, o correo electrónico.
                                        </p>
                                        <p>Precios sujetos a cambios según inflación o cambios de paridad cambiaria.</p>
                                        </div>
                                        <hr/>
                                        <div className="modal-footer">
                                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Aceptar</a>
                                    </div>
                                </div> 

				            <div title="Impermeabilizacion" href="#modal3" className="modal-trigger"><img src={impermeabilizacion} className="grid-2 hover"/></div>
                            
                            <div id="modal3" className="modal">
                                    <div className="modal-content">
                                     <h4>Servicios de impermeabilización </h4>
                                     <hr/>
                                      <p>Este servicio se realiza para evitar filtraciones y deterioro productos de las aguas de lluivias y otros agentes tales como las producidas por  aires acondicionados al igual que derrame de tanques de almacenamientos de agua. La actividad consiste en colocar una capa de un producto asfaltico, llamado primex, luego se procede a colocar las tiras de manto impermeabilizantes y luego se procede a realizar el revestimiento de pintura asfáltica (anti solar aluminizada, verde o Roja) el cual va según requerimiento del cliente..
	                                    Para la realización de este servicio es muy importante, identificar el tipo de trabajo a realizar:
                                        </p>
                                        <p>De requerir nuestros servicios en otras dependencias no olvide solicitar una nueva cotización a través de nuestros teléfonos, o correo electrónico.
                                        </p>
                                        <p>Precios sujetos a cambios según inflación o cambios de paridad cambiaria.</p>
                                        </div>
                                        <hr/>
                                        <div className="modal-footer">
                                            
                                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Aceptar</a>
                                    </div>
                                </div> 

				            <div title="Mantenimiento de Areas Verdes" href="#modal4" className="modal-trigger"><img src={Verdes} className="grid-2 hover"/></div>

                            <div id="modal4" className="modal">
                                    <div className="modal-content">
                                    
                                     <h4>Manteminiento de Areas Verdes</h4>
                                     <hr/>
                                      
                                        <ul>
                                          <li>Corte de grama en el alrededor de las oficinas para evitar roedores y ofídicos que 
                                          lo toman como sitios de aperchamiento, igualmente sirve como agente para vectores (insectos, zancudos entre otros).</li>
                                          <li></li>
                                          <li>Corte de árboles y jardines situados en la entrada de las oficinas lo cual sirve para roedores y ofídicos 
                                              como sitios de aperchamiento. Igualmente sirve como agente para vectores (insectos, zancudos entre otros).</li>
                                              <li>Limpieza y bote del mismo</li>
                                          </ul>
                                       
                                        
                                        <p>De requerir nuestros servicios en otras dependencias no olvide solicitar una nueva cotización a través de nuestros teléfonos, o correo electrónico.
                                        </p>
                                        <p>Precios sujetos a cambios según inflación o cambios de paridad cambiaria.</p>
                                        
                                        </div>
                                        <hr/>
                                        <div className="modal-footer">
                                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Aceptar</a>
                                    </div>
                                </div> 
                                
				            <div title="Plagas Voladoras"  href="#modal5" className="modal-trigger"><img src={Plaga} className="grid-2 hover"/></div>
                            
                            <div id="modal5" className="modal">
                                    <div className="modal-content">
                                    
                                     <h4>Plagas Voladoras</h4>
                                     <hr/>
                                      <p>Consiste en la aplicación de insecticidas piretroides, en las áreas afectadas, o de forma preventiva.
                                        En el mercado existen diferentes tipos de insecticidas, los más amigables con el medio ambiente son de la familia de los piretroides.
                                        Son productos especialmente diseñados para el control preventivo y curativo de todo tipo de insectos que se encuentren en cualquier lugar donde se establezcan las plagas.
                                        </p>
                                        <p>De requerir nuestros servicios en otras dependencias no olvide solicitar una nueva cotización a través de nuestros teléfonos, o correo electrónico.
                                        </p>
                                        <p>Precios sujetos a cambios según inflación o cambios de paridad cambiaria.</p>
                                        </div>
                                        <hr/>
                                        <div className="modal-footer">
                                        <a className="modal-close waves-effect waves-green btn-flat">Aceptar</a>
                                    </div>
                                </div> 

				            <div title="Pintura en general"  href="#modal6" className="modal-trigger"><img src={Pintura} className="grid-2 hover"/></div>

                            <div id="modal6" className="modal">
                                    <div className="modal-content">
                                   
                                     <h4>Pintura en general.</h4>
                                     <hr/>
                                      <p>Este tipo de trabajo se realizara y el costo será previo acuerdo entre las partes,
                                           ya que su costo se puede incrementar o variar de acuerdo al tipo  ubicación, area  y material a pintar</p>
                                           <p>De requerir nuestros servicios en otras dependencias no olvide solicitar una nueva cotización a través de nuestros teléfonos, o correo electrónico.
                                        </p>
                                        <p>Precios sujetos a cambios según inflación o cambios de paridad cambiaria.</p>   
                                        </div>
                                        <hr/>
                                        <div className="modal-footer">
                                        <a className="modal-close waves-effect waves-green btn-flat">Aceptar</a>
                                    </div>
                                </div> 

                            </div>
			            </div>
		            </section>
		                 
                    </div>




            );
        }  
    }

    export default Services;