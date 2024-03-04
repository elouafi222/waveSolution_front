import React from 'react'

function Forgot() {
  const [email, setEmail] = ""
  return (
    <div className="vh-100 vw-100  d-flex justify-content-center align-items-center">
    <div className="forms rounded-3 px-5 py-3" style={{ maxWidth: "400px", height :"max-content" }}>
 
      <div className="section-title">
   <h2>Forgot Password</h2>
   <p>Veuillez entrer votre adresse e-mail   </p>
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
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>


            <div className="form-group mb-4 d-flex justify-content-center">
              <input
                type="submit"
                value="Envoyer"
                className="appointment-btn scrollto"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Forgot