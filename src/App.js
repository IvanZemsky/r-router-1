import {Routes, Route} from 'react-router-dom'
import {Aboutpage} from './components/Aboutpage.js'
import {Blogpage} from './components/Blogpage.js'
import {SinglePage} from './components/SinglePage.js'
import {Homepage} from './components/Homepage.js'
import { Createpost } from './components/Createpost.js'
import { Editpage } from './components/Editpage.js'
import {Notfoundpage} from './components/Notfoundpage.js'

import './style.css'

import { Layout } from './components/Layout.js'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="about" element={<Aboutpage/>}/>
          <Route path="posts" element={<Blogpage/>}/>
          <Route path="posts/:id" element={<SinglePage/>}/>
          <Route path="posts/:id/edit" element={<Editpage/>}/>
          <Route path="posts/new" element={<Createpost/>}/>
          <Route path="*" element={<Notfoundpage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

 // вместо :id может быть :что-угодно 
