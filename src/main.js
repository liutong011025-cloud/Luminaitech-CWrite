const BGM_SRC = "/about/yoshiyuki_tatsuya-pixel-hearts-foreverwav-427383.mp3";
const MEDAL_SFX_SRC = "/medal-hover.mp3";
const MUTE_KEY = "cwrite-home-muted";
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const LOADING_QUOTES = [
  {
    text: "You can’t use up creativity. The more you use, the more you have.",
    author: "Maya Angelou",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "We do not need magic to change the world; we carry all the power we need inside ourselves already. We have the power to imagine better.",
    author: "J.K. Rowling",
  },
  {
    text: "You can make anything by writing.",
    author: "C.S. Lewis",
  },
  {
    text: "The scariest moment is always just before you start. After that, things can only get better.",
    author: "Stephen King",
  },
  {
    text: "Start writing, no matter what. The water does not flow until the faucet is turned on.",
    author: "Louis L’Amour",
  },
  {
    text: "You can’t wait for inspiration. You have to go after it with a club.",
    author: "Jack London",
  },
  {
    text: "Inspiration exists, but it has to find you working.",
    author: "Pablo Picasso",
  },
  {
    text: "Writing is like driving at night in the fog. You can only see as far as your headlights, but you can make the whole trip that way.",
    author: "E.L. Doctorow",
  },
  {
    text: "The first draft is just you telling yourself the story.",
    author: "Terry Pratchett",
  },
  {
    text: "Almost all good writing begins with terrible first efforts. You need to start somewhere.",
    author: "Anne Lamott",
  },
  {
    text: "There is nothing to writing. All you do is sit down at the typewriter and bleed.",
    author: "Ernest Hemingway",
  },
  {
    text: "We are all apprentices in a craft where no one ever becomes a master.",
    author: "Ernest Hemingway",
  },
  {
    text: "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
    author: "Stephen King",
  },
  {
    text: "If there’s a book that you want to read, but it hasn’t been written yet, then you must write it.",
    author: "Toni Morrison",
  },
  {
    text: "There is no greater agony than bearing an untold story inside you.",
    author: "Maya Angelou",
  },
  {
    text: "Write what should not be forgotten.",
    author: "Isabel Allende",
  },
  {
    text: "Stories have to be told or they die, and when they die, we can't remember who we are or why we're here.",
    author: "Sue Monk Kidd",
  },
  {
    text: "You don’t write because you want to say something; you write because you have something to say.",
    author: "F. Scott Fitzgerald",
  },
  {
    text: "The worst enemy to creativity is self-doubt.",
    author: "Sylvia Plath",
  },
];
/**
 * 原片拆成 4 段，每段小于 GitHub 25MB，跟随仓库部署，同源加载。
 * 下滑播放当前段，播完再滑进入下一段。
 */
const HERO_CLIPS = ["/hero-1.mp4", "/hero-2.mp4", "/hero-3.mp4", "/hero-4.mp4"];

const FEATURES = [
  {
    title: "AI Writing Partner",
    description: "Get real-time feedback and suggestions as you write, tailored to your goals",
  },
  {
    title: "Self-Regulated Learning",
    description: "Take control of your learning journey with structured guidance and reflection",
  },
  {
    title: "Collaborative Tools",
    description: "Share work, get peer feedback, and learn from other writers in the community",
  },
  {
    title: "Progress Analytics",
    description: "Track your improvement over time with detailed insights into your writing patterns",
  },
];

const METHODS = [
  {
    title: "Adaptive Feedback",
    items: ["Real-time suggestions", "Personalized guidance", "Learning-focused insights"],
  },
  {
    title: "Smart Analysis",
    items: ["Writing pattern detection", "Strength identification", "Growth opportunities"],
  },
  {
    title: "Community Learning",
    items: ["Peer collaboration", "Shared resources", "Collective growth"],
  },
];

