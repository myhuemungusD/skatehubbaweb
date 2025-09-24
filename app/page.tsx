export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to SkateHubba Beta
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your social skate app experience starts here
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-2">🗺️ Map</h2>
            <p className="text-gray-600">Discover skate spots near you</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-2">🛹 Skate</h2>
            <p className="text-gray-600">Track your sessions and progress</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-2">👕 Closet</h2>
            <p className="text-gray-600">Manage your skate gear</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-2">🛒 Shop</h2>
            <p className="text-gray-600">Get the latest skate gear</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-2">📺 Live</h2>
            <p className="text-gray-600">Watch live skate sessions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-2">💬 Chat</h2>
            <p className="text-gray-600">Connect with the community</p>
          </div>
        </div>
      </div>
    </div>
  )
}