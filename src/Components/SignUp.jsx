import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {

    const {createUser} = use(AuthContext);
    
    

    const handleSignUp = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const name = formData.get('name');
        const photo = formData.get('photo')
        createUser(email,password,name,photo)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Name" />
              <label className="label">PhotoUrl</label>
              <input type="text" name="photo" className="input" placeholder="PhotoUrl" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
