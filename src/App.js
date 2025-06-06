import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';
// import useFetch from './useFetch';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      <ToastContainer />        
 <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path= "/BlogDetails">
            <BlogDetails/>
            </Route>

        
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
