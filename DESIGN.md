---
name: Selim Ataballyev Portfolio
description: Personal brand site for a senior full-stack developer - precise, calm, engineering.
colors:
  ink-primary: "#374151"
  ink-secondary: "#4b5563"
  ink-muted: "#6b7280"
  ink-quiet: "#9ca3af"
  surface-base: "#ffffff"
  surface-tinted: "#e0f2fe"
  surface-deep: "#020617"
  surface-elevated: "#0f172a"
  surface-deeper: "#1e293b"
  paper-white: "#ffffff"
  paper-night: "#020617"
  accent-day: "#0284c7"
  accent-day-soft: "#0ea5e9"
  accent-day-quiet: "#38bdf8"
  accent-day-deep: "#075985"
  accent-night: "#bae6fd"
  accent-night-soft: "#7dd3fc"
  accent-night-line: "#38bdf8"
  border-night: "#ffffff"
  divider-day: "#374151"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.04em"
rounded:
  sm: "3px"
  md: "8px"
  lg: "12px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  hero: "100px"
components:
  card-item:
    backgroundColor: "{colors.surface-base}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.md}"
    padding: "16px"
  card-item-hover-day:
    backgroundColor: "{colors.surface-tinted}"
  card-item-hover-night:
    backgroundColor: "{colors.surface-elevated}"
  chip-tag:
    backgroundColor: "transparent"
    textColor: "{colors.accent-day-quiet}"
    rounded: "{rounded.pill}"
    padding: "4px 8px"
  link-highlight-day:
    textColor: "{colors.accent-day}"
  link-highlight-night:
    textColor: "{colors.accent-night}"
  fab-circle:
    backgroundColor: "{colors.surface-base}"
    rounded: "{rounded.pill}"
    size: "56px"
  fab-circle-night:
    backgroundColor: "{colors.surface-deep}"
---

# Design System: Selim Ataballyev Portfolio

## 1. Overview

**Creative North Star: "The Senior Commit"**

The site reads like a senior engineer's commit message: short, technical, confident, and zero performative language. Density is editorial - close to print resume rhythm rather than landing-page grandstanding. There is no hero illustration, no animated word swap, no "I build delightful experiences" pitch. The avatar, the name, the years of experience, and the next-step links sit one above the other in a quiet column. The reader scans, not reads.

Atmosphere is daylight-clear at default (white paper, ink text, a single sky accent) and slate-night at dark mode (`#020617` floor, sky-200 accent). Both modes share the same restraint - the only thing that changes is the room's light, never the furniture. A diffused sky gradient follows the cursor on desktop as the one allowed flourish; it never auto-animates and never appears on touch.

The system explicitly rejects the conventions PRODUCT.md names: passionate-dev hero copy, neon-on-black influencer aesthetic, dribbble pastel illustration, personal-brand-coach CTAs, and "modern minimal" that is empty rather than precise.

**Key Characteristics:**
- One typeface. One accent hue family. One layout column on mobile, two-column sticky split on desktop.
- Type scale runs from 11px to 32px - no display-sized hero number.
- Cards as quiet hover affordances, never as decorative containers. No nested cards.
- Motion budget: opacity, color, and 300ms transitions only. No transform-driven entrances on scroll.
- Bilingual parity is non-negotiable. RU and EN must render with the same vertical rhythm.

## 2. Colors: The Daylight + Slate Palette

A single sky-blue hue family carries every accent across both themes. Neutrals are warm-cool grays in the day theme and Tailwind `slate` in the night theme. Saturated color is rationed - chips, links, scrollbars, and the focus indicator share the same accent so the eye learns one signal.

### Primary
- **Sky Day** (`#0284c7`): The daylight accent. Used for primary interactive text, scrollbar thumb, and the accent number for years of experience.
- **Sky Night** (`#bae6fd`): The dark-mode accent. Replaces Sky Day verbatim - link, accent number, hover lift.

### Secondary
- **Sky Line** (`#38bdf8`): A single line-weight color for tag chip borders, the experience-timeline diamond, and the floating-button outline. Lives at the accent-day-quiet token.
- **Sky Deep** (`#075985`): Reserved for hovered link/title states in day mode where Sky Day reads too soft on a tinted background.

### Neutral
- **Paper White** (`#ffffff`): Day-mode background.
- **Paper Night** (`#020617` Tailwind `slate-950`): Night-mode background. Note: this is darker than `#0f172a` on purpose - the body of cards lifts visibly on hover.
- **Surface Tinted** (`#e0f2fe` Tailwind `sky-100`): Day-mode card hover. The site's only saturated background.
- **Surface Elevated** (`#0f172a` Tailwind `slate-900`): Night-mode card hover.
- **Ink Primary** (`#374151`): Default body text in day mode.
- **Ink Muted** (`#6b7280` / `#9ca3af`): Date eyebrow, descriptions, secondary metadata.

