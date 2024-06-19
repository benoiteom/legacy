import React from "react"

export default function Dropdown({ width, height, color, rotate }: { width?: number, height?: number, color?: string, rotate?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${rotate}deg)`, transition: 'ease-in-out 0.2s' }}>
      <path d="M12.982 17.1496C12.4183 17.6377 11.5817 17.6377 11.018 17.1496L4.64906 11.6339C3.5992 10.7247 4.24221 9 5.63104 9L18.369 9C19.7578 9 20.4008 10.7247 19.3509 11.6339L12.982 17.1496Z" fill={color} />
    </svg>
  )
}
