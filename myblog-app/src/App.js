import NavBar from './components/NavBar';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PostDetailsPage from './pages/PostDetailsPage';
import ErrorComponent from './components/ErrorComponent';
import AuthProvider from './security/AuthContext';
import SignUpSignInPage from './pages/SignUpSignInPage';
import BlogPostList from './pages/BlogPostList';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<BlogPostList />} />
            <Route path='/post/:id' element={<PostDetailsPage />} />
            <Route path='/login-signup' element={<SignUpSignInPage />} />
            <Route path='*' element={<ErrorComponent />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
