import logo from './logo.svg';
import './App.css';
import ComputeNumberAndTurnButton from './components/ComputeNumberAndTurnButton';
import MouseTracker from './components/MouseTracker';
import ShowDogImage from './components/ShowDogImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComputeNumberAndTurnButton/>
        <MouseTracker/> */}
        <ShowDogImage/>
      </header>
    </div>
  );
}

export default App;
