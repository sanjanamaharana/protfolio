import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css' 
import NavBar from './components/NavBar'
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <NavBar /> 
      <Banner />  
      <Skills />
      <Projects /> 
      <Contact/>  
    </>
  )
}

export default App
