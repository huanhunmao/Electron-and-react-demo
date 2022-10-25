import React,{ useState,useEffect } from 'react'
import axios from 'axios'

const ShowDogImage = () => {
    const [url,setUrl] =  useState('')
    const [loading, setLoading] = useState(false)
    const [fetch, setFetch] =  useState(false)
    const style = {
        width: 200
    }

    const handleChangeImage = () => {
        setFetch(!fetch)
    }
    
    useEffect(() => {
        setLoading(true)
        axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
            console.log('res',res)
            setUrl(res.data.message)
            setLoading(false)
        })
},[fetch])

    return (
        <>
        {loading ? <p>正在加载...</p> : <img src={url} alt='dog'  style={style}/>}
        <button onClick={handleChangeImage}>更换图片</button>
        </>
    )
}

export default ShowDogImage
