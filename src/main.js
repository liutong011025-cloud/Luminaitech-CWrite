:root {
  --ink: #0f172a;
  --paper: #f8fafc;
  --blue-deep: #0d47a1;
  --blue-mid: #1565c0;
  --blue-bright: #1e88e5;
  --accent-lime: #e8ff72;
  --dot-intro: #94a3b8;
  --dot-vision: #f0abfc;
  --dot-team: #67e8f9;
  --dot-awards: #fbbf24;
  --dot-partnerships: #86efac;
  --scrub-vh: 900vh;
  --header-pad: clamp(0.85rem, 2vw, 1.25rem);
  color-scheme: dark;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Manrope", system-ui, sans-serif;
  background: #000;
  color: var(--paper);
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

/* —— Header glass —— */
.site-header {
  position: fixed;
  top: var(--header-pad);
  right: var(--header-pad);
  z-index: 60;
  pointer-events: none;
}

.header-glass {
  pointer-events: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.2rem;
  width: max-content;
  max-width: calc(100vw - 2rem);
  padding: 0.4rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.38);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px) saturate(160%);
  -webkit-backdrop-filter: blur(40px) saturate(160%);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.28);
}

.nav-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.62rem 0.95rem;
  border-radius: 999px;
  font-size: 0.86rem;
  font-weight: 700;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.88);
  transition: background 0.2s ease, color 0.2s ease;
}

.header-logo {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  height: 3.35rem;
  margin: 0 0.35rem 0 0.35rem;
  padding: 0.2rem 0.45rem;
  border-radius: 0.7rem;
  overflow: hidden;
}

.header-logo img {
  width: auto;
  height: 2.85rem;
  object-fit: contain;
}

.nav-item--visit {
  font-weight: 800;
  letter-spacing: 0.02em;
}

.nav-item:hover,
.nav-item.is-active {
  background: rgba(15, 23, 42, 0.45);
  color: #fff;
}

.nav-dot {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 999px;
  flex-shrink: 0;
}

.nav-dot--intro {
  background: var(--dot-intro);
}

.nav-dot--vision {
  background: var(--dot-vision);
}

.nav-dot--team {
  background: var(--dot-team);
}

.nav-dot--awards {
  background: var(--dot-awards);
}

.nav-dot--partnerships {
  background: var(--dot-partnerships);
}

/* —— Intro scrub —— */
.scrub-section {
  position: relative;
  height: var(--scrub-vh);
}

.scrub-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  background: #000;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  background: #000;
  pointer-events: none;
  image-rendering: auto;
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.scroll-cue {
  position: absolute;
  left: 50%;
  bottom: clamp(1.75rem, 5vh, 3.25rem);
  z-index: 2;
  display: grid;
  justify-items: center;
  gap: 0.55rem;
  margin: 0;
  transform: translateX(-50%);
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.35s ease;
  animation: scroll-cue-pulse 1.8s ease-in-out infinite;
}

.scroll-cue-label {
  padding: 0.55rem 1.15rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;
  font-size: clamp(0.95rem, 2.2vw, 1.15rem);
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.65);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
}

.scroll-cue-arrow {
  width: 1.1rem;
  height: 1.1rem;
  border-right: 3px solid #fff;
  border-bottom: 3px solid #fff;
  transform: rotate(45deg);
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.7));
}

.scroll-cue.is-gone {
  opacity: 0;
  animation: none;
}

@keyframes scroll-cue-pulse {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
    opacity: 0.82;
  }
  50% {
    transform: translateX(-50%) translateY(10px);
    opacity: 1;
  }
}

/* —— Shared farm story background (Team → Partnerships) —— */
.story-world {
  position: relative;
  --veil-opacity: 0.57;
}

.story-world-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.story-world-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.story-world-veil {
  position: absolute;
  inset: 0;
  background: rgb(255 255 255 / var(--veil-opacity));
}

.story-world > section {
  position: relative;
  z-index: 1;
}

/* —— Team —— */
.team-section {
  position: relative;
  padding: clamp(4rem, 10vh, 7rem) clamp(1rem, 4vw, 2.5rem) 5rem;
  color: var(--ink);
  overflow: hidden;
  background: transparent;
}

.team-inner {
  position: relative;
  z-index: 1;
  max-width: 1500px;
  margin: 0 auto;
  text-align: center;
}

