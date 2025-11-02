export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contacts', href: '#contacts' }
  ];
  
  return (
    <nav className="fixed right-0 top-0 h-full flex items-center p-5 z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl py-9 w-19 h-80">
        <div className="flex flex-col items-center">
          <ul className="flex flex-col items-center space-y-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-white text-xs hover:text-gray-200 transition-colors duration-300 hover:scale-110 inline-block"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

