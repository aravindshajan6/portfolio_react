import React from 'react'
import '../styles/form.css'


function Form() {
  return (
    <div>
        <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
            <section id="contact" class="  content-section text-center"/>
            <div class="contact-section">
                <div class="container" >
                    <h2 class="hcon contactme txtcolor1">Contact Me</h2>
                    <p class="ptag  txtcolor1">Feel free to contact me  by filling the contact form or visiting my social networks.</p>
                    <div class="row">
                    
                        <form class="form-horizontal  txtcolor1">
                        <div class="form-group">
                            <label for="exampleInputName2">Name</label>
                            <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail2">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
                        </div>
                        <div class="form-group ">
                            <label for="exampleInputText">Your Message</label>
                            <textarea  class="form-control" placeholder="Description"></textarea> 
                        </div>
                        <button type="submit" class="btn btn-primary  txtcolor1">Send Message</button>
                        </form>

                  <hr/>
                    <h3 class="hcon  txtcolor1">Find me on</h3>
                  <ul class="list-inline banner-social-buttons socbut">
                    <li><a href="#" class="btn btn-default btn-lg atag hvr-sweep-to-right"><i class="fa fa-twitter"> <span class="network-name txtcolor1">Twitter</span></i></a></li>
                    <li><a href="#" class="btn btn-default btn-lg atag hvr-sweep-to-right2"><i class="fa fa-facebook"> <span class="network-name txtcolor1">Facebook</span></i></a></li>
                    <li><a href="#" class="btn btn-default btn-lg atag hvr-sweep-to-right3"><i class="fa fa-youtube-play"> <span class="network-name txtcolor1">Youtube</span></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        
        </div>

    </div>
  )
}

export default Form