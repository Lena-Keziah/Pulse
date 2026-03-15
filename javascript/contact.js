//initialize database
const db = firebase.firestore();
async function handleContactForm(e) {
    e.preventDefault(); // Prevent the page from refreshing
   //grab data from ids  
    const contactData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        phone: document.getElementById('contact-phone').value,
        message: document.getElementById('contact-message').value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };
    //validating so it doesnt send empty messages
    if (!contactData.name || !contactData.message) {
        alert("Please fill in at least your name and message!");
        return;
    }
    try {
        //save to inquires collection
        await db.collection('inquiries').add(contactData);
        
        alert("Message sent successfully! We will get back to you soon.");
        //clear the form
        document.getElementById('contact-form').reset();
        
    } catch (error) {
        console.error("Error sending message:", error);
        alert("Something went wrong. Please try again later.");
    }
}
//listen for button click
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});