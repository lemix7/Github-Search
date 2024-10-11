import Repo from "./Repo"
import { userContext } from "./Search"
import { useContext, useEffect , useState } from "react"



const Repos = () => {
  const {userData, loading} = useContext(userContext) as {
    userData: {login: string} | null;
    loading: boolean;
  }
  const [repos, setRepos] = useState([])
  const [viewAll, setViewAll] = useState(false)


  useEffect(()=> {
    const fetchData = async () => {
      if(userData && userData.login){
        const response = await fetch(`https://api.github.com/users/${userData.login}/repos`);
        const data = await response.json();
        setRepos(data);
      }
    }
    if (loading && userData) {
      fetchData();
    }

  },[loading,userData])

  const handleViewAll = () => {

    setViewAll(!viewAll)
  }

  
  return (
    <div className="flex h-full flex-col flex-wrap gap-6 mt-7 md:flex-row  ">

        {repos.slice(0,4).map((repo:any) => {

          // calculate the days passed since the last update
        const updatedDate = new Date(repo.updated_at)
          const currentDate = new Date()
          const differenceInMilliseconds  = currentDate.getTime() - updatedDate.getTime()
          const millisecondsPerDay = 1000 * 60 * 60 * 24
          const daysPassed = Math.floor(differenceInMilliseconds / millisecondsPerDay)

         

          return <Repo repoName={repo.name} repoDes={repo.description} repoDate={daysPassed} repoStar={repo.watchers} repoNesting={repo.forks}  onClick={() => window.open(repo.html_url, '_blank')} isLicense ={repo.license ? true : false}  />

        })}



        {viewAll && repos.slice(4).map((repo:any) => {
          const updatedDate = new Date(repo.updated_at)
          const currentDate = new Date()
          const differenceInMilliseconds  = currentDate.getTime() - updatedDate.getTime()
          const millisecondsPerDay = 1000 * 60 * 60 * 24
          const daysPassed = Math.floor(differenceInMilliseconds / millisecondsPerDay)

          return <Repo repoName={repo.name} repoDes={repo.description} repoDate={daysPassed} repoStar={repo.watchers} repoNesting={repo.forks}  onClick={() => window.open(repo.html_url, '_blank')} />
        })}

        {loading && <div className="w-full flex justify-center items-center py-4">
          <p className="text-text2 text-xl cursor-pointer" onClick={handleViewAll}>{viewAll ? 'show less repositeries' : 'show all repositeries'}</p>
        </div>}
        

       
    </div>
  )
}

export default Repos