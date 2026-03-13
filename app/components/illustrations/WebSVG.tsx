import React from 'react';

export default function WebSVG() {
  return (
    <svg viewBox="0 0 560 315" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g-bg5" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#050709" />
          <stop offset="100%" stop-color="#07080c" />
        </linearGradient>
        <filter id="f-glow5">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="g-ambient5" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stop-color="#63b3ff" stop-opacity=".05" />
          <stop offset="100%" stop-color="#63b3ff" stop-opacity="0" />
        </radialGradient>
      </defs>

      <rect width="560" height="315" fill="url(#g-bg5)" />
      <rect width="560" height="315" fill="url(#g-ambient5)" />

      {/* Browser outer frame */}
      <rect x="28" y="22" width="504" height="272" rx="12" fill="#08101c" stroke="#1a2d45" stroke-width="1.2" />
      {/* Browser chrome bar */}
      <rect x="28" y="22" width="504" height="34" rx="12" fill="#0d1928" />
      <rect x="28" y="44" width="504" height="12" fill="#0d1928" />
      {/* Dots */}
      <circle cx="50" cy="39" r="5" fill="#ff5f57" opacity=".8" />
      <circle cx="66" cy="39" r="5" fill="#febc2e" opacity=".8" />
      <circle cx="82" cy="39" r="5" fill="#28c840" opacity=".8" />
      {/* URL bar */}
      <rect x="110" y="30" width="260" height="18" rx="5" fill="#060e18" />
      <text x="240" y="43" text-anchor="middle" fill="rgba(99,179,255,.5)" font-size="8" font-family="DM Mono,monospace">app.cloudlane.in/dashboard</text>

      {/* Inside browser: split layout */}
      {/* LEFT: sidebar nav */}
      <rect x="28" y="56" width="70" height="238" fill="#060d18" />
      {/* nav items */}
      <rect x="38" y="70" width="50" height="8" rx="3" fill="#63b3ff" opacity=".5" />
      <rect x="38" y="85" width="42" height="8" rx="3" fill="#1a2d45" />
      <rect x="38" y="100" width="46" height="8" rx="3" fill="#1a2d45" />
      <rect x="38" y="115" width="38" height="8" rx="3" fill="#1a2d45" />
      <rect x="38" y="130" width="44" height="8" rx="3" fill="#1a2d45" />
      {/* sidebar icons */}
      <rect x="36" y="162" width="8" height="8" rx="2" fill="#63b3ff" opacity=".3" />
      <rect x="36" y="178" width="8" height="8" rx="2" fill="#63b3ff" opacity=".2" />
      <rect x="36" y="194" width="8" height="8" rx="2" fill="#63b3ff" opacity=".2" />
      <rect x="36" y="210" width="8" height="8" rx="2" fill="#63b3ff" opacity=".15" />

      {/* MAIN content area */}
      {/* top stat row */}
      {/* Card A */}
      <rect x="106" y="66" width="100" height="56" rx="7" fill="#0d1a2e" stroke="#1e3a5f" stroke-width=".8" />
      <text x="116" y="82" fill="rgba(99,179,255,.45)" font-size="7" font-family="DM Mono,monospace">TOTAL USERS</text>
      <text x="116" y="100" fill="#f0ede8" font-size="18" font-weight="bold" font-family="Syne,sans-serif">24.8k</text>
      <text x="116" y="114" fill="#00c851" font-size="7.5" font-family="DM Mono,monospace">▲ 18.2%</text>

      {/* Card B */}
      <rect x="214" y="66" width="100" height="56" rx="7" fill="#0d1a2e" stroke="#1e3a5f" stroke-width=".8" />
      <text x="224" y="82" fill="rgba(99,179,255,.45)" font-size="7" font-family="DM Mono,monospace">DEPLOYMENTS</text>
      <text x="224" y="100" fill="#c8f135" font-size="18" font-weight="bold" font-family="Syne,sans-serif">1,340</text>
      <text x="224" y="114" fill="#c8f135" font-size="7.5" font-family="DM Mono,monospace">▲ 6.4%</text>

      {/* Card C */}
      <rect x="322" y="66" width="100" height="56" rx="7" fill="#0d1a2e" stroke="#1e3a5f" stroke-width=".8" />
      <text x="332" y="82" fill="rgba(99,179,255,.45)" font-size="7" font-family="DM Mono,monospace">API CALLS</text>
      <text x="332" y="100" fill="#f0ede8" font-size="18" font-weight="bold" font-family="Syne,sans-serif">9.2M</text>
      <text x="332" y="114" fill="#00c851" font-size="7.5" font-family="DM Mono,monospace">▲ 33.1%</text>

      {/* Card D */}
      <rect x="430" y="66" width="92" height="56" rx="7" fill="#0d1a2e" stroke="#1e3a5f" stroke-width=".8" />
      <text x="440" y="82" fill="rgba(99,179,255,.45)" font-size="7" font-family="DM Mono,monospace">UPTIME</text>
      <text x="440" y="100" fill="#00c851" font-size="18" font-weight="bold" font-family="Syne,sans-serif">99.9%</text>
      <text x="440" y="114" fill="rgba(240,237,232,.3)" font-size="7.5" font-family="DM Mono,monospace">30d avg</text>

      {/* main chart */}
      <rect x="106" y="132" width="280" height="140" rx="7" fill="#08101c" stroke="#1a2d45" stroke-width=".8" />
      <text x="118" y="148" fill="rgba(240,237,232,.4)" font-size="7.5" font-family="DM Mono,monospace">TRAFFIC OVERVIEW · LIVE</text>
      <defs>
        <linearGradient id="g-chartfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#63b3ff" stop-opacity=".25" />
          <stop offset="100%" stop-color="#63b3ff" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="g-chartfill2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c8f135" stop-opacity=".15" />
          <stop offset="100%" stop-color="#c8f135" stop-opacity="0" />
        </linearGradient>
      </defs>
      {/* area 1 */}
      <path d="M116,252 L116,228 L140,218 L165,225 L190,208 L215,215 L240,200 L265,210 L290,195 L315,205 L340,188 L365,195 L365,252 Z" fill="url(#g-chartfill)" />
      <path d="M116,228 L140,218 L165,225 L190,208 L215,215 L240,200 L265,210 L290,195 L315,205 L340,188 L365,195" stroke="#63b3ff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".8" />
      {/* area 2 */}
      <path d="M116,252 L116,238 L140,244 L165,235 L190,240 L215,230 L240,236 L265,228 L290,234 L315,225 L340,230 L365,220 L365,252 Z" fill="url(#g-chartfill2)" />
      <path d="M116,238 L140,244 L165,235 L190,240 L215,230 L240,236 L265,228 L290,234 L315,225 L340,230 L365,220" stroke="#c8f135" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".6" />
      {/* x grid lines */}
      <line x1="116" y1="160" x2="365" y2="160" stroke="#1a2d45" stroke-width=".5" />
      <line x1="116" y1="185" x2="365" y2="185" stroke="#1a2d45" stroke-width=".5" />
      <line x1="116" y1="210" x2="365" y2="210" stroke="#1a2d45" stroke-width=".5" />
      <line x1="116" y1="235" x2="365" y2="235" stroke="#1a2d45" stroke-width=".5" />
      {/* tooltip */}
      <rect x="268" y="175" width="58" height="28" rx="4" fill="#0d1f35" stroke="#63b3ff" stroke-width=".8" stroke-opacity=".5" />
      <text x="297" y="188" text-anchor="middle" fill="#f0ede8" font-size="8" font-family="DM Mono,monospace">9,284</text>
      <text x="297" y="198" text-anchor="middle" fill="#63b3ff" font-size="7" font-family="DM Mono,monospace" opacity=".6">req/min</text>
      <line x1="293" y1="203" x2="293" y2="213" stroke="#63b3ff" stroke-width=".8" opacity=".4" />
      <circle cx="293" cy="195" r="3" fill="#63b3ff" opacity=".8" filter="url(#f-glow5)" />

      {/* right panel: recent deploys list */}
      <rect x="394" y="132" width="130" height="140" rx="7" fill="#08101c" stroke="#1a2d45" stroke-width=".8" />
      <text x="406" y="148" fill="rgba(240,237,232,.4)" font-size="7.5" font-family="DM Mono,monospace">RECENT DEPLOYS</text>
      {/* deploy items */}
      <g font-family="DM Mono,monospace" font-size="7.5">
        <circle cx="406" cy="165" r="3" fill="#00c851" opacity=".9" />
        <text x="414" y="168" fill="rgba(240,237,232,.6)">main → prod</text>
        <text x="414" y="179" fill="rgba(240,237,232,.2)" font-size="7">2 min ago · ✓ passed</text>

        <circle cx="406" cy="192" r="3" fill="#00c851" opacity=".9" />
        <text x="414" y="195" fill="rgba(240,237,232,.6)">feat/ui → stg</text>
        <text x="414" y="206" fill="rgba(240,237,232,.2)" font-size="7">18 min ago · ✓ passed</text>

        <circle cx="406" cy="219" r="3" fill="#ffcc00" opacity=".8" />
        <text x="414" y="222" fill="rgba(240,237,232,.6)">api/v2 → dev</text>
        <text x="414" y="233" fill="rgba(240,237,232,.2)" font-size="7">1h ago · ⚠ warning</text>

        <circle cx="406" cy="246" r="3" fill="#00c851" opacity=".9" />
        <text x="414" y="249" fill="rgba(240,237,232,.6)">hotfix → prod</text>
        <text x="414" y="260" fill="rgba(240,237,232,.2)" font-size="7">3h ago · ✓ passed</text>
      </g>
    </svg>
  );
}
