const apiKey = '2H9Eec9iC7AV95sO3quYtOnQI22Rgu8I'

export default function getGifs ({keyword='playa'}={}){//comparamos si el parametro pasado es vacio si es verdad buscamos por defecto
    const apiURL =`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=G&lang=es`

    return fetch(apiURL) //haciendo peticion a la api 
      .then(res=>res.json())//comvertimos la respuesta en formto json
      .then(response =>{ //recorremos el json
        const {data=[]}=response
        if (Array.isArray(data)) {
          const gifs = data.map(image=>{
              const {images,title,id} = image
              const {url} = images.downsized_medium
              return {title,id,url}
          })
          return gifs
          
        }
        
      })
}