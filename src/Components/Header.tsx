interface headerProps{
    username: string
    userbio: string
}

const Header = ({username, userbio}:headerProps) => {
  return (
    
    <div className=" mt-[80px]">
        <h1 className="text-text text-4xl mb-2">{username}</h1>
        <p className="text-text2">{userbio}</p>
    </div>
    
  )
}

export default Header