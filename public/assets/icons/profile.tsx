import React from "react"

export default function Profile({ width, height, color }: { width?: number, height?: number, color?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM1.2 12C1.2 17.9647 6.03533 22.8 12 22.8C17.9647 22.8 22.8 17.9647 22.8 12C22.8 6.03533 17.9647 1.2 12 1.2C6.03533 1.2 1.2 6.03533 1.2 12Z" fill={color}/>
      <path d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM9.2 9C9.2 10.5464 10.4536 11.8 12 11.8C13.5464 11.8 14.8 10.5464 14.8 9C14.8 7.4536 13.5464 6.2 12 6.2C10.4536 6.2 9.2 7.4536 9.2 9Z" fill={color}/>
      <path d="M4.5 20.5V20.5C7.09875 13.57 16.9012 13.57 19.5 20.5V20.5" stroke={color} strokeWidth="1.15"/>
    </svg>
  )
}
