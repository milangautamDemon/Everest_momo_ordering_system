import React from 'react'

const MapClickHandler = () => {
    useMapEvents({
        click(e) {
          setDestination([e.latlng.lat, e.latlng.lng]);
        },
      });
      return null;
}

export default MapClickHandler