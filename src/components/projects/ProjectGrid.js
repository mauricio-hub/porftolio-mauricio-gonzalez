import React,{useEffect} from 'react'


export const ProjectGrid = () => {

 
	return (

    <>
	


    <section id="projects" className="text-white">
      <div className="container">
        <div className="project-wrapper">
          <br/>
          <h2 className="section-title dark-blue-text">
            PROYECTOS
          </h2>
          <br/>

        
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
              <div>
                <h3 className="project-wrapper__text-title">Proyecto React Tienda Online Chaquetas </h3>
                <div>
                  <p className="mb-4" >
                   Pequeño template hecho en react simulando una tienda online
                  </p>
                </div>
                </div>
                  <div className="btn-container">
                <a target="_blank" className="mr-2  font-weight-bold text-uppercase btn-projects" href="https://mauricio-hub.github.io/chaquetas-react-app/">
                  Demo 
                </a>
                <a target="_blank" className="mr-2 font-weight-bold text-uppercase btn-projects" href="https://github.com/mauricio-hub/chaquetas-react-app">
                  Codigo 
                </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 mb-4">
              <div className="">
                <div >
                  <div data-tilt className="thumbnail rounded  mt-3 fade-in ">
                    <img className="img-fluid rounded pro__img" src="https://tottoco.vteximg.com.br/arquivos/ids/256366-1000-1000/RA41535-1920-N01_1.jpg?v=637071744169870000" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="row">
            <div className="col-lg-4 col-sm-12 ">
              <div className="">
              
                <h3 className="">Mi Portafolio en React</h3>
                <div>
                  <p className="mb-4">
                    mi portafolio hecho en React creado con diferentes componentes que conforman cada pagina
                    tales como el navbar o el footer ademas del uso de react-router para la navegacion.
                  </p>
                </div>
               
                  <div className="btn-container">
                <a target="_blank" class="mr-2 font-weight-bold text-uppercase btn-projects" href="#">
                  Demo 
                </a>
                <a target="_blank" class=" font-weight-bold text-uppercase btn-projects" href="#">
                 Codigo
                </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 mb-4">
              <div className="">
                <div>
                  <div data-tilt className="thumbnail rounded  mt-3 fade-in">
                    <img className="img-fluid rounded  pro__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuGReWOpOI3I1q_vlS6uhPy7lo-EwwZ9O0A&usqp=CAU" />
                  </div>
                </div>
              </div>
            </div>
          </div>
       
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="">
                <h3 className="">React app Bucador de Recetas </h3>
                <div>
                  <p className="mb-4">
                   Buscador de recetas aplicacion que me permitio entender la busqueda de datos dentro de una api.
                  </p>
                </div>
                <div className="btn-container">
                   <a target="_blank" className="mr-2 font-weight-bold text-uppercase btn-projects" href="https://mauricio-hub.github.io/buscador-receta-react/">
                  Demo
                </a>
                <a target="_blank" className=" font-weight-bold text-uppercase btn-projects" href="https://github.com/mauricio-hub/buscador-receta-react/">
                  Codigo
                </a>
                </div>

               
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <div href="#!" target="_blank">
                  <div data-tilt className="thumbnail rounded mb-3 mt-3 fade-in">
                    <img className="img-fluid rounded  pro__img" src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>

    </>
	)
}

