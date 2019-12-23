import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Calendar from '../assets/js/Calendar';


    class Client extends Component {
      componentDidMount() {
        // Auto initialize all the things!
             M.AutoInit();
        } 
      constructor() {
        super();
        this.state = {
          Cliente: '',
          ACliente: '',
          TCliente: '',
          RIF:'',
          _id: '',
          clients: []       
        };
        this.handleChange = this.handleChange.bind(this);
        this.addClient = this.addClient.bind(this);          
      }    
      handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }
      addClient(e) {
        e.preventDefault();
        if(this.state._id) {
          fetch(`/api/client/${this.state._id}`, {
            method: 'PUT',
            body: JSON.stringify({
              Cliente: this.state.Cliente,
              ACliente: this.state.ACliente,
              TCliente: this.state. TCliente,
              RIF:this.state.RIF,             
            
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              window.M.toast({html: 'Cliente Actualizado'});
              this.setState({_id: '', Cliente: '', ACliente: '', TCliente: '',RIF:''});
              this.fetchClients();
            });
        } else {
          fetch('/api/client', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              window.M.toast({html: 'Cliente Registrado'});
              this.setState({_id: '', Cliente: '', ACliente: '', TCliente: '',RIF:''});
              this.fetchClients();
            })
            .catch(err => console.error(err));
        }
    
      }    
      deleteClient(id) {
        if(confirm('¿Desea eliminar este cliente?')) {
          fetch(`/api/client/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              M.toast({html: 'Cliente Eliminado'});
              this.fetchClients();
            });
        }
      }    
      editClient(id) {
        fetch(`/api/client/${id}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              Cliente: data.Cliente,
              RIF:data.RIF,
              ACliente: data.ACliente,
              TCliente: data.TCliente,    
              _id: data._id
            });
          });
      }    
      componentDidMount() {
        this.fetchClients();
      }   
      fetchClients() {
        fetch('/api/client')
          .then(res => res.json())
          .then(data => {
            this.setState({clients: data});
            console.log(this.state.clients);
          });
      }
    

      
        render(){
            return(                        
                           <div>
                                    <div className="navbar-fixed ">
                        <nav className="yellow darken-4">
                            <div className="nav-wrapper">
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul  className="  hide-on-med-and-down">
                                <li><Link  to="/">Servicios DG</Link></li>
                                <li className="right"><Link  to="/Register">Modificacion y Reportes</Link></li>
                                <li className="right"><Link  to="/Worker">Empleados</Link></li>
                                <li className="right"><Link  to="/Client">Clientes</Link></li>  
                                
                                                       
                            </ul>

                            </div>
                        </nav>
                        </div>
                            <ul className="sidenav" id="mobile-demo">
                                <li><a href="http://localhost:3000/" >Servicios DG</a></li>
                                <li ><Link  to="/Register">Modificacion y Reportes</Link></li>
                                <li ><Link  to="/Worker">Empleados</Link></li>
                                <li ><Link  to="/Client">Clientes</Link></li>   
                            </ul>

                                  <div className="container">
                                    
                                    <div className=" col s6">
                                    <h3 className="center">Clientes Registrados</h3>
                                        <div className="card center">
                                          <div className="card-content">
                                           
                                              <table style={{marginTop:'25px', marginBottom:'25px'}} className="responsive-table">
                                                <thead>
                                                  
                                                  <tr>
                                                      <th>RIF</th>
                                                      <th>Cliente</th>
                                                      <th>Contacto</th>
                                                      <th>Telefono</th>
                    
                   
                                                  </tr>
                                                </thead>
                                            <tbody>
                                              {this.state.clients.map(cliente => {
                                                return (
                                                  <tr key={cliente._id}>
                                                    <td>J-{cliente.RIF}</td>
                                                    <td>{cliente.Cliente}</td>
                                                    <td>{cliente.ACliente}</td>
                                                    <td>{cliente.TCliente}</td>
                                                    <td>
                                                      <button title="Eliminar"  onClick={() => this.deleteClient(cliente._id)}style={{margin:"4px"}} className="btn light-blue darken-4 ">
                                                        <i className="material-icons">delete</i> 
                                                      </button>
                                                      <button title="Editar" href="#modal" onClick={() => this.editClient(cliente._id)} style={{margin:"4px"}}  className="btn light-blue darken-4 modal-trigger" >
                                                        <i className="material-icons">edit</i>
                                                      </button>
                                                    </td>
                                                  </tr> )})}
                                            </tbody>
                                              </table>
                                              <br/><br/>
                                              
                                              </div>
                                          </div>
                                          <button title="Añadir" href="#modal3"  className="btn light-blue darken-4 modal-trigger " >
                                                        <i className="material-icons">add</i>
                                                      </button>


                                          <div id="modal3" className="modal">
                                            <div className="modal-content">
                                              <center><h4>Registro</h4></center>
                                              

                                              <div className="card center">
                                                    <div className="card-content">
                                                    
                                                      <form action="/enviar" onSubmit={this.addClient}>
                                                      <div className="input-field col s6">
                                                            <input required={true} onChange={this.handleChange} value={this.state.Cliente} placeholder="Empresa" name="Cliente" type="text" />
                                                              
                                                          </div>
                                                          <div className="input-field col s6">
                                                            <input required={true} onChange={this.handleChange} value={this.state.RIF} placeholder="RIF" name="RIF" type="Number" />
                                                              
                                                          </div>
                                                          <div className="input-field col s6">
                                                            <input  required={true} onChange={this.handleChange} value={this.state.ACliente} placeholder="Conctacto" name="ACliente" type="text" />
                                                              
                                                          </div>
                                                          <div className="input-field col s6">
                                                            <input required={true} onChange={this.handleChange} value={this.state.TCliente} placeholder="Telefono" name="TCliente" type="Number" />
                                                              
                                                          </div>

                                                          <button title="Registrar" type="submit" className="btn light-blue darken-4 "> Registrar </button>
                                                      </form>
                                                </div>
                                              </div>
              
                                              </div>
                                              <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat modal-close ">Cerrar</a>
                  </div>
                                          
                                          </div>

                                          <div id="modal" className="modal">
                                            <div className="modal-content">
                                              <center><h4>Modificacion</h4></center>
                                              

                                              <div className="card center">
                                                    <div className="card-content">
                                                    
                                                      <form action="/enviar" onSubmit={this.addClient}>
                                                      <div className="input-field col s6">
                                                            <input required={true} onChange={this.handleChange} value={this.state.Cliente} placeholder="Empresa" name="Cliente" type="text" />
                                                              
                                                          </div>
                                                          <div className="input-field col s6">
                                                            <input required={true} onChange={this.handleChange} value={this.state.RIF} placeholder="RIF" name="RIF" type="Number" />
                                                              
                                                          </div>
                                                          <div className="input-field col s6">
                                                            <input  required={true} onChange={this.handleChange} value={this.state.ACliente} placeholder="Conctacto" name="ACliente" type="text" />
                                                              
                                                          </div>
                                                          <div className="input-field col s6">
                                                            <input required={true} onChange={this.handleChange} value={this.state.TCliente} placeholder="Telefono" name="TCliente" type="Number" />
                                                              
                                                          </div>

                                                          <button title="Modificar" type="submit" className="btn light-blue darken-4 "> Modificar </button>
                                                      </form>
                                                </div>
                                              </div>
              
                                              </div>
                                              <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat modal-close ">Cerrar</a>
                  </div>
                                          
                                          </div>


                                             
                                        </div>                  
                                      </div>
                                      <br/><br/>
                                      <Calendar/>
                                      <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> 
                                      <Footer/>
                                  </div>
  
                                  

         




            );
        }  
    }
  
    export default Client;