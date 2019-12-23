import React, { Component } from 'react';
import Footer from './Footer';
import Call from './Call';
import '../assets/css/Contrato.css';
import moment from 'moment';



class Contrato extends Component {
  
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
      Servicio: '',
      Estatus:'Pendiente',
      Fecha: moment().format('L'),
      _id: '',
      tasks: []
    };
    this.handleChange = this.handleChange.bind(this);
    
    this.addTask = this.addTask.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  addTask(e) {
    e.preventDefault();
    if(this.state._id) {
      fetch(`/api/tasks/${this.state._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          Nombre: this.state.Nombre,
          Cedula: this.state.Cedula,
          Telefono: this.state.Telefono,
          Email: this.state.Email,
          Servicio: this.state.Servicio,
          Estatus: this.state.Estatus,
          Fecha: this.state,Fecha

        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          window.M.toast({html: 'Solicitud Actualizada'});
          this.setState({_id: '', Nombre: '', Cedula: '', Telefono: '', Email: '', Estatus:'Pendiente', Servicio:''});
          this.fetchTasks();
        });
    } else {
      fetch('/api/tasks', {
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
          window.M.toast({html: 'Solicitud realizada con exito'});
          this.setState({Nombre: '', Cedula: '', Telefono: '', Email: '', Estatus:'Pendiente', Servicio:''});
          this.fetchTasks();
        })
        .catch(err => console.error(err));
    }

  }

  

  render() {
    return (
                    <div>
                      <nav className="light-blue darken-4">
                            <ul>
                            <li><a href="http://localhost:3000/" >Servicios DG</a></li>                             
                            </ul>
                        </nav>

        <div style={{marginTop: '50px', marginBottom:'50px'}}  className="container">
          <div className="row">
            <h1 style={{textAlign:'center'}}>Formulario de Solicitudes</h1>
            <div className="col s12">
              <div className="card">
                <div className="card-content">
               
                  <form method="POST" action='/enviar'  onSubmit={this.addTask}>
                    <div className="row">
                      <div className="input-field col s6">
                        <input id="Nombre"  name="Nombre" onChange={this.handleChange} value={this.state.Nombre} type="text" required={true} minLength="3" maxLength="25"  autoFocus/>
                        <label>Nombre o Empresa</label>
                      </div>
                      <div className="input-field col s6">
                        <textarea id="Cedula"  name="Cedula" onChange={this.handleChange} value={this.state.Cedula} type="number" required={true} minLength="7" maxLength="11" required="true" cols="30" rows="10" className="materialize-textarea"></textarea>
                        <label>Cedula o RIF</label>
                      </div>
                    </div>


                    <div className="row">
                      <div className="input-field col s6">
                        <textarea id="Telefono" name="Telefono" onChange={this.handleChange} value={this.state.Telefono} type="number" required={true} cols="30" rows="10"  maxLength="11" minLength="10" required="true" className="materialize-textarea"></textarea>
                        <label>Telefono</label>
                      </div>              
                      <div className="input-field col s6">
                        <textarea id="Email" name="Email" onChange={this.handleChange} value={this.state.Email} type="email"  required={true} cols="30" rows="10" maxLength="25" minLength="10" required="true"  className="materialize-textarea validate"></textarea>
                        <label>Email</label>
                      </div>
                    </div>
                    <div className="row">
                    <div className="input-field col s6">                   
                      
                       
                       <select name="Servicio" required={true}  value={this.state.Servicio} onChange={this.handleChange}>
                       <option>Servicio</option>
                         <option>Control Roedores</option>
                          <option>Control Palomas</option>
                           <option>Control Ofidios</option>
                             <option>Control Chiripas</option>
                             <option>Control Plagas Voladoras</option>
                             <option>Servicios Electricos</option>
                             <option>Servicio Pintura General</option>
                             <option>Matenimiento de Areas Verdes</option>
                        </select>                                                               
                      </div> 
                      <div className="input-field col s6">
                        <input style={{display:'none'}} type="date" required={true} disabled value={this.state.Fecha}/>                       
                        </div>
                        <div className="input-field col s6">
                          <input style={{display:'none'}} type="text" required={true} disabled value={this.state.Estatus}/>               
                        </div>          
                      </div>
                      
                    <button  title="Solicitar" type="submit" className="btn light-blue darken-4"> Solicitar </button>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        

      <Call/>
      <Footer/>
      </div>
    )
  }
}

export default Contrato;
