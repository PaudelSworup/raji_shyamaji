
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
   <>
   <Router>
     <Header/>
     <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/about" element={<About/>} />
     </Routes>
     <Footer />
   </Router>
  

   </>
  );
}

export default App;
