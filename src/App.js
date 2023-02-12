import Header from './components/Header/Header';

import './App.scss';
import Intro from './components/Home/Intro';
import Research from './components/Home/Research';

function App() {
  return (
    <div className="App">
      <Header />  
      <Intro />
      <Research />
    </div>
  );
}

export default App;
