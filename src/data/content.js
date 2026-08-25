// ============================================================
//  Centralized site content & form configuration
//  All Bengali copy and field definitions live here so the
//  components stay presentational and easy to maintain.
// ============================================================

export const BRAND = {
  mark: "SD",
  name: "Sayan Digital",
  event: "শারদ সম্মান ২০২৬",
};

export const NAV_LINKS = [
  { href: "#home", label: "হোম" },
  { href: "#process", label: "আবেদন প্রক্রিয়া" },
  { href: "#documents", label: "প্রয়োজনীয় নথি" },
  { href: "#application", label: "আবেদন করুন" },
];

export const HERO = {
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
};

export const STATS = [
  { num: "০১", label: "তথ্য পূরণ" },
  { num: "০২", label: "নথি সংযুক্ত" },
  { num: "০৩", label: "তথ্য যাচাই" },
  { num: "০৪", label: "আবেদন জমা" },
];

export const PROCESS = {
  kicker: "সহজ চার ধাপ",
  heading: "আবেদনের প্রক্রিয়া",
  sub: "কয়েকটি সহজ ধাপে আপনার পূজা কমিটির আবেদন সম্পূর্ণ করুন।",
  cards: [
    {
      num: "০১",
      icon: "✎",
      title: "তথ্য পূরণ করুন",
      desc: "পূজা কমিটির প্রয়োজনীয় তথ্য দিন।",
    },
    {
      num: "০২",
      icon: "↥",
      title: "নথি সংযুক্ত করুন",
      desc: "প্রয়োজনীয় নথি ও পূজার ছবি আপলোড করুন।",
    },
    {
      num: "০৩",
      icon: "✓",
      title: "তথ্য যাচাই করুন",
      desc: "জমা দেওয়ার আগে সম্পূর্ণ আবেদনটি একবার দেখে নিন।",
    },
    {
      num: "০৪",
      icon: "→",
      title: "আবেদন জমা দিন",
      desc: "আবেদন নম্বরটি সংরক্ষণ করে রাখুন।",
    },
  ],
};

export const NOTICE = {
  title: "আবেদনের আগে জেনে নিন",
  text: "সমস্ত তথ্য সঠিকভাবে পূরণ করুন। প্রয়োজনীয় নথি নির্ধারিত ফরম্যাটে আপলোড করুন এবং আবেদন নম্বরটি ভবিষ্যতের জন্য সংরক্ষণ করুন।",
};

export const APPLICATION_INTRO = {
  kicker: "অনলাইন আবেদন",
  heading: "শারদ সম্মান ২০২৬ — আবেদনপত্র",
  sub: "আয়োজক ক্লাব / পূজা কমিটির পক্ষ থেকে আবেদনটি সঠিক তথ্য ও প্রয়োজনীয় নথি সহ পূরণ করুন।",
};

export const PROGRESS_STEPS = [
  { num: "০১", label: "কমিটির তথ্য" },
  { num: "০২", label: "আবেদনকারী" },
  { num: "০৩", label: "পূজার তথ্য" },
  { num: "০৪", label: "সম্মান বিভাগ" },
  { num: "০৫", label: "নথি" },
  { num: "০৬", label: "পর্যালোচনা" },
];

// ---- FORM FIELD CONFIG ----------------------------------------------------
// type: text | number | date | email | textarea | select
// full: spans both columns | options: for select | disabled: read-only

export const COMMITTEE_SECTION = {
  num: "০১",
  title: "পূজা কমিটির তথ্য",
  sub: "আপনার পূজা কমিটির মৌলিক তথ্য দিন।",
  fields: [
    {
      name: "clubName",
      label: "পূজা কমিটির নাম",
      required: true,
      full: true,
      placeholder: "যেমন: উত্তরপাড়া সার্বজনীন দুর্গোৎসব কমিটি",
    },
    {
      name: "venue",
      label: "ক্লাব / মণ্ডপের নাম",
      required: true,
      placeholder: "যেমন: দেশবন্ধু সংঘ",
    },
    {
      name: "established",
      label: "পূজার বয়স",
      required: true,
      type: "number",
      min: 1800,
      max: 2026,
      placeholder: "যেমন: ৫২ তম",
    },
    {
      name: "clubAddress",
      label: "পূজা মণ্ডপের সম্পূর্ণ ঠিকানা",
      required: true,
      full: true,
      type: "textarea",
      rows: 3,
      placeholder: "বাড়ি / রাস্তা / এলাকা / পাড়া",
    },
    {
      name: "district",
      label: "জেলা",
      required: true,
      placeholder: "যেমনঃ মালদা",
    },
    {
      name: "block",
      label: "ব্লক / পুরসভা",
      required: true,
      placeholder: "ব্লক / পুরসভার নাম",
    },
    {
      name: "pin",
      label: "পিন কোড",
      required: true,
      inputMode: "numeric",
      placeholder: "৬ সংখ্যার পিন কোড",
    },
    {
      name: "pujaType",
      label: "পূজার ধরন",
      required: true,
      type: "select",
      options: ["বারোয়ারি", "ক্লাব পরিচালিত", "আবাসিক", "অন্যান্য"],
    },
    {
      name: "visitors",
      label: "আনুমানিক দর্শনার্থী",
      type: "number",
      min: 0,
      placeholder: "প্রতিদিন আনুমানিক সংখ্যা",
    },
    {
      name: "social",
      label: "ওয়েবসাইট / Facebook Page",
      placeholder: "https://...",
    },
    {
      name: "clubIntro",
      label: "পূজা কমিটির সংক্ষিপ্ত পরিচিতি",
      full: true,
      type: "textarea",
      rows: 4,
      placeholder: "কমিটির ইতিহাস ও কার্যক্রম সম্পর্কে সংক্ষেপে লিখুন",
    },
  ],
};

