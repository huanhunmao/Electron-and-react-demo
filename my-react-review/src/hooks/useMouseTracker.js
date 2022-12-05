import React,{useState,useEffect} from 'react'

const useMouseTracker = () => {
    const [positions,setPositions] = useState({x:0,y:0})
    useEffect(() =>{
        const updateEvent = (e) => {
            setPositions({x:e.clientX, y:e.clientY})
        }
        document.addEventListener('mousemove',updateEvent)

    return () => {
        document.removeEventListener('mousemove',updateEvent)
    }})
        return positions
}

export default useMouseTracker