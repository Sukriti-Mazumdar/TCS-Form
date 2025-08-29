import React, { useState } from 'react';
import TCSDetailsForm from './TCSDetailsForm';
import LoginPage from './LoginPage/LoginPage'; // Import the LoginPage component
import './App.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login status to true
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false
  };

  return (
    <ErrorBoundary>
      <div className="App">
        {isLoggedIn ? (
          <TCSDetailsForm onLogout={handleLogout} /> // Pass logout function to TCSDetailsForm
        ) : (
          <LoginPage onLogin={handleLogin} /> // Render LoginPage if not logged in
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
