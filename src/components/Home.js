import React from 'react'
import { useContext } from 'react'
import { context } from '../context/authContext'

export const Home = () => {

const authContext = useContext(context)
console.log(authContext)
  return (
    <div>Home</div>
  )
}
