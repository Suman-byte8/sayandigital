// ============================================================
//  English (en) translation bundle — the application's default.
//  Mirrors bn.js exactly. Select/award `value`s are intentionally
//  identical between languages (they're stored as-is in the
//  spreadsheet); only the *label* shown to the user differs.
// ============================================================

export default {
  brand: {
    mark: "SD",
    name: "Sayan Digital",
    event: "Sharad Samman 2026",
  },

  nav: [
    { href: "#home", label: "Home" },
    { href: "#process", label: "How to Apply" },
    { href: "#documents", label: "Required Documents" },
    { href: "#application", label: "Apply Now" },
  ],

  hero: {
    presented: "Sayan Digital presents",
    eyebrow: "Durga Puja Award 2026",
    titleLead: "Sharad",
    titleEm: "Samman",
    titleYear: "2026",
    subtitle: "Online application for Sharad Samman 2026",
    text: "Applying for Sharad Samman is now easier, faster and fully digital. Submit your puja committee's details, puja information and required documents to take part.",
    primaryCta: "Start Application",
    ghostCta: "See How It Works",
    trust: ["✓ Online Application", "✓ Simple Process", "✓ Verified Details"],
    credit: {
      kicker: "Websites made here",
    },
    marquee: "Sayan Digital Presents — Sponsored by Srowth & Maa Jewellers",
    sponsorsLabel: "Our Sponsors",
  },

  stats: [
    { num: "01", label: "Fill Details" },
    { num: "02", label: "Attach Documents" },
    { num: "03", label: "Verify Details" },
    { num: "04", label: "Submit Application" },
  ],

  process: {
    kicker: "Four Simple Steps",
    heading: "Application Process",
    sub: "Complete your puja committee's application in a few simple steps.",
    cards: [
      { num: "01", icon: "✎", title: "Fill In Details", desc: "Provide your puja committee's required information." },
      { num: "02", icon: "↥", title: "Attach Documents", desc: "Upload the required documents." },
      { num: "03", icon: "✓", title: "Verify Details", desc: "Review the complete application once before submitting." },
      { num: "04", icon: "→", title: "Pay & Submit", desc: "Pay the application fee and save your application reference number." },
    ],
  },

  notice: {
    title: "Before You Apply",
    text: "Fill in all details accurately. Upload the required documents in the specified format and save your application reference number for future use.",
  },

  applicationIntro: {
    kicker: "Online Application",
    heading: "Sharad Samman 2026 — Application Form",
    sub: "Fill out the application on behalf of your organizing club / puja committee with accurate details and the required documents.",
  },

  progressSteps: [
    { num: "01", label: "Committee" },
    { num: "02", label: "Applicant" },
    { num: "03", label: "Puja Details" },
    { num: "04", label: "Award Category" },
    { num: "05", label: "Documents" },
    { num: "06", label: "Review" },
  ],

  committeeSection: {
    num: "01",
    title: "Puja Committee Details",
    sub: "Provide your puja committee's basic information.",
    fields: [
      { name: "clubName", label: "Puja Committee Name", required: true, full: true, placeholder: "e.g. Uttarpara Sarbojanin Durgotsab Committee" },
      { name: "venue", label: "Club / Pandal Name", required: true, placeholder: "e.g. Deshbandhu Sangha" },
      { name: "established", label: "Puja's Age", required: true, type: "number", min: 1, max: 150, placeholder: "e.g. 52nd" },
      { name: "clubAddress", label: "Full Address of the Puja Pandal", required: true, full: true, type: "textarea", rows: 3, placeholder: "House / Street / Area / Locality" },
      { name: "district", label: "District", required: true, placeholder: "e.g. Malda" },
      { name: "block", label: "Block / Municipality", required: true, placeholder: "Block / Municipality name" },
      { name: "pin", label: "PIN Code", required: true, inputMode: "numeric", placeholder: "6-digit PIN code" },
      {
        name: "pujaType",
        label: "Type of Puja",
        required: true,
        type: "select",
        options: [
          { value: "বারোয়ারি", label: "Barowari (Community)" },
          { value: "ক্লাব পরিচালিত", label: "Club-organized" },
          { value: "আবাসিক", label: "Residential" },
          { value: "অন্যান্য", label: "Other" },
        ],
      },
      { name: "visitors", label: "Estimated Visitors", type: "number", min: 0, placeholder: "Approximate number per day" },
      { name: "social", label: "Website / Facebook Page", placeholder: "https://..." },
      { name: "clubIntro", label: "Brief Introduction of the Puja Committee", full: true, type: "textarea", rows: 4, placeholder: "Briefly describe the committee's history and activities" },
    ],
  },

  applicantSection: {
    num: "02",
    title: "Applicant Details",
    sub: "Provide the contact person's details on behalf of the committee.",
    fields: [
      { name: "applicant", label: "Applicant's Name", required: true, placeholder: "Full name" },
      {
        name: "role",
        label: "Position / Role",
        required: true,
        type: "select",
        options: [
          { value: "সভাপতি", label: "President" },
          { value: "সম্পাদক", label: "Secretary" },
          { value: "কোষাধ্যক্ষ", label: "Treasurer" },
          { value: "সদস্য", label: "Member" },
          { value: "অন্যান্য", label: "Other" },
        ],
      },
      { name: "mobile", label: "Mobile Number", required: true, inputMode: "numeric", placeholder: "10-digit mobile number" },
      { name: "whatsapp", label: "WhatsApp Number", required: true, inputMode: "numeric", placeholder: "WhatsApp number" },
      { name: "email", label: "Email Address", required: true, type: "email", placeholder: "example@email.com" },
      { name: "alternate", label: "Alternate Contact Number", inputMode: "numeric", placeholder: "Alternate number" },
    ],
  },

  pujaSection: {
    num: "03",
    title: "Puja Details",
    sub: "Provide detailed information about the 2026 puja.",
    fields: [
      { name: "pujaYear", label: "Puja Year", disabled: true, defaultValue: "2026" },
      { name: "startDate", label: "Puja Start Date", required: true, type: "date" },
      { name: "endDate", label: "Puja End Date", required: true, type: "date" },
      { name: "idolType", label: "Idol Type", placeholder: "e.g. Traditional / Theme-based" },
      { name: "theme", label: "This Year's Puja Theme", full: true, placeholder: "Theme name" },
      { name: "themeDetails", label: "Brief Theme Description", full: true, type: "textarea", rows: 4, placeholder: "Describe the theme concept and execution" },
      { name: "special", label: "Special Attractions", full: true, type: "textarea", rows: 3, placeholder: "Special arrangements, cultural events, etc." },
      { name: "eco", label: "Eco-friendly Initiatives", type: "textarea", rows: 3, placeholder: "If any" },
      { name: "socialWork", label: "Social Work", type: "textarea", rows: 3, placeholder: "Social service activities" },
      { name: "security", label: "Security Arrangements", type: "textarea", rows: 3, placeholder: "Describe the security arrangements" },
      { name: "visitorCare", label: "Special Arrangements for Visitors", type: "textarea", rows: 3, placeholder: "If any" },
    ],
  },

  awardsSection: {
    num: "04",
    title: "Sharad Samman Award Categories",
    sub: "Select the categories you'd like to participate in.",
    errorText: "Select at least one award category.",
    options: [
      { value: "সেরা প্রতিমা", title: "Best Idol", desc: "Idol artistry and craftsmanship" },
      { value: "সেরা মণ্ডপ", title: "Best Pandal", desc: "Pandal design and construction" },
      { value: "সেরা থিম", title: "Best Theme", desc: "Concept and presentation" },
      { value: "সেরা আলোকসজ্জা", title: "Best Lighting", desc: "Lighting and ambience" },
      { value: "সেরা পরিবেশবান্ধব পূজা", title: "Best Eco-friendly Puja", desc: "Environment-conscious initiatives" },
      { value: "সেরা সামাজিক উদ্যোগ", title: "Best Social Initiative", desc: "Social responsibility" },
      { value: "সেরা সার্বিক পূজা", title: "Best Overall Puja", desc: "Overall evaluation" },
      { value: "অন্যান্য", title: "Other", desc: "Other category" },
    ],
  },

  documentsSection: {
    num: "05",
    title: "Required Documents",
    sub: "Attach the required files in the specified format.",
    docs: [
      { id: "doc1", title: "Puja Committee Approval Letter", hint: "PDF, JPG, PNG • Max 5 MB" },
      { id: "doc3", title: "Proof of Puja Committee's Address", hint: "PDF, JPG, PNG • Max 5 MB" },
    ],
  },

  applicationFee: {
    amount: 160,
    label: "Application Fee",
  },

  declaration: {
    title: "Declaration",
    text: "I declare that all information provided in this application is true to the best of my knowledge and belief. The organizing authority has permission to verify the required documents and information.",
    agree: "I agree to the declaration and terms above.",
    submit: "Review Application",
  },

  reviewLabels: [
    ["clubName", "Puja Committee"],
    ["venue", "Pandal"],
    ["district", "District"],
    ["applicant", "Applicant"],
    ["role", "Role"],
    ["mobile", "Mobile"],
    ["email", "Email"],
    ["theme", "Puja Theme"],
  ],

  footer: {
    brand: "Sayan Digital",
    heading: "Sharad Samman 2026",
    tagline: "Digital Application & Information Management",
    contactTitle: "Contact",
    contact: [
      "Mobile: +91 77976 07126",
      "Email: sayandigital.malda@gmail.com",
      "Address: Sayan Digital's address",
    ],
    importantTitle: "Important",
    important: [
      { href: "#process", label: "Application Process" },
      { href: "#documents", label: "Required Documents" },
      { href: "#application", label: "Apply Online" },
    ],
    copyright: "© 2026 Sayan Digital. All Rights Reserved.",
    madeBy: "Made by",
    developerName: "Suman",
  },

  ui: {
    menuOpen: "Open menu",
    selectPlaceholder: "Select",
    close: "Close",
    galleryNoImages: (year) => `No images available for ${year}.`,
    gallerySelectedAlt: "Selected image",
    galleryImageAlt: "Gallery image",
    galleryCloseImage: "Close image",
    languageSwitcher: { en: "EN", bn: "বাং", label: "Select language" },

    previewBanner: {
      title: "Applications Are Not Open Yet",
      textNoDate:
        "This is a preview of the application form. Submissions will open soon — please check back later.",
      textWithDate: (date) =>
        `This is a preview of the application form. Submissions open on ${date}.`,
    },

    documents: {
      noFileSelected: "No file selected",
      fileTooLarge: "File size exceeds 5 MB.",
      chooseFile: "Choose File",
    },

    reviewModal: {
      presented: "Sayan Digital presents",
      title: "Review Your Application",
      sub: "Please review the details you've provided before submitting.",
      awardsRowLabel: "Award Category",
      feeNote: (amount, label) =>
        `An ${label} of ₹${amount} is required to submit your application. It will only be submitted once payment is successful.`,
      processingStatus: "Payment in progress, please wait…",
      editButton: "Edit Details",
      preparing: "Preparing…",
      payButton: (amount) => `Pay ₹${amount} & Submit`,
    },

    successModal: {
      presented: "Sayan Digital presents",
      title: "Application Submitted Successfully",
      text: "Your application has been received successfully. Please save this application number.",
      applicationIdLabel: "Your Application Number",
      paymentIdLabel: "Payment Reference Number",
      printButton: "Print",
      closeButton: "Close",
    },

    failureModal: {
      presented: "Sayan Digital presents",
      titleRetryable: "Payment Not Completed",
      titleFinal: "Application Not Submitted",
      paymentIdLabel: "Payment Reference Number (save this for support)",
      closeButton: "Close",
      retryButton: "Try Again",
    },

    processingModal: {
      presented: "Sayan Digital presents",
      title: "Processing Your Application",
      text: "Please don't close or reload this page — your documents and details are being saved.",
    },

    payment: {
      itemName: "Sharad Samman 2026",
      itemDescription: (clubName, feeLabel) => `${clubName} — ${feeLabel}`,
      orderFailed: "Could not start the payment. Please try again.",
      gatewayLoadFailed: "Could not load the payment gateway. Check your internet connection and try again.",
      dismissed: "Payment was not completed. Please try again.",
      failed: (reason) => `Payment failed. ${reason || 'Please try again.'}`,
      failedGenericReason: "Please try again.",
      savedFailedAfterCharge:
        "Payment was successful but the application wasn't saved. Please save the reference number below and contact support.",
      genericSubmitFailed: "The application could not be submitted. Please try again.",
    },
  },

  validation: {
    required: "This field is required.",
    mobile: "Enter a valid 10-digit mobile number (starting with 6–9).",
    pin: "Enter a valid 6-digit PIN code.",
    email: "Enter a valid email address.",
    number: "Enter a valid number.",
    date: "Select a valid date.",
    dateRange: "The end date cannot be before the start date.",
    minValue: (n) => `Value must be at least ${n}.`,
    maxValue: (n) => `Value must be at most ${n}.`,
    awardsRequired: "Select at least one award category.",
  },
}
