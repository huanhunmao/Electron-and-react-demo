import logo from './logo.svg';
import './App.css';
import ComputeNumberAndTurnButton from './components/ComputeNumberAndTurnButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComputeNumberAndTurnButton/>
      </header>
    </div>
  );
}

export default App;