export const APPLICANT_SECTION = {
  num: "০২",
  title: "আবেদনকারীর তথ্য",
  sub: "কমিটির পক্ষ থেকে যোগাযোগকারী ব্যক্তির তথ্য দিন।",
  fields: [
    {
      name: "applicant",
      label: "আবেদনকারীর নাম",
      required: true,
      placeholder: "পূর্ণ নাম",
    },
    {
      name: "role",
      label: "পদ / দায়িত্ব",
      required: true,
      type: "select",
      options: ["সভাপতি", "সম্পাদক", "কোষাধ্যক্ষ", "সদস্য", "অন্যান্য"],
    },
    {
      name: "mobile",
      label: "মোবাইল নম্বর",
      required: true,
      inputMode: "numeric",
      placeholder: "১০ সংখ্যার মোবাইল নম্বর",
    },
    {
      name: "whatsapp",
      label: "WhatsApp নম্বর",
      required: true,
      inputMode: "numeric",
      placeholder: "WhatsApp নম্বর",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "example@email.com",
    },
    {
      name: "alternate",
      label: "বিকল্প যোগাযোগ নম্বর",
      inputMode: "numeric",
      placeholder: "বিকল্প নম্বর",
    },
  ],
};

export const PUJA_SECTION = {
  num: "০৩",
  title: "পূজা সম্পর্কিত তথ্য",
  sub: "২০২৬ সালের পূজা সম্পর্কে বিস্তারিত তথ্য দিন।",
  fields: [
    {
      name: "pujaYear",
      label: "পূজার বছর",
      disabled: true,
      defaultValue: "২০২৬",
    },
    {
      name: "idolType",
      label: "প্রতিমার ধরন",
      placeholder: "যেমন: সাবেকি / থিম",
    },
    {
      name: "theme",
      label: "এবারের পূজার থিম",
      full: true,
      placeholder: "থিমের নাম",
    },
    {
      name: "themeDetails",
      label: "থিমের সংক্ষিপ্ত বিবরণ",
      full: true,
      type: "textarea",
      rows: 4,
      placeholder: "থিমের ভাবনা ও বাস্তবায়ন সম্পর্কে লিখুন",
    },
    {
      name: "special",
      label: "পূজার বিশেষ আকর্ষণ",
      full: true,
      type: "textarea",
      rows: 3,
      placeholder: "বিশেষ আয়োজন, সাংস্কৃতিক অনুষ্ঠান ইত্যাদি",
    },
    {
      name: "eco",
      label: "পরিবেশবান্ধব উদ্যোগ",
      type: "textarea",
      rows: 3,
      placeholder: "যদি থাকে",
    },
    {
      name: "socialWork",
      label: "সামাজিক উদ্যোগ",
      type: "textarea",
      rows: 3,
      placeholder: "সমাজসেবামূলক কার্যক্রম",
    },
    {
      name: "security",
      label: "নিরাপত্তা ব্যবস্থা",
      type: "textarea",
      rows: 3,
      placeholder: "নিরাপত্তা ব্যবস্থা সম্পর্কে লিখুন",
    },
    {
      name: "visitorCare",
      label: "দর্শনার্থীদের জন্য বিশেষ ব্যবস্থা",
      type: "textarea",
      rows: 3,
      placeholder: "যদি থাকে",
    },
  ],
};

