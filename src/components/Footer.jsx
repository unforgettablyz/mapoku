import React from 'react';
import logo from '../assets/mapoku2.png';

/*
  Footer — three columns. Brand column now carries the tagline
  "Freedom to move, for everyone." plus the SDG 11 badge.
*/

function Footer() {
  return (
    <footer className="bg-[#FBFAF7] border-t border-gray-200 mt-auto z-10 relative">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand + tagline */}
        <div className="flex flex-col gap-3">
          <img src={logo} alt="mapOKU" className="h-8 w-auto self-start" />
          <p className="text-base font-black text-gray-900 tracking-wide">
            Freedom to move, for everyone.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
            Community-powered accessibility mapping for OKU and everyone who moves through the city.
          </p>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#346F4B] bg-[#E7EFE9] rounded-full px-3 py-1 self-start">
            🌍 Supporting SDG 11 — Sustainable Cities
          </span>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">Explore</span>
          <a href="#" className="text-sm text-gray-600 hover:text-[#346F4B] transition-colors">About mapOKU</a>
          <a href="#" className="text-sm text-gray-600 hover:text-[#346F4B] transition-colors">Accessibility Statement</a>
          <a href="#" className="text-sm text-gray-600 hover:text-[#346F4B] transition-colors">Report an Obstacle</a>
          <a href="#" className="text-sm text-gray-600 hover:text-[#346F4B] transition-colors">Contact</a>
        </div>

        {/* Built with the community */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">Built with the community</span>
          <p className="text-sm text-gray-600 leading-relaxed">
            Reports come from OKU users, caregivers, and everyday commuters — keeping accessibility
            data fresh and trustworthy for the people who rely on it.
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-[11px] font-medium text-gray-400">
            &copy; 2026 mapOKU. All rights reserved.
          </span>
          <div className="flex gap-4 text-[11px] font-medium text-gray-400">
            <a href="#" className="hover:text-[#346F4B] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#346F4B] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;