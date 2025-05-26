import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface MapProps {
  position: [number, number];
  zoom?: number;
  schoolName?: string;
  address?: string;
}

const Map: React.FC<MapProps> = ({
  position,
  zoom = 15,
  schoolName = 'EduSite Dynamic',
  address = 'Kathmandu, Nepal',
}) => {
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <div className="text-center">
            <h3 className="font-semibold">{schoolName}</h3>
            <p>{address}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;