const VALUES = [
  "Perseverance",
  "Respect for Others",
  "Responsibility",
  "National Identity",
  "Commitment",
  "Integrity",
  "Benevolence",
  "Law-abidingness",
  "Empathy",
  "Diligence",
  "Filial Piety",
  "Unity",
];

const TEAM_TOP = [
  {
    name: "Dr. YANG, Yin Nicole (PhD)",
    role: "Principal Investigator",
    subtitle: "Research Assistant Professor",
    image: "/about/Nicole.webp",
    bio: [
      "Dr Yang is an interdisciplinary researcher of cognitive science, language education, and educational technology. Her work bridges multiple disciplines, leveraging her diverse academic background to explore innovative approaches to teaching and learning in technology-enhanced environments. Drawing upon contemporary cognitive science and learning theories, her research explores the intersection of human cognition, AI, and instructional design to understand and enhance how people learn.",
      "Her interdisciplinary research advances emerging technology-driven education, with a focus on (1) AI-powered creative language learning systems that support metacognitive strategies through emerging technologies. (2) cognitive mechanisms that drive human-computer collaboration; and (3) innovative learning design that integrates insights from cognition and technology to optimize learning outcomes.",
    ],
  },
  {
    name: "Prof. LEE, Chi Kin John, JP (PhD)",
    role: "Co-Principal Investigator & Advisor",
    subtitle: "Chair Professor of Curriculum and Instruction",
    image: "/about/john.webp",
    bio: [
      "Professor John Lee Chi-Kin, President and Chair Professor of Curriculum and Instruction, joined The Education University of Hong Kong (the then Hong Kong Institute of Education) in 2010. He was Vice President (Academic) from 2010 to 2019, and Vice President (Academic) and Provost from 2019 to 2023.",
      "His research expertise spans curriculum and instruction, teacher development, school improvement, life and values education, geographical and environmental education, educational leadership, sustainability education, and policy-oriented educational innovation. He is a prolific writer, having edited and written more than 25 books, and published over 175 journal articles and book chapters.",
    ],
  },
];

