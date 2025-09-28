import React from 'react'

const Logo = () => {
  return (
      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 120"
            width="250"
            height="75"
            role="img"
            aria-label="sanjaM logo"
            className="img-fluid"
          >
            <rect x="8" y="8" width="104" height="104" rx="18" fill="#0f172a" />
            <path
              d="M36 36 C50 20, 82 28, 70 44 C58 60, 30 56, 44 74"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M70 46 C74 68, 56 78, 52 86 L52 92"
              fill="none"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="52" cy="96" r="2.6" fill="#ffffff" />

            <text
              x="136"
              y="78"
              style={{
                fontFamily: "Centera, sans-serif",
                fontWeight: 700,
                fontSize: "56px",
                letterSpacing: "-2px",
              }}
              fill="#ffffffff"
            >
              sanja<tspan fill="#f59e0b">M</tspan>
            </text>

            <rect x="136" y="86" width="175" height="6" rx="3" fill="#f59e0b" />
          </svg>
  )
}

export default Logo
