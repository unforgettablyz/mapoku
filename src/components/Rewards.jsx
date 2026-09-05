import React, { useState } from 'react';

/*
  Rewards screen for mapOku, with a redeem popup.

  Flow:
  1. User taps a voucher they can afford  -> modal opens in "confirm" state
  2. User taps "Confirm redemption"       -> modal switches to "success" state,
                                             shows a voucher code + points deducted
  3. Points balance updates locally (useState)

  Matches project conventions: green #346F4B, mint #E7EFE9, field #F2F0E9,
  inline SVGs, Tailwind arbitrary values. Points start at 620 so the demo can
  actually redeem. Lift `points` to shared state later so the Header coin syncs.
*/

const REWARDS = [
  { id: 1, brand: 'Grab',        label: 'RM5 ride credit', cost: 350 },
  { id: 2, brand: 'Grab',        label: 'RM10 ride credit', cost: 500 },
  { id: 3, brand: "Touch 'n Go", label: 'RM3 reload',      cost: 300 },
];

// Simple fake code generator for the demo success screen.
function makeCode(brand) {
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  const prefix = brand.replace(/[^A-Za-z]/g, '').slice(0, 3).toUpperCase();
  return `${prefix}-${rand}`;
}

function TransitIcon() {
  return (
    <svg className="w-6 h-6 text-[#346F4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8m-8 4h8m-9 4h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v7a2 2 0 002 2zm0 0l-1 3m11-3l1 3" />
    </svg>
  );
}

function Rewards() {
  const [points, setPoints] = useState(620);
  const [selected, setSelected] = useState(null); // the reward being redeemed
  const [step, setStep] = useState('confirm');    // 'confirm' | 'success'
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);

  const openModal = (reward) => {
    if (points < reward.cost) return; // not enough points, ignore
    setSelected(reward);
    setStep('confirm');
    setCopied(false);
  };

  const confirmRedeem = () => {
    setPoints((p) => p - selected.cost);
    setCode(makeCode(selected.brand));
    setStep('success');
  };

  const closeModal = () => {
    setSelected(null);
    setStep('confirm');
    setCode('');
    setCopied(false);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked — user can still read the code
    }
  };

  return (
    <div className="flex flex-col h-full bg-transparent p-4 w-full gap-6">

      {/* Points balance hero */}
      <div className="relative overflow-hidden bg-[#1E2B22] rounded-2xl p-6 text-white">
        <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-white/5" />
        <span className="text-xs opacity-70 font-medium">Points balance</span>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-5xl font-extrabold tracking-tight">{points}</span>
          <span className="text-2xl">🪙</span>
        </div>
        <span className="text-xs opacity-70 mt-1 block">From 18 reports · 46 confirmations</span>
      </div>

      {/* How points work */}
      <div className="bg-[#E7EFE9] rounded-xl p-4 flex flex-col gap-1">
        <span className="text-sm font-bold text-gray-900">How points work</span>
        <p className="text-xs text-gray-600 leading-relaxed mt-1">
          Report a barrier, earn points when the community confirms it. Rewards are funded by
          transport partners — free for you, honest data for everyone.
        </p>
      </div>

      {/* Redeem list */}
      <div className="flex flex-col gap-3">
        <span className="text-sm font-bold text-gray-900">Redeem for transit credit</span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {REWARDS.map((r) => {
            const canRedeem = points >= r.cost;
            return (
              <button
                key={r.id}
                onClick={() => openModal(r)}
                disabled={!canRedeem}
                className={`text-left flex items-center justify-between bg-white rounded-xl p-3 shadow-sm transition-all ${
                  canRedeem ? 'cursor-pointer hover:shadow-md hover:border-[#346F4B] border-2 border-transparent' : 'opacity-60 cursor-not-allowed border-2 border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#E7EFE9] p-2 rounded-lg shadow-sm">
                    <TransitIcon />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">{r.label}</span>
                    <span className="text-xs text-gray-500">{r.brand} · simulated partner</span>
                  </div>
                </div>

                <span
                  className={`flex items-center gap-1 text-xs font-bold rounded-full px-3 py-2 ${
                    canRedeem ? 'bg-[#346F4B] text-white' : 'bg-[#F2F0E9] text-gray-400'
                  }`}
                >
                  {r.cost} 🪙
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Anti-spam note */}
      <div className="bg-[#F2F0E9] rounded-xl p-4">
        <p className="text-xs text-gray-600 leading-relaxed">
          Points unlock only after your report is confirmed by others — keeping data honest and
          blocking spam.
        </p>
      </div>

      {/* ---------- Redeem Modal ---------- */}
      {selected && (
        <div
          className="fixed inset-0 z-[1000] bg-black/40 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-sm bg-[#FBFAF7] rounded-2xl shadow-xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close button */}
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 grid place-items-center rounded-full bg-[#F2F0E9] hover:bg-gray-200 transition"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {step === 'confirm' ? (
              <>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="bg-[#E7EFE9] p-4 rounded-2xl">
                    <TransitIcon />
                  </div>
                  <h2 className="text-lg font-extrabold text-gray-900">Redeem this reward?</h2>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-gray-900">{selected.label}</span><br />
                    {selected.brand} · simulated partner
                  </p>
                </div>

                {/* cost breakdown */}
                <div className="bg-white rounded-xl p-4 my-5 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Cost</span>
                    <span className="font-bold text-gray-900">{selected.cost} 🪙</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Your balance</span>
                    <span className="font-bold text-gray-900">{points} 🪙</span>
                  </div>
                  <div className="border-t border-gray-200 my-1" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Balance after</span>
                    <span className="font-bold text-[#346F4B]">{points - selected.cost} 🪙</span>
                  </div>
                </div>

                <button
                  onClick={confirmRedeem}
                  className="w-full bg-[#346F4B] hover:bg-[#2A593C] text-white font-bold rounded-xl py-3.5 transition-colors"
                >
                  Confirm redemption
                </button>
                <button
                  onClick={closeModal}
                  className="w-full text-gray-500 font-medium text-sm py-3 mt-1 hover:text-gray-700 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center text-center gap-3">
                  {/* success check */}
                  <div className="bg-[#E7EFE9] p-4 rounded-full">
                    <svg className="w-8 h-8 text-[#346F4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-extrabold text-gray-900">Redeemed!</h2>
                  <p className="text-sm text-gray-600">
                    Your <span className="font-bold text-gray-900">{selected.label}</span> is ready.
                    Show this code to claim it.
                  </p>
                </div>

                {/* voucher code */}
                <div className="bg-white border-2 border-dashed border-[#346F4B] rounded-xl p-4 my-5 flex items-center justify-between">
                  <span className="font-mono font-bold text-lg text-gray-900 tracking-wider">{code}</span>
                  <button
                    onClick={copyCode}
                    className="text-xs font-bold text-[#346F4B] bg-[#E7EFE9] rounded-full px-3 py-2 hover:bg-[#d8e6db] transition"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                <button
                  onClick={closeModal}
                  className="w-full bg-[#346F4B] hover:bg-[#2A593C] text-white font-bold rounded-xl py-3.5 transition-colors"
                >
                  Done
                </button>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default Rewards;