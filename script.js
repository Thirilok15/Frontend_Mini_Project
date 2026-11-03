const BASE_PATH = "./";

const exercises = [
    { id: 1, title: "HTML Editor Smoke Test", description: "A tiny HTML document with a browser title and heading to confirm the editor output is served correctly.", category: "World 1: HTML Basics", path: "p1/p1/index.html", status: "done" },
    { id: 2, title: "My First HTML Program", description: "A beginner-friendly page introducing headings, paragraphs, a list, and a useful link.", category: "World 1: HTML Basics", path: "p1/task2/index.html", status: "done" },
    { id: 3, title: "Personal Portfolio", description: "A basic portfolio introducing the student with a photo, skills, achievements, and contact links.", category: "World 1: HTML Basics", path: "p1/p3/index.html", status: "done" },
    { id: 4, title: "Travel Bucket List", description: "A nested list of dream destinations and travel activities with a simple author footer.", category: "World 1: HTML Basics", path: "p1/p4/index.html", status: "done" },
    { id: 5, title: "Science & Technology", description: "A short science article demonstrating emphasis, highlighting, and subscript and superscript text.", category: "World 1: HTML Basics", path: "p1/p5/index.html", status: "done" },
    { id: 6, title: "Employee Profile", description: "An employee profile presenting professional details, a summary, rating, and formatted formulas.", category: "World 1: HTML Basics", path: "p1/p6/index.html", status: "done" },
    { id: 7, title: "Travel Destinations", description: "A visual travel page featuring four destinations with photographs and short descriptions.", category: "World 1: HTML Basics", path: "p1/p7/index.html", status: "done" },
    { id: 8, title: "Employee ID Card", description: "A centered employee identity card showing a portrait, name, ID, role, and company.", category: "World 1: HTML Basics", path: "p1/p8/index.html", status: "done" },
    { id: 9, title: "Computer Science Department Hub", description: "A department welcome page with simple navigation links to academic information sections.", category: "World 2: HTML Layout", path: "p1/p9/index.html", status: "done" },
    { id: 10, title: "Space Exploration Layout", description: "A table-based space site layout with navigation, mission content, facts, imagery, and footer.", category: "World 2: HTML Layout", path: "p1/p10/index.html", status: "done" },
    { id: 11, title: "Employee Management Dashboard", description: "A dashboard mock-up with a fixed vertical menu for employee, payroll, leave, and report links.", category: "World 2: HTML Layout", path: "p1/p11/index.html", status: "done" },
    { id: 12, title: "Basic Page Structure", description: "A simple wireframe layout using labeled header, content, left-menu, and footer regions.", category: "World 2: HTML Layout", path: "p1/p12/layout1.html", status: "done" },
    { id: 13, title: "Nova Hospitals Header", description: "A hospital header combining branding, department search, patient links, appointments, and emergency contact.", category: "World 3: Layout with HTML + CSS", path: "p2/task13.html", status: "done" },
    { id: 14, title: "CityCare Hospital Navigation", description: "A horizontal hospital navigation header linking visitors to care departments, doctors, and appointments.", category: "World 3: Layout with HTML + CSS", path: "p2/task14.html", status: "done" },
    { id: 15, title: "Smart Search Engine Header", description: "A styled search header with a search field, category selection, and action button.", category: "World 3: Layout with HTML + CSS", path: "p2/task15.html", status: "done" },
    { id: 16, title: "GameZone Gaming Header", description: "A gaming site hero and navigation concept with a fixed menu and prominent play button.", category: "World 3: Layout with HTML + CSS", path: "p2/task16.html", status: "done" },
    { id: 17, title: "TechNova Company Profile", description: "A company profile card describing TechNova's mission, services, achievements, and contact details.", category: "World 4: CSS Inline / Internal", path: "p2/task17.html", status: "done" },
    { id: 18, title: "Library Management Dashboard", description: "A colorful library dashboard with tiles for books, members, lending, and digital resources.", category: "World 4: CSS Inline / Internal", path: "p2/task18.html", status: "done" },
    { id: 19, title: "Health Center Footer", description: "A dark hospital footer with quick links, social profiles, contact email, and a logo image.", category: "World 4: CSS Inline / Internal", path: "p2/task19.html", status: "done" },
    { id: 20, title: "Employee Registration", description: "An HTML5 employee form with validation fields and a welcome video.", category: "World 5: HTML Forms", path: "Forms/task20.html", status: "done" },
    { id: 21, title: "Student Login Form", description: "A student sign-in screen with role selection, remember-me controls, and account links.", category: "World 5: HTML Forms", path: "Forms/task21.html", status: "done" },
    { id: 22, title: "Technical Symposium Registration", description: "A symposium registration form collecting participant, college, and event information.", category: "World 5: HTML Forms", path: "Forms/task22.html", status: "done" },
    { id: 23, title: "Patient Registration Form", description: "A responsive patient intake form that organizes personal and health details into clear fields.", category: "World 5: HTML Forms", path: "Forms/task23.html", status: "done" },
    { id: 24, title: "Shopping Cart Checkout", description: "A multi-page shopping checkout flow for customer delivery details, payment, and cart confirmation.", category: "World 5: HTML Forms", path: "task24/customer.html", status: "done" },
    { id: 25, title: "Employee Form Validation", description: "An employee registration form with JavaScript validation and a confirmation of submitted details.", category: "World 6: JavaScript Basics", path: "js/task25.html", status: "done" },
    { id: 26, title: "Student Login Validation", description: "A student login form that checks the entered credentials and displays validation feedback.", category: "World 6: JavaScript Basics", path: "js/task26.html", status: "done" },
    { id: 27, title: "Student Registration Form", description: "A JavaScript-powered student form that validates input and reports registration success or errors.", category: "World 6: JavaScript Basics", path: "js/task27.html", status: "done" },
    { id: 28, title: "Course Registration Form", description: "A course form with multi-select choices, validation, and an on-page registration summary.", category: "World 6: JavaScript Basics", path: "js/task28.html", status: "done" },
    { id: 29, title: "Interactive Color Box", description: "Mouse clicks switch a colored box while hover and leave events update its message.", category: "World 7: Mouse Events", path: "Mouse Event/task29.html", status: "done" },
    { id: 30, title: "Smart Watch Product Card", description: "A product card reveals watch details on hover and shows price and stock when clicked.", category: "World 7: Mouse Events", path: "Mouse Event/task30.html", status: "done" },
    { id: 31, title: "Interactive Traffic Signal", description: "Hover over each traffic light to reveal the corresponding stop, ready, or go instruction.", category: "World 7: Mouse Events", path: "Mouse Event/task31.html", status: "done" },
    { id: 32, title: "Weather Status Cards", description: "Weather cards react to hover with a small animation and a matching forecast message.", category: "World 7: Mouse Events", path: "Mouse Event/task32.html", status: "done" },
    { id: 33, title: "Mouseover Welcome Message", description: "A button changes the welcome message when the pointer enters and leaves it.", category: "World 7: Mouse Events", path: "Mouse Event/task33.html", status: "done" },
    { id: 34, title: "Student Search", description: "Keyboard input in a student search box reports key presses, submits on Enter, and clears on Escape.", category: "World 8: Keyboard Events", path: "keyboard_event/task34.html", status: "done" },
    { id: 35, title: "ATM PIN Entry", description: "A four-digit PIN screen responds to number, backspace, and Enter key events.", category: "World 8: Keyboard Events", path: "keyboard_event/task35.html", status: "done" },
    { id: 36, title: "Product Search", description: "A product search box updates its display as keys are typed and submits the query with Enter.", category: "World 8: Keyboard Events", path: "keyboard_event/task36.html", status: "done" },
    { id: 37, title: "Online Exam Quiz", description: "A multiple-choice exam interface lets a student select an answer and check the result.", category: "World 8: Keyboard Events", path: "keyboard_event/task37.html", status: "done" },
    { id: 38, title: "Campus Image Keyboard Gallery", description: "Use the arrow keys to browse a small campus photo gallery and see the current image update.", category: "World 8: Keyboard Events", path: "keyboard_event/task38.html", status: "done" },
    { id: 39, title: "Travel Photo Keyboard Gallery", description: "Cycle through Paris, Tokyo, and New York photos using the gallery's keyboard shortcut.", category: "World 8: Keyboard Events", path: "keyboard_event/task39.html", status: "done" },
    { id: 40, title: "College Event 2026", description: "A complete college event landing page with a responsive navbar, event cards, schedule, and registration form.", category: "World 9: Bootstrap", path: "Bootstrap/task40/index.html", status: "done" },
    { id: 41, title: "User Authentication Portal", description: "A Bootstrap college-events page with responsive navigation and side-by-side login and registration forms.", category: "World 9: Bootstrap", path: "Bootstrap/index.html", status: "done" }
];

