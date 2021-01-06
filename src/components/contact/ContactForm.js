import React from 'react'
import emailjs from 'emailjs-com';
export const ContactForm = () => {

   function sendEmail(e){
         e.preventDefault();

        emailjs.sendForm('service_cvr04er', 'template_3pmm9mr', e.target, 'user_Tz0lmHTiL0wSRpCk8qNXJ')
        .then((result) => {
          //console.log(result.text);
         }, (error) => {
          console.log(error.text);
        });

       

         e.target.reset();
       
        
        
    }

  return (
   <div className="container  contact-form  fade-in-back ">
    <div className="row">
        <div className="col">
            <div className="card-transparent">
                
                 <div className="col-sm-12  col-md-12">
            <div className="card-transparent bg-transparent  mb-3">
                <div className="card-header   text-white text-uppercase"><i class="fa fa-home"></i> Direccion</div>
                <div className="card-body text-dark input-contact">
                      <p>Colombia</p>
                    <p>Norte de Santander</p>
                     <p>Cucuta </p>
                  
                    <p className="p-email">Email : mauriciogonzalezdeveloper@gmail.com</p>
                    <p>Tel. +57 3208566</p>

                </div>

            </div>
        </div>

                <div className="card-body text-white  ">
                <div className="card-header bg-transparent text-white  contact-form"><i class="fa fa-envelope"></i> CONTACTAME.
                </div>
                    <form  onSubmit={sendEmail}  >
                        <div className="form-group">
                            <label for="name">Tu Nombre</label>
                            <input type="text" class="form-control input-contact" id="name" aria-describedby="emailHelp" placeholder="nombre"   name="name" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Tu Email</label>
                            <input type="email" class="form-control input-contact" id="email" aria-describedby="emailHelp" placeholder="email" name="email"  required/>
                           
                        </div>
                        <div className="form-group">
                            <label for="subject">Tema</label>
                            <input type="subject" class="form-control input-contact" id="subject" aria-describedby="emailHelp" placeholder="Tema"  name="subject" required/>
                           
                        </div>
                        <div className="form-group">
                            <label for="message">Mensaje</label>
                            <textarea class="form-control input-contact" id="message" rows="8" name="message"  required></textarea>
                        </div>
                        <div className="mx-auto">
                        <button type="submit" class="submit ">Enviar</button></div>
                    </form>
                </div>
            </div>
        </div>
       
    </div>
</div>
  )
}

