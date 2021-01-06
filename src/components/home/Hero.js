import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
export const Hero = () => {

   useEffect(() => {
     Aos.init({duration:2000})
    }, []) 



	return (
		
			
			<div className="jumbotron-fluid" id="hero"  >
        
      		<div className="container"  >
          
          <div >
        	<h1 className="hero-text fade-in" >
         	 <span className="">Hola, Soy</span> <span className="text-main "> Mauricio González </span>
          	
          	Frontend Developer.
        	</h1>
          </div>
          	<a href="#about">
            <button type="button" className="btn btn-outline-info text-center ">CONOCE MAS</button></a>
        	
      		</div>
   			</div>
		
	)
}

