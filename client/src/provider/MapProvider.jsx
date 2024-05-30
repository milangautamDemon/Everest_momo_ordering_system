/* eslint-disable react/prop-types */

import { useState } from "react";
import { mapContext } from "../context/mapContext";

export const MapProvider = ({children}) => {
    const [currentMarkerPosition, setCurrentMarkerPosition] = useState({
        lat:27.69152 ,
        lng:85.342049
    });
  return (
    <mapContext.Provider value={{currentMarkerPosition, setCurrentMarkerPosition}}>{children}</mapContext.Provider>
  )
}

export default MapProvider