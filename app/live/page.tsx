export default function LivePage() {
  return (
    <div className="min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          📺 Live Sessions
        </h1>
        <p className="text-gray-600">
          Watch live skate sessions, contests, and tutorials from around the world
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-black rounded-lg overflow-hidden mb-4">
            <div className="aspect-video bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📹</div>
                <h3 className="text-xl font-semibold mb-2">Live from Venice Beach</h3>
                <p className="text-red-200">🔴 LIVE • 1,247 viewers</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Venice Beach Skate Session</h2>
            <p className="text-gray-600 mb-3">
              Join the crew at Venice Beach for some street skating and bowl sessions. 
              Chat with other viewers and watch some incredible tricks!
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Started 2 hours ago</span>
              <span>•</span>
              <span>1,247 watching</span>
              <span>•</span>
              <span>Skateboarding</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold mb-3">💬 Live Chat</h3>
            <div className="space-y-2 h-64 overflow-y-auto text-sm">
              <div className="flex items-start space-x-2">
                <span className="font-medium text-blue-600">SkaterBoy23:</span>
                <span>That kickflip was insane! 🔥</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-medium text-green-600">OllieQueen:</span>
                <span>Venice is the best spot ever</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-medium text-purple-600">GrindMaster:</span>
                <span>Anyone know what trucks those are?</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-medium text-red-600">FlipTrick:</span>
                <span>@GrindMaster looks like Independents</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-medium text-orange-600">BoardLife:</span>
                <span>This stream is making me want to skate!</span>
              </div>
            </div>
            <div className="mt-3 flex">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">🎬 Other Live Streams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
              <span className="text-white text-2xl">🛹</span>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm mb-1">Street Session NYC</h3>
              <p className="text-xs text-gray-600">🔴 Live • 523 viewers</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
              <span className="text-white text-2xl">🏆</span>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm mb-1">Pro Contest - Finals</h3>
              <p className="text-xs text-gray-600">🔴 Live • 2,891 viewers</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <span className="text-white text-2xl">📚</span>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm mb-1">Trick Tutorial Live</h3>
              <p className="text-xs text-gray-600">🔴 Live • 156 viewers</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <span className="text-white text-2xl">🌅</span>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm mb-1">Sunrise Session</h3>
              <p className="text-xs text-gray-600">🔴 Live • 89 viewers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}