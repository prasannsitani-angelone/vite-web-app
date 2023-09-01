const CameraIcon = (props) => {
  return (
    <svg
      class='h-5 w-5 text-white'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      {" "}
      <path d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z' />{" "}
      <circle cx='12' cy='13' r='4' />
    </svg>
  )
}

export default CameraIcon
