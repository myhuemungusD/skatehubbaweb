export default function ClosetPage() {
  return (
    <div className="min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          👕 Your Skate Closet
        </h1>
        <p className="text-gray-600">
          Manage your skate gear, track maintenance, and plan your setup
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            🛹 Boards
          </h2>
          <div className="space-y-3">
            <div className="border rounded p-3">
              <h3 className="font-medium">Main Setup</h3>
              <p className="text-sm text-gray-600">8.25&quot; deck, Independent trucks</p>
              <div className="mt-2">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  Active
                </span>
              </div>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-medium">Backup Board</h3>
              <p className="text-sm text-gray-600">8.0&quot; deck, Thunder trucks</p>
              <div className="mt-2">
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  Backup
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            👟 Shoes
          </h2>
          <div className="space-y-3">
            <div className="border rounded p-3">
              <h3 className="font-medium">Vans Old Skool</h3>
              <p className="text-sm text-gray-600">Size 9 • Black/White</p>
              <div className="mt-2">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                  Worn
                </span>
              </div>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-medium">Nike SB Dunk</h3>
              <p className="text-sm text-gray-600">Size 9 • Navy/Gum</p>
              <div className="mt-2">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  Fresh
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            🛡️ Protection
          </h2>
          <div className="space-y-3">
            <div className="border rounded p-3">
              <h3 className="font-medium">Helmet</h3>
              <p className="text-sm text-gray-600">Pro-Tec Classic • Black</p>
            </div>
            <div className="border rounded p-3">
              <h3 className="font-medium">Knee Pads</h3>
              <p className="text-sm text-gray-600">187 Killer Pads • Size M</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">🔧 Maintenance Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-medium text-amber-600">Due Soon</h3>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Replace grip tape</span>
                <span className="text-amber-600">3 days</span>
              </div>
              <div className="flex justify-between">
                <span>Check wheel bearings</span>
                <span className="text-amber-600">1 week</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium text-green-600">Recently Done</h3>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Tightened trucks</span>
                <span className="text-green-600">2 days ago</span>
              </div>
              <div className="flex justify-between">
                <span>Rotated wheels</span>
                <span className="text-green-600">1 week ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}