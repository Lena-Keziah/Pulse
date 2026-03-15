document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Filters
    const locationInput = document.getElementById('locationFilter');
    const bloodInput = document.getElementById('bloodFilter');

    if (locationInput && bloodInput) {
        locationInput.addEventListener('change', () => {
            console.log("Location changed to:", locationInput.value);
            startDatabaseSearch();
        });
        bloodInput.addEventListener('change', () => {
            console.log("Blood type changed to:", bloodInput.value);
            startDatabaseSearch();
        });
    }

    // 2. TRIGGER MODAL ONLY IF HASH IS PRESENT
    // This ensures it only opens when coming from the "Donate Now" button
    if (window.location.hash === '#donate') {
        const modalElement = document.getElementById('donateModal');
        
        if (modalElement) {
            const initModal = () => {
                if (typeof bootstrap !== 'undefined') {
                    const donateModalInstance = new bootstrap.Modal(modalElement);
                    donateModalInstance.show();
                    console.log("Modal triggered successfully via Hash.");
                    
                    // Optional: Clean URL so refreshing doesn't keep popping the modal
                    history.replaceState(null, null, ' '); 
                } else {
                    setTimeout(initModal, 100); 
                }
            };
            setTimeout(initModal, 300);
        }
    }
});

// --- Database Logic ---

function startDatabaseSearch() {
    const location = document.getElementById('locationFilter').value;    
    const Bloodtype = document.getElementById('bloodFilter').value;
    console.log(`Searching database for: ${location} and ${Bloodtype}`);    
}

function createCard(donor) {
    return `
    <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
      <div class="card rounded-3 h-100" style="border-color:#CC0033; width: 20rem;">
        <div class="card-body text-center">
          <img src="${donor.image || '/Assets/default.png'}" class="rounded-circle mb-3" width="180" height="180" alt="Donor">
          <p class="card-text fs-5 text-start" style="font-family:'Times New Roman', serif;">
            Name: ${donor.name} <br>
            Location: ${donor.location} <br>
            Bloodtype: ${donor.bloodType} <br>
            Role: Donor
          </p>
        </div>
        <a href="/Html/Odd profile.html?id=${donor.id}"
           class="w-100 fw-bold text-center fs-5 rounded-bottom-3 p-2"
           style="color:#CC0033; border:1px solid #CC0033; text-decoration:none; display: block;">
          View Profile <span class="ms-1">&rsaquo;</span>
        </a>
      </div>
    </div>
  `;
}

function displayAllDonors(donorList) {
    const grid = document.getElementById('posts-grid');
    if (!grid) return;
    const allCardsHtml = donorList.map(donor => createCard(donor)).join('');
    grid.innerHTML = allCardsHtml;
}

// Firebase Retrieval
// Ensure 'db' is initialized in your HTML before this script runs
if (typeof db !== 'undefined') {
    db.collection("donors").get().then((querySnapshot) => {
        let allDonors = []; 
        querySnapshot.forEach((doc) => {
            let donorData = doc.data();
            donorData.id = doc.id;
            allDonors.push(donorData);
        });
        displayAllDonors(allDonors);
    }).catch(err => console.error("Firebase error:", err));
}