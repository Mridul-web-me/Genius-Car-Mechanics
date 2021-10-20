import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../../images/404.jpg'
import "./NotFound.css"

const NotFound = () => {

    return (
        <div className="404Banner">
            <img src={banner} alt="" />
            <Link to="/">
            <button>Go Back</button>
            </Link>
        </div>
    )
}

export default NotFound
