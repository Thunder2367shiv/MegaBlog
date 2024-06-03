import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-4 py-2 text-gray-200 bg-gray-700 hover:bg-gray-600 rounded-full transition duration-200'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn