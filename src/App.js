import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import MainVideo from './components/MainVideo';
// import Falling from './components/Falling';
// import Nav from './components/Nav';
// import Contact from './components/Contact';
import Home from './components/Home';
import rootrot from './components/rootrot';
import SelfPres from './components/SelfPres';
// import Footer from './components/Footer';
// import FallingCredits from './components/FallingCredits';
// import Embed from 'react-music-embed'

function App() {
  return (
    <div className="App">
      {/* <h5 id="header">Sugiwon</h5> */}
      <BrowserRouter>
        {/* <Nav /> */}
        <Route exact path='/' component={ Home } />
        {/* <Route exact path='/contact' component={ Contact } /> */}
        <Route exact path='/rootrot' component={ rootrot } />
        <Route exact path='/selfpres' component={ SelfPres } />
        {/* <Route exact path='/fallingcredits' component={ FallingCredits } /> */}


      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
