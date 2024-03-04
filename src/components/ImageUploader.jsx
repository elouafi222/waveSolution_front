import React from 'react';

function ImageUploader() {
  const displaySelectedImage = (event, id) => {
    const selectedImage = document.getElementById(id);
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        selectedImage.src = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className=''>
    <div className="mb-4 d-flex justify-content-center">
      <img
        className='rounded-3'
        id="selectedImage"
        src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
        alt="example placeholder"
        style={{ width: '500px' }}
      />
    </div>
    <div className="d-flex justify-content-center">
      <div className="appointment-btn scrollto">
        <label className="form-label text-white m-1" htmlFor="customFile1">
          Choose file
        </label>
        <input
          type="file"
          className="form-control d-none"
          id="customFile1"
          onChange={(event) => displaySelectedImage(event, 'selectedImage')}
        />
      </div>
    </div>
  </div>
  );
}

export default ImageUploader;
