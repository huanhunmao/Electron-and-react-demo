import React,{useState,useEffect,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit,faTrash,faTimes} from '@fortawesome/free-solid-svg-icons'
import {faMarkdown} from '@fortawesome/free-brands-svg-icons'
import PropTypes from 'prop-types';

const FileList = ({files,onFileClick,onFileDelete,onSaveEdit}) => {
    const [editStatus,setEditStatus] = useState(null)
    const [value, setValue] = useState(null)

    const closeSearch = (e) =>{
        e.preventDefault();
        setEditStatus(null)
        setValue('')
    }

    useEffect(() => {
        const handleInputEvent = (event) =>{
            const {keyCode} = event
            if(keyCode === 13 && editStatus){// enter
                const editItem = files.find(file => file.id === editStatus)
                onSaveEdit(editItem.id, value )
            }else if(keyCode === 27 && editStatus){// esc
                closeSearch(event)
            }
        }

        document.addEventListener('keyup', handleInputEvent)

        return () => {
            document.removeEventListener('keyup', handleInputEvent)
        }
    })

    return (
        <ul className="list-group list-group-flush">
            {
                files.map(file=>
                    <li key={file.id} className="list-group-item bg-light d-flex alert-items-center row">
                        {
                        file.id !== editStatus ? ( 
                            <>
                    <span className='col-2'>
                            <FontAwesomeIcon title='markdown'  icon={faMarkdown} size='lg' />
                            </span>
                            <span className='col-7' onClick={() => onFileClick(file.id)}>{file.title}</span>
                            <button className='icon-button col-1'>
                    <FontAwesomeIcon title='编辑' icon={faEdit} size='lg' className=''  onClick={() => {setEditStatus(file.id); setValue(file.title)}}/>
                    </button>
                    <button className='icon-button col-1'>
                    <FontAwesomeIcon title='删除' icon={faTrash} size='lg' className=''  onClick={() => onFileDelete(file.id)}/>
                    </button>
                            </>
                        ) : <>
                        <div className='d-flex justify-content-between align-items-center row'>
                <input className='col-8'  value={value}  onChange={(e) => setValue(e.target.value)}/>
                <button className='icon-button col-4'  onClick={closeSearch}>
                <FontAwesomeIcon title='关闭' icon={faTimes} size='lg' className='' />
                </button>
            </div>
                        </>
                    }
                    </li>
                )
            }
</ul>
    )
}

FileList.prototype = {
    files:PropTypes.array
}

export default FileList