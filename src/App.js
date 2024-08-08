import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AirbnbYourRoom from "./pages/AirbnbYourRoom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/airbnbYourRoom' element={<AirbnbYourRoom />}/>
        </Routes>
      <Footer />  
      </Router>
    </div>
  );
}

export default App;
