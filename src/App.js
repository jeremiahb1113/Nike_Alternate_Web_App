
import './App.css';
import './Stylesheet.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nav from './components/Nav';
import Banner from './components/Banner';
import PromoBanner from './components/PromoBanner';
import PromoImageBanner from './components/PromoImageBanner';
import Trending from './components/Trending';
import Featured from './components/Featured';
import Iconics from './components/Iconics';
import ShopBySport from './components/ShopBySport';
import Popular from './components/Popular';
import Membership from './components/Membership';
import SecondaryFooter from './components/SecondaryFooter';
function App() {
  return (
    
    <div>
      <Banner/>
      <Nav/>
      <PromoBanner/>
      <PromoImageBanner/>
      <Home/>
      <Trending/>
      <Featured/>
      <Iconics/>
      <ShopBySport/>
      <Popular/>
      <Membership/>
      <SecondaryFooter/>
      <Footer/>

    </div>
    
  
  );
}

export default App;
