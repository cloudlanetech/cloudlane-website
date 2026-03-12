import React from 'react';

export default function EdTechSVG() {
  return (
    <svg viewBox="0 0 200 290" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="e-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0a0d18"/><stop offset="100%" stop-color="#060810"/></linearGradient>
      </defs>
      <rect width="200" height="290" fill="url(#e-bg)"/>
      <ellipse cx="160" cy="60" rx="90" ry="80" fill="#c8f135" fill-opacity=".04"/>
      <rect x="14" y="14" width="172" height="108" rx="9" fill="#040810" stroke="white" stroke-opacity=".07" stroke-width="1"/>
      <rect x="20" y="20" width="160" height="84" rx="6" fill="#02060e"/>
      <circle cx="100" cy="62" r="20" fill="#c8f135" fill-opacity=".1" stroke="#c8f135" stroke-opacity=".3" stroke-width="1"/>
      <polygon points="94,52 116,62 94,72" fill="#c8f135" fill-opacity=".8"/>
      <rect x="20" y="106" width="160" height="3.5" rx="2" fill="#0a1525"/>
      <rect x="20" y="106" width="95" height="3.5" rx="2" fill="#c8f135" fill-opacity=".6"/>
      <circle cx="115" cy="107" r="4" fill="#c8f135" opacity=".9"/>
      <text x="20" y="120" fill="white" fill-opacity=".2" font-size="6.5" font-family="DM Mono,monospace">18:32</text>
      <text x="158" y="120" fill="white" fill-opacity=".2" font-size="6.5" font-family="DM Mono,monospace">45:00</text>
      <rect x="14" y="134" width="172" height="18" rx="5" fill="#0d1f35" stroke="#5b9cf6" stroke-opacity=".2" stroke-width=".8"/>
      <circle cx="24" cy="143" r="4" fill="#5b9cf6" fill-opacity=".5"/>
      <text x="33" y="147" fill="white" fill-opacity=".55" font-size="7.5" font-family="DM Mono,monospace">Module 3 · AWS VPC deep-dive</text>
      <rect x="14" y="156" width="172" height="18" rx="5" fill="#050e08" stroke="#00c851" stroke-opacity=".15" stroke-width=".8"/>
      <circle cx="24" cy="165" r="4" fill="#00c851" fill-opacity=".5"/>
      <text x="33" y="169" fill="white" fill-opacity=".4" font-size="7.5" font-family="DM Mono,monospace">Module 4 · IAM &amp; Policies</text>
      <rect x="14" y="178" width="172" height="18" rx="5" fill="rgba(255,255,255,.02)"/>
      <circle cx="24" cy="187" r="4" fill="rgba(255,255,255,.12)"/>
      <text x="33" y="191" fill="white" fill-opacity=".25" font-size="7.5" font-family="DM Mono,monospace">Module 5 · EC2 &amp; Auto Scaling</text>
      <circle cx="100" cy="232" r="28" fill="none" stroke="#0a1828" stroke-width="6"/>
      <circle cx="100" cy="232" r="28" fill="none" stroke="#c8f135" stroke-width="6"
        stroke-dasharray="106 70" stroke-linecap="round" transform="rotate(-90 100 232)"/>
      <text x="100" y="236" text-anchor="middle" fill="#c8f135" font-size="11" font-weight="800" font-family="Syne,sans-serif">64%</text>
      <text x="100" y="248" text-anchor="middle" fill="white" fill-opacity=".25" font-size="6.5" font-family="DM Mono,monospace">completion</text>
      <rect x="14" y="268" width="172" height="16" rx="5" fill="#050e08" stroke="white" stroke-opacity=".05"/>
      <text x="22" y="279" fill="#00c851" fill-opacity=".5" font-size="7" font-family="DM Mono,monospace">AI Tutor · online</text>
      <circle cx="182" cy="276" r="4" fill="#00c851"><animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite"/></circle>
    </svg>
  );
}
