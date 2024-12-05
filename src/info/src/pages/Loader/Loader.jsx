import React from 'react'
import "./Loader.css";

const Loader = () => {
    return (
        <div className='load'>
            <img src="/assets/pngs/techietribe_logo.png" alt="LogoImg" width="50px" height="50px" loading='lazy' />
            <div className="loader"></div>
        </div>
    )
}

export default Loader;