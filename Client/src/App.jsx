import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navbar from './Components/Navbar/Navbar'; // Navbar Component
import Home from './Pages/homepage/Home'; // Ensure Home component path is correct
import Video from './Pages/video/Video'; // Ensure Video component path is correct
import './App.css';
import { useState } from 'react';

function App() {
 
  const[sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryID/:videoID" element={<Video />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Optional fallback route */}
      </Routes>
    </div>
  );
}

export default App;
