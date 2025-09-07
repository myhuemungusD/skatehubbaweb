export default function SkatePage() {
  return (
    <div className="min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🛹 Skate Sessions
        </h1>
        <p className="text-gray-600">
          Track your sessions, progress, and connect with other skaters
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">📊 Your Stats</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Sessions this week</span>
              <span className="font-semibold text-blue-600">5</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Total hours</span>
              <span className="font-semibold text-green-600">12.5h</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Tricks learned</span>
              <span className="font-semibold text-purple-600">3</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">🎯 Current Goals</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span>Land a kickflip consistently</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-3" defaultChecked />
              <span className="line-through text-gray-500">Ollie over a cone</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span>Learn heelflip</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">📝 Recent Sessions</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-medium">Downtown Skate Park</h3>
            <p className="text-sm text-gray-600">2 hours ago • 1.5 hours</p>
            <p className="text-sm">Worked on kickflips and rail slides</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="font-medium">Street Plaza</h3>
            <p className="text-sm text-gray-600">Yesterday • 2 hours</p>
            <p className="text-sm">Practiced ledge tricks and manual balance</p>
          </div>
        </div>
      </div>
    </div>
  )
}