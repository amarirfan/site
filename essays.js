/* Compatibility shim: expose window.SITE_ESSAYS from the canonical JSON
   This mirrors the old exported `essays.js` but uses the JSON source so
   content can be edited in `src/data/essays.json`. */
(function () {
  try {
    if (window.SITE_ESSAYS) return;
  } catch (e) {}

  window.SITE_ESSAYS = 
    {
      "order": ["invisible","vibe-coding"],
      "invisible": {"title":"My best work is invisible: designing under NDA","summary":"What a career behind locked doors teaches that public work cannot.","date":"REPLACE: date","readingTime":"REPLACE: X min read","body":["REPLACE: opening paragraph of the essay.","REPLACE: second paragraph.","> REPLACE: pull quote for this essay.","REPLACE: continue the essay.","REPLACE: closing paragraph."]},
      "vibe-coding": {"title":"What vibe coding gets wrong about design","summary":"Speed is not the bottleneck. Judgment is.","date":"REPLACE: date","readingTime":"REPLACE: X min read","body":["REPLACE: opening paragraph of the essay.","REPLACE: second paragraph.","> REPLACE: pull quote for this essay.","REPLACE: continue the essay.","REPLACE: closing paragraph."]}
    };

})();
// All journal content lives here. Edit this file to change the Journal index
// and essay pages. Each key is the slug used in the URL:
// "Essay.dc.html?post=invisible"

window.SITE_ESSAYS = {
  order: ["invisible", "vibe-coding"],

  invisible: {
    title: "My best work is invisible: designing under NDA",
    summary: "What a career behind locked doors teaches that public work cannot.",
    date: "REPLACE: date",
    readingTime: "REPLACE: X min read",
    // Essay body. Each string is a paragraph. A paragraph starting with "> "
    // becomes a pull quote in Newsreader italic.
    body: [
      "REPLACE: opening paragraph of the essay.",
      "REPLACE: second paragraph.",
      "> REPLACE: pull quote for this essay.",
      "REPLACE: continue the essay.",
      "REPLACE: closing paragraph."
    ]
  },

  "vibe-coding": {
    title: "What vibe coding gets wrong about design",
    summary: "Speed is not the bottleneck. Judgment is.",
    date: "REPLACE: date",
    readingTime: "REPLACE: X min read",
    body: [
      "REPLACE: opening paragraph of the essay.",
      "REPLACE: second paragraph.",
      "> REPLACE: pull quote for this essay.",
      "REPLACE: continue the essay.",
      "REPLACE: closing paragraph."
    ]
  }
};
