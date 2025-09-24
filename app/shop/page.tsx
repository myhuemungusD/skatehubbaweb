export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🛒 Skate Shop
        </h1>
        <p className="text-gray-600">
          Discover the latest skate gear, brands, and exclusive releases
        </p>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            All
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            Decks
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            Shoes
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            Apparel
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
            Parts
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-1">Pro Model Deck 8.25&quot;</h3>
            <p className="text-sm text-gray-600 mb-2">Element Skateboards</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">$59.99</span>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-red-400 to-orange-500"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-1">SB Dunk Low</h3>
            <p className="text-sm text-gray-600 mb-2">Nike SB</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">$119.99</span>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-1">Independent Trucks</h3>
            <p className="text-sm text-gray-600 mb-2">Independent Truck Co.</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">$49.99</span>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-yellow-400 to-red-500"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-1">Spitfire Wheels 54mm</h3>
            <p className="text-sm text-gray-600 mb-2">Spitfire</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">$39.99</span>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-1">Classic Logo Tee</h3>
            <p className="text-sm text-gray-600 mb-2">Thrasher</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">$24.99</span>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-1">Bones Reds Bearings</h3>
            <p className="text-sm text-gray-600 mb-2">Bones Bearings</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">$19.99</span>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Featured Brand: Element</h2>
        <p className="mb-4">Check out the latest pro models and nature-inspired graphics</p>
        <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Shop Element
        </button>
      </div>
    </div>
  )
}