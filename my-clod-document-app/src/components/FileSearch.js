import React,{useState,useEffect,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const FileSearch = ({title, onFileSearch}) => {
    const [value, setValue] = useState('')
    const [isActive,setIsActive] = useState(false)

    const node = useRef(null)

    const closeSearch = (e) =>{
        e.preventDefault();
        setIsActive(false)
        setValue('')
    }
    useEffect(() => {
        const handleInputEvent = (event) =>{
            const {keyCode} = event
            if(keyCode === 13 && isActive){// enter
                onFileSearch(value)
            }else if(keyCode === 27 && isActive){// esc
                closeSearch(event)
            }
        }

        document.addEventListener('keyup', handleInputEvent)

        return () => {
            document.removeEventListener('keyup', handleInputEvent)
        }
    })

    useEffect(() => {
        if(isActive){
            node.current.focus()
        }
    },[isActive])

    return (
        <div className='alert alert-primary'>
            {isActive ? <div className='row'>
                <input className='col-8' value={value}  onChange={(e) => setValue(e.target.value)} ref={node}/>
                <button  className='col-4 btn btn-primary' type="button" onClick={closeSearch} >关闭</button>
            </div> : <div className='d-flex justify-content-between align-items-center'>
                <span>{title}</span>
                <FontAwesomeIcon icon={faSearch} size='lg' className='icon-button'  onClick={() => setIsActive(true)}/>
            </div>}
        </div>
    )
}

export default FileSearch