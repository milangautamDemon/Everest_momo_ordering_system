/* eslint-disable react/prop-types */

import { useState } from "react";
import { mapContext } from "../context/mapContext";

export const MapProvider = ({children}) => {
    const [currentMarkerPosition, setCurrentMarkerPosition] = useState({
        lat:51.505 ,
        lng:-0.09
    });
  return (
    <mapContext.Provider value={{currentMarkerPosition, setCurrentMarkerPosition}}>{children}</mapContext.Provider>
  )
}

export default MapProvider