import React,{ useState,useEffect } from "react";

const ComputeNumberAndTurnButton = () => {
    const [number, setNumber] = useState(0);
    const [turn,setTurn] = useState(true)

    useEffect(() => {
        document.title = `当前数量是${number}`
    })

    const addNumber = () =>{
        setNumber(number + 1)
    }

    const setTurnEvent = () => {
        setTurn(!turn)
    }

    return (
        <>
        <button onClick={addNumber}>
            {number} 
        </button>
        <button onClick={setTurnEvent}>
            {turn ? 'on' : 'off'}
        </button>
        </>
    )
}

export default ComputeNumberAndTurnButton