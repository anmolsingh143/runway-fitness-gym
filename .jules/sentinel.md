# Sentinel's Journal

## 2025-05-14 - Target Blank Vulnerability
**Vulnerability:** Reverse Tabnabbing via `target="_blank"` without `rel="noopener noreferrer"`.
**Learning:** External links with `target="_blank"` give the new page access to `window.opener`, allowing it to redirect the original page to a malicious site.
**Prevention:** Always add `rel="noopener noreferrer"` to `target="_blank"` links.
