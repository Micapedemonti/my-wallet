import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import UserRegister from './components/UserRegister.js';
import { Home } from './components/Home';
import Login from './pages/Login';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
    
     <BrowserRouter>
      <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/registro" element = {<UserRegister/>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
