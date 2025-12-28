## 2024-05-23 - Reverse Tabnabbing Vulnerability
**Vulnerability:** External links using `target="_blank"` without `rel="noopener noreferrer"` can be exploited by the linked page to access `window.opener` of the original page.
**Learning:** Developers often overlook the security implications of opening new tabs, assuming it's just a UI feature.
**Prevention:** Enforce a linter rule (e.g., `eslint-plugin-react`'s `jsx-no-target-blank` or similar for HTML) to automatically flag `target="_blank"` usage without `rel="noopener"`.
