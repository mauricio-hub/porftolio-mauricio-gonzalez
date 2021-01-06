import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark navegacion">
            
            

            <div className="navbar-collapse ">
                <div className="navbar-nav">

                    <NavLink

                        activeClassName="active"
                        className="nav-item nav-link font-weight-bold navbar-text" 
                        exact
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link font-weight-bold navbar-text" 
                        exact
                        to="/porjects"
                    >
                        Portafolio
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link  font-weight-bold navbar-text" 
                        exact
                        to="/contact"
                    >

                        Contacto
                    </NavLink>

                 
                   
                </div>
            </div>

             <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <a
                        activeClassName="active"
                        className="nav-item nav-link navbar-icon m-2 " 
                        href="https://www.linkedin.com/in/mauricio-gonzalez-desarrollador-web"
                        target="_blank"
                    >

                         <i class="fa fa-linkedin"></i>
                       
                    </a>

                        <a 
                        activeClassName="active"
                        className="nav-item nav-link navbar-icon m-2 " 
                        exact
                        href="https://github.com/mauricio-hub"
                        target="_blank"
                    >

                       <i class="fa fa-github"></i>
                       
                    </a>
                    
                    
                   
                </ul>
            </div>

             

        </nav>
    )
}