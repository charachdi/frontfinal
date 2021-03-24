import { BrowserRouter as Router, Route, Switch , useRouteMatch } from 'react-router-dom';
import './App.css';
import $ from 'jquery'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './function'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Compteclientequipe from './pages/Compteclientequipe'
import Equipe from './pages/Equipe'
import Service from './pages/Service'
import Clients from './pages/Clients'
import CompteCli from './pages/CompteCli'
import EquipeView from './pages/EquipeView'
import Stepperview from './pages/Stepperview'
import UserView from './pages/UserView'
import Login from './pages/Login'
import Test from './pages/Test'
import Userview from './component/Userview'
import Sidebar from './component/Sidebar'
import 'react-toastify/dist/ReactToastify.css';
function App() {

 
    console.log(window.location.pathname)
  
  return (
    
    <Router>
      <div className="wrapper d-flex align-items-stretch" >
        {window.location.pathname === "/" ? null:<Sidebar />}
   
      <div id="content" className="p-4 p-md-5 pt-5" >
      <Switch>
          <Route path='/' component={Login} exact/>
          <Route path='/home' component={Home} exact/>
          <Route path='/stepper' component={Stepperview} exact/>
          <Route path='/Equipe' component={Equipe} exact/>
          <Route path='/Service' component={Service} exact/>
          <Route path='/Client' component={Clients} exact/>
          <Route path='/Compteclient' component={Compteclientequipe} exact/>

          <Route path='/Equipe/:id' component={EquipeView} exact/>
          <Route path='/profile/:id' component={UserView} exact/>
          <Route path='/Client/:id' component={CompteCli} exact/>
          <Route path='/myProfile' component={Profile} exact/>

          
          <Route path='/test' component={Test} exact/>
        </Switch>
      </div>
     </div>

     
      
    </Router>
  );
}

export default App;
