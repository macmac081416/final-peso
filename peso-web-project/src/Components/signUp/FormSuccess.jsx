import React from 'react';
import './Form.css';
import profile2 from "../image/image2.png";

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Welcome to Peso Centralize Agency Monitoring System</h1>
      
      <img src={profile2} alt="profile" className="form-img-2"/>
    
    </div>
    
  );
};

export default FormSuccess;
