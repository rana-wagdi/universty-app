import Header from './components/Header/Header';

import './App.scss';
import Intro from './components/Home/Intro/Intro';
import Research from './components/Home/Research/Research';
import Facilities from './components/Home/Facilities/Facilites';
function App() {
  return (
    <div className="App">
      <Header />  
      <Intro />
      <Research />
      <Facilities />
    </div>
  );
}

export default App;
