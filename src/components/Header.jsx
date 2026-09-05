function Header({ searchTerm, onSearchChange }) {
//   const getTotalCount = useCartStore((state) => state.getTotalCount);
//   const count = getTotalCount();

  return (
    <header className="sticky top-0 z-50 bg-[#FBFAF7]/90 backdrop-blur-md border-b border-gray-200 text-black px-6 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">mapOku!</span>
          <span className="text-2xl font-black text-black tracking-wide">
            find an accessible route
          </span>
        </div>


        {/* <div className="hidden md:flex items-center bg-white px-4 py-1.5 rounded-full border border-gray-300 w-1/3 shadow-inner">
          <input 
            type="text" 
            placeholder="Where are you heading to..." 
            // value={searchTerm}
            // onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-transparent text-sm focus:outline-none text-black placeholder-gray-400"
          />
          <span className="text-gray-400">🔍</span>
        </div> */}

        {/* Cart & Action */}
        <div className="flex items-center gap-4">
          <button className="relative p-2.5 bg-gray-200/60 rounded-full hover:bg-gray-200 transition">
            <span className="text-xl">🪙</span>
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#FBFAF7]">
              21
            </span>
          </button>
          <button className="hidden sm:block bg-black hover:bg-gray-800 text-white font-bold text-xs px-4 py-2 rounded-full shadow-sm transition-all">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;