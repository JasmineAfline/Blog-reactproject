import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import axios from 'axios';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <ToastContainer/>

        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

          
            <Route path="/create">
              <Create/>
            </Route>

            {/* <Route path="/Blog/details/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route> */}
          
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;