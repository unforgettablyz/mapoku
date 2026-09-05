import './App.css'
import Header from './components/Header.jsx'
import Rewards from './components/Rewards.jsx'

function PreviewApp() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-[#F0EEE7] flex-1 w-full p-4 md:p-6">
        <div className="w-full bg-[#FBFAF7] rounded-2xl border border-gray-200 shadow-md p-6">
          <Rewards />
        </div>
      </main>
    </div>
  );
}

export default PreviewApp