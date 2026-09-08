import React from 'react';

export default function ConnectSVG() {
  return (
    <svg viewBox="0 0 560 315" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g-bg7" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#080604" />
          <stop offset="100%" stop-color="#0f0a00" />
        </linearGradient>
        <filter id="f-glow7">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="g-ambient7" cx="50%" cy="34%" r="55%">
          <stop offset="0%" stop-color="#ff9900" stop-opacity=".08" />
          <stop offset="100%" stop-color="#ff9900" stop-opacity="0" />
        </radialGradient>
        <marker id="c-arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#ff9900" opacity=".55" />
        </marker>
      </defs>

      <rect width="560" height="315" fill="url(#g-bg7)" />
      <rect width="560" height="315" fill="url(#g-ambient7)" />

      {/* nudged in from the edges so the flow survives the card's cover-crop */}
      <g transform="translate(26,6)">

      {/* builder canvas frame — diagram lives in the upper two-thirds */}
      <rect x="24" y="20" width="480" height="176" rx="10" fill="none" stroke="#ff9900" stroke-width="1" stroke-opacity=".18" stroke-dasharray="6,4" />
      <text x="40" y="14" fill="rgba(240,237,232,.28)" font-size="8" font-family="DM Mono,monospace">amazon-connect · contact-flow.json</text>
      <g font-family="DM Mono,monospace" font-size="8">
        <text x="392" y="14" fill="#00c851" opacity=".8">●</text>
        <text x="404" y="14" fill="rgba(240,237,232,.35)">contact-lens · live</text>
      </g>

      {/* ---- connectors ---- */}
      <g stroke-width="1.4" fill="none" stroke-dasharray="4,3">
        {/* incoming -> ivr */}
        <path d="M126,84 H150" stroke="#63b3ff" stroke-opacity=".5" marker-end="url(#c-arrow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.6s" repeatCount="indefinite" />
        </path>
        {/* ivr -> lambda */}
        <path d="M251,84 H286" stroke="#63b3ff" stroke-opacity=".5" marker-end="url(#c-arrow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.6s" repeatCount="indefinite" />
        </path>
        {/* lambda -> down -> salesforce */}
        <path d="M387,84 H408 V124 H170 V140" stroke="#ff9900" stroke-opacity=".5" marker-end="url(#c-arrow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="2s" repeatCount="indefinite" />
        </path>
        {/* salesforce -> agent routing */}
        <path d="M236,161 H300" stroke="#63b3ff" stroke-opacity=".5" marker-end="url(#c-arrow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.6s" repeatCount="indefinite" />
        </path>
      </g>

      {/* ---- travelling packet ---- */}
      <circle r="3.2" fill="#c8f135" filter="url(#f-glow7)">
        <animateMotion dur="4.4s" repeatCount="indefinite"
          path="M126,84 H408 L408,124 L170,124 L170,161 L300,161" />
        <animate attributeName="opacity" values="0;1;1;1;0" keyTimes="0;0.08;0.5;0.92;1" dur="4.4s" repeatCount="indefinite" />
      </circle>

      {/* ---- nodes ---- */}
      {/* Incoming Call */}
      <g transform="translate(26,63)">
        <rect width="100" height="42" rx="6" fill="#0a1520" stroke="#63b3ff" stroke-width="1" stroke-opacity=".55" />
        <text x="14" y="18" fill="#63b3ff" font-size="12">☎</text>
        <text x="30" y="18" fill="rgba(240,237,232,.75)" font-size="8" font-family="DM Mono,monospace">Incoming</text>
        <text x="14" y="32" fill="rgba(240,237,232,.4)" font-size="7" font-family="DM Mono,monospace">+1 · PSTN</text>
      </g>

      {/* IVR Menu */}
      <g transform="translate(150,63)">
        <rect width="101" height="42" rx="6" fill="#0a1520" stroke="#63b3ff" stroke-width="1" stroke-opacity=".55" />
        <text x="14" y="18" fill="#63b3ff" font-size="11">▤</text>
        <text x="30" y="18" fill="rgba(240,237,232,.75)" font-size="8" font-family="DM Mono,monospace">IVR Menu</text>
        <text x="14" y="32" fill="rgba(240,237,232,.4)" font-size="7" font-family="DM Mono,monospace">Lex · get-input</text>
      </g>

      {/* Lambda */}
      <g transform="translate(286,63)" filter="url(#f-glow7)">
        <rect width="101" height="42" rx="6" fill="#1a0e00" stroke="#ff9900" stroke-width="1" stroke-opacity=".8">
          <animate attributeName="stroke-opacity" values=".8;.35;.8" dur="2.4s" repeatCount="indefinite" />
        </rect>
        <text x="14" y="19" fill="#ff9900" font-size="13" font-family="DM Mono,monospace">λ</text>
        <text x="30" y="18" fill="rgba(240,237,232,.8)" font-size="8" font-family="DM Mono,monospace">Lambda</text>
        <text x="14" y="32" fill="rgba(240,237,232,.4)" font-size="7" font-family="DM Mono,monospace">route-resolver</text>
      </g>

      {/* Salesforce Lookup */}
      <g transform="translate(116,140)">
        <rect width="120" height="42" rx="6" fill="#0a1520" stroke="#63b3ff" stroke-width="1" stroke-opacity=".55" />
        <text x="14" y="18" fill="#63b3ff" font-size="11">☁</text>
        <text x="30" y="18" fill="rgba(240,237,232,.75)" font-size="8" font-family="DM Mono,monospace">Salesforce</text>
        <text x="14" y="32" fill="rgba(240,237,232,.4)" font-size="7" font-family="DM Mono,monospace">contact · lookup</text>
      </g>

      {/* Agent Routing */}
      <g transform="translate(300,140)" filter="url(#f-glow7)">
        <rect width="110" height="42" rx="6" fill="#001a0e" stroke="#00c851" stroke-width="1" stroke-opacity=".7" />
        <text x="14" y="19" fill="#00c851" font-size="12">◉</text>
        <text x="30" y="18" fill="rgba(240,237,232,.8)" font-size="8" font-family="DM Mono,monospace">Agent Route</text>
        <text x="14" y="32" fill="rgba(240,237,232,.4)" font-size="7" font-family="DM Mono,monospace">queue · sales-1</text>
        <circle cx="96" cy="14" r="2.5" fill="#00c851">
          <animate attributeName="opacity" values="1;.2;1" dur="1.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* subtle divider in the lower third (kept clear for card copy) */}
      <line x1="24" y1="224" x2="504" y2="224" stroke="#ff9900" stroke-width=".6" stroke-opacity=".06" />
      </g>
    </svg>
  );
}
