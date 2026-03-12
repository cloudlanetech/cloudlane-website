import React from 'react';

export default function CloudSVG() {
  return (
    <svg viewBox="0 0 560 315" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g-bg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#04070f"/>
          <stop offset="100%" stop-color="#060c18"/>
        </linearGradient>
        <linearGradient id="g-platform-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0d2040"/>
          <stop offset="100%" stop-color="#0a1830"/>
        </linearGradient>
        <linearGradient id="g-platform-left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#071228"/>
          <stop offset="100%" stop-color="#0a1830"/>
        </linearGradient>
        <linearGradient id="g-platform-right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#060f20"/>
          <stop offset="100%" stop-color="#071228"/>
        </linearGradient>
        <filter id="f-glow2a">
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="f-glow2b">
          <feGaussianBlur stdDeviation="12" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="g-ambient2" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#1a44ff" stop-opacity=".1"/>
          <stop offset="100%" stop-color="#1a44ff" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="560" height="315" fill="url(#g-bg2)"/>
      <ellipse cx="280" cy="140" rx="220" ry="120" fill="url(#g-ambient2)"/>

      {/* Isometric platform base */}
      {/* top face */}
      <polygon points="280,80 420,155 280,230 140,155" fill="url(#g-platform-top)" stroke="#1e4070" stroke-width="1"/>
      {/* left face */}
      <polygon points="140,155 280,230 280,265 140,190" fill="url(#g-platform-left)" stroke="#0e2845" stroke-width="1"/>
      {/* right face */}
      <polygon points="420,155 280,230 280,265 420,190" fill="url(#g-platform-right)" stroke="#0a1e38" stroke-width="1"/>

      {/* grid lines on top face */}
      <line x1="175" y1="137" x2="385" y2="137" stroke="#63b3ff" stroke-width=".4" opacity=".15"/>
      <line x1="157" y1="146" x2="403" y2="146" stroke="#63b3ff" stroke-width=".4" opacity=".15"/>
      <line x1="210" y1="119" x2="350" y2="119" stroke="#63b3ff" stroke-width=".4" opacity=".12"/>
      <line x1="192" y1="128" x2="368" y2="128" stroke="#63b3ff" stroke-width=".4" opacity=".12"/>
      <line x1="228" y1="164" x2="332" y2="164" stroke="#63b3ff" stroke-width=".4" opacity=".12"/>
      <line x1="210" y1="173" x2="350" y2="173" stroke="#63b3ff" stroke-width=".4" opacity=".1"/>
      
      <line x1="175" y1="137" x2="280" y2="193" stroke="#63b3ff" stroke-width=".4" opacity=".15"/>
      <line x1="210" y1="119" x2="280" y2="157" stroke="#63b3ff" stroke-width=".4" opacity=".12"/>
      <line x1="245" y1="101" x2="280" y2="120" stroke="#63b3ff" stroke-width=".4" opacity=".1"/>
      <line x1="315" y1="101" x2="280" y2="120" stroke="#63b3ff" stroke-width=".4" opacity=".1"/>
      <line x1="350" y1="119" x2="280" y2="157" stroke="#63b3ff" stroke-width=".4" opacity=".12"/>
      <line x1="385" y1="137" x2="280" y2="193" stroke="#63b3ff" stroke-width=".4" opacity=".15"/>

      {/* service blocks on platform */}
      {/* Block 1: EC2 */}
      <g transform="translate(210,130)" filter="url(#f-glow2a)">
        <polygon points="0,-18 26,-5 26,12 0,25 -26,12 -26,-5" fill="#0d2040" stroke="#63b3ff" stroke-width="1" stroke-opacity=".7"/>
        <polygon points="0,-18 26,-5 0,8 -26,-5" fill="#112848" stroke="#63b3ff" stroke-width=".8" stroke-opacity=".5"/>
        <polygon points="26,-5 26,12 0,25 0,8" fill="#0a1830" stroke="#0e2845" stroke-width=".8"/>
        <polygon points="-26,-5 0,8 0,25 -26,12" fill="#081528" stroke="#0e2845" stroke-width=".8"/>
        <text x="0" y="4" text-anchor="middle" fill="#63b3ff" font-size="9" font-family="DM Mono,monospace" opacity=".8">EC2</text>
      </g>

      {/* Block 2: S3 */}
      <g transform="translate(280,105)" filter="url(#f-glow2a)">
        <polygon points="0,-20 28,-6 28,14 0,28 -28,14 -28,-6" fill="#0d2040" stroke="#c8f135" stroke-width="1.2" stroke-opacity=".8"/>
        <polygon points="0,-20 28,-6 0,10 -28,-6" fill="#182e14" stroke="#c8f135" stroke-width=".8" stroke-opacity=".6"/>
        <polygon points="28,-6 28,14 0,28 0,10" fill="#0a1808" stroke="#162808" stroke-width=".8"/>
        <polygon points="-28,-6 0,10 0,28 -28,14" fill="#081408" stroke="#162808" stroke-width=".8"/>
        <text x="0" y="4" text-anchor="middle" fill="#c8f135" font-size="9" font-family="DM Mono,monospace" opacity=".9">S3</text>
      </g>

      {/* Block 3: Lambda */}
      <g transform="translate(350,130)" filter="url(#f-glow2a)">
        <polygon points="0,-18 26,-5 26,12 0,25 -26,12 -26,-5" fill="#0d2040" stroke="#63b3ff" stroke-width="1" stroke-opacity=".6"/>
        <polygon points="0,-18 26,-5 0,8 -26,-5" fill="#112848" stroke="#63b3ff" stroke-width=".8" stroke-opacity=".4"/>
        <polygon points="26,-5 26,12 0,25 0,8" fill="#0a1830" stroke="#0e2845" stroke-width=".8"/>
        <polygon points="-26,-5 0,8 0,25 -26,12" fill="#081528" stroke="#0e2845" stroke-width=".8"/>
        <text x="0" y="5" text-anchor="middle" fill="#63b3ff" font-size="11" font-family="DM Mono,monospace" opacity=".7">λ</text>
      </g>

      {/* Block 4: RDS (smaller) */}
      <g transform="translate(245,165)" filter="url(#f-glow2a)">
        <polygon points="0,-14 20,-4 20,9 0,19 -20,9 -20,-4" fill="#0a1828" stroke="#ff9900" stroke-width=".8" stroke-opacity=".5"/>
        <polygon points="0,-14 20,-4 0,6 -20,-4" fill="#1a1000" stroke="#ff9900" stroke-width=".6" stroke-opacity=".4"/>
        <polygon points="20,-4 20,9 0,19 0,6" fill="#0a0800" stroke="#0e1000" stroke-width=".6"/>
        <polygon points="-20,-4 0,6 0,19 -20,9" fill="#080600" stroke="#0e1000" stroke-width=".6"/>
        <text x="0" y="3" text-anchor="middle" fill="#ff9900" font-size="7" font-family="DM Mono,monospace" opacity=".7">RDS</text>
      </g>

      {/* Block 5: EKS (smaller) */}
      <g transform="translate(315,165)">
        <polygon points="0,-14 20,-4 20,9 0,19 -20,9 -20,-4" fill="#0a1828" stroke="#63b3ff" stroke-width=".8" stroke-opacity=".4"/>
        <polygon points="0,-14 20,-4 0,6 -20,-4" fill="#0d1f35" stroke="#63b3ff" stroke-width=".6" stroke-opacity=".3"/>
        <polygon points="20,-4 20,9 0,19 0,6" fill="#080e1a" stroke="#0e2030" stroke-width=".6"/>
        <polygon points="-20,-4 0,6 0,19 -20,9" fill="#060c16" stroke="#0e2030" stroke-width=".6"/>
        <text x="0" y="3" text-anchor="middle" fill="#63b3ff" font-size="7" font-family="DM Mono,monospace" opacity=".6">EKS</text>
      </g>

      {/* data streams coming in from sides */}
      {/* left stream */}
      <path d="M60,120 Q120,140 175,150" stroke="#63b3ff" stroke-width="1.5" fill="none" opacity=".4" stroke-dasharray="4,3">
        <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.5s" repeatCount="indefinite"/>
      </path>
      <circle cx="60" cy="120" r="4" fill="#63b3ff" opacity=".5" filter="url(#f-glow2a)"/>

      {/* right stream */}
      <path d="M500,100 Q440,130 385,148" stroke="#c8f135" stroke-width="1.5" fill="none" opacity=".35" stroke-dasharray="4,3">
        <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.8s" repeatCount="indefinite"/>
      </path>
      <circle cx="500" cy="100" r="4" fill="#c8f135" opacity=".4" filter="url(#f-glow2a)"/>

      {/* top stream */}
      <path d="M280,30 L280,78" stroke="#63b3ff" stroke-width="1.5" fill="none" opacity=".3" stroke-dasharray="3,3">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.2s" repeatCount="indefinite"/>
      </path>
      <circle cx="280" cy="26" r="4" fill="#63b3ff" opacity=".5" filter="url(#f-glow2a)"/>

      {/* glow under platform */}
      <ellipse cx="280" cy="248" rx="130" ry="12" fill="#63b3ff" opacity=".05"/>
    </svg>
  );
}
