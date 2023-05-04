
import React from 'react'
import { useState, useEffect } from 'react'
import Animelist from './Animelist'

const Home = () => {

  let[anime, setAnime] = useState(null);
  let[pending, setPending] = useState(true);
  let[error, setError] = useState(null);

  useEffect(()=>{
    setTimeout( ()=> {
      fetch("https://api.jikan.moe/v4/anime")
      .then( (response)=> {
        if(response.ok===true){
          return response.json();
        }
        else {
          throw Error("data not found");
        }
      })

      .then( (d)=> { setAnime(d.data); setPending(false)})
      .catch( (err)=> {setError(err.message); setPending(false)}) 

    }, 1000)
  },[])

  return (
    <div className='home'>
    {error && <h1 className='error'>{error}</h1>}
    { pending && <div className="loader-div">
                <div className="loader">
                    <div className="loader-msg"></div>
                    <h3>Loading</h3>
                </div>
            </div>}
            <div className='anime-style'>
            { anime && <Animelist anime={anime}/>}
            </div>
    </div>
  )
}

export default Home