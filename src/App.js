import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import FirstPage from "./pages/FirstPage";
import Footer from "./components/Footer/Footer";
import './App.scss';

function App() {
  return (
    <div className="App">
     <Navbar/>
    <FirstPage/>
    <Footer/>
    </div>
  );
}

export default App;
