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
      <NavBar/>
      <PostDetailsPage/>
    </div>
  );
}

export default App;
