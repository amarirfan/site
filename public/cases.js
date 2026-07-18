/* Compatibility shim: expose window.SITE_CASES from the canonical JSON
   This file mirrors the old exported `cases.js` but uses the JSON source
   so it's easy to keep content in one place (`src/data/cases.json`). */
(function () {
  try {
    // eslint-disable-next-line no-undef
    if (window.SITE_CASES) return;
  } catch (e) {}

  // Synchronous assignment: embed JSON so legacy pages that expect the global
  // immediately still work.
  window.SITE_CASES = 
    {
      "order": ["billing","worst-day","regulation","template"],
      "billing": {"title":"A billing flow two million people stopped noticing","subtitle":"The complete billing experience and seven core pages, redesigned for one of the world's largest hosting platforms.","meta":"Product designer · 2020 to 2022 · Shipped","shot":"SHOT: billing flow UI","intro":"Good billing UX is invisible. Two million users, seven core pages, and a single goal: make paying so uneventful that nobody writes support tickets about it.","sections":[{"label":"Context","heading":"Seven pages nobody wanted to visit","body":["REPLACE: describe the starting state. What the billing flow looked like, what users complained about, what the business was losing."]},{"label":"Constraint","heading":"Two million habits pushing back","body":["REPLACE: describe the constraints. Legacy systems, existing user habits, payment regulations, release cadence."]},{"label":"Approach","heading":"Redesign without a redesign announcement","body":["REPLACE: describe the process. Research, iterations, how changes shipped gradually so nobody noticed."]},{"label":"Outcome","heading":"The numbers stayed internal. The silence did not.","body":["REPLACE: describe the result honestly, including where numbers must stay internal."]}],"quote":"REPLACE: one pull quote from this project, in your own words.","images":["SHOT: billing overview page","SHOT: payment method flow","SHOT: invoice detail"]},
      "worst-day": {"title":"Design for someone's worst day","subtitle":"A shared design system across seven emergency response products, plus interaction design for Juvare AI.","meta":"Product designer · 2022 to 2026 · Shipped","shot":"SHOT: design system","intro":"When the user is a crisis coordinator, clarity is not a nice to have. A shared design system across seven emergency response products, built for people working under pressure.","sections":[{"label":"Context","heading":"Seven products, one crisis","body":["REPLACE: describe the product landscape and why a shared system was needed."]},{"label":"Constraint","heading":"No room for decoration","body":["REPLACE: describe the constraints. Stress conditions, accessibility, legacy products, dark and light themes."]},{"label":"Approach","heading":"A system that disappears under pressure","body":["REPLACE: describe how the system was built and adopted across teams."]},{"label":"Outcome","heading":"Clarity, shipped seven times","body":["REPLACE: describe the result and what it changed for users and teams."]}],"quote":"REPLACE: one pull quote from this project, in your own words.","images":["SHOT: component library","SHOT: emergency dashboard","SHOT: Juvare AI interaction"]},
      "regulation": {"title":"Conversion design under regulation","subtitle":"Regional website redesigns and Figma UI kits, shipped through medical, legal, and regulatory review.","meta":"Senior experience designer, via Cognizant · Shipped","shot":"SHOT: regional website","intro":"Conversion design where every word passes medical, legal, and regulatory review. Constraints included.","sections":[{"label":"Context","heading":"Design where every claim is checked","body":["REPLACE: describe the regional website work and the review process."]},{"label":"Constraint","heading":"Medical, legal, regulatory","body":["REPLACE: describe what MLR review means for design decisions."]},{"label":"Approach","heading":"UI kits that survive review","body":["REPLACE: describe the Figma UI kit approach and how it scaled across regions."]},{"label":"Outcome","heading":"Shipped, compliant, converting","body":["REPLACE: describe the result."]}],"quote":"REPLACE: one pull quote from this project, in your own words.","images":["SHOT: regional site hero","SHOT: Figma UI kit","SHOT: component documentation"]},
      "template": {"title":"A product, documented as a case study","subtitle":"The conversion-ready template I sell, built in the open, decisions included.","meta":"In progress","shot":"SHOT: template product","intro":"The conversion-ready template I sell, built in the open. This case study grows as the product does, decisions included.","sections":[{"label":"Context","heading":"Selling what I practice","body":["REPLACE: describe why the template exists and who it is for."]},{"label":"Constraint","heading":"It has to work without me","body":["REPLACE: describe the constraint of designing something self-serve."]},{"label":"Approach","heading":"Built in the open","body":["REPLACE: document decisions as they happen."]},{"label":"Outcome","heading":"In progress","body":["REPLACE: update as the product ships."]}],"quote":"REPLACE: one pull quote from this project, in your own words.","images":["SHOT: template hero block","SHOT: proof section","SHOT: copy guidance in file"]}
    };

})();
// All case study content lives here. Edit this file to change the Work page
// cards and the case study detail pages. Each key is the slug used in the URL:
// "Case Study.dc.html?case=billing"

