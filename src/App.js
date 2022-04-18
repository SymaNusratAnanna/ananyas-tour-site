
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import Login from './Login/Login/Login';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Register from './Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import RequiredAuth from './Login/RequiredAuth/RequiredAuth';
import Video from './Pages/Video/Video';


function App() {
  return (
    <div >
      <Header></Header>
      {/* route set */}
      <Routes>
        <Route path= "/" element={<Home></Home>}> </Route>
        <Route path="/home" element={<Home></Home>}> </Route>

        <Route path= "/about" element={<About></About>}> </Route>
        <Route path= "/services" element={<Services></Services>}> </Route>
        <Route path= "/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        {/* protected route set */}
        <Route path="/checkout" element={<RequiredAuth><Checkout></Checkout></RequiredAuth>}></Route>
        <Route path="/video" element={<Video></Video>}></Route>
      
        <Route path= "*" element={<Notfound></Notfound>}  ></Route>

        
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
