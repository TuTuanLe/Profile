import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Services from './components/Services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Navbar from './components/navbar';
import Card from './components/card';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Services />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
