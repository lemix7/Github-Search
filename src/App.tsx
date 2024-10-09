import Search from "./Components/Search"
import Profile from "./Components/Profile"
import Header from "./Components/Header"
import Repos from "./Components/Repos"


function App() {


  return (
    <div className="vietnam w-full h-screen bg-Background pb-8 md:flex flex-col items-center">

      <Search> {/* user context provider */}

      <div className="w-full flex justify-center px-[100px] md:px-[200px] lg:px-[240px]">
        <div className=" h-full w-full ">
          <Profile />
          <Header  />
          <Repos />
        </div>
      </div>

      </Search>

     


    </div>
  )
}

export default App
