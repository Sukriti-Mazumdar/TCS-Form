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

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      padding: '20px',
    },
    form: {
      backgroundColor: '#e8e8e8',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '5px',
    },
    subtitle: {
      fontSize: '14px',
      color: '#666',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '15px',
    },
    tcsTypeContainer: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      flexWrap: 'wrap',
    },
    tcsTypeButton: {
      padding: '8px 16px',
      border: '1px solid #ccc',
      backgroundColor: '#f8f8f8',
      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '14px',
    },
    tcsTypeButtonActive: {
      padding: '8px 16px',
      border: '1px solid #007bff',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '14px',
    },
    row: {
      display: 'flex',
      gap: '20px',
      marginBottom: '15px',
    },
    column: {
      flex: '1',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#333',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: 'white',
      boxSizing: 'border-box',
    },
    select: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: 'white',
      boxSizing: 'border-box',
    },
    statusContainer: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      marginTop: '10px',
    },
    statusOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    statusLabel: {
      fontSize: '14px',
      cursor: 'pointer',
    },
    pendingLabel: {
      backgroundColor: '#ffc107',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
    },
    filedLabel: {
      backgroundColor: '#28a745',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
    },
    rejectedLabel: {
      backgroundColor: '#dc3545',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
    },
    attachmentContainer: {
      border: '2px dashed #ccc',
      borderRadius: '8px',
      padding: '40px',
      textAlign: 'center',
      backgroundColor: 'white',
      marginTop: '10px',
    },
    uploadIcon: {
      fontSize: '48px',
      color: '#ccc',
      marginBottom: '10px',
    },
    uploadText: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '5px',
    },
    uploadSubtext: {
      fontSize: '12px',
      color: '#999',
      marginBottom: '15px',
    },
    uploadButton: {
      backgroundColor: '#f8f9fa',
      border: '1px solid #ccc',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    submitButton: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '12px 30px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'block',
      margin: '30px auto 0',
    },
    fileInput: {
      display: 'none',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <div style={styles.header}>
          <h1 style={styles.title}>TCS Details Entry</h1>
          <p style={styles.subtitle}>Input the TCS-related details</p>
        </div>

        {/* TCS Type Selection */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Select TCS Type</h2>
          <div style={styles.tcsTypeContainer}>
            {['Regular', 'E-commerce', 'Foreign Remittance', 'Overseas Tour'].map((type) => (
              <button
                key={type}
                type="button"
                style={formData.tcsType === type ? styles.tcsTypeButtonActive : styles.tcsTypeButton}
                onClick={() => setFormData(prev => ({ ...prev, tcsType: type }))}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Business Information */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Business Information</h2>
          
          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>Legal Name of Business *</label>
              <input
                type="text"
                name="businessName"
                placeholder="Enter legal business name"
                style={styles.input}
                value={formData.businessName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label}>PAN Number *</label>
              <input
                type="text"
                name="panNumber"
                placeholder="Enter PAN number"
                style={styles.input}
                value={formData.panNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>Type of Business *</label>
              <select
                name="businessType"
                style={styles.select}
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
            <div style={styles.column}>
              <label style={styles.label}>Email ID *</label>
              <input
                type="email"
                name="emailId"
                placeholder="Enter email address"
                style={styles.input}
                value={formData.emailId}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>Phone Number *</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter phone number"
                style={styles.input}
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label}>TAN Number</label>
              <input
                type="text"
                name="tanNumber"
                placeholder="Enter TAN number"
                style={styles.input}
                value={formData.tanNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Filing Details */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Filing Details</h2>
          
          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>Date of Receipt</label>
              <input
                type="date"
                name="dateOfReceipt"
                style={styles.input}
                value={formData.dateOfReceipt}
                onChange={handleInputChange}
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label}>Due Date</label>
              <input
                type="date"
                name="dueDate"
                style={styles.input}
                value={formData.dueDate}
                onChange={handleInputChange}
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label}>Filing Date</label>
              <input
                type="date"
                name="filingDate"
                style={styles.input}
                value={formData.filingDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label style={styles.label}>Status</label>
            <div style={styles.statusContainer}>
              <div style={styles.statusOption}>
                <input
                  type="radio"
                  id="pending"
                  name="status"
                  value="Pending"
                  checked={formData.status === 'Pending'}
                  onChange={handleInputChange}
                />
                <label htmlFor="pending" style={styles.pendingLabel}>Pending</label>
              </div>
              <div style={styles.statusOption}>
                <input
                  type="radio"
                  id="filed"
                  name="status"
                  value="Filed"
                  checked={formData.status === 'Filed'}
                  onChange={handleInputChange}
                />
                <label htmlFor="filed" style={styles.filedLabel}>Filed</label>
              </div>
              <div style={styles.statusOption}>
                <input
                  type="radio"
                  id="rejected"
                  name="status"
                  value="Rejected"
                  checked={formData.status === 'Rejected'}
                  onChange={handleInputChange}
                />
                <label htmlFor="rejected" style={styles.rejectedLabel}>Rejected</label>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
              Select status
            </div>
          </div>
        </div>

        {/* Attachments */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Attachments</h2>
          <div style={styles.attachmentContainer}>
            <div style={styles.uploadIcon}>↑</div>
            <div style={styles.uploadText}>Click to upload or drag and drop</div>
            <div style={styles.uploadSubtext}>Supported formats: PDF, DOC</div>
            <input
              type="file"
              id="fileInput"
              style={styles.fileInput}
              multiple
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
            />
            <label htmlFor="fileInput" style={styles.uploadButton}>
              Upload Files
            </label>
          </div>
          {attachments.length > 0 && (
            <div style={{ marginTop: '10px' }}>
              <strong>Uploaded files:</strong>
              <ul>
                {attachments.map((file, index) => (
                  <li key={index} style={{ fontSize: '14px', color: '#666' }}>
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button type="button" style={styles.submitButton} onClick={handleSubmit}>
          Submit TCS Details
        </button>
      </div>
    </div>
  );
};

export default TCSDetailsForm;