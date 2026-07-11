import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/Heroimg.png'
import sickManImg from './assets/sick man.jpg'
import pulseLogoPreview from './assets/pulse_logo__2_-removebg-preview.png';
import firstDonor from './assets/portrait-young-woman-smiling-isolated.jpg';
import { Link } from 'react-router-dom';

import './Css/Blog.css'

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
                <Link className="nav-link  fw-bold" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/posts">Posts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fw-bold" to="/blog">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/oddprofile">Profile</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid header d-flex justify-content-center align-items-center mt-4" style={{ minHeight: '100px' }}>
        <h2 className="text-center m-0">WHY YOU SHOULD CONSIDER BEING A BLOOD DONOR</h2>
      </div>

      <p className="ms-3 fw-bold" style={{ color: '#003366' }}>1. Saving lives</p>
      <p className="ms-3">
        -One donation can help save up to three lives because blood is separated into components (red cells, plasma, platelets).
        <br />-It supports accident victims, surgery patients, cancer patients, and those with chronic illnesses.
      </p>

      <p className="ms-3 fw-bold" style={{ color: '#003366' }}>
        2. Health Benefits for the Donor
        <img src="/Assets/icons8-health-64.png" className="img-fluid mt-0 pe-1" alt="Bootstrap" width="40px" />
      </p>
      <p className="ms-3">
        -Free health screening: Before donating, your blood pressure, hemoglobin, and sometimes cholesterol or infections are checked. This can help detect hidden health issues early.
        <br />-Reduced iron levels: Regular donation helps reduce excess iron in the body, which may lower the risk of heart disease.
        <br />-Stimulates blood cell production: The body quickly replenishes the lost blood, promoting fresh and healthy blood cell production.
      </p>

      <p className="ms-3 fw-bold" style={{ color: '#003366' }}>3. Preparedness in Disasters</p>
      <p className="ms-3">-Donors ensure blood banks are stocked for accidents, natural disasters, and crises.</p>

      <h3 className="ms-3 fw-bold" style={{ color: '#003366' }}>BLOOD DONATION PROCESS IN FOUR SIMPLE STEPS</h3>
      
      <div className="container my-4">
        <div className="d-flex justify-content-around align-items-start flex-wrap text-center">
          {/*First block */}
          <div className="p-3" style={{ maxWidth: '300px' }}>
            <img src="/Assets/icons8-health-check-64.png" className="img-fluid mb-2" alt="health"/>
            <p>
              <strong>Register & Health Check</strong><br />
              Give your details, answer a short questionnaire, check blood pressure, weight, and hemoglobin.
            </p>
          </div>

          {/*Second block*/ }  
          <div className="p-3" style={{ maxWidth: '300px' }}>
            <img src="/Assets/icons8-agreement-48.png" className="img-fluid mb-2" alt="agreement"/>
            <p>
              <strong>Counsel & Consent</strong><br />
              A nurse explains the process, and you give your agreement.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="d-flex justify-content-around align-items-start flex-wrap text-center">
          {/*First Block*/} 
          <div className="p-3" style={{ maxWidth: '300px' }}>
            <img src="/Assets/icons8-blood-donation-64.png" className="img-fluid mb-2" alt="donation"/>
            <p>
              <strong>Donate Blood</strong><br />
              About 350–450 ml collected in 8–12 minutes under sterile conditions.
            </p>
          </div>

          {/*Second Block*/} 
          <div className="p-3" style={{ maxWidth: '300px' }}>
            <img src="/Assets/icons8-heart-health-64.png" className="img-fluid mb-2" alt="heart health"/>
            <p>
              <strong>Rest & Recover</strong><br />
              Relax, take refreshments, follow post-care, and your blood is tested and stored for patients.
            </p>
          </div>
        </div>
      </div>

      <h3 className="fw-bold ms-3" style={{ color: '#003366' }}>ELIGIBILITY CRITERIA FOR BLOOD DONATION</h3>
      <p className="ms-3">1. Age: Usually 18–65 years old (some places allow 16–17 with parental consent; older donors may need doctor’s approval).</p>
      <p className="ms-3">2. Weight: At least 50 kg (110 lbs).</p>
      <p className="ms-3">3. Health: Must be in good health, with no fever, flu, cold, or infections on donation day.</p>
      <p className="ms-3">4. Hemoglobin: Normal levels (usually ≥12.5 g/dl for women, ≥13 g/dl for men).</p>
      <p className="ms-3">5. Blood Pressure & Pulse: Within normal range.</p>
      <p className="ms-3">
        6. Time Gap:<br />
        Whole blood donation: Every 3 months (men), every 4 months (women).<br />
        Platelet/plasma donation: Every 2–4 weeks.
      </p>
      <p className="ms-3">
        7. Medical History:<br />
        No history of HIV, hepatitis, syphilis, or other transmissible diseases.<br />
        Not currently on antibiotics or certain medications.
      </p>
      <p className="ms-3">
        8. Lifestyle Factors:<br />
        No alcohol or drug use within 24 hours.<br />
        No recent risky behaviors (like unsafe sexual practices).
      </p>
      <p className="ms-3">
        9. Recent Events:<br />
        No major surgery, tattoo, or piercing within the last 6–12 months.<br />
        Not pregnant, breastfeeding, or recently pregnant (women).
      </p>

      <h3 className="fw-bold ms-3" style={{ color: '#003366' }}>FUN FACTS ABOUT BLOOD AND BLOOD DONATION</h3>
      
      <div className="container my-4">
        <div className="d-flex justify-content-around align-items-start flex-wrap text-center">
          {/*First Block*/} 
          <div className="p-3" style={{ maxWidth: '300px' }}>
            <img src="/Assets/drop of blood.png" className="img-fluid mb-2" width="80" alt="health"/>
            <p>The human body has about 5 liters of blood — enough to fill about 10 soda bottles.</p>
          </div>

          {/*Second Block*/} 
          <div className="p-3" style={{ maxWidth: '300px' }}>
            <img src="/Assets/weight-removebg-preview.png" className="img-fluid mb-2" width="40" alt="agreement"/>
            <p>Blood makes up about 7–8% of your body weight.</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center my-4">
        <div className="p-3 text-center" style={{ maxWidth: '300px' }}>
          <img src="/Assets/platelets.png" className="img-fluid mb-2" width="60" alt="agreement"/>
          <p>Red blood cells live for about 120 days before your body replaces them.</p>
        </div>
      </div>

      <div className="container my-4">
        <div className="d-flex justify-content-around align-items-start flex-wrap text-center">
          {/*First Block*/} 
          <div className="p-3" style={{ maxWidth: '300px' }}>
            <img src="/Assets/drop of blood2.png" className="img-fluid mb-2" width="120" alt="donation"/>
            <p>Blood travels fast. Circulating your whole body in just about 20 seconds.</p>
          </div>

          {/*Second Block*/} 
          <div className="p-3" style={{ maxWidth: '300px' }}>
            <img src="/Assets/bloodtypr.png" className="img-fluid mb-2" width="120" alt="heart health"/>
            <p>The rarest blood type is AB negative (only 1% of people).</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center my-4">
        <div className="p-3 text-center" style={{ maxWidth: '300px' }}>
          <img src="/Assets/bloodtype.png" className="img-fluid mb-2" width="60" alt="agreement"/>
          <p>The most common is O positive, found in about 35% of people.</p>
        </div>
      </div>

      <div className="container my-4">
        <div className="d-flex justify-content-around align-items-start flex-wrap text-center">
          {/*First Block*/} 
          <div className="p-3" style={{ maxWidth: '300px' }}>
            <img src="/Assets/sports.png" className="img-fluid mb-2" width="100" alt="donation"/>
            <p>Donating burns up to 650 calories — like a workout without hitting the gym!</p>
          </div>

          {/*Second Block*/} 
          <div className="p-3" style={{ maxWidth: '300px' }}>
            <img src="/Assets/patient.png" className="img-fluid mb-2" width="120" alt="heart health"/>
            <p>The first successful human blood transfusion was done in 1818.</p>
          </div>
        </div>
      </div>

      <footer style={{ backgroundColor: '#CC0033' }}>
        <div className="container d-flex justify-content-between flex-wrap" style={{ paddingTop: '15px', paddingBottom: 0 }}>
          {/*Left side: Contact links*/}
          <p className="text-white mb-0 ms-1">Contact Us. About Us. Terms of Use</p>
          
          {/*Right side: Follow Us*/}
          <div className="d-flex flex-column align-items-end">
            {/*Follow Us text*/}
            <p className="text-white mb-2">Follow Us</p>
            
            {/*Social Media Icons below*/}
            <div className="d-flex gap-3">
              <a href="#" className="fs-4" style={{ color: '#1877F2' }}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="fs-4" style={{ color: '#000000' }}><i className="fab fa-tiktok"></i></a>
              <a href="#" className="fs-4" style={{ color: '#1DA1F2' }}><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <p className="text-center text-white" style={{ marginTop: 0, paddingBottom: '15px' }}>&copy; Pulse. All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;