export const AWARDS_SECTION = {
  num: "০৪",
  title: "শারদ সম্মান বিভাগ",
  sub: "আপনি যে বিভাগগুলিতে অংশগ্রহণ করতে চান সেগুলি নির্বাচন করুন।",
  errorText: "কমপক্ষে একটি সম্মান বিভাগ নির্বাচন করুন।",
  options: [
    {
      value: "সেরা প্রতিমা",
      title: "সেরা প্রতিমা",
      desc: "প্রতিমার শিল্প ও নির্মাণ",
    },
    {
      value: "সেরা মণ্ডপ",
      title: "সেরা মণ্ডপ",
      desc: "মণ্ডপের নকশা ও নির্মাণ",
    },
    { value: "সেরা থিম", title: "সেরা থিম", desc: "ভাবনা ও উপস্থাপনা" },
    { value: "সেরা আলোকসজ্জা", title: "সেরা আলোকসজ্জা", desc: "আলো ও পরিবেশ" },
    {
      value: "সেরা পরিবেশবান্ধব পূজা",
      title: "সেরা পরিবেশবান্ধব পূজা",
      desc: "পরিবেশ সচেতন উদ্যোগ",
    },
    {
      value: "সেরা সামাজিক উদ্যোগ",
      title: "সেরা সামাজিক উদ্যোগ",
      desc: "সামাজিক দায়বদ্ধতা",
    },
    {
      value: "সেরা সার্বিক পূজা",
      title: "সেরা সার্বিক পূজা",
      desc: "সামগ্রিক মূল্যায়ন",
    },
    { value: "অন্যান্য", title: "অন্যান্য", desc: "অন্যান্য বিভাগ" },
  ],
};

export const DOCUMENTS_SECTION = {
  num: "০৫",
  title: "প্রয়োজনীয় নথি ও ছবি",
  sub: "নির্ধারিত ফরম্যাটে প্রয়োজনীয় ফাইল সংযুক্ত করুন।",
  docs: [
    {
      id: "doc1",
      title: "পূজা কমিটির অনুমোদন পত্র",
      hint: "PDF, JPG, PNG • সর্বোচ্চ 5 MB",
    },
    {
      id: "doc3",
      title: "পূজা কমিটির ঠিকানার প্রমাণ",
      hint: "PDF, JPG, PNG • সর্বোচ্চ 5 MB",
    },
    {
      id: "doc4",
      title: "পেমেন্টের স্ক্রিনশট / প্রমান",
      hint: "PDF, JPG, PNG • সর্বোচ্চ 5 MB",
    },
  ],
  photo: {
    title: "পূজার ছবি",
    hint: "মণ্ডপ, প্রতিমা, আলোকসজ্জা ও থিমের ছবি আপলোড করুন। সর্বোচ্চ ৮টি ছবি।",
    max: 8,
  },
};

export const DECLARATION = {
  title: "ঘোষণা",
  text: "আমি ঘোষণা করছি যে, এই আবেদনপত্রে প্রদত্ত সমস্ত তথ্য আমার জ্ঞান ও বিশ্বাস অনুযায়ী সঠিক। প্রয়োজনীয় নথি ও তথ্য যাচাইয়ের জন্য আয়োজক কর্তৃপক্ষের অনুমতি রয়েছে।",
  agree: "আমি উপরের ঘোষণা ও শর্তাবলীতে সম্মত।",
  submit: "আবেদন পর্যালোচনা করুন",
};

// Review modal label map (name -> Bengali label)
export const REVIEW_LABELS = [
  ["clubName", "পূজা কমিটি"],
  ["venue", "মণ্ডপ"],
  ["district", "জেলা"],
  ["applicant", "আবেদনকারী"],
  ["role", "পদ"],
  ["mobile", "মোবাইল"],
  ["email", "ইমেল"],
  ["theme", "পূজার থিম"],
];

export const FOOTER = {
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
  developerPortfolio: "https://sumancodes.netlify.app",
};

