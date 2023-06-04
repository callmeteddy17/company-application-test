import { BrowserRouter } from 'react-router-dom';
import {
  Security,
  About,
  Systems,
  Hero,
  Navbar,
  Tech,
  Footer,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-first bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <Systems />
          <Security />
        </div>
        <div className="bg-seccond bg-cover bg-no-repeat bg-center">
          <About />
          <div className="hero-options border-t border-b border-t-white border-b-white">
            <Tech />
          </div>
          <div className="bg-[#bf2eb0]">
            <Footer />
            <div className="bg-[#6e107e] w-full h-20 "></div>
            <div className="w-full h-20 "></div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
