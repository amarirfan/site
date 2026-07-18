# Master design prompt for Claude Design — ammar personal site, all pages
Paste everything below the line into Claude Design as one message.

---

You are designing the complete personal site of Ammar, a senior experience designer in Vilnius. This brief is the law of the project. Where your instincts conflict with it, the brief wins.

WORKFLOW: Build one page at a time, in the order listed, starting with the homepage. After each page, stop and wait. I will review against the definition of done and either request revisions or say "next page". Keep every token and rule identical across all pages. Consistency is the product.

## The brand in three lines

- Core idea: craft under constraint. The work gets sharper under pressure.
- Design principle: precision chassis, human engine. The system is restrained and exact. Humanity enters only through the maker's hand.
- Cultural register: Japanese craft meets Scandinavian clarity. Negative space is a material. The imperfect hand is a feature.

Reference the restraint of Linear and Vercel marketing sites, the warmth of Japanese stationery and aizome textile, and Apple's product-page discipline. The result should feel like a calm, expensive object.

## Design tokens

Colors, exact and complete. Do not add colors.
- Porcelain #FAFAF8. Page background, cards. Never pure white.
- Ink #141414. Text, primary buttons. Never pure black.
- Graphite #6B6B66. Secondary text, metadata. Borders use lighter tints of it.
- Indigo #223A70. Links, hover states, annotations, one accent moment per page. Nothing else.
- Seal red #C7361F. Appears exactly once per page: a small rounded square (4px radius) beside the wordmark, containing a serif italic lowercase "a" in porcelain. Never used anywhere else. Never backgrounds, never buttons, never a second instance.

Typography:
- Instrument Sans. All UI and headlines. Weight 500 for headlines with letter-spacing -0.02em to -0.025em, weight 400 for body. Body line-height 1.6 to 1.7.
- Newsreader, optical sizing on. Journal titles and essay bodies, pull quotes, editorial moments. Italic for quotes and titles, regular for essay body text. This is the human voice; outside the journal use it sparingly so it stays special.
- JetBrains Mono, 11 to 12px. Metadata only: dates, roles, locations, labels, prices.

Layout:
- Max content width around 1100px, essay text column max 640px. Generous asymmetric whitespace; sections breathe more than feels safe. When unsure, add space, not elements.
- Few type sizes with big jumps. No more than 4 sizes per page.
- Border radius 8px on buttons and cards. Borders 0.5 to 1px in light graphite tints instead of shadows wherever possible. Any shadow must be barely perceptible.

## Hard rules, non-negotiable, all pages

1. No gradients anywhere on the site chrome. Zero.
2. No stock 3D objects, no abstract blobs, no decorative mesh, no generated imagery, no stock photos.
3. No icons except where function demands (external link arrow, menu). No padlock icons ever, even on NDA-related content.
4. Where the design calls for hand-drawn elements (underlines, circles, arrows in indigo), insert a simple placeholder line labeled "REPLACE: hand-drawn SVG". Maximum one per section. The owner draws these himself.
5. Photography placeholders: neutral porcelain-toned blocks labeled with the intended shot. Never fill with stock imagery.
6. Use the copy in this brief verbatim. Do not rewrite, do not improve, do not add words. Never introduce em dashes or long dashes anywhere, including microcopy and labels. Never use these words in any generated text: passionate, delightful, seamless, elevate, unlock, leverage, journey, delve, pixel-perfect, wizard.
7. Motion: fades and small translates on scroll, physical easing, 200 to 350ms. Card hover: title shifts to indigo, card lifts 2 to 4px. Nothing bounces, nothing loops, nothing autoplays.

## Shared elements, all pages

Navigation: wordmark "ammar" with the red seal on the left; links right: work, services, journal, craft.
Footer: wordmark and seal, the four nav links, then "LinkedIn · Letsflow · email". Small mono line at the bottom: "Porcelain is the paper. Ink is the words. Indigo is the work. Red is the signature."

---

## PAGE 1 · HOMEPAGE

Four sections, called beats.

Beat 1, Hook. Mono label: "Senior experience designer · Vilnius". H1 in two lines: "Designed to convert." / "Crafted to last." with a hand-drawn indigo underline placeholder beneath "last". Hero paragraph, max width 480px: "I'm Ammar, a senior experience designer working in the most demanding corners of the web: enterprise AI, pharma, and global finance. I make interfaces that move numbers, and things that don't need to." Primary ink button "Work with me", secondary outlined button "See the work". Massive whitespace. No hero image; the typography is the hero.

Beat 2, Proof. Mono client strip: "Now: enterprise clients in pharma and global finance, via Cognizant. Before: Hostinger, Juvare." Header "Selected work". Three cards, image placeholder + title + subtitle + mono metadata:
- "A billing flow two million people stopped noticing" / "Redesigned the full billing experience and seven core pages. Good billing UX is invisible. That was the goal." / "Hostinger · Product designer"
- "Design for someone's worst day" / "A shared design system across seven emergency response products. When the user is a crisis coordinator, clarity is not a nice to have." / "Juvare · Product designer"
- "Conversion design under regulation" / "Regional website redesigns and Figma UI kits, shipped through medical, legal, and regulatory review. Constraints included." / "Novo Nordisk · via Cognizant"
- "A product, documented as a case study" / "The conversion-ready template I sell, built in the open, decisions included." / "In progress"

(omitted for brevity)