import React from 'react'
import { NavLink } from 'react-router-dom'
import Cookies from 'universal-cookie'

import './Navbar.css'
import chatIcon from '../../assets/comments-solid.svg'
import userIcon from '../../assets/user-solid.svg'
import logoutIcon from '../../assets/sign-out-alt-solid.svg'

const Navbar = ({ handleLogout }) => {

	const cookies = new Cookies()
	const userToken = cookies.get('token')

    return (
        <nav>
		{
			!userToken ? 
			<div className='nav'>
				<div>
					<NavLink to='/' className="nav-title"><span>Sona</span><span> Share</span> </NavLink>
				</div>
				<div>
					<NavLink to='/how-to-use' className="nav-link" activeClassName="nav-link-selected">How to use?</NavLink>
					<NavLink to='/Auth/signup' className="nav-link" activeClassName="nav-link-selected">Signup</NavLink>
					<NavLink to='/Auth/login' className="nav-link" activeClassName="nav-link-selected">Login</NavLink>
				</div>
			</div> : 
			<div className='nav-auth'>
				<NavLink to='/'><img src={chatIcon} alt="chat icon" className='nav-icon'/> </NavLink>
				<NavLink to='/Profile'><img src={userIcon} alt="user icon" className='nav-icon'/> </NavLink>
				<button type="button" className="logout-btn" onClick={handleLogout}><img src={logoutIcon} alt="logout icon" className='nav-icon'/></button>
			</div>
		}
        </nav>
    )
}

export default Navbar
