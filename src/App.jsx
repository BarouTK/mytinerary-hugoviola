import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import NavBar from './components/NavBar/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CityFiltre from './Pages/CityFiltre'
import CityFinder from './components/Main/CityFinder'
import Page404 from './Pages/Page404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children:[
      {
        path:'/CityFinder',
        element: <CityFiltre/>,

      }
    ]
  },
  {
    path:'*',
    element: <Page404/>
  }
  
])

function App() {
  
  const [count, setCount]= useState(0)



  return (
    <>
      <RouterProvider router={router} />
      

      
      

      
    </>
  )
}

export default App
