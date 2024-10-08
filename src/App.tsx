import Search from "./Components/Search"
import Profile from "./Components/Profile"
import Header from "./Components/Header"
import Repos from "./Components/Repos"


function App() {


  return (
    <div className="vietnam w-full h-screen bg-Background pb-8 md:flex flex-col items-center">

      <Search />

      <div className="w-full flex justify-center px-[100px] md:px-[200px] lg:px-[240px]">
        <div className=" h-full w-full ">
          <Profile />
          <Header userbio="" username="" />
          <Repos />
        </div>
      </div>


    </div>
  )
}

export default App
