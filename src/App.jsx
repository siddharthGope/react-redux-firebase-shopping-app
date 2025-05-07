import { BrowserRouter as Router } from 'react-router'
import './App.css'
import { Route, Routes } from 'react-router'
import Products from './components/Products'
import Home from './components/Home';
import { useDispatch } from 'react-redux'
import LogIn from './components/LogIn'
import Register from './components/Register';
import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { setUser } from './store/auth/authSlice'
import Cart from './components/Cart';
import PrivateRoute from './routes/ProtectedRoute';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curretUser) => {
      dispatch(setUser(curretUser))
    })

    return () => unsubscribe()
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:productId' element={<Products />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          } />
        </Routes>
      </Router>

    </>
  )
}

export default App
