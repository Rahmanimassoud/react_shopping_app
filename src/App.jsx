
import { useContext, useEffect } from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import axios from 'axios'
import { primaryContext } from './Context/primaryContext'

function App() {

  const {setProducts} = useContext(primaryContext)


  useEffect(() => {
    axios('https://fakestoreapi.com/products/').then((response)=> {
      // console.log(response);

      setProducts(response.data)

    })

  }, [])

  return (
    <div className='app'>
      {/* <h1>Shopping App</h1> */}
      <Navbar/>
      <Sidebar />
      <Dashboard />
      <Footer />

    </div>
  )
}

export default App
