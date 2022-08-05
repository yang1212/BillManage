import React, {useState} from "react";
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'
import './headerNav.less'

const navList = [
  {
   key: 'home',
   label: '文档',
  },
  {
   key: 'about',
   label: '配置',
  },
]
function HeaderNav() {
  const navigate = useNavigate()
  const [currentKey, setCurrentKey] = useState(useLocation().pathname.slice(1))
  function onHandleClick(e: any) {
    setCurrentKey(e.key)
    navigate(`/${e.key}`)
  }
  return (
    <div className="header">
      <Menu 
        theme='dark'
        mode='horizontal'
        items={navList}
        selectedKeys={[currentKey]}
        onClick={onHandleClick} />
    </div>
  )
}

export default HeaderNav;

