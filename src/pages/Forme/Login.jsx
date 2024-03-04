import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] =""
	const [password, setPassword] =""
  
  return (
    <div className="vh-100 vw-100  d-flex justify-content-center align-items-center">
    <div className="forms rounded-3 px-5 py-3" style={{ maxWidth: "400px", height :"max-content" }}>
    {/* <ToastContainer position="top-center" /> */}
   <div className="section-title">
   <h2>Connectez-vous maintenant</h2>
   </div>
      <form >
        <div className="row d-flex">
          <div className="form-group mb-4">
            <label className="label text-dark" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              className="form-control shadow-none rounded-3"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mb-4">
            <label className="label text-dark" htmlFor="subject">
              Password
            </label>
            <input
              type="password"
              className="form-control shadow-none rounded-3"
              name="subject"
              id="subject"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group mb-4 d-flex justify-content-center">
            <input
              type="submit"
              value="Connexion"
              className="appointment-btn scrollto"
            />
          </div>
          <div className=" form-group text-center">
            <p className='form-link'>
            Vous n'avez pas de compte ?
              <Link className="link" to="/signin"> S'inscrire    </Link>
              maintenant.
            </p>
            <p className='form-link'>
            Mot de passe oublié ?
              <Link className="link" to="/forgotPassword"> 
              {" "} Réinitialiser {" "}    
              </Link> 
              maintenant.
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Login;