const TEAM_BOTTOM = [
  {
    name: "Prof. GU, Ming Yue Michelle (PhD)",
    role: "Co-Investigator",
    subtitle: "Professor, Assistant Vice President (Research)",
    image: "/about/apple.webp",
    bio: [
      "Professor Michelle Gu Mingyue is Assistant Vice President (Research) and Professor in the Department of English Language Education at The Education University of Hong Kong. She is a distinguished scholar in sociolinguistics and language education, internationally recognised for her interdisciplinary research on language, identity, multilingualism, and digital literacies.",
    ],
  },
  {
    name: "Prof. CHIU, Ming Ming (PhD)",
    role: "Co-Investigator",
    subtitle: "Chair Professor of Analytics and Diversity",
    image: "/about/CHIU,%20Ming%20Ming.png",
    bio: [
      "Professor Chiu is an analytics expert, integrating statistics, computer science and mathematics to develop theories and test them in diverse fields, including education, psychology, sociology, linguistics, criminology, economics, and management. He invented an artificial intelligence expert system, Statistician, and statistical methods recognised by the International Society for the Learning Sciences.",
    ],
  },
  {
    name: "Prof. WEN Yun (PhD)",
    role: "Co-Investigator",
    subtitle: "Associate Professor, NIE NTU Singapore",
    image: "/about/Wen%20Yun.png",
    bio: [
      "Dr Wen Yun is a learning sciences researcher advancing technology-enhanced learning innovations in schools. Her research investigates how people learn through interaction and conversations in multimodal environments, and how to use emerging technologies such as AR or AI to spark productive interactions and enhance learning.",
    ],
  },
  {
    name: "Prof. MA, Qing Angel (PhD)",
    role: "Co-Investigator",
    subtitle: "Professor of Linguistics and Modern Language Studies",
    image: "/about/MA,%20Qing%20Ange.png",
    bio: [
      "Professor Angel Ma Qing currently serves as Associate Dean (Research and Postgraduate Studies) at the Faculty of Humanities, EdUHK. Her main research interests include second language vocabulary acquisition, corpus linguistics, corpus-based language pedagogy, CALL, MALL, and AI in language education.",
    ],
  },
  {
    name: "Prof. KONG, Siu Cheung (PhD)",
    role: "Co-Investigator",
    subtitle: "Chair Professor of Mathematics and Information Technology",
    image: "/about/kongsiucheung.png",
    bio: [
      "Professor Kong Siu-cheung is Chair Professor at the Department of Mathematics and Information Technology and Director of the Artificial Intelligence and Digital Competency Education Centre at EdUHK. He has been named on the Stanford list of the world's Top 2% Scientists in Education since 2019.",
    ],
  },
  {
    name: "Dr. Ling Man Ho Alpha (PhD)",
    role: "Co-Investigator",
    subtitle: "Assistant Professor of Mathematics and Information Technology",
    image: "/about/Ling%20Man%20Ho%20Alpha.png",
    bio: [
      "Dr. Alpha Ling Man Ho is Associate Professor in the Department of Mathematics and Information Technology at EdUHK. He is internationally recognized for specialized research on one-shot device testing, degradation data analysis, and statistical inference under censoring.",
    ],
  },
  {
    name: "Dr. WONG, Ming Har Ruth (PhD)",
    role: "Co-Investigator",
    subtitle: "Associate Head of Department, Assistant Professor",
    image: "/about/ruth.webp",
    bio: [
      "Dr. Wong Ming Har (Ruth) is an Assistant Professor and Associate Head of the Department of English Language Education at EdUHK. Her research focuses on EFL learning motivation, learner autonomy, and teacher training.",
    ],
  },
  {
    name: "Mr. LIU, Tong Tony",
    role: "Research Assistant",
    subtitle: "Graduate of AI & Educational Technology, EdUHK",
    image: "/about/Tony.webp",
    bio: [
      "Graduate of AI & Educational Technology, EdUHK. Research interests in AI and design, robotics automation, and STEM.",
    ],
  },
];

const intro = document.querySelector("#intro");
const video = document.querySelector("#hero-video");
const boot = document.querySelector("#boot");
const bootStatus = document.querySelector("#boot-status");
const bootProgressFill = document.querySelector("#boot-progress-fill");
const bootQuotes = document.querySelector("#boot-quotes");
const scrollCue = document.querySelector("#scroll-cue");
const muteBtn = document.querySelector("#mute-btn");
const muteIcon = document.querySelector("#mute-icon");
const navItems = [...document.querySelectorAll(".nav-item")];

