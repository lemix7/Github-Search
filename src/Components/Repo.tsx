import Chield from '../Assets/Chield_alt.svg'
import Star from '../Assets/Star.svg'
import Nesting from '../Assets/Nesting.svg'

interface repoProps{
    repoName: string
    repoDes: string 
    repochield: string 
    repoNesting: string 
    repoStar: string
    repoDate: string 
}

const Repo = ({repoName , repoDes , repochield , repoNesting, repoStar , repoDate = ''}:repoProps) => {
  return (
    <div className="bg-repos flex flex-col w-[500px] h-fit  rounded-lg py-4 pl-6 ">

        <h3 className="text-text text-2xl mb-2">{repoName}</h3>
        <h4 className="text-text2 ">{repoDes}</h4>

        <div className="flex gap-4 text-text2 mt-6">
            <p className='flex gap-2 '><span><img src={Chield} alt="chield icon"/></span>{repochield}</p>
            <p className='flex gap-2 '><span><img src={Nesting} alt="" /></span>{repoNesting}</p>
            <p className='flex gap-2 '><span><img src={Star} alt="start Icon" /></span>{repoStar}</p>
            <p className=''>{`updated ${repoDate}`}</p>
        </div>
        
    </div>
  )
}

export default Repo