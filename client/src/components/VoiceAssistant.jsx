import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaMicrophone, FaTimes, FaPaperPlane, FaKeyboard } from 'react-icons/fa';

const VoiceAssistant = () => {
    const { t, i18n } = useTranslation();
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [inputMode, setInputMode] = useState(false);
    const [inputText, setInputText] = useState('');
    const [response, setResponse] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const recognitionRef = useRef(null);

    useEffect(() => {
        if (window.SpeechRecognition || window.webkitSpeechRecognition) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;

            recognitionRef.current.onresult = (event) => {
                const text = event.results[0][0].transcript;
                setTranscript(text);
                handleQuery(text);
                setIsListening(false);
            };

            recognitionRef.current.onerror = (event) => {
                console.error("Speech recognition error", event.error);
                setIsListening(false);
                setResponse(t('voice_error', "Sorry, I couldn't hear you. Try typing instead."));
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }
    }, []);

    useEffect(() => {
        if (recognitionRef.current) {
            recognitionRef.current.lang = i18n.language === 'hi' ? 'hi-IN' : 'en-US';
        }
    }, [i18n.language]);

    const startListening = () => {
        if (recognitionRef.current) {
            setIsListening(true);
            setResponse('');
            setTranscript('');
            try {
                recognitionRef.current.start();
            } catch (e) {
                console.error(e);
            }
        } else {
            setResponse("Speech recognition not supported in this browser.");
        }
    };

    const handleManualSubmit = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;
        setTranscript(inputText);
        handleQuery(inputText);
        setInputText('');
    };

    const handleQuery = (query) => {
        const lowerQuery = query.toLowerCase();
        let answer = "";
        const lang = i18n.language === 'hi' ? 'hi' : 'en';

        // Knowledge Base
        if (lowerQuery.includes('roadmap') || lowerQuery.includes('career') || lowerQuery.includes('raasta') || lowerQuery.includes('kareer')) {
            answer = lang === 'hi'
                ? "न्यायिक करियर रोडमैप के 7 मुख्य चरण हैं। आप 'रोडमैप' पेज पर जाकर अपने राज्य के अनुसार पूरी जानकारी देख सकते हैं।"
                : "The judicial career roadmap consists of 7 main steps. You can check the 'Roadmap' page for details specific to your state.";
        } else if (lowerQuery.includes('exam') || lowerQuery.includes('syllabus') || lowerQuery.includes('pariksha')) {
            answer = lang === 'hi'
                ? "राज्य न्यायिक सेवा परीक्षा (PCS-J) के 3 चरण होते हैं: प्रारंभिक, मुख्य और साक्षात्कार। सिलेबस हर राज्य का थोड़ा अलग होता है।"
                : "The State Judicial Services Exam (PCS-J) has 3 stages: Prelims, Mains, and Interview. Syllabus varies slightly by state.";
        } else if (lowerQuery.includes('eligibility') || lowerQuery.includes('qualification') || lowerQuery.includes('oygyata')) {
            answer = lang === 'hi'
                ? "आपको भारत का नागरिक होना चाहिए और एलएलबी की डिग्री (3 या 5 वर्ष) होनी चाहिए। आयु सीमा आमतौर पर 21-35 वर्ष होती है।"
                : "You must be a citizen of India and hold an LLB degree. Age limit is usually 21-35 years.";
        } else if (lowerQuery.includes('salary') || lowerQuery.includes('pay') || lowerQuery.includes('vetan')) {
            answer = lang === 'hi'
                ? "एक सिविल जज का शुरुआती वेतन भत्तों के साथ लगभग ₹80,000 - ₹1,00,000 प्रति माह होता है।"
                : "The starting salary of a Civil Judge is approximately ₹80,000 - ₹1,00,000 per month including allowances.";
        } else if (lowerQuery.includes('judge') || lowerQuery.includes('nyayadhish')) {
            answer = lang === 'hi'
                ? "जज बनने के लिए आपको कानून की डिग्री और कड़ी मेहनत की जरूरत है। हमारे 'प्रेरक न्यायाधीश' पेज पर सफल जजों की कहानियां पढ़ें।"
                : "To become a judge, you need a law degree and hard work. Check out the 'Judges' page for inspiration.";
        } else {
            answer = lang === 'hi'
                ? "क्षमा करें, मैं इसे पूरी तरह से नहीं समझ पाया। कृपया रोडमैप, परीक्षा, या योग्यता के बारे में पूछें।"
                : "I didn't quite catch that. Please ask about the roadmap, exams, eligibility, or salary.";
        }

        setResponse(answer);
        speak(answer);
    };

    const speak = (text) => {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = i18n.language === 'hi' ? 'hi-IN' : 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    zIndex: 1000
                }}
            >
                <FaMicrophone />
            </button>
        );
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '320px',
            backgroundColor: 'var(--bg-color)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            borderRadius: '12px',
            padding: '1rem',
            zIndex: 1000,
            border: '1px solid var(--text-color)',
            color: 'var(--text-color)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ margin: 0 }}>Nyaya-Sahayak (AI)</h4>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => setInputMode(!inputMode)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-color)' }} title="Toggle Keyboard">
                        <FaKeyboard />
                    </button>
                    <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-color)' }}>
                        <FaTimes />
                    </button>
                </div>
            </div>

            <div style={{ minHeight: '80px', maxHeight: '150px', overflowY: 'auto', marginBottom: '1rem', padding: '0.5rem', background: 'var(--secondary-color)', borderRadius: '4px', fontSize: '0.9rem' }}>
                {response || (isListening ? (i18n.language === 'hi' ? "सुन रहा हूँ..." : "Listening...") : (i18n.language === 'hi' ? "पूछने के लिए माइक दबाएं..." : "Tap mic to ask..."))}
            </div>

            {transcript && (
                <p style={{ fontSize: '0.8rem', color: '#888', fontStyle: 'italic', marginBottom: '0.5rem', textAlign: 'right' }}>
                    "{transcript}"
                </p>
            )}

            {inputMode ? (
                <form onSubmit={handleManualSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type your question..."
                        style={{ flex: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FaPaperPlane />
                    </button>
                </form>
            ) : (
                <button
                    onClick={startListening}
                    disabled={isListening}
                    className="btn btn-primary"
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                    <FaMicrophone /> {isListening ? (i18n.language === 'hi' ? 'सुन रहा हूँ...' : 'Listening...') : (i18n.language === 'hi' ? 'प्रश्न पूछें' : 'Ask Question')}
                </button>
            )}
        </div>
    );
};

export default VoiceAssistant;
