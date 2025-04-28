import React from 'react'

export default function SocailIcon({ socialData, callBack, imageUrl }) {
  const { name, icon, viewBox, css, link } = socialData;
  return (
    <a className={`p-2 border rounded-[50%] duration-200 social-fill-white-hover cursor-pointer ` + css.css} onClick={() => { callBack(imageUrl)}} style={{borderColor: css.color}} alt={name}>
      {
        <svg xmlns="http://www.w3.org/2000/svg" fill={css.color} viewBox={viewBox} width={'18px'} height={'18px'}>{icon}</svg>
      }
    </a>
  )
}
