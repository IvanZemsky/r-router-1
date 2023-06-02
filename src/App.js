import {Routes, Route, Link} from 'react-router-dom'
import Aboutpage from './components/Aboutpage.js'
import Blogpage from './components/Blogpage.js'
import Homepage from './components/Homepage.js'
import Notfoundpage from './components/Notfoundpage.js'

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <div>
        <h1>Get started with React Router V6</h1>
      </div>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/posts" element={<Blogpage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="*" element={<Notfoundpage/>}/>
      </Routes>
    </>
  );
}

export default App;
