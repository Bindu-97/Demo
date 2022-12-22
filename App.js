import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Productdetails from './components/Productdetails';
import Cart from './components/Cart';
import Admin from './components/Admin';
import Update from './components/Update';
import AddProducts from './components/AddProducts';


function App() {
  return (
      <Router>
        <div className="App">
        <Switch>
                <Route exact path="/"> <Login/>           </Route>    
                <Route path="/user">   <Home/>            </Route> 
                <Route path="/addnewproduct">  <AddProducts/>     </Route>   
                <Route path="/cart">   <Cart/>            </Route>
                <Route path="/productDetails:id">  <Productdetails/> </Route>
                <Route path="/admin">   <Admin/>            </Route>
                <Route path="/updateproduct:id">   <Update/>            </Route>

                
        </Switch>
        </div>
      </Router>
  );
}

export default App;