import React from 'react'
import { Link } from 'react-router-dom'

const Animelist = ({ anime }) => {
  return (
    <>

      <div className='anime-list'>

        {
          anime.map((data) => {
            return (
              <div className='anime'>

                <Link to={`/animedetails${data.mal_id}`}>
                  <div className='img'>
                    <img src={data.images.jpg.image_url} alt="anime-pic" />
                  </div>
                  <div className='anime-title'>
                    <h4>{data.title}</h4>
                    <h4>{data.year}</h4>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Animelist