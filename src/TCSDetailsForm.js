import React, { useState } from 'react';

const TCSDetailsForm = () => {
  const [formData, setFormData] = useState({
    tcsType: 'Regular',
    businessName: '',
    panNumber: '',
    businessType: '',
    emailId: '',
    phoneNumber: '',
    tanNumber: '',
    dateOfReceipt: '',
    dueDate: '',
    filingDate: '',
    status: 'Pending'
  });

  const [attachments, setAttachments] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setAttachments(prev => [...prev, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Attachments:', attachments);
    alert('TCS Details Submitted Successfully!');
  };

  return (
    <div className="tcs-form-container">
      <div className="tcs-form">
        <div className="tcs-form-header">
          <h1 className="tcs-form-title">TCS Details Entry</h1>
          <p className="tcs-form-subtitle">Input the TCS-related details</p>
        </div>

        {/* TCS Type Selection */}
        <div className="tcs-form-section">
          <h2 className="tcs-section-title">Select TCS Type</h2>
          <div className="tcs-type-container">
            {['Regular', 'E-commerce', 'Foreign Remittance', 'Overseas Tour'].map((type) => (
              <button
                key={type}
                type="button"
                className={`tcs-type-button ${formData.tcsType === type ? 'active' : ''}`}
                onClick={() => setFormData(prev => ({ ...prev, tcsType: type }))}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Business Information */}
        <div className="tcs-form-section">
          <h2 className="tcs-section-title">Business Information</h2>
          
          <div className="tcs-form-row">
            <div className="tcs-form-column">
              <label className="tcs-form-label">Legal Name of Business *</label>
              <input
                type="text"
                name="businessName"
                placeholder="Enter legal business name"
                className="tcs-form-input"
                value={formData.businessName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="tcs-form-column">
              <label className="tcs-form-label">PAN Number *</label>
              <input
                type="text"
                name="panNumber"
                placeholder="Enter PAN number"
                className="tcs-form-input"
                value={formData.panNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="tcs-form-row">
            <div className="tcs-form-column">
              <label className="tcs-form-label">Type of Business *</label>
              <select
                name="businessType"
                className="tcs-form-select"
                value={formData.businessType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select business type</option>
                <option value="E-commerce Operator">E-commerce Operator</option>
                <option value="Seller of Goods">Seller of Goods</option>
                <option value="Foreign Exchange Dealer">Foreign Exchange Dealer</option>
                <option value="Tour Operator">Tour Operator</option>
                <option value="Parking Lot Operator">Parking Lot Operator</option>
                <option value="Toll Plaza Operator">Toll Plaza Operator</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="tcs-form-column">
              <label className="tcs-form-label">Email ID *</label>
              <input
                type="email"
                name="emailId"
                placeholder="Enter email address"
                className="tcs-form-input"
                value={formData.emailId}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="tcs-form-row">
            <div className="tcs-form-column">
              <label className="tcs-form-label">Phone Number *</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter phone number"
                className="tcs-form-input"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="tcs-form-column">
              <label className="tcs-form-label">TAN Number</label>
              <input
                type="text"
                name="tanNumber"
                placeholder="Enter TAN number"
                className="tcs-form-input"
                value={formData.tanNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Filing Details */}
        <div className="tcs-form-section">
          <h2 className="tcs-section-title">Filing Details</h2>
          
          <div className="tcs-form-row">
            <div className="tcs-form-column">
              <label className="tcs-form-label">Date of Receipt</label>
              <input
                type="date"
                name="dateOfReceipt"
                className="tcs-form-input"
                value={formData.dateOfReceipt}
                onChange={handleInputChange}
              />
            </div>
            <div className="tcs-form-column">
              <label className="tcs-form-label">Due Date</label>
              <input
                type="date"
                name="dueDate"
                className="tcs-form-input"
                value={formData.dueDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="tcs-form-column">
              <label className="tcs-form-label">Filing Date</label>
              <input
                type="date"
                name="filingDate"
                className="tcs-form-input"
                value={formData.filingDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="tcs-form-label">Status</label>
            <div className="tcs-status-container">
              <div className="tcs-status-option">
                <input
                  type="radio"
                  id="pending"
                  name="status"
                  value="Pending"
                  checked={formData.status === 'Pending'}
                  onChange={handleInputChange}
                />
                <label htmlFor="pending" className="tcs-pending-label">Pending</label>
              </div>
              <div className="tcs-status-option">
                <input
                  type="radio"
                  id="filed"
                  name="status"
                  value="Filed"
                  checked={formData.status === 'Filed'}
                  onChange={handleInputChange}
                />
                <label htmlFor="filed" className="tcs-filed-label">Filed</label>
              </div>
              <div className="tcs-status-option">
                <input
                  type="radio"
                  id="rejected"
                  name="status"
                  value="Rejected"
                  checked={formData.status === 'Rejected'}
                  onChange={handleInputChange}
                />
                <label htmlFor="rejected" className="tcs-rejected-label">Rejected</label>
              </div>
            </div>
            <div className="tcs-status-subtext">
              Select status
            </div>
          </div>
        </div>

        {/* Attachments */}
        <div className="tcs-form-section">
          <h2 className="tcs-section-title">Attachments</h2>
          <div className="tcs-attachment-container">
            <div className="tcs-upload-icon">↑</div>
            <div className="tcs-upload-text">Click to upload or drag and drop</div>
            <div className="tcs-upload-subtext">Supported formats: PDF, DOC</div>
            <input
              type="file"
              id="fileInput"
              className="tcs-file-input"
              multiple
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
            />
            <label htmlFor="fileInput" className="tcs-upload-button">
              Upload Files
            </label>
          </div>
          {attachments.length > 0 && (
            <div className="tcs-uploaded-files">
              <strong>Uploaded files:</strong>
              <ul>
                {attachments.map((file, index) => (
                  <li key={index} className="tcs-file-item">
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button type="button" className="tcs-submit-button" onClick={handleSubmit}>
          Submit TCS Details
        </button>
      </div>
    </div>
  );
};

export default TCSDetailsForm;
