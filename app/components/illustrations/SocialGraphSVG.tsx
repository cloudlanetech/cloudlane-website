import React from 'react';

export default function SocialGraphSVG() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        {/* Gradients */}
        <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d47aff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8e44ff" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="pie-cyan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00e5ff" />
          <stop offset="100%" stopColor="#0099ff" />
        </linearGradient>
        <linearGradient id="pie-purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9b51e0" />
          <stop offset="100%" stopColor="#6f2cbc" />
        </linearGradient>
        <linearGradient id="panel-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(0, 229, 255, 0.05)" />
          <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
        </linearGradient>

        {/* Glow Filters */}
        <filter id="sg-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sg-glow-cyan-strong" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <pattern id="sg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Subtle Background Grid */}
      <rect width="800" height="450" fill="url(#sg-grid)" />

      {/* Main Glass Panel */}
      <g stroke="none" strokeWidth="0">
        <rect width="800" height="450" fill="url(#panel-bg)" />
        <rect width="800" height="450" fill="rgba(6, 12, 20, 0.4)" />
      </g>

      {/* Content grouped and centered/scaled up */}
      <g transform="translate(60, 60)">
        {/* Header inside panel */}
        <text x="0" y="0" fill="#00e5ff" fontSize="14" fontFamily="'DM Mono', monospace" letterSpacing="2" opacity="0.8">SYSTEM ANALYTICS</text>
        <line x1="180" y1="-4" x2="680" y2="-4" stroke="rgba(0, 229, 255, 0.15)" strokeWidth="1" strokeDasharray="4 4" />

        <text x="600" y="0" fill="rgba(255, 255, 255, 0.4)" fontSize="12" fontFamily="'DM Mono', monospace">LIVE DATA</text>
        <circle cx="670" cy="-4" r="4" fill="#00e5ff" filter="url(#sg-glow-cyan)">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
        </circle>

        {/* Grid lines */}
        <line x1="0" y1="50" x2="680" y2="50" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
        <line x1="0" y1="120" x2="680" y2="120" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
        <line x1="0" y1="190" x2="680" y2="190" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
        <line x1="0" y1="260" x2="680" y2="260" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
        <line x1="0" y1="330" x2="680" y2="330" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />

        {/* Y-axis Labels */}
        <text x="-10" y="54" fill="rgba(255, 255, 255, 0.3)" fontSize="11" fontFamily="'DM Mono', monospace" textAnchor="end">10k</text>
        <text x="-10" y="124" fill="rgba(255, 255, 255, 0.3)" fontSize="11" fontFamily="'DM Mono', monospace" textAnchor="end">8k</text>
        <text x="-10" y="194" fill="rgba(255, 255, 255, 0.3)" fontSize="11" fontFamily="'DM Mono', monospace" textAnchor="end">5k</text>
        <text x="-10" y="264" fill="rgba(255, 255, 255, 0.3)" fontSize="11" fontFamily="'DM Mono', monospace" textAnchor="end">2k</text>

        {/* X-axis Labels */}
        {[300, 340, 380, 420, 460, 500, 540, 580, 620].map((x, i) => (
          <text key={i} x={x + 10} y="355" fill="rgba(255, 255, 255, 0.3)" fontSize="11" fontFamily="'DM Mono', monospace" textAnchor="middle">{`0${i + 1}`}</text>
        ))}

        {/* Pie Chart (Left side) */}
        <g stroke="rgba(0, 0, 0, 0.2)" strokeWidth="2" transform="translate(-20, 30)">
          {/* Main wedge 270 degrees */}
          <path d="M 140 160 L 140 60 A 100 100 0 1 0 240 160 Z" fill="url(#pie-cyan)" filter="url(#sg-glow-cyan)" />
          {/* Hovering extracted wedge 90 degrees */}
          <path d="M 152 148 L 252 148 A 100 100 0 0 0 152 48 Z" fill="url(#pie-purple)" filter="url(#sg-glow-cyan)" stroke="#d47aff" strokeWidth="1">
            <animate attributeName="transform" values="translate(0,0); translate(6,-6); translate(0,0)" dur="4s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Bar Chart (Right side) */}
        <g stroke="rgba(212, 122, 255, 0.4)" strokeWidth="1">
          <rect x="300" y="280" width="24" height="50" fill="url(#bar-gradient)" />
          <rect x="340" y="260" width="24" height="70" fill="url(#bar-gradient)" />
          <rect x="380" y="270" width="24" height="60" fill="url(#bar-gradient)" />
          <rect x="420" y="220" width="24" height="110" fill="url(#bar-gradient)" />
          <rect x="460" y="240" width="24" height="90" fill="url(#bar-gradient)" />
          <rect x="500" y="170" width="24" height="160" fill="url(#bar-gradient)" />
          <rect x="540" y="150" width="24" height="180" fill="url(#bar-gradient)" />
          <rect x="580" y="100" width="24" height="230" fill="url(#bar-gradient)" />
          <rect x="620" y="50" width="24" height="280" fill="url(#bar-gradient)" />
        </g>

        {/* Line Chart */}
        <polyline
          points="230,210 280,200 310,180 350,200 390,190 430,160 470,180 510,100 550,115 590,70 630,40"
          fill="none"
          stroke="#00e5ff"
          strokeWidth="3.5"
          filter="url(#sg-glow-cyan-strong)"
        />

        {/* Area under the line */}
        <polygon
          points="230,330 230,210 280,200 310,180 350,200 390,190 430,160 470,180 510,100 550,115 590,70 630,40 630,330"
          fill="rgba(0, 229, 255, 0.06)"
        />

        {/* Line dots */}
        <g fill="#0b121c" stroke="#00e5ff" strokeWidth="2.5">
          {[
            [230, 210], [280, 200], [310, 180], [350, 200], [390, 190],
            [430, 160], [470, 180], [510, 100], [550, 115], [590, 70], [630, 40]
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5" filter="url(#sg-glow-cyan)">
              <animate attributeName="r" values="5;7;5" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      </g>
    </svg>
  );
}
