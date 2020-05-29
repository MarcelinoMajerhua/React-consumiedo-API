import React from 'react'

export default function Gif({title,id,url}){

    return (

        <div key={id} > 
            <div>{title}</div> 
            <img src={url}/>
        </div>
    )

}