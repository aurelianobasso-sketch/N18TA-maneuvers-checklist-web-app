# N18TA Commercial Maneuver Checklists

An iPad-friendly, offline-capable checklist app for N18TA commercial maneuvers. Each maneuver opens in a modal window and includes its proposed engine configuration, entry setup, maneuver flow, rollout or recovery, and safety notes.

Live app: <https://n18ta-maneuver-checklists.aureliano-ba-0062.chatgpt.site>

## Features

- Single-screen maneuver menu
- Separate pre-maneuver and post-maneuver checklists
- Engine configuration displayed for every maneuver
- Device-local checklist progress
- Installable on an iPad Home Screen
- Offline support through a service worker
- No accounts, analytics, or external dependencies

## Run locally

The service worker requires HTTP rather than opening `index.html` directly from the filesystem.

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

1. Create a repository and upload all files from this folder to its root.
2. Open the repository's **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.
5. Open the Pages URL once while online before installing it on an iPad.

On iPad Safari, select **Share > Add to Home Screen**. After the initial online load, the application can run offline.

## Important

This is a training aid, not an approved aircraft checklist. Use it only with the current N18TA POH and operating limitations, Lycoming and Hartzell instructions, the current Commercial Pilot ACS, and qualified flight instruction. The engine values are initial targets, not aircraft limitations.

