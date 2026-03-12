import React from 'react';

export default function PropTechSVG() {
  return (
    <svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="p-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0d1118"/><stop offset="100%" stop-color="#06080e"/></linearGradient></defs>
      <rect width="220" height="200" fill="url(#p-bg)"/>
      <rect x="0" y="160" width="220" height="40" fill="white" fill-opacity=".02"/>
      <g transform="translate(110,120) scale(0.8) rotate(-15)">
        <path d="M-60,0 L0,-50 L60,0 L60,60 L-60,60 Z" fill="#0d1f35" stroke="#5b9cf6" stroke-opacity=".3" stroke-width="2"/>
        <path d="M-60,0 L0,-50 L60,0" fill="none" stroke="#5b9cf6" stroke-opacity=".6" stroke-width="2.5"/>
        <rect x="-15" y="25" width="30" height="35" fill="#5b9cf6" fill-opacity=".15" stroke="#5b9cf6" stroke-opacity=".4" stroke-width="1.2"/>
        <circle cx="0" cy="42" r="2.5" fill="#5b9cf6" opacity=".5"/>
      </g>
      <g transform="translate(45,80) scale(0.6) rotate(10)">
        <path d="M-40,0 L0,-35 L40,0 L40,40 L-40,40 Z" fill="#1a1208" stroke="#ff9900" stroke-opacity=".24" stroke-width="1.8"/>
        <path d="M-40,0 L0,-35 L40,0" fill="none" stroke="#ff9900" stroke-opacity=".5" stroke-width="2"/>
      </g>
      <g transform="translate(175,80) scale(0.6) rotate(-5)">
        <path d="M-40,0 L0,-35 L40,0 L40,40 L-40,40 Z" fill="#081a0e" stroke="#c8f135" stroke-opacity=".2" stroke-width="1.8"/>
        <path d="M-40,0 L0,-35 L40,0" fill="none" stroke="#c8f135" stroke-opacity=".45" stroke-width="2"/>
      </g>
      <rect x="14" y="14" width="70" height="18" rx="5" fill="#0d1f35" stroke="#5b9cf6" stroke-opacity=".25" stroke-width=".8"/>
      <text x="23" y="26" fill="#5b9cf6" font-size="7" font-family="DM Mono,monospace">PROPERTIES</text>
      <rect x="14" y="38" width="192" height="34" rx="7" fill="rgba(255,255,255,.03)" stroke="white" stroke-opacity=".05" stroke-width=".8"/>
      <text x="24" y="52" fill="white" fill-opacity=".3" font-size="6" font-family="DM Mono,monospace">AI VALUATION</text>
      <text x="24" y="65" fill="white" fill-opacity=".6" font-size="10" font-weight="800" font-family="Syne,sans-serif">₹4.85 Cr</text>
      <text x="88" y="65" fill="#00c851" font-size="7" font-family="DM Mono,monospace">↑ 2.4%</text>
      <rect x="14" y="168" width="192" height="24" rx="6" fill="#060c18" stroke="white" stroke-opacity=".06"/>
      <text x="24" y="183" fill="#5b9cf6" fill-opacity=".45" font-size="6.5" font-family="DM Mono,monospace">Virtual Tour · Live now</text>
      <circle cx="198" cy="180" r="3.5" fill="#ff4d1c"><animate attributeName="opacity" values="1;.3;1" dur="1.2s" repeatCount="indefinite"/></circle>
    </svg>
  );
}
