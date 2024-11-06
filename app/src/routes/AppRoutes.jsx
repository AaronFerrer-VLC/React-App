import DashBoardPage from './../pages/DashboardPage/DashboardPage.jsx'
import AboutPage from './../pages/AboutPage/AboutPage.jsx'
import ItemDetailPage from './../pages/ItemDetailPage/ItemDetailPage.jsx'
import NotFoundPage from './../pages/NotFoundPage/NotFoundPage.jsx'

import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/' element={<DashBoardPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/apartamentos/:apartmentId' element={<ItemDetailPage />} />
            <Route path='*' element={<NotFoundPage />} />

        </Routes>
    )

}
export default AppRoutes