interface ProfileInfoProps {
    info: string;
    infoValue: string | number;
  }


const ProfileInfo = ({info,infoValue }:ProfileInfoProps) => {
  return (
    <div className="bg-userStatus flex items-center w-fit  gap-5 rounded-lg p-4 justify-center ">
        <h3 className="text-[#4A5568] border-r-2 pr-4">{info}</h3>
        <h3 className="text-white">{infoValue}</h3>
    </div>
  )
}

export default ProfileInfo