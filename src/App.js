import './App.scss';
import Landing from './components/landing/Landing'
import wave from './images/wavething.png'

function App() {
  return (
    <div className="App">
      <div className='background'>
        <img src={wave}></img>
      </div>
      <Landing></Landing>
    </div>
  );
}

export default App;
