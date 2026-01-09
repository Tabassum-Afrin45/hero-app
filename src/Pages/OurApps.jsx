
import useApps from '../hooks/useApps'
import AppCard from '../Components/AppCard'
import { useState } from 'react'
const OurApps=()=> {
  const { apps } = useApps()
  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()
  const searchedApps = term
    ? apps.filter(app=>
        app.name.toLocaleLowerCase().includes(term)
      )
    : apps

  return (
    <div className='w-11/12 mx-auto pb-6'>
      <div className='flex justify-between py-5 items-center'>
        <h1 className='text-2xl font-semibold'>
          All Apps{' '}
          <span className='text-sm text-gray-500'>
            ({searchedApps.length}) Apps Found
          </span>
        </h1>
        <label className='input'>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type='search'
            placeholder='Search Apps'
          />
        </label>
      </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {searchedApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
    </div>
  )
}

export default OurApps