import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

import pulseLogoPreview from './assets/pulse_logo__2_-removebg-preview.png';
import firstDonor from './assets/portrait-young-woman-smiling-isolated.jpg';
import secondDonor from './assets/casual-woman-white-jacket-chic-smart.jpg';
import thirdDonor from './assets/portrait-afro-american-man.jpg';
import fourthDonor from './assets/day-walk-person-male-success-using.jpg';

import './Css/Post.css';

function Post() {
  const [count, setCount] = useState(0);

  // Dynamic list of donors to avoid repetitive copy-pasting of HTML cards
  const donors = [
    { id: 1, name: "Lena Keziah", location: "Buea, Cameroon", bloodType: "A+", role: "Donor", image: firstDonor },
    { id: 2, name: "Mary Anne", location: "Limbe, Cameroon", bloodType: "AB-", role: "Donor", image: secondDonor },
    { id: 3, name: "Taku Lesly", location: "Douala, Cameroon", bloodType: "O+", role: "Donor", image: thirdDonor },
    { id: 4, name: "Ayuk Brenda", location: "Yaounde, Cameroon", bloodType: "B+", role: "Donor", image: fourthDonor },
  ];

  // Tripled the array to mimic your 3 rows of data cleanly
  const allDonors = [...donors, ...donors, ...donors];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           
            <img 
              src={pulseLogoPreview} 
              className="img-fluid mt-3 pe-1" 
              alt="Pulse Logo" 
              width="100" 
              height="100" 
            />
               
          </a>
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
            <ul className="navbar-nav gap-4 ms-auto mb-2 mb-lg-0 ps-4">
              <li className="nav-item">
                <a className="nav-link fw-bold" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fw-bold" href="/posts">Posts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/blog">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/evenprofile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h2 className="text-center mt-4">Find willing donors closest to your location</h2>

      {/* Filters & Modal Section */}
      <div className="drops d-flex justify-content-center gap-4 my-4">
        {/* Location Select */}
        <div className="mb-3" style={{ width: '250px' }}>
          <label className="form-label">Location</label>
          <div className="d-flex align-items-center rounded-3" style={{ border: '2px solid #003366' }}>
            <span className="ps-2 pe-2"><i className="fa-solid fa-location-dot"></i></span>
            <select id="locationFilter" className="form-select border-0 rounded-0">
              <option value="all">All Locations</option>
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
        </div>

        {/* Blood Type Select */}
        <div className="mb-3" style={{ width: '250px' }}>
          <label className="form-label">Blood Type</label>
          <div className="d-flex align-items-center rounded-3" style={{ border: '2px solid #003366' }}>
            <span className="ps-2 pe-2"><i className="fa-solid fa-droplet" style={{ color: '#CC0033' }}></i></span>
            <select id="bloodFilter" className="form-select border-0 rounded-0">
              <option value="all">All Blood Types</option>
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
        </div>
      </div>

      {/* Modal - Kept inside structural alignment */}
      <div className="modal fade" id="donateModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 shadow border-0">
            <div className="modal-header border-0 pb-0">
              <button type="button" className="btn-close border border-danger rounded-circle p-2" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: '0.6rem', color: 'red' }}></button>
            </div>
            <div className="modal-body px-4">
              <form id="donateForm" onSubmit={(e) => e.preventDefault()}>
                <div className="row mb-3 align-items-center">
                  <label className="col-4 fw-bold">Name:</label>
                  <div className="col-8">
                    <input type="text" className="form-control border-secondary-subtle bg-light shadow-sm" />
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <label className="col-4 fw-bold">Blood type:</label>
                  <div className="col-8">
                    <select className="form-select border-secondary-subtle bg-light shadow-sm" defaultValue="Select Type">
                      <option disabled>Select Type</option>
                      <option value="A+">A+</option>
                      <option value="O+">O+</option>
                      <option value="B+">B+</option>
                      <option value="AB+">AB+</option>
                      <option value="A-">A-</option>
                      <option value="O-">O-</option>
                      <option value="B-">B-</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <label className="col-4 fw-bold">Location:</label>
                  <div className="col-8">
                    <select className="form-select border-secondary-subtle bg-light shadow-sm" defaultValue="Select City">
                      <option disabled>Select City</option>
                      <option value="Buea">Buea</option>
                      <option value="Limbe">Limbe</option>
                      <option value="Douala">Douala</option>
                      <option value="Yaoundé">Yaoundé</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-4 align-items-center">
                  <label className="col-4 fw-bold">Role:</label>
                  <div className="col-8">
                    <select className="form-select border-secondary-subtle bg-light shadow-sm" defaultValue="donor">
                      <option value="donor">Donor</option>
                      <option value="recipient">Recipient</option>
                    </select>
                  </div>
                </div>
                <div className="text-center mb-3">
                  <button type="submit" className="btn btn-danger px-5 py-2 fw-bold shadow-sm" style={{ backgroundColor: '#CC0033', border: 'none' }}>
                    Donate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Displaying Donor Cards Dynamic Rendering */}
      <div className="container-fluid card-section py-2 px-3 rounded-top-3">
        <div className="row g-4" id="posts-grid">
          {allDonors.map((donor, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <div className="card rounded-3 h-100" style={{ borderColor: '#CC0033', width: '20rem' }}>
                <div className="card-body text-center">
                      <img 
                                src={donor.image}
                                alt="Donor profile" 
                                className="rounded-circle mb-3"
                                style={{ width: '180px', height: '180px', objectFit: 'cover' }} 
                              />
                  <p className="card-text fs-5 text-start" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    Name: {donor.name} <br />
                    Location: {donor.location} <br />
                    Bloodtype: {donor.bloodType} <br />
                    Role: {donor.role}
                  </p>
                </div>
                <a 
                  href={`/Html/Odd profile.html?id=${donor.id}`}
                  className="w-100 fw-bold text-center fs-5 rounded-bottom-3"
                  style={{ color: '#CC0033', border: '1px solid #CC0033', textDecoration: 'none' }}
                >
                  View Profile <span className="ms-1">&rsaquo;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button Layout */}
        <div className="d-flex justify-content-end align-items-center">
          <a href="/Html/post2.html" className="btn1 fw-bold rounded-3 border-0 p-2 px-3 text-decoration-none mt-3">
            View Recipients <span className="ms-1">&rsaquo;</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Post; 