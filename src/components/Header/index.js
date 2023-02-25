// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
    </div>
    <ul>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
        />
        <Link to="/">Home</Link>
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
        />
        <Link to="/products">Products</Link>
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
        />
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
    <button type="button">
      <im
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
      />
      Logout
    </button>
  </nav>
)

export default Header
