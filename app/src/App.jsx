import './App.css'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/Sidebar/Sidebar'
import ApartamentList from './components/ApartamentList/ApartamentList.jsx'


function App() {

  return (

    <div className='App'>

      <Navbar />

      <div className="viewport-content">

        <Sidebar />

        {/* PANEL DERECHO AQUÍ */}

        <ApartamentList />

      </div>

      <Footer />

    </div>
  )
}

export default App