const worlds = [
    { category: "World 1: HTML Basics", title: "HTML Basics", icon: "⌘" },
    { category: "World 2: HTML Layout", title: "HTML Layout", icon: "▦" },
    { category: "World 3: Layout with HTML + CSS", title: "Layout with HTML + CSS", icon: "◫" },
    { category: "World 4: CSS Inline / Internal", title: "CSS Inline / Internal", icon: "✳" },
    { category: "World 5: HTML Forms", title: "HTML Forms", icon: "▤" },
    { category: "World 6: JavaScript Basics", title: "JavaScript Basics", icon: "JS" },
    { category: "World 7: Mouse Events", title: "Mouse Events", icon: "⌖" },
    { category: "World 8: Keyboard Events", title: "Keyboard Events", icon: "⌨" },
    { category: "World 9: Bootstrap", title: "Bootstrap", icon: "▧" }
];

const badges = [
    { name: "HTML Hero", icon: "⌘", description: "Clear Worlds 1 & 2", ids: rangeOf(1, 12) },
    { name: "CSS Wizard", icon: "✳", description: "Clear Worlds 3 & 4", ids: rangeOf(13, 19) },
    { name: "JS Ninja", icon: "JS", description: "Clear Worlds 6, 7 & 8", ids: rangeOf(25, 39) },
    { name: "Bootstrap Boss", icon: "▧", description: "Clear World 9", ids: rangeOf(40, 41) }
];

