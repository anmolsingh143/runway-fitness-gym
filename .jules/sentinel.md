## 2025-12-25 - [Reverse Tabnabbing]
**Vulnerability:** External links using `target="_blank"` without `rel="noopener noreferrer"`.
**Learning:** Even static sites can have phishing vectors. Opening external links in a new tab without protection exposes the `window.opener` object, allowing the target page to redirect the original page.
**Prevention:** Always pair `target="_blank"` with `rel="noopener noreferrer"`.
