import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import About from './component/About/About';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import Layout from './component/Layout/Layout';
import Notfound from './component/Notfound/Notfound';




let x = createHashRouter ([
  {path:"", element:<Layout/>, children :[
    {index:true, element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio", element:<Portfolio/>},
    {path:"contact", element:<Contact/>},
    {path:"*", element:<Notfound/>}

  ]}
])




function App() {
  

  return (
    <>
    <RouterProvider router={x}></RouterProvider>
     
    </>
  )
}

export default App
