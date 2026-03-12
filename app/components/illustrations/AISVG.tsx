import React from 'react';

export default function AISVG() {
  return (
    <svg viewBox="0 0 560 315" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g-bg4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#040608"/>
          <stop offset="100%" stop-color="#06080c"/>
        </linearGradient>
        <linearGradient id="g-terminal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0a0f18"/>
          <stop offset="100%" stop-color="#060c14"/>
        </linearGradient>
        <filter id="f-textglow">
          <feGaussianBlur stdDeviation="2" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="f-orbglow">
          <feGaussianBlur stdDeviation="10" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="g-ambient4" cx="75%" cy="50%" r="45%">
          <stop offset="0%" stop-color="#c8f135" stop-opacity=".06"/>
          <stop offset="100%" stop-color="#c8f135" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <rect width="560" height="315" fill="url(#g-bg4)"/>
      <rect width="560" height="315" fill="url(#g-ambient4)"/>

      {/* Terminal window */}
      <rect x="30" y="28" width="310" height="260" rx="10" fill="url(#g-terminal)" stroke="#1a2a3a" stroke-width="1.2"/>
      {/* terminal chrome */}
      <rect x="30" y="28" width="310" height="28" rx="10" fill="#0d1520"/>
      <rect x="30" y="44" width="310" height="12" fill="#0d1520"/>
      {/* traffic lights */}
      <circle cx="52" cy="42" r="5" fill="#ff5f57" opacity=".8"/>
      <circle cx="68" cy="42" r="5" fill="#febc2e" opacity=".8"/>
      <circle cx="84" cy="42" r="5" fill="#28c840" opacity=".8"/>
      {/* title */}
      <text x="185" y="46" text-anchor="middle" fill="rgba(240,237,232,.25)" font-size="8" font-family="DM Mono,monospace">claude_agent.py — python3</text>

      {/* terminal content */}
      <g font-family="DM Mono,monospace" font-size="9.5" filter="url(#f-textglow)">
        {/* prompt line 1 */}
        <text x="46" y="78" fill="#c8f135" opacity=".9">$</text>
        <text x="58" y="78" fill="rgba(240,237,232,.7)">python claude_agent.py --task</text>
        <text x="58" y="78" fill="#63b3ff" dx="168">"automate infra"</text>

        {/* system init */}
        <text x="46" y="96" fill="rgba(240,237,232,.25)">▸ Initializing Claude claude-3-5-sonnet...</text>
        <text x="46" y="112" fill="rgba(240,237,232,.25)">▸ Loading tools: [bash, filesystem, web]</text>

        {/* agent thinking */}
        <text x="46" y="130" fill="#c8f135" opacity=".7">◆ AGENT</text>
        <text x="46" y="130" fill="rgba(240,237,232,.5)" dx="56">Analyzing infrastructure requirements</text>

        {/* tool call */}
        <text x="46" y="148" fill="#ff9900" opacity=".8">⚙ TOOL_USE</text>
        <text x="46" y="148" fill="rgba(240,237,232,.4)" dx="72">bash("terraform plan -out=infra.tfplan")</text>

        {/* output */}
        <text x="46" y="166" fill="rgba(240,237,232,.2)">  Plan: 12 to add, 0 to change, 0 to destroy</text>

        {/* tool call 2 */}
        <text x="46" y="184" fill="#ff9900" opacity=".8">⚙ TOOL_USE</text>
        <text x="46" y="184" fill="rgba(240,237,232,.4)" dx="72">bash("terraform apply -auto-approve")</text>

        {/* streaming response */}
        <text x="46" y="202" fill="#63b3ff" opacity=".7">◆ AGENT</text>
        <text x="46" y="202" fill="rgba(240,237,232,.5)" dx="56">Deploying 3 EC2 instances across AZs...</text>

        {/* success */}
        <text x="46" y="220" fill="#00c851" opacity=".9">✓ DONE</text>
        <text x="46" y="220" fill="rgba(240,237,232,.6)" dx="44">Infrastructure deployed in 2m 14s</text>

        {/* next prompt */}
        <text x="46" y="240" fill="#c8f135" opacity=".9">$</text>
        {/* cursor blink */}
        <rect x="58" y="230" width="7" height="12" rx="1" fill="#c8f135" opacity=".8">
          <animate attributeName="opacity" values=".8;0;.8" dur="1s" repeatCount="indefinite"/>
        </rect>
      </g>

      {/* Right panel: Agent loop diagram */}
      <g transform="translate(390,157)">
        {/* outer ring */}
        <circle cx="0" cy="0" r="85" fill="none" stroke="#1a2a3a" stroke-width="1" stroke-dasharray="4,4" opacity=".5"/>

        {/* inner glow circle */}
        <circle cx="0" cy="0" r="38" fill="rgba(200,241,53,.04)" stroke="#c8f135" stroke-width="1" stroke-opacity=".2" filter="url(#f-orbglow)"/>
        <circle cx="0" cy="0" r="38" fill="none" stroke="#c8f135" stroke-width="1" stroke-opacity=".3"/>

        {/* center brain */}
        <text x="0" y="6" text-anchor="middle" fill="#c8f135" font-size="22" opacity=".8" filter="url(#f-orbglow)">🧠</text>

        {/* orbit nodes */}
        {/* PERCEIVE top */}
        <circle cx="0" cy="-85" r="18" fill="#0a1520" stroke="#63b3ff" stroke-width="1.2" stroke-opacity=".7"/>
        <text x="0" y="-82" text-anchor="middle" fill="#63b3ff" font-size="11">👁</text>

        {/* REASON right */}
        <circle cx="85" cy="0" r="18" fill="#0a1520" stroke="#c8f135" stroke-width="1.2" stroke-opacity=".7"/>
        <text x="85" y="8" text-anchor="middle" fill="#c8f135" font-size="11">⚡</text>

        {/* ACT bottom */}
        <circle cx="0" cy="85" r="18" fill="#0a1520" stroke="#63b3ff" stroke-width="1.2" stroke-opacity=".7"/>
        <text x="0" y="94" text-anchor="middle" fill="#63b3ff" font-size="11">🔧</text>

        {/* REFLECT left */}
        <circle cx="-85" cy="0" r="18" fill="#0a1520" stroke="#ff9900" stroke-width="1.2" stroke-opacity=".6"/>
        <text x="-85" y="8" text-anchor="middle" fill="#ff9900" font-size="11">◎</text>

        {/* orbit arrows */}
        <path d="M 18,-80 A 85,85 0 0,1 80,-18" stroke="#63b3ff" stroke-width="1.2" fill="none" opacity=".5" marker-end="url(#arrow-blue)"/>
        <path d="M 80,18 A 85,85 0 0,1 18,80" stroke="#c8f135" stroke-width="1.2" fill="none" opacity=".5" marker-end="url(#arrow-lime)"/>
        <path d="M -18,80 A 85,85 0 0,1 -80,18" stroke="#63b3ff" stroke-width="1.2" fill="none" opacity=".4" marker-end="url(#arrow-blue)"/>
        <path d="M -80,-18 A 85,85 0 0,1 -18,-80" stroke="#ff9900" stroke-width="1.2" fill="none" opacity=".4" marker-end="url(#arrow-orange)"/>
      </g>

      {/* arrowhead markers */}
      <defs>
        <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#63b3ff" opacity=".7"/>
        </marker>
        <marker id="arrow-lime" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#c8f135" opacity=".7"/>
        </marker>
        <marker id="arrow-orange" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#ff9900" opacity=".6"/>
        </marker>
      </defs>

      {/* divider line */}
      <line x1="350" y1="28" x2="350" y2="288" stroke="#1a2a3a" stroke-width=".8" stroke-dasharray="3,3"/>
    </svg>
  );
}
