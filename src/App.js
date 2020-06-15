import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import FirstPage from "./pages/FirstPage";
import Shop from "./pages/Shop";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
    <Route exact path="/" component={FirstPage}/>
    <Route exact path="/shop" component={Shop}/>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
