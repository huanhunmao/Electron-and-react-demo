import React,{useState,useEffect,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const BottomBtn = ({text,colorClass,icon,onBtnClick}) => {
    return (
        <button type='button' className={`btn btn-block no-border ${colorClass}`}>
        <FontAwesomeIcon
        size='lg'
        icon={icon}
        />
        {text}
    </button>
    )
}

BottomBtn.propTypes = {
    text:PropTypes.string,
    colorClass:PropTypes.string,
    icon:PropTypes.object.isRequired,
    onBtnClick:PropTypes.func
}

BottomBtn.defaultProps = {
    text:'新建'
}

export default BottomBtn