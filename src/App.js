// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Languages from './components/Tech';
import Footer from './components/Footer';
import Form from './components/Form';
import Typewriter from "typewriter-effect";


function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Skills />
      <Languages/>
      <Form/>
      <Footer/>
      <div className="App">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Aravinds Shajan")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Welcomes You")
       .start();
       }}
       />
    </div>
      
    </div>
  );
}

export default App;
