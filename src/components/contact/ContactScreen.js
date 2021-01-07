import React from 'react'
import {ContactForm} from './ContactForm'
export const ContactScreen = () => {
	return (
		<div className="contenedor-contacto"  style={{  
			  backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + "https://images.unsplash.com/photo-1592950630581-03cb41342cc5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI5fHxwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" + ")",
        backgroundSize:"cover",
        backgroundPosition:"top" 
			}}>
		<ContactForm/>	
		</div>
	)
}

