import React from 'react';

export default function CyberSVG() {
  return (
    <svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="cy-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#040810"/><stop offset="100%" stop-color="#020408"/></linearGradient></defs>
      <rect width="220" height="200" fill="url(#cy-bg)"/>
      <rect x="0" y="0" width="220" height="200" fill="#00e5ff" fill-opacity=".02"/>
      <g transform="translate(110,100)">
        <path d="M0,-45 L40,-30 L40,10 Q40,45 0,60 Q-40,45 -40,10 L-40,-30 Z" fill="#06121a" stroke="#00e5ff" stroke-opacity=".4" stroke-width="2.5"/>
        <path d="M-15,-5 L-5,5 L15,-15" fill="none" stroke="#00e5ff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" opacity=".8"/>
        <circle r="48" fill="none" stroke="#00e5ff" stroke-width="1" stroke-opacity=".15"/>
        <circle r="56" fill="none" stroke="#00e5ff" stroke-width=".8" stroke-opacity=".08" stroke-dasharray="10,8">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite"/>
        </circle>
      </g>
      <rect x="12" y="12" width="70" height="18" rx="5" fill="#06121a" stroke="#00e5ff" stroke-opacity=".3" stroke-width="1"/>
      <circle cx="21" cy="21" r="2.5" fill="#00e5ff"><animate attributeName="opacity" values="1;.3;1" dur="1s" repeatCount="indefinite"/></circle>
      <text x="28" y="24" fill="#00e5ff" font-size="7" font-family="DM Mono,monospace">PROTECTED</text>
      <rect x="138" y="12" width="70" height="18" rx="5" fill="rgba(255,100,0,.1)" stroke="#ff4d1c" stroke-opacity=".2" stroke-width="1"/>
      <text x="148" y="24" fill="#ff4d1c" font-size="6.5" font-family="DM Mono,monospace">BLOCKED · 42</text>
      <rect x="12" y="158" width="196" height="30" rx="7" fill="rgba(0,0,0,.3)" stroke="white" stroke-opacity=".05"/>
      <text x="22" y="172" fill="white" fill-opacity=".25" font-size="6" font-family="DM Mono,monospace">THREAT DETECTION ENGINE</text>
      <text x="22" y="184" fill="white" fill-opacity=".5" font-size="7" font-family="DM Mono,monospace">Zero-day vulnerability patched in 14ms</text>
      <path d="M10,80 L30,75 L50,85 L70,70 L90,78 L110,65 L130,72 L150,55 L170,68 L190,50 L210,58"
        stroke="#00e5ff" stroke-width="1.2" fill="none" opacity=".2"/>
    </svg>
  );
}