const techTags = {
    HTML: "HTML",
    CSS: "CSS",
    JavaScript: "JavaScript",
    Bootstrap: "Bootstrap",
    Forms: "Forms",
    Events: "Events"
};

const worldList = document.getElementById("world-list");
const filterList = document.getElementById("filter-list");
const searchInput = document.getElementById("quest-search");
const questModal = document.getElementById("quest-modal");
const questFrame = document.getElementById("quest-frame");
const fallbackMessage = document.getElementById("frame-fallback");
const openInNewTab = document.getElementById("open-in-new-tab");
const fallbackLink = document.getElementById("fallback-link");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let activeFilter = "all";
let activeQuestId = null;
let returnFocusTo = null;
let revealObserver = null;

function rangeOf(start, end) {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function getTechnologies(id) {
    const tags = ["HTML"];
    if (id >= 13 && id <= 39) tags.push("CSS");
    if (id >= 20 && id <= 24) tags.push("Forms");
    if (id >= 25 && id <= 39) tags.push("JavaScript");
    if (id >= 29 && id <= 39) tags.push("Events");
    if (id >= 40) {
        tags.push("CSS", "Bootstrap");
    }
    if (id === 33) tags.splice(tags.indexOf("CSS"), 1);
    return [...new Set(tags)];
}

function isBuilt(status) {
    return status === "done";
}

function getStatusLabel(status) {
    return "✓ Completed";
}

function getQuestUrl(exercise) {
    return `${BASE_PATH}${encodeURI(exercise.path)}`;
}

function cardMarkup(exercise) {
    const statusClass = `status-${exercise.status}`;
    const tags = getTechnologies(exercise.id);

    return `
        <article class="quest-card reveal" data-id="${exercise.id}" data-tags="${tags.join(" ")}" data-status="${exercise.status}">
            <div class="quest-card-top">
                <span class="quest-number">QUEST ${String(exercise.id).padStart(2, "0")}</span>
                <span class="status-badge ${statusClass}">${getStatusLabel(exercise.status)}</span>
            </div>
            <h4>${escapeHtml(exercise.title)}</h4>
            <p class="quest-description">${escapeHtml(exercise.description)}</p>
            <div class="quest-card-bottom">
                <div class="tech-tags">${tags.map(tag => `<span class="tech-tag">${techTags[tag]}</span>`).join("")}</div>
                <button class="quest-action" type="button" data-open-quest="${exercise.id}" aria-label="Play quest ${exercise.id}: ${escapeHtml(exercise.title)}">Play Quest</button>
            </div>
        </article>`;
}

function renderWorlds() {
    worldList.innerHTML = worlds.map((world, index) => {
        const quests = exercises.filter(exercise => exercise.category === world.category);
        const completeCount = quests.filter(exercise => isBuilt(exercise.status)).length;
        const progress = quests.length ? Math.round((completeCount / quests.length) * 100) : 0;
        return `
            <section class="world-section" data-world="${escapeHtml(world.category)}" aria-labelledby="world-title-${index + 1}">
                <header class="world-header">
                    <div class="world-title-wrap">
                        <span class="world-icon" aria-hidden="true">${world.icon}</span>
                        <div>
                            <span class="world-index">WORLD ${String(index + 1).padStart(2, "0")}</span>
                            <h3 id="world-title-${index + 1}">${escapeHtml(world.title)}</h3>
                        </div>
                    </div>
                    <div class="world-progress">
                        <div class="world-progress-label"><span>${completeCount} / ${quests.length} quests cleared</span><span>${progress}%</span></div>
                        <div class="progress-track" role="progressbar" aria-label="${escapeHtml(world.title)} progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
                            <span class="progress-fill" style="width:${progress}%"></span>
                        </div>
                    </div>
                </header>
                <div class="quest-grid">${quests.map(cardMarkup).join("")}</div>
            </section>`;
    }).join("");
    updateRevealObserver();
    updateFilters();
}

function renderBadges() {
    const shelf = document.getElementById("badge-shelf-list");
    shelf.innerHTML = badges.map(badge => {
        const unlocked = badge.ids.every(id => {
            const quest = exercises.find(exercise => exercise.id === id);
            return quest && isBuilt(quest.status);
        });
        return `
            <article class="achievement${unlocked ? " is-unlocked" : ""}" aria-label="${badge.name}: ${unlocked ? "unlocked" : "locked"}">
                <span class="achievement-icon" aria-hidden="true">${badge.icon}</span>
                <div><strong>${badge.name}</strong><p>${badge.description}</p></div>
                <span class="badge-status">${unlocked ? "UNLOCKED" : "LOCKED"}</span>
            </article>`;
    }).join("");
}

function animateNumber(element, target, suffix = "") {
    if (reducedMotion) {
        element.textContent = `${target}${suffix}`;
        return;
    }
    const duration = 850;
    const started = performance.now();
    function tick(now) {
        const progress = Math.min((now - started) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

function updateProgress() {
    const completed = exercises.filter(exercise => exercise.status === "done").length;
    const total = exercises.length;
    const xp = completed * 100;
    const percentage = total ? Math.round((completed / total) * 100) : 0;
    const level = Math.floor(xp / 500) + 1;

    animateNumber(document.getElementById("completed-count"), completed);
    document.getElementById("total-count").textContent = total;
    document.getElementById("xp-label").textContent = `${xp} / ${total * 100} XP`;
    document.getElementById("hud-level").textContent = level;
    document.getElementById("player-level").textContent = level;
    document.getElementById("player-xp").textContent = `${xp} XP`;
    document.getElementById("hud-progress-fill").style.width = `${percentage}%`;
    document.getElementById("player-progress-fill").style.width = `${percentage}%`;
    document.getElementById("hud-progress").setAttribute("aria-valuenow", percentage);
    document.getElementById("player-progress").setAttribute("aria-valuenow", percentage);
    document.getElementById("results-summary").textContent = `${total} quests across ${worlds.length} worlds`;
    showMilestone(completed);
}

function updateRevealObserver() {
    if (revealObserver) revealObserver.disconnect();
    const elements = document.querySelectorAll(".reveal");
    if (reducedMotion || !("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("is-visible"));
        return;
    }
    revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: .08 });
    elements.forEach(element => revealObserver.observe(element));
}

function updateFilters() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    document.querySelectorAll(".quest-card").forEach(card => {
        const exercise = exercises.find(item => item.id === Number(card.dataset.id));
        if (!exercise) return;
        const searchable = `${exercise.id} ${exercise.title} ${exercise.description}`.toLowerCase();
        const matchesSearch = !query || searchable.includes(query);
        const tags = card.dataset.tags.split(" ");
        const matchesFilter = activeFilter === "all" || tags.includes(activeFilter);
        const visible = matchesSearch && matchesFilter;
        card.classList.toggle("is-filtered-out", !visible);
        if (visible) visibleCount += 1;
    });

    document.querySelectorAll(".world-section").forEach(section => {
        const hasVisibleQuest = section.querySelector(".quest-card:not(.is-filtered-out)");
        section.classList.toggle("is-filtered-out", !hasVisibleQuest);
    });
    document.getElementById("empty-state").hidden = visibleCount > 0;
    document.getElementById("results-summary").textContent = query || activeFilter !== "all"
        ? `${visibleCount} ${visibleCount === 1 ? "quest" : "quests"} found`
        : `${exercises.length} quests across ${worlds.length} worlds`;
}

function showMilestone(completed) {
    const milestones = [10, 25, 41];
    const achieved = milestones.filter(milestone => completed >= milestone);
    if (!achieved.length) return;
    const milestone = achieved[achieved.length - 1];
    const key = `frontend-quest-milestone-${milestone}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "shown");
    window.setTimeout(() => showToast(`Achievement unlocked!`, `${milestone} quests completed — keep going!`), 900);
}

function showToast(title, message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="toast-icon" aria-hidden="true">✦</span><div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(message)}</p></div>`;
    document.getElementById("toast-region").append(toast);
    window.setTimeout(() => toast.remove(), 4200);
}

function sparkleBurst() {
    if (reducedMotion) return;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    for (let index = 0; index < 12; index += 1) {
        const sparkle = document.createElement("span");
        const angle = (Math.PI * 2 * index) / 12;
        const distance = 45 + Math.random() * 65;
        sparkle.className = "sparkle";
        sparkle.style.left = `${centerX}px`;
        sparkle.style.top = `${centerY}px`;
        sparkle.style.setProperty("--sparkle-x", `${Math.cos(angle) * distance}px`);
        sparkle.style.setProperty("--sparkle-y", `${Math.sin(angle) * distance}px`);
        document.body.append(sparkle);
        window.setTimeout(() => sparkle.remove(), 800);
    }
}

function playableQuests() {
    return exercises.filter(exercise => exercise.path);
}

function updateModal(exercise) {
    const playable = playableQuests();
    const currentIndex = playable.findIndex(item => item.id === exercise.id);
    activeQuestId = exercise.id;
    const url = getQuestUrl(exercise);
    document.getElementById("modal-kicker").textContent = `QUEST ${String(exercise.id).padStart(2, "0")}`;
    document.getElementById("modal-title").textContent = exercise.title;
    document.getElementById("modal-position").textContent = `${String(exercise.id).padStart(2, "0")} / ${String(exercises.length).padStart(2, "0")}`;
    openInNewTab.href = url;
    fallbackLink.href = url;
    fallbackMessage.hidden = true;
    document.getElementById("previous-quest").disabled = currentIndex <= 0;
    document.getElementById("next-quest").disabled = currentIndex < 0 || currentIndex >= playable.length - 1;
    questFrame.title = `Quest ${exercise.id}: ${exercise.title}`;
    questFrame.src = url;
}

function openQuest(id, trigger) {
    const exercise = exercises.find(item => item.id === id);
    if (!exercise || !exercise.path) return;
    returnFocusTo = trigger || document.activeElement;
    updateModal(exercise);
    if (!questModal.open) questModal.showModal();
    sparkleBurst();
    document.getElementById("close-modal").focus();
}

function closeQuest() {
    if (!questModal.open) return;
    questModal.close();
    questFrame.src = "about:blank";
    activeQuestId = null;
    if (returnFocusTo && typeof returnFocusTo.focus === "function") returnFocusTo.focus();
}

function moveQuest(direction) {
    const playable = playableQuests();
    const index = playable.findIndex(exercise => exercise.id === activeQuestId);
    const target = playable[index + direction];
    if (target) updateModal(target);
}

function checkFrame() {
    if (!activeQuestId || !questFrame.contentDocument) return;
    const pageTitle = questFrame.contentDocument.title.toLowerCase();
    const pageText = (questFrame.contentDocument.body?.innerText || "").toLowerCase();
    if (pageTitle.includes("404") || pageText.includes("404 not found") || pageText.includes("object not found")) {
        fallbackMessage.hidden = false;
        window.open(getQuestUrl(exercises.find(exercise => exercise.id === activeQuestId)), "_blank", "noopener,noreferrer");
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem("frontend-quest-theme");
    const theme = savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.dataset.theme = theme;
    updateThemeButton(theme);
}

function updateThemeButton(theme) {
    const light = theme === "light";
    document.getElementById("theme-icon").textContent = light ? "☾" : "☀";
    document.getElementById("theme-toggle").setAttribute("aria-label", `Switch to ${light ? "dark" : "light"} theme`);
    document.querySelector('meta[name="theme-color"]').content = light ? "#f6f7f2" : "#11131b";
}

function bindEvents() {
    document.getElementById("press-start").addEventListener("click", () => {
        document.getElementById("quest-board").scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
        document.getElementById("quest-search").focus({ preventScroll: true });
    });

    document.getElementById("theme-toggle").addEventListener("click", () => {
        const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("frontend-quest-theme", theme);
        updateThemeButton(theme);
    });

    filterList.addEventListener("click", event => {
        const button = event.target.closest("[data-filter]");
        if (!button) return;
        activeFilter = button.dataset.filter;
        filterList.querySelectorAll(".filter-chip").forEach(chip => {
            const active = chip === button;
            chip.classList.toggle("is-active", active);
            chip.setAttribute("aria-pressed", String(active));
        });
        updateFilters();
    });

    searchInput.addEventListener("input", updateFilters);
    worldList.addEventListener("click", event => {
        const button = event.target.closest("[data-open-quest]");
        if (button && !button.disabled) openQuest(Number(button.dataset.openQuest), button);
    });
    document.getElementById("close-modal").addEventListener("click", closeQuest);
    document.getElementById("previous-quest").addEventListener("click", () => moveQuest(-1));
    document.getElementById("next-quest").addEventListener("click", () => moveQuest(1));
    questModal.addEventListener("cancel", event => {
        event.preventDefault();
        closeQuest();
    });
    questModal.addEventListener("click", event => {
        if (event.target === questModal) closeQuest();
    });
    questFrame.addEventListener("load", checkFrame);

    document.addEventListener("keydown", event => {
        if (event.key === "/" && !questModal.open && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
            event.preventDefault();
            searchInput.focus();
        }
        if (!questModal.open) return;
        if (event.key === "Escape") {
            event.preventDefault();
            closeQuest();
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            moveQuest(-1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            moveQuest(1);
        }
    });
}

initTheme();
renderBadges();
renderWorlds();
updateProgress();
bindEvents();
