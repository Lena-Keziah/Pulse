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
                <Link className="nav-link  fw-bold" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/posts">Posts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  fw-bold" to="/blog">Blogs</Link>
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

      <div className="Profile1" data-profile="1">
        {/* ===== DESKTOP VERSION ===== */}
        <div className="container-fluid d-none d-md-block pt-2" style={{ backgroundColor: '#C8102E', height: '400px' }}>
          <div className="container my-5">
            <div className="card border-0 shadow rounded-4 mx-auto mb-3" style={{ maxWidth: '700px' }}>
              <div className="card-body p-4">
                <div className="row g-4 align-items-center">
                  <div className="col-md-4 text-center">
                    <img 
                      src={firstDonor}
                      className="rounded-circle mb-3"
                      style={{ width: '180px', height: '180px', objectFit: 'cover' }} 
                      alt="Donor"
                    />
                  </div>
                  <div className="col-md-8">
                    <h4 className="mb-1 fw-bold">Esther John</h4>
                    <hr className="my-2" />
                    <p className="mb-1"><strong>Location:</strong> Buea, Cameroon</p>
                    <hr className="my-2" />
                    <p className="mb-1"><strong>Blood Group:</strong> O-</p>
                    <hr className="my-2" />
                    <p className="mb-1"><strong>Sex:</strong> Female</p>
                    <hr className="my-2" />
                    <p className="mb-1"><strong>Age:</strong> 43</p>

                    <div className="d-flex text-center border-top border-bottom mt-3">
                      <div className="flex-fill py-2 border-end" style={{ color: '#003366' }}>
                        <i className="fa fa-phone me-1"></i> Call
                      </div>
                      <div className="flex-fill py-2" style={{ color: '#003366' }}>
                        <i className="fa fa-comment me-1"></i> Chat
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== MOBILE VERSION ===== */}
        <div className="container-fluid bg-danger d-block d-md-none min-vh-100 py-5">
          <div className="container">
            <div className="card border-0 shadow rounded-4 mx-auto" style={{ maxWidth: '400px' }}>
              <div className="card-body text-center">
                <div className="d-flex align-items-center justify-content-center gap-4 mb-3">
                  <div className="col-md-4 d-flex justify-content-start">
                    <img 
                      src={firstDonor}
                      className="rounded-circle mb-3 shadow"
                      style={{ width: '150px', height: '150px', objectFit: 'cover', marginLeft: '-23px' }} 
                      alt="Donor"
                    />
                  </div>

                  <div className="info d-flex flex-column mt-2">
                    <h5 className="fw-bold mb-1">Esther John</h5>
                    <p className="mb-2">Blood Group: <strong>O-</strong></p>
                    <span className="badge mb-3" style={{ backgroundColor: '#003366' }}>Donating</span>
                  </div>
                </div>
                <div className="text-start border-bottom py-2 mb-3 ms-3">
                  <p className="mb-1 fw-semi-bold">Donating history: 10</p>
                  <p className="mb-0 fw-semi-bold">Requests Made: 1</p>
                </div>

                <div className="text-start px-3">
                  <p className="mb-2"><i class="fa fa-venus me-2"></i><strong>Sex:</strong> <br /> Female</p>
                  <p className="mb-2"><i class="fa fa-location-dot me-2"></i><strong>Location:</strong><br /> Buea, Cameroon</p>
                  <p className="mb-3"><i class="fa fa-calendar me-2"></i><strong>Age:</strong><br /> 43</p>
                </div>

                <div className="d-flex justify-content-center gap-4">
                  <button className="btn px-4" style={{ backgroundColor: '#003366' }}>
                    <i className="fa fa-phone me-1" style={{ color: 'white' }}></i> 
                    <span style={{ color: 'white' }}>Call</span>
                  </button>
                  <button className="btn px-4" style={{ backgroundColor: '#003366' }}>
                    {/* Changed icon below from fa-phone to fa-comment for the Chat button */}
                    <i className="fa fa-comment me-1" style={{ color: 'white' }}></i> 
                    <span style={{ color: 'white' }}>Chat</span>
                  </button>
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