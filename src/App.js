import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import About from '../src/pages/About/About';
import Service from '../src/pages/Services/Service'
import Blog from '../src/pages/Blog/Blog';
import Login from '../src/pages/Login/Login';
import Signup from '../src/pages/Signup/Signup';
import ForgetPassword from './pages/Login/ForgetPassword';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forget' element={<ForgetPassword/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
