import React, { useState } from 'react';
import salledeBain from '../img/salle_de_bains.jpeg'
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#ffebcd',
  padding: '50px',
};

const afterStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

const handwritingFontStyle = {
  fontFamily: 'YourHandwritingFont', // Replace with the actual font name
  fontSize: '3em',
  color: '#333333',
};

const elementImageDropStyle = {
  marginTop: '20px',
  padding: '20px',
  textAlign: 'center',
  border: '4px dashed rgb(51 51 51)',
  backgroundColor: '#ecf0f1',
  borderRadius: '20px',
  width: '300px',
  transition: 'border-color 0.3s',
};

const uploadButtonStyle = {
  display: 'inline-block',
  padding: '15px 30px',
  color: '#fff',
  backgroundColor: 'rgb(51 51 51)',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '18px',
  transition: 'background-color 0.3s',
};

const uploadedImageStyle = {
  maxWidth: '100%',
  maxHeight: '300px',
  marginTop: '20px',
  border: '4px solid rgb(51 51 51)',
  borderRadius: '20px',
  boxShadow: '0 0 20px rgba(52, 152, 219, 0.5)',
};

const elementImageDropHoverStyle = {
  borderColor: 'rgb(51 51 51)',
};

const downloadLinkStyle = {
  display: 'inline-block',
  textDecoration: 'none',
  color: '#333',
};

const loaderStyle = {
  marginTop: '200px',
  display: 'none', // Add loader styles here
};

function Choose() {
  const [selectedImage, setSelectedImage] = useState(null);

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  }

  return (
    <div  style={containerStyle}>
      <div style={afterStyle}>
        
        <span style={handwritingFontStyle}>Votre intérieur actuel</span>
      </div>
      <div style={{ ...elementImageDropStyle, ...(selectedImage && elementImageDropHoverStyle) }}>
      
        {/* File input */}
        <label htmlFor="upload" style={uploadButtonStyle}>
          Upload Image
        </label>
        <input className="nn" type="file" id="upload" onChange={handleImageUpload} accept="image/*" />
        {selectedImage && (
          <img src={selectedImage} id="generated" alt="Uploaded" style={uploadedImageStyle} />
        )}
      </div>
      <div style={afterStyle}>
        <span style={handwritingFontStyle}>Résultat </span>
        <div style={elementImageDropStyle}>
          <a id="download" href download style={downloadLinkStyle}>
            <img id="generated" style={{ display: 'none' }} />
          </a>
          <div id="loader" style={loaderStyle} />
        </div>
      </div>
    </div>
  );
}

export default Choose;