let clipIndex = 0;
let ready = false;
let playing = false;
let playRaf = 0;
let touchStartY = 0;
let stepCooldownUntil = 0;
let playWatch = null;
let preloadEl = null;
let bgm = null;
let medalSfx = null;
let isMuted = localStorage.getItem(MUTE_KEY) === "true";
let quoteTimer = 0;
let quoteHideTimers = [];
let quoteIndex = Math.floor(Math.random() * LOADING_QUOTES.length);
const occupiedQuoteCells = new Set();

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function setBootProgress(percent, label) {
  const pct = clamp(Math.round(percent), 0, 100);
  if (bootStatus) bootStatus.textContent = label ?? `${pct}%`;
  if (bootProgressFill) bootProgressFill.style.width = `${pct}%`;
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

const QUOTE_SLOTS = [
  { left: 3, top: 5, width: 28, height: 20, size: "is-md" },
  { left: 36, top: 3, width: 28, height: 16, size: "is-sm" },
  { left: 69, top: 5, width: 28, height: 20, size: "is-md" },
  { left: 2, top: 30, width: 22, height: 18, size: "is-sm" },
  { left: 76, top: 30, width: 22, height: 18, size: "is-sm" },
  { left: 2, top: 52, width: 22, height: 16, size: "is-xs" },
  { left: 76, top: 52, width: 22, height: 16, size: "is-xs" },
  { left: 3, top: 74, width: 28, height: 22, size: "is-lg" },
  { left: 36, top: 78, width: 28, height: 18, size: "is-sm" },
  { left: 69, top: 74, width: 28, height: 22, size: "is-lg" },
];

function pickQuoteSlot() {
  const free = [];
  QUOTE_SLOTS.forEach((slot, index) => {
    if (!occupiedQuoteCells.has(String(index))) free.push(index);
  });
  if (!free.length) return null;
  return free[Math.floor(Math.random() * free.length)];
}

function spawnBootQuote() {
  if (!bootQuotes || boot.classList.contains("is-done")) return;
  const slotIndex = pickQuoteSlot();
  if (slotIndex === null) return;

  const slot = QUOTE_SLOTS[slotIndex];
  const quote = LOADING_QUOTES[quoteIndex % LOADING_QUOTES.length];
  quoteIndex += 1;
  occupiedQuoteCells.add(String(slotIndex));

  const el = document.createElement("blockquote");
  el.className = `boot-quote ${slot.size}`;
  el.style.left = `${slot.left}%`;
  el.style.top = `${slot.top}%`;
  el.style.width = `${slot.width}%`;
  el.style.height = `${slot.height}%`;
  el.innerHTML = `<p>${escapeHtml(`“${quote.text}”`)}</p><cite>— ${escapeHtml(quote.author)}</cite>`;
  bootQuotes.append(el);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => el.classList.add("is-on"));
  });

  const visibleFor = REDUCED_MOTION ? 4500 : randomBetween(4500, 7000);
  const hideId = window.setTimeout(() => {
    el.classList.remove("is-on");
    const removeId = window.setTimeout(() => {
      el.remove();
      occupiedQuoteCells.delete(String(slotIndex));
    }, REDUCED_MOTION ? 0 : 1200);
    quoteHideTimers.push(removeId);
  }, visibleFor);
  quoteHideTimers.push(hideId);
}

function startBootQuotes() {
  if (!bootQuotes) return;
  stopBootQuotes();
  const initial = REDUCED_MOTION ? 5 : 8;
  for (let i = 0; i < initial; i += 1) {
    const id = window.setTimeout(spawnBootQuote, i * (REDUCED_MOTION ? 120 : 380));
    quoteHideTimers.push(id);
  }
  quoteTimer = window.setInterval(() => {
    if (occupiedQuoteCells.size < QUOTE_SLOTS.length) spawnBootQuote();
  }, REDUCED_MOTION ? 1800 : 1100);
}

