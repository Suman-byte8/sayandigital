// ============================================================
//  Bengali (bn) translation bundle.
//  Mirrors the shape of en.js exactly — every key here must have
//  a matching key there. Select/award `value`s are intentionally
//  identical between languages (they're stored as-is in the
//  spreadsheet); only the *label* shown to the user differs.
// ============================================================

export default {
  brand: {
    mark: "SD",
    name: "Sayan Digital",
    event: "শারদ সম্মান ২০২৬",
  },

  nav: [
    { href: "#home", label: "হোম" },
    { href: "#process", label: "আবেদন প্রক্রিয়া" },
    { href: "#documents", label: "প্রয়োজনীয় নথি" },
    { href: "#application", label: "আবেদন করুন" },
  ],

  hero: {
    presented: "Sayan Digital presents",
    eyebrow: "দুর্গাপূজা সম্মাননা ২০২৬",
    titleLead: "শারদ",
    titleEm: "সম্মান",
    titleYear: "২০২৬",
    subtitle: "শারদ সম্মান ২০২৬ -এর জন্য অনলাইন আবেদন",
    text: "এবার শারদ সম্মানের আবেদন হোক আরও সহজ, দ্রুত ও ডিজিটাল। আপনার পূজা কমিটির তথ্য, পূজার বিবরণ ও প্রয়োজনীয় নথি জমা দিয়ে অংশগ্রহণ করুন।",
    primaryCta: "আবেদন শুরু করুন",
    ghostCta: "আবেদনের প্রক্রিয়া দেখুন",
    trust: ["✓ অনলাইন আবেদন", "✓ সহজ প্রক্রিয়া", "✓ তথ্য যাচাই"],
  },

  stats: [
    { num: "০১", label: "তথ্য পূরণ" },
    { num: "০২", label: "নথি সংযুক্ত" },
    { num: "০৩", label: "তথ্য যাচাই" },
    { num: "০৪", label: "আবেদন জমা" },
  ],

  process: {
    kicker: "সহজ চার ধাপ",
    heading: "আবেদনের প্রক্রিয়া",
    sub: "কয়েকটি সহজ ধাপে আপনার পূজা কমিটির আবেদন সম্পূর্ণ করুন।",
    cards: [
      { num: "০১", icon: "✎", title: "তথ্য পূরণ করুন", desc: "পূজা কমিটির প্রয়োজনীয় তথ্য দিন।" },
      { num: "০২", icon: "↥", title: "নথি সংযুক্ত করুন", desc: "প্রয়োজনীয় নথি আপলোড করুন।" },
      { num: "০৩", icon: "✓", title: "তথ্য যাচাই করুন", desc: "জমা দেওয়ার আগে সম্পূর্ণ আবেদনটি একবার দেখে নিন।" },
      { num: "০৪", icon: "→", title: "পেমেন্ট করে জমা দিন", desc: "আবেদন ফি প্রদান করে আবেদন নম্বরটি সংরক্ষণ করে রাখুন।" },
    ],
  },

  notice: {
    title: "আবেদনের আগে জেনে নিন",
    text: "সমস্ত তথ্য সঠিকভাবে পূরণ করুন। প্রয়োজনীয় নথি নির্ধারিত ফরম্যাটে আপলোড করুন এবং আবেদন নম্বরটি ভবিষ্যতের জন্য সংরক্ষণ করুন।",
  },

  applicationIntro: {
    kicker: "অনলাইন আবেদন",
    heading: "শারদ সম্মান ২০২৬ — আবেদনপত্র",
    sub: "আয়োজক ক্লাব / পূজা কমিটির পক্ষ থেকে আবেদনটি সঠিক তথ্য ও প্রয়োজনীয় নথি সহ পূরণ করুন।",
  },

  progressSteps: [
    { num: "০১", label: "কমিটির তথ্য" },
    { num: "০২", label: "আবেদনকারী" },
    { num: "০৩", label: "পূজার তথ্য" },
    { num: "০৪", label: "সম্মান বিভাগ" },
    { num: "০৫", label: "নথি" },
    { num: "০৬", label: "পর্যালোচনা" },
  ],

  committeeSection: {
    num: "০১",
    title: "পূজা কমিটির তথ্য",
    sub: "আপনার পূজা কমিটির মৌলিক তথ্য দিন।",
    fields: [
      { name: "clubName", label: "পূজা কমিটির নাম", required: true, full: true, placeholder: "যেমন: উত্তরপাড়া সার্বজনীন দুর্গোৎসব কমিটি" },
      { name: "venue", label: "ক্লাব / মণ্ডপের নাম", required: true, placeholder: "যেমন: দেশবন্ধু সংঘ" },
      { name: "established", label: "পূজার বয়স", required: true, type: "number", min: 1, max: 150, placeholder: "যেমন: ৫২ তম" },
      { name: "clubAddress", label: "পূজা মণ্ডপের সম্পূর্ণ ঠিকানা", required: true, full: true, type: "textarea", rows: 3, placeholder: "বাড়ি / রাস্তা / এলাকা / পাড়া" },
      { name: "district", label: "জেলা", required: true, placeholder: "যেমনঃ মালদা" },
      { name: "block", label: "ব্লক / পুরসভা", required: true, placeholder: "ব্লক / পুরসভার নাম" },
      { name: "pin", label: "পিন কোড", required: true, inputMode: "numeric", placeholder: "৬ সংখ্যার পিন কোড" },
      {
        name: "pujaType",
        label: "পূজার ধরন",
        required: true,
        type: "select",
        options: [
          { value: "বারোয়ারি", label: "বারোয়ারি" },
          { value: "ক্লাব পরিচালিত", label: "ক্লাব পরিচালিত" },
          { value: "আবাসিক", label: "আবাসিক" },
          { value: "অন্যান্য", label: "অন্যান্য" },
        ],
      },
      { name: "visitors", label: "আনুমানিক দর্শনার্থী", type: "number", min: 0, placeholder: "প্রতিদিন আনুমানিক সংখ্যা" },
      { name: "social", label: "ওয়েবসাইট / Facebook Page", placeholder: "https://..." },
      { name: "clubIntro", label: "পূজা কমিটির সংক্ষিপ্ত পরিচিতি", full: true, type: "textarea", rows: 4, placeholder: "কমিটির ইতিহাস ও কার্যক্রম সম্পর্কে সংক্ষেপে লিখুন" },
    ],
  },

  applicantSection: {
    num: "০২",
    title: "আবেদনকারীর তথ্য",
    sub: "কমিটির পক্ষ থেকে যোগাযোগকারী ব্যক্তির তথ্য দিন।",
    fields: [
      { name: "applicant", label: "আবেদনকারীর নাম", required: true, placeholder: "পূর্ণ নাম" },
      {
        name: "role",
        label: "পদ / দায়িত্ব",
        required: true,
        type: "select",
        options: [
          { value: "সভাপতি", label: "সভাপতি" },
          { value: "সম্পাদক", label: "সম্পাদক" },
          { value: "কোষাধ্যক্ষ", label: "কোষাধ্যক্ষ" },
          { value: "সদস্য", label: "সদস্য" },
          { value: "অন্যান্য", label: "অন্যান্য" },
        ],
      },
      { name: "mobile", label: "মোবাইল নম্বর", required: true, inputMode: "numeric", placeholder: "১০ সংখ্যার মোবাইল নম্বর" },
      { name: "whatsapp", label: "WhatsApp নম্বর", required: true, inputMode: "numeric", placeholder: "WhatsApp নম্বর" },
      { name: "email", label: "Email Address", required: true, type: "email", placeholder: "example@email.com" },
      { name: "alternate", label: "বিকল্প যোগাযোগ নম্বর", inputMode: "numeric", placeholder: "বিকল্প নম্বর" },
    ],
  },

  pujaSection: {
    num: "০৩",
    title: "পূজা সম্পর্কিত তথ্য",
    sub: "২০২৬ সালের পূজা সম্পর্কে বিস্তারিত তথ্য দিন।",
    fields: [
      { name: "pujaYear", label: "পূজার বছর", disabled: true, defaultValue: "২০২৬" },
      { name: "startDate", label: "পূজা শুরুর তারিখ", required: true, type: "date" },
      { name: "endDate", label: "পূজা শেষের তারিখ", required: true, type: "date" },
      { name: "idolType", label: "প্রতিমার ধরন", placeholder: "যেমন: সাবেকি / থিম" },
      { name: "theme", label: "এবারের পূজার থিম", full: true, placeholder: "থিমের নাম" },
      { name: "themeDetails", label: "থিমের সংক্ষিপ্ত বিবরণ", full: true, type: "textarea", rows: 4, placeholder: "থিমের ভাবনা ও বাস্তবায়ন সম্পর্কে লিখুন" },
      { name: "special", label: "পূজার বিশেষ আকর্ষণ", full: true, type: "textarea", rows: 3, placeholder: "বিশেষ আয়োজন, সাংস্কৃতিক অনুষ্ঠান ইত্যাদি" },
      { name: "eco", label: "পরিবেশবান্ধব উদ্যোগ", type: "textarea", rows: 3, placeholder: "যদি থাকে" },
      { name: "socialWork", label: "সামাজিক উদ্যোগ", type: "textarea", rows: 3, placeholder: "সমাজসেবামূলক কার্যক্রম" },
      { name: "security", label: "নিরাপত্তা ব্যবস্থা", type: "textarea", rows: 3, placeholder: "নিরাপত্তা ব্যবস্থা সম্পর্কে লিখুন" },
      { name: "visitorCare", label: "দর্শনার্থীদের জন্য বিশেষ ব্যবস্থা", type: "textarea", rows: 3, placeholder: "যদি থাকে" },
    ],
  },

  awardsSection: {
    num: "০৪",
    title: "শারদ সম্মান বিভাগ",
    sub: "আপনি যে বিভাগগুলিতে অংশগ্রহণ করতে চান সেগুলি নির্বাচন করুন।",
    errorText: "কমপক্ষে একটি সম্মান বিভাগ নির্বাচন করুন।",
    options: [
      { value: "সেরা প্রতিমা", title: "সেরা প্রতিমা", desc: "প্রতিমার শিল্প ও নির্মাণ" },
      { value: "সেরা মণ্ডপ", title: "সেরা মণ্ডপ", desc: "মণ্ডপের নকশা ও নির্মাণ" },
      { value: "সেরা থিম", title: "সেরা থিম", desc: "ভাবনা ও উপস্থাপনা" },
      { value: "সেরা আলোকসজ্জা", title: "সেরা আলোকসজ্জা", desc: "আলো ও পরিবেশ" },
      { value: "সেরা পরিবেশবান্ধব পূজা", title: "সেরা পরিবেশবান্ধব পূজা", desc: "পরিবেশ সচেতন উদ্যোগ" },
      { value: "সেরা সামাজিক উদ্যোগ", title: "সেরা সামাজিক উদ্যোগ", desc: "সামাজিক দায়বদ্ধতা" },
      { value: "সেরা সার্বিক পূজা", title: "সেরা সার্বিক পূজা", desc: "সামগ্রিক মূল্যায়ন" },
      { value: "অন্যান্য", title: "অন্যান্য", desc: "অন্যান্য বিভাগ" },
    ],
  },

  documentsSection: {
    num: "০৫",
    title: "প্রয়োজনীয় নথি",
    sub: "নির্ধারিত ফরম্যাটে প্রয়োজনীয় ফাইল সংযুক্ত করুন।",
    docs: [
      { id: "doc1", title: "পূজা কমিটির অনুমোদন পত্র", hint: "PDF, JPG, PNG • সর্বোচ্চ 5 MB" },
      { id: "doc3", title: "পূজা কমিটির ঠিকানার প্রমাণ", hint: "PDF, JPG, PNG • সর্বোচ্চ 5 MB" },
    ],
  },

  applicationFee: {
    amount: 160,
    label: "আবেদন ফি",
  },

  declaration: {
    title: "ঘোষণা",
    text: "আমি ঘোষণা করছি যে, এই আবেদনপত্রে প্রদত্ত সমস্ত তথ্য আমার জ্ঞান ও বিশ্বাস অনুযায়ী সঠিক। প্রয়োজনীয় নথি ও তথ্য যাচাইয়ের জন্য আয়োজক কর্তৃপক্ষের অনুমতি রয়েছে।",
    agree: "আমি উপরের ঘোষণা ও শর্তাবলীতে সম্মত।",
    submit: "আবেদন পর্যালোচনা করুন",
  },

  reviewLabels: [
    ["clubName", "পূজা কমিটি"],
    ["venue", "মণ্ডপ"],
    ["district", "জেলা"],
    ["applicant", "আবেদনকারী"],
    ["role", "পদ"],
    ["mobile", "মোবাইল"],
    ["email", "ইমেল"],
    ["theme", "পূজার থিম"],
  ],

  footer: {
    brand: "Sayan Digital",
    heading: "শারদ সম্মান ২০২৬",
    tagline: "ডিজিটাল আবেদন ও তথ্য ব্যবস্থাপনা",
    contactTitle: "যোগাযোগ",
    contact: [
      "মোবাইল: +91 77976 07126",
      "ইমেল: sayandigital.malda@gmail.com",
      "ঠিকানা: Sayan Digital-এর ঠিকানা",
    ],
    importantTitle: "গুরুত্বপূর্ণ",
    important: [
      { href: "#process", label: "আবেদন প্রক্রিয়া" },
      { href: "#documents", label: "প্রয়োজনীয় নথি" },
      { href: "#application", label: "অনলাইন আবেদন" },
    ],
    copyright: "© ২০২৬ Sayan Digital. All Rights Reserved.",
    madeBy: "তৈরি করেছেন",
    developerName: "Suman",
  },

  ui: {
    menuOpen: "মেনু খুলুন",
    selectPlaceholder: "নির্বাচন করুন",
    close: "বন্ধ করুন",
    galleryNoImages: (year) => `${year} সালের কোনও ছবি নেই।`,
    gallerySelectedAlt: "নির্বাচিত ছবি",
    galleryImageAlt: "গ্যালারির ছবি",
    galleryCloseImage: "ছবি বন্ধ করুন",
    languageSwitcher: { en: "EN", bn: "বাং", label: "ভাষা নির্বাচন করুন" },

    previewBanner: {
      title: "আবেদন এখনও শুরু হয়নি",
      textNoDate:
        "এটি আবেদন ফর্মের একটি প্রিভিউ মাত্র। আবেদন শীঘ্রই শুরু হবে — অনুগ্রহ করে পরে আবার দেখুন।",
      textWithDate: (date) =>
        `এটি আবেদন ফর্মের একটি প্রিভিউ মাত্র। ${date} থেকে আবেদন শুরু হবে।`,
    },

    documents: {
      noFileSelected: "কোনও ফাইল নির্বাচিত নয়",
      fileTooLarge: "ফাইলের আকার 5 MB-এর বেশি।",
      chooseFile: "ফাইল নির্বাচন",
    },

    reviewModal: {
      presented: "Sayan Digital presents",
      title: "আবেদনটি যাচাই করুন",
      sub: "জমা দেওয়ার আগে প্রদত্ত তথ্যগুলি একবার যাচাই করে নিন।",
      awardsRowLabel: "সম্মান বিভাগ",
      feeNote: (amount, label) =>
        `আবেদন জমা দিতে ₹${amount} ${label} প্রদান করতে হবে। পেমেন্ট সফল হলেই আবেদনটি জমা হবে।`,
      processingStatus: "পেমেন্ট প্রক্রিয়া চলছে, অনুগ্রহ করে অপেক্ষা করুন…",
      editButton: "তথ্য পরিবর্তন করুন",
      preparing: "প্রস্তুত করা হচ্ছে…",
      payButton: (amount) => `₹${amount} পেমেন্ট করে জমা দিন`,
    },

    successModal: {
      presented: "Sayan Digital presents",
      title: "আবেদন সফলভাবে জমা হয়েছে",
      text: "আপনার আবেদনটি সফলভাবে গ্রহণ করা হয়েছে। এই আবেদন নম্বরটি সংরক্ষণ করুন।",
      applicationIdLabel: "আপনার আবেদন নম্বর",
      paymentIdLabel: "পেমেন্ট রেফারেন্স নম্বর",
      printButton: "প্রিন্ট করুন",
      closeButton: "বন্ধ করুন",
    },

    failureModal: {
      presented: "Sayan Digital presents",
      titleRetryable: "পেমেন্ট সম্পন্ন হয়নি",
      titleFinal: "আবেদন জমা হয়নি",
      paymentIdLabel: "পেমেন্ট রেফারেন্স নম্বর (সাপোর্টের জন্য সংরক্ষণ করুন)",
      closeButton: "বন্ধ করুন",
      retryButton: "আবার চেষ্টা করুন",
    },

    processingModal: {
      presented: "Sayan Digital presents",
      title: "আবেদন প্রক্রিয়া চলছে",
      text: "অনুগ্রহ করে এই পাতাটি বন্ধ বা রিলোড করবেন না — আপনার নথি ও তথ্য সংরক্ষণ করা হচ্ছে।",
    },

    payment: {
      itemName: "শারদ সম্মান ২০২৬",
      itemDescription: (clubName, feeLabel) => `${clubName} — ${feeLabel}`,
      orderFailed: "পেমেন্ট শুরু করা যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।",
      gatewayLoadFailed: "পেমেন্ট গেটওয়ে লোড করা যায়নি। ইন্টারনেট সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।",
      dismissed: "পেমেন্ট সম্পন্ন হয়নি। অনুগ্রহ করে আবার চেষ্টা করুন।",
      failed: (reason) => `পেমেন্ট ব্যর্থ হয়েছে। ${reason || 'অনুগ্রহ করে আবার চেষ্টা করুন।'}`,
      failedGenericReason: "অনুগ্রহ করে আবার চেষ্টা করুন।",
      savedFailedAfterCharge:
        "পেমেন্ট সফল হয়েছে কিন্তু আবেদন জমা হয়নি। অনুগ্রহ করে নিচের রেফারেন্স নম্বরটি সংরক্ষণ করে সাপোর্টে যোগাযোগ করুন।",
      genericSubmitFailed: "আবেদন জমা হয়নি। অনুগ্রহ করে আবার চেষ্টা করুন।",
    },
  },

  validation: {
    required: "এই ঘরটি পূরণ করুন।",
    mobile: "সঠিক ১০ সংখ্যার মোবাইল নম্বর লিখুন (৬–৯ দিয়ে শুরু)।",
    pin: "সঠিক ৬ সংখ্যার পিন কোড লিখুন।",
    email: "সঠিক ইমেল ঠিকানা লিখুন।",
    number: "সঠিক সংখ্যা লিখুন।",
    date: "সঠিক তারিখ নির্বাচন করুন।",
    dateRange: "শেষের তারিখ শুরুর তারিখের আগে হতে পারে না।",
    minValue: (n) => `মান কমপক্ষে ${n} হতে হবে।`,
    maxValue: (n) => `মান সর্বোচ্চ ${n} হতে পারে।`,
    awardsRequired: "কমপক্ষে একটি সম্মান বিভাগ নির্বাচন করুন।",
  },
}
