import { useNavigate } from 'react-router-dom'
import './index.scss'

export default function Home() {
  const navigate = useNavigate()
  function goHome() {
    navigate(`/home`)
  }
  return (
    <div className='container'>
      <div className="panel-left">
        <h1>Hello world</h1>
        <p>If somebody somewhere has the right answer, suddenly you have it too. Collaborate better in a remote-first world.</p>
        <div onClick={goHome} className="btn-primary">welcome</div>
      </div>
      <img src="./main.png" alt=""/>
      <div class="ellips">
        <div class="dot">T</div>
      </div>
    </div>
  );
}
