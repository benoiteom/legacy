import React from "react"

export default function Work({ width, height, color }: { width?: number, height?: number, color?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="17.3333" rx="2" fill={color}/>
      <path d="M9.79877 19.3345C9.89135 19.2481 10.0133 19.2 10.1399 19.2H13.86C13.9867 19.2 14.1086 19.2481 14.2012 19.3345L18.2726 23.1345C18.6044 23.4441 18.3853 24 17.9315 24H6.0685C5.61469 24 5.39558 23.4441 5.72734 23.1345L9.79877 19.3345Z" fill={color}/>
    </svg>
  )
}
