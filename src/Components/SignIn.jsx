import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignIn = () => {
  const { signInUser } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());
    signInUser(email, password)
      .then((result) => {
        // Signed in
        console.log(result);

        // update last sign in
        const signInInfo = {
            email,
            lastSignInTime : result.user?.metadata?.lastSignInTime,
        }
        fetch('https://coffee-store-server-eight-pink.vercel.app/users',{
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(signInInfo),
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log("after update",data);
            
        }
    );
        // ...
      })
      .catch((error) => {
        console.log(error);
        
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In Here !</h1>
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
