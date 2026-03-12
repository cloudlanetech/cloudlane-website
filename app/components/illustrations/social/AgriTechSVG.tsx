import React from 'react';

export default function AgriTechSVG() {
  return (
    <svg viewBox="0 0 200 290" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="ag-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0e1c06"/><stop offset="100%" stop-color="#080e04"/></linearGradient></defs>
      <rect width="200" height="290" fill="url(#ag-bg)"/>
      <line x1="0" y1="38"  x2="200" y2="38"  stroke="#c8f135" stroke-opacity=".06" stroke-width="10"/>
      <line x1="0" y1="62"  x2="200" y2="62"  stroke="#c8f135" stroke-opacity=".04" stroke-width="10"/>
      <line x1="0" y1="86"  x2="200" y2="86"  stroke="#c8f135" stroke-opacity=".06" stroke-width="10"/>
      <line x1="0" y1="110" x2="200" y2="110" stroke="#c8f135" stroke-opacity=".04" stroke-width="10"/>
      <line x1="0" y1="134" x2="200" y2="134" stroke="#c8f135" stroke-opacity=".03" stroke-width="10"/>
      <rect x="0" y="0" width="72" height="150" fill="#c8f135" fill-opacity=".03"/>
      <rect x="130" y="0" width="70" height="80" fill="#ff6400" fill-opacity=".04"/>
      <rect x="8" y="8" width="50" height="14" rx="3" fill="#c8f135" fill-opacity=".12"/>
      <text x="33" y="18" text-anchor="middle" fill="#c8f135" font-size="6" font-family="DM Mono,monospace">OPTIMAL</text>
      <rect x="134" y="8" width="58" height="14" rx="3" fill="#ff6400" fill-opacity=".14"/>
      <text x="163" y="18" text-anchor="middle" fill="#ff8c44" font-size="6" font-family="DM Mono,monospace">LOW H₂O ⚠</text>
      <defs><filter id="d-glow"><feGaussianBlur stdDeviation="3.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g transform="translate(100,80)" filter="url(#d-glow)">
        <rect x="-11" y="-7" width="22" height="14" rx="3.5" fill="#c8f135" fill-opacity=".8"/>
        <line x1="-11" y1="-7" x2="-18" y2="-14" stroke="#c8f135" stroke-width="1.5" stroke-opacity=".55"/>
        <line x1="11"  y1="-7" x2="18"  y2="-14" stroke="#c8f135" stroke-width="1.5" stroke-opacity=".55"/>
        <line x1="-11" y1="7"  x2="-18" y2="14"  stroke="#c8f135" stroke-width="1.5" stroke-opacity=".55"/>
        <line x1="11"  y1="7"  x2="18"  y2="14"  stroke="#c8f135" stroke-width="1.5" stroke-opacity=".55"/>
        <circle cx="-18" cy="-14" r="5" fill="#0b1604" stroke="#c8f135" stroke-width="1" stroke-opacity=".65"/>
        <circle cx="18"  cy="-14" r="5" fill="#0b1604" stroke="#c8f135" stroke-width="1" stroke-opacity=".65"/>
        <circle cx="-18" cy="14"  r="5" fill="#0b1604" stroke="#c8f135" stroke-width="1" stroke-opacity=".65"/>
        <circle cx="18"  cy="14"  r="5" fill="#0b1604" stroke="#c8f135" stroke-width="1" stroke-opacity=".65"/>
      </g>
      <rect x="8" y="158" width="88" height="74" rx="9" fill="#06100a" stroke="#c8f135" stroke-opacity=".14" stroke-width="1"/>
      <text x="18" y="174" fill="#c8f135" fill-opacity=".4" font-size="6" font-family="DM Mono,monospace">MOISTURE</text>
      <text x="18" y="196" fill="#c8f135" font-size="24" font-weight="800" font-family="Syne,sans-serif">68%</text>
      <rect x="18" y="202" width="58" height="4" rx="2" fill="#0b1604"/>
      <rect x="18" y="202" width="40" height="4" rx="2" fill="#c8f135" fill-opacity=".5"/>
      <text x="18" y="218" fill="white" fill-opacity=".18" font-size="6" font-family="DM Mono,monospace">Sector 3 · Field A</text>
      <rect x="104" y="158" width="88" height="74" rx="9" fill="#06100a" stroke="#c8f135" stroke-opacity=".1" stroke-width="1"/>
      <text x="114" y="174" fill="#c8f135" fill-opacity=".35" font-size="6" font-family="DM Mono,monospace">AI SUGGESTS</text>
      <text x="114" y="190" fill="white" fill-opacity=".6" font-size="8" font-family="DM Mono,monospace">Irrigate</text>
      <text x="114" y="202" fill="white" fill-opacity=".6" font-size="8" font-family="DM Mono,monospace">Zone B</text>
      <text x="114" y="214" fill="white" fill-opacity=".6" font-size="8" font-family="DM Mono,monospace">in 2h</text>
      <text x="114" y="226" fill="#c8f135" fill-opacity=".45" font-size="6" font-family="DM Mono,monospace">94% confident</text>
      <rect x="8" y="240" width="184" height="42" rx="8" fill="#050e06" stroke="#c8f135" stroke-opacity=".08" stroke-width=".8"/>
      <text x="18" y="254" fill="#c8f135" fill-opacity=".3" font-size="6" font-family="DM Mono,monospace">7-DAY FORECAST</text>
      <text x="18" y="267" fill="white" fill-opacity=".18" font-size="6.5" font-family="DM Mono,monospace">Mon</text>
      <text x="50" y="267" fill="white" fill-opacity=".18" font-size="6.5" font-family="DM Mono,monospace">Tue</text>
      <text x="82" y="267" fill="white" fill-opacity=".18" font-size="6.5" font-family="DM Mono,monospace">Wed</text>
      <text x="114" y="267" fill="white" fill-opacity=".18" font-size="6.5" font-family="DM Mono,monospace">Thu</text>
      <text x="146" y="267" fill="white" fill-opacity=".18" font-size="6.5" font-family="DM Mono,monospace">Fri</text>
      <text x="178" y="267" fill="white" fill-opacity=".18" font-size="6.5" font-family="DM Mono,monospace">Sat</text>
      <rect x="18" y="270" width="18" height="6" rx="2" fill="#c8f135" fill-opacity=".4"/>
      <rect x="50" y="272" width="18" height="4" rx="2" fill="#c8f135" fill-opacity=".3"/>
      <rect x="82" y="268" width="18" height="8" rx="2" fill="#c8f135" fill-opacity=".5"/>
      <rect x="114" y="270" width="18" height="6" rx="2" fill="#ff8c44" fill-opacity=".4"/>
      <rect x="146" y="269" width="18" height="7" rx="2" fill="#c8f135" fill-opacity=".35"/>
      <rect x="178" y="271" width="14" height="5" rx="2" fill="#c8f135" fill-opacity=".3"/>
    </svg>
  );
}
