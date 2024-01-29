import NavBar from './components/NavBar';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PostDetailsPage from './pages/PostDetailsPage';
import ErrorComponent from './components/ErrorComponent';
import AuthProvider from './security/AuthContext';
import SignUpSignInPage from './pages/SignUpSignInPage';
import BlogPostList from './pages/BlogPostList';
import { useEffect, useState } from 'react';
import ProfilePage from './pages/ProfilePage';

function App() {
  
  const [navBarHeight, setNavBarHeight] = useState(0);
  useEffect(() => {
    const navBar = document.querySelector('.NavBar');
    if (navBar) {
      setNavBarHeight(navBar.clientHeight);
    }
  }, []); 

  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar/>
          <div  style={{ paddingTop: `${navBarHeight}px`}} >
          <Routes>
            <Route path='/' element={<BlogPostList />} />
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path='/post/:id' element={<PostDetailsPage />} />
            <Route path='/signup-signin' element={<SignUpSignInPage />} />
            <Route path='*' element={<ErrorComponent />} />
          </Routes>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
