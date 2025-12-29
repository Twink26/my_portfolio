export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contacts', href: '#contacts' }
  ];
  
  return (
    <nav className="fixed right-0 top-1/2 -translate-y-1/2 h-full flex items-center p-5 z-50">
      <div className="bg-gradient-to-b from-blue-900/20 via-indigo-950/20 to-blue-900/20 backdrop-blur-md border border-purple-300/30 rounded-2xl shadow-2xl py-8 px-4">
        <ul className="flex flex-col items-center space-y-11">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="text-purple-200 text-sm font-medium hover:text-purple-100 transition-all duration-300 hover:scale-110 inline-block relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-violet-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

