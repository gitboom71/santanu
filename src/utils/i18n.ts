// src/utils/i18n.ts

// --- Types ---
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
    heroTitle: "প্রযুক্তি, বিশ্বাস এবং আর্থিক সমৃদ্ধির মেলবন্ধন",
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