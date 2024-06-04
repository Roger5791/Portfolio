'use client'

import {RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiFacebookFill, RiInstagramFill  } from 'react-icons/ri'

import Link from 'next/link'

const icons = [
  {
    path: 'https://youtube.com',
    name: <RiYoutubeFill />
  },
  {
    path: 'https://linkedin.com',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/Roger5791',
    name: <RiGithubFill />
  },
  {
    path: 'https://facebook.com',
    name: <RiFacebookFill />
  },
  {
    path: 'https://instagram.com',
    name: <RiInstagramFill />
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
    {icons.map((icon, index)=> {
      return (
        <Link target='_blank' href={icon.path} key={index}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      )
    })}
    </div>
  )
}

export default Socials