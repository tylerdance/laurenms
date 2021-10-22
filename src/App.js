import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import Nav from './components/Nav';
// import Contact from './components/Contact';
import Home from './components/Home';
import rootrot from './components/rootrot';
import SelfPres from './components/SelfPres';
import SoundsLike from './components/SoundsLike';
import RubberCityHall from './components/RubberCityHall';
import Misc from './components/Misc';
import RubberAndFriends from './components/RubberAndFriends';
import RubberWCL from './components/RubberWCL';
import Fam from './components/Fam';
// import Footer from './components/Footer';
// import FallingCredits from './components/FallingCredits';
// import Embed from 'react-music-embed'

function App() {
  return (
    <div className="App">
      {/* <h5 id="header"></h5> */}
      <BrowserRouter>
        {/* <Nav /> */}
        <Route exact path='/' component={ Home } />
        {/* <Route exact path='/contact' component={ Contact } /> */}
        <Route exact path='/rootrot' component={ rootrot } />
        <Route exact path='/selfpres' component={ SelfPres } />
        <Route exact path='/soundslike' component={ SoundsLike } />
        <Route exact path='/rubbercityhall' component={ RubberCityHall } />
        <Route exact path='/misc' component={ Misc } />
        <Route exact path='/RubberAndFriends' component={ RubberAndFriends } />
        <Route exact path='/RubberWCL' component={ RubberWCL } />
        <Route exact path='/Fam' component={ Fam } />

      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
