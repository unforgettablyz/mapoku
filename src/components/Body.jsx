import React from 'react';
import MapView from './MapView.jsx';
import SearchCard from './SearchCard.jsx';
import Rewards from './Rewards.jsx';
import Report from './Report.jsx';

/*
  Body — switches content by active tab.
  Gap fix: main is flex-1 so it fills the space between header and footer, and
  the routes view uses a min-height instead of a hard fixed height so there's no
  dead space below the map before the footer.
*/

function Body({ activeTab = 'routes' }) {
  return (
    <main className="bg-[#F0EEE7] w-full p-4 md:p-6 flex flex-col flex-1">

      {activeTab === 'routes' && (
        <div className="w-full flex-1 min-h-[550px] flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Map */}
          <div className="flex-1 relative z-0 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200">
            <MapView />
          </div>
          {/* Search card */}
          <div className="w-full md:w-[400px] bg-[#FBFAF7] rounded-2xl border border-gray-200 overflow-y-auto z-10 shadow-md p-2">
            <SearchCard />
          </div>
        </div>
      )}

      {activeTab === 'report' && (
        <div className="w-full flex-1 bg-[#FBFAF7] rounded-2xl border border-gray-200 shadow-md">
          <Report />
        </div>
      )}

      {activeTab === 'rewards' && (
        <div className="w-full flex-1 bg-[#FBFAF7] rounded-2xl border border-gray-200 shadow-md p-4">
          <Rewards />
        </div>
      )}

    </main>
  );
}

export default Body;