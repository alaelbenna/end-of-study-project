import React, {useState} from 'react';
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
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f4f6f9',
  padding: '50px',
};

function Footer1() {
  const [selectedColor, setSelectedColor] = useState('');

  // Function to handle color selection
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

    return (
      <div> 
        <div  style={containerStyle}>
        <label htmlFor="button" style={uploadButtonStyle}>
          Submit
        </label>
       </div>
      <div id="color-type-div">
        <span id="color-type-span">Choose your color</span>
        <div className="image-grid-style">
          <div className="color-palette">
            <div
              className="col-1 color-box"
              style={{ backgroundColor: '#800080' }}
              onClick={() => handleColorSelection('Purple')}
            />
            <div
              className="col-2 color-box"
              style={{ backgroundColor: '#FF00FF' }}
              onClick={() => handleColorSelection('Fuchsia')}
            />
            <div
              className="col-3 color-box"
              style={{ backgroundColor: '#000080' }}
              onClick={() => handleColorSelection('Navy')}
            />
           <div
              className="col-4 color-box"
              style={{ backgroundColor: '#008080' }}
              onClick={() => handleColorSelection('Teal')}
            />
            <div
              className="col-5 color-box"
              style={{ backgroundColor: '#00FFFF' }}
              onClick={() => handleColorSelection('Aqua')}
            />
            <div
              className="col-6 color-box"
              style={{ backgroundColor: '#008000' }}
              onClick={() => handleColorSelection('Green')}
            />
            <div
              className="col-7 color-box"
              style={{ backgroundColor: '#00FF00' }}
              onClick={() => handleColorSelection('Lime')}
            />
            <div
              className="col-10 color-box"
              style={{ backgroundColor: '#FFFF00' }}
              onClick={() => handleColorSelection('Yellow')}
            />
            <div
              className="col-11 color-box"
              style={{ backgroundColor: '#FF0000' }}
              onClick={() => handleColorSelection('Red')}
            />
            <div
              className="col-12 color-box"
              style={{ backgroundColor: '#000000' }}
              onClick={() => handleColorSelection('Black')}
            />
            <div
              className="col-13 color-box"
              style={{ backgroundColor: '#808080' }}
              onClick={() => handleColorSelection('Gray')}
            />
            <div
              className="col-14 color-box"
              style={{ backgroundColor: '#C0C0C0' }}
              onClick={() => handleColorSelection('Silver')}
            />
            <div
              className="col-15 color-box"
              style={{ backgroundColor: '#808000' }}
              onClick={() => handleColorSelection('Olive')}
            />
            <div
              className="col-16 color-box"
              style={{ backgroundColor: '#641E16' }}
              onClick={() => handleColorSelection('Maroon')}
            />
          </div>
        </div>
      </div>

  {/* Display selected color */}
  {selectedColor && (
        <div
          style={{
            marginTop: '10px',
            padding: '5px',
            backgroundColor: selectedColor,
            color: '#fff',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          Selected Color: {selectedColor}
        </div>
      )}
    </div>
  );
      };
      

export default Footer1;