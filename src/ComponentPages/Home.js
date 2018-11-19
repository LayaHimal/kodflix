import React from 'react';
import MovieCoverGallery from '../MovieCoverImages/MovieCoverGallery';
import KodflixImage from './Kodflix.png';

const Home = () => {
    return (
        <div>
            <img src={KodflixImage} alt=""/>
            <MovieCoverGallery/>           
        </div>
    )
}

export default Home;