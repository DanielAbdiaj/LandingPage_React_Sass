
import './scss/App.scss';

import Hero from './components/hero/hero'
import Services from './components/services/services'
import Achievements from './components/achievements/achievements';
import Works from './components/works/works';
import Companies from './components/companies/companies';
import Testimonials from './components/testimonials/testimonials';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Hero/>
      </header>
      <body className='App-body'>
          <Services/>
          <Achievements/>
          <Works/>
          <Testimonials/>
      </body>
      <footer className='App-footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
