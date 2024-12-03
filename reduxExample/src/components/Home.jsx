import React, { useEffect } from 'react'
import { getHomeUsers } from '../actions/HomeActions'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

  const dispatch = useDispatch()
  
  const data = useSelector((state) => state.homeUsers.homeUsers);
  console.log(data);
  

  useEffect(() => {
    
    dispatch(getHomeUsers())

  },[])

  return (
    <div className='w-full h-[50vh] bg-blue-300 text-white py-5 px-5'>
          
    {data.map((item) => {

        return <ul><li>{ item.title}</li></ul>
})}
</div>  )
}

export default Home