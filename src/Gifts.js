import { useState } from "react";
import { dataGifts } from "./dataGifts";

function Gifts() {
    const [giftsList, setGiftsList] = useState(dataGifts);

    const removeItem = (id) => {
        let newgiftsList = giftsList.filter((gift => gift.id !== id))
        setGiftsList(newgiftsList)
    }

    return(
        <div>
            <div className="container">
              <h1>List of {giftsList.length} gifts</h1>
            </div>
            {giftsList.map(gift => {
                const {id, name, image} = gift;

                return(
                    <div key={id}>
                        <div className="container">
                            <h2>{id} - {name}</h2>
                        </div>
                        <div className="container">
                            <img src={image} width='400px' alt="thing" />
                        </div>
                        <div className="container">
                            <button className="btn" onClick={() => removeItem(id)}>Remove</button>
                        </div>
                    </div>
                )
            })}

            <div className="container">
                <button onClick={() => setGiftsList([])}>Delete all</button>
            </div>

        </div>
    )
}
export default Gifts;