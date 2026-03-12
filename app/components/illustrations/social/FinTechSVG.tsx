import React from 'react';

export default function FinTechSVG() {
  return (
    <svg viewBox="0 0 200 290" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="f-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#05070e"/><stop offset="100%" stop-color="#040610"/></linearGradient>
        <linearGradient id="f-card" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1a44ff"/><stop offset="100%" stop-color="#0d1f3c"/></linearGradient>
        <linearGradient id="f-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1a44ff" stop-opacity=".3"/><stop offset="100%" stop-color="#1a44ff" stop-opacity="0"/></linearGradient>
      </defs>
      <rect width="200" height="290" fill="url(#f-bg)"/>
      <ellipse cx="150" cy="60" rx="100" ry="80" fill="#1a44ff" fill-opacity=".05"/>
      <rect x="14" y="14" width="172" height="100" rx="12" fill="url(#f-card)"/>
      <ellipse cx="148" cy="48" rx="50" ry="50" fill="white" fill-opacity=".04"/>
      <rect x="14" y="14" width="172" height="100" rx="12" stroke="white" stroke-opacity=".1" stroke-width="1"/>
      <text x="28" y="38" fill="white" fill-opacity=".35" font-size="7" font-family="DM Mono,monospace" letter-spacing="2">CLOUDLANE PAY</text>
      <rect x="28" y="46" width="18" height="13" rx="2.5" fill="rgba(255,200,0,.25)" stroke="rgba(255,200,0,.4)" stroke-width=".8"/>
      <rect x="50" y="46" width="18" height="13" rx="2.5" fill="rgba(255,200,0,.14)" stroke="rgba(255,200,0,.28)" stroke-width=".8"/>
      <text x="28" y="80" fill="white" fill-opacity=".6" font-size="8.5" font-family="DM Mono,monospace" letter-spacing="3">•••• 4892</text>
      <text x="28" y="100" fill="white" fill-opacity=".3" font-size="6.5" font-family="DM Mono,monospace">SHUBHAM B.</text>
      <text x="154" y="100" fill="white" fill-opacity=".3" font-size="6.5" font-family="DM Mono,monospace">12/27</text>
      <rect x="14" y="124" width="82" height="48" rx="8" fill="#091a10" stroke="#00c851" stroke-opacity=".14" stroke-width="1"/>
      <text x="22" y="140" fill="#00c851" fill-opacity=".4" font-size="6" font-family="DM Mono,monospace">TODAY P&amp;L</text>
      <text x="22" y="162" fill="#00c851" font-size="18" font-weight="800" font-family="Syne,sans-serif">+₹8.4k</text>
      <rect x="104" y="124" width="82" height="48" rx="8" fill="#070c1a" stroke="#5b9cf6" stroke-opacity=".12" stroke-width="1"/>
      <text x="112" y="140" fill="#5b9cf6" fill-opacity=".4" font-size="6" font-family="DM Mono,monospace">PORTFOLIO</text>
      <text x="112" y="162" fill="#f0ede8" font-size="18" font-weight="800" font-family="Syne,sans-serif">₹4.2L</text>
      <rect x="14" y="182" width="172" height="90" rx="8" fill="#040810" stroke="white" stroke-opacity=".05" stroke-width="1"/>
      <text x="22" y="197" fill="white" fill-opacity=".2" font-size="6" font-family="DM Mono,monospace">6M PERFORMANCE</text>
      <path d="M22,256 L22,242 L50,236 L78,244 L106,228 L134,218 L162,208 L178,202 L178,256Z" fill="url(#f-area)"/>
      <path d="M22,242 L50,236 L78,244 L106,228 L134,218 L162,208 L178,202"
        stroke="#5b9cf6" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".8"/>
      <path d="M22,256 L22,248 L50,252 L78,248 L106,242 L134,244 L162,236 L178,232 L178,256Z" fill="#c8f135" fill-opacity=".05"/>
      <path d="M22,248 L50,252 L78,248 L106,242 L134,244 L162,236 L178,232"
        stroke="#c8f135" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".4"/>
      <text x="22" y="267" fill="white" fill-opacity=".15" font-size="5.5" font-family="DM Mono,monospace">Aug  Oct  Dec  Feb</text>
    </svg>
  );
}
