import React from "react"
import { CommentIcon, HeartIcon, MenuIcon, ShareIcon } from "../assets"
import { createSignal } from "solid-js"

const LikeSection = (props) => {
  const [like, setLike] = createSignal(false)

  return (
    <div className='flex flex-col items-center gap-3 '>
      <div
        className='flex flex-col items-center w-12 gap-2'
        onClick={() => setLike((prev) => !prev)}
      >
        {<HeartIcon isSelected={like()} />}
        <text className='text-xs text-white font-semibold'>23.7K</text>
      </div>
      <div className='flex flex-col items-center w-12 gap-2'>
        <CommentIcon />
        <text className='text-xs text-white font-semibold'>47</text>
      </div>
      <div className='flex flex-col  items-center w-12 gap-2'>
        <ShareIcon />
        <text className='text-xs text-white font-semibold'>15.2K</text>
      </div>
      <div className='flex flex-col items-center w-12'>
        <MenuIcon />
      </div>
      <div className='flex flex-col items-center w-8  bg-white p-0.5 rounded-md'>
        <img
          src='https://img.freepik.com/premium-photo/illuminati-eye-amazing-background-epic-effects-fire-illustration_820303-11.jpg?w=2000'
          alt='profile'
          className='rounded-md'
        />
      </div>
    </div>
  )
}

export default LikeSection