function stopBootQuotes() {
  window.clearInterval(quoteTimer);
  quoteHideTimers.forEach((id) => window.clearTimeout(id));
  quoteHideTimers = [];
  occupiedQuoteCells.clear();
  bootQuotes?.replaceChildren();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderMember(member) {
  const bio = member.bio.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  return `
    <article class="member-card">
      <div class="member-media">
        <img src="${member.image}" alt="${escapeHtml(member.name)}" loading="lazy" />
        <div class="member-bio">${bio}</div>
      </div>
      <div class="member-meta">
        <h3>${escapeHtml(member.name)}</h3>
        <p class="member-role">${escapeHtml(member.role)}</p>
        <p class="member-sub">${escapeHtml(member.subtitle)}</p>
      </div>
    </article>
  `;
}

function renderStaticContent() {
  document.querySelector("#team-top").innerHTML = TEAM_TOP.map(renderMember).join("");
  document.querySelector("#team-bottom").innerHTML = TEAM_BOTTOM.map(renderMember).join("");
  document.querySelector("#feature-grid").innerHTML = FEATURES.map(
    (item) => `
      <article class="feature-card">
        <h4>${escapeHtml(item.title)}</h4>
        <p>${escapeHtml(item.description)}</p>
      </article>
    `,
  ).join("");
  document.querySelector("#method-grid").innerHTML = METHODS.map(
    (item) => `
      <article class="method-card">
        <h4>${escapeHtml(item.title)}</h4>
        <ul>${item.items.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
      </article>
    `,
  ).join("");
  document.querySelector("#values-wrap").innerHTML = VALUES.map(
    (value) => `<span class="value-pill">${escapeHtml(value)}</span>`,
  ).join("");
}

function lastClipIndex() {
  return HERO_CLIPS.length - 1;
}

function atClipEnd() {
  return Boolean(video.ended || (video.duration && video.currentTime >= video.duration - 0.08));
}

function syncScrollLock() {
  document.body.classList.toggle(
    "is-intro-locked",
    ready && !(clipIndex >= lastClipIndex() && atClipEnd()),
  );
}

function preloadClip(index) {
  if (index < 0 || index > lastClipIndex()) return;
  if (!preloadEl) {
    preloadEl = document.createElement("video");
    preloadEl.muted = true;
    preloadEl.preload = "auto";
    preloadEl.playsInline = true;
  }
  if (preloadEl.dataset.clip === String(index)) return;
  preloadEl.dataset.clip = String(index);
  preloadEl.src = HERO_CLIPS[index];
}

function finishPlay() {
  playing = false;
  if (playRaf) {
    cancelAnimationFrame(playRaf);
    playRaf = 0;
  }
  if (playWatch) {
    video.removeEventListener("timeupdate", playWatch);
    video.removeEventListener("ended", playWatch);
    playWatch = null;
  }
  stepCooldownUntil = Date.now() + 420;
  syncScrollLock();
  scrollCue?.classList.toggle("is-gone", clipIndex > 0 || atClipEnd());
  updateActiveNav();
  preloadClip(clipIndex + 1);
}

function loadClip(index, atEnd = false) {
  return new Promise((resolve, reject) => {
    const applyHead = () => {
      video.pause();
      if (atEnd && video.duration) video.currentTime = Math.max(0, video.duration - 0.04);
      else video.currentTime = 0;
    };
    if (clipIndex === index && video.readyState >= 2) {
      applyHead();
      resolve();
      return;
    }
    const onReady = () => {
      applyHead();
      resolve();
    };
    const onError = () => reject(new Error("Unable to load video"));
    video.addEventListener("loadeddata", onReady, { once: true });
    video.addEventListener("error", onError, { once: true });
    clipIndex = index;
    video.src = HERO_CLIPS[index];
    preloadClip(index + 1);
  });
}

function playCurrentClip() {
  if (playing) return;
  playing = true;
  const stopAtEnd = () => {
    if (!playing) return;
    if (!atClipEnd()) return;
    video.pause();
    finishPlay();
  };
  playWatch = stopAtEnd;
  video.addEventListener("timeupdate", stopAtEnd);
  video.addEventListener("ended", stopAtEnd);
  void video.play().catch(() => finishPlay());
}

async function stepIntro(direction) {
  if (playing || Date.now() < stepCooldownUntil || !ready) return;
  if (direction > 0) {
    if (!atClipEnd()) {
      playCurrentClip();
      return;
    }
    if (clipIndex >= lastClipIndex()) return;
    await loadClip(clipIndex + 1);
    playCurrentClip();
    return;
  }
  if (clipIndex <= 0) {
    video.pause();
    video.currentTime = 0;
    finishPlay();
    return;
  }
  await loadClip(clipIndex - 1, true);
  finishPlay();
}

function onIntroWheel(event) {
  if (!ready) return;
  const atTop = window.scrollY <= 2;
  if (!atTop) return;
  if (playing || Date.now() < stepCooldownUntil) {
    if (clipIndex < lastClipIndex() || event.deltaY < 0) event.preventDefault();
    return;
  }
  if (Math.abs(event.deltaY) < 18) return;
  const down = event.deltaY > 0;
  if (down && (clipIndex < lastClipIndex() || !atClipEnd())) {
    event.preventDefault();
    void stepIntro(1);
    return;
  }
  if (!down && (clipIndex > 0 || video.currentTime > 0.05)) {
    event.preventDefault();
    void stepIntro(-1);
  }
}

function onIntroTouchStart(event) {
  touchStartY = event.touches[0]?.clientY ?? 0;
}

function onIntroTouchEnd(event) {
  if (!ready || playing || Date.now() < stepCooldownUntil) return;
  const y = event.changedTouches[0]?.clientY ?? touchStartY;
  const dy = touchStartY - y;
  if (Math.abs(dy) < 48) return;
  const atTop = window.scrollY <= 2;
  if (dy > 0 && atTop && (clipIndex < lastClipIndex() || !atClipEnd())) {
    void stepIntro(1);
    return;
  }
  if (dy < 0 && atTop && (clipIndex > 0 || video.currentTime > 0.05)) void stepIntro(-1);
}

function onIntroKey(event) {
  if (!ready || playing || Date.now() < stepCooldownUntil) return;
  const atTop = window.scrollY <= 2;
  if (["ArrowDown", "PageDown", " "].includes(event.key) && atTop && (clipIndex < lastClipIndex() || !atClipEnd())) {
    event.preventDefault();
    void stepIntro(1);
    return;
  }
  if (["ArrowUp", "PageUp"].includes(event.key) && atTop && (clipIndex > 0 || video.currentTime > 0.05)) {
    event.preventDefault();
    void stepIntro(-1);
  }
}

function updateActiveNav() {
  const sections = [
    { id: "intro", el: intro },
    { id: "team", el: document.querySelector("#team") },
    { id: "vision", el: document.querySelector("#vision") },
    { id: "awards", el: document.querySelector("#awards") },
    { id: "partnerships", el: document.querySelector("#partnerships") },
  ].filter((section) => section.el);
  const mid = window.innerHeight * 0.35;
  let active = "intro";
  for (const section of sections) {
    const top = section.el.getBoundingClientRect().top;
    if (top <= mid) active = section.id;
  }
  navItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.section === active);
  });
}

