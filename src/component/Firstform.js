import React from 'react'
import './form.css'

export const Firstform = () => {
    return (
        <>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <form class="box">
                    <h1>LOGIN</h1>
                    <p class="text-muted">Please Enter Your Login and Password!</p>
                    <input type="text" name ="" placeholder="Username">
                    </input><input type="password" name="" placeholder="Password"></input>
                    <a class="forgot text-muted" href="#" >Forgot Password?</a>
                    <input type="submit" name="" value="Login" href="#"></input>
                    <input type="submit" name="" value="Register" href="#"></input>
        
                    <div class="col-md-12">
                      <ul class="social-network social-circle">
                        <li><a href="#" class="icoFacebook" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#" class="icoGoogle" title="Google"><i class="fab fa-google-plus"></i></a></li>
                      </ul>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
    );
};
export default Firstform;

