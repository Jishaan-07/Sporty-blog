import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <>
    <div style={{height:'100vh'}} className="d-flex justify content center align-items-center flex-column">
        <h1 style={{fontSize:'80px'}} className='fw-bolder text-yellow-400'>404*</h1>
        <img className='img-fluid' src="https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=6c09b9527guhxqr9x3c0vm4rk6pn3amgdnobng43za0nie3r&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
        <h1>Look Like You're Lost</h1>
        <p>The page you're looking for is not available</p>
        <Link to={'/'} className='btn btn-warning'>Go to home</Link>
        </div>
        </>
  )
}

export default Pnf