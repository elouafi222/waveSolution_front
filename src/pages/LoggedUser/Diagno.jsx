import React from 'react'
import Sidebar from '../../components/Sidebar'
import ImageUploader from '../../components/ImageUploader'

function Diagno() {
  return (
    <div className="d-flex flex-row">
      <Sidebar />
      <div className="w-100" style={{ overflowY:"scroll", height:"100vh" }}>
      <section id="departments" className="departments m-3 rounded-3 section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Diagnostic</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <ImageUploader />
      </div>
    </section>
      </div>
    </div>
  )
}

export default Diagno