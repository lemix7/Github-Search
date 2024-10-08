import HeroImage from '../Assets/hero-image.png'
import SearchIcon from '../Assets/Search.svg'



const Search = () => {
 
  return (
    <div className='w-full h-[250px] flex flex-col items-center  pt-10'style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className='w-[420px] md:w-[500px] flex justify-start items-center bg-Background gap-4 h-[40px] rounded-md py-2 px-4 '>
            <label htmlFor=""><img src={SearchIcon} alt="Search" /></label>
            <input className=' h-full bg-transparent outline-none caret-text text-text placeholder-' type="text" placeholder='username'/>
        </div>

     

     

    </div>
  )
}

export default Search