import { BrowserRouter as Router } from 'react-router-dom';
import Services from './components/Services/Services';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import { Hero } from './components/hero';
import Nav from './components/nav/Nav';
import Navbar from './components/navbar';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        {/* <Header /> */}
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
