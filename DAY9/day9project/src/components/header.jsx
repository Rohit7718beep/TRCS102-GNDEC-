import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <div className="logo">logo
        </div>
        <nav>
            <div className="hlink"><Link to="/">Home</Link></div>
              <div className="hlink" ><Link to="/about">About</Link></div>
                <div className="hlink"><Link to="/product">Products</Link></div>
                  <div className="hlink"><Link to="/cart">Cart</Link></div>
        </nav>
        <div className="auth">
            <div><Link to="/signin">signin</Link></div>
            <div>signup</div>
        </div>
    </header>
  )
}

export default Header
