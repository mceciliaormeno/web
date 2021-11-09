import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegation/Navbar'
import Inicio from './components/pages/Inicio'
import Docencia from './components/pages/Docencia'
import Contacto from './components/pages/Contacto'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Docencia}/>
          <Route path='/exposiciones' component={Inicio}/>
          <Route path='/contacto' component={Contacto}/>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
