import React from 'react';

export default function TremydaSVG() {
  return (
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <linearGradient id="tremyda-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#080c14" />
          <stop offset="50%" stopColor="#0a101a" />
          <stop offset="100%" stopColor="#05080f" />
        </linearGradient>
        
        <linearGradient id="neon-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1a44ff" stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id="neon-green" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c8f135" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00c851" stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id="panel-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.01" />
        </linearGradient>

        <filter id="glow-strong">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="glow-soft">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        </pattern>
        
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.05)" />
        </pattern>
      </defs>

      {/* Background layer */}
      <rect width="800" height="500" fill="url(#tremyda-bg)" />
      <rect width="800" height="500" fill="url(#grid)" />
      
      {/* Abstract DNA / Neural network faint background */}
      <path d="M-100,250 Q100,100 300,250 T700,250 T1100,250" fill="none" stroke="rgba(0, 229, 255, 0.05)" strokeWidth="40" />
      <path d="M-100,250 Q100,400 300,250 T700,250 T1100,250" fill="none" stroke="rgba(200, 241, 53, 0.03)" strokeWidth="40" />

      {/* Floating abstract tech shapes */}
      <g opacity="0.4">
        <circle cx="150" cy="120" r="80" fill="none" stroke="rgba(0,229,255,0.1)" strokeWidth="1" strokeDasharray="10 10">
           <animateTransform attributeName="transform" type="rotate" from="0 150 120" to="360 150 120" dur="40s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="120" r="60" fill="none" stroke="rgba(0,229,255,0.15)" strokeWidth="1" strokeDasharray="5 5">
           <animateTransform attributeName="transform" type="rotate" from="360 150 120" to="0 150 120" dur="30s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="680" cy="380" r="120" fill="none" stroke="rgba(200,241,53,0.08)" strokeWidth="1" strokeDasharray="15 10">
           <animateTransform attributeName="transform" type="rotate" from="0 680 380" to="360 680 380" dur="50s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Main central 3D-like isometric layers */}
      <g transform="translate(400, 260)">
        {/* Layer 1: Data Lake */}
        <g transform="scale(1, 0.5) rotate(45)">
          <rect x="-180" y="-180" width="360" height="360" rx="20" fill="rgba(10, 24, 40, 0.6)" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="2" />
          <rect x="-160" y="-160" width="320" height="320" fill="url(#dots)" />
        </g>
        
        {/* Connection streams going upwards */}
        <path d="M-80,-20 L-80,-120" stroke="rgba(0, 229, 255, 0.4)" strokeWidth="2" strokeDasharray="4 4">
          <animate attributeName="strokeDashoffset" values="40;0" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M0,20 L0,-140" stroke="rgba(200, 241, 53, 0.4)" strokeWidth="2" strokeDasharray="4 4">
          <animate attributeName="strokeDashoffset" values="40;0" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M80,-20 L80,-90" stroke="rgba(0, 229, 255, 0.4)" strokeWidth="2" strokeDasharray="4 4">
          <animate attributeName="strokeDashoffset" values="40;0" dur="2.5s" repeatCount="indefinite" />
        </path>
        
        {/* Layer 2: API & Integration Hub */}
        <g transform="translate(0, -90) scale(1, 0.5) rotate(45)">
          <rect x="-140" y="-140" width="280" height="280" rx="16" fill="rgba(6, 12, 20, 0.8)" stroke="rgba(200, 241, 53, 0.4)" strokeWidth="2" />
          {/* Internal grid */}
          <path d="M-140,0 L140,0 M0,-140 L0,140" stroke="rgba(200, 241, 53, 0.15)" strokeWidth="2" />
          <circle cx="0" cy="0" r="40" fill="rgba(200, 241, 53, 0.1)" />
        </g>
        
        {/* Dynamic Data Nodes floating above */}
        <g transform="translate(-100, -110)">
           <circle cx="0" cy="0" r="6" fill="#00e5ff" filter="url(#glow-strong)">
             <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
           </circle>
           <line x1="0" y1="0" x2="30" y2="-40" stroke="#00e5ff" strokeWidth="2" opacity="0.6" />
           <circle cx="30" cy="-40" r="4" fill="#ffffff" />
        </g>
        
        <g transform="translate(110, -130)">
           <circle cx="0" cy="0" r="8" fill="#c8f135" filter="url(#glow-strong)">
             <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
           </circle>
           <line x1="0" y1="0" x2="-40" y2="-20" stroke="#c8f135" strokeWidth="2" opacity="0.5" />
           <circle cx="-40" cy="-20" r="3" fill="#ffffff" />
        </g>

        <g transform="translate(0, -160)">
           <circle cx="0" cy="0" r="14" fill="rgba(26,68,255,0.8)" filter="url(#glow-strong)" />
           <circle cx="0" cy="0" r="6" fill="#ffffff" />
        </g>
      </g>

      {/* Interface Panel Left (Patient Vitals / Stats) */}
      <g transform="translate(40, 80)">
        <rect width="200" height="340" rx="12" fill="url(#panel-gradient)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <rect x="1px" y="1px" width="198" height="338" rx="11" fill="rgba(0,0,0,0.5)" />
        
        {/* Header */}
        <text x="20" y="30" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="'DM Mono', monospace" letterSpacing="1">GLOBAL HEALTH METRICS</text>
        <line x1="20" y1="45" x2="180" y2="45" stroke="rgba(255,255,255,0.08)" />
        
        {/* Chart 1 */}
        <text x="20" y="75" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="'Syne', sans-serif">24.5M</text>
        <text x="20" y="95" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="'DM Mono', monospace">Active Records</text>
        <path d="M20,130 Q50,110 80,120 T140,90 T180,105" fill="none" stroke="#00e5ff" strokeWidth="2" filter="url(#glow-soft)" />
        <path d="M20,130 Q50,110 80,120 T140,90 T180,105 L180,150 L20,150 Z" fill="rgba(0,229,255,0.1)" />

        {/* Sync Status items */}
        <rect x="20" y="180" width="160" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" />
        <circle cx="40" cy="200" r="5" fill="#c8f135" />
        <text x="55" y="196" fill="#ffffff" fontSize="12" fontFamily="'Syne', sans-serif">EHR Sync API</text>
        <text x="55" y="210" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="'DM Mono', monospace">Latency: 12ms</text>

        <rect x="20" y="230" width="160" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" />
        <circle cx="40" cy="250" r="5" fill="#00e5ff" />
        <text x="55" y="246" fill="#ffffff" fontSize="12" fontFamily="'Syne', sans-serif">ML Pipeline</text>
        <text x="55" y="260" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="'DM Mono', monospace">Processing batch...</text>

        <rect x="20" y="280" width="160" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" />
        <circle cx="40" cy="300" r="5" fill="#1a44ff" />
        <text x="55" y="296" fill="#ffffff" fontSize="12" fontFamily="'Syne', sans-serif">Telehealth Relays</text>
        <text x="55" y="310" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="'DM Mono', monospace">14 active nodes</text>
      </g>

      {/* Interface Panel Right (Security / Encryption) */}
      <g transform="translate(560, 80)">
        <rect width="200" height="340" rx="12" fill="url(#panel-gradient)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <rect x="1px" y="1px" width="198" height="338" rx="11" fill="rgba(0,0,0,0.5)" />
        
        {/* Header */}
        <text x="20" y="30" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="'DM Mono', monospace" letterSpacing="1">SECURE ENCLAVE</text>
        <line x1="20" y1="45" x2="180" y2="45" stroke="rgba(255,255,255,0.08)" />

        {/* Encryption shield icon */}
        <path d="M100,65 L140,80 L140,115 C140,145 100,170 100,170 C100,170 60,145 60,115 L60,80 L100,65 Z" fill="rgba(0, 229, 255, 0.05)" stroke="#00e5ff" strokeWidth="1.5" />
        <path d="M100,85 L120,95 L120,115 C120,135 100,150 100,150 C100,150 80,135 80,115 L80,95 L100,85 Z" fill="rgba(0, 229, 255, 0.15)" stroke="#00e5ff" strokeWidth="2" filter="url(#glow-soft)" />
        <polyline points="90,120 98,128 112,110" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Text indicators */}
        <text x="100" y="195" textAnchor="middle" fill="#00e5ff" fontSize="12" fontFamily="'DM Mono', monospace" letterSpacing="1">HIPAA COMPLIANT</text>
        <text x="100" y="210" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="'DM Mono', monospace">End-to-end AES-256</text>

        {/* Logs */}
        <rect x="20" y="230" width="160" height="90" rx="6" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.05)" />
        <text x="30" y="250" fill="rgba(200, 241, 53, 0.8)" fontSize="8" fontFamily="'DM Mono', monospace">&gt; auth_check: PASS</text>
        <text x="30" y="265" fill="rgba(200, 241, 53, 0.8)" fontSize="8" fontFamily="'DM Mono', monospace">&gt; token_val: OK</text>
        <text x="30" y="280" fill="rgba(200, 241, 53, 0.8)" fontSize="8" fontFamily="'DM Mono', monospace">&gt; data_stream: ENCRYPTED</text>
        <text x="30" y="295" fill="rgba(255, 255, 255, 0.8)" fontSize="8" fontFamily="'DM Mono', monospace">&gt; Awaiting queries<tspan opacity="0.5">_</tspan>
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </text>
      </g>
      
      {/* Floating particles (simulating fast data flow) */}
      <circle cx="20" cy="20" r="1.5" fill="#00e5ff">
        <animateMotion dur="6s" repeatCount="indefinite" path="M100,450 Q400,150 700,450" />
        <animate attributeName="opacity" values="0;1;0" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="20" r="2" fill="#c8f135">
        <animateMotion dur="8s" repeatCount="indefinite" path="M700,100 Q400,300 100,100" begin="2s" />
        <animate attributeName="opacity" values="0;1;0" dur="8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
