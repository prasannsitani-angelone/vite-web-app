import { CameraIcon } from "../assets"
import LikeSection from "./like-section"

const VideoControls = (props) => {
  return (
    <div class=' top-0 left-0 bg-gradient-to-t from-black h-full w-screen'>
      <div className='flex flex-col justify-between h-[calc(100vh-100px)]'>
        <div className='flex justify-between items-center p-3'>
          <text className='text-white font-bold text-3xl'>Reels</text>
          <CameraIcon style={{ height: 24, width: 24 }} />
        </div>
        <div className='flex flex-row justify-between p-1'>
          <text> Profile Section </text>
          <LikeSection />
        </div>
      </div>
    </div>
  )
}

export default VideoControls