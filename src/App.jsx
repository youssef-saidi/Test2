import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/atoms/ScrollToTop"

import Footer from "./components/organisms/Footer"
import Navbar from "./components/organisms/Navbar"
import Home from "./pages/Home"
import NotFoundPage from "./pages/NotFoundPage"
import Details from "./pages/Details";


function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/details" element={<Details />} />



          <Route path="*" element={<NotFoundPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
