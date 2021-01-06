import React,{useEffect} from 'react'
 
export const About = () => {

 

	return (


		 <section id="about" className="about-section" >
      <div className="container">
      <hr className="hr"/>
        <h2 class="section-title text-center">
        SOBRE MI
        </h2>
         <hr/>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12 p-4 ">
          <div >
            <div className=" pl-4 fade-in thumbnail" >
              <img 
                className="img-fluid foto shadow-lg text-center pl-8  "
               
                width="160px"
                height = "160px"
                src="./img/cv2.jpg"
                alt="Profile Image"

               />

            </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
           <div >
            <div className="info">
              <p className="about-info-text text-white">
                Mi nombre es Mauricio González desarrollador web, 
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

