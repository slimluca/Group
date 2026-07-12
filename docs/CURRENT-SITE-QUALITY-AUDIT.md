# Current Site Quality Audit

Audit date: 12 July 2026  
Scope: current local Dog Haven Group application and its internal routes  
Purpose: identify issues and opportunities; this document is not a public page and must not enter navigation or the sitemap

## Executive summary

The site has a sound route structure, shared metadata helper, working country gateways, useful interactive Lab tools, substantial Academy content, a downloadable PDF, and strong internal linking in recently expanded editorial copy. The principal remaining quality constraint is visual/content specificity: many planned SVG references intentionally fall back to the same Boxer image, so distinct subjects are not yet illustrated distinctly. Several global comparison and travel pages also need source-governed data before they can become authoritative rather than framework-level guidance.

No confirmed critical broken route, invalid canonical, duplicate metadata pair, invalid JSON-LD syntax, or empty rendered content panel was found during this audit. Items below separate current defects from deliberate future opportunities.

## Critical

### No confirmed critical issue

No issue observed in the audited local build currently prevents the principal site, contact route, Lab, Academy, country gateways, Journal, downloads, or policy content from functioning. Re-audit production-only integrations and the deployed contact environment separately because a local audit cannot prove production delivery.

## High priority

### Distinct content subjects share one fallback visual

`MediaFrame` currently converts every `.svg` content reference to the shared Boxer placeholder. This avoids broken images, but travel documents, maps, dashboards, country comparisons, journal scenes, and download covers can therefore display the same generic Boxer. The supplied homepage platform images and three country gateway maps are correctly treated as meaningful assets and should remain untouched.

Recommended action: replace fallback references gradually with approved, subject-specific images only when those assets exist. Do not mass-generate decorative images merely to eliminate repetition. Preserve the clean Boxer as the neutral fallback.

### Data-led comparison pages need published evidence before stronger claims

World Atlas, ownership-index, cost-comparison, route-guide, and international-travel subjects naturally invite current factual claims. Current copy is appropriately cautious, but these pages cannot mature into decision tools without visible source dates, official links where rules change, definitions, geographic scope, assumptions, and an update owner.

Recommended action: prioritise a source registry and methodology workflow before expanding page count or adding scores.

### Contact delivery requires deployment verification

The contact system has an API route and public form, but successful production email or message delivery depends on deployed environment configuration and cannot be established by static inspection or a local browser alone.

Recommended action: run a controlled production or staging submission, verify receipt, retention, error handling, rate limits, and privacy wording, and document operational ownership.

## Medium priority

### Repeated visual treatment can imply content equivalence

The Boxer fallback is used across multiple editorial sections and several Journal/download placements. Its alt text correctly describes the Boxer, but the surrounding original image references describe different subjects. The visual no longer misrepresents itself through mismatched alt text, yet repetition reduces topical distinction.

### Some pages remain framework-led rather than answer-led

The global index, costs-by-country, route guides, countries, and wider platform-map topics explain how future work should be approached. This is more responsible than invented data, but users may still leave without a concrete comparison, sourced route answer, or downloadable decision aid.

Recommended action: deepen a small number of high-demand pages individually, then link framework pages to those completed examples.

### Future-tense language should remain tightly controlled

References to future indexes, route coverage, country expansion, planned downloads, and platform growth are appropriate in internal planning but can weaken public usefulness if they dominate. Existing content-quality work has removed several thin roadmap panels; continue to flag words such as “future,” “planned,” “coming,” and “will” during editorial review rather than banning them mechanically.

### Repeated cards need continuing editorial review

Shared navigation cards are structurally consistent and accessible, but repeated card summaries can become generic when they explain platform categories rather than a specific user outcome. Each card should answer what the destination helps the reader do and why it is distinct.

### Mobile density risks remain on data and tool interfaces

Tables use a wrapper and tool layouts have responsive rules, but long labels, result lists, generated names, action groups, and future comparison tables are the most likely sources of narrow-screen wrapping or tall cards. Verify every new dataset and tool state at 360px, including long translated or country names.

## Future opportunity

### Build one authoritative cross-border route end to end

An individually researched route with official sources, a verification date, preparation timeline, document questions, transport caveats, local-platform hand-offs, and printable output would prove the Group proposition more effectively than many shallow routes.

### Establish a source and change-management layer

Create an internal source registry containing jurisdiction, topic, official URL, claim supported, checked date, next review date, and content owner. Use it for travel, regulation, cost, and comparison content.

### Publish original, transparent comparison data

The strongest long-term search and brand opportunity is a small, defensible dataset with definitions, methodology, limitations, and downloadable tables. Measured data and editorial interpretation should remain visibly separate.

### Strengthen contextual network hand-offs

Where a question becomes South African, American, or Italian, link directly to the relevant local platform and explain what the reader will find there. Avoid generic footer-only hand-offs.

### Replace generic visuals selectively

Commission or supply meaningful visuals for the highest-traffic global travel, comparison, Academy, Journal, and download pages. Keep descriptive alt text tied to what is actually visible, not to the concept an absent asset was intended to show.

## Audit checklist results

| Check | Result | Notes |
| --- | --- | --- |
| Thin pages | Review needed | Framework-led comparison and route topics need sourced depth before expansion. |
| Repeated paragraphs | No site-wide duplicate block confirmed | Shared editorial phrasing and calls to action remain a watch item. |
| Generic content | Present in limited form | Most evident where platform frameworks precede real data. |
| Unfinished wording | No broken or visibly truncated copy confirmed | Continue automated scans for TODO, lorem, placeholder, and “coming soon.” |
| Future-tense placeholders | Reduced, not eliminated | Appropriate only where transparent and still useful to the reader. |
| Repeated cards | Present | Mostly shared navigation patterns; review summaries for destination-specific value. |
| Missing useful information | Present | Official sources, source dates, real comparison data, and route-specific evidence are the key gaps. |
| Dead links | No internal dead link confirmed in local QA | External sites and production-only behavior require periodic recheck. |
| Weak internal linking | Improving | Recently expanded pages link into Atlas, Travel, Lab, Academy, countries, and local gateways. |
| Missing image alt text | No missing alt on rendered Next.js images confirmed | Decorative logo images intentionally use empty alt text. |
| Duplicate titles | No duplicate title confirmed | Preserve unique metadata as routes expand. |
| Duplicate descriptions | No duplicate description confirmed | Preserve unique descriptions as routes expand. |
| Invalid canonicals | No invalid local canonical confirmed | Canonicals are derived from the configured production origin and route slug. |
| Invalid schema | No invalid JSON syntax confirmed | Organization and WebSite schema are conservative; validate again after schema expansion. |
| Empty content panels | None confirmed | Tool empty states and error states should remain part of regression QA. |
| Oversized vertical gaps | None confirmed in representative QA | Watch long mobile pages and empty conditional regions. |
| Mobile layout risks | Present but controlled | Tables, tool outputs, action rows, and long footer/legal labels need ongoing 360px testing. |

## Recommended sequence

1. Verify production contact delivery and operational safeguards.
2. Establish source governance and an update workflow.
3. Complete one authoritative moving-abroad route.
4. Add one transparent, original comparison dataset.
5. Replace the most repetitive fallback visuals with supplied subject-specific assets.
6. Repeat link, metadata, schema, content-quality, and narrow-screen QA before each release.

