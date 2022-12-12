import React,{useState,useEffect,useRef} from 'react';

const useKeyPress = (targetKeyCode) => {
    const [keyPressed, setKeyPressed] = useState(false)

    const keyPressDownHandler = ({keyCode}) => {
        if(keyCode === targetKeyCode) {
            setKeyPressed(true)
        }
    }

    const keyPressUpHandler = ({keyCode}) => {
        if(keyCode === targetKeyCode) {
            setKeyPressed(false)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPressDownHandler)
       document.addEventListener('keyup', keyPressUpHandler)

       return () => {
        document.removeEventListener('keydown', keyPressDownHandler)
        document.removeEventListener('keyup', keyPressUpHandler)
       }
    },[])

    return keyPressed
}   

export default useKeyPress