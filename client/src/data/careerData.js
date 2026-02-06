export const careerQuestions = [
    {
        id: 1,
        text: { en: "What interests you the most?", hi: "आपको सबसे ज्यादा क्या पसंद है?" },
        options: [
            { text: { en: "Solving complex disputes fairly.", hi: "जटिल विवादों को निष्पक्ष रूप से सुलझाना।" }, type: "judiciary" },
            { text: { en: "Defending innocent people in court.", hi: "अदालत में निर्दोष लोगों का बचाव करना।" }, type: "criminal_lawyer" },
            { text: { en: "Drafting contracts and corporate deals.", hi: "अनुबंध और कॉर्पोरेट सौदे तैयार करना।" }, type: "corporate_lawyer" },
            { text: { en: "Representing the State/Government.", hi: "राज्य/सरकार का प्रतिनिधित्व करना।" }, type: "prosecutor" }
        ]
    },
    {
        id: 2,
        text: { en: "How do you handle pressure?", hi: "आप किस तरह से दबाव को संभालते हैं?" },
        options: [
            { text: { en: "I stay calm and neutral.", hi: "मैं शांत और तटस्थ रहता हूँ।" }, type: "judiciary" },
            { text: { en: "I thrive on argument and debate.", hi: "मुझे बहस और तर्क-वितर्क पसंद है।" }, type: "criminal_lawyer" },
            { text: { en: "I prefer desk work and strategy.", hi: "मैं डेस्क वर्क और रणनीति पसंद करता हूं।" }, type: "corporate_lawyer" },
            { text: { en: "I like structured, official duties.", hi: "मुझे संरचित, आधिकारिक कर्तव्य पसंद हैं।" }, type: "prosecutor" }
        ]
    },
    {
        id: 3,
        text: { en: "What is your ideal work environment?", hi: "आपका आदर्श कार्य वातावरण क्या है?" },
        options: [
            { text: { en: "A dignified courtroom bench.", hi: "एक प्रतिष्ठित कोर्ट रूम बेंच।" }, type: "judiciary" },
            { text: { en: "Active courtroom litigation.", hi: "सक्रिय कोर्ट रूम मुकदमेबाजी।" }, type: "criminal_lawyer" },
            { text: { en: "A high-rise corporate office.", hi: "एक कॉर्पोरेट कार्यालय।" }, type: "corporate_lawyer" },
            { text: { en: "Government legal department.", hi: "सरकारी कानूनी विभाग।" }, type: "prosecutor" }
        ]
    },
    {
        id: 4,
        text: { en: "What motivates you?", hi: "आपको क्या प्रेरित करता है?" },
        options: [
            { text: { en: "Upholding Justice & Law.", hi: "न्याय और कानून को बनाए रखना।" }, type: "judiciary" },
            { text: { en: "Winning cases for clients.", hi: "ग्राहकों के लिए केस जीतना।" }, type: "criminal_lawyer" },
            { text: { en: "High Earning Potential.", hi: "उच्च कमाई की क्षमता।" }, type: "corporate_lawyer" },
            { text: { en: "Public Service & Security.", hi: "जनसेवा और सुरक्षा।" }, type: "prosecutor" }
        ]
    }
];

export const careerProfiles = {
    judiciary: {
        title: { en: "Judge (Judiciary)", hi: "न्यायाधीश (न्यायपालिका)" },
        desc: { en: "You have a balanced and fair mindset suitable for the bench.", hi: "आपके पास बेंच के लिए उपयुक्त एक संतुलित और निष्पक्ष मानसिकता है।" },
        difficulty: "High (Competitive Exam)",
        role: "Deciding cases, interpreting law",
        wlb: "Moderate to High"
    },
    criminal_lawyer: {
        title: { en: "Criminal Lawyer", hi: "अपराधिक वकील" },
        desc: { en: "You have a fighting spirit and love for advocacy.", hi: "आपके पास जुझारू भावना और वकालत के लिए प्यार है।" },
        difficulty: "High (Building Practice)",
        role: "Defending accused, arguing bail/trial",
        wlb: "Low (Unpredictable hours)"
    },
    corporate_lawyer: {
        title: { en: "Corporate Lawyer", hi: "कॉर्पोरेट वकील" },
        desc: { en: "You prefer structured, high-stakes commercial work.", hi: "आप संरचित, उच्च-दांव वाले वाणिज्यिक कार्य पसंद करते हैं।" },
        difficulty: "Medium (Top Law Firms are tough)",
        role: "Mergers, Contracts, Compliance",
        wlb: "Low (Long hours)"
    },
    prosecutor: {
        title: { en: "Public Prosecutor", hi: "सरकारी वकील" },
        desc: { en: "You are inclined towards serving the state and public interest.", hi: "आप राज्य और जनहित की सेवा करने की ओर इच्छुक हैं।" },
        difficulty: "Medium (Exams + Experience)",
        role: "Representing State in criminal matters",
        wlb: "Moderate"
    }
};
