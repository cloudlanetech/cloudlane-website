import React from 'react';

export default function MobileSVG() {
  return (
    <svg viewBox="0 0 560 315" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g-bg6" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#04060c"/>
          <stop offset="100%" stop-color="#060810"/>
        </linearGradient>
        <linearGradient id="g-phonescreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0d1e38"/>
          <stop offset="100%" stop-color="#060c18"/>
        </linearGradient>
        <linearGradient id="g-herocard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a44ff"/>
          <stop offset="100%" stop-color="#0d1f3c"/>
        </linearGradient>
        <filter id="f-phoneglow">
          <feGaussianBlur stdDeviation="18" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="f-cardglow">
          <feGaussianBlur stdDeviation="6" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="f-notifglow">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="g-screenglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1a44ff" stop-opacity=".2"/>
          <stop offset="100%" stop-color="#1a44ff" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="560" height="315" fill="url(#g-bg6)"/>

      {/* background glow from phone screen */}
      <ellipse cx="280" cy="157" rx="130" ry="150" fill="url(#g-screenglow)" filter="url(#f-phoneglow)"/>

      {/* MAIN PHONE */}
      <g transform="translate(280,157)">
        {/* outer shell */}
        <rect x="-58" y="-138" width="116" height="276" rx="22" fill="#0a0c14" stroke="#2a3a55" stroke-width="2"/>
        {/* screen bezel */}
        <rect x="-50" y="-128" width="100" height="256" rx="16" fill="url(#g-phonescreen)"/>

        {/* dynamic island */}
        <rect x="-14" y="-122" width="28" height="10" rx="5" fill="#06080e"/>

        {/* status bar */}
        <text x="-40" y="-108" fill="rgba(240,237,232,.4)" font-size="7" font-family="DM Mono,monospace">9:41</text>
        <text x="26" y="-108" fill="rgba(240,237,232,.4)" font-size="7" font-family="DM Mono,monospace">●●●</text>

        {/* HERO CARD (credit card style) */}
        <rect x="-44" y="-100" width="88" height="52" rx="10" fill="url(#g-herocard)"/>
        {/* card shine */}
        <rect x="-44" y="-100" width="88" height="52" rx="10" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="1"/>
        <ellipse cx="20" cy="-84" rx="40" ry="20" fill="rgba(255,255,255,.04)" transform="rotate(-20 20 -84)"/>
        {/* card text */}
        <text x="-36" y="-84" fill="rgba(255,255,255,.5)" font-size="7" font-family="DM Mono,monospace">CLOUDLANE</text>
        <text x="-36" y="-68" fill="rgba(255,255,255,.7)" font-size="8" font-family="DM Mono,monospace">•••• •••• 4892</text>
        <text x="-36" y="-57" fill="rgba(255,255,255,.4)" font-size="6.5" font-family="DM Mono,monospace">SHUBHAM B.</text>
        <circle cx="28" cy="-64" r="10" fill="rgba(255,153,0,.2)" stroke="rgba(255,153,0,.4)" stroke-width="1"/>
        <circle cx="36" cy="-64" r="10" fill="rgba(255,153,0,.15)" stroke="rgba(255,153,0,.3)" stroke-width="1"/>

        {/* quick stats row */}
        <rect x="-44" y="-40" width="26" height="26" rx="6" fill="#0a1525" stroke="#1e3a5f" stroke-width=".7"/>
        <text x="-31" y="-25" text-anchor="middle" fill="#c8f135" font-size="9" font-weight="bold" font-family="Syne,sans-serif">↑</text>
        <text x="-31" y="-17" text-anchor="middle" fill="rgba(99,179,255,.5)" font-size="5.5" font-family="DM Mono,monospace">TRAFFIC</text>

        <rect x="-14" y="-40" width="26" height="26" rx="6" fill="#0a1525" stroke="#1e3a5f" stroke-width=".7"/>
        <text x="0" y="-26" text-anchor="middle" fill="#f0ede8" font-size="8" font-weight="bold" font-family="Syne,sans-serif">4.9★</text>
        <text x="0" y="-17" text-anchor="middle" fill="rgba(99,179,255,.5)" font-size="5.5" font-family="DM Mono,monospace">RATING</text>

        <rect x="16" y="-40" width="26" height="26" rx="6" fill="#0a1525" stroke="#c8f135" stroke-width=".7" stroke-opacity=".5"/>
        <text x="30" y="-26" text-anchor="middle" fill="#c8f135" font-size="8" font-weight="bold" font-family="Syne,sans-serif">99%</text>
        <text x="30" y="-17" text-anchor="middle" fill="rgba(200,241,53,.4)" font-size="5.5" font-family="DM Mono,monospace">UPTIME</text>

        {/* activity graph mini */}
        <rect x="-44" y="-6" width="88" height="40" rx="6" fill="#070e1a"/>
        <text x="-36" y="6" fill="rgba(240,237,232,.25)" font-size="6" font-family="DM Mono,monospace">LIVE ACTIVITY</text>
        <polyline points="-38,26 -28,20 -18,24 -8,14 2,18 12,10 22,16 32,8 40,12" stroke="#63b3ff" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".8"/>
        <polyline points="-38,26 -28,20 -18,24 -8,14 2,18 12,10 22,16 32,8 40,12" stroke="#63b3ff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".05"/>
        <circle cx="40" cy="12" r="3" fill="#63b3ff" opacity=".9"/>
        <circle cx="40" cy="12" r="6" fill="none" stroke="#63b3ff" stroke-width=".8" opacity=".3">
          <animate attributeName="r" values="3;8;3" dur="1.5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values=".4;0;.4" dur="1.5s" repeatCount="indefinite"/>
        </circle>

        {/* notification list */}
        <rect x="-44" y="42" width="88" height="18" rx="5" fill="#0d1830"/>
        <circle cx="-36" cy="51" r="4" fill="#00c851" opacity=".8"/>
        <text x="-29" y="54" fill="rgba(240,237,232,.55)" font-size="7.5" font-family="DM Mono,monospace">Deploy success</text>

        <rect x="-44" y="64" width="88" height="18" rx="5" fill="#0d1830"/>
        <circle cx="-36" cy="73" r="4" fill="#63b3ff" opacity=".7"/>
        <text x="-29" y="76" fill="rgba(240,237,232,.55)" font-size="7.5" font-family="DM Mono,monospace">New user signup</text>

        <rect x="-44" y="86" width="88" height="18" rx="5" fill="#0d1830"/>
        <circle cx="-36" cy="95" r="4" fill="#c8f135" opacity=".7"/>
        <text x="-29" y="98" fill="rgba(240,237,232,.55)" font-size="7.5" font-family="DM Mono,monospace">API threshold ↑</text>

        {/* home bar */}
        <rect x="-20" y="116" width="40" height="4" rx="2" fill="rgba(240,237,232,.15)"/>

        {/* screen border glow */}
        <rect x="-50" y="-128" width="100" height="256" rx="16" fill="none" stroke="#63b3ff" stroke-width=".6" opacity=".2"/>
      </g>

      {/* FLOATING NOTIFICATION CARDS */}
      {/* Left top: push notification */}
      <g transform="translate(90,72)" filter="url(#f-notifglow)">
        <rect x="0" y="0" width="148" height="52" rx="12" fill="#0d1828" stroke="#1e3a5f" stroke-width="1"/>
        <rect x="0" y="0" width="148" height="52" rx="12" fill="none" stroke="#63b3ff" stroke-width=".5" opacity=".3"/>
        <rect x="10" y="12" width="28" height="28" rx="7" fill="#0a1f38"/>
        <text x="24" y="30" text-anchor="middle" fill="#63b3ff" font-size="14">📱</text>
        <text x="46" y="22" fill="rgba(240,237,232,.7)" font-size="8" font-family="Syne,sans-serif" font-weight="700">CloudLane App</text>
        <text x="46" y="34" fill="rgba(240,237,232,.4)" font-size="7" font-family="DM Mono,monospace">Build shipped to TestFlight</text>
        <text x="46" y="44" fill="rgba(99,179,255,.5)" font-size="6.5" font-family="DM Mono,monospace">now</text>
      </g>

      {/* Right top: performance */}
      <g transform="translate(378,60)" filter="url(#f-notifglow)">
        <rect x="0" y="0" width="140" height="60" rx="12" fill="#0d1828" stroke="#1e3a5f" stroke-width="1"/>
        <rect x="0" y="0" width="140" height="60" rx="12" fill="none" stroke="#c8f135" stroke-width=".5" opacity=".3"/>
        <text x="12" y="18" fill="rgba(240,237,232,.5)" font-size="7" font-family="DM Mono,monospace" letter-spacing="1">PERFORMANCE</text>
        <text x="12" y="36" fill="#c8f135" font-size="22" font-weight="bold" font-family="Syne,sans-serif">98</text>
        <text x="42" y="36" fill="rgba(240,237,232,.4)" font-size="10" font-family="Syne,sans-serif">/100</text>
        <rect x="12" y="44" width="80" height="6" rx="3" fill="#0a1525"/>
        <rect x="12" y="44" width="78" height="6" rx="3" fill="#c8f135" opacity=".6"/>
      </g>

      {/* Left bottom: user metric */}
      <g transform="translate(70,196)" filter="url(#f-notifglow)">
        <rect x="0" y="0" width="130" height="56" rx="12" fill="#0d1828" stroke="#1e3a5f" stroke-width="1"/>
        <rect x="0" y="0" width="130" height="56" rx="12" fill="none" stroke="#00c851" stroke-width=".5" opacity=".3"/>
        <text x="12" y="18" fill="rgba(240,237,232,.4)" font-size="7" font-family="DM Mono,monospace">DOWNLOADS</text>
        <text x="12" y="38" fill="#f0ede8" font-size="20" font-weight="bold" font-family="Syne,sans-serif">12.4k</text>
        <text x="12" y="50" fill="#00c851" font-size="7" font-family="DM Mono,monospace">▲ 24% this week</text>
      </g>

      {/* Right bottom: tech stack */}
      <g transform="translate(378,210)" filter="url(#f-notifglow)">
        <rect x="0" y="0" width="140" height="62" rx="12" fill="#0d1828" stroke="#1e3a5f" stroke-width="1"/>
        <rect x="0" y="0" width="140" height="62" rx="12" fill="none" stroke="#63b3ff" stroke-width=".5" opacity=".2"/>
        <text x="12" y="18" fill="rgba(240,237,232,.4)" font-size="7" font-family="DM Mono,monospace">BUILT WITH</text>
        <g font-size="7.5" font-family="DM Mono,monospace">
          <rect x="10" y="24" width="36" height="14" rx="4" fill="#0a1525" stroke="#1e3a5f" stroke-width=".5"/>
          <text x="28" y="34" text-anchor="middle" fill="#63b3ff" opacity=".8">React</text>
          <rect x="50" y="24" width="40" height="14" rx="4" fill="#0a1525" stroke="#1e3a5f" stroke-width=".5"/>
          <text x="70" y="34" text-anchor="middle" fill="#63b3ff" opacity=".8">Native</text>
          <rect x="94" y="24" width="36" height="14" rx="4" fill="#0a1525" stroke="#1e3a5f" stroke-width=".5"/>
          <text x="112" y="34" text-anchor="middle" fill="#63b3ff" opacity=".8">Expo</text>
          <rect x="10" y="42" width="42" height="14" rx="4" fill="#0a1525" stroke="#1e3a5f" stroke-width=".5"/>
          <text x="31" y="52" text-anchor="middle" fill="#c8f135" opacity=".8">FastAPI</text>
          <rect x="56" y="42" width="36" height="14" rx="4" fill="#0a1525" stroke="#1e3a5f" stroke-width=".5"/>
          <text x="74" y="52" text-anchor="middle" fill="#63b3ff" opacity=".7">AWS</text>
        </g>
      </g>

      {/* connecting lines from phone to cards */}
      <line x1="230" y1="120" x2="238" y2="105" stroke="#63b3ff" stroke-width=".6" stroke-dasharray="3,3" opacity=".2"/>
      <line x1="330" y1="115" x2="378" y2="100" stroke="#c8f135" stroke-width=".6" stroke-dasharray="3,3" opacity=".2"/>
      <line x1="228" y1="200" x2="200" y2="220" stroke="#00c851" stroke-width=".6" stroke-dasharray="3,3" opacity=".2"/>
      <line x1="332" y1="210" x2="378" y2="235" stroke="#63b3ff" stroke-width=".6" stroke-dasharray="3,3" opacity=".2"/>

      {/* floor glow */}
      <ellipse cx="280" cy="298" rx="80" ry="6" fill="#1a44ff" opacity=".06"/>
    </svg>
  );
}
