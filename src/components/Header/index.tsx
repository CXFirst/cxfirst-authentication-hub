import React from 'react'
import './styles.css'
import logo from '../../images/logo.svg'
const Header = () => {
  return (
    <div className={"header-container py-2 px-4 md:py-4 font-medium "}>
      Bienvenue sur votre portail de restitution de l'expérience client
      <img src={logo} alt="Logo" className="logo" />
    </div>
  )
}

export default Header