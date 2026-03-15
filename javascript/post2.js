function createcard(donor){
return `<div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
      <div class="card rounded-3 h-100" style="border-color:#CC0033; width: 20rem;">
        <div class="card-body text-center">
             <img src="/Assets/portrait-patient-having-checkup.jpg"
     class="mb-3 d-block mx-auto"
     style="width:100%; height:165; margin-top:-5px;"
     alt="Donor">
          <p class="card-text fs-5 text-start" style="font-family:'Times New Roman', Times, serif;">
            Name: ${recipient.name} <br>
            Location: ${recipient.location} <br>
            Bloodtype: ${recipient.bloodtype} <br>
            Role: Recipient
            Description:<br>
            Urgent blood needed for a sick child. Your donation could save a young life. Please help.
          </p>
        </div>
        <a href="/Html/Odd profile.html?id=${recipient.id}"
           class="w-100 fw-bold text-center fs-5 rounded-bottom-3"
           style="color:black; border:1px solid #CC0033; text-decoration:none;color: #CC0033;">
          View Profile <span class="ms-1">&rsaquo;</span>
        </a>
      </div>
    </div>

  </div>
</div>
  `;
}
function displayAllRecipients (recipientlist){
    const grid = document.getElementById('posts-grid');
    grid.innerHTML = "";
    recipientlist.forEach(recipient => {
        const htmlCard = createcard(recipient);
        grid.innerHTML += htmlCard;
    });

}
db.collection("recipients").get().then((querySnapshot)=>{
    let displayAllRecipients = [];
    querySnapshot.forEach((doc)=>{
        let recipientdata = doc.data();
        recipientdata.id =  doc.id;
        allrecipients.push(recipient);
    }
    );
    displayAllRecipients(allrecipients);
}
)