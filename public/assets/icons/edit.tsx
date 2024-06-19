import React from "react"

export default function Edit({ width, height, color }: { width?: number, height?: number, color?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill={color}/>
      <rect x="15.3444" y="4.5" width="5.61604" height="13.4785" rx="1.5" transform="rotate(45 15.3444 4.5)" fill="white"/>
      <path d="M6.39119 18.3355C5.8345 18.4835 5.32571 17.9747 5.47369 17.418L6.46352 13.6943C6.61201 13.1357 7.30996 12.9479 7.71868 13.3567L10.4526 16.0906C10.8613 16.4993 10.6735 17.1972 10.1149 17.3457L6.39119 18.3355Z" fill="white"/>
    </svg>
  )
}
