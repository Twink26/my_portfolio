export default function Page() {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Navbar */}
      <nav className="fixed right-0 top-0 h-full flex items-center p-6">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl px-8 py-12">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            
            
            {/* Navigation Links */}
            <ul className="flex flex-col items-center space-y-6">
              <li>
                <a href="#" className="text-white text-lg hover:text-gray-200 transition-colors duration-300 hover:scale-110 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-lg hover:text-gray-200 transition-colors duration-300 hover:scale-110 inline-block">
                  projects
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-lg hover:text-gray-200 transition-colors duration-300 hover:scale-110 inline-block">
                  Experience
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-lg hover:text-gray-200 transition-colors duration-300 hover:scale-110 inline-block">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}