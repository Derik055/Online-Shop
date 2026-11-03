import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import Gender from './pages/Gender/Gender';
import SportCategory from './pages/SportCategory/SportCategory';
import Brand from './pages/Brand/Brand';


import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from 'react-loading-skeleton';


function App() {

  return (
    <SkeletonTheme baseColor='#BDC0C0' highlightColor='#DCDCDC'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Gender key="men" title="Men" gender="men" />} />
        <Route path="/women" element={<Gender key="women" title="Women" gender="women" />} />
        <Route path="/kids" element={<Gender key="kids" title="Kids" gender="kids" />} />
        <Route path="/lifestyle" element={<SportCategory key="lifestyle" title="Lifestyle" subCategory="lifestyle" />} />
        <Route path="/football" element={<SportCategory key="football" title="Football" subCategory="football" />} />
        <Route path="/basketball" element={<SportCategory key="basketball" title="Basketball" subCategory="basketball" />} />
        <Route path="/brands/nike" element={<Brand key="nike" title="Nike" brand="nike" />} />
        <Route path="/brands/adidas" element={<Brand key="adidas" title="Adidas" brand="adidas" />} />
        <Route path="/brands/puma" element={<Brand key="puma" title="Puma" brand="puma" />} />
        <Route path="/brands/jordan" element={<Brand key="jordan" title="Jordan" brand="jordan" />} />
        <Route path="/brands/new-balance" element={<Brand key="new-balance" title="New Balance" brand="new-balance" />} />
        <Route path="/brands/asics" element={<Brand key="asics" title="ASICS" brand="asics" />} />
        <Route path="*" element={<h1 className="font-['Montserrat'] text-[32px] font-bold text-center py-[72px]">Page not found</h1>} />
      </Routes>

    <Footer />
    </SkeletonTheme>
  )
}

export default App
