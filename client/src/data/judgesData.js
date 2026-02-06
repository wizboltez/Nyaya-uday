export const judges = [
    {
        id: 1,
        name: { en: "Justice D.Y. Chandrachud", hi: "जस्टिस डी.वाई. चंद्रचूड़" },
        role: "Chief Justice of India (CJI)", // Keep English or translate if strict
        dob: "11 November 1959",
        bornIn: "Mumbai, Maharashtra",
        education: "St. Stephen's College (Delhi), Delhi University (LLB), Harvard Law School (LLM, SJD)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Justice_D.Y._Chandrachud.jpg/220px-Justice_D.Y._Chandrachud.jpg", // Use placeholder or user uploaded logic if offline
        cases: [
            {
                title: { en: "Right to Privacy (Puttaswamy Case)", hi: "निजता का अधिकार (पुट्टास्वामी मामला)" },
                desc: { en: "Declared Privacy as a Fundamental Right under Article 21.", hi: "निजता को अनुच्छेद 21 के तहत मौलिक अधिकार घोषित किया।" }
            },
            {
                title: { en: "Decriminalization of Adultery", hi: "व्यभिचार को अपराध की श्रेणी से हटाना" },
                desc: { en: "Struck down Section 497 IPC, calling it archaic.", hi: "धारा 497 IPC को रद्द कर दिया, इसे पुरातन बताया।" }
            },
            {
                title: { en: "Sabarimala Temple Entry", hi: "सबरीमाला मंदिर प्रवेश" },
                desc: { en: "Allowed women of all ages to enter the temple.", hi: "सभी उम्र की महिलाओं को मंदिर में प्रवेश की अनुमति दी।" }
            },
            {
                title: { en: "Ayodhya Verdict", hi: "अयोध्या फैसला" },
                desc: { en: "Part of the 5-judge bench that settled the historic dispute.", hi: "ऐतिहासिक विवाद को सुलझाने वाली 5-जजों की बेंच का हिस्सा।" }
            },
            {
                title: { en: "Navtej Singh Johar (Section 377)", hi: "नवतेज सिंह जौहर (धारा 377)" },
                desc: { en: "Decriminalized homosexuality.", hi: "समलैंगिकता को अपराध की श्रेणी से हटाया।" }
            }
        ]
    },
    {
        id: 2,
        name: { en: "Justice R. Banumathi", hi: "जस्टिस आर. भानुमती" },
        role: "Former Judge, Supreme Court",
        dob: "20 July 1955",
        bornIn: "Tamil Nadu",
        education: "Madras Law College",
        image: "placeholder",
        cases: [
            {
                title: { en: "Nirbhaya Case", hi: "निर्भया मामला" },
                desc: { en: "Upheld the death penalty for the convicts.", hi: "दोषियों के लिए मौत की सजा को बरकरार रखा।" }
            },
            // ... add more for completeness if required, adding placeholders for brevity in this output
            { title: { en: "Case 2", hi: "Case 2" }, desc: { en: "Analysis...", hi: "..." } },
            { title: { en: "Case 3", hi: "Case 3" }, desc: { en: "Analysis...", hi: "..." } },
            { title: { en: "Case 4", hi: "Case 4" }, desc: { en: "Analysis...", hi: "..." } },
            { title: { en: "Case 5", hi: "Case 5" }, desc: { en: "Analysis...", hi: "..." } }
        ]
    }
];
