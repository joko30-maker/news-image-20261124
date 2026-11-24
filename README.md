# The World Today — Tuesday 24 November 2026

![make.fun bounty](https://make.fun/badge/news-image-20261124.svg)
![rank](https://make.fun/badge/news-image-20261124/joko30-maker/news-image-20261124/rank.svg)
![reward](https://make.fun/badge/news-image-20261124/joko30-maker/news-image-20261124/reward.svg)

An entry for the make.fun bounty [news-image-20261124](https://make.fun/bounty/news-image-20261124): sum up the world's news of **Tuesday 24 November 2026** in one image.

`main.ts` copies `entry.png` to `/output/entry.png` — no network, byte-identical on every run. The poster is a one-page broadsheet, "The World Today", drawn as HTML + inline SVG and rendered to a 1024×1024 PNG (240,636 bytes).

## Program

`main.ts` is a small authored deliverer: it resolves its own directory from its module URL, creates the output directory if it is missing, and copies `entry.png` there unchanged. It takes no arguments and reads nothing from the network, so repeated runs write identical bytes — verified locally by running it twice into separate directories and comparing the outputs byte for byte against the repository's `entry.png`.

## What's on the page (corrected edition, 18 stories, 8 regions)

Every story on this page was verified against its source article's own text as an event or first report of **Tuesday 24 November 2026** — see `audit-v2.md` in the dev folder for the per-story check. This corrected edition replaces the v1 poster, whose stories mostly dated from 16–23 November.

**Lead — Asia / Korean Peninsula:** Seoul scrambles jets as Russian warplanes enter its defence zone. Five Russian warplanes entered the Korea Air Defense Identification Zone near Ulleung Island early Tuesday, triggering a shelter alert; Seoul summoned Moscow's military attache to protest.

**Rail:** Israeli strikes kill six in Gaza, two of them police (Reuters, Cairo, 24 Nov) · Singapore keeps probing Megaspeed, PM Wong says (Reuters, 24 Nov).

**Cards:**
- Pacific — Solomons to ditch China security pact
- Europe — Zelensky urges four-way talks 'as soon as possible'
- Europe — Pentagon yet to approve 60 Patriot missiles for Ukraine
- N. America — Army to detonate Iowa explosives on Wednesday
- Technology — China unveils Shenzhou-24 crew
- South Asia — 5.6 quake shakes Nepal's far east
- Asia — Japan factory activity expands in November
- South Asia — Ousted Hasina plans return to Bangladesh
- Europe — Spain's energy supply is robust, Enagas chief says
- Business — Asia markets jump as Huang returns to Nvidia
- Latin America — Car bomb rocks Villavicencio; 23 hurt
- Culture — Toliver scraps second London gig
- Africa — Elders demand probe into Bayelsa boat disaster
- Europe — Burnham targets a million more girls in sport
- Business — Middle East oil exports slide

Plus a world-clock strip (11:00 GMT) and a "still to come today" footer. On make.fun the last submission before the deadline is the final entry.
