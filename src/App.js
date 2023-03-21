// import logo from './logo.svg';
import './App.css';
// import NavBar from './Components/NavBar';
import Home from './Screens/Home';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import { CartProvider } from './Components/ContexReducer';

function App() {
  return (
    <CartProvider>
    <Router>
     <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/createuser' element={<SignUp/>}/>
      </Routes>

    {/* <div className='fs-1'>Hello world</div> */}
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
