## 2024-05-23 - Reverse Tabnabbing Vulnerability
**Vulnerability:** External links (Instagram, WhatsApp) were using `target="_blank"` without `rel="noopener noreferrer"`.
**Learning:** Even in simple static sites, the default behavior of `target="_blank"` exposes the user to phishing attacks where the new tab can manipulate the original page.
**Prevention:** Always pair `target="_blank"` with `rel="noopener noreferrer"`. Added this to floating buttons and footer links.
