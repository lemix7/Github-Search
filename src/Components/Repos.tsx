import Repo from "./Repo"
import { userContext } from "./Search"
import { useContext, useEffect } from "react"

const Repos = () => {
  const {userData, loading} = useContext(userContext)

  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/${userData.login}/repos`);
      const data = await response.json();
      console.log(data);
    }
    if (loading && userData) {
      fetchData();
    }

  },[loading,userData])

  
  return (
    <div className="flex h-full flex-col flex-wrap gap-6 mt-7 md:flex-row  ">
        {/* <Repo /> */}
       
    </div>
  )
}

export default Repos