import ProfileInfo from "./ProfileInfo"



const Profile = () => {
  return (
    <div className="w-full flex  gap-9 ">
        <div className="w-[150px] h-[150px] bg-yellow-400 rounded-lg border-8 border-Background mt-[-40px]" style={{
        backgroundImage: `url(})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}></div>


      <div className="flex flex-col pt-4 gap-4 lg:flex-row lg:items-start">
        <ProfileInfo  info={'Followers'} infoValue={''}/>
        <ProfileInfo  info={'Following'} infoValue={''}/>
        <ProfileInfo  info={'Location'} infoValue={''}/>

      </div>
    </div>
  )
}

export default Profile