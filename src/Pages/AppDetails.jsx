
import { useParams } from 'react-router'
import useApps from '../hooks/useApps'
import { useState } from 'react'

const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading } = useApps()
    const [installed, setInstalled] = useState(false)

    const handleInstall = () => {
        setInstalled(true)
    }
    const app = apps.find(a => a.id === Number(id))

    if (loading) return <p>Loading.......</p>

    const { image, title, description, ratingAvg, downloads, reviews } = app || {}

    return (
        <div className='w-11/12 mx-auto my-10 card bg-base-100 border-none'>
            <figure className='h-48 overflow-hidden'>
                <img className='w-full object-cover' src={image} alt='' />
            </figure>
            <div className='card-body'>
                <h2 className='card-title text-3xl'>{title}</h2>
                <div className='flex items-center justify-around py-4 ml-4'>
                    <p className='text-green-600 font-semibold text-xl'>Downloads<br />{downloads}</p>
                    <p className='text-amber-400 font-semibold text-xl'>Ratings<br />{ratingAvg}</p>
                    <p className='text-blue-400 font-semibold text-xl'>Review<br />{reviews}</p>
                </div>
                <div>
                <button onClick={handleInstall} className='btn btn-primary'>
                    {installed ? 'Installed' : 'Install'}
                </button>
                </div>
                <p className='card-title bg-gray-100 py-5 px-4'>Description: <br />{description}</p>
            </div>
        </div>
    )
}

export default AppDetails