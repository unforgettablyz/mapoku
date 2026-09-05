import React, { useState } from 'react';
import { REQUESTED, SUGGESTED } from './Routedata.js';

/*
  AIRecommendation — dummy AI route advisor for the demo.
  Reads REQUESTED + SUGGESTED from routeData.js, the same source MapView uses,
  so the card and the map always agree. Matches project palette; inline SVGs.

  On "Use this route", the map's green line already points to the suggested
  branch, so accepting simply confirms it in the UI.
*/

function SparkIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.5 6.5L22 12l-6.5 2.5L13 21l-2.5-6.5L4 12l6.5-2.5L13 3z" />
    </svg>
  );
}
function WarnIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}
function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function AIRecommendation() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="flex flex-col gap-3">

      {/* AI header badge */}
      <div className="flex items-center gap-2">
        <div className="bg-[#346F4B] p-1.5 rounded-lg">
          <SparkIcon className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-bold text-gray-900">AI route advisor</span>
        <span className="text-[10px] font-bold text-[#346F4B] border border-[#346F4B] rounded-full px-2 py-0.5 bg-white">
          Beta
        </span>
      </div>

      {/* Warning: requested place has obstacles */}
      <div className="bg-[#F6EBD9] rounded-xl p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <WarnIcon className="w-4 h-4 text-[#C27A45]" />
          <span className="text-sm font-bold text-gray-900">
            {REQUESTED.name} may be hard to access
          </span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          The community reported <span className="font-bold">{REQUESTED.obstacles.length} obstacles</span> here recently:
        </p>
        <ul className="flex flex-col gap-1.5 mt-1">
          {REQUESTED.obstacles.map((o, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
              <span className="text-[#C27A45] font-bold mt-0.5">•</span>
              <span>
                {o.type}
                <span className="text-gray-400"> · {o.ago} · {o.confirms} confirmed</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Suggested alternative */}
      <div className={`rounded-xl p-4 flex flex-col gap-3 border-2 transition-colors ${
        accepted ? 'bg-[#E7EFE9] border-[#346F4B]' : 'bg-[#E7EFE9] border-[#4A785B]'
      }`}>
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#4A785B] uppercase tracking-wide">AI suggests instead</span>
            <span className="text-base font-extrabold text-gray-900 mt-0.5">{SUGGESTED.name}</span>
            <span className="text-xs text-gray-600">{SUGGESTED.area} · {SUGGESTED.distanceAway} · {SUGGESTED.extraTime}</span>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm shrink-0">
            <CheckIcon className="w-5 h-5 text-[#346F4B]" />
          </div>
        </div>

        {/* Why the AI recommends it */}
        <div className="bg-white/70 rounded-lg p-3 flex flex-col gap-2">
          <span className="text-xs font-bold text-gray-900">Why this is safer for you</span>
          <ul className="flex flex-col gap-1.5">
            {SUGGESTED.reasons.map((r, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                <CheckIcon className="w-3.5 h-3.5 text-[#346F4B] mt-0.5 shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Accept / dismiss */}
        {accepted ? (
          <div className="flex items-center gap-2 text-sm font-bold text-[#346F4B]">
            <CheckIcon className="w-4 h-4" />
            Routing you to {SUGGESTED.name}
          </div>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => setAccepted(true)}
              className="flex-1 bg-[#346F4B] hover:bg-[#2A593C] text-white font-bold text-sm rounded-lg py-2.5 transition-colors"
            >
              Use this route
            </button>
            <button
              className="px-4 text-gray-500 font-medium text-sm rounded-lg hover:text-gray-700 transition"
            >
              Keep original
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

export default AIRecommendation;