import React, { useEffect } from 'react'
import "./Loader.css";

const Loader = () => {
    return (
        <div className='load'
        >
            <div className="loader">
                <img src="/assets/pngs/techietribe_logo.png" alt="LogoImg" width="50px" height="50px" loading='lazy' style={{
                    margin: "0px 5px 0px 0px"
                }} />
            </div>
        </div>
    )
}

export default Loader;