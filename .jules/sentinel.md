## 2024-05-23 - Reverse Tabnabbing Vulnerability
**Vulnerability:** External links (e.g., to Instagram) using `target="_blank"` without `rel="noopener noreferrer"`.
**Learning:** Even simple static sites can expose users to security risks. The `window.opener` object allows the target page to manipulate the originating page if `rel="noopener"` is missing.
**Prevention:** Always enforce `rel="noopener noreferrer"` for any `<a>` tag with `target="_blank"`. This should be automated via linting rules in a larger project.
