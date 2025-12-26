## 2025-05-18 - Tailwind Play CDN CSP Constraints
**Vulnerability:** Weak Content Security Policy (CSP) required for development tools in production.
**Learning:** The Tailwind Play CDN (`cdn.tailwindcss.com`) is designed for prototyping and uses run-time compilation. This necessitates `script-src ... 'unsafe-eval'` (for the JIT engine) and `style-src ... 'unsafe-inline'` (to inject generated styles).
**Prevention:** In future projects, use the Tailwind CLI build process to generate a static CSS file, allowing for a strict CSP without 'unsafe-eval' or 'unsafe-inline'.
