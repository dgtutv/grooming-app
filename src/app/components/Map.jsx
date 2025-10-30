"use client"

import 'leaflet/dist/leaflet.css';
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
const ABBOTSFORD_COORDS = [49.0504, -122.3045];
const RADIUS_METERS = 10000; // 10 km radius

function Map() {
    return (
        <MapContainer
            center={ABBOTSFORD_COORDS}
            zoom={12}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%' }}
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