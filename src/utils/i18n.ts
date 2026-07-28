// src/utils/i18n.ts

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface NavTranslation {
  home: string;
  about: string;
  projects: string;
  insurance: string;
  learning: string;
  blog: string;
  contact: string;
  langToggle: string;
}

export interface HomepageTranslation {
  title: string;
  heroTitle: string;
  heroText: string;
  heroCta: string;
  aboutTitle: string;
  aboutText: string;
  missionTitle: string;
  missionText: string;
  stat1Title: string;
  stat1Desc: string;
  stat2Title: string;
  stat2Desc: string;
  stat3Title: string;
  stat3Desc: string;
  focusTitle: string;
  focus1Title: string;
  focus1Desc: string;
  focus2Title: string;
  focus2Desc: string;
  focus3Title: string;
  focus3Desc: string;
}

export interface FooterTranslation {
  rights: string;
  privacy: string;
  terms: string;
}

export interface ContactTranslation {
  pageTitle: string;
  heading: string;
  subheading: string;
  linkedinLabel: string;
  linkedinText: string;
  linkedinBtn: string;
  linkedinUrl: string;
  locationLabel: string;
  locationValue: string;
  formHeading: string;
  nameLabel: string;
  namePlaceholder: string;
  emailFormLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
}

export interface InsuranceFaqItem {
  question: string;
  answer: string;
}

export interface InsuranceFaqTranslation {
  sectionTitle: string;
  sectionSubheading: string;
  faqs: InsuranceFaqItem[];
}

// ============================================================================
// TRANSLATION DICTIONARIES
// ============================================================================

// --- Navigation Translations ---
export const navTranslations: Record<string, NavTranslation> = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    insurance: "Insurance",
    learning: "Learning",
    blog: "Blog",
    contact: "Contact",
    langToggle: "বাংলা",
  },
  bn: {
    home: "হোম",
    about: "পরিচিতি",
    projects: "প্রকল্প",
    insurance: "বীমা",
    learning: "শিক্ষা",
    blog: "ব্লগ",
    contact: "যোগাযোগ",
    langToggle: "English",
  },
};

// --- Homepage Translations ---
export const homepageTranslations: Record<string, HomepageTranslation> = {
  en: {
    title: "Santanu Mukherjee | IT Professional & Insurance Advisor",
    heroTitle: "Bridging Technology, Trust & Financial Growth",
    heroText: "Welcome to my digital space. With nearly 30 years of IT expertise and a deep passion for insurance advisory, I help individuals navigate complex digital and financial landscapes with clarity.",
    heroCta: "Discover My Story",

    aboutTitle: "About Me",
    aboutText: "I am Santanu Mukherjee—an IT veteran, licensed insurance advisor, and continuous learner. Over the last three decades, I've built a career on solving complex tech problems, and today I combine that technical rigor with practical financial guidance to empower families and professionals.",

    missionTitle: "My Mission",
    missionText: "To simplify complex insurance solutions, foster financial literacy, and inspire lifelong learning through technology, transparency, and trust.",

    stat1Title: "28+ Years",
    stat1Desc: "Decades of proven expertise in Information Technology and systems.",
    stat2Title: "100%",
    stat2Desc: "Client-focused advice built on complete honesty and clarity.",
    stat3Title: "3 Core Pillars",
    stat3Desc: "Combining Technology, Insurance Advisory, and Continuous Learning.",

    focusTitle: "Areas of Expertise",
    focus1Title: "Technology & Web",
    focus1Desc: "Building clean, ultra-fast static web experiences and leveraging modern digital tools.",
    focus2Title: "Insurance Advisory",
    focus2Desc: "Guiding families to secure their future through tailored life and health insurance planning.",
    focus3Title: "Knowledge Sharing",
    focus3Desc: "Publishing guides, technical insights, and educational content for lifelong growth.",
  },
  bn: {
    title: "শান্তনু মুখার্জি | আইটি পেশাদার এবং বীমা উপদেষ্টা",
    heroTitle: "প্রযুক্তি, আস্থা ও সমৃদ্ধি ",
    heroText: "আমার ডিজিটাল স্পেসে আপনাকে স্বাগতম। প্রায় ৩০ বছরের আইটি অভিজ্ঞতা এবং বীমা উপদেষ্টার কাজের মাধ্যমে, আমি মানুষকে ডিজিটাল ও আর্থিক বিষয়ে সঠিক দিকনির্দেশনা দিই।",
    heroCta: "আমার পরিচিতি দেখুন",

    aboutTitle: "আমার সম্পর্কে",
    aboutText: "আমি শান্তনু মুখার্জি—একজন অভিজ্ঞ আইটি পেশাদার, লাইসেন্সপ্রাপ্ত বীমা উপদেষ্টা এবং আজীবন শিক্ষার্থী। বিগত তিন দশক ধরে প্রযুক্তিগত সমস্যার সমাধান করার পাশাপাশি, আমি পরিবার ও পেশাজীবীদের আর্থিক সুরক্ষায় সাহায্য করে আসছি।",

    missionTitle: "আমার লক্ষ্য",
    missionText: "সহজ ভাষায় বীমা সমাধান, আর্থিক সচেতনতা বৃদ্ধি এবং প্রযুক্তির মাধ্যমে সততা ও বিশ্বাসের সাথে নতুন কিছু শেখার অনুপ্রেরণা দেওয়া।",

    stat1Title: "২৮+ বছর",
    stat1Desc: "তথ্য প্রযুক্তি এবং সিস্টেমে বহুবছরের অভিজ্ঞতা।",
    stat2Title: "১০০%",
    stat2Desc: "সম্পূর্ণ সততা এবং স্বচ্ছতার ওপর ভিত্তি করে পরামর্শ।",
    stat3Title: "৩টি মূল স্তম্ভ",
    stat3Desc: "প্রযুক্তি, বীমা পরামর্শ এবং নিরন্তর শিক্ষার সমন্বয়।",

    focusTitle: "দক্ষতার ক্ষেত্রসমূহ",
    focus1Title: "প্রযুক্তি ও ওয়েব",
    focus1Desc: "আধুনিক ডিজিটাল টুলস ব্যবহার করে পরিষ্কার এবং দ্রুতগতির ওয়েব অভিজ্ঞতা তৈরি করা।",
    focus2Title: "বীমা পরামর্শ",
    focus2Desc: "সঠিক জীবন ও স্বাস্থ্য বীমা পরিকল্পনার মাধ্যমে পরিবারের ভবিষ্যৎ সুরক্ষিত করা।",
    focus3Title: "জ্ঞান বিনিময়",
    focus3Desc: "ক্রমাগত উন্নতির জন্য শিক্ষণীয় নির্দেশিকা, প্রযুক্তিগত তথ্য এবং দরকারী সংস্থান শেয়ার করা।",
  },
};

