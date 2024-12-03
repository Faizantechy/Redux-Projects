import { useSelector, useDispatch } from 'react-redux'
import { userDelete } from '../reducers/userReducer';

const Users = () => {

  const users = useSelector((state) => state.users.users);


  const dispatch=useDispatch()
  


  const deleteHandler = (index) => {

    dispatch(userDelete(index)
      
    )
  }

  return (
    <div><h1 className='text-4xl text-center font-bold'>Users List: </h1>
      
      <ul className='w-full bg-blue-300 text-white px-10 py-10'>

        {users.map((user,index) => {
          
          return <li className='flex gap-5' onClick={() => {
            
deleteHandler(index)

          }}><h2>{user.name}</h2> <span className='text-2xl font-bold ml-5 text-red-500 cursor-pointer active:scale-90'>X</span>
          
          </li>

        })}


      </ul>
    
    
    </div>
  )
}

export default Users