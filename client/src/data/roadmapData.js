export const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
];

export const EDUCATION_LEVELS = [
    "Class 12 (Any Stream)",
    "Graduation (Non-Law)",
    "LLB (Pursuing/Completed)"
];

export const ROLES = [
    "Civil Judge (Junior Division)",
    "Practicing Lawyer",
    "Public Prosecutor"
];

// Helper to get exam name based on state
const getExamName = (state) => {
    const exams = {
        "Delhi": "Delhi Judicial Services (DJS) Exam",
        "Uttar Pradesh": "UP PCS-J (Judicial Services)",
        "Maharashtra": "JMFC (Judicial Magistrate First Class) Exam",
        "Karnataka": "Karnataka Civil Judge Exam",
        "Bihar": "Bihar Judicial Services Exam",
        "Rajasthan": "RJS (Rajasthan Judicial Services)",
        "Madhya Pradesh": "MP Civil Judge Exam"
    };
    return exams[state] || `${state} Judicial Services Exam`;
};

export const getRoadmap = (state, education, role, t) => {
    // Basic Steps common to all
    let steps = [
        {
            id: 1,
            title: t('step1_title', "1. Higher Secondary (Class 12)"),
            desc: t('step1_desc', "Completing Class 12 is foundational. Focus on English and Reasoning."),
            icon: "🎓"
        }
    ];

    if (education === "Class 12 (Any Stream)") {
        steps.push({
            id: 2,
            title: t('step2_title', "2. Law Entrance Exams"),
            desc: t('step2_desc', "Clear CLAT/AILET to enter a 5-year Integrated LLB program."),
            icon: "📚"
        });
        steps.push({
            id: 3,
            title: t('step3_title', "3. Pursue LLB Degree"),
            desc: t('step3_desc_5yr', "Enroll in a 5-year BA LL.B / BBA LL.B course."),
            icon: "⚖️"
        });
    } else if (education === "Graduation (Non-Law)") {
        steps.push({
            id: 2,
            title: t('step2_title_3yr', "2. Law Entrance for Graduates"),
            desc: t('step2_desc_3yr', "Clear DU LLB / MH CET Law for 3-year LLB."),
            icon: "📚"
        });
        steps.push({
            id: 3,
            title: t('step3_title', "3. Pursue LLB Degree"),
            desc: t('step3_desc_3yr', "Enroll in a 3-year LLB course."),
            icon: "⚖️"
        });
    } else {
        // Already LLB
        steps = []; // Skip early education steps
    }

    // Role Specific Paths
    if (role === "Civil Judge (Junior Division)") {
        steps.push({
            id: 4,
            title: t('step4_title', "4. Gain Practice Experience"),
            desc: t('step4_desc', "Optional but recommended: Practice in District Courts."),
            icon: "💼"
        });
        steps.push({
            id: 5,
            title: `5. ${getExamName(state)}`, // Dynamic Exam Name
            desc: t('step5_desc', "Appear for the 3-stage exam: Prelims, Mains, Interview."),
            icon: "📝"
        });
        steps.push({
            id: 6,
            title: t('step6_title', "6. Training Period"),
            desc: t('step6_desc', "Rigorous training at the Judicial Academy."),
            icon: "🏛️"
        });
        steps.push({
            id: 7,
            title: t('step7_title', "7. Appointment"),
            desc: t('step7_desc', "Start career as Civil Judge / Magistrate."),
            icon: "👨‍⚖️"
        });
    } else if (role === "Practicing Lawyer") {
        steps.push({
            id: 4,
            title: "4. AIBE Exam",
            desc: "Clear the All India Bar Examination to practice law in India.",
            icon: "📜"
        });
        steps.push({
            id: 5,
            title: "5. Junior Adv. mentorship",
            desc: "Join a senior advocate to learn practical court craft.",
            icon: "🤝"
        });
        steps.push({
            id: 6,
            title: "6. Independent Practice",
            desc: "Start taking your own cases and building clients.",
            icon: "⚖️"
        });
    } else if (role === "Public Prosecutor") {
        steps.push({
            id: 4,
            title: "4. 7 Years Practice",
            desc: "Must practice as an advocate for at least 7 years.",
            icon: "⏳"
        });
        steps.push({
            id: 5,
            title: "5. APO/APP Exam",
            desc: `Clear the Assistant Public Prosecutor exam conducted by ${state} PSC.`,
            icon: "🚓"
        });
    }

    // Re-index IDs
    return steps.map((s, i) => ({ ...s, id: i + 1 }));
};
