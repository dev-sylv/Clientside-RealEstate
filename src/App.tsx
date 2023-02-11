import React from 'react'
import AllRoutes from './Components/AllRoutes/AllRoutes'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { GlobalStyle } from './GlobalFonts/GlobalFonts'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
        <AllRoutes />
      {/* <Footer /> */}
    </div>
  )
}

export default App