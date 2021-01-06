import React from 'react'
import {ProjectGrid} from './ProjectGrid'
import {ScrollTopArrow} from '../ui/ScrollTopArrow'
export const ProjectsScreen = () => {
	return (
		<div  className="fade-in-back"  style={{  
			  backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + "./img/portafolio.jpg" + ")",
        backgroundSize:"cover",
        backgroundPosition:"top" 
			}}>
			

			<ProjectGrid/>

			
      		<ScrollTopArrow/>

			</div>	
	)
}

