import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import './App.css'
import Value from './components/Value/Value';
import Companies from './components/companies/companies';

import Contact from './components/contact/contact';

import Residencies from "./components/Residencies/Residencies"

import GetStarted from "./components/GetStarted/GetStarted"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient'/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
