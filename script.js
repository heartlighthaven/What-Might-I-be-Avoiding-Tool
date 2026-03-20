const avoidancePrompts = [
  "What am I trying not to feel right now?",
  "What truth have I been avoiding because it feels uncomfortable?",
  "What part of myself do I not want others to see?",
  "What am I pretending doesn’t bother me?",
  "Where might I be holding on to something that no longer fits who I am?",
  "What feeling do I keep distracting myself from?",
  "What am I afraid might happen if I became fully honest with myself?",
  "What am I resisting looking at more closely?",
  "What pattern have I been excusing instead of examining?",
  "What am I blaming on outside circumstances that may need deeper self-reflection?",
  "Where am I shrinking, hiding, or staying silent to avoid discomfort?",
  "What belief about myself am I scared to question?",
  "What am I carrying that I haven’t fully acknowledged yet?",
  "What would I have to admit if I stopped avoiding this altogether?",
  "What part of my pain have I been minimizing?"
];

const avoidanceButton = document.getElementById("avoidanceButton");
const avoidanceBox = document.getElementById("avoidanceBox");

avoidanceButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * avoidancePrompts.length);
  avoidanceBox.textContent = avoidancePrompts[randomIndex];
});