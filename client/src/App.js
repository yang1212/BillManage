import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderNav from './component/headerNav'
import Index from './views/indexPage/index'
import Home from './views/homePage/home'
import About from './views/aboutPage/about'

export default function App() {
  return (
    <Router>
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path={'/'} element={<Index />}/>
        <Route path={'/home'} element={<Home />}/>
        <Route path={'/about'} element={<About />}/>
        <Route path={'/test'} element={<Home />}/>
      </Routes>
    </Router>
  )
}
