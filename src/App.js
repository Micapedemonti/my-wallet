import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import UserRegister from './components/UserRegister.js';
import Home  from './components/Home';
import Login from './pages/Login';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
    
     <BrowserRouter>
      <Routes>
      <Route path = "/" element = {<ProtectedRoute>
        <Home/>
        </ProtectedRoute>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/registro" element = {<UserRegister/>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
