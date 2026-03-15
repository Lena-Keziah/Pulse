async function loadSingleprofile() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
const type = urlParams.get('type');
const role = (type === 'recipient')? 'recipients' : 'donors';
    try {
        const collectionName = (type === 'recipient')? 'recipients' : 'donors';
        const doc = await db.collection(collectionName).doc(id).get();
    
        if(doc.exists){
            const donor = doc.data();
            document.getElementById('profile-name').innerText = data.name;
            document.getElementById('profilr-blood').innerText = data.bloodType;
            document.getElementById('profile-blood').innerText = data.bloodType;
            const profileImg = document.getElementById('profile-img');
            profileImg.src = data.image || '/Assets/default-avatar.png';
            profileImg.alt = `${data.name}'s Profile Picture`;

            console.log("Successfully loaded ${role} profile for:", data.name);

        } else {
            console.error("No such person exists in the database.");
            document.body.innerHTML = "<h1>${role} not found</h1>";
        }

    } 
    catch (error) {
console.error("Database Connection Error:", error);
    }
}
document.addEventListener('DOMContentLoaded', loadSingleProfile);