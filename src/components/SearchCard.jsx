import React from 'react';

function SearchCard() {
  return (
    <div className="flex flex-col h-full bg-transparent p-4 w-full max-w-md mx-auto justify-between gap-6">
      
      {/* Top Section: Inputs and Route Options */}
      <div className="flex flex-col gap-4">
        
        {/* From / To Inputs */}
        <div className="flex flex-col gap-2">
          {/* From Input */}
          <div className="flex items-center gap-3 bg-[#F2F0E9] rounded-xl p-3">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">From</span>
              <span className="text-sm font-bold text-gray-900">Placeholder Origin</span>
            </div>
          </div>

          {/* To Input */}
          <div className="flex items-center gap-3 bg-[#E7EFE9] rounded-xl p-3">
            <svg className="w-5 h-5 text-[#4A785B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">To</span>
              <span className="text-sm font-bold text-gray-900">Placeholder Destination</span>
            </div>
          </div>
        </div>

        {/* Route Cards */}
        <div className="flex flex-col gap-3">
          {/* OKU-safe Route */}
          <div className="flex items-center justify-between bg-[#E7EFE9] border-2 border-[#4A785B] rounded-xl p-3 shadow-sm cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <svg className="w-6 h-6 text-[#4A785B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">OKU-safe route</span>
                  <span className="text-[10px] font-bold text-[#4A785B] border border-[#4A785B] rounded-full px-2 py-0.5 bg-white">
                    Recommended
                  </span>
                </div>
                <span className="text-xs text-gray-600">Step-free · avoids obstacles</span>
              </div>
            </div>
            <span className="text-sm font-extrabold text-gray-900">00 min</span>
          </div>

          {/* Standard Route */}
          <div className="flex items-center justify-between bg-white rounded-xl p-3 shadow-sm cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="bg-[#F2F0E9] p-2 rounded-lg shadow-sm">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900">Standard route</span>
                <span className="text-xs text-[#B8703B] font-medium">Shorter · passes obstacles</span>
              </div>
            </div>
            <span className="text-sm font-extrabold text-gray-900">00 min</span>
          </div>
        </div>

        {/* Detour Info Box */}
        <div className="bg-[#F6EBD9] rounded-xl p-4 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C27A45]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <span className="text-sm font-bold text-gray-900">Why the detour?</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed mt-1">
            Placeholder text explaining why the detour is happening, such as a reported broken lift or temporary construction.
          </p>
        </div>

      </div>

      {/* Start Button */}
      <button className="w-full bg-[#346F4B] hover:bg-[#2A593C] text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 transition-colors mt-4">
        <svg className="w-5 h-5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
        Start OKU route
      </button>

    </div>
  );
}

export default SearchCard;