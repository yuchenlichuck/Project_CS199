import React from 'react'
import Svg, { Path, G } from 'react-native-svg'

export default function EmptyPlateIcon({ width, height }) {
  return (
    <Svg
      viewBox="0 0 116 92"
      preserveAspectRatio="xMidYMin"
      width={width || 116}
      height={height || 92}
    >
      <G x={-158} y={-103}>
        <Path
          stroke="#ee1528"
          fill="#ee1528"
          d="M242.628,81.027a2.79,2.79,0,0,1-2.887-2.681V55.183a3.359,3.359,0,0,0-3.433-3.3H235.7V78.346a2.895,2.895,0,0,1-5.774,0V51.885h-.755a3.4,3.4,0,0,0-3.48,3.3V78.346a2.895,2.895,0,0,1-5.774,0V55.183c0-4.753,4.135-8.659,9.253-8.659h.755V2.681a2.9,2.9,0,0,1,5.774,0V46.524h.608a8.943,8.943,0,0,1,9.207,8.659V78.346A2.79,2.79,0,0,1,242.628,81.027Z"
          x={405}
          y={189}
          rotation={180}
        />
        <Path
          fill="#ee1528"
          d="M417.959,5.864a5.359,5.359,0,0,0-5.56-.787,4.842,4.842,0,0,0-3.049,4.465V82.934a2.864,2.864,0,0,0,5.72,0V55.642l8.426-5.225a2.677,2.677,0,0,0,1.3-2.261V20.139A18.608,18.608,0,0,0,417.959,5.864ZM419.073,46.7l-4,2.476V10.735a13.541,13.541,0,0,1,4,9.4Z"
          x={-150}
          y={103}
        />
        <G x={172} y={103}>
          <Path
            fill="#fff"
            d="M 46 89 C 40.1937141418457 89 34.56269836425781 87.86350250244141 29.26338577270508 85.62208557128906 C 24.1433277130127 83.45648193359375 19.54441452026367 80.35559844970703 15.59441471099854 76.40558624267578 C 11.64439964294434 72.45558929443359 8.543514251708984 67.85667419433594 6.377914428710938 62.73661422729492 C 4.136499881744385 57.43730163574219 3 51.8062858581543 3 46 C 3 40.1937141418457 4.136499881744385 34.56269836425781 6.377914428710938 29.26338577270508 C 8.543514251708984 24.1433277130127 11.64439964294434 19.54441452026367 15.59441471099854 15.59441471099854 C 19.54441452026367 11.64439964294434 24.1433277130127 8.543514251708984 29.26338577270508 6.377914428710938 C 34.56269836425781 4.136499881744385 40.1937141418457 3 46 3 C 51.8062858581543 3 57.43730163574219 4.136499881744385 62.73661422729492 6.377914428710938 C 67.85667419433594 8.543514251708984 72.45558929443359 11.64439964294434 76.40558624267578 15.59441471099854 C 80.35559844970703 19.54441452026367 83.45648193359375 24.1433277130127 85.62208557128906 29.26338577270508 C 87.86350250244141 34.56269836425781 89 40.1937141418457 89 46 C 89 51.8062858581543 87.86350250244141 57.43730163574219 85.62208557128906 62.73661422729492 C 83.45648193359375 67.85667419433594 80.35559844970703 72.45558929443359 76.40558624267578 76.40558624267578 C 72.45558929443359 80.35559844970703 67.85667419433594 83.45648193359375 62.73661422729492 85.62208557128906 C 57.43730163574219 87.86350250244141 51.8062858581543 89 46 89 Z"
          />
          <Path
            fill="#ee1528"
            d="M 46 6 C 23.94392395019531 6 6 23.94392395019531 6 46 C 6 68.05607604980469 23.94392395019531 86 46 86 C 68.05607604980469 86 86 68.05607604980469 86 46 C 86 23.94392395019531 68.05607604980469 6 46 6 M 46 0 C 71.40509033203125 0 92 20.59490966796875 92 46 C 92 71.40509033203125 71.40509033203125 92 46 92 C 20.59490966796875 92 0 71.40509033203125 0 46 C 0 20.59490966796875 20.59490966796875 0 46 0 Z"
          />
        </G>
        <Path
          stroke="#ee1528"
          strokeWidth="6"
          fill="none"
          d="M32,3A29,29,0,1,1,3,32,29,29,0,0,1,32,3Z"
          x={186}
          y={117}
        />
      </G>
    </Svg>
  )
}
