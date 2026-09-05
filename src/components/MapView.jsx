import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Essential for the map to render correctly

// Fix for default marker icon issues in React
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapView = () => {
  // Coordinates for MMU Cyberjaya
  const mmuCyberjayaCoords = [2.9272, 101.6409];

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer 
        center={mmuCyberjayaCoords} 
        zoom={16} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mmuCyberjayaCoords}>
          <Popup>
            Multimedia University (MMU) <br /> Cyberjaya, Selangor.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;