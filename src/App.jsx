import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Shared/Header'
import Footer from './Shared/Footer'

function App() {

  return (<>
    <Header></Header>
    <div className='container mx-auto'>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
  </>
  )
}

export default App