function updateMuteUi() {
  if (!muteBtn || !muteIcon) return;
  muteIcon.src = isMuted ? "/about/speakeroff.webp" : "/about/speaker%20on.webp";
  muteBtn.setAttribute("aria-label", isMuted ? "Unmute" : "Mute");
}

function applyMuteState() {
  if (bgm) {
    bgm.muted = isMuted;
    if (isMuted) {
      bgm.pause();
    } else {
      void bgm.play().catch(() => {});
    }
  }
  if (medalSfx) medalSfx.muted = isMuted;
  localStorage.setItem(MUTE_KEY, String(isMuted));
  updateMuteUi();
}

function setupAudio() {
  bgm = new Audio(BGM_SRC);
  bgm.loop = true;
  bgm.volume = 0.3;
  bgm.preload = "auto";
  medalSfx = document.querySelector("#medal-sfx");
  if (!medalSfx) {
    medalSfx = new Audio(MEDAL_SFX_SRC);
    medalSfx.preload = "auto";
  }
  medalSfx.volume = 1;
  updateMuteUi();
  applyMuteState();

  const unlock = () => {
    if (medalSfx) {
      medalSfx.muted = isMuted;
      medalSfx.volume = 1;
      const resume = medalSfx.play();
      if (resume) {
        void resume
          .then(() => {
            medalSfx.pause();
            medalSfx.currentTime = 0;
          })
          .catch(() => {});
      }
    }
    if (!isMuted) void bgm.play().catch(() => {});
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("keydown", unlock);
    window.removeEventListener("wheel", unlock);
  };
  window.addEventListener("pointerdown", unlock, { passive: true });
  window.addEventListener("keydown", unlock);
  window.addEventListener("wheel", unlock, { passive: true });

  muteBtn?.addEventListener("click", () => {
    isMuted = !isMuted;
    applyMuteState();
  });
}

