
import './App.css';
import './Stylesheet.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nav from './components/Nav';
import Banner from './components/Banner';
import PromoBanner from './components/PromoBanner';
import PromoImageBanner from './components/PromoImageBanner';

function App() {
  return (
    
    <div>
      <Banner/>
      <Nav/>
      <PromoBanner/>
      <PromoImageBanner/>
      <Home/>
      <Footer/>

    </div>
    
  
  );
}

export default App;
