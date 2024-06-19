import React from "react"

export default function Layout({ width, height, color }: { width?: number, height?: number, color?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10.56" height="10.56" rx="2" fill={color}/>
      <rect x="13.44" width="10.56" height="10.56" rx="2" fill={color}/>
      <rect x="13.44" y="13.44" width="10.56" height="10.56" rx="2" fill={color}/>
      <rect y="13.44" width="10.56" height="10.56" rx="2" fill={color}/>
    </svg>
  )
}
