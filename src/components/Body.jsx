import React from 'react';
import MapView from './MapView.jsx'; 
import SearchCard from './SearchCard.jsx';

function Body() {
  return (
    <main className="bg-[#F0EEE7] min-h-screen w-full p-4 md:p-6 flex flex-col">
      
      {/* Container utama: Tambah gap-4 (mobile) dan gap-6 (desktop) untuk jarak */}
      <div className="flex-1 w-full relative min-h-[600px] flex flex-col md:flex-row gap-4 md:gap-6">

        {/* Bahagian Peta (MapView) - Mengambil baki ruang */}
        <div className="flex-1 relative z-0 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200">
          <MapView />
        </div>

        {/* Bahagian Kad (SearchCard) - Lebar tetap */}
        <div className="w-full md:w-[400px] bg-[#FBFAF7] rounded-2xl border border-gray-200 overflow-y-auto z-10 shadow-md p-2">
          <SearchCard />
        </div>
        
      </div>

    </main>
  );
}

export default Body;