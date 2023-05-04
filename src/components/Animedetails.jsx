import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Animedetails = () => {
    let [anime, setAnime] = useState(null);
    let [pending, setPending] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://api.jikan.moe/v4/anime/" + mal_id)
                .then((response) => {
                    if (response.ok === true) {
                        return response.json();
                    }
                    else {
                        throw Error("data not found");
                    }
                })

                .then((d) => { setAnime(d.data); setPending(false) })
                .catch((err) => { setError(err.message); setPending(false) })

        }, 1000)
    }, [])

    let { mal_id } = useParams()

    return (
        <div className='anime-detail'>
            {error && <h1 className='error'>{error}</h1>}
            {pending && <div className="loader-div">
                <div className="loader">
                    <div className="loader-msg"></div>
                    <h3>Loading</h3>
                </div>
            </div>}
            {anime && <div className='anime-full-details'>
                <div className='anime-poster'>
                    <img src={anime.images.jpg.image_url} alt="anime-poster"/>
                </div>
                <div className='anime-content'>
                    <h4>Show: <span>{anime.title}</span></h4>
                    <h4>Source: <span>{anime.source}</span></h4>
                    <h4>Total episodes: <span>{anime.episodes}</span></h4>
                    <h4>Duration: <span>{anime.duration}</span></h4>
                    <p>{anime.synopsis}</p>
                </div>
            </div>}
        </div>
    )
}

export default Animedetails