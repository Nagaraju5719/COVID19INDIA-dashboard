import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link className="nav-link-logo" to="/">
      <h1 className="header-title">
        COVID19<span className="country">INDIA</span>
      </h1>
    </Link>

    <ul className="nav-links-list">
      <li>
        <Link className="nav-link home" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link about" to="/about">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
