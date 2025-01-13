import React, { useEffect } from 'react'
import "./Loader.css";

const Loader = () => {
    return (
        <div className='load'
        >
            <div className="loader">
                <img src="/assets/pngs/techietribe_logo.webp" alt="LogoImg" width="60px" height="60px" loading='lazy' />
            </div>
        </div>
    )
}

export default Loader;