window.SITE_CASES = {
  order: ["billing", "worst-day", "regulation", "template"],

  billing: {
    title: "A billing flow two million people stopped noticing",
    subtitle: "The complete billing experience and seven core pages, redesigned for one of the world's largest hosting platforms.",
    meta: "Product designer · 2020 to 2022 · Shipped",
    shot: "SHOT: billing flow UI",
    // Detail page content. Every section is { label, heading, body: [paragraphs] }.
    intro: "Good billing UX is invisible. Two million users, seven core pages, and a single goal: make paying so uneventful that nobody writes support tickets about it.",
    sections: [
      { label: "Context", heading: "Seven pages nobody wanted to visit", body: [
        "REPLACE: describe the starting state. What the billing flow looked like, what users complained about, what the business was losing."
      ]},
      { label: "Constraint", heading: "Two million habits pushing back", body: [
        "REPLACE: describe the constraints. Legacy systems, existing user habits, payment regulations, release cadence."
      ]},
      { label: "Approach", heading: "Redesign without a redesign announcement", body: [
        "REPLACE: describe the process. Research, iterations, how changes shipped gradually so nobody noticed."
      ]},
      { label: "Outcome", heading: "The numbers stayed internal. The silence did not.", body: [
        "REPLACE: describe the result honestly, including where numbers must stay internal."
      ]}
    ],
    quote: "REPLACE: one pull quote from this project, in your own words.",
    images: ["SHOT: billing overview page", "SHOT: payment method flow", "SHOT: invoice detail"]
  },

  "worst-day": {
    title: "Design for someone's worst day",
    subtitle: "A shared design system across seven emergency response products, plus interaction design for Juvare AI.",
    meta: "Product designer · 2022 to 2026 · Shipped",
    shot: "SHOT: design system",
    intro: "When the user is a crisis coordinator, clarity is not a nice to have. A shared design system across seven emergency response products, built for people working under pressure.",
    sections: [
      { label: "Context", heading: "Seven products, one crisis", body: [
        "REPLACE: describe the product landscape and why a shared system was needed."
      ]},
      { label: "Constraint", heading: "No room for decoration", body: [
        "REPLACE: describe the constraints. Stress conditions, accessibility, legacy products, dark and light themes."
      ]},
      { label: "Approach", heading: "A system that disappears under pressure", body: [
        "REPLACE: describe how the system was built and adopted across teams."
      ]},
      { label: "Outcome", heading: "Clarity, shipped seven times", body: [
        "REPLACE: describe the result and what it changed for users and teams."
      ]}
    ],
    quote: "REPLACE: one pull quote from this project, in your own words.",
    images: ["SHOT: component library", "SHOT: emergency dashboard", "SHOT: Juvare AI interaction"]
  },

  regulation: {
    title: "Conversion design under regulation",
    subtitle: "Regional website redesigns and Figma UI kits, shipped through medical, legal, and regulatory review.",
    meta: "Senior experience designer, via Cognizant · Shipped",
    shot: "SHOT: regional website",
    intro: "Conversion design where every word passes medical, legal, and regulatory review. Constraints included.",
    sections: [
      { label: "Context", heading: "Design where every claim is checked", body: [
        "REPLACE: describe the regional website work and the review process."
      ]},
      { label: "Constraint", heading: "Medical, legal, regulatory", body: [
        "REPLACE: describe what MLR review means for design decisions."
      ]},
      { label: "Approach", heading: "UI kits that survive review", body: [
        "REPLACE: describe the Figma UI kit approach and how it scaled across regions."
      ]},
      { label: "Outcome", heading: "Shipped, compliant, converting", body: [
        "REPLACE: describe the result."
      ]}
    ],
    quote: "REPLACE: one pull quote from this project, in your own words.",
    images: ["SHOT: regional site hero", "SHOT: Figma UI kit", "SHOT: component documentation"]
  },

  template: {
    title: "A product, documented as a case study",
    subtitle: "The conversion-ready template I sell, built in the open, decisions included.",
    meta: "In progress",
    shot: "SHOT: template product",
    intro: "The conversion-ready template I sell, built in the open. This case study grows as the product does, decisions included.",
    sections: [
      { label: "Context", heading: "Selling what I practice", body: [
        "REPLACE: describe why the template exists and who it is for."
      ]},
      { label: "Constraint", heading: "It has to work without me", body: [
        "REPLACE: describe the constraint of designing something self-serve."
      ]},
      { label: "Approach", heading: "Built in the open", body: [
        "REPLACE: document decisions as they happen."
      ]},
      { label: "Outcome", heading: "In progress", body: [
        "REPLACE: update as the product ships."
      ]}
    ],
    quote: "REPLACE: one pull quote from this project, in your own words.",
    images: ["SHOT: template hero block", "SHOT: proof section", "SHOT: copy guidance in file"]
  }
};
