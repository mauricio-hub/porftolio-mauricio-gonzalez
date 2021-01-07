import React,{useEffect} from 'react'
 
export const About = () => {

 

	return (


		 <section id="about" className="about-section" >
      <div className="container">
   
        <h2 class="section-title text-center">
        SOBRE MI
        </h2>
      
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12 p-4 ">
          <div >
            <div className=" pl-4 fade-in thumbnail" >
              <img 
                className="img-fluid foto shadow-lg text-center pl-8  "
               
                width="190px"
                height = "190px"
                src="https://avatars2.githubusercontent.com/u/72770038?s=460&u=ef39bc67a0e796f1b71224bc45f897dc5da9aea9&v=4"
                alt="Profile Image"

               />

            </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
           <div >
            <div className="info">
              <p className="about-info-text text-white">
                Soy Mauricio González desarrollador web, 
                soy un apasionado de la tecnología  y  la computación ,
                 pero sobre todo soy una persona creativa me gusta crear
                  cosas que se vean geniales y además si le resulta útil 
                  a alguien más, pues mejor.<br/>Vengo del mundo de 
                  la música el cual estudie durante muchos años. 
             

               Además he pasando un pequeño periodo estudiando para Chef ( no me gusto ) y
                desde hace un buen tiempo me dedico al estudio del desarrollo
                 web con ayuda del internet. En El internet encontré lo interesante 
                  , creativo y desafiante del mundo de la programación pero por cuestiones
                   prácticas busco  especializarme  en el desarrollo web 
                   de momento más dedicado al frontend pero la meta  es
                    lograr ser  un full stack developer. 
            </p>

           <a href="#skills" className="link-to-skill" >
            
            <button  className="submit2" >MIS SKILLS</button>
            
             </a>

              </div>
              </div>
          </div>
        </div>
      </div>

      
    
                       
                       
    </section>
	)
}

