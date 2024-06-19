import React from "react"

export default function Home({ width, height, color }: { width?: number, height?: number, color?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 6.41532C0 5.61801 0.473571 4.89686 1.20523 4.58002L11.2052 0.249548C11.7123 0.0299521 12.2877 0.0299523 12.7948 0.249548L22.7948 4.58002C23.5264 4.89686 24 5.61801 24 6.41532V14.6054V19.164V21.9985C24 23.1031 23.1046 23.9985 22 23.9985H17C15.8954 23.9985 15 23.1031 15 21.9985V21.1641V16.4951C15 15.9428 14.5523 15.4951 14 15.4951H10C9.44772 15.4951 9 15.9428 9 16.4951V21.1641V21.9985C9 23.1031 8.10457 23.9985 7 23.9985H2C0.89543 23.9985 0 23.1031 0 21.9985V19.1641V14.6054V6.41532Z" fill={color}/>
    </svg>
  )
}
