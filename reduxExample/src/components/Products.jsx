import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../reducers/ProductReducer'
import { getAsyncProducts } from '../actions/ProductActions'

const Products = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.products.products)
    console.log(data);
    



    useEffect(() => {
        
        dispatch(getAsyncProducts())

    }, [])
    
  return (
      <div className='w-full h-[50vh] bg-blue-300 text-white py-5 px-5'>
          
          {data.map((item) => {
    
              return <ul><li>{ item.title}</li></ul>
})}
    </div>
  )
}

export default Products