import React from 'react';
import {Link} from 'react-router-dom';

const Details = () => {
    return (
        <div>
            <h2 className = "header"> This is the details page</h2>
            <Link to = '/' className = "button"> Back to Home Page </Link>
        </div>
    )
}

export default Details;