import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Destination from './pages/Destination/Destination'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'
import Layout from './pages/Layout/Layout'


const router = createBrowserRouter([
  {
    path:"" , element:<Layout/> , children:[{
      index:true , element:<Home/>
    } , {path:"/destination" , element:<Destination/>} , {path:"/crew" , element:<Crew/>} , {path:"/technology" , element:<Technology/>}]
  }
])

function App() {
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider> 
    </>
  )
}

export default App
