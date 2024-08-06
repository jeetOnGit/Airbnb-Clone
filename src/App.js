import "./App.css";
import Navbar from "./components/Navbar";
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
      </Router>
    </div>
  );
}

export default App;
