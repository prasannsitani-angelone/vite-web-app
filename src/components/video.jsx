const Video = (props) => {
  return (
    <div className='flex bg-gray-900 w-screen'>
      <video autoPlay muted>
        <source src='src/video/reel.mp4' type='video/mp4' />
        <source src='src/video/reel.mp4' type='video/ogg' />
        Your browser does not support HTML video.
      </video>
    </div>
  )
}

export default Video
