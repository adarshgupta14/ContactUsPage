import './Navigation.module.css'
import { TbHexagonLetterA } from "react-icons/tb";

const Navigation = () => {
  return (
    <nav className='container'>
      <div className='logo'>
        <TbHexagonLetterA style={{fontSize: '50px'}}/>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation