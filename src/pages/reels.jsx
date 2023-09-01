import { Video } from "../components"
import VideoControls from "../components/video-controls"

const Reels = (props) => {
  return (
    <div className='h-screen w-screen carousel carousel-vertical'>
      <div className='relative carousel-item h-full'>
        <Video />
        <VideoControls />
      </div>
      <div className='relative carousel-item h-full'>
        <Video />
        <VideoControls />
      </div>
    </div>
  )
}

export default Reels
