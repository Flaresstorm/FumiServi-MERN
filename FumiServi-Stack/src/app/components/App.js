import React  from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Contrato from './Contrato';
import Register from './Register';
import Client from './Client';
import Cdu  from './Cdu';
import De from './De';
import Admin from './Admin';
import Worker from './Worker';
import Tareas from './Tareas';

const App = () =>(
    
      
        
         <Switch>
          
          <Route exact path="/" component={Home}/>
          <Route path="/Admin"  component={Admin}/>
          <Route path="/Worker" component={Worker}/>
          <Route path="/cdu" component={Cdu}/>
          <Route path="/de" component={De}/>
          <Route path="/Contrato" component={Contrato}/>
          <Route path="/Register" component={Register}/>       
          <Route path="/Client" component={Client}/>
          <Route path="/Tareas" component={Tareas}/>

          </Switch> 
        
    
    
);
  






export default App;