### Named Rules

**The Single-Hue Rule.** Every saturated color on the page belongs to the sky family. No green for "success", no red for "error" - the system has no transactional surfaces, so it has no traffic-light vocabulary either.

**The 10% Rule.** The accent hue covers no more than 10% of any visible surface. The years-of-experience number, link text, scrollbar, and chip outline all draw from the same budget. When the page feels "blue", a chip needs to come out, not a hex needs to change.

**The No-Pure-Black Rule.** `#000` is forbidden. Night-mode floor is `#020617` (a near-black with a slate undertone). Body text in day mode is `#374151`, never `#000`.

## 3. Typography

**Display Font:** Inter (with `system-ui, sans-serif` fallback)
**Body Font:** Inter (same family, weight contrast does the work)
**Label/Mono Font:** none - the system rejects monospace-as-decoration.

**Character:** A single neutral grotesque carrying the entire scale. The voice is engineered, not editorial - any seriffed display face would push the site toward "creative portfolio" territory the brand explicitly rejects. Hierarchy comes from weight (400/500/600/700) and size, never from color or italics.

### Hierarchy
- **Display** (700, 32px, line-height 1): The name. One occurrence on the page. Never used elsewhere.
- **Headline** (700, 20px, line-height 1): The years-of-experience accent number. Reuse only for parallel single-glance numerics.
- **Title** (600, 16px, line-height 1): The role line under the name. The "section heading" register.
- **Body** (400, 14px, line-height 1.6): Description copy in projects, experience, education, and the about section. Cap at 65-75ch.
- **Meta** (400, 13px, line-height 1.5): Email, contact, footnote-rank text under the avatar.
- **Label** (500, 12px, letter-spacing 0.04em, uppercase): Date eyebrows on experience and project cards. The only uppercase in the system.
- **Tag** (600, 11px): The chip text. Smallest legible step; never goes below.

### Named Rules

**The Inter-Only Rule.** The site uses one typeface. A second display face would be the loudest possible signal of "creative portfolio" and the brand explicitly rejects it.

**The Weight-Not-Italic Rule.** Emphasis is achieved by weight or color shift only. Italics are forbidden in UI copy. They survive only inside `aboutContent` markdown if used for proper-noun emphasis.

**The 14-or-12 Rule.** Body is 14px. Eyebrow/meta is 12-13px. There is no 10px text. There is no 18px text. Steps below 11px are forbidden.

## 4. Elevation

The system is **flat at rest, lifted on hover**. There are no ambient shadows on cards, sections, or the page itself. Depth is conveyed almost entirely by background color shift on hover - a card "rises" by tinting, not by drop shadow. The two real shadows in the system are both attached to the avatar portrait, where they exist to anchor a circular cutout against the page.

### Shadow Vocabulary

- **Avatar Day** (`box-shadow: 0 10px 15px -3px #bae6fd, 0 4px 6px -4px #bae6fd` - Tailwind `shadow-lg shadow-sky-200`): Tints the avatar shadow with the accent so the portrait sits inside the brand color story rather than on top of it.
- **Avatar Night** (`box-shadow: 0 10px 15px -3px #1e293b, 0 4px 6px -4px #1e293b` - Tailwind `shadow-lg shadow-slate-800`): The night-mode counterpart. Same shape, slate-tinted to prevent a hard cutout against `#020617`.

No other element in the system carries a shadow. Floating action buttons, modals (image viewer), and the bottom panel rely on borders and z-index only.

### Named Rules

**The Flat-By-Default Rule.** Shadows are forbidden as a generic depth tool. The avatar is the only element allowed a resting shadow. Every other "card", "panel", or "popover" derives its lift from background contrast alone.

**The Hover-As-Elevation Rule.** A card hover that does not change the background color is broken. Hover is the only place tinted backgrounds appear in day mode and the only place `slate-900` appears in night mode.

## 5. Components

### Buttons

The system has almost no buttons. The two it owns:

- **Floating circle (Go-to-top, Menu toggle)**: `56x56` circle, `1px` `#38bdf8` border, fill of `#ffffff` (day) or `#020617` (night). Active state fills with `#38bdf8`. Used in the bottom-right `BottomPanel` only.
- **Inline link button (Print)**: A bare `<button>` styled as a link - shares the link-highlight class and behaves as text.

There is no primary CTA button anywhere. Every action that would normally be a button is a link instead - email, Telegram, GitHub, CV download, language switch, theme toggle. This is intentional and follows the "calm precision over decoration" principle.

### Chips (Tag Pills)

