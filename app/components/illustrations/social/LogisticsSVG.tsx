import React from 'react';

export default function LogisticsSVG() {
  return (
    <svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="220" height="200" fill="#060c18"/>
      <line x1="0" y1="50"  x2="220" y2="50"  stroke="#5b9cf6" stroke-opacity=".04"/>
      <line x1="0" y1="100" x2="220" y2="100" stroke="#5b9cf6" stroke-opacity=".04"/>
      <line x1="0" y1="150" x2="220" y2="150" stroke="#5b9cf6" stroke-opacity=".04"/>
      <line x1="55"  y1="0" x2="55"  y2="200" stroke="#5b9cf6" stroke-opacity=".04"/>
      <line x1="110" y1="0" x2="110" y2="200" stroke="#5b9cf6" stroke-opacity=".04"/>
      <line x1="165" y1="0" x2="165" y2="200" stroke="#5b9cf6" stroke-opacity=".04"/>
      <path d="M28,162 Q80,80 140,56 Q180,38 196,88"
        stroke="#5b9cf6" stroke-width="1.4" stroke-dasharray="5,4" fill="none" opacity=".4">
        <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="2s" repeatCount="indefinite"/>
      </path>
      <path d="M28,162 Q104,140 162,112 Q188,98 196,88"
        stroke="#c8f135" stroke-width="1" stroke-dasharray="4,4" fill="none" opacity=".28">
        <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="2.6s" repeatCount="indefinite"/>
      </path>
      <defs><filter id="cn"><feGaussianBlur stdDeviation="3.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <circle cx="28"  cy="162" r="8"  fill="#0a1828" stroke="#5b9cf6" stroke-opacity=".8" stroke-width="1.4"/>
      <circle cx="28"  cy="162" r="3.5" fill="#5b9cf6" opacity=".9"/>
      <circle cx="140" cy="56"  r="7"  fill="#0a1828" stroke="#c8f135" stroke-opacity=".7" stroke-width="1.2"/>
      <circle cx="140" cy="56"  r="3"  fill="#c8f135" opacity=".9"/>
      <circle cx="196" cy="88"  r="8"  fill="#0a1828" stroke="#5b9cf6" stroke-opacity=".8" stroke-width="1.4"/>
      <circle cx="196" cy="88"  r="3.5" fill="#5b9cf6" opacity=".9"/>
      <text x="8"   y="178" fill="#5b9cf6" fill-opacity=".45" font-size="6.5" font-family="DM Mono,monospace">MUMBAI</text>
      <text x="118" y="48"  fill="#c8f135" fill-opacity=".55" font-size="6.5" font-family="DM Mono,monospace">DELHI</text>
      <text x="160" y="104" fill="#5b9cf6" fill-opacity=".45" font-size="6.5" font-family="DM Mono,monospace">BLR</text>
      <g filter="url(#cn)">
        <rect width="13" height="8" rx="2" fill="#c8f135" fill-opacity=".85">
          <animateMotion dur="4s" repeatCount="indefinite"
            path="M28,162 Q80,80 140,56 Q180,38 196,88"/>
        </rect>
      </g>
      <rect x="116" y="128" width="96" height="44" rx="8" fill="#0a1828" stroke="#5b9cf6" stroke-opacity=".12" stroke-width="1"/>
      <text x="126" y="144" fill="#5b9cf6" fill-opacity=".35" font-size="6" font-family="DM Mono,monospace">NEXT ETA</text>
      <text x="126" y="162" fill="#f0ede8" font-size="14" font-weight="800" font-family="Syne,sans-serif">2h 14m</text>
      <text x="175" y="162" fill="#5b9cf6" fill-opacity=".4" font-size="7" font-family="DM Mono,monospace">MUM</text>
      <rect x="10" y="10" width="108" height="20" rx="5" fill="#0a1828" stroke="white" stroke-opacity=".07" stroke-width="1"/>
      <circle cx="22" cy="20" r="3" fill="#c8f135" fill-opacity=".85"/>
      <text x="30" y="24" fill="white" fill-opacity=".4" font-size="7" font-family="DM Mono,monospace">Live Tracking · ON</text>
    </svg>
  );
}
