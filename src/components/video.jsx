const Video = (props) => {
  return (
    <div className='flex bg-gray-100 w-screen'>
      <video autoPlay muted>
        <source
          src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          type='video/mp4'
        />
        <source
          src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          type='video/ogg'
        />
        Your browser does not support HTML video.
      </video>
    </div>
  )
}

export default Video
