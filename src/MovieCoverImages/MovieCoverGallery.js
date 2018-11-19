import React from 'react';
import BM from '../Images/blackmirror.jpg'
import BB from '../Images/breakingbad.jpg'
import DN from '../Images/deathnote2.jpg'
import GT from '../Images/got.jpg'
import TWD from '../Images/thewalkingdead.jpg'
import TW from '../Images/thewire.jpg'
import {Link} from  'react-router-dom'


export default function MovieCoverGallery() {
    return (
        <div>
            <div className="container">
                <div className="item">
                <Link to = '/Details' >
                    <img src={TW} alt="The Wire" />
                    <div className="overlay">The Wire</div>
                </Link>
                </div>
                <div className="item">
                <Link to = './Details'>
                    <img src={GT} alt="Game Of Thrones" />
                    <div className="overlay">Game Of Thrones</div>
                </Link>
                </div>
                <div className="item">
                <Link to = './Details'>
                    <img src={TWD} alt="The Walking Dead" />
                    <div className="overlay">The Walking Dead</div>
                </Link>
                </div>
                <div className="item">
                <Link to = './Details'>
                    <img src={BM} alt="Black Mirror" />
                    <div className="overlay">Black Mirror</div>
                </Link>
                </div>
                <div className="item">
                <Link to = './Details'>
                    <img src={BB} alt="Breaking Bad" />
                    <div className="overlay">Breaking Bad</div>
                </Link>
                </div>
                <div className="item">
                <Link to = './Details'>
                    <img src={DN} alt="Death Note" />
                    <div className="overlay">Death Note</div>
                </Link>
                </div>
            </div>
        </div>
    )
}