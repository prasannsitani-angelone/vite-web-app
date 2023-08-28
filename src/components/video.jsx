const Video = (props) => {
  return (
    <video width='400' controls>
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
  )
}

export default Video
