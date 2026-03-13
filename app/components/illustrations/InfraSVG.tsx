import React from 'react';

export default function InfraSVG() {
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#060d1a" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
        <linearGradient id="rack-glow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#63b3ff" stopOpacity="0" />
          <stop offset="50%" stopColor="#63b3ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#63b3ff" stopOpacity="0" />
        </linearGradient>
        <filter id="glow1">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="400" height="250" fill="url(#bg1)" />
      <ellipse cx="200" cy="125" rx="140" ry="80" fill="#1a44ff" opacity=".06" />
      <g transform="translate(40, 30)">
        <rect x="0" y="0" width="100" height="190" rx="4" fill="#0d1f35" stroke="#1e3a5f" strokeWidth="1" />
        <rect x="6" y="8" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="26" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="44" width="88" height="14" rx="2" fill="#112845" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="62" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="80" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="98" width="88" height="14" rx="2" fill="#112845" stroke="#63b3ff" strokeWidth=".8" opacity=".7" />
        <rect x="6" y="116" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="134" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="152" width="88" height="14" rx="2" fill="#112845" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="170" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <circle cx="82" cy="15" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="33" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="51" r="2" fill="#63b3ff" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="69" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="87" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="105" r="2" fill="#ffcc00" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="123" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="141" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="159" r="2" fill="#63b3ff" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="177" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
      </g>
      <g transform="translate(260, 30)">
        <rect x="0" y="0" width="100" height="190" rx="4" fill="#0d1f35" stroke="#1e3a5f" strokeWidth="1" />
        <rect x="6" y="8" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="26" width="88" height="14" rx="2" fill="#112845" stroke="#63b3ff" strokeWidth=".8" opacity=".6" />
        <rect x="6" y="44" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="62" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="80" width="88" height="14" rx="2" fill="#112845" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="98" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="116" width="88" height="14" rx="2" fill="#0f2540" stroke="#63b3ff" strokeWidth=".8" opacity=".5" />
        <rect x="6" y="134" width="88" height="14" rx="2" fill="#112845" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="152" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <rect x="6" y="170" width="88" height="14" rx="2" fill="#0f2540" stroke="#1e4060" strokeWidth=".5" />
        <circle cx="82" cy="15" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="33" r="2" fill="#63b3ff" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="51" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="69" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="87" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="105" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="123" r="2" fill="#ffcc00" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="141" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="159" r="2" fill="#00ff88" opacity=".9" filter="url(#glow1)" />
        <circle cx="82" cy="177" r="2" fill="#63b3ff" opacity=".9" filter="url(#glow1)" />
      </g>
      <path d="M140 85 C180 85 220 105 260 105" stroke="#63b3ff" strokeWidth="1" fill="none" opacity=".3" />
      <path d="M140 105 C180 105 220 125 260 125" stroke="#63b3ff" strokeWidth="1" fill="none" opacity=".2" />
      <path d="M140 125 C180 95 220 145 260 85" stroke="#00e5ff" strokeWidth=".8" fill="none" opacity=".2" />
      <path d="M140 145 C180 145 220 85 260 145" stroke="#63b3ff" strokeWidth="1" fill="none" opacity=".25" />
      <rect x="140" y="20" width="120" height="210" fill="url(#rack-glow)" opacity=".12" />
      <rect x="30" y="222" width="340" height="2" rx="1" fill="#63b3ff" opacity=".08" />
    </svg>
  );
}
