"use client"

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';

// Fix Leaflet's default icon paths so markers render correctly in Next.js builds
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x.src || markerIcon2x,
    iconUrl: markerIcon.src || markerIcon,
    shadowUrl: markerShadow.src || markerShadow,
});

// Abbotsford, BC coordinates
const MAP_COORDS = [49.230104, -122.303058];
const ABBOTSFORD_COORDS = [49.0504, -122.3045];
const RADIUS_METERS = 40000; // 10 km radius

function Map() {
    return (
        <MapContainer
            center={MAP_COORDS}
            zoom={9.4}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%', borderRadius: "12px" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Circle
                center={ABBOTSFORD_COORDS}
                radius={RADIUS_METERS}
            />
        </MapContainer>
    );
}

export default Map;