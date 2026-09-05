import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import {
  ORIGIN, REQUESTED, SUGGESTED, STANDARD_ROUTE, OKU_ROUTE,
} from './Routedata.js';

/*
  MapView — now reflects the AI recommendation visually:
  - green solid line  = OKU-safe route (detours to the suggested branch)
  - grey dashed line  = standard route (passes the obstacles)
  - amber circles     = reported obstacles
  - A marker          = origin
  - B marker (amber)  = requested destination (has obstacles)
  - C marker (green)  = AI-suggested safer destination

  Shares data with AIRecommendation via routeData.js so they never disagree.
*/

// coloured pin builder (divIcon so we can use the palette)
function pin(color, letter) {
  return L.divIcon({
    className: '',
    html: `<div style="width:30px;height:30px;background:${color};border:3px solid #fff;
      border-radius:50% 50% 50% 2px;transform:rotate(45deg);
      box-shadow:0 2px 8px rgba(0,0,0,.3);display:grid;place-items:center;">
      <span style="transform:rotate(-45deg);color:#fff;font-weight:800;font-size:14px;font-family:sans-serif;">${letter}</span>
      </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

const MapView = () => {
  const center = [2.9272, 101.6440]; // framed to show all three points

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer center={center} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Standard route — grey dashed, passes obstacles */}
        <Polyline positions={STANDARD_ROUTE} pathOptions={{ color: '#8A8F88', weight: 5, dashArray: '8 8', opacity: 0.8 }} />

        {/* OKU-safe route — green solid, detours to suggested branch */}
        <Polyline positions={OKU_ROUTE} pathOptions={{ color: '#346F4B', weight: 6, opacity: 0.95 }} />

        {/* Obstacle markers along the standard route */}
        {REQUESTED.obstacles.map((o, i) => (
          <CircleMarker
            key={i}
            center={[o.coords.lat, o.coords.lng]}
            radius={9}
            pathOptions={{ color: '#fff', weight: 2, fillColor: '#C27A45', fillOpacity: 1 }}
          >
            <Popup>
              <strong>⚠ {o.type}</strong><br />
              {o.ago} · {o.confirms} confirmed
            </Popup>
          </CircleMarker>
        ))}

        {/* Origin (A) */}
        <Marker position={[ORIGIN.lat, ORIGIN.lng]} icon={pin('#1E2B22', 'A')}>
          <Popup>{ORIGIN.label}</Popup>
        </Marker>

        {/* Requested destination (B) — has obstacles */}
        <Marker position={[REQUESTED.coords.lat, REQUESTED.coords.lng]} icon={pin('#C27A45', 'B')}>
          <Popup>
            <strong>{REQUESTED.name}</strong><br />
            {REQUESTED.obstacles.length} obstacles reported — hard to access
          </Popup>
        </Marker>

        {/* AI-suggested destination (C) — safer */}
        <Marker position={[SUGGESTED.coords.lat, SUGGESTED.coords.lng]} icon={pin('#346F4B', 'C')}>
          <Popup>
            <strong>{SUGGESTED.name}</strong><br />
            AI-suggested · step-free · {SUGGESTED.extraTime}
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
};

export default MapView;