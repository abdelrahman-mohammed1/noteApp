import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

import Home from './pages/Home'
import Personal from './pages/Personal'
import Business from './pages/Business'
import AllNotes from './pages/AllNotes'
import { useState } from 'react'
import Form from './components/Form'
import DeleteCart from './components/DeleteCart'

import FormUpdate from './components/FormUpdate'
import Completed from './components/Completed'

export default function App() {
  const [allNote, setAllNote] = useState([])
  const [desc, setDesc] = useState('');
  const [item, setItem] = useState({})
  const [v, setV] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const [openUpdateForm, setOpenUpdateForm] = useState(false)
  const [deleteCart, setDeleteCart] = useState(false)
  console.log(allNote)
  return (


    <div>
      <Header />
      <BrowserRouter>

        <Routes>
          <Route index element={<AllNotes v={v} setV={setV} setAllNote={setAllNote} setOpenUpdateForm={setOpenUpdateForm} setItem={setItem} setOpenForm={setOpenForm} setDesc={setDesc} setDeleteCart={setDeleteCart} allNote={allNote} />} />
          <Route path='/home' element={<Home allNote={allNote} />} ></Route>
          <Route path='/personal' element={<Personal allNote={allNote} />} ></Route>
          <Route path='/business' element={<Business v={v} setV={setV} setAllNote={setAllNote} allNote={allNote} />} ></Route>
        </Routes>
      </BrowserRouter>
      {openForm && <Form setOpenUpdateForm={setOpenUpdateForm} setOpenForm={setOpenForm} allNote={allNote} setAllNote={setAllNote} />}
      {deleteCart && <DeleteCart allNote={allNote} setAllNote={setAllNote} setDeleteCart={setDeleteCart} desc={desc} />}
      {openUpdateForm && <FormUpdate allNote={allNote} setOpenUpdateForm={setOpenUpdateForm} setAllNote={setAllNote} item={item} />}
      {false && <Completed allNote={allNote} />}

    </div>


  )
}

