import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Video from '../src/components/Video';
import AboutUs from './components/AboutUs';
import Mission from './components/Mission';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Products from './components/Products';
import CheckOut from './components/Checkout';
import Success from './components/Success';
import Cancel from './components/Cancel';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
