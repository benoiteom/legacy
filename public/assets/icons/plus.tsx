import React from "react"

export default function Plus({ width, height, color }: { width?: number, height?: number, color?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12.5H24" stroke={color} strokeWidth="4" strokeLinecap="round"/>
      <path d="M13.5 2L13.5 24" stroke={color} strokeWidth="4" strokeLinecap="round"/>
    </svg>
  )
}
