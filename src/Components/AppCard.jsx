import { Link } from "react-router"

const AppCard = ({ app }) => {
  const { image,title, description,ratingAvg,id} = app
  return (
    <Link to={`/app/${id}`}>
    <div className='card bg-base-100 border-none shadow-sm hover:scale-105 transition ease-in-out'>
      <figure className='h-48 overflow-hidden'>
        <img className='w-full object-cover' src={image} alt='' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}: {description}</h2>
        <div className='flex gap-30 pt-2 mx-auto'>
           <p className='text-green-600 flex items-center font-semibold text-xl gap-1'><img className="h-5"src="./icon-downloads.png" alt="" />9M+</p>
           <p className='text-amber-400 flex items-center font-semibold text-xl gap-1'>{ratingAvg}<img className="h-5" src="./icon-ratings.png" alt="" /></p>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default AppCard