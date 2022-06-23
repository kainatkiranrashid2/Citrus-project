import Login from './Components/Login/Login'
import Login2 from './Components/Login2/Login2'
import PasswordChange from './Components/PasswordChange/PasswordChange'
import NavigationPanel from './Components/NavigationPanel/NavigationPanel'

import Navbar from './Components/UserDashBoard/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/UserDashBoard/pages/Home'
import Users from './Components/UserDashBoard/pages/Users'
import AddUser from './Components/UserDashBoard/pages/AddUser'
// import Kainat from './Components/UserDashBoard/pages/Kainat';
import React from 'react'
//Import immutability-helper
import FirstModal from './Components/UserDashBoard/pages/FirstModal'
import UserDetail from './Components/UserDashBoard/pages/UserDetail'
import Actual from './Components/UserDashBoard/pages/Actual'
import NameResponse from './Components/UserDashBoard/NameResponse'
import MoreInfo from './Components/UserDashBoard/pages/MoreInfo'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/users' element={<Users />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/actual' element={<Actual />} />
          <Route path='/userDetail' element={<UserDetail />} />
          <Route path='/fmodal' element={<FirstModal />} />
          <Route path='/nameResponse' element={<NameResponse />} />
          <Route path='/moreInfo' element={<MoreInfo/>} />

        </Routes>
        <Routes>
          <Route path='/navigation' element={<NavigationPanel/>}  />
          <Route path='/pwdChange' element={<PasswordChange/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/login2' element={<Login2/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
