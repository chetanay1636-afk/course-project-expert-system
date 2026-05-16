const projectDetails = {

    "AI Chatbot Project": {
        level: "Intermediate",

        description:
            "An AI chatbot simulates human conversation and answers user questions automatically.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],

        websites: [
            "https://developer.mozilla.org",
            "https://www.w3schools.com",
            "https://platform.openai.com/docs"
        ],

        implementation: [
            "Create chatbot UI using HTML and CSS",
            "Add chatbot interaction logic",
            "Store predefined responses",
            "Connect AI API if required",
            "Deploy project online"
        ]
    },

    "Knowledge-Based Expert System": {
        level: "Intermediate",

        description:
            "A rule-based AI system that gives recommendations using IF-THEN logic.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        websites: [
            "https://www.geeksforgeeks.org",
            "https://developer.mozilla.org"
        ],

        implementation: [
            "Design input form",
            "Create IF-THEN rules",
            "Implement forward chaining logic",
            "Generate recommendations dynamically"
        ]
    },

    "Portfolio Website Project": {
        level: "Beginner",

        description:
            "A personal website showcasing skills, projects, and achievements.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        websites: [
            "https://developer.mozilla.org",
            "https://www.w3schools.com"
        ],

        implementation: [
            "Create homepage",
            "Add skills section",
            "Add project gallery",
            "Deploy using GitHub and Netlify"
        ]
    },

    "Data Visualization Dashboard": {
        level: "Advanced",

        description:
            "A dashboard that displays data using charts and analytics.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Chart.js"
        ],

        websites: [
            "https://www.chartjs.org",
            "https://developer.mozilla.org"
        ],

        implementation: [
            "Collect sample data",
            "Create dashboard layout",
            "Add charts using Chart.js",
            "Deploy project online"
        ]
    },

    "Resume Builder Website": {
        level: "Intermediate",

        description:
            "A web application that automatically generates resumes.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        websites: [
            "https://developer.mozilla.org",
            "https://www.w3schools.com"
        ],

        implementation: [
            "Create resume form",
            "Design resume template",
            "Generate live preview",
            "Add PDF download feature"
        ]
    }
};

function generateRecommendation() {

    const name = document.getElementById("studentName").value;

    const programming =
        document.getElementById("programming").checked;

    const ai =
        document.getElementById("ai").checked;

    const webdev =
        document.getElementById("webdev").checked;

    const problemSolving =
        document.getElementById("problemSolving").checked;

    const creative =
        document.getElementById("creative").checked;

    const dataAnalysis =
        document.getElementById("dataAnalysis").checked;

    const design =
        document.getElementById("design").checked;

    const automation =
        document.getElementById("automation").checked;

    let recommendations = [];

    if (programming && ai) {
        recommendations.push("AI Chatbot Project");
    }

    if (problemSolving && automation) {
        recommendations.push("Knowledge-Based Expert System");
    }

    if (webdev && creative) {
        recommendations.push("Portfolio Website Project");
    }

    if (dataAnalysis && programming) {
        recommendations.push("Data Visualization Dashboard");
    }

    if (webdev && design) {
        recommendations.push("Resume Builder Website");
    }

    const resultBox =
        document.getElementById("result");

    if (recommendations.length === 0) {

        resultBox.style.display = "block";

        resultBox.innerHTML = `
            <h2>No Recommendation Found</h2>
            <p>Please select more skills and interests.</p>
        `;

        return;
    }

    let output = `
        <h2>Hello ${name || "Student"} 👋</h2>
    `;

    recommendations.forEach(project => {

        const details = projectDetails[project];

        output += `
            <div style="
                margin-top:20px;
                padding:20px;
                border-radius:10px;
                background:#ffffff;
                border:1px solid #ccc;
            ">

                <h2>${project}</h2>

                <p>
                    <strong>Difficulty:</strong>
                    ${details.level}
                </p>

                <p>
                    <strong>Description:</strong>
                    ${details.description}
                </p>

                <h3>Technologies Required</h3>

                <ul>
                    ${details.technologies
                        .map(tech => `<li>${tech}</li>`)
                        .join("")}
                </ul>

                <h3>Websites to Explore</h3>

                <ul>
                    ${details.websites
                        .map(site =>
                            `<li>
                                <a href="${site}" target="_blank">
                                    ${site}
                                </a>
                            </li>`
                        )
                        .join("")}
                </ul>

                <h3>Implementation Steps</h3>

                <ol>
                    ${details.implementation
                        .map(step => `<li>${step}</li>`)
                        .join("")}
                </ol>

            </div>
        `;
    });

    resultBox.style.display = "block";

    resultBox.innerHTML = output;
}

function resetForm() {

    document.getElementById("studentName").value = "";

    const checkboxes =
        document.querySelectorAll(
            'input[type="checkbox"]'
        );

    checkboxes.forEach(box => {
        box.checked = false;
    });

    document.getElementById("result").style.display =
        "none";
}