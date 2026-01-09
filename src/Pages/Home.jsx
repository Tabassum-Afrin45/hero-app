import { Link, NavLink } from 'react-router'
import AppCard from "../Components/AppCard"
import useApps from '../hooks/useApps'

const Home=()=> {
  const {apps} = useApps()
  
  const TrendingApps = apps.slice(0, 8)
  return (
    <div className='w-11/12 mx-auto py-8'>
      <section>
        <h1 className='font-bold text-3xl text-center'>We Build<br /><span className='text-purple-500'>Productive</span>Apps</h1>  
        <p className='text-gray-500 text-sm py-3'>At HERO App, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <NavLink to='https://play.google.com/store/games?device=windows' className="btn btn-primary mr-7">Google Play</NavLink>
        <NavLink to='https://www.apple.com/app-store/' className="btn btn-primary">App Store</NavLink>

      </section>
     
<div className="w-11/12 mx-auto pt-5">
  <img className="max-h-[50vh] mx-auto block" src="./hero.png" alt="" />
</div>

<section className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-linear-to-b from-blue-500 to-purple-500 h-60 flex items-center mb-8">
  <div className="w-11/12 mx-auto text-white text-center">
    <h1 className="font-semibold text-xl">Trusted by Millions, Built for You</h1>

    <div className="mt-5 grid grid-cols-3 place-items-center text-sm">
      <div>
        <h1>Total Downloads</h1>
        <p className="text-2xl font-bold py-2">29.6M</p>
        <h4>21% more than last month</h4>
      </div>
      <div>
        <h1>Total Reviews</h1>
        <p className="text-2xl font-bold py-2">906K</p>
        <h4>46% more than last month</h4>
      </div>
      <div>
        <h1>Active Apps</h1>
        <p className="text-2xl font-bold py-2">132+</p>
        <h4>31 more will Launch</h4>
      </div>
    </div>
  </div>
</section>

      <div className='text-center mb-5'>
        <h1 className='text-3xl font-semibold py-2'>Trending Apps</h1>
        <p className='text-gray-500 text-sm'>Explore All Trending Apps on the Market developed by us</p>
      </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {TrendingApps.map(app => (
      <AppCard key={app.id} app={app} />
        ))}

      </div>
      <div className='grid place-items-center'>
      <Link className='btn bg-purple-500 text-white p-5 mt-5' to='/apps'>
          See All
        </Link>
        </div>
    </div>
  )
}

export default Home
