import {Route, Routes } from 'react-router-dom';
import HeaderNav from '../../component/headerNav'
import Home from '../homePage/home'
import About from '../aboutPage/about'

export default function App() {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path={'/home'} element={<Home />}/>
        <Route path={'/about'} element={<About />}/>
      </Routes>
    </div>
  )
}
