import React from 'react'

export default function ChevronIcon({ color, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      preserveAspectRatio="xMidYMin slice"
      style={{
        width: '100%',
        paddingBottom: '100%',
        height: 1,
        overflow: 'visible'
      }}
      width={size || 40}
      height={size || 40}
    >
      <g>
        {/* <rect fill={color} width="40" height="40" /> */}
        <path
          fill={color || '#ee1528'}
          d="M39.2,21.21s-15.955.015-15.954,0V5a.8.8,0,0,0-.8-.81h-4.9a.8.8,0,0,0-.8.81V21.21c-.113,0-15.992-.009-15.954,0a.8.8,0,0,0-.8.81v4.972a.8.8,0,0,0,.8.81h.717v5.968A10.351,10.351,0,0,0,11.766,44.192H28.234A10.35,10.35,0,0,0,38.486,33.769V27.8H39.2a.8.8,0,0,0,.8-.81V22.02A.8.8,0,0,0,39.2,21.21ZM18.344,5.812h3.311V26.181H18.344ZM1.594,22.83H16.751v3.351H1.594Zm35.3,10.939a8.742,8.742,0,0,1-8.659,8.8H11.766a8.742,8.742,0,0,1-8.659-8.8V27.8H36.892v5.968Zm1.514-7.588H23.249V22.83H38.406v3.351Z"
          transform="translate(0 -4.192)"
        />
        <path
          fill={color || '#ee1528'}
          d="M378.1,323.2h-.956a.81.81,0,0,0,0,1.62h.956a.81.81,0,0,0,0-1.62Z"
          transform="translate(-346.948 -297.863)"
        />
        <path
          fill={color || '#ee1528'}
          d="M84.048,323.2H63.012a.81.81,0,0,0,0,1.62H84.048a.81.81,0,0,0,0-1.62Z"
          transform="translate(-57.354 -297.863)"
        />
        <path
          fill={color || '#ee1528'}
          d="M88.51,371.137h-25.5a.81.81,0,0,0,0,1.62h25.5a.81.81,0,0,0,0-1.62Z"
          transform="translate(-57.354 -341.992)"
        />
        <path
          fill={color || '#ee1528'}
          d="M109.2,419.073H85.451a.81.81,0,0,0,0,1.62H109.2a.81.81,0,0,0,0-1.62Z"
          transform="translate(-78.04 -386.121)"
        />
      </g>
    </svg>
  )
}
