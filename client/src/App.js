import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './views/index'
import Layout from './views/layout/index'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Index />}/>
        <Route path={'/home'} element={<Layout />}/>
      </Routes>
    </Router>
  )
}