.section-kicker {
  display: inline-flex;
  margin: 0 0 0.85rem;
  padding: 0.55rem 1.1rem;
  border: 3px solid var(--ink);
  border-radius: 1.5rem;
  background: #fff;
  font-size: 0.85rem;
  font-weight: 800;
}

.section-kicker.light {
  border-color: transparent;
  background: transparent;
  color: #fff;
  text-shadow: 0 4px 10px rgba(13, 71, 161, 0.55);
}

.team-inner h2,
.vision-title {
  margin: 0 0 0.75rem;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.team-inner h2 {
  background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.section-lede {
  margin: 0 auto 2.5rem;
  max-width: 36rem;
  color: rgba(15, 23, 42, 0.72);
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.55;
}

.section-lede.light {
  color: rgba(255, 255, 255, 0.92);
  text-shadow: 0 3px 8px rgba(13, 71, 161, 0.45);
}

.team-grid {
  display: grid;
  gap: 2.5rem 2rem;
  text-align: left;
}

.team-grid--top {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 72rem;
  margin: 0 auto 2.75rem;
}

.team-grid--bottom {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.member-card {
  position: relative;
  overflow: hidden;
  border: 4px solid var(--ink);
  border-radius: 1.5rem;
  background: #fff;
  box-shadow: 6px 6px 0 rgba(15, 23, 42, 0.85);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  cursor: default;
}

.member-card:hover {
  transform: translateY(-8px) rotate(0.5deg);
  box-shadow: 10px 12px 0 rgba(15, 23, 42, 0.8);
}

.member-media {
  position: relative;
  height: 20rem;
  background: #f1f5f9;
  overflow: hidden;
}

.member-media img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top center;
  transition: transform 0.4s ease;
}

.member-card:hover .member-media img {
  transform: scale(1.04);
}

.member-bio {
  position: absolute;
  inset: 0;
  padding: 1rem;
  overflow: auto;
  background: rgba(0, 0, 0, 0.86);
  backdrop-filter: blur(8px);
  color: #fff;
  font-size: 0.82rem;
  line-height: 1.55;
  text-align: left;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.member-card:hover .member-bio {
  opacity: 1;
}

.member-bio p {
  margin: 0 0 0.75rem;
}

.member-bio p:last-child {
  margin-bottom: 0;
}

.member-meta {
  position: relative;
  padding: 1.1rem 1.15rem 1.25rem;
}

.member-meta::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 2.75rem;
  height: 2.75rem;
  border-left: 3px solid var(--ink);
  border-bottom: 3px solid var(--ink);
  border-bottom-left-radius: 1rem;
  background: #db2777;
}

.member-meta h3 {
  margin: 0 2.5rem 0.25rem 0;
  font-size: 1rem;
  font-weight: 800;
}

.member-role {
  margin: 0 0 0.2rem;
  color: #2563eb;
  font-size: 0.88rem;
  font-weight: 800;
}

.member-sub {
  margin: 0;
  color: rgba(15, 23, 42, 0.62);
  font-size: 0.84rem;
}

/* —— Vision —— */
.vision-section {
  position: relative;
  color: var(--ink);
  overflow: hidden;
  background: transparent;
}

.vision-block {
  position: relative;
  z-index: 1;
  padding: clamp(3rem, 8vh, 5.5rem) clamp(1rem, 4vw, 2.5rem);
  text-align: center;
}

.vision-hero {
  min-height: 88vh;
  display: grid;
  place-items: center;
}

.glass-panel {
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 18px 40px rgba(13, 71, 161, 0.18);
  color: var(--ink);
  text-align: left;
}

.vision-opening {
  width: min(56rem, 100%);
  padding: clamp(2rem, 5vw, 4rem);
  text-align: center;
}

.vision-opening h2 {
  margin: 0 0 1rem;
  font-size: clamp(2.6rem, 8vw, 5.5rem);
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: -0.03em;
  background: linear-gradient(180deg, #0d47a1 0%, #1e88e5 52%, #00a86b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.vision-sub {
  margin: 0 0 1rem;
  color: #1565c0;
  font-size: clamp(1.25rem, 3vw, 1.85rem);
  font-weight: 800;
}

.accent-bar {
  width: 7rem;
  height: 0.45rem;
  margin: 0 0 1.25rem;
  background: var(--accent-lime);
  box-shadow: 3px 3px 0 rgba(13, 71, 161, 0.16);
}

.accent-bar.center {
  margin-left: auto;
  margin-right: auto;
}

.vision-body,
.philosophy-text {
  margin: 0 auto;
  max-width: 48rem;
  color: #334155;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  font-weight: 600;
  line-height: 1.65;
}

.philosophy-text {
  color: var(--ink);
  text-shadow: none;
  font-size: clamp(1.25rem, 2.6vw, 1.85rem);
  line-height: 1.55;
}

.vision-title {
  color: var(--ink);
  text-shadow: none;
}

.feature-grid,
.method-grid {
  display: grid;
  gap: 1.25rem;
  max-width: 72rem;
  margin: 1.75rem auto 0;
  text-align: left;
}

.feature-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.method-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card,
.method-card {
  position: relative;
  overflow: hidden;
  padding: 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.9);
  color: var(--ink);
  box-shadow: 0 18px 40px rgba(13, 71, 161, 0.18);
  transition: transform 0.3s ease;
}

.feature-card:hover,
.method-card:hover {
  transform: translateY(-4px) rotate(-0.4deg);
}

.feature-card h4,
.method-card h4 {
  margin: 0 0 0.65rem;
  font-size: 1.35rem;
  font-weight: 800;
}

.feature-card p,
.method-card li {
  margin: 0;
  color: #64748b;
  font-weight: 600;
  line-height: 1.5;
}

.method-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.75rem;
}

.method-card li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
}

