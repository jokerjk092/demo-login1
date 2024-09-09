import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/demo-login1' element={<Login />} />
    <Route path='/demo-login1/signup' element={<Signup />} />
    </Routes>
    </div>
  );
}

export default App;
