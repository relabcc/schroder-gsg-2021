import React, { useMemo } from 'react'

import SVG from '../../../components/SVG'

const scale = d => Math.sqrt(d / 100 * 222.98) ** 2

// cx="581.06" cy="344.84" r="222.98"
const Rating = ({ data, ratio }) => {
  const splitX = useMemo(() => 358.08 + 445.96 * (100 - ratio) / 100, [ratio])
  return (
    <SVG viewBox="0 0 1120 584.62">
      <clipPath id="splitX">
        <rect x="0" y="0" width={splitX} height="584.62" />
      </clipPath>
      <clipPath id="innerCircle">
        <circle cx="581.06" cy="344.84" r="216.15" />
      </clipPath>
      <polygon points="967.46 43.16 481.3 43.16 200.99 43.16 185.14 59.08 200.99 75 481.3 75 967.46 75 983.32 59.08 967.46 43.16" fill="#00796d"/>
      <polygon points="967.46 43.16 481.3 43.16 200.99 43.16 185.14 59.08 200.99 75 481.3 75 967.46 75 983.32 59.08 967.46 43.16" fill="#bae659" clipPath="url(#splitX)"/>
      <path transform="translate(-20 0)" d="M863.69 93h54.7a14.22 14.22 0 0114.22 14.22 14.22 14.22 0 01-14.22 14.22h-54.7a14.22 14.22 0 01-14.22-14.22A14.22 14.22 0 01863.69 93zM863.69 133h54.7a14.22 14.22 0 0114.22 14.22 14.22 14.22 0 01-14.22 14.22h-54.7a14.22 14.22 0 01-14.22-14.22A14.22 14.22 0 01863.69 133z" fill="#c4eae4"/>
      <circle cx="581.06" cy="344.84" r="222.98" fill="#c4eae4"/>
      <circle cx="581.06" cy="344.84" r="222.98" fill="#d2ede8" clipPath="url(#splitX)"/>
      {/* <path d="M358.39 356.61A222.94 222.94 0 00481.3 544.3V145.37a223 223 0 00-122.91 211.24z" fill="#d2ede8"/> */}
      <path fill="none" stroke="#b3b3b3" strokeLinejoin="round" d="M658.63 202.44l14.55-14.56h150.47M750.83 463.86l13.97 18.89h58.85"/>

      <circle cx="581.06" cy="344.84" r="216.15" fill="none" stroke="#fff"/>
      <circle cx="626.92" cy="400.38" r={scale(data.BBB)} fill="#00796d"/>
      <circle cx="656.55" cy="206.38" r={scale(data.A)} fill="#00796d"/>
      <circle cx="569.86" cy="163.81" r={scale(data.AA)} fill="#00796d"/>
      <circle cx="536.13" cy="142.51" r={scale(data.AAA)} fill="#00796d"/>
      <circle cx="441.9" cy="241.35" r={scale(data.BB)} fill="#bae659"/>
      <circle cx="420.04" cy="319.46" r={scale(data.B)} fill="#bae659"/>
      <circle cx="413.75" cy="377.93" r={scale(data.CCC)} fill="#bae659"/>
      <circle cx="423.29" cy="431.84" r={scale(data['無評等'])} fill="#bae659"/>
      <g>
        <g fontSize="19.87" fill="#333" fontWeight="700" fontFamily="Arial-BoldMT, Arial">
          <text transform="translate(846.97 112.56)">
            A<tspan x="14.35" y="0" letterSpacing="-.04em">A</tspan>
          </text>
          <text transform="translate(875.67 112.56)" letterSpacing="-.08em">
            A
          </text>
        </g>
      </g>
      <g>
        <text transform="matrix(.98 0 0 1 846.34 66.3)" fontSize="20.82" fill="#fff">
          BBB以上
        </text>
      </g>
      <g>
        <g fontSize="19.87" fill="#333">
          <text transform="translate(214.04 66.3)" fontWeight="700">
            BBB
          </text>
          <text transform="translate(257.09 66.74)">
            以下
          </text>
        </g>
      </g>
      <g>
        <g fontSize="19.87" fill="#333" fontWeight="700" fontFamily="Arial-BoldMT, Arial">
          <text transform="translate(854.45 154.08)" letterSpacing="-.04em">
            A
          </text>
          <text transform="translate(868.8 154.08)" letterSpacing="-.08em">
            A
          </text>
        </g>
      </g>
      <path d="M193.86 156.29h54.7a14.22 14.22 0 0114.22 14.22 14.22 14.22 0 01-14.22 14.22h-54.7a14.22 14.22 0 01-14.22-14.22 14.22 14.22 0 0114.22-14.22zM193.86 249.91h54.7a14.22 14.22 0 0114.22 14.22 14.22 14.22 0 01-14.22 14.22h-54.7a14.22 14.22 0 01-14.22-14.22 14.22 14.22 0 0114.22-14.22z" fill="#bae659" opacity=".27"/>
      <g>
        <text transform="translate(206.87 178.72)" fontSize="19.87" fill="#333" fontWeight="700" fontFamily="Arial-BoldMT, Arial">
          BB
        </text>
      </g>
      <g>
        <text transform="translate(214.04 270.95)" fontSize="19.87" fill="#333" fontWeight="700" fontFamily="Arial-BoldMT, Arial">
          B
        </text>
      </g>
      <path d="M196.64 362.21h54.7a14.22 14.22 0 0114.22 14.22 14.22 14.22 0 01-14.22 14.22h-54.7a14.22 14.22 0 01-14.22-14.22 14.22 14.22 0 0114.22-14.22zM196.64 482.55h54.7a14.22 14.22 0 0114.22 14.22A14.22 14.22 0 01251.34 511h-54.7a14.22 14.22 0 01-14.22-14.22 14.22 14.22 0 0114.22-14.23z" fill="#bae659" opacity=".27"/>
      <g>
        <text transform="translate(200.66 384.64)" fontSize="19.87" fill="#333" fontWeight="700" fontFamily="Arial-BoldMT, Arial">
          CCC
        </text>
      </g>
      <g>
        <text transform="translate(193.06 503.91)" fontSize="20" fill="#333">
          無評等
        </text>
      </g>
      <text transform="translate(930.83 114.65)" fontSize="26.08" fill="#333">
        {data.AAA}
      </text>
      <text transform="translate(970.91 114.65)" fontSize="22" fill="#333">
        %
      </text>
      <path d="M842.08 468.33h54.7A14.22 14.22 0 01911 482.55a14.22 14.22 0 01-14.22 14.22h-54.7a14.22 14.22 0 01-14.22-14.22 14.22 14.22 0 0114.22-14.22z" fill="#c4eae4"/>
      <text transform="translate(846.97 489.94)" fontSize="19.87" fill="#333" fontWeight="700" fontFamily="Arial-BoldMT, Arial">
        BBB
      </text>
      <text transform="translate(916.32 490.03)" fontSize="26.08" fill="#333">
        {data.BBB}
      </text>
      <text transform="translate(970.91 490.03)" fontSize="22" fill="#333">
        %
      </text>
      <text transform="translate(930.83 154.08)" fontSize="26.08" fill="#333">
        {data.AA}
      </text>
      <text transform="translate(970.91 154.08)" fontSize="22" fill="#333">
        %
      </text>
      <text transform="translate(272.77 179.68)" fontSize="26.08" fill="#333">
        {data.BB}
      </text>
      <text transform="translate(323.47 179.68)" fontSize="22" fill="#333">
        %
      </text>
      <text transform="translate(272.77 270.95)" fontSize="26.08" fill="#333">
        {data.B}
      </text>
      <text transform="translate(317.47 270.95)" fontSize="22" fill="#333">
        %
      </text>
      <path fill="none" stroke="#fff" d="M481.3 153.03v383.6"/>
      <path fill="none" stroke="#b3b3b3" strokeLinejoin="round" d="M538.88 135.52l28.35-28.35h256.42M425.27 204.81l-33.22-33.22h-42.59M413.9 294.96l-33.22-33.22h-31.22"/>
      <text transform="translate(272.77 386.25)" fontSize="26.08" fill="#333">
        {data.CCC}
      </text>
      <text transform="translate(317.47 386.25)" fontSize="22" fill="#333">
        %
      </text>
      <text transform="translate(272.77 503.91)" fontSize="26.08" fill="#333">
        {data['無評等']}
      </text>
      <text transform="translate(317.47 503.91)" fontSize="22" fill="#333">
        %
      </text>
      <path fill="none" stroke="#b3b3b3" strokeLinejoin="round" d="M407.65 377.04h-58.19M349.46 492.89h24.17l41.62-52.18M575.72 159.93l14.55-14.56h233.38"/>
      <path d="M842.08 175.55h54.7A14.22 14.22 0 01911 189.77 14.21 14.21 0 01896.78 204h-54.7a14.22 14.22 0 01-14.22-14.22 14.22 14.22 0 0114.22-14.23z" fill="#c4eae4"/>
      <text transform="translate(862.34 196.59)" fontSize="19.87" fill="#333" fontWeight="700" fontFamily="Arial-BoldMT, Arial" letterSpacing="-.04em">
        A
      </text>
      <text transform="translate(916.32 196.59)" fontSize="26.08" fill="#333">
        {data.A}
      </text>
      <text transform="translate(970.91 196.59)" fontSize="22" fill="#333">
        %
      </text>
    </SVG>
  )
}


export default Rating
