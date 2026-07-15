import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/Heroimg.png'
import sickManImg from './assets/sick man.jpg'
import pulseLogoPreview from './assets/pulse_logo__2_-removebg-preview.png';
import firstDonor from './assets/portrait-young-woman-smiling-isolated.jpg';
import { Link } from 'react-router-dom';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg bg-body-white px">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"> 
            <img 
              src={pulseLogoPreview} 
              className="img-fluid" 
              alt="Pulse Logo" 
              style={{ maxWidth: '80px', height: 'auto' }} 
            />
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbar-link" 
            aria-controls="navbarText" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar-link">
            <ul className="navbar-nav gap-4 ms-auto mb-2 mb-lg-0 ps-5">
              <li className="nav-item">
                <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link fw-bold" to="/posts">Posts</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/blog">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/evenprofile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Signup Modal */}
      <div className="modal fade" id="signupModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content rounded-4 shadow p-3 p-sm-4 p-lg-3">
            <div className="modal-body text-center">
              <img 
                src={pulseLogoPreview} 
                alt="Pulse Logo" 
                className="mb-2" 
                style={{ width: '110px', maxWidth: '50%', height: 'auto' }} 
              />

              <h4 className="mb-3">Sign up for pulse</h4>

              {/* Unique ID variant to prevent DOM collisions */}
              <div 
                id="g_id_onload_signup"
                data-client_id="188963513690-h7d2b4gvd9mqumo1pppg6lfo0m45c1qp.apps.googleusercontent.com"
                data-callback="handleCredentialResponse"
                data-auto_prompt="false"
              ></div>

              <div 
                className="g_id_signin" 
                data-type="standard" 
                data-shape="rectangular" 
                data-theme="outline" 
                data-text="signin_with" 
                data-size="large" 
                data-logo_alignment="left"
                style={{ minHeight: '40px', minWidth: '200px', display: 'block' }}
              ></div>

              <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1" />
                <span className="px-2">OR</span>
                <hr className="flex-grow-1" />
              </div>

              <form id="signup-form-initial">
                <input type="email" className="form-control mb-2" placeholder="Email" required />
                <input type="password" className="form-control mb-3" placeholder="Password" required />
                <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">Sign Up</button>
              </form>

              <p className="small mt-2">
                Already have an account? <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-dismiss="modal">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content rounded-4 shadow p-4">
            <div className="modal-body text-center">
              <img 
                src={pulseLogoPreview} 
                alt="Pulse Logo" 
                className="mb-3" 
                style={{ width: '60px', maxWidth: '25%', height: 'auto' }} 
              />

              <h4 className="mb-4">Pulse Login</h4>

              {/* Unique ID variant to prevent DOM collisions */}
              <div 
                id="g_id_onload_login"
                data-client_id="188963513690-h7d2b4gvd9mqumo1pppg6lfo0m45c1qp.apps.googleusercontent.com"
                data-callback="handleCredentialResponse"
                data-auto_prompt="false"
              ></div>

              <div 
                className="g_id_signin" 
                data-type="standard" 
                data-shape="rectangular" 
                data-theme="outline" 
                data-text="signin_with" 
                data-size="large" 
                data-logo_alignment="left"
                style={{ minHeight: '40px', minWidth: '200px', display: 'block' }}
              ></div>

              <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1" />
                <span className="px-2">OR</span>
                <hr className="flex-grow-1" />
              </div>

              <form id="login-form-submit">
                <div className="mb-3 text-start">
                  <label htmlFor="loginEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="loginEmail" placeholder="you@example.com" required />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>

              <p className="small mt-3">Forgot your password? <a href="#" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal" data-bs-dismiss="modal">Reset</a></p>
              <p className="small mt-1">Don't have an account? <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal" data-bs-dismiss="modal">Sign Up</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Network Modal */}
      <div className="modal fade" id="joinNetworkModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 shadow-lg border-0 p-3">
            <div className="modal-body">
              <div className="text-center mb-4">
                <h5 className="fw-bold text-danger mb-1">Join the Lifesaving Network</h5>
                <p className="text-muted small">Fill out your information detailly</p>
              </div>

              <form id="join-network-form">
                <div className="mb-3 text-start">
                  <label className="form-label small fw-bold mb-1">Full Name</label>
                  <input type="text" className="form-control form-control-sm border-dark rounded-2" placeholder="Enter your full name" />
                </div>

                <div className="mb-3 text-start">
                  <label className="form-label small fw-bold mb-1">Location</label>
                  <select className="form-select form-select-sm border-dark rounded-2">
                    <option>Douala</option>
                    <option>Yaoundé</option>
                    <option>Buea</option>
                    <option>Bamenda</option>
                    <option>Ngoundere</option>
                    <option>Maroua</option>
                    <option>Garoua</option>
                    <option>Ebolowa</option>
                    <option>Bertoua</option>
                    <option>Bafoussam</option>
                  </select>
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label small fw-bold mb-1">Phone Number</label>
                  <input type="tel" className="form-control form-control-sm border-dark rounded-2" placeholder="Enter your phone Number" />
                </div>
                <div className="row mb-4">
                  <div className="col-6 text-start">
                    <label className="form-label small fw-bold mb-1">Blood Type</label>
                    <select className="form-select form-select-sm border-dark rounded-2">
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>
                  </div>
                  <div className="col-6 text-center">
                    <label className="form-label small fw-bold mb-1 d-block">Gender</label>
                    <select className="form-select form-select-sm border-dark rounded-2" defaultValue="Male">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-danger px-5 fw-bold" style={{ backgroundColor: '#CC0033', border: 'none' }}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal 1 */}
      <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 shadow-lg border-0 p-4">
            <div className="modal-body text-center">
              <div className="mb-3">
                <img src={pulseLogoPreview} alt="Pulse Logo" style={{ width: '100px' }} />
              </div>
              <h5 className="fw-bold text-muted mb-4">Forgot your password?</h5>
              <form id="forgot-password-form">
                <div className="text-start mb-3">
                  <label className="form-label small fw-bold mb-1">Email</label>
                  <input type="email" className="form-control border-secondary-subtle bg-light rounded-2 shadow-sm" placeholder="email@example.com" />
                </div>
                <p className="text-muted mb-4" style={{ fontSize: '0.65rem', lineHeight: '1.3' }}>
                  We sent an email with your reset password instructions. If you can't see the message check your spam folder.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <hr className="flex-grow-1" />
                  <span className="mx-2 text-muted small">Or</span>
                  <hr className="flex-grow-1" />
                </div>
                <p className="small mb-4">
                  Reset password with <a href="#" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal2" data-bs-dismiss="modal" className="text-primary text-decoration-none fw-bold">Phone Number</a>
                </p>
                <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="text-muted small text-decoration-none d-block mb-2" data-bs-dismiss="modal">Go back to Login</a>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal 2 */}
      <div className="modal fade" id="forgotPasswordModal2" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 shadow-lg border-0 p-4">
            <div className="modal-body text-center">
              <div className="mb-3">
                <img src={pulseLogoPreview} alt="Pulse Logo" style={{ width: '100px' }} />
              </div>
              <h5 className="fw-bold text-muted mb-4">Forgot your password?</h5>
              <form id="forgot-password-form-2">
                <div className="text-start mb-3">
                  <label className="form-label small fw-bold mb-1">Email</label>
                  <input type="email" className="form-control border-secondary-subtle bg-light rounded-2 shadow-sm" placeholder="email@example.com" />
                </div>
                <p className="text-muted mb-4" style={{ fontSize: '0.65rem', lineHeight: '1.3' }}>
                  We sent an email with your reset password instructions. If you can't see the message check your spam folder.
                </p>
                <div className="d-flex align-items-center mb-3">
                  <hr className="flex-grow-1" />
                  <span className="mx-2 text-muted small">Or</span>
                  <hr className="flex-grow-1" />
                </div>
                <p className="small mb-4">
                  Reset password with <a href="#" data-bs-toggle="modal" data-bs-target="#forgotPasswordModal" data-bs-dismiss="modal" className="text-primary text-decoration-none fw-bold">Email</a>
                </p>
                <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="text-muted small text-decoration-none d-block mb-2" data-bs-dismiss="modal">Go back to Login</a>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container-fluid hero-section py-5 rounded-4 mb-2">
        <div className="row align-items-center gx-3">
          <div className="col-lg-6 col-md-6 col-sm-12 hero-text text-center text-lg-start px-3">
            <h2 className="text-white fs-1 mb-2 fw-bold ms-5">Welcome To Pulse</h2>
            <p className="text-white fw-light fs-5 mb-2 ms-5">
              Your Real-Time Window to Lifesaving Blood Donation,<br />
              Events, and Advancements. Stay Informed on Every<br />
              Donation, Impact, and Medical Breakthrough.
            </p>
            <div className="buttons mt-4 d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="/Html/post2.html" className="btn1 fw-bold rounded-3 border-0 p-2 px-3 ms-5 text-decoration-none">Make a request</a>
              <a href="/Html/Post.html#donate" className="btn2 fw-bold rounded-3 border-0 p-2 px-3">Donate Now</a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 hero-image text-center px-3">
            <img 
              src={heroImg}
              alt="Donation image" 
              className="img-fluid" 
              style={{ maxWidth: '70%', height: 'auto', margin: '0 auto' }} 
            />
          </div>
        </div>
      </div>

      {/* Recent Donors Section */}
      <p className="text-start ms-3 fw-bold fs-4" style={{ color: '#003366' }}>Recent Donors</p>
      <div className="container-fluid card-section py-2" id="donor-container">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card rounded-3 h-100" style={{ borderColor: '#CC0033', width: '100%', maxWidth: '20rem' }}>
              <div className="card-body text-center">
                <img 
                  src={firstDonor}
                  alt="Donor image" 
                  className="rounded-circle mb-3"
                  style={{ width: '180px', height: '180px', objectFit: 'cover' }} 
                />
                <p className="card-text fs-5 text-start" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Name: Lena Keziah <br />
                  Location: Buea, Cameroon <br />
                  Bloodtype: A+ <br />
                  Role: Donor
                </p>
              </div>
              <a href="/Html/Odd profile.html?id=1" className="w-100 fw-bold text-center fs-5 rounded-bottom-3" style={{ color: '#CC0033', border: '1px solid #CC0033', textDecoration: 'none' }}>
                View Profile <span className="ms-1">&rsaquo;</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card rounded-3 h-100" style={{ borderColor: '#CC0033', width: '100%', maxWidth: '20rem' }}>
              <div className="card-body text-center">
                <img 
                  src={firstDonor}
                  alt="Donor image" 
                  className="rounded-circle mb-3"
                  style={{ width: '180px', height: '180px', objectFit: 'cover' }} 
                />
                <p className="card-text fs-5 text-start" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Name: Mary Anne <br />
                  Location: Limbe, Cameroon <br />
                  Bloodtype: AB- <br />
                  Role: Donor
                </p>
              </div>
              <a href="/Html/Odd profile.html?id=2" className="w-100 fw-bold text-center fs-5 rounded-bottom-3" style={{ color: '#CC0033', border: '1px solid #CC0033', textDecoration: 'none' }}>
                View Profile <span className="ms-1">&rsaquo;</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card rounded-3 h-100" style={{ borderColor: '#CC0033', width: '100%', maxWidth: '20rem' }}>
              <div className="card-body text-center">
                <img 
                  src={firstDonor}
                  alt="Donor image" 
                  className="rounded-circle mb-3"
                  style={{ width: '180px', height: '180px', objectFit: 'cover' }} 
                />
                <p className="card-text fs-5 text-start" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Name: Taku Lesly <br />
                  Location: Douala, Cameroon <br />
                  Bloodtype: O+ <br />
                  Role: Donor
                </p>
              </div>
              <a href="/Html/Odd profile.html?id=3" className="w-100 fw-bold text-center fs-5 rounded-bottom-3" style={{ color: '#CC0033', border: '1px solid #CC0033', textDecoration: 'none' }}>
                View Profile <span className="ms-1">&rsaquo;</span>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card rounded-3 h-100" style={{ borderColor: '#CC0033', width: '100%', maxWidth: '20rem' }}>
              <div className="card-body text-center">
                <img 
                  src={firstDonor}
                  alt="Donor image" 
                  className="rounded-circle mb-3"
                  style={{ width: '180px', height: '180px', objectFit: 'cover' }} 
                />
                <p className="card-text fs-5 text-start" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Name: Taku Lesly <br />
                  Location: Douala, Cameroon <br />
                  Bloodtype: O+ <br />
                  Role: Donor
                </p>
              </div>
              <a href="/Html/Odd profile.html?id=4" className="w-100 fw-bold text-center fs-5 rounded-bottom-3" style={{ color: '#CC0033', border: '1px solid #CC0033', textDecoration: 'none' }}>
                View Profile <span className="ms-1">&rsaquo;</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="d-flex justify-content-end mt-3">
          <a href="/Html/Post.html" className="button rounded-3 border-0 p-2 px-3 text-white">See More<span className="ms-1">&rsaquo;</span></a>
        </div>
      </div>

      {/* Recent Recipients Section */}
      <p className="text-start ms-3 fw-bold fs-4" style={{ color: '#003366' }}>Recent Recipients</p>
      <div className="container-fluid card-section py-2 px-3">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card rounded-3 h-100" style={{ borderColor: '#CC0033', width: '20rem' }}>
              <div className="card-body text-center">
                <img 
                  src={sickManImg} 
                  className="mb-3 d-block mx-auto" 
                  style={{ width: '100%', height: '165px', marginTop: '-5px' }} 
                  alt="Recipient" 
                />
                <p className="card-text fs-5 text-start" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Name: Lena Keziah <br />
                  Location: Buea, Cameroon <br />
                  Bloodtype: A+ <br />
                  Role: Recipient <br />
                  Description:<br />
                  Urgently need O+ blood for my father who is undergoing surgery tomorrow. Any help ...
                </p>
              </div>
              <a href="/Html/recipients odd profile.html?id=recipient-profile" className="w-100 fw-bold text-center fs-5 rounded-bottom-3" style={{ border: '1px solid #CC0033', textDecoration: 'none', color: '#CC0033' }}>
                View Profile <span className="ms-1 fs-4 mt-5">&rsaquo;</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card rounded-3 h-100" style={{ borderColor: '#CC0033', width: '20rem' }}>
              <div className="card-body text-center">
                <img 
                  src={sickManImg} 
                  className="mb-3 d-block mx-auto" 
                  style={{ width: '100%', height: '165px', marginTop: '-5px' }} 
                  alt="Recipient" 
                />
                <p className="card-text fs-5 text-start" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Name: Mary Anne <br />
                  Location: Limbe, Cameroon <br />
                  Bloodtype: AB- <br />
                  Role: Recipient<br />
                  Description:<br />
                  Looking for O+ blood for my sister who is in critical condition after an accident. Your help ...
                </p>
              </div>
              <a href="#" className="w-100 fw-bold text-center fs-5 rounded-bottom-3" style={{ border: '1px solid #CC0033', textDecoration: 'none', color: '#CC0033' }}>
                View Profile <span className="ms-1">&rsaquo;</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card rounded-3 h-100" style={{ borderColor: '#CC0033', width: '20rem' }}>
              <div className="card-body text-center">
                <img 
                  src={sickManImg} 
                  className="mb-3 d-block mx-auto" 
                  style={{ width: '100%', height: '165px', marginTop: '-5px' }} 
                  alt="Recipient" 
                />
                <p className="card-text fs-5 text-start" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Name: Taku Lesly <br />
                  Location: Douala, Cameroon <br />
                  Bloodtype: O+ <br />
                  Role: Recipient<br />
                  Description:<br />
                  Urgently seeking A+ blood for my mother who is hospitalized and in need...
                </p>
              </div>
              <a href="#" className="w-100 fw-bold text-center fs-5 rounded-bottom-3" style={{ border: '1px solid #CC0033', textDecoration: 'none', color: '#CC0033' }}>
                View Profile <span className="ms-1">&rsaquo;</span>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="card rounded-3 h-100" style={{ borderColor: '#CC0033', width: '20rem' }}>
              <div className="card-body text-center">
                <img 
                  src={sickManImg} 
                  className="mb-3 d-block mx-auto" 
                  style={{ width: '100%', height: '165px', marginTop: '-5px' }} 
                  alt="Recipient" 
                />
                <p className="card-text fs-5 text-start" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Name: Ayuk Brenda <br />
                  Location: Yaounde, Cameroon <br />
                  Bloodtype: B+ <br />
                  Role: Donor <br />
                  Description:<br />
                  Urgent blood needed for a sick child. Your donation could save a young life. Please help...
                </p>
              </div>
              <a href="#" className="w-100 fw-bold text-center fs-5 rounded-bottom-3" style={{ border: '1px solid #CC0033', textDecoration: 'none', color: '#CC0033' }}>
                View Profile <span className="ms-1">&rsaquo;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-3" style={{ paddingRight: '1rem' }}>
        <div className="d-flex justify-content-end mt-3">
          <a href="/Html/post2.html" className="button rounded-3 border-0 p-2 px-3 text-white">See More<span className="ms-1">&rsaquo;</span></a>
        </div>
      </div>

      {/* Operation Steps */}
      <p className="text-start ms-3 fw-bold fs-4" style={{ color: '#003366' }}>How do we operate?</p>
      <div className="container my-5">
        <div className="container">
          <div className="row gx-lg-5 gx-3 gy-4 justify-content-between px-3 mt-3">
            {/* Step 1 */}
            <div className="col-lg-5 col-md-6 col-sm-12 d-flex justify-content-center mb-5">
              <div className="position-relative w-100">
                <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold position-absolute"
                     style={{ width: '40px', height: '40px', top: '-45px', right: '5px', backgroundColor: '#003366', fontFamily: "'Times New Roman', Times, serif" }}>
                  1
                </div>
                <div className="card border-danger rounded-3 p-4 h-100">
                  <p className="mb-0 text-start fs-5" style={{ fontFamily: 'Times New Roman,Times,serif' }}>
                    Create an account with your required details. This is entirely for security reasons.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-lg-5 col-md-6 col-sm-12 d-flex justify-content-center mb-5">
              <div className="position-relative w-100">
                <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold position-absolute"
                     style={{ width: '40px', height: '40px', top: '-45px', right: '5px', backgroundColor: '#003366' }}>
                  2
                </div>
                <div className="card border-danger rounded-3 p-4 h-100">
                  <p className="mb-0 text-start fs-5">
                    Post an ad with your name, location and blood group. In the post, state clearly if you are a donor or recipient.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third card centered */}
          <div className="row justify-content-center mt-3">
            {/* Step 3 */}
            <div className="col-lg-5 col-md-6 col-sm-12 d-flex justify-content-center mb-5">
              <div className="position-relative w-100">
                <div className="rounded-circle text-white d-flex align-items-center justify-content-center fw-bold position-absolute"
                     style={{ width: '40px', height: '40px', top: '-45px', right: '5px', backgroundColor: '#003366' }}>
                  3
                </div>
                <div className="card border-danger rounded-3 p-4 h-100">
                  <p className="mb-0 text-start fs-5">
                    Anyone interested in your post will reach out to you to call or chat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Callout */}
      <p className="text-start ms-3 fw-bold fs-5" style={{ color: '#003366' }}>Am I eligible to donate blood?</p>
      <p className="fs-5 ms-3">Are you eligible for blood donation? Find out about the eligibility
      requirements to donate blood today. Learn about general health,
      travel, medications, tattoos, and more.</p>

      <div className="d-flex justify-content-end mt-3 mb-3 pe-5">
        <a href="/Html/Blog.html" className="btn fw-bold rounded-3 border-0 p-2 px-3 text-white" 
           style={{ backgroundColor: '#CC0033', fontFamily: "'Times New Roman', Times, serif" }}>
          Learn more about eligibility
        </a>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#CC0033' }}>
        <div className="container d-flex justify-content-between flex-wrap" style={{ paddingTop: '15px', paddingBottom: '0' }}>
          <div className="footerlinks fw-semi-bold">
            <a className="text-white mb-0 ms-1" href="/Html/Contact us.html">Contact Us.</a>
            <a className="text-white mb-0 ms-1" href="/Html/About us.html">About Us.</a>
            <a className="text-white mb-0 ms-1" href="/Html/Terms of use.html">Terms of Use</a>
          </div>
          <div className="d-flex flex-column align-items-end">
            <p className="text-white mb-2">Follow Us</p>
            <div className="d-flex gap-3">
              <a href="#" className="fs-4" style={{ color: '#1877F2' }}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="fs-4" style={{ color: '#000000' }}><i className="fab fa-tiktok"></i></a>
              <a href="#" className="fs-4" style={{ color: '#1DA1F2' }}><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <p className="text-center text-white" style={{ marginTop: '0', paddingBottom: '15px' }}>&copy; Pulse. All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App