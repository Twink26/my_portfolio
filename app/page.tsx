export default function page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Navbar */}
      <nav className="fixed right-0 top-0 h-full bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="flex flex-col h-flex px-6 py-8 ">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">Logo</div>
            <ul className="flex flex-col space-y-6">
              <li><a href="#" className="text-white hover:text-gray-200 transition">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition">About</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition">Services</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

       
    </div>
    
  );
}