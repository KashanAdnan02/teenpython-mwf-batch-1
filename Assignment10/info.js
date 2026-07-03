// Your exact profile information object
const studentProfile = {
    name: "Syed Umar Farooq",
    email: "eabumar54@gmail.com",
    bio: "A motivated student balancing higher education with rigorous technical training. Passionate about exploring computer applications, programming structures, and modern software solutions.",
    class: "HSC Part 1 (First Year)",
    school: "Govt National College Karachi (Morning)",
    collegeDuration: "2026 Present",
    saylaniBatch: "Full Stack Foundations for Teens with JavaScript & Python batch 1",
    saylaniSlot: "Mon, Wed, Fri (04:01 PM - 05:31 PM)"
};

// Function to construct the HTML layout using your object variables
function generateCV(profile) {
    const cvContainer = document.getElementById('cv');
    
    cvContainer.innerHTML = `
        <div class="header">
            <h1>${profile.name}</h1>
            <p>📍 Karachi, Pakistan | ✉️ ${profile.email}</p>
        </div>

        <div class="section">
            <div class="section-title">Name</div>
            <p style="margin: 0; font-size: 1.1em;">${profile.name}</p>
        </div>

        <div class="section">
            <div class="section-title">Email</div>
            <p style="margin: 0; font-size: 1.1em;">${profile.email}</p>
        </div>

        <div class="section">
            <div class="section-title">Bio</div>
            <p style="line-height: 1.6; margin: 0;">${profile.bio}</p>
        </div>

        <div class="section">
            <div class="section-title">Class</div>
            <div class="info-block">
                <div class="info-title">${profile.class}</div>
                <div class="info-sub">${profile.school}</div>
                <p style="margin: 5px 0 0 0;"><strong>College Duration:</strong> ${profile.collegeDuration}</p>
            </div>
        </div>

        <div class="section">
            <div class="section-title">School (College)</div>
            <p style="margin: 0; font-size: 1.1em;">${profile.school}</p>
        </div>

        <div class="section">
            <div class="section-title">Saylani Class Batch & Slot</div>
            <div class="info-block">
                <div class="info-title">Saylani Mass IT Training (SMIT)</div>
                <ul>
                    <li><strong>Batch:</strong> ${profile.saylaniBatch}</li>
                    <li><strong>Slot:</strong> ${profile.saylaniSlot}</li>
                </ul>
            </div>
        </div>
    `;
}

// Target elements and setup click behavior
const viewBtn = document.getElementById('viewBtn');
const cvContainer = document.getElementById('cv');

viewBtn.addEventListener('click', () => {
    // Generate the contents dynamically from data object
    generateCV(studentProfile);
    
    // Toggle block visibility and apply a simple fade animation
    cvContainer.style.display = 'block';
    setTimeout(() => {
        cvContainer.style.opacity = '1';
    }, 10);
    
    // Smoothly scroll down to show the newly opened content area
    cvContainer.scrollIntoView({ behavior: 'smooth' });
});
