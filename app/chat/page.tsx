export default function ChatPage() {
  return (
    <div className="min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          💬 Community Chat
        </h1>
        <p className="text-gray-600">
          Connect with skaters worldwide, share tricks, and build the community
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="font-semibold mb-3">🏠 Channels</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 p-2 bg-blue-100 rounded cursor-pointer">
                <span className="text-blue-600">#</span>
                <span className="text-sm font-medium">general</span>
              </div>
              <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                <span className="text-gray-600">#</span>
                <span className="text-sm">trick-tips</span>
              </div>
              <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                <span className="text-gray-600">#</span>
                <span className="text-sm">gear-talk</span>
              </div>
              <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                <span className="text-gray-600">#</span>
                <span className="text-sm">spots</span>
              </div>
              <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                <span className="text-gray-600">#</span>
                <span className="text-sm">sessions</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="font-semibold mb-3">👥 Online (12)</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">SkaterBoy23</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">OllieQueen</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">GrindMaster</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">FlipTrick</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-500">BoardLife</span>
              </div>
              <div className="text-xs text-gray-500 pl-4">+7 more</div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-md flex flex-col h-96">
            <div className="p-4 border-b">
              <h2 className="font-semibold"># general</h2>
              <p className="text-sm text-gray-600">General discussion about skating</p>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  S
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm">SkaterBoy23</span>
                    <span className="text-xs text-gray-500">Today at 2:30 PM</span>
                  </div>
                  <p className="text-sm">Hey everyone! Just landed my first kickflip after weeks of practice! 🎉</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  O
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm">OllieQueen</span>
                    <span className="text-xs text-gray-500">Today at 2:32 PM</span>
                  </div>
                  <p className="text-sm">Congrats! That&apos;s such a milestone trick. How long have you been skating?</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  G
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm">GrindMaster</span>
                    <span className="text-xs text-gray-500">Today at 2:35 PM</span>
                  </div>
                  <p className="text-sm">Nice work! Next step: kickflip to manual 😄</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  F
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm">FlipTrick</span>
                    <span className="text-xs text-gray-500">Today at 2:38 PM</span>
                  </div>
                  <p className="text-sm">Anyone know any good spots in LA? Visiting next week and want to explore</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  B
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-sm">BoardLife</span>
                    <span className="text-xs text-gray-500">Today at 2:40 PM</span>
                  </div>
                  <p className="text-sm">@FlipTrick Check out Venice Beach, Hollywood High, and the Berrics if you can get in!</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Message #general..." 
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">🎯 Community Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-3 bg-blue-50 rounded">
            <h3 className="font-medium mb-2">🤝 Be Respectful</h3>
            <p className="text-gray-600">Treat everyone with respect and kindness</p>
          </div>
          <div className="p-3 bg-green-50 rounded">
            <h3 className="font-medium mb-2">🛹 Stay On Topic</h3>
            <p className="text-gray-600">Keep discussions related to skating</p>
          </div>
          <div className="p-3 bg-purple-50 rounded">
            <h3 className="font-medium mb-2">📱 Share Responsibly</h3>
            <p className="text-gray-600">No spam, self-promotion, or harmful content</p>
          </div>
        </div>
      </div>
    </div>
  )
}