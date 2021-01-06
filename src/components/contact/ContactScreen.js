import React from 'react'
import {ContactForm} from './ContactForm'
export const ContactScreen = () => {
	return (
		<div className="contenedor-contacto"  style={{  
			  backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + "./img/contact.jpg" + ")",
        backgroundSize:"cover",
        backgroundPosition:"top" 
			}}>
		<ContactForm/>	
		</div>
	)
}

