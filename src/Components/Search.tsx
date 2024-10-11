import { createContext, useEffect, useState, ReactNode } from "react";
import HeroImage from "../Assets/hero-image.png";
import SearchIcon from "../Assets/Search.svg";
import UserResult from "./UserResult";

// Define the context type
interface UserContextType {
  userData: any;
  isFound: boolean;
  error: string;
  loading: boolean;
}

// Define the props for the Search component
interface SearchProps {
  children: ReactNode;
}

// Initialize the userContext with an empty object and define its type
export const userContext = createContext<UserContextType | null>(null);

const Search = ({ children }: SearchProps) => {
  const [isFound, setIsFound] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<any>({});
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [userClicked, setUserClicked] = useState<boolean>(false);

  // Define event type for handleSearch (from the input)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setUsername(e.target.value);
    }, 2000);
    setUserClicked(false);
    setLoading(false);
  };

  const handleLoading = () => {
    setLoading(true);
    setUserClicked(true);
  };

  useEffect(() => {
    async function fetchData(user: string) {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const data = await response.json();
        if (data.message === "Not Found") {
          setIsFound(false);
        } else {
          setIsFound(true);
          setUserData(data);
        }
      } catch (err: any) {
        setError(err.message);
      }
    }
    if (username) {
      fetchData(username);
    }
  }, [username]);

  return (
    <userContext.Provider value={{ userData, isFound, error, loading }}>
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

        {isFound && !userClicked && (
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
