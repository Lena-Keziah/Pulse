async function loadSingleProfile() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const type = urlParams.get('type');
     try{
        const folder = (type === 'recipient')? 'recipients' : 'donors';
        const doc = await db.collection(folder).doc(id).get();

        if (doc.exists) {
            const data = doc.data();
     }
     const roleLabel = (type === 'recipient') ? 'Requesting' : 'Donating';
            
            document.getElementById('profile-name').innerText = data.name;
            document.getElementById('profile-status').innerText = roleLabel;
            document.getElementById('profile-blood').innerText = data.bloodType;

            console.log(`Currently viewing a ${type} profile.`);
        
    } catch (error) {
        console.error("Error connecting to database:", error);
    }

}
document.addEventListener('DOMContentLoaded',loadSingleProfile);