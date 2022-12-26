import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {faPlus,faFileImport} from '@fortawesome/free-solid-svg-icons'
import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import defaultFiles from './utils/defaultFiles';
import BottomBtn from './components/BottomBtn';
import TabList from './components/TabList';

function App() {
  return (
    <div className="App container-fluid px-0">
        <div className="row ">
        <div className='col-3 bg-light  left-panel no-gutters'>
            <FileSearch title="我的云文档" onFileSearch={(value) => {console.log(value)}}/>
            <FileList files={defaultFiles} 
            onFileClick={() =>{}} 
            onFileDelete={() => {}} 
            onSaveEdit= {(id,newValue) => {console.log('id',id);console.log('newValue',newValue)} }
            />
            <div className='row no-gutters'>
                <div className='col'>
                <BottomBtn 
                text='新增'
                colorClass='btn-primary'
                icon={faPlus}
                />
                </div>
                <div className='col'>
                <BottomBtn 
                text='导入'
                colorClass='btn-success'
                icon={faFileImport}
                />
                </div>
            </div>
            </div>
        <div className="col-9 right-panel">
            <TabList
            files={defaultFiles}
            onTabClick={(id) => console.log('id',id)}
            onCloseTab={(id) => console.log('closing',id)}
            unsavedIds={['1']}
            activeId='1'
            />
        </div>
        </div>
    </div>
  );
}

export default App;
