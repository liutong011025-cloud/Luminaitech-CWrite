// 本地用 /hero-scrub.mp4；上线把大视频放到 CDN/对象存储，在 Vercel 配 VITE_VIDEO_SRC
const VIDEO_SRC = import.meta.env.VITE_VIDEO_SRC || "/hero-scrub.mp4";
const BGM_SRC = "/about/yoshiyuki_tatsuya-pixel-hearts-foreverwav-427383.mp3";
const MUTE_KEY = "cwrite-home-muted";
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
/**
 * 原片 8K → 3840 宽 / 120fps 全 I 帧 + fastdecode：
 * 网页端最高可用清晰度，并保持滚动跟手。不加锐化。
 */
const FPS = 120;
const SOURCE_FRAME_COUNT = 5408;
const LERP = REDUCED_MOTION ? 1 : 0.4;

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
const scrollCue = document.querySelector("#scroll-cue");
const muteBtn = document.querySelector("#mute-btn");
const muteIcon = document.querySelector("#mute-icon");
const navItems = [...document.querySelectorAll(".nav-item")];

let duration = 0;
let frameCount = 0;
let seeking = false;
let pendingTime = -1;
let displayedTime = 0;
let displayProgress = 0;
let ready = false;
let rafId = 0;
let objectUrl = "";
let bgm = null;
let isMuted = localStorage.getItem(MUTE_KEY) === "true";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
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

function getIntroProgress() {
  const rect = intro.getBoundingClientRect();
  const total = intro.offsetHeight - window.innerHeight;
  if (total <= 0) return 0;
  return clamp(-rect.top / total, 0, 1);
}

function progressToTime(progress) {
  if (!duration || frameCount <= 1) return progress * duration;
  const frame = Math.round(progress * (frameCount - 1));
  return clamp(frame / FPS, 0, Math.max(0, duration - 1 / FPS));
}

let lastQueuedFrame = -1;

function flushSeek() {
  if (!duration || pendingTime < 0 || seeking) return;
  const time = pendingTime;
  const delta = Math.abs(time - displayedTime);
  // 快滚合并到 2～3 帧一步，降低解码压力；慢滚逐步贴近
  const step = delta > 8 / FPS ? 3 : delta > 3 / FPS ? 2 : 1;
  const frame = Math.round((time * FPS) / step) * step;
  const seekTime = clamp(frame / FPS, 0, Math.max(0, duration - 1 / FPS));
  if (frame === lastQueuedFrame && delta < step / FPS) {
    pendingTime = -1;
    return;
  }
  if (Math.abs(displayedTime - seekTime) < 1 / (FPS * 2)) {
    pendingTime = -1;
    return;
  }
  lastQueuedFrame = frame;
  seeking = true;
  try {
    video.currentTime = seekTime;
  } catch {
    seeking = false;
  }
}

