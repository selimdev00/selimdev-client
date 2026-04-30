# Product

## Register

brand

## Users

Three overlapping commercial audiences land on this site, all evaluating Selim as a hire-or-contract decision:

- **International clients from Upwork / cold-outbound** - non-technical or semi-technical buyers who already saw a profile or proposal and are doing a 30-second sanity check before replying. They want to verify "is this person real, senior, and worth my time" without reading prose.
- **Product companies and tech leads** - reviewing for a senior full-stack role. They open DevTools, scan GitHub, judge code taste from the site itself before reading any project description.
- **Russian-speaking clients via referrals** - usually arriving from a Telegram link, often on mobile. Same decision, different language.

Job to be done: in under 30 seconds, raise confidence enough to take one of - message on Telegram, open the Upwork profile, or open GitHub. The site is a trust artifact, not a content destination. Nobody is here to "browse a portfolio" - they are here to close one open question.

## Product Purpose

Convert qualified inbound traffic into a first contact. Every element exists to either (a) raise the perceived seniority of the developer or (b) shorten the path to messaging him. Anything that does not serve one of those two goals is decoration and should be cut.

Success looks like: the visitor leaves with a concrete next step taken (DM sent, profile opened, GitHub starred), not "I'll think about it". Failure looks like: the visitor labels the site as "another generic dev portfolio" and closes the tab.

## Brand Personality

**Precise. Calm. Engineering.**

- **Voice**: technical but plainspoken. Numbers and specifics over adjectives. No "passionate developer who loves coding" energy. Russian copy holds the same register - no Russian web cliches ("Меня зовут..., я занимаюсь...").
- **Tone**: confident without performance. The site does not need to convince - it demonstrates. Quiet authority, like a senior engineer's commit message.
- **Emotional goal**: the visitor should feel they are looking at someone who already has work and is selectively letting them in - not someone trying to sell.

## Anti-references

Things this site explicitly is not:

- The "Hi, I'm [Name], a passionate Full Stack Developer" Bootstrap-template portfolio. Generic hero, generic skills grid, generic contact form.
- Dark mode + neon-accent dev-influencer aesthetic (purple/pink gradients, glow shadows, animated particles). Reads as junior trying hard.
- Dribbble-style portfolio - oversized illustrations, pastel gradients, "behance-core" decorative animations. Wrong audience signal.
- Personal-brand-coach energy - giant headshot, "let's build something amazing together" CTAs, testimonials with stock photos.
- Linktree-style flat list of socials as the main content.
- "Modern minimal" that is actually empty - one centered name, one paragraph, one button - and signals nothing about taste or skill.

## Design Principles

1. **Proof over claim.** Every assertion of skill is backed by a clickable artifact - live project, GitHub repo, Upwork profile. No skill bars, no self-rated proficiency, no buzzword clouds.
2. **The site is the resume.** Code quality, performance, type safety, a11y, i18n polish, and animation restraint are the actual portfolio piece. A visitor who runs Lighthouse should be more impressed than one who reads the copy.
3. **Calm precision over decoration.** Restrained color, generous negative space, quiet typography. Motion exists only to acknowledge action, never to entertain. If a flourish does not survive the question "would a senior reviewer respect this?", it goes.
4. **Bilingual as a feature, not a setting.** EN and RU are equally polished, hand-tuned, and visually balanced. The language switch must feel native, not "Google-translated fallback".
5. **One next step per surface.** Every screen makes the next action obvious - usually "message on Telegram" or "open project". Multiple equal-weight CTAs are a failure of nerve.

## Accessibility & Inclusion

- Target WCAG AA. Contrast ratios verified for both light and dark themes (current palette `sky-50/sky-600` and `slate-950/sky-200` needs an audit).
- Full keyboard navigation, including the language switcher and project image viewer.
- Respect `prefers-reduced-motion` - the cursor-following gradient and any scroll animations must short-circuit.
- Readable on mobile in direct sunlight (one of the realistic referral contexts). Body copy minimum 16px, line-height generous.
- No essential information conveyed by color alone (project tags, links).
- Lang attributes correct on `<html>` for both locales (already wired via `useLocaleHead`).
