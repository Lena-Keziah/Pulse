document.addEventListener("DOMContentLoaded",function()){
    const locationfilter = document.getElementById('locationfilter');
    const bloodfilter = document.getElementById('bloodfilter');
    const cards = document.querySelectorAll('.donor-card');

    locationFilter.addEventListener('change', filterDonors);
    bloodFilter.addEventListener('change', filterDonors);

    const cardLocation = card.getAttribute('data-location');
    const cardBlood = card.getAttribute('data-blood');

    const matchesLocation = (selectedLocation === "all" || cardLocation === selectedLocation);
    const matchesBlood = (selectedBlood === "all" || cardBlood === selectedBlood);
}