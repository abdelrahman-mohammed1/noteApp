import { Routes, Route, json } from 'react-router-dom'
import Header from './components/Header'

import Home from './pages/Home'
import Personal from './pages/Personal'
import Business from './pages/Business'
import AllNotes from './pages/AllNotes'

import Form from './components/Form'
import DeleteCart from './components/DeleteCart'

import FormUpdate from './components/FormUpdate'
import Completed from './components/Completed'
import { useData } from './contexts/useData'
import { useEffect } from 'react'


export default function App() {
  const { openForm, deleteCart, openUpdateForm, show, searchResult } = useData()
  useEffect(function () {
    localStorage.setItem('note', JSON.stringify(searchResult))
  }, [searchResult])

  if (show) return <>
    <Header />
    <Completed />
    {openForm && <Form />}
    {deleteCart && <DeleteCart />}
    {openUpdateForm && <FormUpdate />}
  </>
  return (


    <div>
      <Header />


      <Routes>
        <Route index element={<AllNotes />} />
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/personal' element={<Personal />} ></Route>
        <Route path='/business' element={<Business />} ></Route>
      </Routes>

      {openForm && <Form />}
      {deleteCart && <DeleteCart />}
      {openUpdateForm && <FormUpdate />}


    </div >


  )
}

