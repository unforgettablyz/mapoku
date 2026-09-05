import React from 'react';
import logo from '../assets/mapoku2.png';

/*
  Header — logo image + "mapOKU" system name on the left, points card on the right.
  Points are passed in via props (default 620) so it can later sync with the
  Rewards screen from shared state. No search, no sign-in.
*/

function Header({ toggleSidebar, points = 620 }) {
  return (
    <header className="sticky top-0 z-50 bg-[#FBFAF7]/90 backdrop-blur-md border-b border-gray-200 text-black px-6 py-3 shadow-sm">
      <div className="flex items-center justify-between">

        {/* Left: hamburger + logo + name */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <div className="flex items-center gap-3">
            <img src={logo} alt="mapOKU" className="h-9 w-auto" />
            <span className="text-2xl font-black text-gray-900 tracking-wide">mapOKU</span>
          </div>
        </div>

        {/* Right: points card */}
        <div className="flex items-center gap-2 bg-[#E7EFE9] border border-[#cfe0d5] rounded-xl px-4 py-2">
          <span className="text-lg">🪙</span>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] text-gray-500 font-medium">Your points</span>
            <span className="text-sm font-extrabold text-[#346F4B]">{points}</span>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;