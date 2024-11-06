import './App.css'
import AppRoutes from './routes/AppRoutes.jsx'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar'


function App() {

  return (

    <div className='App'>

      <Navbar />

      <div className="viewport-content">

        <Sidebar />

        <AppRoutes />

      </div>

      <Footer />

    </div>
  )
}

export default App
