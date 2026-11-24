# The World Today — Tuesday 24 November 2026

![make.fun bounty](https://make.fun/badge/news-image-20261124.svg)
![rank](https://make.fun/badge/news-image-20261124/joko30-maker/news-image-20261124/rank.svg)
![reward](https://make.fun/badge/news-image-20261124/joko30-maker/news-image-20261124/reward.svg)

An entry for the make.fun bounty [news-image-20261124](https://make.fun/bounty/news-image-20261124): sum up the world's news of **Tuesday 24 November 2026** in one image.

`main.ts` copies `entry.png` to `/output/entry.png` — no network, byte-identical on every run. The poster is a one-page broadsheet, "The World Today", drawn as HTML + inline SVG and rendered to a 1024×1024 PNG (256,737 bytes).

## Program

`main.ts` is a small authored deliverer: it resolves its own directory from its module URL, creates the output directory if it is missing, and copies `entry.png` there unchanged. It takes no arguments and reads nothing from the network, so repeated runs write identical bytes — verified locally by running it twice into separate directories and comparing the outputs byte for byte against the repository's `entry.png`.

## What's on the page (morning edition, 23 stories, 8 regions)

**Lead — Ukraine war / Mediterranean:** Ukraine takes the war to the Mediterranean: Russian warship sunk off Libya. Kyiv says it sank a Russian warship and damaged a cargo vessel; Tripoli condemns the attacks near Benghazi and Libya's east demands a UN probe.

**Rail:** Three tankers hit mines in Hormuz despite US escort (reports; Qatar warns against a new US–Iran escalation) · Myanmar committed genocide against Rohingya, ICJ rules.

**Cards:**
- Europe — EU proposes 22nd sanctions package on Russia
- Europe — Vučić: arrest me, a million Serbs take to the streets
- Middle East — Gaza strikes kill three, incl. a UN worker
- Asia — Seoul scrambles jets as Russian aircraft enter defence zone
- Asia — China sentences ex-official to death for spying
- South Asia — Bangladesh begins typhoid jabs for 50 million children
- South Asia — India holds No. 3 in the Asia Power Index
- SE Asia — Indonesia factory fire: workers missing, rescue goes on
- N. America — ICE arrests at Seattle airport spark 'out of control' outcry
- N. America — O'Hare ground stop lifted after staffing crunch
- N. America — Waymo pulls driverless taxis off every US freeway
- Latin America — Mexico to try 'El Chapo Isidro' at home, defying US
- Latin America — Deadly storm displaces thousands in Brazil
- Africa — Migrant boat capsizes off Senegal; dozens missing
- Technology — UN chief: agree global AI rules within a year
- Business — US blacklists Megaspeed in Nvidia chip scandal
- Climate — After COP31's collapse, the world asks: what next?
- Europe — Zelensky urges EU into talks with Russia 'at the earliest opportunity'
- Europe — Hacked data hints at 500,000 Russian war dead
- Lighter — Fiona the hippo dies after swallowing a flung hat

Plus a world-clock strip (04:45 GMT) and a "still to come today" footer. A denser final edition follows before the deadline; on make.fun the last submission before the deadline is the final entry.
