import { useState } from "react";
import { dataPlaces } from "./dataPlaces";

function Places() {
    const [placeBox, setPlaceBox] = useState(0);
    const [showText, setShowText] = useState(false);
    const {id, place, image, description, showMore} = dataPlaces[placeBox];

    const prevPlace = () => {
        setPlaceBox(placeBox => {
            placeBox--;
            if(placeBox < 0) {
                return dataPlaces.length - 1
            }
            return placeBox
        })
    }
    const nextPlace = () => {
        setPlaceBox(placeBox => {
            placeBox++;
            if(placeBox > dataPlaces.length - 1) {
                placeBox = 0
            }
            return placeBox
        })
    }

    const showTextClick = () => {
        dataPlaces[placeBox].showMore = !dataPlaces[placeBox].showMore
        setShowText(!showText)
    }



    return(
        <div>

            <div className="container">
              <h1>Top {dataPlaces.length} Places I must visit</h1>
            </div>
            
            <div className="container">
                <h2>{id} - {place}</h2>
            </div>
            <div className="container">
                <img src={image} width='500px' height='500px' alt="place" />
            </div>
            <div className="container p-box">
              <p>
                {showMore ? description : description.substring(0,100) + '...'}
                <button className="btn-show" onClick={() => showTextClick()}>{showMore ? 'Show Less' : 'Show More'}</button>
              </p>
            </div>
            <div className="container">
                <button className="btn" onClick={prevPlace}>Prev</button>
                <button className="btn" onClick={nextPlace}>Next</button>
            </div>
            
        </div>
    )
}

export default Places;