import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "@fontsource/lato";
import Navbar from './components/Layout/Navbar';
import Login from './components/Login/Login';
import Footer from './components/Layout/Footer';
import Logout from './components/Util/Logout';
import Error from './components/Util/ErrorUtil';
import Dashboard from './components/Dashboard/Dashboard';
import AuthProvider, { useAuth } from './security/AuthContext';
import './App.css';


function AuthenticatedRoute({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated)
    return children;

  return <Navigate to="/" />
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={
              <AuthenticatedRoute>
                <Dashboard />
              </AuthenticatedRoute>
            } />
            <Route path='/logout' element={
              <AuthenticatedRoute>
                <Logout />
              </AuthenticatedRoute>
            } />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;