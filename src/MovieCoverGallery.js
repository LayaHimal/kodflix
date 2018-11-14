import React from 'react';
import BM from './blackmirror.jpg'
import BB from './breakingbad.jpg'
import DN from './deathnote2.jpg'
import GT from './got.jpg'
import TWD from './thewalkingdead.jpg'
import TW from './thewire.jpg'

export default function MovieCoverGallery() {
    return (
        <div>
            <div className="container">
                <div className="item">
                    <img src={TW} alt="The Wire" />
                    <div className="overlay">The Wire</div>
                </div>
                <div className="item">
                    <img src={GT} alt="Game Of Thrones" />
                    <div className="overlay">Game Of Thrones</div>
                </div>
                <div className="item">
                    <img src={TWD} alt="The Walking Dead" />
                    <div className="overlay">The Walking Dead</div>
                </div>
                <div className="item">
                    <img src={BM} alt="Black Mirror" />
                    <div className="overlay">Black Mirror</div>
                </div>
                <div className="item">
                    <img src={BB} alt="Breaking Bad" />
                    <div className="overlay">Breaking Bad</div>
                </div>
                <div className="item">
                    <img src={DN} alt="Death Note" />
                    <div className="overlay">Death Note</div>
                </div>
            </div>
        </div>
    )
}