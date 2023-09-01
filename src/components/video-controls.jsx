import { CameraIcon } from "../assets"

const VideoControls = (props) => {
  return (
    <div class='absolute top-0 left-0 bg-gradient-to-t from-black h-full w-screen p-3'>
      <div className='flex justify-between items-center'>
        <text className='text-white font-bold text-3xl'>Reels</text>
        <CameraIcon style={{ height: 24, width: 24 }} />
      </div>
    </div>
  )
}

export default VideoControls
