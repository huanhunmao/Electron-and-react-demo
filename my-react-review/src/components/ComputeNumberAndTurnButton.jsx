import React,{ useState } from "react";

const ComputeNumberAndTurnButton = () => {
    const [number, setNumber] = useState(0);
    const [turn,setTurn] = useState(true)

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