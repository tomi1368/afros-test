import React,{useState} from 'react'
import axios from 'axios'
import key from '../../../apiKey'
import "./Exercise8.css"
const Exercise8 = () => {
    const [images,setImages] = useState([])
    const [count,setCount] = useState(0)
    const imagesRequest = async (num)=>{
        try{
            if(num > 15) throw new Error("no pueden ser mas de 15 fotos")
            const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${key}&count=${num}`)
            setImages(response.data)
        }catch(err){
            console.log(err.message)
        }
    }
  return (
    <>
    <div className='count'>
        <input className='count-input' type="number" value={count} onChange={(e)=>setCount(e.target.value)} />
        <button className='count-btn' onClick={()=> imagesRequest(count) }>Buscar imagenes</button>
    </div>
    <div className='images-wrapper'>
        {images.map(image=>{
            return(
                <div className='images'>
                    <img src={image.urls.raw} alt="" />
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Exercise8