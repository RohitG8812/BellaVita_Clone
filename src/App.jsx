import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Collection from './components/Collection'
import Perfumes from './components/Perfumes'
import Bath_Body from './components/Bath_Body'
import Makeup from './components/Makeup'
import Product from './components/Product'
import BestSellers from './components/BestSellers'
import CrazyDeals from './components/CrazyDeals'
import GiftSets from './components/GiftSets'
import NewArrivals from './components/NewArrivals'
import PerfumesSets from './components/PerfumesSets'
import SkinCare from './components/SkinCare'
import ShopAll from './components/ShopAll'
import Account from './components/Account'
import Buy1Get1 from './components/Buy1Get1'
import Pages from './components/Pages'
import BellaCash from './components/BellaCash'
import SearchResultPage from './components/SearchResultPage'
import Login from './auth/Login'
import Register from './auth/Register'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Profile from './account/Profile'
import Address from './account/Address'
import Order from './account/Order'
import CashBack from './account/CashBack'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/collection/shopAll' element={<ShopAll />} />
        <Route path='/collection/perfumes' element={<Perfumes />} />
        <Route path='/collection/bathBody' element={<Bath_Body />} />
        <Route path='/collection/makeup' element={<Makeup />} />
        <Route path='/collection/bestSellers' element={<BestSellers />} />
        <Route path='/collection/crazyDeals' element={<CrazyDeals />} />
        <Route path='/collection/giftSets' element={<GiftSets />} />
        <Route path='/collection/newArrivals' element={<NewArrivals />} />
        <Route path='/collection/perfumesSets' element={<PerfumesSets />} />
        <Route path='/collection/skincare' element={<SkinCare />} />
        <Route path='/collection/bogo' element={<Buy1Get1 />} />
        <Route path='/account/login' element={<Login />} />
        <Route path='/account/register' element={<Register />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/pages/bellaCash' element={<BellaCash />} />
        <Route path='/collection/searchProducts' element={<SearchResultPage />} />

        {/*  */}
        <Route path="/collection/bestSellers/:id" element={<Product />} />
        <Route path="/collection/newArrivals/:id" element={<Product />} />
        <Route path="/collection/perfumes/:id" element={<Product />} />
        <Route path="/collection/bathBody/:id" element={<Product />} />
        <Route path="/collection/makeup/:id" element={<Product />} />
        <Route path="/collection/shopAll/:id" element={<Product />} />

        <Route path='/account' element={<Account />}>
          <Route index element={<Navigate to="/account/profile" />} />
          <Route path='/account/profile' element={<Profile />} />
          <Route path='/account/address' element={<Address />} />
          <Route path='/account/orders' element={<Order />} />
          <Route path='/account/cashBack' element={<CashBack />} />
        </Route>

      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  )
}


export default App
