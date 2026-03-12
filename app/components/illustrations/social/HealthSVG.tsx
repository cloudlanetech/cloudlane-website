import React from 'react';

export default function HealthSVG() {
  return (
    <svg viewBox="0 0 200 290" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="h-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#071812"/>
          <stop offset="100%" stop-color="#050e0a"/>
        </linearGradient>
        <filter id="h-glow"><feGaussianBlur stdDeviation="3.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="200" height="290" fill="url(#h-bg)"/>
      <line x1="0" y1="72" x2="200" y2="72" stroke="#00c851" stroke-opacity=".04" stroke-width="1"/>
      <line x1="0" y1="144" x2="200" y2="144" stroke="#00c851" stroke-opacity=".04" stroke-width="1"/>
      <line x1="0" y1="216" x2="200" y2="216" stroke="#00c851" stroke-opacity=".04" stroke-width="1"/>
      <polyline points="0,112 18,112 30,85 40,140 52,70 62,135 72,112 108,112 120,96 128,128 136,112 200,112"
        stroke="#00c851" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".7">
        <animate attributeName="stroke-dasharray" values="0,600;600,0" dur="3s" repeatCount="indefinite"/>
      </polyline>
      <circle r="4.5" fill="#00c851" filter="url(#h-glow)">
        <animateMotion dur="3s" repeatCount="indefinite"
          path="M0,112 L18,112 L30,85 L40,140 L52,70 L62,135 L72,112 L108,112 L120,96 L128,128 L136,112 L200,112"/>
      </circle>
      <rect x="14" y="14" width="74" height="18" rx="4" fill="rgba(0,200,81,.1)" stroke="#00c851" stroke-opacity=".2" stroke-width=".8"/>
      <circle cx="23" cy="23" r="3" fill="#00c851"><animate attributeName="opacity" values="1;.3;1" dur="1.4s" repeatCount="indefinite"/></circle>
      <text x="30" y="27" fill="#00c851" font-size="7" font-family="DM Mono,monospace">MONITORING</text>
      <rect x="14" y="140" width="80" height="68" rx="8" fill="#071812" stroke="#00c851" stroke-opacity=".15" stroke-width="1"/>
      <text x="22" y="157" fill="#00c851" fill-opacity=".4" font-size="6" font-family="DM Mono,monospace">HEART RATE</text>
      <text x="22" y="177" fill="#00c851" font-size="22" font-weight="800" font-family="Syne,sans-serif">74</text>
      <text x="54" y="177" fill="#00c851" fill-opacity=".45" font-size="8" font-family="DM Mono,monospace">bpm</text>
      <rect x="22" y="182" width="54" height="3.5" rx="2" fill="#0a1a0e"/>
      <rect x="22" y="182" width="42" height="3.5" rx="2" fill="#00c851" fill-opacity=".5"/>
      <rect x="106" y="140" width="80" height="68" rx="8" fill="#070c1a" stroke="#5b9cf6" stroke-opacity=".15" stroke-width="1"/>
      <text x="114" y="157" fill="#5b9cf6" fill-opacity=".4" font-size="6" font-family="DM Mono,monospace">SpO₂</text>
      <text x="114" y="177" fill="#5b9cf6" font-size="22" font-weight="800" font-family="Syne,sans-serif">98%</text>
      <rect x="114" y="182" width="54" height="3.5" rx="2" fill="#0a1020"/>
      <rect x="114" y="182" width="51" height="3.5" rx="2" fill="#5b9cf6" fill-opacity=".5"/>
      <rect x="14" y="220" width="172" height="36" rx="7" fill="#050e08" stroke="white" stroke-opacity=".05" stroke-width=".8"/>
      <text x="22" y="234" fill="#5b9cf6" fill-opacity=".35" font-size="6" font-family="DM Mono,monospace">AI INSIGHT</text>
      <text x="22" y="247" fill="white" fill-opacity=".45" font-size="7" font-family="DM Mono,monospace">All vitals stable · Review in 4h</text>
      <rect x="14" y="264" width="172" height="18" rx="5" fill="#050e08" stroke="white" stroke-opacity=".04"/>
      <polyline points="22,276 38,272 54,275 70,269 86,271 102,266 118,268 134,264 150,266 172,263"
        stroke="#00c851" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".6"/>
    </svg>
  );
}
