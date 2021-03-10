import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/home">
        <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/team/:teamId">
          <TeamDetails/>
        </Route>
        <Route path="*">
        <NotFound/>    
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
