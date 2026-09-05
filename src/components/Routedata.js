/*
  Shared dummy data for the demo, so MapView and AIRecommendation stay in sync.
  Coordinates are around MMU Cyberjaya (your current map center).

  Scenario: user heads to "Maybank Seksyen 7"-style destination that has 3
  obstacles; the AI suggests a nearby step-free alternative. The map draws:
    - origin marker (A)
    - the requested destination (has obstacles) marker (B)
    - the AI-suggested safer destination marker (C)
    - obstacle pins along the standard route
    - standard route polyline (grey, passes obstacles)
    - OKU-safe route polyline (green, detours around them to C)
*/

// Anchor near MMU Cyberjaya
export const ORIGIN = { lat: 2.9272, lng: 101.6409, label: 'Your location' };

export const REQUESTED = {
  name: 'Maybank Seksyen 7',
  area: 'Cyberjaya',
  coords: { lat: 2.9235, lng: 101.6465 },
  obstacles: [
    { type: 'No ramp — stairs only at entrance', confirms: 9, ago: '3h ago', coords: { lat: 2.9258, lng: 101.6432 } },
    { type: 'Lift out of service',                confirms: 5, ago: '1d ago', coords: { lat: 2.9247, lng: 101.6448 } },
    { type: 'Accessible parking blocked by works', confirms: 3, ago: '6h ago', coords: { lat: 2.9240, lng: 101.6458 } },
  ],
};

export const SUGGESTED = {
  name: 'Maybank Seksyen 9',
  area: 'Cyberjaya',
  coords: { lat: 2.9298, lng: 101.6452 },
  distanceAway: '1.4 km away',
  extraTime: '+4 min',
  reasons: [
    'Step-free entrance with a ramp confirmed working 2 days ago',
    'Ground-floor counters — no lift needed',
    'Accessible parking available at the front',
    'Zero obstacles reported in the last 30 days',
  ],
};

// Polyline paths (arrays of [lat,lng]). Hand-plotted so they look like real streets.
// Standard route: origin -> straight through the obstacle cluster -> requested dest.
export const STANDARD_ROUTE = [
  [ORIGIN.lat, ORIGIN.lng],
  [2.9265, 101.6420],
  [2.9258, 101.6432],
  [2.9247, 101.6448],
  [2.9240, 101.6458],
  [REQUESTED.coords.lat, REQUESTED.coords.lng],
];

// OKU-safe route: origin -> curves north around the obstacles -> suggested dest.
export const OKU_ROUTE = [
  [ORIGIN.lat, ORIGIN.lng],
  [2.9280, 101.6418],
  [2.9292, 101.6435],
  [2.9296, 101.6446],
  [SUGGESTED.coords.lat, SUGGESTED.coords.lng],
];