import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Post from './Post.jsx'
import Blog from './Blog.jsx'
import Profile from './Evenprofile.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Home.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// FIXED: Using createRoot directly since it's imported above, and changed React.StrictMode to StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* This sets App.jsx as the homepage (/) */}
        <Route path="/" element={<App />} />
        
        <Route path="/posts" element={<Post />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/evenprofile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)