import React from 'react'
import {Hero} from './Hero';
import {About} from './About'
import {Skills } from './Skills'

import {ScrollTopArrow} from '../ui/ScrollTopArrow'
export  const homeScreen = () => {

/*
 style={{  
        backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + "./img/hero3.jpg" + ")",
        backgroundSize:"cover",
        backgroundPosition:"top"}}

*/

	return (

       <div className="fade-in-back" style={{  
        backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +"https://images.unsplash.com/photo-1560762484-813fc97650a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" + ")",
        backgroundSize:"cover",
        backgroundPosition:"top"}}>
			
			 
            <Hero />
                
        	<About/>

        	<Skills/>

      		<ScrollTopArrow/>
			
		</div>
	)
}
