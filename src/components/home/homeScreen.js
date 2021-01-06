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
        backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + "./img/hero3.jpg" + ")",
        backgroundSize:"cover",
        backgroundPosition:"top"}}>
			
			 
            <Hero />
                
        	<About/>

        	<Skills/>

      		<ScrollTopArrow/>
			
		</div>
	)
}
