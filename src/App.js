import {Routes, Route} from 'react-router-dom'
import Aboutpage from './components/Aboutpage.js'
import Blogpage from './components/Blogpage.js'
import Homepage from './components/Homepage.js'
import Notfoundpage from './components/Notfoundpage.js'

import './style.css'

import { Layout } from './components/Layout.js'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="posts" element={<Blogpage/>}/>
          <Route path="about" element={<Aboutpage/>}/>
          <Route path="*" element={<Notfoundpage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
