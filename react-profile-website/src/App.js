import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import HeaderSocials from './components/header/HeaderSocials';
import { Hero } from './components/hero';
import Nav from './components/nav/Nav';
import Navbar from './components/navbar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        {/* <Header /> */}
        <HeaderSocials />
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
