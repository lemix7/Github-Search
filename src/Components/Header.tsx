import { userContext } from "./Search"
import { useContext , useEffect , useState} from "react"

const Header = () => {
  const {userData, loading} = useContext(userContext) as {
    userData: {name: string; bio:string} | null;
    loading: boolean;
  }

  const [username, setUsername] = useState("");
  const [userDescription, setUserDescription] = useState("");

  useEffect(() => {
    if (loading && userData) {
      setUsername(userData.name);
      setUserDescription(userData.bio);
    }
  }, [loading, userData]);


  return (
    
    <div className=" mt-[80px]">
        <h1 className="text-text text-4xl mb-2">{username} </h1>
        <p className="text-text2">{userDescription} </p>
    </div>
    
  )
}

export default Header