import Chield from '../Assets/Chield_alt.svg'
import Star from '../Assets/Star.svg'
import Nesting from '../Assets/Nesting.svg'

interface repoProps{
    repoName: string
    repoDes: string 
    repoNesting: string 
    repoStar: string
    repoDate: string | number
    isLicense?: boolean
    onClick?: () => void 
}
// py-4 pl-6

const Repo = ({repoName , repoDes ,  repoNesting, repoStar , repoDate = '', onClick, isLicense}:repoProps) => {
  return (
    <div className="bg-repos flex flex-col w-[500px] h-fit  cursor-pointer hover:bg-blue-950 rounded-lg py-4 pl-6 " onClick={onClick}>

        <h3 className="text-text text-2xl mb-2">{repoName}</h3>
        <h4 className="text-text2 ">{repoDes}</h4>

        <div className="flex gap-4 text-text2 mt-6 ">

            {isLicense &&  <p className='flex gap-2 '><span><img src={Chield} alt="chield icon"/></span>MIT</p> }

            <p className='flex gap-2 '><span><img src={Nesting} alt="" /></span>{repoNesting}</p>
            <p className='flex gap-2 '><span><img src={Star} alt="start Icon" /></span>{repoStar}</p>
            <p className=''>{`updated ${repoDate}  days ago`}</p>
        </div>
        
    </div>
  )
}

export default Repo