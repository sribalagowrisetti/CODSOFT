const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Remote" },
    { title: "Backend Developer", company: "Amazon", location: "Bangalore" },
    { title: "Data Analyst", company: "Infosys", location: "Hyderabad" },
    { title: "UI/UX Designer", company: "Adobe", location: "Pune" }
];

const jobList = document.getElementById("jobList");
const searchBox = document.getElementById("searchBox");

function displayJobs(filteredJobs) {
    jobList.innerHTML = "";

    filteredJobs.forEach(job => {
        jobList.innerHTML += `
            <div class="job-card">
                <h3>${job.title}</h3>
                <p><b>Company:</b> ${job.company}</p>
                <p><b>Location:</b> ${job.location}</p>
                <button>Apply Now</button>
            </div>
        `;
    });
}

searchBox.addEventListener("keyup", () => {
    const value = searchBox.value.toLowerCase();
    const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(value) ||
        job.company.toLowerCase().includes(value)
    );
    displayJobs(filtered);
});

displayJobs(jobs);
