import React from "react"

export default function Arrow({ width, height, color }: { width?: number, height?: number, color?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L12 21" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <path d="M19.7782 14L12 21.7782" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <path d="M11.7782 21.7782L4.00002 14" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}