function playMedalSfx() {
  if (isMuted || !medalSfx) return;
  try {
    medalSfx.pause();
    medalSfx.currentTime = 0;
    medalSfx.muted = false;
    medalSfx.volume = 1;
    void medalSfx.play().catch(() => {});
  } catch {
    // ignore autoplay restrictions until the next click
  }
}

function setupMedalPhysics() {
  const slots = document.querySelectorAll(".medal-slot");
  slots.forEach((slot) => {
    const hang = slot.querySelector(".medal-hang");
    const swing = slot.querySelector(".medal-swing");
    if (!hang) return;

    hang.addEventListener("pointerenter", () => {
      playMedalSfx();
    });
    hang.addEventListener("mouseenter", () => {
      playMedalSfx();
    });

    if (REDUCED_MOTION || !swing) return;

    let angle = 0;
    let velocity = 0;
    let target = 0;
    let hovering = false;
    let raf = 0;

    const tick = () => {
      const spring = 0.085;
      const damp = 0.9;
      velocity += (target - angle) * spring;
      velocity *= damp;
      angle += velocity;
      swing.style.transform = `rotate(${angle}deg)`;
      if (!hovering && Math.abs(angle) < 0.08 && Math.abs(velocity) < 0.08) {
        angle = 0;
        velocity = 0;
        swing.style.transform = "";
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const ensureTick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (event) => {
      const rect = hang.getBoundingClientRect();
      const x =
        ("clientX" in event ? event.clientX : event.touches?.[0]?.clientX) ??
        rect.left + rect.width / 2;
      const norm = ((x - rect.left) / rect.width) * 2 - 1;
      target = clamp(norm * 14, -16, 16);
      ensureTick();
    };

    hang.addEventListener("pointerenter", () => {
      hovering = true;
      slot.classList.add("is-dragging");
      ensureTick();
    });
    hang.addEventListener("pointerleave", () => {
      hovering = false;
      target = 0;
      slot.classList.remove("is-dragging");
      ensureTick();
    });
    hang.addEventListener("pointermove", onMove);
  });
}

function bindVideo() {
  video.pause();
  video.currentTime = 0;
  clipIndex = 0;
  playing = false;
  ready = true;

  window.addEventListener("wheel", onIntroWheel, { passive: false });
  window.addEventListener("keydown", onIntroKey);
  window.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("resize", updateActiveNav);
  intro?.addEventListener("touchstart", onIntroTouchStart, { passive: true });
  intro?.addEventListener("touchend", onIntroTouchEnd, { passive: true });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const section = item.dataset.section;
      if (!section || !ready) return;
      if (section === "intro") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        void loadClip(0);
        return;
      }
      video.pause();
      void loadClip(lastClipIndex(), true).then(() => {
        syncScrollLock();
      });
    });
  });

  stopBootQuotes();
  boot.classList.add("is-done");
  syncScrollLock();
  updateActiveNav();
}

async function start() {
  renderStaticContent();
  setupAudio();
  setupMedalPhysics();
  startBootQuotes();
  try {
    setBootProgress(12, "Loading…");
    await loadClip(0);
    setBootProgress(100);
    bindVideo();
  } catch (error) {
    console.error(error);
    stopBootQuotes();
    setBootProgress(0, "Failed");
  }
}

window.addEventListener("beforeunload", () => {
  if (playRaf) cancelAnimationFrame(playRaf);
  if (bgm) {
    bgm.pause();
    bgm.src = "";
  }
  if (medalSfx) {
    medalSfx.pause();
    medalSfx.src = "";
  }
});

start();
