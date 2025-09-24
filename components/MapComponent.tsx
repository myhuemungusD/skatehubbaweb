'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in react-leaflet
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

const skateSpots = [
  {
    id: 1,
    name: 'Downtown Skate Park',
    position: [37.7749, -122.4194] as [number, number],
    description: 'Popular skate park with bowls and rails'
  },
  {
    id: 2,
    name: 'Street Plaza',
    position: [37.7849, -122.4094] as [number, number],
    description: 'Great street-style obstacles and ledges'
  },
  {
    id: 3,
    name: 'Riverside Spot',
    position: [37.7649, -122.4294] as [number, number],
    description: 'Scenic riverside location with smooth concrete'
  }
]

const MapComponent = () => {
  return (
    <MapContainer 
      center={[37.7749, -122.4194]} 
      zoom={13} 
      scrollWheelZoom={false}
      className="w-full h-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {skateSpots.map((spot) => (
        <Marker 
          key={spot.id} 
          position={spot.position} 
          icon={customIcon}
        >
          <Popup>
            <div className="text-sm">
              <h3 className="font-semibold">{spot.name}</h3>
              <p className="text-gray-600">{spot.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapComponent