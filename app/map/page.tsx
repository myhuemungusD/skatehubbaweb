'use client'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
})

export default function MapPage() {
  return (
    <div className="min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🗺️ Skate Spots Map
        </h1>
        <p className="text-gray-600">
          Discover skate spots, parks, and session locations near you
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="h-96 rounded-lg overflow-hidden">
          <MapComponent />
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="font-semibold mb-2">🏞️ Parks</h3>
          <p className="text-sm text-gray-600">Find skate-friendly parks</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="font-semibold mb-2">🏢 Street Spots</h3>
          <p className="text-sm text-gray-600">Discover street skating locations</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="font-semibold mb-2">👥 Sessions</h3>
          <p className="text-sm text-gray-600">Join or create skate sessions</p>
        </div>
      </div>
    </div>
  )
}