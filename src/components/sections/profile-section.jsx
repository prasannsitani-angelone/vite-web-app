import { GiftIcon } from "../../assets"

const ProfileSection = (props) => {
  return (
    <div className='flex flex-col'>
      <div className='flex bg-gray-800 w-fit py-1 px-2 items-center gap-1 rounded-full'>
        <GiftIcon />
        <text className='text-xs'>Send gift</text>
      </div>
      <div>
        <div className='avatar'>
          <div className='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img src='https://randomuser.me/api/portraits/women/81.jpg' />
          </div>
        </div>
        <text>artbytraveler</text>
        <button className='btn-outline text-sm text-white'>Follow</button>
        <text>Share with your friends in Bangalorecsac sncsancas ncoan</text>
        <div className='avatar-group -space-x-2'>
          <div className='avatar'>
            <div className='w-4'>
              <img src='https://randomuser.me/api/portraits/women/81.jpg' />
            </div>
          </div>
          <div className='avatar'>
            <div className='w-4'>
              <img src='https://randomuser.me/api/portraits/women/81.jpg' />
            </div>
          </div>
          <div className='avatar'>
            <div className='w-4'>
              <img src='https://randomuser.me/api/portraits/women/81.jpg' />
            </div>
          </div>
        </div>
        <text>Liked by user_name and 23706 others</text>
      </div>
    </div>
  )
}

export default ProfileSection
