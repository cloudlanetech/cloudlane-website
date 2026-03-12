import React from 'react';

export default function AWSSVG() {
  return (
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#080808"/>
          <stop offset="100%" stop-color="#0f0a00"/>
        </linearGradient>
        <filter id="awsglow">
          <feGaussianBlur stdDeviation="5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="awsambient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ff9900" stop-opacity=".08"/>
          <stop offset="100%" stop-color="#ff9900" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="250" fill="url(#bg3)"/>
      <ellipse cx="200" cy="125" rx="170" ry="90" fill="url(#awsambient)"/>
      <rect x="30" y="40" width="340" height="170" rx="8" fill="none" stroke="#ff9900" stroke-width="1" stroke-opacity=".2" stroke-dasharray="6,4"/>
      <rect x="45" y="65" width="140" height="130" rx="6" fill="none" stroke="#63b3ff" stroke-width=".8" stroke-opacity=".25" stroke-dasharray="4,3"/>
      <rect x="215" y="65" width="140" height="130" rx="6" fill="none" stroke="#63b3ff" stroke-width=".8" stroke-opacity=".25" stroke-dasharray="4,3"/>
      <g transform="translate(65,95)" filter="url(#awsglow)">
        <rect x="0" y="0" width="44" height="36" rx="5" fill="#1a0e00" stroke="#ff9900" stroke-width="1" stroke-opacity=".7"/>
        <text x="22" y="15" text-anchor="middle" fill="#ff9900" font-size="11">⬡</text>
        <text x="22" y="30" text-anchor="middle" fill="#ff9900" font-size="6" font-family="DM Mono,monospace" opacity=".7">EC2</text>
      </g>
      <g transform="translate(115,95)">
        <rect x="0" y="0" width="44" height="36" rx="5" fill="#1a0e00" stroke="#ff9900" stroke-width=".8" stroke-opacity=".5"/>
        <text x="22" y="15" text-anchor="middle" fill="#ff9900" font-size="11">⬡</text>
        <text x="22" y="30" text-anchor="middle" fill="#ff9900" font-size="6" font-family="DM Mono,monospace" opacity=".6">RDS</text>
      </g>
      <g transform="translate(65,145)">
        <rect x="0" y="0" width="44" height="36" rx="5" fill="#001a0e" stroke="#00c851" stroke-width=".8" stroke-opacity=".6"/>
        <text x="22" y="15" text-anchor="middle" fill="#00c851" font-size="11">◫</text>
        <text x="22" y="30" text-anchor="middle" fill="#00c851" font-size="6" font-family="DM Mono,monospace" opacity=".7">S3</text>
      </g>
      <g transform="translate(115,145)">
        <rect x="0" y="0" width="44" height="36" rx="5" fill="#1a0e00" stroke="#ff9900" stroke-width=".8" stroke-opacity=".5"/>
        <text x="22" y="16" text-anchor="middle" fill="#ff9900" font-size="12">λ</text>
        <text x="22" y="30" text-anchor="middle" fill="#ff9900" font-size="6" font-family="DM Mono,monospace" opacity=".6">Lambda</text>
      </g>
      <g transform="translate(235,95)" filter="url(#awsglow)">
        <rect x="0" y="0" width="44" height="36" rx="5" fill="#1a0e00" stroke="#ff9900" stroke-width="1" stroke-opacity=".7"/>
        <text x="22" y="15" text-anchor="middle" fill="#ff9900" font-size="11">⬡</text>
        <text x="22" y="30" text-anchor="middle" fill="#ff9900" font-size="6" font-family="DM Mono,monospace" opacity=".7">EC2</text>
      </g>
      <g transform="translate(285,95)">
        <rect x="0" y="0" width="44" height="36" rx="5" fill="#001820" stroke="#63b3ff" stroke-width=".8" stroke-opacity=".5"/>
        <text x="22" y="15" text-anchor="middle" fill="#63b3ff" font-size="11">◈</text>
        <text x="22" y="30" text-anchor="middle" fill="#63b3ff" font-size="6" font-family="DM Mono,monospace" opacity=".6">EKS</text>
      </g>
      <g transform="translate(235,145)">
        <rect x="0" y="0" width="44" height="36" rx="5" fill="#1a0e00" stroke="#ff9900" stroke-width=".8" stroke-opacity=".5"/>
        <text x="22" y="16" text-anchor="middle" fill="#ff9900" font-size="11">◉</text>
        <text x="22" y="30" text-anchor="middle" fill="#ff9900" font-size="6" font-family="DM Mono,monospace" opacity=".6">SQS</text>
      </g>
      <g transform="translate(285,145)">
        <rect x="0" y="0" width="44" height="36" rx="5" fill="#001a0e" stroke="#00c851" stroke-width=".8" stroke-opacity=".5"/>
        <text x="22" y="16" text-anchor="middle" fill="#00c851" font-size="11">⬢</text>
        <text x="22" y="30" text-anchor="middle" fill="#00c851" font-size="6" font-family="DM Mono,monospace" opacity=".6">SNS</text>
      </g>
    </svg>
  );
}