function onSeeked() {
  displayedTime = video.currentTime;
  seeking = false;
  if (pendingTime >= 0 && Math.abs(pendingTime - displayedTime) > 1 / (FPS * 2)) {
    flushSeek();
  } else {
    pendingTime = -1;
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

function syncFromScroll() {
  if (!ready || !duration) return;

  const targetProgress = getIntroProgress();
  // 离开 intro 后固定在片尾，避免无效 seek
  if (targetProgress >= 0.999) {
    displayProgress = 1;
  } else {
    displayProgress += (targetProgress - displayProgress) * LERP;
    if (Math.abs(targetProgress - displayProgress) < 0.00012) {
      displayProgress = targetProgress;
    }
  }

  pendingTime = progressToTime(displayProgress);
  flushSeek();
  scrollCue?.classList.toggle("is-gone", targetProgress > 0.02);
  updateActiveNav();
}

function frame() {
  rafId = requestAnimationFrame(frame);
  if (!ready) return;
  syncFromScroll();
}

async function loadVideoAsBlob(src) {
  bootStatus.textContent = "Loading 0%";
  const response = await fetch(src);
  if (!response.ok) throw new Error(`Unable to load video: ${response.status}`);
  const total = Number(response.headers.get("content-length")) || 0;
  if (!response.body) return response.blob();

  const reader = response.body.getReader();
  const chunks = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.byteLength;
    bootStatus.textContent =
      total > 0
        ? `Loading ${Math.min(100, Math.round((received / total) * 100))}%`
        : `Loading ${(received / (1024 * 1024)).toFixed(0)}MB`;
  }
  bootStatus.textContent = "Loading 100%";
  return new Blob(chunks, { type: "video/mp4" });
}

function attachSource(blob) {
  objectUrl = URL.createObjectURL(blob);
  video.src = objectUrl;
  video.load();
  return new Promise((resolve, reject) => {
    const onReady = () => {
      cleanup();
      resolve();
    };
    const onError = () => {
      cleanup();
      reject(new Error("Video decode failed"));
    };
    const cleanup = () => {
      video.removeEventListener("loadedmetadata", onReady);
      video.removeEventListener("error", onError);
    };
    video.addEventListener("loadedmetadata", onReady, { once: true });
    video.addEventListener("error", onError, { once: true });
  });
}

function updateMuteUi() {
  muteIcon.src = isMuted ? "/about/speakeroff.webp" : "/about/speaker%20on.webp";
  muteBtn.setAttribute("aria-label", isMuted ? "Unmute" : "Mute");
}

function applyMuteState() {
  if (!bgm) return;
  bgm.muted = isMuted;
  if (isMuted) {
    bgm.pause();
  } else {
    void bgm.play().catch(() => {});
  }
  localStorage.setItem(MUTE_KEY, String(isMuted));
  updateMuteUi();
}

function setupAudio() {
  bgm = new Audio(BGM_SRC);
  bgm.loop = true;
  bgm.volume = 0.3;
  bgm.preload = "auto";
  updateMuteUi();
  applyMuteState();

  const unlock = () => {
    if (!isMuted) void bgm.play().catch(() => {});
    window.removeEventListener("pointerdown", unlock);
    window.removeEventListener("keydown", unlock);
    window.removeEventListener("wheel", unlock);
  };
  window.addEventListener("pointerdown", unlock, { passive: true });
  window.addEventListener("keydown", unlock);
  window.addEventListener("wheel", unlock, { passive: true });

  muteBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    applyMuteState();
  });
}

function setupMedalPhysics() {
  if (REDUCED_MOTION) return;
  const slots = document.querySelectorAll(".medal-slot");
  slots.forEach((slot) => {
    const hang = slot.querySelector(".medal-hang");
    const swing = slot.querySelector(".medal-swing");
    if (!hang || !swing) return;

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
  duration = Number.isFinite(video.duration) ? video.duration : 0;
  frameCount = SOURCE_FRAME_COUNT || Math.max(1, Math.round(duration * FPS));
  video.pause();
  video.currentTime = 0;
  displayedTime = 0;
  pendingTime = -1;
  displayProgress = 0;
  ready = duration > 0;

  video.addEventListener("seeked", onSeeked);
  window.addEventListener("scroll", () => syncFromScroll(), { passive: true });
  window.addEventListener("resize", () => syncFromScroll());
  rafId = requestAnimationFrame(frame);
  boot.classList.add("is-done");
  syncFromScroll();
}

function attachRemote(src) {
  bootStatus.textContent = "Loading…";
  video.preload = "auto";
  video.src = src;
  video.load();
  return new Promise((resolve, reject) => {
    const onReady = () => {
      cleanup();
      resolve();
    };
    const onError = () => {
      cleanup();
      reject(new Error("Video decode failed"));
    };
    const cleanup = () => {
      video.removeEventListener("loadedmetadata", onReady);
      video.removeEventListener("error", onError);
    };
    video.addEventListener("loadedmetadata", onReady, { once: true });
    video.addEventListener("error", onError, { once: true });
  });
}

async function start() {
  renderStaticContent();
  setupMedalPhysics();
  setupAudio();
  try {
    const isRemote = /^https?:\/\//i.test(VIDEO_SRC);
    if (isRemote) {
      await attachRemote(VIDEO_SRC);
    } else {
      const blob = await loadVideoAsBlob(VIDEO_SRC);
      bootStatus.textContent = "Decoding…";
      await attachSource(blob);
    }
    bindVideo();
  } catch (error) {
    console.error(error);
    bootStatus.textContent = "Video failed to load";
  }
}

window.addEventListener("beforeunload", () => {
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  if (rafId) cancelAnimationFrame(rafId);
  if (bgm) {
    bgm.pause();
    bgm.src = "";
  }
});

start();
