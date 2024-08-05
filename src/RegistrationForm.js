import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import './RegistrationForm.css';
import registrationImage from './logo.jpeg'; 

const RegistrationForm = () => {
  const [phone, setPhone] = useState('');
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    email: '',
    organizationMobile: '',
    address: '',
    state: '',
    pincode: '',
    gstNumber: '',
    countStudents: '',
    countStaffs: '',
    organizationRegNumber: '',
    referralCode: '',
    hearAboutUs: '',
    contactName: '',
    designation: '',
    contactEmail: '',
    contactMobile: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Check for empty fields
    Object.keys(formData).forEach((key) => {
      if (formData[key] === '') {
        validationErrors[key] = true;
      }
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="container-fluid">
      <div className="image-section d-none d-md-block">
        <img src={registrationImage} alt="Register" className="img-fluid" />
      </div>
      <div className="form-section">
        <form className="p-4" onSubmit={handleSubmit}>
          <h2>Self Register</h2>
          <p>Please give your organization details</p>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="organizationName" className={`form-label ${errors.organizationName ? 'error' : ''}`}>Organization Name*</label>
              <input type="text" className="form-control" id="organizationName" placeholder="Organization Name" value={formData.organizationName} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="organizationType" className={`form-label ${errors.organizationType ? 'error' : ''}`}>Organization Type*</label>
              <input type="text" className="form-control" id="organizationType" placeholder="Organization Type" value={formData.organizationType} onChange={handleChange} />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className={`form-label ${errors.email ? 'error' : ''}`}>Email-id*</label>
              <input type="email" className="form-control" id="email" placeholder="Email-id" value={formData.email} onChange={handleChange} />
            </div>
            <div className="col-md-6 col-12">
              <label htmlFor="organizationMobile" className={`form-label ${errors.organizationMobile ? 'error' : ''}`}>Organization Mobile Number*</label>
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={setPhone}
                inputProps={{
                  name: 'organizationMobile',
                  required: true,
                  autoFocus: false,
                }}
                inputClass="form-control orgmobile"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className={`form-label ${errors.address ? 'error' : ''}`}>Address*</label>
            <input type="text" className="form-control" id="address" placeholder="Address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="state" className={`form-label ${errors.state ? 'error' : ''}`}>State*</label>
              <input type="text" className="form-control" id="state" placeholder="State" value={formData.state} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="pincode" className={`form-label ${errors.pincode ? 'error' : ''}`}>Pincode*</label>
              <input type="text" className="form-control" id="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="gstNumber" className={`form-label ${errors.gstNumber ? 'error' : ''}`}>GST Number*</label>
            <input type="text" className="form-control" id="gstNumber" placeholder="GST Number" value={formData.gstNumber} onChange={handleChange} />
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="countStudents" className={`form-label ${errors.countStudents ? 'error' : ''}`}>Count of Students*</label>
              <input type="text" className="form-control" id="countStudents" placeholder="Count of Students" value={formData.countStudents} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="countStaffs" className={`form-label ${errors.countStaffs ? 'error' : ''}`}>Count of Staffs*</label>
              <input type="text" className="form-control" id="countStaffs" placeholder="Count of Staffs" value={formData.countStaffs} onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="organizationRegNumber" className={`form-label ${errors.organizationRegNumber ? 'error' : ''}`}>Organization Registration Number*</label>
            <input type="text" className="form-control" id="organizationRegNumber" placeholder="Organization Registration Number" value={formData.organizationRegNumber} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="referralCode" className={`form-label ${errors.referralCode ? 'error' : ''}`}>Referral Code*</label>
            <input type="text" className="form-control" id="referralCode" placeholder="Referral Code" value={formData.referralCode} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="hearAboutUs" className={`form-label ${errors.hearAboutUs ? 'error' : ''}`}>How did you hear about us*</label>
            <input type="text" className="form-control" id="hearAboutUs" placeholder="How did you hear about us" value={formData.hearAboutUs} onChange={handleChange} />
          </div>
          <p>Contact Person Details</p>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="contactName" className={`form-label ${errors.contactName ? 'error' : ''}`}>Name*</label>
              <input type="text" className="form-control" id="contactName" placeholder="Name" value={formData.contactName} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="designation" className={`form-label ${errors.designation ? 'error' : ''}`}>Designation*</label>
              <input type="text" className="form-control" id="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="contactEmail" className={`form-label ${errors.contactEmail ? 'error' : ''}`}>Email*</label>
              <input type="email" className="form-control" id="contactEmail" placeholder="Email" value={formData.contactEmail} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label htmlFor="contactMobile" className={`form-label ${errors.contactMobile ? 'error' : ''}`}>Mobile Number*</label>
              <input type="text" className="form-control" id="contactMobile" placeholder="Mobile Number" value={formData.contactMobile} onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Next</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
