import ProfileInfo from "./ProfileInfo"
import { userContext } from "./Search"
import { useContext , useState , useEffect } from "react"



const Profile = () => {
  const {userData, loading} = useContext(userContext) as {
    userData: {followers:string; following:string ; location:string ; avatar_url: string} | null;
    loading: boolean;
  }

  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [location, setLocation] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (loading && userData) {
      setFollowers(userData.followers);
      setFollowing(userData.following);
      setLocation(userData.location);
      setAvatar(userData.avatar_url);
    }
  }, [loading, userData]);


  return (
    <div className="w-full flex  gap-9 ">
        <div className="w-[150px] h-[150px] bg-yellow-400 rounded-lg border-8 border-Background mt-[-40px]" style={{
        backgroundImage: `url(${avatar})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}></div>


      <div className="flex flex-col pt-4 gap-4 lg:flex-row lg:items-start">
        <ProfileInfo  info={'Followers'} infoValue={followers}/>
        <ProfileInfo  info={'Following'} infoValue={following}/>
        <ProfileInfo  info={'Location'} infoValue={location}/>

      </div>
    </div>
  )
}

export default Profile