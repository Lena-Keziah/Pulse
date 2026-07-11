import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/Heroimg.png';
import sickManImg from './assets/sick man.jpg';
import pulseLogoPreview from './assets/pulse_logo__2_-removebg-preview.png';
import firstDonor from './assets/portrait-young-woman-smiling-isolated.jpg';
import { Link } from 'react-router-dom';

import './Css/Odd profile.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> 
            <img 
              src={pulseLogoPreview} 
              className="img-fluid mt-3 pe-1" 
              alt="Pulse Logo" 
              style={{ width: '100px', height: '100px' }} 
            />
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbar-link" 
            aria-controls="navbar-link" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbar-link">
            <ul className="navbar-nav gap-4 ms-auto mb-2 mb-lg-0 ps-5">
              <li className="nav-item">
                <Link className="nav-link fw-bold" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/posts">Posts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/blog">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fw-bold" to="/evenprofile">Profile</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Profile Layout */}
      <div className="container-fluid py-5" style={{ backgroundColor: '#CC0033' }}>
        <div className="container">
          <div className="row justify-content-center align-items-stretch g-4">

            {/* LEFT CARD (Profile) */}
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className="card rounded-4 shadow-sm text-center h-100" style={{ border: 'none' }}>
                <div className="card-body d-flex flex-column align-items-center py-4">
                    
                  <div className="profile-image-container" style={{ position: 'relative', width: '130px', marginBottom: '15px' }}>
                    <img 
                      id="profile-img" 
                      src={firstDonor} 
                      className="rounded-circle" 
                      style={{ width: '130px', height: '130px', objectFit: 'cover' }} 
                      alt="profile"
                    />
                    
                    {/* Fixed inline style key-values */}
                    <div 
                      id="camera-icon" 
                      style={{ 
                        position: 'absolute', 
                        bottom: '5px', 
                        right: '5px', 
                        cursor: 'pointer', 
                        backgroundColor: 'white', 
                        borderRadius: '50%', 
                        width: '32px', 
                        height: '32px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)' 
                      }}
                    >
                      📸
                    </div>
                    <input type="file" id="file-input" style={{ display: 'none' }} accept="image/*" />
                  </div>

                  <h5 className="fw-bold mb-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span id="profile-name">Grace Manyi</span>
                    <span id="edit-name-icon" style={{ cursor: 'pointer', fontSize: '0.9rem' }}>✏️</span>
                  </h5>
                  
                  <p id="profile-status" className="text-primary fw-semibold mb-0">Donating</p>
                    
                </div>
              </div>
            </div>

            {/* RIGHT CARD (Details) */}
            <div className="col-lg-7 col-md-7 col-sm-12">
              <div className="card rounded-4 shadow-sm p-4 h-100" style={{ border: 'none' }}>
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                  <h6 className="fw-bold mb-0">Bio and Other details</h6>
                  <i className="bi bi-pencil" style={{ cursor: 'pointer' }}></i>
                </div>

                <div className="row gx-4 gy-3">
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                      <span className="text-muted">Blood Group</span>
                      <span className="fw-semibold">O+</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                      <span className="text-muted">Sex</span>
                      <span className="fw-semibold">Female</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                      <span className="text-muted">Location</span>
                      <span className="fw-semibold">Buea, Cameroon</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                      <span className="text-muted">Phone</span>
                      <span className="fw-semibold">679174405</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                      <span className="text-muted">Age</span>
                      <span className="fw-semibold">34</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                      <span className="text-muted">Eligibility</span>
                      <span className="fw-semibold">Eligible</span>
                    </div>
                  </div>

                  {/* Switches */}
                  <div className="col-md-6 d-flex justify-content-between align-items-center mt-3">
                    <span className="text-muted">Donating</span>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-between align-items-center mt-3">
                    <span className="text-muted">Requesting</span>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;