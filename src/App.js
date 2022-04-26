import BannerSection from './components/partials/BannerSection';
import DemoView from './components/partials/DemoView';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import Preloader from './components/partials/Preloader';
import ScrollToTop from './components/partials/ScrollToTop';

function App() {
  return (
    <div>
      <Preloader/>
      <DemoView/>
      <Header/>
      <BannerSection/>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
