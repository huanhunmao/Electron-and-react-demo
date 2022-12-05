import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import ComputeNumberAndTurnButton from './components/ComputeNumberAndTurnButton';
import MouseTracker from './components/MouseTracker';
import ShowDogImage from './components/ShowDogImage';
import useMouseTracker from './hooks/useMouseTracker';
import useUrlLoader from './hooks/useUrlLoader';


const style = {
    width : 200
}
const DogShowWithHook = () => {
    const [data, loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random')
    return(
        <>
        {loading ? <p>🐶</p> : 
        <img src={data && data.message} alt='dog' style={style}/>
        }
        </>
    )
}

const CatShowWithHook = () => {
    const [changeButton, setChangeButton] = useState(null)
    const [data, loading] = useUrlLoader(`https://dog.ceo/api/breeds/image/random/${changeButton}`)
    return(
        <>
        {loading ? <p>🐱</p> : 
        <img src={data && data.message}  alt='dog' style={style}/>        }

        <button onClick={() => setChangeButton()}>change url</button>
        </>
    )
    
}
function App() {
    const positions = useMouseTracker()
  return (
    <div className="App">
      <header className="App-header">
        <p>{positions.x}</p>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComputeNumberAndTurnButton/>
        <MouseTracker/> */}
        {/* <ShowDogImage/> */}
        {/* <DogShowWithHook/> */}
        <CatShowWithHook/>
      </header>
    </div>
  );
}

export default App;
