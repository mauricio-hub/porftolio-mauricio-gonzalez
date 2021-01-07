import React from 'react'
import {ProjectGrid} from './ProjectGrid'
import {ScrollTopArrow} from '../ui/ScrollTopArrow'
export const ProjectsScreen = () => {
	return (
		<div  className="fade-in-back"  style={{  
			  backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" +  "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" + ")",
        backgroundSize:"cover",
        backgroundPosition:"top" 
			}}>
			

			<ProjectGrid/>

			
      		<ScrollTopArrow/>

			</div>	
	)
}

