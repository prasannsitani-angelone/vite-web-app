const HeartIcon = (props) => {
  return (
    <svg
      class='h-5 w-5'
      viewBox='0 0 24 24'
      fill={props.isSelected ? "red" : "none"}
      stroke={!props.isSelected ? "white" : "none"}
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
    </svg>
  )
}

export default HeartIcon
