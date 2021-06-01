import React, { useMemo } from 'react'

import SVG from '../../../components/SVG'

const scale = d => Math.sqrt(d / 100 * 131.71) ** 2

const Rating = ({ data, ratio }) => {
  const splitY = useMemo(() => 226.8 - 129.9 + 129.9 * 2 * ratio / 100, [ratio])
  return (
    <SVG viewBox="0 0 320 434">
      <clipPath id="splitY">
        <rect x="0" y="0" width="320" height={splitY} />
      </clipPath>
      <circle cx="183.37" cy="226.82" r="131.71" fill="#d2ede8"/>
      <circle cx="183.37" cy="226.82" r="129.95" fill="none" stroke="#fff"/>
      <circle cx="183.37" cy="226.82" r="129.95" fill="#c4eae4" clipPath="url(#splitY)"/>
      <path fill="none" stroke="#b3b3b3" strokeLinejoin="round" d="M110.62 169.73v-44.3l100.46-54.57M218.49 200.77v-86.43l64.45-43.48"/>
      <circle cx="220.2" cy="200.77" r={scale(data.BBB)} fill="#00796d"/>
      <circle cx="110.62" cy="169.73" r={scale(data.A)} fill="#00796d"/>
      <circle cx="78.34" cy="233.32" r={scale(data.AA)} fill="#00796d"/>
      <circle cx="65.98" cy="252.89" r={scale(data.AAA)} fill="#00796d"/>
      <circle cx="121.13" cy="310.03" r={scale(data.BB)} fill="#bae659"/>
      <circle cx="168.65" cy="330.5" r={scale(data.B)} fill="#bae659"/>
      <circle cx="202.57" cy="323.9" r={scale(data.CCC)} fill="#bae659"/>
      <circle cx="233.85" cy="318.36" r={scale(data['無評等'])} fill="#bae659"/>
      <path d="M47.1 381.19h44.4a11.54 11.54 0 0111.5 11.54 11.54 11.54 0 01-11.5 11.54H47.1a11.54 11.54 0 01-11.54-11.54 11.54 11.54 0 0111.54-11.54z" fill="#bae659" opacity=".27"/>
      <g>
        <text transform="translate(59.19 397.9)" fontSize="14" fill="#333" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
          BB
        </text>
      </g>
      <text transform="translate(46.62 421.96)" fontSize="16" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
        {data.BB}%
      </text>
      <path d="M119.12 381.19h44.4a11.54 11.54 0 0111.54 11.54 11.54 11.54 0 01-11.54 11.54h-44.4a11.54 11.54 0 01-11.54-11.54 11.54 11.54 0 0111.54-11.54z" fill="#bae659" opacity=".27"/>
      <g>
        <text transform="translate(136.26 397.9)" fontSize="14" fill="#333" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
          B
        </text>
      </g>
      <text transform="translate(123.08 421.4)" fontSize="16" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
        {data.B}%
      </text>
      <path d="M191.13 381.19h44.4a11.54 11.54 0 0111.54 11.54 11.54 11.54 0 01-11.54 11.54h-44.4a11.54 11.54 0 01-11.54-11.54 11.54 11.54 0 0111.54-11.54z" fill="#bae659" opacity=".27"/>
      <g>
        <text transform="translate(198.16 397.9)" fontSize="14" fill="#333" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
          CCC
        </text>
      </g>
      <text transform="translate(195.1 422.52)" fontSize="16" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
        {data.CCC}%
      </text>
      <path d="M263.15 381.19h44.4a11.54 11.54 0 0111.54 11.54 11.54 11.54 0 01-11.54 11.54h-44.4a11.54 11.54 0 01-11.54-11.54 11.54 11.54 0 0111.54-11.54z" fill="#bae659" opacity=".27"/>
      <g>
        <text transform="translate(264.35 397.9)" fontSize="14" fill="#333">
          無評等
        </text>
      </g>
      <text transform="translate(267.11 422.3)" fontSize="16" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
        {data['無評等']}%
      </text>
      <path d="M47.1 21.49h44.4A11.54 11.54 0 01103 33a11.54 11.54 0 01-11.5 11.57H47.1A11.54 11.54 0 0135.56 33 11.54 11.54 0 0147.1 21.49z" fill="#c4eae4"/>
      <g>
        <g>
          <text transform="translate(54.39 38.2)" fontSize="14" fill="#333" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
            AAA
          </text>
        </g>
      </g>
      <text transform="translate(46.62 62.26)" fontSize="16" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
        {data.AAA}%
      </text>
      <path d="M119.12 21.49h44.4A11.54 11.54 0 01175.06 33a11.54 11.54 0 01-11.54 11.54h-44.4A11.54 11.54 0 01107.58 33a11.53 11.53 0 0111.54-11.51z" fill="#c4eae4"/>
      <g>
        <g>
          <text transform="translate(131.46 38.2)" fontSize="14" fill="#333" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
            AA
          </text>
        </g>
      </g>
      <text transform="translate(123.08 61.7)" fontSize="16" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
        {data.AA}%
      </text>
      <g>
        <path d="M191.13 21.49h44.4A11.54 11.54 0 01247.07 33a11.54 11.54 0 01-11.54 11.54h-44.4A11.54 11.54 0 01179.59 33a11.54 11.54 0 0111.54-11.51z" fill="#c4eae4"/>
        <g>
          <g>
            <text transform="translate(208.53 38.2)" fontSize="14" fill="#333" fontFamily="Arial-BoldMT, Arial" fontWeight="700" letter-spacing="-.04em">
              A
            </text>
          </g>
        </g>
        <text transform="translate(195.1 62.82)" fontSize="16" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
          {data.A}%
        </text>
      </g>
      <g>
        <path d="M263.15 21.49h44.4A11.54 11.54 0 01319.09 33a11.54 11.54 0 01-11.54 11.54h-44.4A11.54 11.54 0 01251.61 33a11.53 11.53 0 0111.54-11.51z" fill="#c4eae4"/>
        <g>
          <g>
            <text transform="translate(271.04 38.2)" fontSize="14" fill="#333" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
              BBB
            </text>
          </g>
        </g>
        <text transform="translate(267.11 62.6)" fontSize="16" fontFamily="Arial-BoldMT, Arial" fontWeight="700">
          {data.BBB}%
        </text>
      </g>
      <path fill="none" stroke="#b3b3b3" strokeLinejoin="round" d="M72.71 373.21v-31.47l30.33-17.84M141.15 373.21v-31.47l10.85-6.38M206.15 331.22l9.86 10.52v31.47M239.46 323.9l53.13 26.02v23.29M64.95 73.74v172.45M78.34 226.82V101.84L134 70.86"/>
      <path fill="#bae659" d="M16.59 0L.67 17.82V404.7l15.92 17.82 15.92-17.82V17.82L16.59 0z"/>
      <path fill="#00796d" d="M16.59 0L.67 17.82V404.7l15.92 17.82 15.92-17.82V17.82L16.59 0z" clipPath="url(#splitY)"/>
      <g>
        <g fontSize="16" fill="#fff">
          <text transform="matrix(.98 0 0 1 11.24 112.41)">
            B
          </text>
          <text transform="matrix(.98 0 0 1 11.24 130.41)">
            B
          </text>
          <text transform="matrix(.98 0 0 1 11.24 148.41)">
            B
          </text>
          <text transform="matrix(.98 0 0 1 8.74 166.41)">
            以
          </text>
          <text transform="matrix(.98 0 0 1 8.74 184.41)">
            上
          </text>
        </g>
      </g>
      <g>
        <g fontSize="16" fill="#333">
          <text transform="translate(11.15 311.89)">
            B
          </text>
          <text transform="translate(11.15 329.89)">
            B
          </text>
          <text transform="translate(11.15 347.89)">
            B
          </text>
          <text transform="translate(8.6 365.89)">
            以
          </text>
          <text transform="translate(8.6 383.89)">
            下
          </text>
        </g>
      </g>
    </SVG>
  )
}


export default Rating
