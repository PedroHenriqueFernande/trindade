import Hero from './components/Hero';
import Identification from './components/Identification';
import Promise from './components/Promise';
import Product from './components/Product';
import Testimonials from './components/Testimonials';
import ValueStack from './components/ValueStack';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Hero />
      <Identification />
      <Promise />
      <Product />
      <Testimonials />
      <ValueStack />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
