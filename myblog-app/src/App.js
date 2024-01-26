import NavBar from './components/NavBar';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BlogPostList from './pages/BlogPostList';
import PostDetailsPage from './pages/PostDetailsPage';
import LoginSignup from './pages/LoginSignup';
import ErrorComponent from './components/ErrorComponent';


function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<BlogPostList />} />
          <Route path='/post/:id' element={<PostDetailsPage />} />
          <Route path='/login-signup' element={<LoginSignup />} />
          <Route path='*' element={<ErrorComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
