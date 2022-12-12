import React,{useState,useEffect,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faTimes} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import useKeyPress from '../hooks/useKeyPress';

const FileSearch = ({title, onFileSearch}) => {
    const [value, setValue] = useState('')
    const [isActive,setIsActive] = useState(false)

    const enterPressed = useKeyPress(13)
    const escPressed = useKeyPress(27)

    const node = useRef(null)

    const closeSearch = () =>{
        setIsActive(false)
        setValue('')
    }
    useEffect(() => {
        if(enterPressed && isActive){
            onFileSearch(value)
        }
        if(escPressed && isActive){
            closeSearch()
        }
    })

    useEffect(() => {
        if(isActive){
            node.current.focus()
        }
    },[isActive])

    return (
        <div  className='alert alert-primary'>
            {isActive ? <div className='d-flex justify-content-between align-items-center row'>
                <input className='col-8'  value={value}  onChange={(e) => setValue(e.target.value)} ref={node}/>
                <button className='icon-button col-4'  onClick={closeSearch}>
                <FontAwesomeIcon title='关闭' icon={faTimes} size='lg' className='' />
                </button>
            </div> : <div className='d-flex justify-content-between align-items-center'>
                <span>{title}</span>
                <button className='icon-button'>
                <FontAwesomeIcon title='搜索' icon={faSearch} size='lg' className=''  onClick={() => setIsActive(true)}/>
                </button>
            </div>}
        </div>
    )
}

FileSearch.propTypes = {
    title:PropTypes.string,
    onFileSearch:PropTypes.func
}

FileSearch.defaultProps = {
    title:'占位文字'
}

export default FileSearch