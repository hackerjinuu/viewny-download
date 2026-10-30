# Viewny static website — monochrome edition

A responsive, dependency-light static website with a refined black-and-white visual system. Built from the supplied Viewny HTML, logo and APK. It is suitable for static hosting (including Vercel).

## Files

- `index.html` — homepage, app information, install guide, FAQ and download links
- `privacy.html` — privacy notice draft requiring publisher review
- `terms.html` — terms draft requiring publisher review
- `styles.css` / `site.js` — shared styling and small accessible interactions
- `assets/viewny-logo.png` — supplied Viewny logo
- `downloads/viewny.apk` — supplied APK; download links point here

## Deploy

Upload the contents of this folder as the static site root. No build command or package installation is required. The APK must remain at `downloads/viewny.apk` for the download buttons to work. Keep the logo at `assets/viewny-logo.png`.

For Vercel, create a new project from this folder/repository and use the static/Other framework preset with no build command and no output directory override. Alternatively, deploy the folder with Vercel CLI.

## APK facts checked from the supplied file

- File size: 23,411,606 bytes (23.41 MB / 22.32 MiB)
- SHA-256: `91d0aeb34abc05855b1531756938026cde6d12cb456663411d1ceb86dccbbebe`
- MD5: `ee75ac5b661bc38e4b73096081786395`
- Manifest package ID: `com.aistudio.viewstracker.kpmqvz`
- Version name: `1.2.0`; version code: `3`
- Minimum SDK: API 24; target SDK: API 36
- ABI folders present: `arm64-v8a`, `armeabi-v7a`, `x86`, `x86_64`
- Manifest flags: `android:debuggable=true`; `android:usesCleartextTraffic=true`

**Important:** The uploaded APK appears development-configured based on the two manifest flags above. Before publicly distributing it, review app network behavior and generate a production release with debugging disabled and cleartext traffic disabled unless there is a documented reason to allow it. Have the production signing certificate reviewed and use a trusted distribution workflow. A checksum only identifies file bytes; it does not prove that the app is safe. The signing certificate was not independently validated as part of this site build.

## Required publisher review before launch

1. Confirm the app's public-facing description and real features. The homepage deliberately avoids inventing product capabilities.
2. Confirm the app name and package ID are expected. The website branding says `Viewny`, while the APK package ID is `com.aistudio.viewstracker.kpmqvz`.
3. Complete `privacy.html` using verified runtime data flows, SDK configuration, backend behavior, retention, sharing and deletion details. The APK manifest alone does not establish those facts.
4. Complete `terms.html` with the publisher's legal identity, app license, contact and governing law. Obtain jurisdiction-appropriate legal review.
5. Add a real support/privacy email and publisher identity to the legal pages when known.
6. Replace the APK, hashes and visible package metadata together whenever you publish a new version.
7. Test the website and APK download from the deployed domain on desktop and mobile before announcing it.

The site itself does not include analytics scripts, contact forms, or a backend service.
