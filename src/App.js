import {Routes, Route, Navigate} from 'react-router-dom'
import {Aboutpage} from './components/Aboutpage.js'
import {Blogpage} from './components/Blogpage.js'
import {SinglePage} from './components/SinglePage.js'
import {Homepage} from './components/Homepage.js'
import { Createpost } from './components/Createpost.js'
import { Editpage } from './components/Editpage.js'
import {Notfoundpage} from './components/Notfoundpage.js'
import { Loginpage } from './components/Loginpage.js'

import { RequireAuth } from './hoc/RequireAuth.js'

import './style.css'

import { Layout } from './components/Layout.js'
import { AuthProvider } from './hoc/AuthProvider.js'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="about/" element={<Aboutpage/>}>
            <Route path="contacts" element={<p>Our contacts</p>} />
            <Route path="team" element={<p>Our team</p>} />
          </Route>
          <Route path="about-us" element={<Navigate to="/about" replace/>}/>
          <Route path="posts" element={<Blogpage/>}/>
          <Route path="posts/:id" element={<SinglePage/>}/>
          <Route path="posts/:id/edit" element={<Editpage/>}/>
          <Route path="posts/new" element={
              <RequireAuth>
                <Createpost/>
              </RequireAuth>
            }/>
          <Route path="login" element={<Loginpage/>}/>
          <Route path="*" element={<Notfoundpage/>}/>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

 // вместо :id может быть :что-угодно 
