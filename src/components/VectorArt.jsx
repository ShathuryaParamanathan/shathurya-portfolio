import React from "react";

export default function VectorArt({ className = "" }) {
  // Abstract blob + dotted orbit + floating icons (reference-like, lightweight inline SVG)
  return (
    <svg
      className={className}
      viewBox="0 0 640 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="blob" x1="120" y1="80" x2="560" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF2D2D" stopOpacity="0.95" />
          <stop offset="1" stopColor="#A855F7" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient
          id="shine"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(320 180) rotate(20) scale(260 170)"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.28" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="b1" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* big blurred blob */}
      <g filter="url(#b1)" opacity="0.95">
        <ellipse cx="332" cy="200" rx="240" ry="150" fill="url(#blob)" />
      </g>
      <ellipse cx="332" cy="200" rx="220" ry="138" fill="url(#shine)" opacity="0.9" />

      {/* dotted orbit */}
      <path
        d="M104 252C190 286 262 304 332 304C414 304 482 280 560 248"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="2"
        strokeDasharray="2 10"
      />

      {/* floating icons */}
      <g id="va-plus" opacity="0.95">
        <circle cx="168" cy="150" r="22" fill="rgba(0,0,0,0.55)" stroke="rgba(255,255,255,0.2)" />
        <path d="M160 150h16" stroke="#FF2D2D" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M168 142v16" stroke="#FF2D2D" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      <g id="va-wave" opacity="0.95">
        <rect
          x="468"
          y="132"
          width="46"
          height="46"
          rx="14"
          fill="rgba(0,0,0,0.55)"
          stroke="rgba(255,255,255,0.2)"
        />
        <path d="M480 158c6-10 16-10 22 0" stroke="#FF2D2D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="487" cy="153" r="2" fill="#FF2D2D" />
        <circle cx="501" cy="153" r="2" fill="#FF2D2D" />
      </g>

      <g id="va-check" opacity="0.95">
        <circle cx="332" cy="294" r="16" fill="rgba(0,0,0,0.55)" stroke="rgba(255,255,255,0.2)" />
        <path
          d="M326 294l4 4 9-10"
          stroke="#FF2D2D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

