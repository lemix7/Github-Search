import { createContext, useEffect, useState } from "react";
import HeroImage from "../Assets/hero-image.png";
import SearchIcon from "../Assets/Search.svg";
import UserResult from "./UserResult";

export const userContext = createContext({});

const Search = ({ children }) => {
  const [isFound, setIsFound] = useState(false);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const[userClicked, setUserClicked] = useState(false);

  const handleSearch = (e) => {
    setTimeout(() => {
      setUsername((u) => (u = e.target.value));
    }, 2000);
  };

  const handleLoading = () => {
    setLoading(true);
    setUserClicked(true);

    // setTimeout(() => { // this will reset the loading state
    //   setUserClicked(false);
    //   setLoading(false); 
    // }, 3000);
  }

  console.log(username);

  useEffect(() => {
    async function fetchData(user: string) {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const data = await response.json();
        console.log(data);
        if (data.message === "Not Found") {
          setIsFound(false);
        } else {
          setIsFound(true);
          setUserData(data);
        }
      } catch (err: any) {
        setError(err);
      }
    }
    if (username) {
      fetchData(username);
    }

    console.log(userData);
  }, [username]);

  return (
    <userContext.Provider value={{ userData, isFound, error , loading }}>
      <div
        className="w-full h-[250px] flex-shrink-0 flex flex-col items-center pt-10"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[420px] md:w-[500px] flex justify-start items-center bg-Background gap-4 h-[40px] rounded-md py-2 px-4">
          <label htmlFor="">
            <img src={SearchIcon} alt="Search" />
          </label>
          <input
            className="h-full bg-transparent outline-none caret-text text-text placeholder-"
            type="text"
            placeholder="username"
            onChange={handleSearch}
          />
        </div>

        {isFound  && !userClicked && (
           <UserResult
           userPfp={userData.avatar_url}
           repoName={userData.name}
           repoDescription={userData.bio}
            onClick={handleLoading}
         />
        )}
      
      </div>

       

      {children}
    </userContext.Provider>
  );
};

export default Search;