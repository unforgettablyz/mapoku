import React, { useState } from 'react';
import { REQUESTED, SUGGESTED } from './Routedata.js';

/*
  SearchCard — two-state flow:

  STATE 1 (before search): From/To inputs + "Find suitable routes" button.
  STATE 2 (after search):  results appear — OKU route, AI suggestion, reasons,
                           standard route, warning, and the Start button.

  `searched` toggles between the two. Reads dummy data from routeData.js.
*/

function SearchCard() {
  const [searched, setSearched] = useState(false);
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="flex flex-col h-full bg-transparent p-4 w-full max-w-md mx-auto justify-between gap-6">
      <div className="flex flex-col gap-4">

        {/* From / To inputs (always visible) */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 bg-[#F2F0E9] rounded-xl p-3">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <div className="flex flex-col w-full">
              <span className="text-xs text-gray-500 font-medium">From</span>
              <input type="text" placeholder="From..." className="w-full bg-transparent text-sm font-bold focus:outline-none text-gray-900 placeholder-gray-500" />
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#E7EFE9] rounded-xl p-3">
            <svg className="w-5 h-5 text-[#4A785B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <div className="flex flex-col w-full">
              <span className="text-xs text-gray-500 font-medium">To</span>
              <input type="text" placeholder="Where are you heading to..." className="w-full bg-transparent text-sm font-bold focus:outline-none text-gray-900 placeholder-gray-500" />
            </div>
          </div>
        </div>

        {/* STATE 1: hint before search */}
        {!searched && (
          <div className="flex flex-col items-center text-center gap-2 py-8 text-gray-400">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-sm font-medium">Enter your start and destination</span>
            <span className="text-xs">We'll find the most accessible route for you.</span>
          </div>
        )}

        {/* STATE 2: results after search */}
        {searched && (
          <>
            {/* OKU-safe route */}
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
              <span className="text-sm font-extrabold text-gray-900">14 min</span>
            </div>

            {/* AI suggests instead */}
            <div className={`rounded-xl p-4 flex flex-col gap-3 border-2 transition-colors ${accepted ? 'bg-[#E7EFE9] border-[#346F4B]' : 'bg-[#E7EFE9] border-[#4A785B]'}`}>
              <div className="flex items-center gap-2">
                <div className="bg-[#346F4B] p-1.5 rounded-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.5 6.5L22 12l-6.5 2.5L13 21l-2.5-6.5L4 12l6.5-2.5L13 3z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-[#4A785B] uppercase tracking-wide">AI suggests instead</span>
              </div>

              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-base font-extrabold text-gray-900">{SUGGESTED.name}</span>
                  <span className="text-xs text-gray-600">{SUGGESTED.area} · {SUGGESTED.distanceAway} · {SUGGESTED.extraTime}</span>
                </div>
              </div>

              {accepted ? (
                <div className="flex items-center gap-2 text-sm font-bold text-[#346F4B]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  Routing you to {SUGGESTED.name}
                </div>
              ) : (
                <div className="flex gap-2">
                  <button onClick={() => setAccepted(true)} className="flex-1 bg-[#346F4B] hover:bg-[#2A593C] text-white font-bold text-sm rounded-lg py-2.5 transition-colors">
                    Use this route
                  </button>
                  <button className="px-4 text-gray-500 font-medium text-sm rounded-lg hover:text-gray-700 transition">
                    Keep original
                  </button>
                </div>
              )}
            </div>

            {/* Reasons box */}
            <div className="bg-[#E7EFE9] rounded-xl p-4 flex flex-col gap-2">
              <span className="text-sm font-bold text-gray-900">Why {SUGGESTED.name} is safer</span>
              <ul className="flex flex-col gap-1.5">
                {SUGGESTED.reasons.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                    <svg className="w-3.5 h-3.5 text-[#346F4B] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standard route */}
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
              <span className="text-sm font-extrabold text-gray-900">9 min</span>
            </div>

            {/* Warning box */}
            <div className="bg-[#F6EBD9] rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C27A45]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <span className="text-sm font-bold text-gray-900">{REQUESTED.name} may be hard to access</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                The community reported <span className="font-bold">{REQUESTED.obstacles.length} obstacles</span> here recently:
              </p>
              <ul className="flex flex-col gap-1.5">
                {REQUESTED.obstacles.map((o, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                    <span className="text-[#C27A45] font-bold mt-0.5">•</span>
                    <span>{o.type}<span className="text-gray-400"> · {o.ago} · {o.confirms} confirmed</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

      </div>

      {/* Bottom button — swaps based on state */}
      {searched ? (
        <button className="w-full bg-[#346F4B] hover:bg-[#2A593C] text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 transition-colors mt-4">
          <svg className="w-5 h-5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
          {accepted ? `Start route to ${SUGGESTED.name}` : 'Start OKU route'}
        </button>
      ) : (
        <button onClick={() => setSearched(true)} className="w-full bg-[#346F4B] hover:bg-[#2A593C] text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 transition-colors mt-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          Find suitable routes
        </button>
      )}

    </div>
  );
}

export default SearchCard;