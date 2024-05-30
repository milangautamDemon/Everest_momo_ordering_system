/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { MdKeyboardArrowRight } from "react-icons/md";


const RoutingMachine = ({ userLocation, destination }) => {
  const map = useMapEvents({});
  
  useEffect(() => {
    if (userLocation && destination) {
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(userLocation[0], userLocation[1]),
          L.latLng(destination[0], destination[1])
        ],
        routeWhileDragging: true,
      }).addTo(map);

      return () => map.removeControl(routingControl);
    }
  }, [map, userLocation, destination]);

  return null;
};

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const destination = [27.69152, 85.342049];

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setUserLocation([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  const handleUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      (error) => {
        console.error("Error getting user location: ", error);
        alert("Could not get your location. Please allow location access and try again.");
      }
    );
  };

  return (
    <MapContainer center={destination} zoom={13} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapClickHandler />
      {userLocation && (
        <Marker position={userLocation}>
          <Popup>
              <div>your location</div>
          </Popup>
        </Marker>
      )}
      {userLocation && (
        <RoutingMachine userLocation={userLocation} destination={destination} />
      )}
      {!userLocation && (
        <Marker position={[27.69152, 85.342049]}>
          <Popup>
            <div>New Baneshwor, Kathmandu, Nepal</div>
            <button className='text-secondary-light flex gap-2 items-center' onClick={handleUserLocation}><span>Get Location</span> <span><MdKeyboardArrowRight className='text-danger' size={30} /></span></button>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
