import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import defaultFiles from './utils/defaultFiles';

function App() {
  return (
    <div className="App container-fluid">
        <div className="row">
        <div className='col-3 bg-light  left-panel'>
            <FileSearch title="我的云文档" onFileSearch={(value) => {console.log(value)}}/>
            <FileList files={defaultFiles} 
            onFileClick={() =>{}} 
            onFileDelete={() => {}} 
            onSaveEdit= {(id,newValue) => {console.log('id',id);console.log('newValue',newValue)} }
            />
            </div>
        <h1 className="col-9 bg-primary right-panel">right content</h1>
        </div>
    </div>
  );
}

export default App;
