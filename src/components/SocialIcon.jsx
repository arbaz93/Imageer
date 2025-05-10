import React from 'react'

export default function SocialIcon({ socialData, callBack, imageUrl }) {
  const { name, icon, viewBox, css } = socialData;
  return (
    <a className={`p-2 border rounded-[50%] duration-200 cursor-pointer ` + css.css} onClick={() => { callBack(imageUrl)}} style={{borderColor: css.color}} alt={name}>
      {
        <svg xmlns="http://www.w3.org/2000/svg" fill={css.color} viewBox={viewBox} width={'18px'} height={'18px'}>{icon}</svg>
      }
    </a>
  )
}