.method-card li::before {
  content: "";
  width: 0.55rem;
  height: 0.55rem;
  margin-top: 0.45rem;
  border-radius: 999px;
  background: var(--blue-bright);
  flex-shrink: 0;
}

.logo-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.logo-wrap img {
  width: min(22rem, 70vw);
  height: auto;
}

.values-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.65rem;
  max-width: 48rem;
  margin: 1.5rem auto 0;
}

.value-pill {
  padding: 0.45rem 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  color: var(--blue-deep);
  font-size: 0.88rem;
  font-weight: 800;
  box-shadow: 0 8px 18px rgba(13, 71, 161, 0.16);
  cursor: default;
  transition: transform 0.2s ease;
}

.value-pill:hover {
  transform: translateY(-2px) scale(1.04);
}

.vision-split {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  max-width: 68rem;
  margin: 1.75rem auto 0;
}

.vision-split .glass-panel {
  padding: 1.75rem;
}

.vision-split h4 {
  margin: 0 0 0.85rem;
  font-size: 1.65rem;
  font-weight: 900;
  background: linear-gradient(90deg, #0d47a1, #00a86b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.vision-split article:last-child h4 {
  background: linear-gradient(90deg, #0d47a1, #7c3aed);
  -webkit-background-clip: text;
  background-clip: text;
}

.vision-split p {
  margin: 0 0 1rem;
  color: #334155;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.55;
}

.vision-split ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.75rem;
}

.vision-split li {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.05rem;
  font-weight: 800;
  color: #334155;
}

.vision-split li::before {
  content: "";
  width: 1.65rem;
  height: 1.65rem;
  border-radius: 0.35rem;
  background: var(--accent-lime);
  box-shadow: 2px 2px 0 rgba(13, 71, 161, 0.45);
  flex-shrink: 0;
}

/* —— Mute —— */
.mute-btn {
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 70;
  width: 4.25rem;
  height: 4.25rem;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 0.2s ease;
}

.mute-btn:hover {
  transform: scale(1.05);
}

.mute-btn img {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
}

/* —— Boot —— */
.boot {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-content: center;
  background: #000;
  transition: opacity 0.45s ease, visibility 0.45s ease;
}

.boot.is-done {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.boot-quotes {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.boot-quote {
  position: absolute;
  margin: 0;
  padding: 0 0.45rem;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.26);
  text-align: left;
  opacity: 0;
  transition: opacity 1.15s ease;
}

.boot-quote.is-on {
  opacity: 1;
}

.boot-quote p {
  margin: 0;
  font-weight: 600;
  line-height: 1.45;
  letter-spacing: 0.01em;
}

.boot-quote cite {
  display: block;
  margin-top: 0.45rem;
  font-style: normal;
  font-size: 0.72em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.18);
}

.boot-quote.is-xs p {
  font-size: clamp(0.72rem, 1.5vw, 0.9rem);
}

.boot-quote.is-sm p {
  font-size: clamp(0.85rem, 1.9vw, 1.08rem);
}

.boot-quote.is-md p {
  font-size: clamp(1.05rem, 2.5vw, 1.4rem);
}

.boot-quote.is-lg p {
  font-size: clamp(1.25rem, 3.2vw, 1.85rem);
}

.boot-quote.is-xl p {
  font-size: clamp(1.45rem, 4vw, 2.2rem);
}

.boot-inner {
  position: relative;
  z-index: 2;
  display: grid;
  justify-items: center;
  gap: 0.7rem;
  background: transparent;
}

.boot-bear {
  width: clamp(7.5rem, 18vw, 11rem);
  height: auto;
  animation: boot-spin 1.15s linear infinite;
  transform-origin: center center;
  filter: drop-shadow(0 10px 24px rgba(0, 0, 0, 0.45));
}

.boot-label {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
}

.boot-status {
  margin: 0;
  font-size: clamp(1.65rem, 5vw, 2.35rem);
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #fff;
  text-shadow: 0 0 18px rgba(255, 255, 255, 0.28);
}

.boot-progress {
  width: min(16rem, 62vw);
  height: 0.42rem;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
}

.boot-progress-fill {
  width: 0%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #67e8f9, #fde68a);
  transition: width 0.2s ease;
}

@keyframes boot-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* —— Awards (pixel farm cabinet) —— */
.awards-section {
  position: relative;
  padding: clamp(4rem, 10vh, 7rem) clamp(1rem, 4vw, 2.5rem) 5rem;
  overflow: hidden;
  color: var(--ink);
  background: transparent;
}

.awards-inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.awards-kicker {
  border-color: #2a1810;
  background: #f3e6c8;
  color: #2a1810;
}

.awards-inner h2 {
  margin: 0 0 0.75rem;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--ink);
  text-shadow: none;
}

