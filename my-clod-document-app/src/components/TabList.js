import React,{useState,useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const TabList = ({files,activeId,unsavedIds,onTabClick,onCloseTab}) => {
    return (
        <ul className='nav nav-pills'>
            {
                files.map((file) =>{
                    const fClassNames = classNames({
                        'nav-link': true,
                        'active': file.id === activeId,
                    })
                    return (
                        <li className='nav-item' key={file.id}>
                            <a 
                            href='#'
                            className={fClassNames}
                            onClick={(e) => {
                                e.preventDefault()
                                onTabClick(file.id)
                            }}
                            >
                            {file.title}
                            <span className='ml-2'>
                            <FontAwesomeIcon  icon={faTimes} size='lg' />
                            </span>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

TabList.propTypes = {
    files:PropTypes.array,
    activeId:PropTypes.string,
    unsavedIds:PropTypes.array,
    onTabClick:PropTypes.func,
    onCloseTab:PropTypes.func
}

TabList.defaultProps = {
    unsavedIds: []
}

export default TabList