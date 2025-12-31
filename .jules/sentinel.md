## 2025-01-01 - Reverse Tabnabbing Vulnerability
**Vulnerability:** A `target="_blank"` link was found without `rel="noopener noreferrer"`.
**Learning:** Even simple static sites can expose users to phishing risks via window.opener manipulation.
**Prevention:** Enforce `rel="noopener noreferrer"` for all external links opening in new tabs via linter or CI check.