.awards-lede {
  color: rgba(15, 23, 42, 0.72);
  text-shadow: none;
}

.farm-cabinet {
  margin: 0 auto;
  max-width: 52rem;
  filter: drop-shadow(0 28px 40px rgba(0, 0, 0, 0.45));
}

.farm-cabinet-top {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 1.6rem;
  padding: 0 1.5rem;
  border: 4px solid #2a1810;
  border-bottom: 0;
  border-radius: 1rem 1rem 0 0;
  background:
    repeating-linear-gradient(
      90deg,
      #8b5a2b 0 10px,
      #7a4b22 10px 20px
    );
}

.farm-nail {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 2px;
  background: #c0c0c0;
  box-shadow: inset 0 -1px 0 #6b7280, 0 2px 0 #2a1810;
}

.farm-cabinet-glass {
  position: relative;
  min-height: 28rem;
  padding: 2.25rem 1.5rem 1.5rem;
  border: 4px solid #2a1810;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 40%),
    repeating-linear-gradient(
      90deg,
      #5c3a1e 0 14px,
      #4a2e16 14px 28px
    );
  box-shadow: inset 0 0 0 10px #3d2614;
}

.farm-rail {
  position: absolute;
  top: 2.1rem;
  left: 1.6rem;
  right: 1.6rem;
  height: 0.55rem;
  border: 3px solid #2a1810;
  background: #c4a06a;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.35);
}

.medal-rack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem 3.5rem;
  padding: 1.75rem 0.5rem 0.5rem;
  min-height: 22rem;
}

.medal-slot {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  width: min(36rem, 100%);
  padding-top: 0.4rem;
  outline: none;
  cursor: default;
}

.medal-hang {
  position: relative;
  flex: 0 0 min(17rem, 58vw);
  width: min(17rem, 58vw);
  cursor: pointer;
  outline: none;
}

.medal-peg {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 3;
  width: 0.85rem;
  height: 0.85rem;
  transform: translateX(-50%);
  border: 2px solid #2a1810;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 30%, #eee, #9ca3af 55%, #4b5563);
  box-shadow: 0 2px 0 #2a1810;
}

.medal-swing {
  transform-origin: top center;
  animation: medal-idle-sway 4.8s ease-in-out infinite;
  will-change: transform;
}

.medal-slot.is-dragging .medal-swing,
.medal-hang:hover .medal-swing,
.medal-hang:focus-within .medal-swing {
  animation: none;
}

@keyframes medal-idle-sway {
  0%,
  100% {
    transform: rotate(-3.2deg);
  }
  50% {
    transform: rotate(3.2deg);
  }
}

.medal-ribbon {
  position: relative;
  z-index: 1;
  width: 3.4rem;
  height: 3.6rem;
  margin: 0.15rem auto -0.55rem;
}

.ribbon-loop {
  display: block;
  width: 1.35rem;
  height: 1.35rem;
  margin: 0 auto;
  border: 3px solid #7f1d1d;
  border-radius: 999px;
  background: #dc2626;
  box-shadow: inset 0 0 0 3px #fca5a5;
}

