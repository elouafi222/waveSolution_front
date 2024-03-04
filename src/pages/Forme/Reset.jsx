import React from 'react'

function Reset() {
  const [password, setPassword] = ""
  const [conPassword, setConPassword] = ""
  return (
    <div className="vh-100 vw-100  d-flex justify-content-center align-items-center">
    <div className="forms rounded-3 px-5 py-3" style={{ maxWidth: "400px", height :"max-content" }}>
        {/* <>
          <div
            style={{ minHeight: "81vh" }}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <i
              className="bi bi-exclamation-circle text-danger "
              style={{ fontSize: "5rem" }}
            ></i>
            <h3 className="text-success text-danger">Introuvable </h3>
          </div>
        </> */}
  
        <>
        <div className="section-title">
   <h2>Reset Password</h2>
   <p>Veuillez entrer votre  new password  </p>
   </div>
          <form>
            <div className="row d-flex">
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

              <div className="form-group mb-4">
                <label className="label text-dark" htmlFor="subject">
                  Password Confirmation 
                </label>
                <input
                  type="password"
                  className="form-control shadow-none rounded-3"
                  name="subject"
                  id="subject"
                  placeholder="Password"
                  onChange={(e) => setConPassword(e.target.value)}
                />
              </div>

              <div className="form-group mb-4 d-flex justify-content-center">
                <input
                  type="submit"
                  value="Réinitialiser"
                  className="appointment-btn scrollto"
                />
              </div>
            </div>
          </form>
        </>
    </div>
  </div>
  )
}

export default Reset