- **Shape:** Pill (`border-radius: 9999px`).
- **Background:** Transparent.
- **Border:** `1px solid #38bdf8` (Sky Line).
- **Text:** `#38bdf8`, `font-weight: 600`, `font-size: 11px`.
- **Padding:** `4px 8px`.
- **State:** Static. Tags do not hover, do not animate, and are not interactive.

Used on every project and experience card to enumerate stack. Density limit: roughly 8 chips per card before they become noise; if a project lists more, the project description is wrong, not the chip count.

### Cards (Project, Experience, Education)

- **Corner Style:** `8px` (`rounded-lg`).
- **Background:** Transparent at rest.
- **Hover Background:** `#e0f2fe` (day), `#0f172a` (night). 300ms ease.
- **Group dim:** When the card list is hovered as a whole, non-hovered siblings drop to `opacity: 0.5`. This is the system's signature focus pattern.
- **Border:** None.
- **Internal Padding:** `16px` (project), `24px` (experience desktop), `12px` (experience mobile).
- **Title hover:** Title text shifts from default ink to Sky Day (day) or Sky Night-Soft (night) on group-hover. 300ms.

### Inputs

The system has one input - the language `Select` in the profile sidebar. Style:
- Border: `1px solid` neutral (gray-500 day / white night).
- Radius: `12px`.
- Padding: `8px 16px`.
- Focus: native browser focus only. No custom ring.

Forms do not exist on this site by design.

### Navigation

The profile sidebar on desktop functions as the primary nav (avatar > info > socials > languages > technologies > theme + locale). On mobile, it collapses into a full-screen overlay launched from the bottom-right floating button. The transition is a `TransitionFade` (opacity-only).

### Signature Component: Experience Timeline Marker

A `20x20` square rotated `45deg` (a diamond), `1px` Sky Line border, sitting in the gutter to the left of each experience card. On hover, it rotates to `90deg` (a square). A `1px` vertical line connects the marker to the next item. Hidden below the `md` breakpoint. This is the only timeline-style element in the system and the only piece that uses geometric rotation.

### Signature Component: Cursor Gradient

A `350x350` blurred (`110px`) layer behind the page content, following the cursor with a spring (`@vueuse/motion`). Background: a horizontal gradient from `rgba(0, 103, 220, 0.2)` to `rgba(54, 196, 228, 0.2)`. Hidden below `md`. `pointer-events: none`. Z-index sits between the page background and content. Must respect `prefers-reduced-motion` (currently does not - flagged for harden pass).

## 6. Do's and Don'ts

### Do:
- **Do** keep the entire palette inside the sky hue family. New states use a different lightness of the same hue, never a new hue.
- **Do** convey state with background color shift, never with a drop shadow. The Flat-By-Default Rule is normative.
- **Do** size body copy at 14px and cap line length at 65-75ch. Anything longer fails the editorial-density goal.
- **Do** dim sibling cards to `opacity: 0.5` on group hover. It is the system's focus signature.
- **Do** treat actions as links by default. A button is the exception, not the default.
- **Do** keep tags pure - transparent fill, sky-line border, sky-line text. Do not add filled or "category-color" variants.
- **Do** ship every component in both EN and RU layouts. RU strings are 1.2-1.4x longer; verify nothing wraps awkwardly.
- **Do** respect `prefers-reduced-motion` on the cursor gradient and any future scroll-triggered animation.
- **Do** keep the avatar shadow accent-tinted. A neutral shadow would break the "color story includes the portrait" intent.

### Don't:
- **Don't** introduce a second typeface. Inter is the system. A serif display face is forbidden, a monospace accent is forbidden.
- **Don't** use `#000` or `#fff` for ink. Day-mode ink is `#374151` and friends; night-mode ink is `#ffffff` only on the name.
- **Don't** add gradient text (`background-clip: text`). It is decorative and the brand rejects it.
- **Don't** use side-stripe borders (`border-left` thicker than 1px). Cards lift via background, not via a colored gutter stripe.
- **Don't** use glassmorphism, backdrop blur, or "frosted glass" anywhere. The cursor gradient is the only decorative blur the system allows.
- **Don't** ship neon-on-black, purple-pink developer-influencer accents, or animated particles. PRODUCT.md names these explicitly as anti-references.
- **Don't** introduce skill bars, percentage proficiencies, star ratings, or self-assessed scores. The Proof-Over-Claim principle from PRODUCT.md forbids them.
- **Don't** add equal-weight CTA stacks ("Hire me / Email me / Schedule a call / Download CV / View Resume"). Each surface picks one next action.
- **Don't** add an icon-only social bar as the page's main content. Socials are a sidebar fragment, not the headline.
- **Don't** wrap unrelated sections in cards. Nested cards are always wrong.
- **Don't** introduce a green/red/yellow status palette. The site has no transactional state to signal.
- **Don't** add scroll-triggered transform animations (translate, scale, rotate on entry). Opacity-only fades are the motion budget.
