import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Calendar from '../assets/js/Calendar';
import Photo from '../assets/img/Photo.jpg';

    class Tareas extends Component {

      componentDidMount() {
        // Auto initialize all the things!
             M.AutoInit();
        } 

      constructor() {
        super();
        this.state = {
          Titulo: '',
          Responsable: '',
          Descripcion: '',
          Prioridad: '',
          
          _id: '',
          notes: []       
        };
        this.handleChange = this.handleChange.bind(this);
        this.addNotes = this.addNotes.bind(this);   
        
        
      }
     
      handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }

      addNotes(e) {
        e.preventDefault();
        
          fetch('/api/notes', {
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
              M.toast({html: 'Nota Creada'});
              this.setState({Titulo: '', Responsable: '', Descripcion: '', Prioridad: ''});
              this.fetchNotes();
            })
            .catch(err => console.error(err));
        
    
      }
    
      deleteNotes(id) {
        if(confirm('¿Desea eliminar esta nota?')) {
          fetch(`/api/notes/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              M.toast({html: 'Nota Eliminada'});
              this.fetchNotes();
            });
        }
      }
    
     
    
      componentDidMount() {
        this.fetchNotes();
      }
    
      fetchNotes() {
        fetch('/api/notes')
          .then(res => res.json())
          .then(data => {
            this.setState({notes: data});
            console.log(this.state.notes);
          });
      }

      

  render() {
    const Notes = this.state.notes.map((note, i) => {
      return (

       

        <div key={i}>
          <div className="col s6 m3">
        <div  className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={Photo}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{note.Titulo}<i className="material-icons right">more_vert</i></span>
          <p>Prioridad: {note.Prioridad}</p> 
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{note.Titulo}<i className="material-icons right">close</i></span>
          <p>{note.Descripcion}</p>
          <p>Responsable:  <mark>{note.Responsable}</mark></p>
        </div>
        <div className="card-action">
            <button onClick={() => this.deleteNotes(note._id)}style={{margin:"4px"}} className="btn light-blue darken-4 ">
                              <i className="material-icons">delete</i> 
                            </button> 
            </div>
      </div>
      </div>
      </div>



        
      )
    });

    // RETURN THE COMPONENT
    return (
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



                                    
                                    
                                    
                                    
                                    
                                    <div id="modal" className="modal">
             <div className="modal-content">
              <h4>Crear Nota</h4>
              
      
      <div className=" card">       
      <div className="card content ">
        
               <form action='/enviar' onSubmit={this.addNotes}>
               
               

                 <div className="input-field col s12">
                 <input required={true}  name="Titulo" onChange={this.handleChange} value={this.state.Titulo} placeholder="Titulo" type="text"  autoFocus/>                        
                  </div>

                      <div className="input-field  col s12">
                      <input required={true}  name="Responsable" onChange={this.handleChange} value={this.state.Responsable} placeholder="Responsable" type="text"  autoFocus/>   
                       </div>

                       <div className="input-field  col s12">
                       <input  required={true} name="Descripcion" onChange={this.handleChange} value={this.state.Descripcion} placeholder="Descripcion" type="text"  autoFocus/>  
                        </div>

                      <div className="input-field  col s12">
                      <select required={true} name="Prioridad" className="form-control" value={this.state.Prioridad} onChange={this.handleChange}>
                        <option>Prioridad</option>
                          <option>Baja</option>
                            <option>Media</option>
                              <option>Alta</option>
                       </select>
                       </div>
                       <div className="card-action">
                <button title="Guardar" type="submit" className="btn light-blue darken-4 ">Guardar</button>
                  </div>  
                      
            </form>
           
            </div>
            <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat modal-close ">Cerrar</a>
                  </div>
          </div>
      
              
            </div>
 
           </div>  
           <center><h2>Notas Rapidas</h2> </center>
           
           <div className="container">  
          <div className="row" >

   
          <div>
              {Notes} 
              </div>
              
                           
      </div>
      <button title="Añadir" href="#modal" className="btn light-blue darken-4 modal-trigger ">
                              <i className="material-icons">add</i> 
                            </button>          
      </div>
        
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <Calendar/>
        <br/><br/> <br/><br/> <br/><br/>  
        <Footer/>
        </div>



    );
  }
}
  
    export default Tareas;