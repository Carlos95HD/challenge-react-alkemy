import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { Home } from '../components/home/Home'
import { PlatoScreen } from '../components/plato/PlatoScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { NavBar } from '../components/ui/NavBar'

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />

      <div className ="container" id="wrap">
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="plato/:platoId" element={<PlatoScreen />} />

          <Route path="/*" element={<Home />} />

        </Routes>
      </div>
      <Footer />
    </>
  )
}
