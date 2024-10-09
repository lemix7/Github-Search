
interface search{
    userPfp: string
    repoName: string 
    repoDescription: string  
    onClick: () => void
  }

const UserResult = ({repoName , userPfp , repoDescription,onClick}:search) => {
  return (
    <div className='w-[420px] md:w-[500px] bg-[#111628] mt-4 rounded-lg px-2 py-4 h-[80px] flex items-center gap-4 cursor-pointer hover:bg-[#111635]' onClick={onClick}>

        <div className='w-[60px] h-[60px] bg-orange-300 rounded-md 'style={{
        backgroundImage: `url(${userPfp})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        
      </div>

        <div className='flex flex-col gap-1' >
        <h4 className='text-text'>{repoName}</h4>
        <p className='text-text2 font-light'>{repoDescription}</p>
      </div>


      </div>
  )
}

export default UserResult