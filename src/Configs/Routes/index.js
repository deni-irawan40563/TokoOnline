import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//import Components
import Home from '../../Components/Pages/HomeScreen/Home';
import Login from '../../Components/Pages/Login/Login';
import Register from '../../Components/Pages/Register/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