export const GALLERY_DATA = {
  2025: [
    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/557588734_1229439082531682_8727972765842479272_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BDUtM3Soh-0Q7kNvwFsMCx9&_nc_oc=Adpw9yXG2jgrgWG_NtFYd6ayEEtCosF43kFXY7xrxf1s4_Ngn91DxlBiV9GIQDUYnvb2r0c9HSllJQx-rVe6shD4&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=vpGY0KoRMWBrk9_OkbZFgw&_nc_ss=7b2a8&oh=00_AQGHxvI6SNBIMZSnhGtwoEjJbzXnFt8688-vpJGe54Ee3Q&oe=6A9261A2",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/556973173_1229439065865017_5459589837346517231_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=shqYAygYlYUQ7kNvwHkv77_&_nc_oc=AdqfCSify6dExdmU1A0Tc4wOZsO3O9yaIyBy3F4ddbqMUnpoqtvU3hB99k18ejl5JLtYEtb99hLprrSvxNnnu8nn&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=Id7re6e04zehLn0cMPLCoA&_nc_ss=7b2a8&oh=00_AQELrzAe32BjLpKegijYJV76lLy129BsavzTg-kIMoTJ9Q&oe=6A923702",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/556591249_1229437709198486_8147053773205289377_n.jpg?stp=dst-jpg_tt6&cstp=mx1152x2048&ctp=s1152x2048&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NgYExsSsAv0Q7kNvwFKv3FB&_nc_oc=AdpGxl6NPSLe7giS3_7A3gZCisouuZz4MbhatfJqRf52L0QhGAcVKWgKC8953tGmDH4QkHFwHfnIvzvB-juSh4qH&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=IQLMcohKiBA54UPtZJJhlw&_nc_ss=7b2a8&oh=00_AQGJXYf3xaavLvBZT3HYC28aFd3qT4-BR4fx9TfLlTlCzg&oe=6A925577",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/557611557_1229437699198487_651501049514678287_n.jpg?stp=dst-jpg_tt6&cstp=mx1152x2048&ctp=s1152x2048&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ppgo9vEYjYwQ7kNvwGOmMlz&_nc_oc=AdqEkqARr0CS9YVRxkQs4jMEyCWngqFL5vFcxJ2SPFVE23a_VqKcimXY0wsTs0xEhpuJjmyKmEmIy2kaOMHFUOEQ&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=dheQyWA0k3dy7klcqV5qjg&_nc_ss=7b2a8&oh=00_AQEz_ujSnAB7OcMCDpyQV6f7WWCPpN_eTq0TIgafFm71CA&oe=6A92416C",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/556981709_1229436179198639_3748087836999167395_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aMjyc6XRU-gQ7kNvwE-ipc_&_nc_oc=AdqThng4ASrDBFEQf1joNjq_sdp7KTO0vZK-xwFAK6MR80UT4ZR28foWEadgKnkN41UDJxkvboPyUbvZyhb1rCeH&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=hUmnJEuDzjSRBjRAHlnlbQ&_nc_ss=7b2a8&oh=00_AQEejFY4dBhzgXCflvX9a7ot5KZtD7xMJO0ruDFrefaD0g&oe=6A923D69",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/557600880_1229436072531983_8816075854061876482_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=w9ATo04J3HEQ7kNvwHx0ufc&_nc_oc=AdpO3lvklZTRPdKj92bIQZmXNKhd8KNA3FBKKMQLXWoDMt2psCM3SxsJjmwJwMkPDkzcD2YLQQDBVRHKvwLLinpa&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=MehIXLkNYhj-MaeN0-qcIA&_nc_ss=7b2a8&oh=00_AQHQgGH-pQiDJIJIQwnVjXiFpiia5mLDsCYkgNcnL-3oDA&oe=6A925749",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/556297283_1229433995865524_3549385139314606579_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5qCl225dUOIQ7kNvwFqIYLV&_nc_oc=AdqqR8JZMhhdMeaOHVdQcoc3NMQrZUEm6bi73HEqtFwNs999a1Z4-Sh8iNT-GLCVASJryQelKeUEcAzmhtE-leWi&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=NdR5Oh3HeaHsPmZmOo_BFA&_nc_ss=7b2a8&oh=00_AQEAFNG7mCkZmeA1hHabjmkTrDht4vJXBPIWK7anZpQU_Q&oe=6A926548",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/557044543_1229433129198944_8292481000881260977_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XT9wZjm3U7IQ7kNvwEcC3Uj&_nc_oc=AdoxP0dIDX0zMEIj02rTCt4wXPfacXmSBxn9EqS28pJKR2v4nZBgB4YeJCN8EeTdtaDSl2cNKcrayd7eXJnLcq2a&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=zosJHqo0gowG5z8zLqHCNw&_nc_ss=7b2a8&oh=00_AQFKDezQ9G_Kwy11-eH012kKy6raUgC2_dQBKH5nw1ssSQ&oe=6A925B9E",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/557632005_1229430239199233_4040524361940508132_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1152&ctp=s2048x1152&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wKM-5F2YkJsQ7kNvwGkGZGx&_nc_oc=Adr-RhIaKAxcovB22vO_PdbJ9l0A2jv1jhusPW6ogpAMVEtz7laPUQPf0LhCYHY2X1o2kVta8ZXPdNteEeaPe6Fv&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=4s1CXj4DLh7poCVZO2riog&_nc_ss=7b2a8&oh=00_AQGBXvlW7WryTbHCnAZ9N6XdTBeHYMYddhDk90oKgVa9yQ&oe=6A9242A4",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/557631934_1229426835866240_4676946142308873249_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx960x540&ctp=s960x540&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VzBGZ0mlMFAQ7kNvwELHJI6&_nc_oc=AdrM56LBxOHScM1Vw-Aso_cMS2eSrX59ewtTRD6_D0bg-IQk9HWeLYPIetcgWvvslLAcKigM8dwi54rpE4ydrSDw&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=1fSD_Xzmgasja6DqAhRFAA&_nc_ss=7b2a8&oh=00_AQEtyWNGkq5Vhgxqb-M5tdLwgM3KOZPhEeX_ZApl7val3g&oe=6A9259D7",
  ],

  2024: [
    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/487299890_1083360220472903_1762389769240438106_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx960x720&ctp=s960x720&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aD_lrqyUZ5YQ7kNvwHi5qVz&_nc_oc=AdrUPBky65HkNEaY0vLlZ2ldJbXWDJn-QHxGWFS0lSANJlMx4DgwFHt0-yu6h1jtBj0TOeK9TH8KkT-g0SqKFEWg&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=45RWzivLtQmdO-x12C16Zg&_nc_ss=7b2a8&oh=00_AQGzArzeKOHlA24DsQ_-JsJ2IdRSx31SbNEBfkfdl0GwNg&oe=6A9237C8",

    "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/487425733_1083360137139578_2159836374474478228_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NFUxCM1CDaAQ7kNvwHUbNc-&_nc_oc=Adp_qWNu-YXWJUSslNPGZ1NtT_V9HXQAZt7nuHk-tA2uHfGaPEkOd1tb8JfN5HEIOOjTX1RSOKT4LQyWyHIETuRy&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=wwAHqWH71R469KfY5XPHCQ&_nc_ss=7b2a8&oh=00_AQHGXwSQPUZxkZSuJ8A-NtkktyAqoOmYORX_oJZniALq7g&oe=6A923D35",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/486321052_1083360173806241_5925818446580045101_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx960x720&ctp=s960x720&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6_S3g-Omd9cQ7kNvwFNoWBJ&_nc_oc=AdosCHNoOlZmtI_7SpSJYtrqef-GKVceQxaOjHxYnofNJ7Z5HfwaMaHRWIr0XTwOSpsktjDGRTUkBTw7g52-4TjA&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=b_TH04_NWEaPlltISMrKBg&_nc_ss=7b2a8&oh=00_AQEs4xOMmsnjptuYWbxwXtOWNc3wAh1641XgRjSt4pOB5g&oe=6A926B27",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/486863718_1083359943806264_2600458488879581497_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx960x720&ctp=s960x720&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=s9RhjppF6lwQ7kNvwHdItwr&_nc_oc=AdpYTFFzQKIzaLjaByzrY4BeJObbbf0mJR4gAq8gbmt4c3whwVhfCJB2_fhIdKxfsNm3hl--TmVFSR2BZaT6nf2W&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=ysOh7s21k9VluE5QTuRfQQ&_nc_ss=7b2a8&oh=00_AQGZXap4bKtxOiR7xldnV2we3H2VqD37PpAT9jqSUKQaqQ&oe=6A926056",

    "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/486264125_1083360223806236_6128937838670688252_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_hp-7KcnkZ0Q7kNvwFQZSKT&_nc_oc=Adpr7nOI5Kxh-M4dgDlL9O2lf-Ya2j1EHKnP0RKmfNynyMc62jn5pA2Mpt0XynBkpvlCh8DkCD_mjHHQLufCcG7Z&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=ccqfic2d4DaIWiiQN-mr1Q&_nc_ss=7b2a8&oh=00_AQFH14seucv0y0fyO4TxLAVb72-DBSRkt4Q7qhBtChvmMw&oe=6A9266F4",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/487104050_1083359987139593_2350587990037721217_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=y9UiumoqoMAQ7kNvwFxbuT_&_nc_oc=AdpImD98rKeBTs9STW-SJO0Jz3rwd7XRRXyz5vWXgayHvrSobKhTMUyPzwyniX2Qs4hCFQlo-wuFBlwWuHmZufIQ&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=qXW-ocDa9V7d1KTz9YgIxA&_nc_ss=7b2a8&oh=00_AQF1y8_jFJBxRseRFXHSVNAGgK5Dhobzh-ItYygX9iYTHA&oe=6A92507E",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/486303839_1083360010472924_4920389764871364835_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=f2QO7gmdvJcQ7kNvwH-ESHC&_nc_oc=AdpMJsl2epNNH_aVAiiEV14FO8rWVh7pgPVu6qqthVa5nqQ4DgKfjq_7MkChnTSiEyNKIID1kKcZ4Kin83OH9--s&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=R-_gX9SfQxsRqOmSo0LkUA&_nc_ss=7b2a8&oh=00_AQFbTnnFEFVjOHk1GD3GXKdJBW78Iu2tmy5hw6IbINL2PQ&oe=6A9264BE",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/486156518_1083360213806237_7956318323376116585_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kxrstEsNZXkQ7kNvwETcRC1&_nc_oc=Adrk6Qee5CgqH6OdQm8nLht-ZMD_A2J5zxnDZOhqxpqZr4ZrH3AY_9T39ktVRxvczcNnkYnoBXCXiNs0AIx7RNCA&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=bI8mhViDk12n3sinAu0n-A&_nc_ss=7b2a8&oh=00_AQEhYXlat5HkWqdjmZfuONivutTryNUzt2Kx5xij99UJ4w&oe=6A924AF0",

    "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/486353223_1083360263806232_8540359416971085741_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FF9n5u3rrf8Q7kNvwHGdKSl&_nc_oc=Adp94gMhP9qhCsLDMIhnJy4iaTZsmjk7fV9-sNn_vucGsjXM6od5NZ2cAdhFpDtqiTvthhjwWrYB2PT_9N_cykZ6&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=KOGk5d1XgvMvlxGsStUVZA&_nc_ss=7b2a8&oh=00_AQFVeq6eUNFCmQHU6J09_ptBWrWFIMVE8KCe2FomVyrrow&oe=6A923F45",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/487456964_1083360283806230_54702180478878764_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=CBmf-d0hT2QQ7kNvwHRbFCy&_nc_oc=AdqbOZmZoFyn5CTsm9qI8FVGYglS5XablQybrUomZ2fbJ3jfcMWsjxOUHqYMO-CYAIQginu3aWB2fomDOcYeg9ih&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=CQl-82NYhsDtX2dRCdweSA&_nc_ss=7b2a8&oh=00_AQF3fN0uD1CUjv3wi1mucHFKHpeUi4QGInxLGPGfiLasFQ&oe=6A926CAD",

    "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/486377782_1083360273806231_4459959441882977731_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5WL_oD-4pFsQ7kNvwFAOGEM&_nc_oc=AdruKTTy0UZ-Zp9NCHvAemNaMhkOyAYWeHrJU7Di9O3Iwl_rMpqsi6fU90kjDB6fz9AE-CeCw_kX8DbRBMy1pEse&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=URhZstnAB4REAEjHnA4JNA&_nc_ss=7b2a8&oh=00_AQGZL6OUlP4SLr2ZLosMA4PS6si_qPvz2QFRfVJkHk9YkA&oe=6A926D71",
  ],

  2023: [
    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/484825414_1074862047989387_1133351204077307006_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=D33Tt4AVYVEQ7kNvwE-80k8&_nc_oc=AdrkgvaFtocIqQf8PA2inumKBT4Bk3d-LlaxNwoVO3FPT7SSBnpkVwOiyHFRjRaH4Iyox_QP1Uxx4YlAAX6lx8u-&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=aVdUXJTAXkZ-q0YDQ-9G9A&_nc_ss=7b2a8&oh=00_AQGiMAqIsUk1vM5KZRpWQeCrHQtTJ_Urrs714aXn_gnLMQ&oe=6A9267D1",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/485155226_1074862101322715_3884894030921298303_n.jpg?stp=dst-jpg_tt6&cstp=mx3057x1371&ctp=s3057x1371&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Tfw0k67cLGAQ7kNvwFaAwjg&_nc_oc=AdoxqsZBxla38mdDSteaBlrSADG6Dy0D7LkfuBAWxU_GbidW4IBA3MSFiihA1kZL24R1K-YsewbRQZEb4Jkm5tIW&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=7WJmqXaDonJPmWLnlaCwqA&_nc_ss=7b2a8&oh=00_AQF0V8sKvxxAHBN1ijQKYa4o6Qi7hVOg6j1hRgj2LTw4LA&oe=6A923A6E",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/485175075_1074862071322718_8607716950925600223_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B4PVFjfpG1AQ7kNvwHa_GhZ&_nc_oc=AdqXNREpv1k0w5aPELe5Le-JsUKEpWOXym8tBZgFYTdKHEvq6ZOl7qTldWfSSRfPJCzdNNauRCwucoi9ZGr59Ksg&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=0UW4xLvcvZLOzNnvo6lKpA&_nc_ss=7b2a8&oh=00_AQE2fT4uIk7tVt4VHxSYIqbRsp62UaFqn3XGkpKOz5XCYQ&oe=6A9263AD",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/484359602_1074861891322736_6843833307282773661_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=H58GjszpPZQQ7kNvwFq9u4q&_nc_oc=Adp29VPwHzLpJHs4YqYcpqySaCz9mRakhudOuQcgMD2BNaGCx8jJR7uk5sP1P8JTeZDsi2x6cdQAAa9eehqWEXz9&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=cURpUND-EUqX0LyNovdb5Q&_nc_ss=7b2a8&oh=00_AQGCaUCYryGzaxzuQ2t0aQpa5p-vlou5Aa4my2KoGXmsnw&oe=6A926C59",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/484462755_1074861974656061_2827626256235175237_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=abqMPMj713UQ7kNvwE4A5tm&_nc_oc=AdoyC7lfF8a7_u1je74zxu2JBNDXL4OiiR0oiuKtjt_Ba-kiWlbJ9SjP5vp_D_E8gsUa1oouHRHIX8mdiHyElN0y&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=0YlRJQYNbDYFe4unCzuo3Q&_nc_ss=7b2a8&oh=00_AQHVZ_BAiZJ8EIWDAGmH_7Z3VP8C3A5c4z1HBnS7iiCGsA&oe=6A924207",

    "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/485017432_1074862024656056_860479875086187475_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=P9Wmd4qM3dEQ7kNvwFimzOn&_nc_oc=Adp04-qFt6826Nr8aJxGV0k1sKMzGqMFF9_tIpbiWLpopoQ0gUzpV14efkOCd0hukBcH_lpBjlGaSP6CXx63Vh2P&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=hISEk-qlGcHNFu4AxnsTzw&_nc_ss=7b2a8&oh=00_AQHBOPoys6dBcwemIz08vUK61XcvBRMz3bRXYOEJEzFp-A&oe=6A923BBC",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/484719093_1074861971322728_8011949414707404317_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=a1_WMwE28FQQ7kNvwHZ62I_&_nc_oc=AdpDvPS5is0QCp8BneNhlPFtGjBmjsQvQkDvJ-6CnBFJGdZDd43cg0lv1f2f-QUpo9Y0hum47wq7UjsRpSWgVYdy&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=yxen0-_L3EE2xKZvOgn8kw&_nc_ss=7b2a8&oh=00_AQFtuioP-RBmmcRDc3NCi09odzn74EAqymwnHEaIUj24HA&oe=6A924B95",

    "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/484719434_1074862037989388_8283179117397743231_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lcEyZioWCOQQ7kNvwGIjmNX&_nc_oc=Adq9Ry2FJPpcFG8PiDQUv-CFQj_tiGi64TcFwxv8d-uU1qgOuelw0WwnwcLBwI1kZZTjvulYRdFT3HcimyHzqdB_&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=Xx3T2AXsAFm-Wvs15_wPqA&_nc_ss=7b2a8&oh=00_AQHyv4vyOoFeV2qNtgdAb5eUqNfdOB6K4EePH-g3h6aOeA&oe=6A923E02",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/485201752_1074862084656050_3243687009798800676_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j8JsQ9ulox4Q7kNvwHIg6Ic&_nc_oc=AdpCdzt--YLD7l3MkCCNj4BIz-l1THZZuXE9uMmIME4l7EKoFbRwNjb3QTm6-TZ7lGEAaqvAgrX4jQAsxxwMVAC1&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=K2Q_AX84rVphWOVjm15g3w&_nc_ss=7b2a8&oh=00_AQEzQagIx2YC9p-0QjobPI08t8mw5gv3c7T8wI2NjZvyRw&oe=6A92675D",

    "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/484484238_1074862014656057_3578800159656888902_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nHK-tEGC-xgQ7kNvwG9aihE&_nc_oc=AdpOf2nE83o_PzVKF-v0SzLwkdcAZqxr4NLSqOlACEOevUypg36UG4Tud9SPw-BYvL-q03JD_ArcT0ndOc3OQvWt&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=EIMsJgqLDU9Vty8jgDi2Pw&_nc_ss=7b2a8&oh=00_AQET2e2qMiiVaYlXPyGZSbyLtXJjdHrT9MN2lA0D9Passw&oe=6A925EC6",

    "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/484908298_1074861914656067_1465126652517185127_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ExBN6UmzlboQ7kNvwGa5CRi&_nc_oc=AdojfI-C9wW7oVxVpmIhd_88FIW-XGVHz-IYqNfCt7sazWDotu4lSV-rUP70ZztkO7wIDhag9Q61DfnbvF8TiWz6&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=mGUZHPFDZkTIGOODBoQiVA&_nc_ss=7b2a8&oh=00_AQEf7XX39l3gR7bkN2yUlPDei3E8AzrpZsZ_Quk793WN3w&oe=6A923BF8",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/484793134_1074862097989382_1799892445099278077_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bqM-0P1E9dcQ7kNvwFx6v9W&_nc_oc=Adp1vhSvvwOuCTVvBrNf8OpTAXbSUAi6iF2m4jDno1eySa3RIDNZ7AGXZyvo2kT_zZhHygfMAbQzW0HSwJA-DiCf&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=JAcT73dVn7kzbW-SHOCV8A&_nc_ss=7b2a8&oh=00_AQFrFTBFCIihUPo8IIUT8lUZ1xfTRIpo-MxwLEnF2FMXlw&oe=6A926C5D",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/484961547_1074862127989379_1536789364864279775_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=klMNagUuYzIQ7kNvwHR0BmS&_nc_oc=AdqV5RcfgKqAzpTQZSmlyUIvBWYu7OPP4TmqwLK5ywYUnBfdkYusUZ1HRpMcOleARV7RBJE3qrkNRwRcd20kB8Ka&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=Js9LItc8bVN8LigjRBr8rg&_nc_ss=7b2a8&oh=00_AQFV5oCNKWmI3tJRq_Er4L0ChxWRz1Angpbq45LYUPtZng&oe=6A924B6F",

    "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/484343985_1074862174656041_1730662600762978454_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qQqptsuh8KYQ7kNvwFzsRby&_nc_oc=Adq2ceElcqXEWKouCA2Wfi8j5Q9o7yzlZoLH_kPubJd9OCgO7Dk-JxMg0HLmIRRPl0m1Ksa9X1Vb5zs0S0Mxco0W&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=pMnxxw4ryFGR1RsCUOe1_w&_nc_ss=7b2a8&oh=00_AQFpJ6k4sgNH2-yXuc9t_eiSWxB0THylDYbWADGasq7_9Q&oe=6A926F74",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/484961547_1074861964656062_5571576411732798145_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZMxiL5ZeVeUQ7kNvwFU_zqi&_nc_oc=AdogZJaSSwpzDNb-AD7AfC5vZu0NmLQl_dmFJyL8_FZ-2l1IY7fvfR8Ppb0keYOj-iYFeYHdQu8bwJC973xxJC0z&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=ZrHP5xYvkd8EPTBQhWm_Ag&_nc_ss=7b2a8&oh=00_AQHLswaA56fuCan_6_VlEG1LyuPN99vFfowHBfstJFSuSg&oe=6A924FEB",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/484322502_1074862111322714_325117174602506193_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=y4rjMDWjuroQ7kNvwHiu24-&_nc_oc=AdqDTK9L69Fl5scvxTt3LqHYY1YEc9C9hxcpUCryJCJZr6v70w9UpMSVr5VJhuE-9EroRZH5tvF55BH87YBuDQQx&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=MsHsPItQSLUQbfZE6Nqu4Q&_nc_ss=7b2a8&oh=00_AQHjtiSn5XWk2olmCU8ARSIv5nNJWxLaujdUcSuAkDIgQg&oe=6A923C80",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/484324339_1074861877989404_8851232154791536408_n.jpg?stp=dst-jpg_tt6&cstp=mx3065x1367&ctp=s3065x1367&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AYgTrdpirCgQ7kNvwGr9lXQ&_nc_oc=AdoaKeCWkAPhSBHqFQqb5Aw9B_XODzKwV2_Hp6AXR2kEvK2pQv5OO1nm3XfUmkoZiBXepZibHwoVGibt6do8pvBL&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=tnp0LtfXomj4h6ad6IxwaA&_nc_ss=7b2a8&oh=00_AQE1FYNBNfNy_wdqULazZqMN7twiyUgSPZAuRsv5XOUmMQ&oe=6A926C2E",

    "https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/484518430_1074862114656047_6423225662048355947_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=988k48Z3V6sQ7kNvwFNYh-e&_nc_oc=AdpwQ__qsPyXIsccnj8eiJGzQIC1KHiHRnqOn_nqM3yX_kzQrQalF0-quJeb4upkoFIzH3ossaLUqAatANGnfFXo&_nc_zt=23&_nc_ht=scontent.fccu4-3.fna&_nc_gid=LloRpQVwuLTiHhYLaHuTtQ&_nc_ss=7b2a8&oh=00_AQEWLlEavnDVQkrOtZETG7IO6I1pLCy4klhykNaKaPftmA&oe=6A92531F",

    "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/485186835_1074862027989389_1739573847545898184_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=csKaBSe8ShkQ7kNvwEX9rmy&_nc_oc=AdobLAW3fIZFAhJXp3C_hjQ9b_sP39yuj7jiqHGCRaH4ZH7jJQnuuO9SZz0B_5BNStGFCVss-QM6HVcSG5ILfd1R&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=5LsFVVHDeWobrc4KJqaxuQ&_nc_ss=7b2a8&oh=00_AQEWik5BUddqFeFe57L3FJVvyitDiR19PGjY-SQyLobCkw&oe=6A925955",

    "https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/484510216_1074858517989740_6284762258403768535_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=K39jl9MRCWoQ7kNvwFJVeDM&_nc_oc=AdoAtc_XmUmISKrdwgQfDKSqu916V5nDUJ8KqIzpqKCP73eFSVzWk-sVTgTIJUrMKCSHRlHQWn7ISW9AD9thi1Rb&_nc_zt=23&_nc_ht=scontent.fccu4-2.fna&_nc_gid=80rOdJjrVktIk0OiDLH2KQ&_nc_ss=7b2a8&oh=00_AQGL-ubR3gXd8swxMuD_PAcvACOGasLzj-44WaKYB0GAfg&oe=6A9263F2",

    "https://scontent.fccu25-1.fna.fbcdn.net/v/t39.30808-6/484339700_1074858447989747_3266069245121850587_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rj3s7MGjJ14Q7kNvwF-_EOo&_nc_oc=AdqAE_2vrtRxJg1_spxeOH2n-u6BmyQ1e6mjoKx5hPT2xvjVOM1IkeahOgtKps8iJxpfHFduRgRdBNSTj1_1jpSD&_nc_zt=23&_nc_ht=scontent.fccu25-1.fna&_nc_gid=luV5nnZyvdA8wH30ML_bGw&_nc_ss=7b2a8&oh=00_AQHpUJhvlpmb0YHaLHkcA7FPpS42kJQO49LGbv57rf3zGg&oe=6A924782",
  ],
};
