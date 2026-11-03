# Frontend Quest

**Frontend Quest** is a portfolio-style showcase for 41 frontend practice exercises. It presents each exercise as a quest in one of nine themed worlds, making it easy to browse, search, filter, and preview the work.

## Features

- Responsive quest board with nine worlds and per-world progress bars
- Progress HUD with completed quests, XP, and level
- Search by quest number, title, or description
- Filters for HTML, CSS, JavaScript, and Bootstrap
- Full-screen exercise preview with previous/next navigation and an open-in-new-tab option
- Light and dark themes, with the selected theme remembered in local storage
- Completed status badges for exercises
- Achievement shelf, milestone notifications, and subtle visual effects
- Keyboard support: `/` focuses search, `Esc` closes the preview, and arrow keys navigate quests
- Built with semantic HTML, CSS, and vanilla JavaScript

## Run locally with XAMPP

1. Copy or place the project folder inside XAMPP's `htdocs` directory. For example:

   ```text
   C:\xampp\htdocs\Frontend
   ```

2. Start **Apache** from the XAMPP Control Panel.
3. Open the showcase:

   ```text
   http://localhost/Frontend/index.html
   ```

The showcase uses relative exercise paths. If you place it in a differently named folder, update `BASE_PATH` near the top of [`script.js`](script.js) if needed.

## Project files

| File or folder | Purpose |
| --- | --- |
| `index.html` | Showcase page structure and accessible controls |
| `style.css` | Themes, responsive layout, cards, and interactions |
| `script.js` | Quest data, rendering, filters, progress, and modal behavior |
| `p1/`, `p2/`, `Forms/`, `js/` | HTML and CSS practice exercises |
| `Mouse Event/`, `keyboard_event/` | JavaScript event practice exercises |
| `task24/` | Shopping checkout exercise pages |
| `Bootstrap/` | Bootstrap exercises, including the College Event page |

All exercise metadata is kept in one array in `script.js`. Each entry includes an ID, title, description, world, relative path, and status. To add or update an exercise, edit that array and keep its path relative to the project root.

## Worlds and exercise paths

| World | Tasks | Paths |
| --- | --- | --- |
| HTML Basics | 1–8 | `p1/p1/index.html`, `p1/task2/index.html`, `p1/p3/index.html`–`p1/p8/index.html` |
| HTML Layout | 9–12 | `p1/p9/index.html`, `p1/p10/index.html`, `p1/p11/index.html`, `p1/p12/layout1.html` |
| Layout with HTML + CSS | 13–16 | `p2/task13.html`–`p2/task16.html` |
| CSS Inline / Internal | 17–19 | `p2/task17.html`–`p2/task19.html` |
| HTML Forms | 20–24 | `Forms/task20.html`–`Forms/task23.html`, `task24/customer.html` |
| JavaScript Basics | 25–28 | `js/task25.html`–`js/task28.html` |
| Mouse Events | 29–33 | `Mouse Event/task29.html`–`Mouse Event/task33.html` |
| Keyboard Events | 34–39 | `keyboard_event/task34.html`–`keyboard_event/task39.html` |
| Bootstrap | 40–41 | `Bootstrap/task40/index.html`, `Bootstrap/index.html` |

Task 24 starts at `task24/customer.html` and is a multi-page customer, payment, and cart flow. Folder names containing spaces are URL-encoded by the showcase.

## Quest progress

| Status | Count | Tasks |
| --- | ---: | --- |
| Completed | 41 | All quests are available to preview |

## Verification

The project was checked for JavaScript syntax errors and for resolution of all 41 exercise paths. Browser checks verified that all quest cards render, filters and search work, the preview modal opens and closes, and the generated exercises can be previewed.
