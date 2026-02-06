export const cases = [
    {
        id: 1,
        category: "Contract Law",
        difficulty: "Easy",
        title: {
            en: "The Case of the Broken Promise",
            hi: "टूटे हुए वादे का मामला"
        },
        passage: {
            en: "Mr. Sharma, a retired school teacher, decided to sell his ancestral home in Jaipur to Mr. Gupta for ₹50 Lakhs. They met on January 15th and signed a written agreement on a stamped paper. The agreement clearly stated that Mr. Gupta would pay an advance of ₹5 Lakhs immediately, and the remaining ₹45 Lakhs would be paid within three months, upon which the sale deed would be registered. The contract also included a 'penalty clause', stating that if Mr. Sharma refused to sell after taking the advance, he would have to return double the advance amount (₹10 Lakhs) to Mr. Gupta. Two weeks later, Mr. Sharma received a better offer of ₹60 Lakhs from a property dealer. Tempted by the extra profit, Mr. Sharma contacted Mr. Gupta and offered to return his ₹5 Lakhs with a small interest, but refused to pay the double penalty or sell the house. Mr. Gupta, having already arranged a loan, was furious and filed a civil suit for 'Specific Performance' of the contract.",
            hi: "एक सेवानिवृत्त स्कूल शिक्षक श्री शर्मा ने जयपुर में अपना पैतृक घर श्री गुप्ता को ₹50 लाख में बेचने का फैसला किया। वे 15 जनवरी को मिले और एक स्टाम्प पेपर पर लिखित समझौता किया। समझौते में स्पष्ट रूप से कहा गया था कि श्री गुप्ता तुरंत ₹5 लाख का अग्रिम भुगतान करेंगे, और शेष ₹45 लाख का भुगतान तीन महीने के भीतर किया जाएगा, जिसके बाद बिक्री विलेख (Sale Deed) पंजीकृत किया जाएगा। अनुबंध में एक 'जुर्माना खंड' भी शामिल था, जिसमें कहा गया था कि यदि श्री शर्मा अग्रिम लेने के बाद बेचने से इनकार करते हैं, तो उन्हें श्री गुप्ता को अग्रिम राशि का दोगुना (₹10 लाख) वापस करना होगा। दो हफ्ते बाद, श्री शर्मा को एक प्रॉपर्टी डीलर से ₹60 लाख का बेहतर प्रस्ताव मिला। अतिरिक्त लाभ के लालच में, श्री शर्मा ने श्री गुप्ता से संपर्क किया और उनके ₹5 लाख थोड़े ब्याज के साथ वापस करने का प्रस्ताव रखा, लेकिन दोगुना जुर्माना देने या घर बेचने से इनकार कर दिया। श्री गुप्ता, जिन्होंने पहले ही ऋण की व्यवस्था कर ली थी, क्रोधित हो गए और अनुबंध के 'विशिष्ट प्रदर्शन' (Specific Performance) के लिए दीवानी मुकदमा दायर किया।"
        },
        questions: [
            {
                id: 1,
                text: {
                    en: "Is the written agreement between Mr. Sharma and Mr. Gupta legally binding?",
                    hi: "क्या श्री शर्मा और श्री गुप्ता के बीच लिखित समझौता कानूनी रूप से बाध्यकारी है?"
                },
                options: {
                    en: ["Yes, written contracts with consideration are binding.", "No, because the sale deed wasn't registered yet.", "No, better offers invalidate old contracts.", "Yes, but only if notarized."],
                    hi: ["हाँ, प्रतिफल (consideration) के साथ लिखित अनुबंध बाध्यकारी होते हैं।", "नहीं, क्योंकि बिक्री विलेख अभी पंजीकृत नहीं हुआ था।", "नहीं, बेहतर प्रस्ताव पुराने अनुबंधों को अमान्य कर देते हैं।", "हाँ, लेकिन केवल तभी जब नोटरीकृत हो।"]
                },
                correctAnswer: 0,
                explanation: {
                    en: "Under the Indian Contract Act, 1872, a written agreement for lawful consideration is a valid and binding contract.",
                    hi: "भारतीय अनुबंध अधिनियम, 1872 के तहत, वैध प्रतिफल के लिए एक लिखित समझौता एक मान्य और बाध्यकारी अनुबंध है।"
                }
            },
            {
                id: 2,
                text: {
                    en: "What implies 'Specific Performance' in this context?",
                    hi: "इस संदर्भ में 'विशिष्ट प्रदर्शन' (Specific Performance) का क्या अर्थ है?"
                },
                options: {
                    en: ["Demanding money back.", "Asking the court to force Mr. Sharma to sell the house as promised.", "Sending Mr. Sharma to jail.", "Asking for an apology."],
                    hi: ["पैसा वापस मांगना।", "अदालत से श्री शर्मा को वादे के अनुसार घर बेचने के लिए मजबूर करने के लिए कहना।", "श्री शर्मा को जेल भेजना।", "माफी मांगना।"]
                },
                correctAnswer: 1,
                explanation: {
                    en: "Specific Performance is a specialized remedy where the court orders the breaching party to perform their contractual duty (selling the house).",
                    hi: "विशिष्ट प्रदर्शन एक विशेष उपाय है जहां अदालत उल्लंघन करने वाले पक्ष को अपने संविदात्मक कर्तव्य (घर बेचना) को पूरा करने का आदेश देती है।"
                }
            }
        ]
    },
    {
        id: 2,
        category: "Tort Law",
        difficulty: "Medium",
        title: {
            en: "The Noise Nuisance Complaint",
            hi: "ध्वनि प्रदूषण और उपद्रव की शिकायत"
        },
        passage: {
            en: "Mrs. Iyer, an elderly woman with a heart condition, lives in a quiet residential colony in Bangalore. Her neighbor, Mr. Singh, recently converted his garage into a carpentry workshop. He installed heavy electric saws and hammers that operate daily from 8 AM to 8 PM, creating deafening noise and clouds of sawdust that drift into Mrs. Iyer's house. Mrs. Iyer finds it impossible to rest or sleep during the day, aggravating her health issues. She requested Mr. Singh to limit his working hours or soundproof the garage, but he refused, arguing that it is his private property and he has the right to use it for his livelihood. He claims that since he stops by 8 PM, he is following the law. Desperate, Mrs. Iyer files a lawsuit for 'Private Nuisance' and seeks an injunction to stop the workshop.",
            hi: "श्रीमती अय्यर, दिल की बीमारी से पीड़ित एक बुजुर्ग महिला, बैंगलोर की एक शांत आवासीय कॉलोनी में रहती हैं। उनके पड़ोसी, मिस्टर सिंह ने हाल ही में अपने गैरेज को बढ़ईगिरी (carpentry) वर्कशॉप में बदल दिया। उन्होंने भारी बिजली की आरी और हथौड़े लगाए जो प्रतिदिन सुबह 8 बजे से रात 8 बजे तक चलते हैं, जिससे बहरा करने वाला शोर और लकड़ी का बुरादा उड़कर श्रीमती अय्यर के घर में आता है। दिन के दौरान आराम करना या सोना श्रीमती अय्यर के लिए असंभव हो जाता है, जिससे उनकी स्वास्थ्य समस्याएं बढ़ जाती हैं। उन्होंने मिस्टर सिंह से काम के घंटे सीमित करने या गैरेज को साउंडप्रूफ करने का अनुरोध किया, लेकिन उन्होंने यह तर्क देते हुए मना कर दिया कि यह उनकी निजी संपत्ति है और उन्हें अपनी आजीविका के लिए इसका उपयोग करने का अधिकार है। उनका दावा है कि चूंकि वह रात 8 बजे तक बंद कर देते हैं, इसलिए वह कानून का पालन कर रहे हैं। हताश होकर, श्रीमती अय्यर ने 'निजी उपद्रव' (Private Nuisance) के लिए मुकदमा दायर किया और कार्यशाला को रोकने के लिए निषेधाज्ञा (Injunction) की मांग की।"
        },
        questions: [
            {
                id: 1,
                text: {
                    en: "Does owning property give Mr. Singh the right to make unlimited noise?",
                    hi: "क्या संपत्ति का मालिक होने से मिस्टर सिंह को असीमित शोर करने का अधिकार मिल जाता है?"
                },
                options: {
                    en: ["Yes, ownership is absolute.", "No, property rights are restricted by the duty not to cause nuisance to neighbors.", "Yes, as long as it is day time.", "No, unless he pays a noise tax."],
                    hi: ["हाँ, स्वामित्व पूर्ण है।", "नहीं, पड़ोसियों को परेशानी न देने के कर्तव्य द्वारा संपत्ति के अधिकार सीमित हैं।", "हाँ, जब तक दिन का समय है।", "नहीं, जब तक कि वह शोर कर का भुगतान नहीं करता।"]
                },
                correctAnswer: 1,
                explanation: {
                    en: "The law of Torts states that one cannot use their property in a way that unreasonably interferes with another's enjoyment of their property (Nuisance).",
                    hi: "टॉर्ट्स का कानून कहता है कि कोई भी अपनी संपत्ति का उपयोग इस तरह से नहीं कर सकता है जो दूसरे द्वारा अपनी संपत्ति के आनंद में अनुचित रूप से हस्तक्षेप करता है (उपद्रव)।"
                }
            },
            {
                id: 2,
                text: {
                    en: "What is an 'Injunction'?",
                    hi: "'निषेधाज्ञा' (Injunction) क्या है?"
                },
                options: {
                    en: ["A monetary fine.", "A court order requiring a person to do or stop doing a specific action.", "A prison sentence.", "A written apology."],
                    hi: ["एक आर्थिक जुर्माना।", "एक अदालत का आदेश जिसमें किसी व्यक्ति को कोई विशिष्ट कार्य करने या करने से रोकने की आवश्यकता होती है।", "एक जेल की सजा।", "एक लिखित माफी।"]
                },
                correctAnswer: 1,
                explanation: {
                    en: "An injunction is a judicial remedy ordering a party to cease a specific act (like making loud noise).",
                    hi: "निषेधाज्ञा एक न्यायिक उपाय है जो एक पक्ष को एक विशिष्ट कार्य (जैसे तेज शोर करना) को रोकने का आदेश देता है।"
                }
            }
        ]
    },
    {
        id: 3,
        category: "Criminal Law",
        difficulty: "Hard",
        title: {
            en: "Self-Defense or Murder?",
            hi: "आत्मरक्षा या हत्या?"
        },
        passage: {
            en: "Late one night, Rahul was walking home alone when he was cornered by two men, Raj and Vikram, in a dark alley. Raj pulled out a knife and demanded Rahul's wallet and watch. Rahul handed them over, but Vikram then started punching Rahul aggressively. Fearing for his life, Rahul noticed a heavy brick lying on the ground. As Vikram lunged at him again, Rahul grabbed the brick and struck Vikram on the head with full force. Vikram collapsed and later died in the hospital due to severe head trauma. Rahul was charged with Culpable Homicide. He pleaded 'Right of Private Defense', stating he only acted to save his life. The prosecution argued that Rahul used excessive force since he was unarmed when he picked up the brick.",
            hi: "एक रात देर से, राहुल अकेले घर जा रहा था, तभी एक अंधेरी गली में दो आदमियों, राज और विक्रम ने उसे घेर लिया। राज ने चाकू निकाला और राहुल का बटुआ और घड़ी मांगी। राहुल ने उन्हें सौंप दिया, लेकिन विक्रम ने फिर राहुल को आक्रामक तरीके से मुक्का मारना शुरू कर दिया। अपनी जान के डर से, राहुल ने जमीन पर एक भारी ईंट पड़ी देखी। जैसे ही विक्रम उस पर फिर से झपटा, राहुल ने ईंट उठाई और पूरी ताकत से विक्रम के सिर पर दे मारी। विक्रम गिर पड़ा और बाद में गंभीर सिर की चोट के कारण अस्पताल में उसकी मृत्यु हो गई। राहुल पर गैर इरादतन हत्या (Culpable Homicide) का आरोप लगाया गया। उसने 'निजी रक्षा का अधिकार' (Right of Private Defense) की दलील दी, यह कहते हुए कि उसने केवल अपनी जान बचाने के लिए काम किया। अभियोजन पक्ष ने तर्क दिया कि राहुल ने अत्यधिक बल का प्रयोग किया क्योंकि ईंट उठाते समय वह निहत्था था।"
        },
        questions: [
            {
                id: 1,
                text: {
                    en: "Is causing death allowed in Self-Defense?",
                    hi: "क्या आत्मरक्षा में मृत्यु कारित करने की अनुमति है?"
                },
                options: {
                    en: ["Never.", "Yes, if there is a reasonable apprehension of death or grievous hurt.", "Only against armed soldiers.", "Yes, for any theft."],
                    hi: ["कभी नहीं।", "हाँ, यदि मृत्यु या गंभीर चोट की उचित आशंका हो।", "केवल सशस्त्र सैनिकों के खिलाफ।", "हाँ, किसी भी चोरी के लिए।"]
                },
                correctAnswer: 1,
                explanation: {
                    en: "Section 100 of the IPC allows the right of private defense to extend to causing death if there is an apprehension of death or grievous hurt.",
                    hi: "IPC की धारा 100 निजी रक्षा के अधिकार को मृत्यु कारित करने तक बढ़ाने की अनुमति देती है यदि मृत्यु या गंभीर चोट की आशंका हो।"
                }
            },
            {
                id: 2,
                text: {
                    en: "Did Rahul use excessive force?",
                    hi: "क्या राहुल ने अत्यधिक बल प्रयोग किया?"
                },
                options: {
                    en: ["Yes, he should have run away.", "No, in the heat of the moment, perfect calculation of force is not expected.", "Yes, bricks are illegal weapons.", "No, he should have hit harder."],
                    hi: ["हाँ, उसे भाग जाना चाहिए था।", "नहीं, उस क्षण की गर्मी में, बल की सही गणना की उम्मीद नहीं की जाती है।", "हाँ, ईंटें अवैध हथियार हैं।", "नहीं, उसे और जोर से मारना चाहिए था।"]
                },
                correctAnswer: 1,
                explanation: {
                    en: "Courts generally hold that a person under attack cannot be expected to modulate their defense with golden scales. The force seemed necessary for survival.",
                    hi: "अदालतें आम तौर पर मानती हैं कि हमले के तहत एक व्यक्ति से सुनहरे तराजू के साथ अपनी रक्षा को नियंत्रित करने की उम्मीद नहीं की जा सकती है। जीवित रहने के लिए बल आवश्यक लग रहा था।"
                }
            }
        ]
    },
    {
        id: 4,
        category: "Constitution",
        difficulty: "Hard",
        title: {
            en: "Freedom of Speech vs. Hate Speech",
            hi: "अभिव्यक्ति की स्वतंत्रता बनाम अभद्र भाषा"
        },
        passage: {
            en: "A popular student leader, Mr. X, gave a fiery speech at a university campus. In his speech, he criticized the government's economic policies harshly, calling the ministers 'incompetent' and 'corrupt'. However, towards the end, he shouted slogans calling for a specific community to be boycotted socially and economically. The police arrested him under Section 153A of the IPC for promoting enmity between groups. Mr. X challenged the arrest in the High Court, claiming his Fundamental Right to Freedom of Speech and Expression under Article 19(1)(a) of the Constitution. He argued that in a democracy, dissent and criticism of the government are essential and protected rights.",
            hi: "एक लोकप्रिय छात्र नेता, मिस्टर एक्स ने विश्वविद्यालय परिसर में एक उग्र भाषण दिया। अपने भाषण में, उन्होंने सरकार की आर्थिक नीतियों की कड़ी आलोचना की, मंत्रियों को 'अक्षम' और 'भ्रष्ट' कहा। हालांकि, अंत में, उन्होंने एक विशिष्ट समुदाय का सामाजिक और आर्थिक रूप से बहिष्कार करने के लिए नारे लगाए। पुलिस ने समूहों के बीच शत्रुता को बढ़ावा देने के लिए IPC की धारा 153A के तहत उन्हें गिरफ्तार किया। मिस्टर एक्स ने संविधान के अनुच्छेद 19(1)(a) के तहत अपने भाषण और अभिव्यक्ति की स्वतंत्रता के मौलिक अधिकार का दावा करते हुए उच्च न्यायालय में गिरफ्तारी को चुनौती दी। उन्होंने तर्क दिया कि लोकतंत्र में, असहमति और सरकार की आलोचना आवश्यक और संरक्षित अधिकार हैं।"
        },
        questions: [
            {
                id: 1,
                text: {
                    en: "Is Freedom of Speech absolute in India?",
                    hi: "क्या भारत में अभिव्यक्ति की स्वतंत्रता निरपेक्ष (Absolute) है?"
                },
                options: {
                    en: ["Yes, absolutely.", "No, it is subject to 'reasonable restrictions'.", "Yes, for politicians only.", "No, only for press."],
                    hi: ["हाँ, बिल्कुल।", "नहीं, यह 'उचित प्रतिबंधों' (reasonable restrictions) के अधीन है।", "हाँ, केवल राजनेताओं के लिए।", "नहीं, केवल प्रेस के लिए।"]
                },
                correctAnswer: 1,
                explanation: {
                    en: "Article 19(2) allows the state to impose reasonable restrictions on speech in the interests of public order, morality, and sovereignty.",
                    hi: "अनुच्छेद 19(2) राज्य को सार्वजनिक व्यवस्था, नैतिकता और संप्रभुता के हित में भाषण पर उचित प्रतिबंध लगाने की अनुमति देता है।"
                }
            },
            {
                id: 2,
                text: {
                    en: "Does criticizing the government amount to Hate Speech?",
                    hi: "क्या सरकार की आलोचना करना 'हेट स्पीच' (Hate Speech) है?"
                },
                options: {
                    en: ["Yes, always.", "No, criticism of government is protected; calling for boycott of a community is not.", "Only if it is loud.", "Yes, if the Prime Minister is offended."],
                    hi: ["हाँ, हमेशा।", "नहीं, सरकार की आलोचना सुरक्षित है; किसी समुदाय के बहिष्कार का आह्वान करना नहीं है।", "केवल अगर यह जोर से हो।", "हाँ, अगर प्रधानमंत्री अपमानित महसूस करें।"]
                },
                correctAnswer: 1,
                explanation: {
                    en: "Sedition or Hate Speech laws do not apply to criticism of government measures. They apply when speech incites violence or public disorder against a group.",
                    hi: "राजद्रोह या हेट स्पीच कानून सरकारी उपायों की आलोचना पर लागू नहीं होते हैं। वे तब लागू होते हैं जब भाषण किसी समूह के खिलाफ हिंसा या सार्वजनिक अव्यवस्था को भड़काता है।"
                }
            }
        ]
    },
    {
        id: 5,
        category: "Consumer Law",
        difficulty: "Easy",
        title: {
            en: "Defective Goods and Service",
            hi: "दोषपूर्ण सामान और सेवा"
        },
        passage: {
            en: "Ms. Anita bought a brand new refrigerator for ₹40,000 from 'Cool Home Appliances'. The shopkeeper assured a 5-year warranty. However, within 10 days, the refrigerator stopped cooling. Ms. Anita called the shop multiple times, but they kept delaying the service. Finally, a technician came after a month and said the compressor was faulty but refused to replace it for free, demanding ₹5,000. Ms. Anita showed the warranty card, but the shopkeeper said, 'Warranty does not cover voltage fluctuation issues', even though no fluctuation had occurred. Feeling cheated, Ms. Anita wants to file a complaint.",
            hi: "सुश्री अनीता ने 'कूल होम एप्लायंसेज' से ₹40,000 में एक बिल्कुल नया रेफ्रिजरेटर खरीदा। दुकानदार ने 5 साल की वारंटी का आश्वासन दिया। हालांकि, 10 दिनों के भीतर, रेफ्रिजरेटर ने ठंडा करना बंद कर दिया। सुश्री अनीता ने दुकान पर कई बार फोन किया, लेकिन वे सेवा में देरी करते रहे। अंत में, एक महीने बाद एक तकनीशियन आया और कहा कि कंप्रेसर खराब है, लेकिन उसने इसे मुफ्त में बदलने से इनकार कर दिया, और ₹5,000 की मांग की। सुश्री अनीता ने वारंटी कार्ड दिखाया, लेकिन दुकानदार ने कहा, 'वारंटी वोल्टेज उतार-चढ़ाव के मुद्दों को कवर नहीं करती है', भले ही कोई उतार-चढ़ाव नहीं हुआ था। ठगा हुआ महसूस करते हुए सुश्री अनीता शिकायत दर्ज कराना चाहती हैं।"
        },
        questions: [
            {
                id: 1,
                text: {
                    en: "Where should Ms. Anita file her complaint?",
                    hi: "सुश्री अनीता को अपनी शिकायत कहाँ दर्ज करनी चाहिए?"
                },
                options: {
                    en: ["Supreme Court directly.", "Police Station.", "Consumer Disputes Redressal Commission (Consumer Court).", "Local Panchayat."],
                    hi: ["सीधे सुप्रीम कोर्ट।", "पुलिस स्टेशन।", "उपभोक्ता विवाद निवारण आयोग (उपभोक्ता न्यायालय)।", "स्थानीय पंचायत।"]
                },
                correctAnswer: 2,
                explanation: {
                    en: "Consumer Courts are specifically established to handle disputes regarding defective goods and deficiency in services.",
                    hi: "दोषपूर्ण सामानों और सेवाओं में कमी से संबंधित विवादों को संभालने के लिए विशेष रूप से उपभोक्ता न्यायालय स्थापित किए गए हैं।"
                }
            },
            {
                id: 2,
                text: {
                    en: "What is 'Deficiency in Service' here?",
                    hi: "यहाँ 'सेवा में कमी' (Deficiency in Service) क्या है?"
                },
                options: {
                    en: ["The fridge being white in color.", "Refusing to honor the warranty and delay in repair.", "Selling expensive items.", "The technician being rude."],
                    hi: ["फ्रिज का रंग सफेद होना।", "वारंटी का सम्मान करने से इनकार करना और मरम्मत में देरी।", "महंगी चीजें बेचना।", "तकनीशियन का असभ्य होना।"]
                },
                correctAnswer: 1,
                explanation: {
                    en: "Refusing authorized warranty claims and unreasonable delay constitutes deficiency in service under the Consumer Protection Act.",
                    hi: "उपभोक्ता संरक्षण अधिनियम के तहत अधिकृत वारंटी दावों और अनुचित देरी से इनकार करना सेवा में कमी है।"
                }
            }
        ]
    },
    // Add these cases to your existing caseData.js file

    {
        id: 6,
        category: "Family Law",
        difficulty: "Medium",
        title: {
            en: "The Custody Battle",
            hi: "हिरासत की लड़ाई"
        },
        passage: {
            en: "Mr. and Mrs. Desai filed for divorce after 10 years of marriage. They have a 7-year-old daughter, Priya. Mr. Desai is a successful businessman who travels frequently for work, earning ₹15 lakhs per month. Mrs. Desai is a homemaker who has been the primary caregiver since Priya's birth. During the divorce proceedings, Mr. Desai demanded full custody, arguing that his financial stability could provide Priya with better education and opportunities. He claimed Mrs. Desai had no independent income and lived in his parents' house. Mrs. Desai contested this, stating that Priya needs her mother's care and emotional support. She highlighted that Mr. Desai is rarely home and often returns late at night. She also mentioned that Priya has expressed her wish to stay with her mother. The Family Court must now decide on custody based on the 'best interest of the child' principle.",
            hi: "श्री और श्रीमती देसाई ने 10 साल की शादी के बाद तलाक के लिए आवेदन किया। उनकी एक 7 साल की बेटी प्रिया है। श्री देसाई एक सफल व्यापारी हैं जो काम के लिए अक्सर यात्रा करते हैं और प्रति महीने ₹15 लाख कमाते हैं। श्रीमती देसाई एक गृहिणी हैं जो प्रिया के जन्म से प्राथमिक देखभालकर्ता रही हैं। तलाक की कार्यवाही के दौरान, श्री देसाई ने पूर्ण हिरासत की मांग की, यह तर्क देते हुए कि उनकी वित्तीय स्थिरता प्रिया को बेहतर शिक्षा और अवसर प्रदान कर सकती है। उन्होंने दावा किया कि श्रीमती देसाई की कोई स्वतंत्र आय नहीं है और वह उनके माता-पिता के घर में रहती हैं। श्रीमती देसाई ने इसका विरोध किया, यह कहते हुए कि प्रिया को अपनी मां की देखभाल और भावनात्मक समर्थन की आवश्यकता है। उन्होंने इस बात पर प्रकाश डाला कि श्री देसाई शायद ही कभी घर पर होते हैं और अक्सर देर रात लौटते हैं। उन्होंने यह भी उल्लेख किया कि प्रिया ने अपनी मां के साथ रहने की इच्छा व्यक्त की है। पारिवारिक न्यायालय को अब 'बच्चे के सर्वोत्तम हित' सिद्धांत के आधार पर हिरासत पर निर्णय लेना होगा।"
        },
        questions: [
            {
            id: 1,
            text: {
                en: "What is the primary consideration in child custody cases?",
                hi: "बाल हिरासत मामलों में प्राथमिक विचार क्या है?"
            },
            options: {
                en: [
                "Father's financial status.",
                "Mother's homemaking skills.",
                "Best interest and welfare of the child.",
                "Grandparents' wishes."
                ],
                hi: [
                "पिता की वित्तीय स्थिति।",
                "मां के गृहकार्य कौशल।",
                "बच्चे का सर्वोत्तम हित और कल्याण।",
                "दादा-दादी की इच्छाएं।"
                ]
            },
            correctAnswer: 2,
            explanation: {
                en: "Under the Hindu Minority and Guardianship Act and Guardian and Wards Act, the paramount consideration is the welfare and best interest of the child, not the parents' wealth or gender.",
                hi: "हिंदू अल्पसंख्यक और संरक्षकता अधिनियम और संरक्षक और वार्ड अधिनियम के तहत, सर्वोपरि विचार बच्चे का कल्याण और सर्वोत्तम हित है, न कि माता-पिता की संपत्ति या लिंग।"
            }
            },
            {
            id: 2,
            text: {
                en: "Can the child's preference be considered?",
                hi: "क्या बच्चे की प्राथमिकता पर विचार किया जा सकता है?"
            },
            options: {
                en: [
                "No, children have no say.",
                "Yes, if the child is of sufficient age and understanding.",
                "Only if the child is above 18.",
                "Only if both parents agree."
                ],
                hi: [
                "नहीं, बच्चों की कोई राय नहीं है।",
                "हाँ, यदि बच्चा पर्याप्त उम्र और समझ का है।",
                "केवल तभी जब बच्चा 18 वर्ष से अधिक का हो।",
                "केवल तभी जब दोनों माता-पिता सहमत हों।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Courts do consider the wishes of a child who is mature enough to form an intelligent preference, typically around 7-9 years of age, though it's not the sole deciding factor.",
                hi: "न्यायालय एक बच्चे की इच्छाओं पर विचार करता है जो एक बुद्धिमान प्राथमिकता बनाने के लिए पर्याप्त परिपक्व है, आमतौर पर 7-9 वर्ष की आयु के आसपास, हालांकि यह एकमात्र निर्णायक कारक नहीं है।"
            }
            }
        ]
        },
        {
        id: 7,
        category: "Cyber Law",
        difficulty: "Medium",
        title: {
            en: "The Phishing Scam",
            hi: "फिशिंग घोटाला"
        },
        passage: {
            en: "Mrs. Kapoor, a 55-year-old retired government employee, received an email that appeared to be from her bank, asking her to verify her account details urgently by clicking on a link. The email warned that her account would be frozen if she didn't comply within 24 hours. Panicked, she clicked the link and entered her internet banking username, password, and OTP on what looked like her bank's website. Within hours, ₹8 lakhs were transferred from her account to multiple unknown accounts. She immediately reported the fraud to the bank and filed an FIR at the cyber crime police station. The bank refused to refund the money, claiming she had violated the terms and conditions by sharing her credentials. The police traced the IP addresses to a location in another state and arrested three individuals running a phishing operation.",
            hi: "श्रीमती कपूर, 55 वर्षीय सेवानिवृत्त सरकारी कर्मचारी को एक ईमेल मिला जो उनके बैंक से प्रतीत होता था, जिसमें उनसे एक लिंक पर क्लिक करके तुरंत अपने खाते के विवरण की पुष्टि करने के लिए कहा गया था। ईमेल ने चेतावनी दी कि यदि वह 24 घंटे के भीतर पालन नहीं करती हैं तो उनका खाता फ्रीज कर दिया जाएगा। घबराकर, उन्होंने लिंक पर क्लिक किया और अपने बैंक की वेबसाइट की तरह दिखने वाली साइट पर अपना इंटरनेट बैंकिंग उपयोगकर्ता नाम, पासवर्ड और OTP दर्ज किया। कुछ ही घंटों में, उनके खाते से ₹8 लाख कई अज्ञात खातों में स्थानांतरित कर दिए गए। उन्होंने तुरंत बैंक को धोखाधड़ी की सूचना दी और साइबर क्राइम पुलिस स्टेशन में FIR दर्ज कराई। बैंक ने पैसे वापस करने से इनकार कर दिया, यह दावा करते हुए कि उन्होंने अपनी साख साझा करके नियम और शर्तों का उल्लंघन किया है। पुलिस ने IP पतों का पता लगाया जो दूसरे राज्य में एक स्थान पर था और फिशिंग ऑपरेशन चलाने वाले तीन व्यक्तियों को गिरफ्तार किया।"
        },
        questions: [
            {
            id: 1,
            text: {
                en: "Under which law can the fraudsters be prosecuted?",
                hi: "धोखेबाजों पर किस कानून के तहत मुकदमा चलाया जा सकता है?"
            },
            options: {
                en: [
                "Only under IPC for cheating.",
                "Information Technology Act, 2000 and IPC.",
                "Only cyber insurance law.",
                "Consumer Protection Act only."
                ],
                hi: [
                "केवल धोखाधड़ी के लिए IPC के तहत।",
                "सूचना प्रौद्योगिकी अधिनियम, 2000 और IPC।",
                "केवल साइबर बीमा कानून।",
                "केवल उपभोक्ता संरक्षण अधिनियम।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Phishing and identity theft are punishable under Section 66C and 66D of the IT Act, 2000, along with Section 420 (cheating) of the IPC.",
                hi: "फिशिंग और पहचान की चोरी IT अधिनियम, 2000 की धारा 66C और 66D के तहत दंडनीय है, साथ ही IPC की धारा 420 (धोखाधड़ी) के तहत भी।"
            }
            },
            {
            id: 2,
            text: {
                en: "Is the bank liable to refund Mrs. Kapoor?",
                hi: "क्या बैंक श्रीमती कपूर को धनवापसी के लिए उत्तरदायी है?"
            },
            options: {
                en: [
                "No, she shared her credentials voluntarily.",
                "Yes, banks must compensate victims of cyber fraud under RBI guidelines if reported promptly.",
                "Only if she had cyber insurance.",
                "Yes, but only 50% of the amount."
                ],
                hi: [
                "नहीं, उन्होंने स्वेच्छा से अपनी साख साझा की।",
                "हाँ, यदि समय पर रिपोर्ट की गई तो RBI दिशानिर्देशों के तहत बैंकों को साइबर धोखाधड़ी के पीड़ितों को मुआवजा देना होगा।",
                "केवल तभी जब उसके पास साइबर बीमा हो।",
                "हाँ, लेकिन केवल राशि का 50%।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "RBI has issued guidelines mandating banks to have a customer protection policy and compensate victims of unauthorized electronic transactions if reported within specified time limits.",
                hi: "RBI ने बैंकों को ग्राहक संरक्षण नीति रखने और निर्दिष्ट समय सीमा के भीतर रिपोर्ट किए जाने पर अनधिकृत इलेक्ट्रॉनिक लेनदेन के पीड़ितों को मुआवजा देने का निर्देश जारी किया है।"
            }
            }
        ]
        },
        {
        id: 8,
        category: "Environmental Law",
        difficulty: "Hard",
        title: {
            en: "Factory Pollution Crisis",
            hi: "कारखाना प्रदूषण संकट"
        },
        passage: {
            en: "A chemical factory owned by 'ChemTech Industries' has been operating in the outskirts of Kanpur for 15 years. Recently, residents of the nearby village, Rampur, noticed that their groundwater had turned yellowish and had a foul smell. Several children and elderly people developed skin rashes and respiratory problems. An environmental activist, Mr. Verma, collected water samples and sent them to a government laboratory. The report confirmed the presence of heavy metals like lead and mercury, far exceeding permissible limits. Mr. Verma filed a Public Interest Litigation (PIL) in the High Court against ChemTech Industries and the State Pollution Control Board, demanding immediate closure of the factory and compensation for affected villagers. The factory management argued that they have all necessary clearances and claimed the pollution might be from agricultural runoff. They also stated that closing the factory would render 500 workers unemployed.",
            hi: "'केमटेक इंडस्ट्रीज' के स्वामित्व वाली एक रासायनिक फैक्टरी कानपुर के बाहरी इलाके में 15 वर्षों से काम कर रही है। हाल ही में, पास के गांव रामपुर के निवासियों ने देखा कि उनका भूजल पीला हो गया है और उसमें दुर्गंध आ रही है। कई बच्चों और बुजुर्गों को त्वचा पर चकत्ते और श्वसन संबंधी समस्याएं विकसित हुईं। एक पर्यावरण कार्यकर्ता, श्री वर्मा ने पानी के नमूने एकत्र किए और उन्हें सरकारी प्रयोगशाला में भेजा। रिपोर्ट ने सीसा और पारा जैसी भारी धातुओं की उपस्थिति की पुष्टि की, जो स्वीकार्य सीमा से कहीं अधिक थी। श्री वर्मा ने केमटेक इंडस्ट्रीज और राज्य प्रदूषण नियंत्रण बोर्ड के खिलाफ उच्च न्यायालय में जनहित याचिका (PIL) दायर की, जिसमें फैक्टरी को तत्काल बंद करने और प्रभावित ग्रामीणों को मुआवजा देने की मांग की। फैक्टरी प्रबंधन ने तर्क दिया कि उनके पास सभी आवश्यक अनुमतियां हैं और दावा किया कि प्रदूषण कृषि अपवाह से हो सकता है। उन्होंने यह भी कहा कि फैक्टरी बंद करने से 500 श्रमिक बेरोजगार हो जाएंगे।"
        },
        questions: [
            {
            id: 1,
            text: {
                en: "What is a Public Interest Litigation (PIL)?",
                hi: "जनहित याचिका (PIL) क्या है?"
            },
            options: {
                en: [
                "A litigation filed by politicians only.",
                "A legal action initiated for the protection of public interest, even by non-affected parties.",
                "A petition for personal compensation.",
                "A criminal complaint."
                ],
                hi: [
                "केवल राजनेताओं द्वारा दायर मुकदमा।",
                "सार्वजनिक हित की रक्षा के लिए शुरू की गई कानूनी कार्रवाई, यहां तक कि गैर-प्रभावित पक्षों द्वारा भी।",
                "व्यक्तिगत मुआवजे के लिए याचिका।",
                "एक आपराधिक शिकायत।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "PIL allows any citizen to approach the court for relief in matters of public interest, especially for rights of marginalized communities and environmental protection.",
                hi: "PIL किसी भी नागरिक को सार्वजनिक हित के मामलों में, विशेष रूप से हाशिए के समुदायों और पर्यावरण संरक्षण के अधिकारों के लिए अदालत से संपर्क करने की अनुमति देता है।"
            }
            },
            {
            id: 2,
            text: {
                en: "Which principle of environmental law applies here?",
                hi: "यहां पर्यावरण कानून का कौन सा सिद्धांत लागू होता है?"
            },
            options: {
                en: [
                "Caveat Emptor (Buyer Beware).",
                "Polluter Pays Principle - the polluter must bear the cost of pollution control and compensation.",
                "Doctrine of Pleasure.",
                "Res Judicata."
                ],
                hi: [
                "कैवेट एम्प्टर (खरीदार सावधान)।",
                "प्रदूषक भुगतान सिद्धांत - प्रदूषक को प्रदूषण नियंत्रण और मुआवजे की लागत वहन करनी चाहिए।",
                "प्रसाद का सिद्धांत।",
                "रेस जुडिकाटा।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "The 'Polluter Pays Principle' is enshrined in environmental jurisprudence and holds that industries causing pollution must bear the costs of remediation and compensation.",
                hi: "'प्रदूषक भुगतान सिद्धांत' पर्यावरण न्यायशास्त्र में निहित है और यह मानता है कि प्रदूषण पैदा करने वाले उद्योगों को उपचार और मुआवजे की लागत वहन करनी चाहिए।"
            }
            }
        ]
        },
        {
        id: 9,
        category: "Property Law",
        difficulty: "Hard",
        title: {
            en: "The Tenant Eviction Dispute",
            hi: "किरायेदार की बेदखली का विवाद"
        },
        passage: {
            en: "Mr. Patel owns a two-story building in Mumbai. He rented out the ground floor to Mr. Khan 20 years ago for ₹5,000 per month. Mr. Khan has been running a small grocery store there. Over the years, Mr. Khan has been a regular tenant, paying rent on time. However, Mr. Patel now wants to evict Mr. Khan because he wants to demolish the old building and construct a modern commercial complex. He served an eviction notice citing that the building is old and needs major repairs. Mr. Khan refused to vacate, arguing that under the Maharashtra Rent Control Act, he cannot be evicted without just cause, and mere desire to redevelop is not sufficient. Mr. Khan also claimed that he has been paying rent regularly and has acquired tenancy rights. Mr. Patel filed an eviction suit in the Rent Control Court.",
            hi: "श्री पटेल मुंबई में दो मंजिला इमारत के मालिक हैं। उन्होंने 20 साल पहले श्री खान को ₹5,000 प्रति माह पर भूतल किराए पर दिया था। श्री खान वहां एक छोटी किराना दुकान चला रहे हैं। वर्षों से, श्री खान एक नियमित किरायेदार रहे हैं, समय पर किराया देते रहे हैं। हालांकि, श्री पटेल अब श्री खान को बेदखल करना चाहते हैं क्योंकि वह पुरानी इमारत को ध्वस्त करके एक आधुनिक वाणिज्यिक परिसर का निर्माण करना चाहते हैं। उन्होंने बेदखली का नोटिस दिया जिसमें कहा गया कि इमारत पुरानी है और इसे बड़ी मरम्मत की आवश्यकता है। श्री खान ने खाली करने से इनकार कर दिया, यह तर्क देते हुए कि महाराष्ट्र किराया नियंत्रण अधिनियम के तहत, उन्हें बिना उचित कारण के बेदखल नहीं किया जा सकता है, और पुनर्विकास की केवल इच्छा पर्याप्त नहीं है। श्री खान ने यह भी दावा किया कि वह नियमित रूप से किराया दे रहे हैं और उन्होंने किरायेदारी अधिकार प्राप्त कर लिए हैं। श्री पटेल ने किराया नियंत्रण न्यायालय में बेदखली का मुकदमा दायर किया।"
        },
        questions: [
            {
            id: 1,
            text: {
                en: "Can a landlord evict a tenant simply to redevelop the property?",
                hi: "क्या एक मकान मालिक केवल संपत्ति को पुनर्विकसित करने के लिए किरायेदार को बेदखल कर सकता है?"
            },
            options: {
                en: [
                "Yes, the landlord has absolute rights.",
                "No, Rent Control Acts protect long-term tenants from arbitrary eviction.",
                "Yes, if he pays double compensation.",
                "No, tenants can never be evicted."
                ],
                hi: [
                "हाँ, मकान मालिक के पास पूर्ण अधिकार हैं।",
                "नहीं, किराया नियंत्रण अधिनियम दीर्घकालिक किरायेदारों को मनमाने बेदखली से बचाते हैं।",
                "हाँ, यदि वह दोगुना मुआवजा देता है।",
                "नहीं, किरायेदारों को कभी बेदखल नहीं किया जा सकता।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Under various Rent Control Acts, tenants have significant protection. Eviction is allowed only on specific grounds like personal necessity, default in rent, or subletting without permission.",
                hi: "विभिन्न किराया नियंत्रण अधिनियमों के तहत, किरायेदारों को महत्वपूर्ण सुरक्षा प्राप्त है। बेदखली केवल विशिष्ट आधारों पर अनुमति है जैसे व्यक्तिगत आवश्यकता, किराए में चूक, या अनुमति के बिना उप-पट्टे पर देना।"
            }
            },
            {
            id: 2,
            text: {
                en: "What are 'Tenancy Rights'?",
                hi: "'किरायेदारी अधिकार' (Tenancy Rights) क्या हैं?"
            },
            options: {
                en: [
                "Rights to buy the property at a discount.",
                "Legal protection against arbitrary eviction and right to fair rent.",
                "Right to sublet without permission.",
                "Right to refuse all rent increases."
                ],
                hi: [
                "छूट पर संपत्ति खरीदने के अधिकार।",
                "मनमाने बेदखली के खिलाफ कानूनी सुरक्षा और उचित किराए का अधिकार।",
                "बिना अनुमति के उप-पट्टे पर देने का अधिकार।",
                "सभी किराया वृद्धि को मना करने का अधिकार।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Tenancy rights include protection from unlawful eviction, right to fair rent, peaceful possession, and in some cases, right to renew the lease.",
                hi: "किरायेदारी अधिकारों में गैरकानूनी बेदखली से सुरक्षा, उचित किराए का अधिकार, शांतिपूर्ण कब्जा, और कुछ मामलों में, पट्टे को नवीनीकृत करने का अधिकार शामिल है।"
            }
            }
        ]
        },
        {
        id: 10,
        category: "Labor Law",
        difficulty: "Medium",
        title: {
            en: "The Unpaid Overtime Case",
            hi: "अवैतनिक ओवरटाइम का मामला"
        },
        passage: {
            en: "Ramesh works as a software developer at 'TechCorp Pvt Ltd' in Pune. His employment contract states that he works 9 hours a day, 6 days a week. However, for the past 8 months, his manager has been forcing him to work 12-14 hours daily, including Sundays, to meet project deadlines. Ramesh was promised overtime pay, but the company never paid him for the extra hours. When he raised the issue, the HR told him that as a salaried employee, he is not entitled to overtime pay. Exhausted and frustrated, Ramesh decided to quit. Before leaving, he filed a complaint with the Labor Commissioner demanding payment for overtime work as per the Factories Act and Shops and Establishments Act. TechCorp argued that IT employees are exempt from these laws and that Ramesh voluntarily worked extra hours.",
            hi: "रमेश पुणे में 'टेककॉर्प प्राइवेट लिमिटेड' में एक सॉफ्टवेयर डेवलपर के रूप में काम करता है। उसके रोजगार अनुबंध में कहा गया है कि वह दिन में 9 घंटे, सप्ताह में 6 दिन काम करता है। हालांकि, पिछले 8 महीनों से, उसका प्रबंधक उसे परियोजना की समय सीमा को पूरा करने के लिए रविवार सहित प्रतिदिन 12-14 घंटे काम करने के लिए मजबूर कर रहा है। रमेश को ओवरटाइम वेतन का वादा किया गया था, लेकिन कंपनी ने उसे अतिरिक्त घंटों के लिए कभी भुगतान नहीं किया। जब उसने मुद्दा उठाया, तो HR ने उसे बताया कि वेतनभोगी कर्मचारी के रूप में, वह ओवरटाइम वेतन का हकदार नहीं है। थका हुआ और निराश होकर, रमेश ने छोड़ने का फैसला किया। जाने से पहले, उसने फैक्ट्री अधिनियम और दुकान और प्रतिष्ठान अधिनियम के अनुसार ओवरटाइम कार्य के भुगतान की मांग करते हुए श्रम आयुक्त के पास शिकायत दर्ज कराई। टेककॉर्प ने तर्क दिया कि IT कर्मचारी इन कानूनों से मुक्त हैं और रमेश ने स्वेच्छा से अतिरिक्त घंटे काम किया।"
        },
        questions: [
            {
            id: 1,
            text: {
                en: "Are IT employees entitled to overtime pay?",
                hi: "क्या IT कर्मचारी ओवरटाइम वेतन के हकदार हैं?"
            },
            options: {
                en: [
                "No, all IT employees are exempt.",
                "Yes, unless specifically exempted under state labor laws and earning above threshold.",
                "Only if they work on Sundays.",
                "Yes, but only for government IT jobs."
                ],
                hi: [
                "नहीं, सभी IT कर्मचारी मुक्त हैं।",
                "हाँ, जब तक राज्य श्रम कानूनों के तहत विशेष रूप से छूट नहीं दी गई है और सीमा से ऊपर कमाई नहीं है।",
                "केवल तभी जब वे रविवार को काम करते हैं।",
                "हाँ, लेकिन केवल सरकारी IT नौकरियों के लिए।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "While some states exempt IT employees from certain provisions, many states still require overtime compensation. The exemption often applies only to employees earning above a certain salary threshold.",
                hi: "जबकि कुछ राज्य IT कर्मचारियों को कुछ प्रावधानों से छूट देते हैं, कई राज्यों को अभी भी ओवरटाइम मुआवजे की आवश्यकता होती है। छूट अक्सर केवल एक निश्चित वेतन सीमा से ऊपर कमाने वाले कर्मचारियों पर लागू होती है।"
            }
            },
            {
            id: 2,
            text: {
                en: "What is the legal limit for working hours per week?",
                hi: "प्रति सप्ताह काम के घंटों की कानूनी सीमा क्या है?"
            },
            options: {
                en: [
                "Unlimited for salaried employees.",
                "Generally 48 hours per week with provisions for overtime.",
                "60 hours per week.",
                "There is no limit."
                ],
                hi: [
                "वेतनभोगी कर्मचारियों के लिए असीमित।",
                "आम तौर पर ओवरटाइम के प्रावधानों के साथ प्रति सप्ताह 48 घंटे।",
                "प्रति सप्ताह 60 घंटे।",
                "कोई सीमा नहीं है।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Under the Factories Act and most Shops and Establishments Acts, the maximum working hours are 48 hours per week and 9 hours per day. Exceeding this requires overtime compensation.",
                hi: "फैक्ट्री अधिनियम और अधिकांश दुकान और प्रतिष्ठान अधिनियमों के तहत, अधिकतम काम के घंटे प्रति सप्ताह 48 घंटे और प्रति दिन 9 घंटे हैं। इससे अधिक होने पर ओवरटाइम मुआवजे की आवश्यकता होती है।"
            }
            }
        ]
        },
        {
        id: 11,
        category: "Consumer Law",
        difficulty: "Medium",
        title: {
            en: "The Defective Mobile Phone",
            hi: "दोषपूर्ण मोबाइल फोन"
        },
        passage: {
            en: "Sneha purchased a premium smartphone for ₹65,000 from 'Mobile World' with a manufacturer's warranty of 1 year. After just 3 months, the phone's screen started flickering and the battery began draining rapidly. She took it to the authorized service center, where they kept the phone for 45 days but failed to fix the issue. When she got it back, the same problems persisted. Frustrated, Sneha demanded a replacement or refund from Mobile World. The shopkeeper refused, saying that warranty covers only repairs, not replacement or refund. He also claimed that the damage might be due to Sneha dropping the phone, though she insisted she had not. The service center report made no mention of physical damage. Sneha then filed a complaint in the District Consumer Forum seeking a replacement phone and compensation for mental harassment.",
            hi: "स्नेहा ने 'मोबाइल वर्ल्ड' से 1 साल की निर्माता वारंटी के साथ ₹65,000 में एक प्रीमियम स्मार्टफोन खरीदा। सिर्फ 3 महीने के बाद, फोन की स्क्रीन टिमटिमाने लगी और बैटरी तेजी से खत्म होने लगी। वह इसे अधिकृत सेवा केंद्र में ले गई, जहां उन्होंने फोन को 45 दिनों तक रखा लेकिन समस्या को ठीक करने में विफल रहे। जब उसे वापस मिला, तो वही समस्याएं बनी रहीं। निराश होकर, स्नेहा ने मोबाइल वर्ल्ड से प्रतिस्थापन या धनवापसी की मांग की। दुकानदार ने इनकार कर दिया, यह कहते हुए कि वारंटी केवल मरम्मत को कवर करती है, प्रतिस्थापन या धनवापसी को नहीं। उन्होंने यह भी दावा किया कि क्षति स्नेहा द्वारा फोन गिराने के कारण हो सकती है, हालांकि उसने जोर देकर कहा कि उसने ऐसा नहीं किया था। सेवा केंद्र की रिपोर्ट में भौतिक क्षति का कोई उल्लेख नहीं था। स्नेहा ने फिर जिला उपभोक्ता मंच में प्रतिस्थापन फोन और मानसिक उत्पीड़न के लिए मुआवजे की मांग करते हुए शिकायत दर्ज कराई।"
        },
        questions: [
            {
            id: 1,
            text: {
                en: "What constitutes 'Deficiency in Service' in this case?",
                hi: "इस मामले में 'सेवा में कमी' क्या है?"
            },
            options: {
                en: [
                "The phone being expensive.",
                "Failure to repair the defective product within reasonable time and refusing replacement.",
                "The shopkeeper's rude behavior.",
                "The phone's color."
                ],
                hi: [
                "फोन का महंगा होना।",
                "उचित समय के भीतर दोषपूर्ण उत्पाद की मरम्मत करने में विफलता और प्रतिस्थापन से इनकार।",
                "दुकानदार का असभ्य व्यवहार।",
                "फोन का रंग।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Under the Consumer Protection Act, 2019, deficiency in service includes failure to repair or replace defective goods within a reasonable period, especially when covered under warranty.",
                hi: "उपभोक्ता संरक्षण अधिनियम, 2019 के तहत, सेवा में कमी में उचित अवधि के भीतर दोषपूर्ण सामानों की मरम्मत या प्रतिस्थापन करने में विफलता शामिल है, विशेष रूप से जब वारंटी के तहत कवर किया गया हो।"
                }
            },
            {
            id: 2,
            text: {
                en: "Can Sneha claim compensation for mental harassment?",
                hi: "क्या स्नेहा मानसिक उत्पीड़न के लिए मुआवजे का दावा कर सकती है?"
            },
            options: {
                en: [
                "No, only product replacement is allowed.",
                "Yes, consumer forums can award compensation for mental agony and harassment.",
                "Only if she has a medical certificate.",
                "No, unless she suffered physical injury."
                ],
                hi: [
                "नहीं, केवल उत्पाद प्रतिस्थापन की अनुमति है।",
                "हाँ, उपभोक्ता मंच मानसिक पीड़ा और उत्पीड़न के लिए मुआवजा दे सकते हैं।",
                "केवल तभी जब उसके पास चिकित्सा प्रमाण पत्र हो।",
                "नहीं, जब तक कि उसे शारीरिक चोट न लगी हो।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Consumer forums have the power to award compensation for mental agony, harassment, and loss of time in addition to refund or replacement of defective goods.",
                hi: "उपभोक्ता मंचों को दोषपूर्ण सामानों की धनवापसी या प्रतिस्थापन के अलावा मानसिक पीड़ा, उत्पीड़न और समय की हानि के लिए मुआवजा देने की शक्ति है।"
            }
            }
        ]
        },
        {
        id: 12,
        category: "Constitutional Law",
        difficulty: "Hard",
        title: {
            en: "Right to Privacy vs National Security",
            hi: "गोपनीयता का अधिकार बनाम राष्ट्रीय सुरक्षा"
        },
        passage: {
            en: "The Government of India introduced a new surveillance program requiring all telecom companies and internet service providers to install monitoring equipment that allows government agencies to access user data, including call records, messages, emails, and browsing history, without a warrant. The government justified this measure citing national security concerns and the need to prevent terrorism. A civil rights organization filed a writ petition in the Supreme Court challenging the program as unconstitutional. They argued that it violates the Right to Privacy, which has been recognized as a Fundamental Right under Article 21 (Right to Life and Personal Liberty). The government defended the program, stating that national security is paramount and that the program includes adequate safeguards. They also cited Article 19(2), which allows reasonable restrictions on fundamental rights in the interest of sovereignty and security of the state.",
            hi: "भारत सरकार ने एक नया निगरानी कार्यक्रम शुरू किया जिसमें सभी दूरसंचार कंपनियों और इंटरनेट सेवा प्रदाताओं को निगरानी उपकरण स्थापित करने की आवश्यकता है जो सरकारी एजेंसियों को बिना वारंट के उपयोगकर्ता डेटा, जिसमें कॉल रिकॉर्ड, संदेश, ईमेल और ब्राउज़िंग इतिहास शामिल है, तक पहुंच प्रदान करता है। सरकार ने राष्ट्रीय सुरक्षा चिंताओं और आतंकवाद को रोकने की आवश्यकता का हवाला देते हुए इस उपाय को उचित ठहराया। एक नागरिक अधिकार संगठन ने कार्यक्रम को असंवैधानिक बताते हुए सुप्रीम कोर्ट में रिट याचिका दायर की। उन्होंने तर्क दिया कि यह गोपनीयता के अधिकार का उल्लंघन करता है, जिसे अनुच्छेद 21 (जीवन और व्यक्तिगत स्वतंत्रता का अधिकार) के तहत एक मौलिक अधिकार के रूप में मान्यता दी गई है। सरकार ने कार्यक्रम का बचाव करते हुए कहा कि राष्ट्रीय सुरक्षा सर्वोपरि है और कार्यक्रम में पर्याप्त सुरक्षा उपाय शामिल हैं। उन्होंने अनुच्छेद 19(2) का भी हवाला दिया, जो राज्य की संप्रभुता और सुरक्षा के हित में मौलिक अधिकारों पर उचित प्रतिबंधों की अनुमति देता है।"
        },
        questions: [
            {
            id: 1,
            text: {
                en: "Is the Right to Privacy a Fundamental Right in India?",
                hi: "क्या भारत में गोपनीयता का अधिकार एक मौलिक अधिकार है?"
            },
            options: {
                en: [
                "No, it's only a legal right.",
                "Yes, recognized as part of Right to Life under Article 21 by the Supreme Court.",
                "Only for government employees.",
                "Yes, but only for financial privacy."
                ],
                hi: [
                "नहीं, यह केवल एक कानूनी अधिकार है।",
                "हाँ, सुप्रीम कोर्ट द्वारा अनुच्छेद 21 के तहत जीवन के अधिकार के भाग के रूप में मान्यता प्राप्त है।",
                "केवल सरकारी कर्मचारियों के लिए।",
                "हाँ, लेकिन केवल वित्तीय गोपनीयता के लिए।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "In the landmark Puttaswamy judgment (2017), the Supreme Court unanimously held that the Right to Privacy is a fundamental right protected under Article 21 of the Constitution.",
                hi: "ऐतिहासिक पुट्टस्वामी निर्णय (2017) में, सुप्रीम कोर्ट ने सर्वसम्मति से माना कि गोपनीयता का अधिकार संविधान के अनुच्छेद 21 के तहत संरक्षित एक मौलिक अधिकार है।"
            }
            },
            {
            id: 2,
            text: {
                en: "Can fundamental rights be restricted for national security?",
                hi: "क्या राष्ट्रीय सुरक्षा के लिए मौलिक अधिकारों को प्रतिबंधित किया जा सकता है?"
            },
            options: {
                en: [
                "No, fundamental rights are absolute.",
                "Yes, but restrictions must be reasonable, proportionate, and follow due process.",
                "Yes, government has unlimited power.",
                "No, unless war is declared."
                ],
                hi: [
                "नहीं, मौलिक अधिकार पूर्ण हैं।",
                "हाँ, लेकिन प्रतिबंध उचित, आनुपातिक और उचित प्रक्रिया का पालन करने वाले होने चाहिए।",
                "हाँ, सरकार के पास असीमित शक्ति है।",
                "नहीं, जब तक युद्ध घोषित न हो।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "While Article 19(2) and other provisions allow restrictions on fundamental rights in the interest of national security, such restrictions must pass the test of reasonableness, necessity, and proportionality as per constitutional principles.",
                hi: "जबकि अनुच्छेद 19(2) और अन्य प्रावधान राष्ट्रीय सुरक्षा के हित में मौलिक अधिकारों पर प्रतिबंधों की अनुमति देते हैं, ऐसे प्रतिबंधों को संवैधानिक सिद्धांतों के अनुसार उचितता, आवश्यकता और आनुपातिकता की परीक्षा पास करनी चाहिए।"
            }
            }
        ]
        },
        {
        id: 13,
        category: "Criminal Law",
        difficulty: "Medium",
        title: {
            en: "The Dowry Death Case",
            hi: "दहेज मृत्यु का मामला"
        },
        passage: {
            en: "Priya got married to Amit two years ago. According to Priya's parents, they gave gold jewelry worth ₹5 lakhs and ₹3 lakhs in cash as dowry during the wedding. Six months after marriage, Amit and his mother started demanding a car worth ₹10 lakhs. When Priya's father refused, citing financial difficulties, Priya began facing harassment. Her mother-in-law would taunt her daily, and Amit would beat her occasionally. Priya informed her parents about the abuse, and they tried to mediate but Amit's family was adamant. One day, Priya was found dead in her matrimonial home with severe burn injuries. The in-laws claimed it was an accident while cooking. However, Priya's parents found a suicide note in which she mentioned the constant dowry demands and torture. They filed an FIR under Section 304B IPC (Dowry Death) and Section 498A IPC (Cruelty by husband and in-laws).",
            hi: "प्रिया की शादी दो साल पहले अमित से हुई थी। प्रिया के माता-पिता के अनुसार, उन्होंने शादी के दौरान दहेज के रूप में ₹5 लाख के सोने के गहने और ₹3 लाख नकद दिए। शादी के छह महीने बाद, अमित और उसकी मां ने ₹10 लाख की कार की मांग करना शुरू कर दिया। जब प्रिया के पिता ने वित्तीय कठिनाइयों का हवाला देते हुए इनकार कर दिया, तो प्रिया को उत्पीड़न का सामना करना पड़ा। उसकी सास रोजाना उसे ताना मारती थी, और अमित कभी-कभी उसे पीटता था। प्रिया ने अपने माता-पिता को दुर्व्यवहार के बारे में सूचित किया, और उन्होंने मध्यस्थता करने की कोशिश की लेकिन अमित का परिवार अड़ा रहा। एक दिन, प्रिया अपने ससुराल में गंभीर जलने की चोटों के साथ मृत पाई गई। ससुरालियों ने दावा किया कि खाना बनाते समय यह एक दुर्घटना थी। हालांकि, प्रिया के माता-पिता को एक सुसाइड नोट मिला जिसमें उसने लगातार दहेज की मांगों और यातना का उल्लेख किया था। उन्होंने IPC की धारा 304B (दहेज मृत्यु) और धारा 498A (पति और ससुराल वालों द्वारा क्रूरता) के तहत FIR दर्ज कराई।"
        },
        questions: [
            {
            id: 1,
            text: {
                en: "What is 'Dowry Death' under Section 304B IPC?",
                hi: "IPC की धारा 304B के तहत 'दहेज मृत्यु' क्या है?"
            },
            options: {
                en: [
                "Any death of a married woman.",
                "Death of a woman within 7 years of marriage due to burns or bodily injury, where she was subjected to cruelty for dowry.",
                "Only deaths by hanging.",
                "Death due to natural causes."
                ],
                hi: [
                "किसी विवाहित महिला की कोई भी मृत्यु।",
                "विवाह के 7 वर्षों के भीतर जलने या शारीरिक चोट के कारण एक महिला की मृत्यु, जहां उसे दहेज के लिए क्रूरता के अधीन किया गया था।",
                "केवल फांसी से मौत।",
                "प्राकृतिक कारणों से मृत्यु।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Section 304B defines Dowry Death as the death of a woman caused by burns or bodily injury or occurring otherwise than under normal circumstances within seven years of her marriage, where it is shown that she was subjected to cruelty or harassment for dowry demands.",
                hi: "धारा 304B दहेज मृत्यु को जलने या शारीरिक चोट के कारण होने वाली एक महिला की मृत्यु या उसकी शादी के सात वर्षों के भीतर सामान्य परिस्थितियों के अलावा अन्यथा होने वाली मृत्यु के रूप में परिभाषित करती है, जहां यह दिखाया गया है कि उसे दहेज की मांगों के लिए क्रूरता या उत्पीड़न के अधीन किया गया था।"
            }
            },
            {
            id: 2,
            text: {
                en: "What is the presumption in dowry death cases?",
                hi: "दहेज मृत्यु मामलों में अनुमान क्या है?"
            },
            options: {
                en: [
                "Presumption of innocence for the accused.",
                "Presumption that the husband or in-laws caused the death if cruelty is proven.",
                "No presumption applies.",
                "Presumption of suicide only."
                ],
                hi: [
                "आरोपी के लिए निर्दोषता की धारणा।",
                "अनुमान है कि पति या ससुराल वालों ने मृत्यु का कारण बना यदि क्रूरता साबित हो।",
                "कोई अनुमान लागू नहीं होता।",
                "केवल आत्महत्या की धारणा।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Under Section 113B of the Indian Evidence Act, when it is shown that a woman was subjected to cruelty for dowry shortly before her death, the court shall presume that the husband or in-laws caused her death.",
                hi: "भारतीय साक्ष्य अधिनियम की धारा 113B के तहत, जब यह दिखाया जाता है कि एक महिला को उसकी मृत्यु से कुछ समय पहले दहेज के लिए क्रूरता के अधीन किया गया था, तो अदालत यह मान लेगी कि पति या ससुराल वालों ने उसकी मृत्यु का कारण बना।"
            }
            }
        ]
        },
        {
        id: 14,
        category: "Intellectual Property Law",
        difficulty: "Hard",
        title: {
            en: "The Copyright Infringement Case",
            hi: "कॉपीराइट उल्लंघन का मामला"
        },
        passage: {
            en: "Rohan is a professional photographer who shot a series of artistic photographs of Indian monuments. He published these photos on his website with a clear copyright notice. A travel company, 'WanderIndia Pvt Ltd', downloaded several of these photographs and used them in their promotional brochures and social media posts without Rohan's permission or giving him credit. When Rohan discovered this, he sent a legal notice demanding that they stop using his photos and pay him ₹5 lakhs as compensation. WanderIndia responded that the photos were publicly available on the internet, so they assumed they were free to use. They also argued that their use was minimal and for educational purposes of promoting Indian tourism, which should qualify as 'fair use'. Rohan filed a copyright infringement suit under the Copyright Act, 1957.",
            hi: "रोहन एक पेशेवर फोटोग्राफर है जिसने भारतीय स्मारकों की कलात्मक तस्वीरों की एक श्रृंखला ली। उसने इन तस्वीरों को अपनी वेबसाइट पर एक स्पष्ट कॉपीराइट नोटिस के साथ प्रकाशित किया। एक ट्रैवल कंपनी, 'वांडरइंडिया प्राइवेट लिमिटेड' ने इनमें से कई तस्वीरें डाउनलोड कीं और उन्हें रोहन की अनुमति के बिना या उसे क्रेडिट दिए बिना अपने प्रचार ब्रोशर और सोशल मीडिया पोस्ट में उपयोग किया। जब रोहन को इसका पता चला, तो उसने एक कानूनी नोटिस भेजा जिसमें मांग की गई कि वे उसकी तस्वीरों का उपयोग बंद करें और उसे मुआवजे के रूप में ₹5 लाख का भुगतान करें। वांडरइंडिया ने जवाब दिया कि तस्वीरें इंटरनेट पर सार्वजनिक रूप से उपलब्ध थीं, इसलिए उन्होंने मान लिया कि वे उपयोग करने के लिए स्वतंत्र हैं। उन्होंने यह भी तर्क दिया कि उनका उपयोग न्यूनतम था और भारतीय पर्यटन को बढ़ावा देने के शैक्षिक उद्देश्यों के लिए था, जिसे 'उचित उपयोग' के रूप में योग्य होना चाहिए। रोहन ने कॉपीराइट अधिनियम, 1957 के तहत कॉपीराइट उल्लंघन का मुकदमा दायर किया।"
        },
        questions: [
            {
            id: 1,
            text: {
                en: "Does public availability on the internet mean anyone can use the content?",
                hi: "क्या इंटरनेट पर सार्वजनिक उपलब्धता का मतलब है कि कोई भी सामग्री का उपयोग कर सकता है?"
            },
            options: {
                en: [
                "Yes, everything on the internet is free to use.",
                "No, copyright protection applies even if content is publicly accessible online.",
                "Only for commercial websites.",
                "Yes, but only for educational institutions."
                ],
                hi: [
                "हाँ, इंटरनेट पर सब कुछ उपयोग करने के लिए स्वतंत्र है।",
                "नहीं, कॉपीराइट सुरक्षा लागू होती है भले ही सामग्री ऑनलाइन सार्वजनिक रूप से सुलभ हो।",
                "केवल वाणिज्यिक वेबसाइटों के लिए।",
                "हाँ, लेकिन केवल शैक्षिक संस्थानों के लिए।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Copyright protection is automatic upon creation of original work. Public availability does not waive copyright unless explicitly stated by the creator (e.g., Creative Commons license).",
                hi: "मूल काम के निर्माण पर कॉपीराइट सुरक्षा स्वचालित है। सार्वजनिक उपलब्धता कॉपीराइट को माफ नहीं करती है जब तक कि निर्माता द्वारा स्पष्ट रूप से नहीं कहा गया हो (उदा., क्रिएटिव कॉमन्स लाइसेंस)।"
            }
            },
            {
            id: 2,
            text: {
                en: "Does commercial use for tourism promotion qualify as 'fair use'?",
                hi: "क्या पर्यटन प्रचार के लिए वाणिज्यिक उपयोग 'उचित उपयोग' के रूप में योग्य है?"
            },
            options: {
                en: [
                "Yes, all tourism promotion is fair use.",
                "No, commercial use generally does not qualify as fair dealing under Indian law.",
                "Yes, if it promotes national interest.",
                "Only if the government does it."
                ],
                hi: [
                "हाँ, सभी पर्यटन प्रचार उचित उपयोग है।",
                "नहीं, वाणिज्यिक उपयोग आम तौर पर भारतीय कानून के तहत उचित व्यवहार के रूप में योग्य नहीं है।",
                "हाँ, अगर यह राष्ट्रीय हित को बढ़ावा देता है।",
                "केवल तभी जब सरकार ऐसा करे।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Under Section 52 of the Copyright Act, fair dealing is limited to purposes like private use, research, criticism, or news reporting. Commercial promotional use typically does not qualify.",
                hi: "कॉपीराइट अधिनियम की धारा 52 के तहत, उचित व्यवहार निजी उपयोग, अनुसंधान, आलोचना, या समाचार रिपोर्टिंग जैसे उद्देश्यों तक सीमित है। वाणिज्यिक प्रचार उपयोग आम तौर पर योग्य नहीं है।"
            }
            }
        ]
        },
        {
        id: 15,
        category: "Motor Vehicle Act",
        difficulty: "Easy",
        title: {
            en: "The Hit and Run Accident",
            hi: "हिट एंड रन दुर्घटना"
        },
        passage: {
            en: "Late at night, Suresh was riding his motorcycle home when a speeding car hit him from behind and fled the scene without stopping. Suresh suffered a fractured leg and head injuries. Passersby rushed him to the hospital where he underwent surgery. The medical expenses amounted to ₹2.5 lakhs. Suresh filed an FIR for hit and run. The police traced the car through CCTV footage and arrested the driver, Rajiv, who was under the influence of alcohol at the time of the accident. Rajiv had a valid driving license but no vehicle insurance as his policy had expired two months ago. Suresh now wants to claim compensation for his injuries and medical expenses. He approached the Motor Accident Claims Tribunal (MACT). Rajiv's lawyer argues that since Rajiv has been arrested, the criminal case should be resolved first.",
            hi: "देर रात, सुरेश अपनी मोटरसाइकिल पर घर जा रहा था जब एक तेज रफ्तार कार ने उसे पीछे से टक्कर मार दी और बिना रुके घटनास्थल से भाग गई। सुरेश को पैर में फ्रैक्चर और सिर में चोटें लगीं। राहगीरों ने उसे अस्पताल पहुंचाया जहां उसकी सर्जरी हुई। चिकित्सा खर्च ₹2.5 लाख हो गया। सुरेश ने हिट एंड रन के लिए FIR दर्ज कराई। पुलिस ने CCTV फुटेज के माध्यम से कार का पता लगाया और ड्राइवर राजीव को गिरफ्तार किया, जो दुर्घटना के समय शराब के प्रभाव में था। राजीव के पास वैध ड्राइविंग लाइसेंस था लेकिन कोई वाहन बीमा नहीं था क्योंकि उसकी पॉलिसी दो महीने पहले समाप्त हो गई थी। सुरेश अब अपनी चोटों और चिकित्सा खर्च के लिए मुआवजे का दावा करना चाहता है। उसने मोटर दुर्घटना दावा न्यायाधिकरण (MACT) से संपर्क किया। राजीव के वकील का तर्क है कि चूंकि राजीव को गिरफ्तार किया गया है, इसलिए पहले आपराधिक मामले को हल किया जाना चाहिए।"
        },
        questions: [
            {
            id: 1,
            text: {
                en: "Can Suresh claim compensation even though the vehicle had no insurance?",
                hi: "क्या सुरेश मुआवजे का दावा कर सकता है भले ही वाहन का कोई बीमा नहीं था?"
            },
            options: {
                en: [
                "No, compensation is only possible through insurance.",
                "Yes, he can claim from the Motor Accident Claim Tribunal, and also from the Hit and Run Fund.",
                "Only if Rajiv pays directly.",
                "No, he must sue Rajiv separately."
                ],
                hi: [
                "नहीं, मुआवजा केवल बीमा के माध्यम से संभव है।",
                "हाँ, वह मोटर दुर्घटना दावा न्यायाधिकरण से दावा कर सकता है, और हिट एंड रन फंड से भी।",
                "केवल तभी जब राजीव सीधे भुगतान करे।",
                "नहीं, उसे अलग से राजीव पर मुकदमा करना होगा।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Under the Motor Vehicles Act, victims of hit and run accidents can claim compensation from the Hit and Run Fund established by the government, even if the vehicle has no insurance.",
                hi: "मोटर वाहन अधिनियम के तहत, हिट एंड रन दुर्घटनाओं के पीड़ित सरकार द्वारा स्थापित हिट एंड रन फंड से मुआवजे का दावा कर सकते हैं, भले ही वाहन का कोई बीमा न हो।"
            }
            },
            {
            id: 2,
            text: {
                en: "What is the penalty for driving without insurance?",
                hi: "बिना बीमा के ड्राइविंग करने की सजा क्या है?"
            },
            options: {
                en: [
                "Just a warning.",
                "Fine up to ₹2,000 and/or imprisonment up to 3 months for first offense.",
                "License suspension only.",
                "No penalty if no accident occurs."
                ],
                hi: [
                "सिर्फ एक चेतावनी।",
                "पहले अपराध के लिए ₹2,000 तक जुर्माना और/या 3 महीने तक की कैद।",
                "केवल लाइसेंस निलंबन।",
                "कोई जुर्माना नहीं यदि कोई दुर्घटना नहीं होती है।"
                ]
            },
            correctAnswer: 1,
            explanation: {
                en: "Under Section 196 of the Motor Vehicles Act, driving without valid insurance is punishable with a fine up to ₹2,000 and/or imprisonment up to 3 months for the first offense.",
                hi: "मोटर वाहन अधिनियम की धारा 196 के तहत, वैध बीमा के बिना ड्राइविंग पहले अपराध के लिए ₹2,000 तक जुर्माना और/या 3 महीने तक की कैद से दंडनीय है।"
            }
            }
        ]
        }
];
    