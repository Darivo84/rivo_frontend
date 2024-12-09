import { useEffect } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Home from './pages/Home'
import Professionals from './pages/Professionals'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/user/Appointment'
import AccountType from './pages/AccountType'

// User pages
import Login from './pages/user/Login'
import SignUp from './pages/user/SignUp'
import EmailVerification from './pages/user/EmailVerification'
import ForgetPassword from './pages/user/ForgetPassword'
import ResetPassword from './pages/user/ResetPassword'
import Profile from './pages/user/Profile'
import Messages from './pages/user/Messages'

import MyProfile from './pages/user/MyProfile'

// Professional pages
import ProLogin from './pages/professionals/ProfessionalLogin'
import FormBuilder from './pages/user/FormBuilder'

// Components
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner'

// State management
import { useAuthStore } from './store/authStore'


// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/user/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/user/verify-email' replace />;
	}

	return children;
}

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/user/profile' replace />;
	}

	return children;
}

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isCheckingAuth) return <LoadingSpinner />

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/professionals' element={ <Professionals /> } />
        <Route path='/professionals/:speciality' element={ <Professionals /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/account-type' element={ <AccountType /> } />
        {/* User */}
        <Route 
          path='/user/login' 
          element={ 
            <RedirectAuthenticatedUser>
              <Login /> 
            </RedirectAuthenticatedUser>
          } 
        />
        <Route 
          path='/user/sign-up' 
          element={ 
            <RedirectAuthenticatedUser>
              <SignUp /> 
            </RedirectAuthenticatedUser>
          } 
        />
        <Route 
          path='/user/verify-email' 
          element={ 
            <RedirectAuthenticatedUser>
              <EmailVerification /> 
            </RedirectAuthenticatedUser>
          } 
        />
        <Route 
          path='/user/forgot-password' 
          element={ 
            <RedirectAuthenticatedUser>
              <ForgetPassword />
            </RedirectAuthenticatedUser> 
          } 
        />
        <Route path='/user/reset-password/:token' 
          element={ 
            <RedirectAuthenticatedUser>
              <ResetPassword />
            </RedirectAuthenticatedUser>
          } 
        />
        {/* Remove */}

        <Route 
          path='/user/my-profile' 
          element={ 
            <ProtectedRoute>
              <MyProfile /> 
            </ProtectedRoute>
          } 
        />

        {/* <Route 
          path='/user/profile' 
          element={ 
            <ProtectedRoute>
              <Profile /> 
            </ProtectedRoute>
          } 
        /> */}
        
        <Route 
          path='/user/my-messages' 
          element={ 
            <ProtectedRoute>
              <Messages /> 
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/appointment/:professionalId' 
          element={ 
            <ProtectedRoute>
              <Appointment /> 
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/user/form-builder' 
          element={ 
            <ProtectedRoute>
              <FormBuilder /> 
            </ProtectedRoute>
          } 
        />

        <Route 
          path='/professional/login' 
          element={ 
            <RedirectAuthenticatedUser>
              <ProLogin /> 
            </RedirectAuthenticatedUser>
          } 
        />
        {/* catch all routes */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>

      <Toaster />
    </>
  )
}

export default App
