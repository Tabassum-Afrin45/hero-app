
const AppCard = ({ app }) => {
  console.log(app)
  const { image,title, description,ratingAvg} = app
  return (
    <div className='card bg-base-100 border-none shadow-sm hover:scale-105 transition ease-in-out'>
      <figure className='h-48 overflow-hidden'>
        <img className='w-full object-cover' src={image} alt='' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}: {description}</h2>
        <div className='flex justify-between items-center gap-10'>
           <p className='text-green-600 flex items-center font-semibold text-xl gap-1'><img className="h-5"src="./icon-downloads.png" alt="" />9M+</p>
           <p className='text-amber-400 flex items-center font-semibold text-xl gap-1'>{ratingAvg}<img className="h-5" src="./icon-ratings.png" alt="" /></p>
        </div>
      </div>
    </div>
  )
}

export default AppCard