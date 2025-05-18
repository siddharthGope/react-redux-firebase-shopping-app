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
import Payment from './components/Payment';
import PaymentForm from './components/PaymentForm';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentCancelled from './components/PaymentCancelled';


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
          <Route path='/payment-process' element={<PaymentForm />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />
          <Route path='/payment-cancelled' element={<PaymentCancelled />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
