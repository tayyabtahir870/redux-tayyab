import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div style={{display:'flex', alignItems:"space-between"}}>
        <span className='logo'>Redux Store</span>
        <div>
            <Link className='navLink' to="/" >Home</Link>
            <Link className='navLink' to="/cart">Cart</Link>

            <span className='cartCount'>Card items : 0</span>
        </div>
    </div>
  )
}

export default Header