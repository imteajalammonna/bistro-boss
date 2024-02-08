import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Shared/Header'

function App() {

  return (<>
    <Header></Header>
    <div className='container mx-auto'>
      <Outlet></Outlet>
    </div>
  </>
  )
}

export default App
