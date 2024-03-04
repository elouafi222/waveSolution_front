import React from 'react'

function Footer() {
  return (
    <footer id="footer">
    <div className="container d-md-flex  py-4"> <div className="me-md-auto text-center">
        <div className="copyright">
          &copy; Copyright <strong><span>WaveSolution</span></strong>. All Rights Reserved
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" className="twitter"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="#" className="twitter"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" className="twitter"><i className="fa-brands fa-twitter"></i></a>
        
      </div>
    </div>
  </footer>
  )
}

export default Footer