// --- Footer Translations ---
export const footerTranslations: Record<string, FooterTranslation> = {
  en: {
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  bn: {
    rights: "সর্বস্বত্ব সংরক্ষিত।",
    privacy: "গোপনীয়তা নীতি",
    terms: "ব্যবহারের শর্তাবলী",
  },
};

// --- Contact Page Translations ---
export const contactTranslations: Record<string, ContactTranslation> = {
  en: {
    pageTitle: "Contact Me",
    heading: "Get in Touch",
    subheading: "Have a question about IT systems, insurance planning, or continuous learning? Send a secure message below or connect with me professionally.",
    
    linkedinLabel: "Professional Network",
    linkedinText: "Connect with me on LinkedIn for IT consulting and professional updates.",
    linkedinBtn: "View LinkedIn Profile",
    linkedinUrl: "https://www.linkedin.com/in/santanumukherjee/",
    
    locationLabel: "Location",
    locationValue: "Kolkata, West Bengal, India",
    
    formHeading: "Send a Direct Message",
    nameLabel: "Your Full Name",
    namePlaceholder: "e.g., Rahul Sharma",
    emailFormLabel: "Your Email Address",
    emailPlaceholder: "e.g., rahul@example.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "e.g., Question about Health Insurance",
    messageLabel: "Your Message",
    messagePlaceholder: "Write your message or inquiry here...",
    
    submitButton: "Send Message via Secure Form",
  },
  bn: {
    pageTitle: "যোগাযোগ",
    heading: "যোগাযোগ করুন",
    subheading: "আইটি সিস্টেম, বীমা পরিকল্পনা, বা শিক্ষার বিষয়ে কোনো প্রশ্ন আছে? নিচে একটি সুরক্ষিত বার্তা পাঠান অথবা পেশাদারভাবে সংযুক্ত হন।",
    
    linkedinLabel: "পেশাদার নেটওয়ার্ক",
    linkedinText: "আইটি কনসাল্টিং এবং পেশাদার আপডেটের জন্য লিঙ্কডইনে সংযোগ করুন।",
    linkedinBtn: "লিঙ্কডইন প্রোফাইল দেখুন",
    linkedinUrl: "https://www.linkedin.com/in/santanu-mukherjee/",
    
    locationLabel: "অবস্থান",
    locationValue: "কলকাতা, পশ্চিমবঙ্গ, ভারত",
    
    formHeading: "একটি বার্তা পাঠান",
    nameLabel: "আপনার পূর্ণ নাম",
    namePlaceholder: "যেমন: রাহুল শর্মা",
    emailFormLabel: "আপনার ইমেল ঠিকানা",
    emailPlaceholder: "যেমন: rahul@example.com",
    subjectLabel: "বিষয়",
    subjectPlaceholder: "যেমন: স্বাস্থ্য বীমা সম্পর্কে প্রশ্ন",
    messageLabel: "আপনার বার্তা",
    messagePlaceholder: "আপনার বার্তা বা জিজ্ঞাসা এখানে লিখুন...",
    
    submitButton: "বার্তা পাঠান",
  },
};

// --- Insurance FAQ Translations ---
export const insuranceFaqTranslations: Record<string, InsuranceFaqTranslation> = {
  en: {
    sectionTitle: "Frequently Asked Questions",
    sectionSubheading: "Clear answers to common questions about life, health, and family insurance planning.",
    faqs: [
      {
        question: "What is the key difference between Health and Term Life Insurance?",
        answer: "Health Insurance pays for medical emergencies, hospital bills, and treatments during your lifetime. Term Life Insurance provides a guaranteed financial lump sum to your family/dependents in the event of your untimely death.",
      },
      {
        question: "How does Cashless Hospitalization work during an emergency?",
        answer: "With a network hospital, you present your insurance e-card and ID. The hospital's insurance desk sends a pre-authorization request directly to the insurer. Once approved, the insurance company settles the bill directly with the hospital.",
      },
      {
        question: "What is No Claim Bonus (NCB) and why is it valuable?",
        answer: "NCB is a reward given by insurance companies for every year you don't file a claim. In health insurance, it increases your sum insured (often up to 50%-100% extra coverage) at no extra cost. In motor insurance, it reduces your renewal premium.",
      },
      {
        question: "How do I ensure my claims won't get rejected in the future?",
        answer: "Always practice complete disclosure: full transparency regarding existing medical conditions, past surgeries, smoking/drinking habits, and accurate family history when filling out your proposal form.",
      },
    ],
  },
  bn: {
    sectionTitle: "সাধারণ প্রশ্নাবলী (FAQ)",
    sectionSubheading: "জীবন, স্বাস্থ্য এবং পারিবারিক বীমা পরিকল্পনা সংক্রান্ত সাধারণ প্রশ্নের স্পষ্ট উত্তর।",
    faqs: [
      {
        question: "স্বাস্থ্য বীমা এবং টার্ম লাইফ বীমার মধ্যে প্রধান পার্থক্য কী?",
        answer: "স্বাস্থ্য বীমা আপনার জীবদ্দশায় চিকিৎসার খরচ এবং হাসপাতালের বিল বহন করে। টার্ম লাইফ বীমা আপনার অনুপস্থিতিতে পরিবারের আর্থিক নিরাপত্তার জন্য এককালীন অর্থ প্রদান করে।",
      },
      {
        question: "জরুরি অবস্থায় ক্যাশলেস হসপিটালাইজেশন কীভাবে কাজ করে?",
        answer: "নেটওয়ার্ক হাসপাতালে আপনার বীমা ই-কার্ড দেখানোর পর, হাসপাতাল সরাসরি বীমা কোম্পানির কাছে অনুমোদনের জন্য পাঠায়। অনুমোদন পেলেই বীমা কোম্পানি সরাসরি হাসপাতালের বিল মেটায়।",
      },
      {
        question: "নো ক্লেম বোনাস (NCB) কী এবং এটি কেন গুরুত্বপূর্ণ?",
        answer: "দাবি বা ক্লেম না করা বছরের জন্য বীমা কোম্পানি এই বোনাস দেয়। স্বাস্থ্য বীমায় এটি আপনার কভারেজের পরিমাণ বাড়িয়ে দেয়, আর মোটর বীমায় নবায়ন প্রিমিয়াম কমিয়ে দেয়।",
      },
      {
        question: "ভবিষ্যতে আমার ক্লেম যেন বাতিল না হয় তা কীভাবে নিশ্চিত করব?",
        answer: "বীমা ফর্ম পূরণ করার সময় পূর্বে বিদ্যমান শারীরিক অবস্থা, পুরনো অস্ত্রোপচার এবং পারিবারিক স্বাস্থ্যের তথ্য সম্পূর্ণ সততার সাথে প্রকাশ করা উচিত।",
      },
    ],
  },
};