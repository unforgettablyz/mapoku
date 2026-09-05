import React from 'react';

function ReportObstacleCard() {
  return (
    <div className="flex flex-col h-full bg-transparent p-4 w-full max-w-md mx-auto justify-between gap-5 overflow-y-auto">
      
      {/* Location Input */}
      <div className="flex items-center gap-3 bg-[#E7EFE9] rounded-xl p-3">
        <svg className="w-5 h-5 text-[#4A785B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <div className="flex flex-col w-full">
          <span className="text-xs text-gray-500 font-medium">Location</span>
          <span className="text-sm font-bold text-gray-900">Jln SS15/4, Subang Jaya</span>
        </div>
      </div>

      {/* Obstacle Selection Grid */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-bold text-gray-900">What's the obstacle?</h3>
        <div className="grid grid-cols-2 gap-3">
          
          {/* Selected Option */}
          <div className="bg-[#E7EFE9] border-2 border-[#4A785B] rounded-xl p-3 flex flex-col gap-3 cursor-pointer shadow-sm">
            <span className="text-xl">⛔️</span>
            <span className="text-xs font-bold text-gray-900">No ramp / stairs only</span>
          </div>

          {/* Unselected Options */}
          <div className="bg-[#FBFAF7] border border-gray-200 rounded-xl p-3 flex flex-col gap-3 cursor-pointer shadow-sm hover:bg-gray-50">
            <span className="text-xl">🛗</span>
            <span className="text-xs font-bold text-gray-700">Lift broken</span>
          </div>

          <div className="bg-[#FBFAF7] border border-gray-200 rounded-xl p-3 flex flex-col gap-3 cursor-pointer shadow-sm hover:bg-gray-50">
            <span className="text-xl">🚧</span>
            <span className="text-xs font-bold text-gray-700">Path blocked</span>
          </div>

          <div className="bg-[#FBFAF7] border border-gray-200 rounded-xl p-3 flex flex-col gap-3 cursor-pointer shadow-sm hover:bg-gray-50">
            <span className="text-xl">🕳</span>
            <span className="text-xs font-bold text-gray-700">Uneven surface</span>
          </div>

        </div>
      </div>

      {/* Add Photo Section */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-bold text-gray-900">Add a photo</h3>
        <div className="border-2 border-dashed border-gray-300 bg-[#F2F0E9] rounded-xl py-6 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#EBE9E0] transition-colors">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span className="text-xs font-bold text-gray-500">Take or upload photo</span>
        </div>
      </div>
      {/* Rewards Info Box */}
      <div className="bg-[#F6EBD9] rounded-xl p-3 flex items-center gap-2 mt-1">
        <svg className="w-5 h-5 text-[#C27A45]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span className="text-xs text-gray-800">
          Earn <span className="font-extrabold">+10 pts</span> now, <span className="font-extrabold">+40</span> when confirmed.
        </span>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-[#346F4B] hover:bg-[#2A593C] text-white font-bold rounded-xl py-3.5 flex items-center justify-center gap-2 transition-colors mt-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
        </svg>
        Submit report
      </button>

    </div>
  );
}

export default ReportObstacleCard;