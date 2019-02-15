import React from 'react';
import floorplan from "../Assets/Pictures/level7.jpg";

import Bubble from '../Bubble/bubble';

const Floorplan = () => {
    return (
        <div>
            <img
                src={floorplan}
                border="3"
                style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%"
                }}
            />
        </div>
    )
}

export default Floorplan;
