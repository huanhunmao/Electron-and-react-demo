import React,{useState,useEffect} from 'react'

const MouseTracker = () => {
    const [positions,setPositions] = useState({x:0,y:0})
    useEffect(() =>{
        const updateEvent = (e) => {
            console.log('add')
            setPositions({x:e.clientX, y:e.clientY})
        }
        document.addEventListener('mousemove',updateEvent)

    return () => {
        console.log('remove')
        document.removeEventListener('mousemove',updateEvent)
    }
}
    )

    return <p>x:{positions.x} ,y:{positions.y}</p>
}


export default MouseTracker
