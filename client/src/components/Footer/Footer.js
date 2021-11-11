import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &#169;2021 All rights reserved. <Link to='/PrivacyPolicy' className='footer-link'>Privacy Policy</Link> | <Link to='/TermsofUse' className='footer-link'>Terms of Use</Link> | <Link to='/FAQs' className='footer-link'>FAQs</Link> | <Link to='/Support' className='footer-link'>Support</Link></p>
        </footer>
    )
}

export default Footer
