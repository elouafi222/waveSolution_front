import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [firstname, setFirstname] = "";
  const [lastname, setLastname] = "";
  const [email, setEmail] = "";
  const [password, setPassword] = "";
  return (
    <div className="vh-100 vw-100  d-flex justify-content-center align-items-center">
    <div className="forms rounded-3 px-5 py-3" style={{ maxWidth: "400px", height :"max-content" }}>
        {/* <ToastContainer position="top-center" /> */}
        <div className="section-title">
          <h2>S'inscrire maintenant</h2>
        </div>
        <form>
          <div className="row d-flex">
            <div className="form-group mb-4">
              <label className="label text-dark" htmlFor="name">
                Nom
              </label>
              <input
                type="text"
                className="form-control shadow-none rounded-3"
                name="name"
                id="name"
                placeholder="Nom"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div className="form-group mb-4">
              <label className="label text-dark" htmlFor="name">
                Prénom
              </label>
              <input
                type="text"
                className="form-control shadow-none rounded-3"
                name="name"
                id="name"
                placeholder="Prénom"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

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
                value="S'inscrire"
                className="appointment-btn scrollto"
              />
            </div>
            <div className=" form-group text-center">
            <p className='form-link'>
            Vous avez déjà un compte ?
                <Link className="link" to="/login"> {" "} Connexion{" "} </Link>
                maintenant .
            </p>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
