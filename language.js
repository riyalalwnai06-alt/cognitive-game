(function () {
    // CogniCare Northeast language accessibility layer.
    // It does NOT modify existing game JavaScript.

    const LANGUAGES = {
        en: {
            name: "English",
            home: "Home", games: "Games", how: "How it helps", start: "Start playing",
            eyebrow: "Gentle play, meaningful moments",
            hero: "Keep the mind active, one joyful game at a time.",
            heroDesc: "Simple, calming cognitive games designed for people living with dementia—made to encourage memory, focus, and confidence without pressure.",
            explore: "Explore free games", howWorks: "How it works", note: "No negativity, Just chill",
            today: "Today's gentle game", back: "← Back to Games", restart: "Restart",
            score: "Score", time: "Time", round: "Round", digits: "Digits", length: "Length", lives: "Lives",
            submit: "Submit", enterNumber: "Enter the number", ready: "Get ready...",
            chooseActivity: "Hello, {name} 👋 — choose an activity you'd like to play.",
            description: "Description-", play: "Play!",
            findMatch: "Find the Match", matchDesc: "Find matching pairs of familiar pictures.",
            chalk: "Chalkboard Challenge", chalkDesc: "Look at the numbers and choose which number is greater.",
            number: "Number Memory", numberDesc: "Memorize the number and type it back.",
            flow: "Eb & Flow", flowDesc: "Follow the leaves and respond to their changing directions.",
            sequence: "Memory Sequence", sequenceDesc: "Remember the sequence and repeat it correctly.",
            matchShort: "Find the matching pairs.", chalkQuestion: "Which side has the greater value?", greater: "Which is greater?", equal: "↓ Both are equal",
            keyboard: "Keyboard controls", leftGreater: "Left number is greater", rightGreater: "Right number is greater", bothEqual: "Both are equal",
            flowDescFull: "Follow the leaf's direction or its flow.", green: "🟢 Green: follow the leaf.", yellow: "🟡 Yellow: follow the flow.",
            sequenceDescFull: "Remember the sequence and repeat it.",
            profileWelcome: "Welcome!", profileAsk: "What should we call you?", profilePlaceholder: "Enter your name", continueBtn: "Continue", pleaseName: "Please enter a name."
        },
        as: {
            name: "অসমীয়া — Assamese",
            home: "গৃহ", games: "খেল", how: "ই সহায় কৰে", start: "খেলিবলৈ আৰম্ভ কৰক",
            eyebrow: "সহজ খেল, অৰ্থপূৰ্ণ মুহূৰ্ত", hero: "মন সক্ৰিয় ৰাখক, এটাকৈ আনন্দদায়ক খেল খেলক।",
            heroDesc: "স্মৃতি, মনোযোগ আৰু আত্মবিশ্বাসক উৎসাহিত কৰিবলৈ সহজ আৰু শান্ত জ্ঞানীয় খেল।",
            explore: "বিনামূলীয়া খেল চাওক", howWorks: "ই কেনেকৈ কাম কৰে", note: "কোনো নেতিবাচকতা নহয়, কেৱল আনন্দ",
            today: "আজিৰ সহজ খেল", back: "← খেললৈ উভতি যাওক", restart: "পুনৰ আৰম্ভ কৰক",
            score: "স্ক'ৰ", time: "সময়", round: "ৰাউণ্ড", digits: "অংক", length: "দৈৰ্ঘ্য", lives: "জীৱন",
            submit: "দাখিল কৰক", enterNumber: "সংখ্যাটো লিখক", ready: "প্ৰস্তুত হওক...",
            chooseActivity: "নমস্কাৰ, {name} 👋 — আপুনি খেলিব বিচৰা এটা কাৰ্যকলাপ বাছক।", description: "বিৱৰণ-", play: "খেলক!",
            findMatch: "মিল বিচাৰক", matchDesc: "পৰিচিত ছবিৰ মিল থকা যোৰ বিচাৰক।",
            chalk: "সংখ্যাৰ প্ৰত্যাহ্বান", chalkDesc: "সংখ্যাবোৰ চাওক আৰু কোনটো সংখ্যা ডাঙৰ বাছি লওক।",
            number: "সংখ্যা স্মৃতি", numberDesc: "সংখ্যাটো মনত ৰাখক আৰু পুনৰ টাইপ কৰক।",
            flow: "পাতৰ প্ৰবাহ", flowDesc: "পাতৰ দিশ অনুসৰণ কৰক আৰু দিশ সলনি হ'লে সঁহাৰি দিয়ক।",
            sequence: "স্মৃতি ক্ৰম", sequenceDesc: "ক্ৰমটো মনত ৰাখি সঠিকভাৱে পুনৰ কৰক।",
            matchShort: "মিল থকা যোৰ বিচাৰক।", chalkQuestion: "কোনটো ফালৰ মান ডাঙৰ?", greater: "কোনটো ডাঙৰ?", equal: "↓ দুয়োটাৰ মান সমান",
            keyboard: "কিব'ৰ্ড নিয়ন্ত্ৰণ", leftGreater: "বাওঁফালৰ সংখ্যা ডাঙৰ", rightGreater: "সোঁফালৰ সংখ্যা ডাঙৰ", bothEqual: "দুয়োটাৰ মান সমান",
            flowDescFull: "পাতৰ দিশ বা ইয়াৰ প্ৰবাহ অনুসৰণ কৰক।", green: "🟢 সেউজীয়া: পাত অনুসৰণ কৰক।", yellow: "🟡 হালধীয়া: প্ৰবাহ অনুসৰণ কৰক।",
            sequenceDescFull: "ক্ৰমটো মনত ৰাখি পুনৰ কৰক।", profileWelcome: "স্বাগতম!", profileAsk: "আমি আপোনাক কি বুলি মাতিম?", profilePlaceholder: "আপোনাৰ নাম লিখক", continueBtn: "আগবাঢ়ক", pleaseName: "অনুগ্ৰহ কৰি নাম লিখক।"
        },
        brx: {
            name: "बड़ो — Bodo",
            home: "न'ङा", games: "खेल", how: "बे माबोरै मदद खालामो", start: "खेल जागायनो",
            eyebrow: "सुस्रि खेल, गोसोनि सोमोनाय", hero: "गोसोखौ जाग्रत हो, मोनसे समाव मोनसे खेल।",
            heroDesc: "मोन, मनोयोग आरो आत्मबिस्वासखौ मदद होनो थाखाय सरल आरो शान्त cognitive games।",
            explore: "फ्री खेल नाय", howWorks: "बे माबोरै खामायो", note: "खराब गोसो नङा, खालि आराम",
            today: "दिनैनि सुस्रि खेल", back: "← खेलफोराव फिन", restart: "फिन जागाय",
            score: "स्क'र", time: "सम", round: "राउण्ड", digits: "अंक", length: "जौगा", lives: "जिउ",
            submit: "जमा खालाम", enterNumber: "नम्बर लिर", ready: "गोसो हो...",
            chooseActivity: "नमस्कार, {name} 👋 — नों जों खेलनो सायख।", description: "बिबरन-", play: "खेल!",
            findMatch: "जुथुम ज'बाय", matchDesc: "सिनायथि चित्रफोरनि जुथुम ज'बाय नाय।",
            chalk: "नम्बर च्यालेन्ज", chalkDesc: "नम्बरफोर नाय आरो जेखौ बांसिन बेखौ सायख।",
            number: "नम्बर मेमोरी", numberDesc: "नम्बरखौ मोनसे नाय आरो फिन टाइप खालाम।",
            flow: "पातनि फ्लो", flowDesc: "पातनि दिकखौ फालो खालाम आरो दिक सोलायनायाव सायख।",
            sequence: "मेमोरी सिक्वेन्स", sequenceDesc: "सिक्वेन्सखौ मोनसे नाय आरो जुथुमै फिन खालाम।",
            matchShort: "जुथुम ज'बाय नाय।", chalkQuestion: "जे फालांनि मान बांसिन?", greater: "जे बांसिन?", equal: "↓ मोनसे मान",
            keyboard: "किब'र्ड कन्ट्रोल", leftGreater: "बायां नम्बर बांसिन", rightGreater: "साख्रि नम्बर बांसिन", bothEqual: "मोनसे मान",
            flowDescFull: "पातनि दिक नाय बा बेनि फ्लो फालो खालाम।", green: "🟢 हाग्रा: पात फालो खालाम।", yellow: "🟡 गोजोन: फ्लो फालो खालाम।",
            sequenceDescFull: "सिक्वेन्सखौ मोनसे नाय आरो फिन खालाम।", profileWelcome: "सुस्वागतम!", profileAsk: "जों नोंखौ मा बुंनो हागोन?", profilePlaceholder: "नोंनि मुं लिर", continueBtn: "सिगां जाथों", pleaseName: "अनुग्रह खालाम नोंनि मुं लिर।"
        },
        kha: {
            name: "Khasi",
            home: "Home", games: "Ki jingïalehkai", how: "Kumno ka iarap", start: "Sdang jingïalehkai",
            eyebrow: "Ka jingïalehkai kaba suk, ki por kiba don jingmut", hero: "Pynim ïa ka jingmut, kawei ka jingïalehkai ha ka por.",
            heroDesc: "Ki jingïalehkai cognitive kiba suk bad jaiñ ban kyrshan ïa ka jingkynmaw, jingpyrkhat bad jingshaniah ha lade.",
            explore: "Peit ïa ki jingïalehkai", howWorks: "Kumno ka trei", note: "Ym don jingsngewbha, tang ka jingsuk",
            today: "Ka jingïalehkai jong mynta", back: "← Wanphai sha ki jingïalehkai", restart: "Sdang biang",
            score: "Score", time: "Por", round: "Round", digits: "Ki digit", length: "Ka jingjrong", lives: "Ki jingim",
            submit: "Submit", enterNumber: "Thoh ïa u nombar", ready: "Pynkhreh...",
            chooseActivity: "Kumno, {name} 👋 — jied ïa ka jingïalehkai kaba phi kwah.", description: "Ka jingbatai-", play: "Leit ialeh!",
            findMatch: "Lap ïa ka Jingiasyriem", matchDesc: "Lap ïa ki dur kiba iahap.",
            chalk: "Chalkboard Challenge", chalkDesc: "Peit ïa ki nombar bad jied ïa uba kham heh.",
            number: "Number Memory", numberDesc: "Kynmaw ïa u nombar bad thoh biang ïa u.",
            flow: "Ka jingïaid jong ka sla", flowDesc: "Bud ïa ka lynti jong ka sla bad jubab haba ka kylla.",
            sequence: "Memory Sequence", sequenceDesc: "Kynmaw ïa ka sequence bad leh biang ïa ka.",
            matchShort: "Lap ïa ki jingïasyrïem.", chalkQuestion: "Uno u liang uba kham heh?", greater: "Uei uba kham heh?", equal: "↓ Ki ar ki long kajuh",
            keyboard: "Ki jingpynïaid keyboard", leftGreater: "U nombar ka liang kadiang u kham heh", rightGreater: "U nombar ka liang kamon u kham heh", bothEqual: "Ki ar ki long kajuh",
            flowDescFull: "Bud ïa ka lynti jong ka sla lane ka flow jong ka.", green: "🟢 Green: bud ïa ka sla.", yellow: "🟡 Yellow: bud ïa ka flow.",
            sequenceDescFull: "Kynmaw ïa ka sequence bad bud biang ïa ka.", profileWelcome: "Pdiang sngewbha!", profileAsk: "Kumno ngin khot ïa phi?", profilePlaceholder: "Thoh ïa ka kyrteng jong phi", continueBtn: "Bteng", pleaseName: "Sngewbha thoh ïa ka kyrteng."
        },
        grt: {
            name: "Garo",
            home: "Nok", games: "Game", how: "Maikai dakchak", start: "Game dakna", eyebrow: "Suk game, namgipa sal", hero: "Gisikko active rakkbo, sa'baosa game.",
            heroDesc: "Gisik, chanchiani aro ka'donganiko dakchakna simple aro neng'nikgijagipa cognitive game-rang.", explore: "Free game nibo", howWorks: "Maikai kam ka'a", note: "Neng'nikani dongja, sukhaijok",
            today: "Da'alni suk game", back: "← Game-rangona re'ba", restart: "Aro dakbo", score: "Score", time: "Somoi", round: "Round", digits: "Digit", length: "Length", lives: "Janggirang",
            submit: "Submit", enterNumber: "Numberko sebo", ready: "Salgipa...", chooseActivity: "Namaste, {name} 👋 — na'na gameko base'bo.", description: "Talatani-", play: "Game Dakbo!",
            findMatch: "Matchko Nibo", matchDesc: "Minggipa bimangrangni matching pair nibo.", chalk: "Number Challenge", chalkDesc: "Numberrangko nibo aro dal'batsranggipa numberko sako.", number: "Number Memory", numberDesc: "Numberko gisiko done aro indine sebo.",
            flow: "Sla Flow", flowDesc: "Sla-ni re'ani ja'ku ja'ku ja'bo aro change on'genchimode aganchakbo.", sequence: "Memory Sequence", sequenceDesc: "Sequenceko gisiko done aro namgipa dakbo.", matchShort: "Matching pair-rangko nibo.", chalkQuestion: "Saksachi dal'batsranga?", greater: "Dal'batsranga?", equal: "↓ Gnangsan ong'a",
            keyboard: "Keyboard controls", leftGreater: "Left number dal'batsranga", rightGreater: "Right number dal'batsranga", bothEqual: "Gnangsan ong'a", flowDescFull: "Sla-ni direction ba flowko follow dakbo.", green: "🟢 Green: sla-ko follow dakbo.", yellow: "🟡 Yellow: flow-ko follow dakbo.", sequenceDescFull: "Sequenceko gisiko done aro repeat dakbo.", profileWelcome: "Namgipa!", profileAsk: "Anga na'ko maiko minggen?", profilePlaceholder: "Na'ni ming sebo", continueBtn: "Skarang", pleaseName: "Please na'ni ming sebo."
        },
        lus: {
            name: "Mizo",
            home: "In", games: "Game-te", how: "A tangpuina", start: "Game tan", eyebrow: "Game nuam, hun hlu", hero: "Mind active rawh se, game pakhat te te in.",
            heroDesc: "Hriatna, ngaihtuahna leh mahni rinawmna tihchak turin game awlsam leh nuam tak siam a ni.", explore: "Free game-te en rawh", howWorks: "Engtin nge a thawk", note: "Pressure awm lovin, nuam takin",
            today: "Tunah game nuam", back: "← Game-te-ah kir leh rawh", restart: "Tan leh rawh", score: "Score", time: "Hun", round: "Round", digits: "Digit-te", length: "Length", lives: "Nun",
            submit: "Submit", enterNumber: "Number ziak rawh", ready: "Inpeih rawh...", chooseActivity: "Chibai, {name} 👋 — game i duh ber thlang rawh.", description: "Hrilhfiahna-", play: "Chhuahpui rawh!",
            findMatch: "Match zawng rawh", matchDesc: "Picture inangte kha zawng rawh.", chalk: "Chalkboard Challenge", chalkDesc: "Number-te en la number lian zawk thlang rawh.", number: "Number Memory", numberDesc: "Number kha hre reng la, lehkhaah ziak leh rawh.", flow: "Leaf Flow", flowDesc: "Leaf direction zui la, a thlaih hunah chhanna pe rawh.", sequence: "Memory Sequence", sequenceDesc: "Sequence kha hre reng la, dik taka zui leh rawh.", matchShort: "Picture inangte zawng rawh.", chalkQuestion: "Side eng nge a lian zawk?", greater: "Eng nge a lian zawk?", equal: "↓ A pahnih inang",
            keyboard: "Keyboard controls", leftGreater: "Left number a lian zawk", rightGreater: "Right number a lian zawk", bothEqual: "A pahnih inang", flowDescFull: "Leaf direction emaw flow emaw zui rawh.", green: "🟢 Green: leaf zui rawh.", yellow: "🟡 Yellow: flow zui rawh.", sequenceDescFull: "Sequence kha hre reng la, zui leh rawh.", profileWelcome: "Chibai!", profileAsk: "Eng hming nge i koh ang?", profilePlaceholder: "I hming ziak rawh", continueBtn: "Kal zel rawh", pleaseName: "I hming ziak rawh."
        },
        mni: {
            name: "মৈতৈলোন্ — Meitei",
            home: "হোম", games: "খেলশিং", how: "মদুদি মতম পীবগে", start: "খেল হৌরো", eyebrow: "নুংগাইবা খেল, মপুং ফাবা মতম", hero: "মাইন্দা শিংথা থম্মু, মতম অমদা খেল অমা।",
            heroDesc: "শিংথা, শিংজিনবা অমসুং আত্মবিশ্বাস নুংগাইনা শেমগৎনবা সহজ অমসুং শান্ত cognitive games।", explore: "ফ্রী খেলশিং ইয়েংউ", howWorks: "করিগুম্না থৌরকপগে", note: "নেগেটিভিটি নত্তে, নুংগাইনা",
            today: "নুমিত অসিগী সহজ খেল", back: "← খেলশিংদা হংলু", restart: "আমুক হৌরো", score: "স্কোর", time: "মতম", round: "রাউন্ড", digits: "ডিজিট", length: "লেংথ", lives: "লাইফ",
            submit: "সাবমিট", enterNumber: "নম্বর লিখৌ", ready: "শেম শারৌ...", chooseActivity: "থাগৎচরি, {name} 👋 — নাংনা খেলনবা activity অমা খল্লু।", description: "মতাং-", play: "খেল্লু!",
            findMatch: "ম্যাচ থিংজিনবিয়ু", matchDesc: "ইনাঙা ছবিশিংগী ম্যাচ থিংজিনবিয়ু।", chalk: "নম্বর চ্যালেঞ্জ", chalkDesc: "নম্বরশিং ইয়েং অমসুং নম্বর হেনবা অদু খল্লু।", number: "নম্বর মেমরি", numberDesc: "নম্বরদু শিংথা থম্মু অমসুং আমুক টাইপ তৌ।", flow: "লীফ ফ্লো", flowDesc: "লীফকী দিশা জুং অমসুং দিশা শেনবা মতমদা চাংয়েং তৌ।", sequence: "মেমরি সিকোয়েন্স", sequenceDesc: "সিকোয়েন্সদু শিংথা থম্মু অমসুং মপুং ফানা তৌ।", matchShort: "ম্যাচ থিংজিনবা জোড়া থিংজিনবিয়ু।", chalkQuestion: "করিগী সাইদ হেনবা ওইবগে?", greater: "করিগী হেনবা?", equal: "↓ অনৌবা অমসুং অমা",
            keyboard: "কিবোর্ড কন্ট্রোল", leftGreater: "লেফ্ট নম্বর হেনবা", rightGreater: "রাইট নম্বর হেনবা", bothEqual: "অনৌবা অমসুং অমা", flowDescFull: "লীফকী দিশা নত্রগা ফ্লো অদু জুংউ।", green: "🟢 Green: লীফ জুংউ।", yellow: "🟡 Yellow: ফ্লো জুংউ।", sequenceDescFull: "সিকোয়েন্সদু শিংথা থম্মু অমসুং আমুক তৌ।", profileWelcome: "থাগৎচরি!", profileAsk: "ঐহাক্না নাংবু করিগুম্না কোয়াংজবা?", profilePlaceholder: "নাংগী মিং লিখৌ", continueBtn: "মখা চৎলো", pleaseName: "নাংগী মিং লিখৌ।"
        },
        kok: {
            name: "Kokborok",
            home: "Nok", games: "Game", how: "Maikha help", start: "Game suru", eyebrow: "Sukhin game, bwtangni somoi", hero: "Mind active rakh, somoi-ao game se.", heroDesc: "Memory, attention aro confidence-khou help khorok simple aro calm cognitive games.", explore: "Free game nikhon", howWorks: "Maikha kam khorok", note: "Pressure nai, sukhaijok",
            today: "Dini sukhin game", back: "← Game-rangni phai", restart: "Abar suru", score: "Score", time: "Somoi", round: "Round", digits: "Digit", length: "Length", lives: "Jibon",
            submit: "Submit", enterNumber: "Number lek", ready: "Sajag...", chooseActivity: "Khamcha, {name} 👋 — nwngni game seita select khorok.", description: "Bibaroni-", play: "Play!",
            findMatch: "Match Nwng", matchDesc: "Familiar picture-rangni matching pair nikhon.", chalk: "Number Challenge", chalkDesc: "Number-rang nikhon aro boro number-khou select khorok.", number: "Number Memory", numberDesc: "Number-khou mone rakh aro abar type khorok.", flow: "Leaf Flow", flowDesc: "Leaf-ni direction follow khorok aro direction badlale response khorok.", sequence: "Memory Sequence", sequenceDesc: "Sequence-khou mone rakh aro thik-thak repeat khorok.", matchShort: "Matching pair nikhon.", chalkQuestion: "Kon side boro?", greater: "Kon boro?", equal: "↓ Dui-ta soman",
            keyboard: "Keyboard controls", leftGreater: "Left number boro", rightGreater: "Right number boro", bothEqual: "Dui-ta soman", flowDescFull: "Leaf-ni direction ba flow follow khorok.", green: "🟢 Green: leaf follow khorok.", yellow: "🟡 Yellow: flow follow khorok.", sequenceDescFull: "Sequence-khou mone rakh aro abar khorok.", profileWelcome: "Khamcha!", profileAsk: "Nwngkhou maikha bwtang?", profilePlaceholder: "Nwngni mung lek", continueBtn: "Srang", pleaseName: "Nwngni mung lek."
        }
    };

    const SELECT_ID = "cognicare-language-switcher";
    let current = localStorage.getItem("cognicareLanguage") || "en";

    function tr(key) { return (LANGUAGES[current] && LANGUAGES[current][key]) || LANGUAGES.en[key] || ""; }

    function createSwitcher() {
        if (document.getElementById(SELECT_ID)) return;
        const wrap = document.createElement("div");
        wrap.className = "cognicare-language-wrap";
        const label = document.createElement("span");
        label.textContent = "🌐";
        label.className = "cognicare-language-icon";
        const select = document.createElement("select");
        select.id = SELECT_ID;
        Object.entries(LANGUAGES).forEach(([code, data]) => {
            const option = document.createElement("option");
            option.value = code;
            option.textContent = data.name;
            select.appendChild(option);
        });
        select.value = current;
        select.addEventListener("change", () => {
            current = select.value;
            localStorage.setItem("cognicareLanguage", current);
            applyLanguage();
        });
        wrap.append(label, select);

        // Keep the selector inside the existing page layout instead of floating
        // over the content.
        const landingNav = document.querySelector(".landing-nav");
        const navLinks = landingNav && landingNav.querySelector(".nav-links");
        const pageHeader = document.querySelector(".games-header");
        const gameContainer = document.querySelector(".game-container");
        const profileCard = document.querySelector(".profile-card");

        if (navLinks) {
            navLinks.appendChild(wrap);
        } else if (pageHeader) {
            pageHeader.appendChild(wrap);
        } else if (gameContainer) {
            gameContainer.insertBefore(wrap, gameContainer.firstChild);
        } else if (profileCard) {
            profileCard.appendChild(wrap);
        } else {
            document.body.insertBefore(wrap, document.body.firstChild);
        }
    }

    function setText(selector, key) {
        const el = document.querySelector(selector);
        if (el) el.textContent = tr(key);
    }

    function setPlaceholder(selector, key) {
        const el = document.querySelector(selector);
        if (el) el.placeholder = tr(key);
    }

    function applyLanguage() {
        const path = location.pathname.toLowerCase();

        // Landing page
        setText(".nav-links a[href='games.html']", "games");
        setText(".nav-links a[href='#how-it-helps']", "how");
        setText(".nav-cta", "start");
        setText(".hero-eyebrow", "eyebrow");
        setText(".hero-title", "hero");
        setText(".hero-description", "heroDesc");
        setText(".btn-primary", "explore");
        setText(".btn-secondary", "howWorks");
        setText(".trust-note span", "note");
        setText(".preview-prompt", "today");
        setText(".preview-title", "number");

        // Profile
        setText(".profile-card h1", "profileWelcome");
        setText(".profile-card .subtitle", "profileAsk");
        setPlaceholder("#playerName.name-input", "profilePlaceholder");
        setText(".primary-button", "continueBtn");
        if (document.getElementById("errorMessage") && document.getElementById("errorMessage").textContent.trim() === "Please enter a name.") {
            setText("#errorMessage", "pleaseName");
        }

        // Games page
        setText(".home-button", "home");
        const greeting = document.querySelector(".games-greeting");
        if (greeting) {
            const name = document.getElementById("playerName");
            greeting.innerHTML = tr("chooseActivity").replace("{name}", `<span id="playerName">${name ? name.textContent : "there"}</span>`);
        }
        const cards = [
            [".game-card:nth-child(1)", "findMatch", "matchDesc"],
            [".game-card:nth-child(2)", "chalk", "chalkDesc"],
            [".game-card:nth-child(3)", "number", "numberDesc"],
            [".game-card:nth-child(4)", "flow", "flowDesc"],
            [".game-card:nth-child(5)", "sequence", "sequenceDesc"]
        ];
        cards.forEach(([selector, title, desc]) => {
            const card = document.querySelector(selector);
            if (!card) return;
            const h2 = card.querySelector("h2");
            const p = card.querySelector(".card-description-area p");
            const label = card.querySelector(".description-label");
            const button = card.querySelector(".game-button");
            if (h2) h2.textContent = tr(title);
            if (p) p.textContent = tr(desc);
            if (label) label.textContent = tr("description");
            if (button) button.textContent = tr("play");
        });

        // Common game pages
        setText(".back-link", "back");
        setText(".restart-button", "restart");
        document.querySelectorAll(".stat-box span").forEach(span => {
            const s = span.textContent.trim().toLowerCase();
            const key = s === "score" ? "score" : s === "time" ? "time" : s === "round" ? "round" : s === "digits" ? "digits" : s === "length" ? "length" : s === "lives" ? "lives" : null;
            if (key) span.textContent = tr(key);
        });

        if (path.endsWith("number-memory.html")) {
            setText(".number-memory-header h1", "number");
            setText(".number-memory-header p", "numberDesc");
            setText("#numberStatus", "ready");
            setPlaceholder("#numberInput", "enterNumber");
            setText("#numberSubmit", "submit");
        }

        if (path.endsWith("chalkboard-challenge.html")) {
            setText(".chalkboard-header h1", "chalk");
            setText(".chalkboard-header p", "chalkQuestion");
            setText(".chalk-question", "greater");
            setText(".equal-button", "equal");
            setText(".keyboard-help > p", "keyboard");
            const rows = document.querySelectorAll(".key-row span:last-child");
            if (rows[0]) rows[0].textContent = tr("leftGreater");
            if (rows[1]) rows[1].textContent = tr("rightGreater");
            if (rows[2]) rows[2].textContent = tr("bothEqual");
        }

        if (path.endsWith("eb-and-flow.html")) {
            setText(".flow-header h1", "flow");
            setText(".flow-header p", "flowDescFull");
            setText(".flow-help", "green");
            const help = document.querySelector(".flow-help");
            if (help) help.innerHTML = `${tr("green")}<br>${tr("yellow")}`;
        }

        if (path.endsWith("find-match.html")) {
            setText(".memory-header h1", "findMatch");
            setText(".memory-header p", "matchShort");
        }

        if (path.endsWith("memory-sequence.html")) {
            setText(".sequence-header h1", "sequence");
            setText(".sequence-header p", "sequenceDescFull");
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        createSwitcher();
        applyLanguage();
    });
})();
