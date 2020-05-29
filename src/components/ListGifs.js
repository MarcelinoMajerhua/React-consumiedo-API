import React,{useState,useEffect} from 'react'
import Gif from './Gif'
import getGifs from '../service/getGif'

export default function ListGifs({params}){
    const {keyword}=params
    const [gifs, setGifs] = useState([])

    useEffect(function () {//esta funcion se ejecuta cuando se renderiza 
    getGifs({keyword}).then(gifs=> setGifs(gifs))
  
    },[keyword])//keyword es ua dependencia si no cambia no se va renderizar 
    return <div>
        {
            gifs.map(({id,title,url})=>
            <Gif
                id={id}
                key={id}
                title={title}
                url={url}e
            />
            )
        }
    </div>

}
