import { GiftIcon } from "../../assets"

const ProfileSection = (props) => {
  return (
    <div className='flex flex-col gap-3 px-2 justify-end'>
      <div className='flex bg-gray-800 w-fit py-1 px-2 items-center gap-1 rounded-full'>
        <GiftIcon />
        <text className='text-xs'>Send gift</text>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4 items-center'>
          <div className='avatar'>
            <div className='w-8 ring rounded-full ring-offset-base-100 ring-offset-2 p-1'>
              <img
                className='rounded-full'
                src='https://randomuser.me/api/portraits/women/81.jpg'
              />
            </div>
          </div>
          <div>
            <text className='text-xs text-white font-bold'>artbytraveler</text>
          </div>
          <button className='btn-outline text-xs text-white'>Follow</button>
        </div>

        <div className='flex w-fit'>
          <text className='text-sm text-white line-clamp-1 text-left'>
            Share with your friends in Bangalore sassa asa sas cascsac cscas
            csacs
          </text>
        </div>
      </div>

      <div className='flex gap-2 items-center'>
        <div class='flex -space-x-0.5'>
          <img
            class='inline-block h-3 w-3 rounded-full ring-2 ring-white dark:ring-gray-800'
            src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
            alt='Image Description'
          />
          <img
            class='inline-block h-3 w-3 rounded-full ring-2 ring-white dark:ring-gray-800'
            src='https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
            alt='Image Description'
          />
          <img
            class='inline-block h-3 w-3 rounded-full ring-2 ring-white dark:ring-gray-800'
            src='https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80'
            alt='Image Description'
          />
          <img
            class='inline-block h-3 w-3 rounded-full ring-2 ring-white dark:ring-gray-800'
            src='https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80'
            alt='Image Description'
          />
        </div>
        <div>
          <text className='text-xs'>Liked by user_name and 23706 others</text>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
