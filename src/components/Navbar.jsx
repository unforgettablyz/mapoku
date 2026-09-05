import React from 'react';

function Navbar({ isOpen, activeTab, onTabChange }) {
  const tabs = [
    { id: 'routes', label: 'Routes', icon: '🛣' },
    { id: 'report', label: 'Report', icon: '🚨' },
    { id: 'rewards', label: 'Rewards', icon: '🏆' }
  ];

  return (
    <aside 
      className={`bg-[#FBFAF7] border-r border-gray-200 transition-all duration-300 overflow-hidden flex flex-col ${
        isOpen ? 'w-64' : 'w-0'
      }`}
    >
      <div className="flex flex-col gap-2 p-4 min-w-[16rem]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm transition-all w-full ${
                isActive
                  ? 'bg-[#346F4B] text-white shadow-md'
                  : 'text-gray-600 hover:bg-[#E7EFE9] hover:text-[#2A593C]'
              }`}
            >
              <span className={`text-xl transition-transform ${isActive ? 'scale-110' : 'grayscale'}`}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default Navbar;