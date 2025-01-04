document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById('signIn');

    signInButton.addEventListener('click', () => {
        // Redirect to the desired HTML page
        window.location.href = "login.html";
    });
});









// Career Info Object
const careerInfo = {
    "Science and Technology": {
        description: "Explore the cutting-edge fields of innovation and discovery. Science and technology careers focus on solving complex problems, improving existing systems, and inventing new technologies. These fields are ever-evolving, offering constant opportunities for growth and learning.",
        courses: [
            "Computer Science: Learn programming, algorithms, data structures, and the design of software and systems. This course forms the foundation for developing applications, operating systems, and more.",
            "Data Science: Involves working with big data, utilizing statistical analysis and machine learning techniques to extract valuable insights. Courses cover programming, data visualization, and data modeling.",
            "Artificial Intelligence: Focuses on creating intelligent systems capable of learning and decision-making. Courses explore machine learning, neural networks, natural language processing, and robotics."
        
        
        ],
        jobs: [
            "Software Engineer: Develops, tests, and maintains software applications, ensuring they meet functional and performance requirements.",
            "Data Analyst: Analyzes data to identify trends, create reports, and provide insights that support decision-making in business and technology.",
            "Research Scientist: Works in academic or industry settings, conducting experiments and studies to advance knowledge in fields like biology, physics, or computer science."
        ]
    },
    "Health and Medicine": {
        description: "Care for others and advance medical knowledge. Careers in health and medicine are dedicated to diagnosing, treating, and preventing illnesses, improving quality of life, and advancing research to better understand the human body.",
        courses: [
            "Nursing: Provides in-depth knowledge on patient care, anatomy, pharmacology, and medical procedures. Nurses are trained to work directly with patients in hospitals, clinics, and other healthcare settings.",
            "Pharmacy: Focuses on the preparation, dispensing, and safe use of medications. Pharmacy courses include drug chemistry, pharmacology, patient care, and medical ethics.",
            "Public Health: Prepares students to address health issues at a community level. The coursework covers epidemiology, health policy, environmental health, and health education."
        ],
        jobs: [
            "Doctor: A healthcare professional who diagnoses and treats illnesses, prescribes medications, and may perform surgeries. Doctors specialize in various fields, including pediatrics, surgery, and psychiatry.",
            "Nurse: A healthcare worker who provides direct patient care, administers treatments, monitors patient health, and educates patients about health management.",
            "Pharmacist: Specializes in medication management, advising patients on correct drug usage, side effects, and interactions. Pharmacists work in hospitals, retail pharmacies, and research."
        ]
    },
    "Business and Finance": {
        description: "Shape the economy and manage financial systems. This field is focused on managing and investing resources, ensuring the smooth operation of financial institutions, and understanding economic trends to make sound business decisions.",
        courses: [
            "Accounting: Covers the principles of financial record-keeping, preparing reports, and analyzing financial statements. Students learn how to manage finances for individuals or companies.",
            "Economics: Explores how resources are allocated and how economic agents interact. Topics include market dynamics, inflation, international trade, and economic policy.",
            "Marketing: Teaches students how to create, communicate, and deliver value to customers. It includes courses on advertising, consumer behavior, branding, and digital marketing strategies."
        ],
        jobs: [
            "Accountant: Manages financial accounts, prepares financial statements, ensures compliance with laws, and advises on tax and investment strategies.",
            "Financial Analyst: Analyzes financial data to help businesses make informed decisions about investments, budgeting, and financial forecasting.",
            "Business Manager: Oversees the operations of a company or department, ensuring that business activities run smoothly, meet objectives, and align with company goals."
        ]
    },
    "Creative Arts and Media": {
        description: "Express ideas through art, design, and storytelling. Careers in creative arts and media allow individuals to engage their artistic talents in producing films, advertisements, music, and other forms of entertainment.",
        courses: [
            "Graphic Design: Teaches visual communication using software tools to create logos, websites, and advertisements. The course focuses on layout, typography, and color theory.",
            "Film Production: Covers the technical and creative aspects of making films. Students learn about directing, cinematography, editing, and sound design.",
            "Music: Focuses on performance, music theory, composition, and production. Students learn to play instruments, compose music, and work in the music industry."
        ],
        jobs: [
            "Graphic Designer: Creates visual concepts to communicate ideas. This role involves designing marketing materials, websites, and branding.",
            "Filmmaker: Directs, produces, and edits films or television programs, overseeing everything from scriptwriting to final production.",
            "Musician: Performs and composes music for various platforms. Musicians can work in bands, orchestras, or as solo artists, and may also produce music."
        ]
    },
    "Law and Public Service": {
        description: "Work towards justice and community welfare. Careers in law and public service focus on enforcing the rule of law, ensuring justice, and supporting the functioning of governments and civil institutions.",
        courses: [
            "Law: Teaches students the principles of legal practice, including criminal, civil, and corporate law. Lawyers learn how to represent clients, draft legal documents, and argue cases.",
            "Criminology: Studies crime, its causes, societal impact, and prevention. The course prepares students for careers in law enforcement, criminal justice, or academia.",
            "Public Administration: Focuses on managing government agencies, formulating policies, and ensuring effective public service delivery."
        ],
        jobs: [
            "Lawyer: Provides legal representation for clients in criminal, civil, or corporate matters. Specializations include litigation, corporate law, and family law.",
            "Policy Analyst: Researches and evaluates public policies, recommending changes to improve government programs and services.",
            "Civil Servant: Works in a government role, providing essential public services, from healthcare to education and law enforcement."
        ]
    },
    "Engineering and Technical Fields": {
        description: "Build solutions and structures for the future. Engineering and technical fields involve designing, developing, and maintaining systems, structures, and products to meet the needs of modern society.",
        courses: [
            "Mechanical Engineering: Focuses on the design and operation of machinery and mechanical systems. Students learn about thermodynamics, mechanics, and materials science.",
            "Electrical Engineering: Covers the study of electrical circuits, electronics, and power systems. The course includes practical applications in energy, telecommunications, and electronics.",
            "Civil Engineering: Focuses on the planning, design, and construction of infrastructure, including roads, bridges, buildings, and water systems."
        ],
        jobs: [
            "Engineer: Applies scientific principles to design, develop, and maintain systems and structures in various industries, such as automotive, aerospace, and construction.",
            "Technician: Works alongside engineers to test, maintain, and repair equipment, machinery, or electrical systems.",
            "Project Manager: Oversees engineering projects, ensuring they are completed on time, within budget, and according to specifications."
        ]
    },
    "Education and Training": {
        description: "Teach and inspire the next generation. This field prepares individuals to educate and train others, whether in traditional schools, corporate environments, or community settings.",
        courses: [
            "Education: Covers the theories and methods of teaching, curriculum development, and student assessment. This course prepares students to teach in classrooms or online environments.",
            "Child Development: Focuses on understanding the cognitive, emotional, and physical development of children, preparing students for roles in teaching and early childhood education.",
            "Curriculum Design: Teaches how to create educational programs, materials, and courses that meet the needs of students and organizations."
        ],
        jobs: [
            "Teacher: Educates students in schools, colleges, or other educational settings, developing lesson plans and assessing student progress.",
            "Trainer: Provides specialized instruction to employees or groups in various settings, from corporate environments to government agencies.",
            "Education Consultant: Advises schools or educational institutions on how to improve curricula, teaching methods, and student engagement."
        ]
    },
    "Trade and Skilled Work": {
        description: "Master trades and technical skills. Careers in skilled trades involve hands-on work and technical expertise in areas such as construction, plumbing, electrical work, and more.",
        courses: [
            "Plumbing: Teaches students how to install and repair piping systems, as well as maintain water, gas, and waste systems in residential and commercial buildings.",
            "Carpentry: Focuses on working with wood to build structures, furniture, and other fixtures. Courses cover blueprint reading, construction techniques, and safety standards.",
            "Automotive Repair: Provides training in diagnosing and repairing vehicles, including engines, brakes, transmissions, and other mechanical systems."
        ],
        jobs: [
            "Plumber: Installs and repairs water, gas, and waste systems in homes and businesses.",
            "Electrician: Installs and maintains electrical systems in buildings, including lighting, power distribution, and electrical panels.",
            "Mechanic: Diagnoses and repairs mechanical problems in vehicles, machinery, and equipment."
        ]
    },
    "Sports and Athletics": {
        description: "Push physical boundaries and inspire through sports. Careers in sports and athletics involve physical training, coaching, and maintaining the health and well-being of athletes.",
        courses: [
            "Sports Science: Covers the study of human performance, exercise physiology, and nutrition in sports. Students learn how to optimize athletic performance and recovery.",
            "Physical Education: Focuses on teaching physical activity, health, and fitness to individuals or groups. This includes creating exercise programs and managing fitness centers.",
            "Athleth"]
            }

};

// Function to Update Selection
function updateSelection(selectedValue) {
    const radioSelectionDiv = document.getElementById("radio-selection");
    const careerInfoDiv = document.getElementById("career-info");

    if (selectedValue) {
        // Display radio button
        radioSelectionDiv.innerHTML = `
            <input type="radio" id="career-interest" name="career" value="${selectedValue}" checked>
            <label for="career-interest">${selectedValue}</label>
        `;

        // Display career information
        const { description, courses, jobs } = careerInfo[selectedValue];
        careerInfoDiv.innerHTML = `
            <h3>${selectedValue}</h3>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Courses:</strong> ${courses.join(", ")}</p>
            <p><strong>Job Opportunities:</strong> ${jobs.join(", ")}</p>
        `;
    } else {
        radioSelectionDiv.innerHTML = "";
        careerInfoDiv.innerHTML = "";
    }
}
