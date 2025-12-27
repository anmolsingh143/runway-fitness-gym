## 2025-12-27 - Tailwind CDN & CSP Challenges
**Vulnerability:** Difficulty implementing strict CSP with standalone Tailwind CDN.
**Learning:** The standalone Tailwind CDN script compiles CSS in the browser using JavaScript. This requires `script-src 'unsafe-eval'` and `style-src 'unsafe-inline'`, which weakens the Content Security Policy significantly compared to a build-step approach.
**Prevention:** For future projects or major refactors, recommend using a build step (PostCSS/Tailwind CLI) to generate a static CSS file. This would allow removing `unsafe-eval` and `unsafe-inline`, enabling a much stricter CSP.
