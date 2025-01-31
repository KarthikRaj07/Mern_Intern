import React from 'react'

import myphoto from './myphoto.jpg'
export const Home = () => {
  return (
    <div className="container">
        <div className="name">
          <h1 className='myname'>Karthik Raj K</h1>  
            <p className='role'>Fullsack developer</p>
        </div>
              <div className="image">
                <img src={myphoto} className="img1" alt="Profile" /></div>
     </div>
  )
}
