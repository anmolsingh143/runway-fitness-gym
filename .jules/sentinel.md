## 2024-05-23 - Content Security Policy for Static Tailwind Site
**Vulnerability:** Lack of Content Security Policy (CSP) allowing unrestricted resource loading.
**Learning:** Static sites using the standalone Tailwind CSS CDN (`cdn.tailwindcss.com`) require `script-src 'unsafe-eval' 'unsafe-inline'` in the CSP. This is because the CDN script compiles CSS in the browser at runtime using dynamic evaluation. While less secure than a build-step generated CSS, this exception is necessary to maintain functionality for this specific architecture.
**Prevention:** When adding CSP to legacy or simple static sites, identify if "play" or "standalone" CDNs are used that require broader permissions. Ideally, migrate to a build process to remove the need for `unsafe-eval`.