.ribbon-tail {
  position: absolute;
  top: 1rem;
  width: 1.35rem;
  height: 2.55rem;
  border: 2px solid #7f1d1d;
  background:
    repeating-linear-gradient(
      180deg,
      #ef4444 0 8px,
      #b91c1c 8px 16px
    );
  clip-path: polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%);
}

.ribbon-tail--left {
  left: 0.25rem;
  transform: rotate(-8deg);
}

.ribbon-tail--right {
  right: 0.25rem;
  transform: rotate(8deg);
}

.medal-flip {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.medal-hang:hover .medal-flip,
.medal-hang:focus-within .medal-flip {
  transform: rotateY(180deg);
}

.medal-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 50%;
  overflow: hidden;
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.45),
    inset 0 0 0 3px rgba(255, 255, 255, 0.18);
}

.medal-face img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #000;
}

.medal-face--back {
  transform: rotateY(180deg);
}

.medal-info {
  flex: 1 1 12rem;
  max-width: 16rem;
  padding: 1rem 1.05rem;
  border: 3px solid #2a1810;
  border-radius: 0.85rem;
  background: rgba(243, 230, 200, 0.94);
  color: #2a1810;
  text-align: left;
  box-shadow: 4px 4px 0 #2a1810;
  opacity: 0;
  transform: translateX(0.65rem);
  pointer-events: none;
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}

.medal-slot:has(.medal-hang:hover) .medal-info,
.medal-slot:has(.medal-hang:focus-within) .medal-info {
  opacity: 1;
  transform: translateX(0);
}

.medal-info-kicker {
  margin: 0 0 0.4rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #b45309;
}

.medal-info h3 {
  margin: 0 0 0.5rem;
  font-size: clamp(0.92rem, 2.2vw, 1.05rem);
  font-weight: 800;
  line-height: 1.25;
}

.medal-info p {
  margin: 0;
  font-size: clamp(0.78rem, 1.8vw, 0.86rem);
  line-height: 1.4;
  color: #4a3424;
}

.farm-hint {
  margin: 1.25rem 0 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: rgba(42, 24, 16, 0.72);
}

.farm-cabinet-base {
  height: 1.35rem;
  border: 4px solid #2a1810;
  border-top: 0;
  border-radius: 0 0 1rem 1rem;
  background:
    repeating-linear-gradient(
      90deg,
      #8b5a2b 0 10px,
      #7a4b22 10px 20px
    );
}

/* —— Partnerships (placeholder) —— */
.partnerships-section {
  padding: clamp(4rem, 10vh, 7rem) clamp(1rem, 4vw, 2.5rem) 6rem;
  background: transparent;
  color: var(--ink);
  text-align: center;
}

.partnerships-inner {
  max-width: 48rem;
  margin: 0 auto;
}

.partnerships-inner h2 {
  margin: 0 0 0.75rem;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.partnerships-inner .section-kicker {
  border-color: var(--ink);
  background: #fff;
  color: var(--ink);
}

.partnerships-inner .section-lede {
  color: rgba(15, 23, 42, 0.72);
}

@media (max-width: 760px) {
  .farm-cabinet-glass {
    min-height: 24rem;
    padding: 2rem 0.85rem 1.15rem;
  }

  .medal-rack {
    min-height: 18rem;
  }

  .medal-slot {
    flex-direction: column;
    gap: 0.85rem;
  }

  .medal-info {
    max-width: min(17rem, 58vw);
    text-align: center;
    transform: translateY(0.45rem);
  }

  .medal-slot:has(.medal-hang:hover) .medal-info,
  .medal-slot:has(.medal-hang:focus-within) .medal-info {
    transform: translateY(0);
  }
}

@media (max-width: 1100px) {
  .team-grid--bottom {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .method-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .site-header {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }

  .header-glass {
    max-width: calc(100vw - 1.5rem);
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .nav-item {
    font-size: 0.75rem;
    padding: 0.55rem 0.75rem;
  }

  .team-grid--top,
  .team-grid--bottom,
  .feature-grid,
  .vision-split {
    grid-template-columns: 1fr;
  }

  .member-media {
    height: 16rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .scroll-cue,
  .boot,
  .boot-bear,
  .boot-quote,
  .medal-swing,
  .nav-item,
  .member-card {
    transition: none;
    animation: none !important;
  }
}
