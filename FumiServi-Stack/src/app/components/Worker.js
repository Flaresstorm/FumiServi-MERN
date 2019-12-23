import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Calendar from '../assets/js/Calendar';


    class Worker extends Component {

      componentDidMount() {
        // Auto initialize all the things!
             M.AutoInit();
        } 
      constructor() {
        super();
        this.state = {
          Nombre: '',
          Cedula: '',
          Telefono: '',
          Email: '',
          Direccion:'',
          _id: '',
          workers: []       
        };
        this.handleChange = this.handleChange.bind(this);
        this.addWorker = this.addWorker.bind(this);   
        
        
      }
     
      handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }

      addWorker(e) {
        e.preventDefault();
        if(this.state._id) {
          fetch(`/api/worker/${this.state._id}`, {
            method: 'PUT',
            body: JSON.stringify({
              Nombre: this.state.Nombre,
              Cedula: this.state.Cedula,
              Telefono: this.state.Telefono,
              Email: this.state.Email,
              Direccion: this.state.Direccion
             
         
    
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              window.M.toast({html: 'Registro Actualizado'});
              this.setState({_id: '', Nombre: '', Cedula: '', Telefono: '', Email: '', Direccion:''});
              this.fetchWorkers();
            });
        } else {
          fetch('/api/worker', {
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
              window.M.toast({html: 'Empleado Registrado'});
              this.setState({Nombre: '', Cedula: '', Telefono: '', Email: '', Direccion:''});
              this.fetchWorkers();
            })
            .catch(err => console.error(err));
        }
    
      }
    
      deleteWorker(id) {
        if(confirm('¿Seguro que quieres eliminar este empleado?')) {
          fetch(`/api/worker/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              M.toast({html: 'Empleado Eliminada'});
              this.fetchWorkers();
            });
        }
      }
    
      editWorker(id) {
        fetch(`/api/worker/${id}`)
          .then(res => res.json())
          .then(data => {
            
            this.setState({
              Nombre: data.Nombre,
              Cedula: data.Cedula,
              Telefono: data.Telefono,
              Email: data.Email,
              Direccion: data.Direccion,    
              _id: data._id
            });
          });
      }
    
      componentDidMount() {
        this.fetchWorkers();
      }
    
      fetchWorkers() {
        fetch('/api/worker')
          .then(res => res.json())
          .then(data => {
            this.setState({workers: data});
            console.log(this.state.workers);
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
         <div className ="col s6"> 
         <h2 style={{textAlign:'center'}}>Empleados Registrados</h2>
         <div  className=" card center">
           <div className=" card-content">
              <table style={{marginTop:'25px', marginBottom:'25px'}} className="responsive-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Cedula</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    <th>Direccion</th>
                    
                   
                  </tr>
                </thead>
                <tbody>
                  { 
                    this.state.workers.map(worker => {
                      return (
                        <tr key={worker._id}>
                          <td>{worker.Nombre}</td>
                          <td>{worker.Cedula}</td>
                          <td>{worker.Telefono}</td>
                          <td>{worker.Email}</td>
                          <td>{worker.Direccion}</td>
                          
                          <td>
                            <button title="Eliminar" onClick={() => this.deleteWorker(worker._id)}style={{margin:"4px"}} className="btn light-blue darken-4 ">
                              <i className="material-icons">delete</i> 
                            </button>
                            <button title="Editar" href="#modal" onClick={() => this.editWorker(worker._id)} style={{margin:"4px"}}  className="btn light-blue darken-4 modal-trigger " >
                              <i className="material-icons">edit</i>
                              </button>
                              
                              
                              </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              <br/><br/>
              </div>
                </div>
                <button title="Añadir" href="#modal3"    className="btn light-blue darken-4 modal-trigger " >
                    <i className="material-icons">add</i>
                    </button> 


                    <br/><br/>   
                      


                    <div id="modal3" className="modal">
                <div className="modal-content">
                  <center><h4>Registro</h4></center>
             
              
             <div className="card"> 
             <div className="card-content center">
             <form action='/enviar' onSubmit={this.addWorker}>
                    <div className="row">
                      <div className="input-field col s6">                    
                        <input   name="Nombre" required={true} onChange={this.handleChange} value={this.state.Nombre} placeholder="Nombre" type="text"  autoFocus/>                      
                      </div>
                      <div className="input-field col s6">
                        <textarea  name="Cedula" required={true} onChange={this.handleChange} value={this.state.Cedula} placeholder="Cedula" type="number" cols="30" rows="10"  className="materialize-textarea"></textarea>
                        
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s6">
                        <textarea name="Telefono" required={true} onChange={this.handleChange} value={this.state.Telefono} placeholder="Telefono" type="number" cols="30" rows="10"  className="materialize-textarea"></textarea>
                        
                      </div>              
                      <div className="input-field col s6">
                        <textarea name="Email" required={true} onChange={this.handleChange} value={this.state.Email} placeholder="Email" type="email" cols="30" rows="10"  className="materialize-textarea"></textarea>
                        
                      </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s6">
                        <textarea name="Direccion" required={true} onChange={this.handleChange} value={this.state.Direccion} placeholder="Direccion" type="text" cols="30" rows="10"  className="materialize-textarea"></textarea>
                        
                      </div>
                      </div>
                      <button type="submit" className="btn light-blue darken-4  "> Registrar </button>
                  </form>
                  </div>
                  </div>
              
            </div>
            <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat modal-close ">Cerrar</a>
                  </div>
            
           </div>
              

                  


              
              <div id="modal" className="modal">
                <div className="modal-content">
                  <center><h4>Modificacion</h4></center>
             
              
             <div className="card"> 
             <div className="card-content center">
             <form action='/enviar' onSubmit={this.addWorker}>
                    <div className="row">
                      <div className="input-field col s6">                    
                        <input   name="Nombre" required={true} onChange={this.handleChange} value={this.state.Nombre} placeholder="Nombre" type="text"  autoFocus/>                      
                      </div>
                      <div className="input-field col s6">
                        <textarea  name="Cedula" required={true} onChange={this.handleChange} value={this.state.Cedula} placeholder="Cedula" type="number" cols="30" rows="10"  className="materialize-textarea"></textarea>
                        
                      </div>
                    </div>

                    <div className="row">
                      <div className="input-field col s6">
                        <textarea name="Telefono" required={true} onChange={this.handleChange} value={this.state.Telefono} placeholder="Telefono" type="number" cols="30" rows="10"  className="materialize-textarea"></textarea>
                        
                      </div>              
                      <div className="input-field col s6">
                        <textarea name="Email" required={true} onChange={this.handleChange} value={this.state.Email} placeholder="Email" type="email" cols="30" rows="10"  className="materialize-textarea"></textarea>
                        
                      </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s6">
                        <textarea name="Direccion" required={true} onChange={this.handleChange} value={this.state.Direccion} placeholder="Direccion" type="text" cols="30" rows="10"  className="materialize-textarea"></textarea>
                        
                      </div>
                      </div>
                      <button type="submit" className="btn light-blue darken-4  "> Modificar </button>
                  </form>
                  </div>
                  </div>
              
            </div>
            <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat modal-close ">Cerrar</a>
                  </div>
            
           </div>

              



              
                 <br/><br/>   

                
              </div>
              </div>
              <Calendar/>
              <br/><br/> <br/><br/> <br/><br/> <br/>
            <Footer/>
            
            
</div>
              
  
                

         




            );
        }  
    }
  
    export default Worker;