/** Blog post data. Each post becomes a separate route at /blog/:slug. */

export const BLOG_POSTS = [
  {
    slug: 'when-to-upgrade-electrical-panel',
    title: 'When to Upgrade Your Electrical Panel',
    excerpt:
      'Flickering lights, warm breakers, and a 60-amp service that can barely keep up — the warning signs your panel is begging for help, and what an upgrade actually costs in Calgary.',
    category: 'Panel Upgrades',
    readTime: '7 min read',
    date: 'May 12, 2026',
    image: '/media/hero-panel.jpeg',
    sections: [
      {
        heading: 'Why panels matter more than they look',
        body: [
          "Your electrical panel is the single most important piece of equipment in your home. Every appliance, outlet, and light fixture runs through it. When the panel was originally sized for a 1970s household — a fridge, a stove, a TV — it simply was not built for the load a modern home draws: EV chargers, induction ranges, heat pumps, hot tubs, home offices, and a growing list of always-on electronics.",
          "Most Calgary homes built before 1990 still run on 60-amp or 100-amp service. That worked then. It usually doesn't now.",
        ],
      },
      {
        heading: 'The signs you should not ignore',
        body: [
          'Breakers that trip when you run two appliances at once. Lights that flicker when the furnace kicks on. A panel that feels warm to the touch. Fuses instead of breakers. Visible rust or scorching around the bus bars. Aluminum branch wiring. Federal Pacific or Zinsco panels (both have well-documented failure histories).',
          "Any one of these is a reason to book an assessment. Two or more, and you should not wait.",
        ],
      },
      {
        heading: 'What an upgrade actually involves',
        body: [
          "A full panel and service upgrade — going from 100A to 200A, for example — means coordinating with Enmax to pull the meter, replacing the main service entrance, installing a new panel, re-landing every circuit, and getting a permit and inspection through the Safety Codes Council. It's a one-day job in most homes, two if the service mast also needs replacing.",
          "Expect to budget $3,500–$6,500 in Calgary for a clean 100A → 200A swap. Older homes with knob-and-tube, aluminum wiring, or no grounding will sit higher because more circuits need attention along the way.",
        ],
      },
      {
        heading: 'Why permits matter',
        body: [
          "Insurance companies increasingly ask for proof that electrical work was permitted and inspected. An unpermitted panel can void a homeowner policy and complicate a sale. Every panel upgrade we do is permitted, inspected, and documented — you get the paperwork to keep with the deed.",
        ],
      },
    ],
  },
  {
    slug: 'ev-charger-installation-guide',
    title: 'EV Charger Installation: What Calgary Homeowners Should Know',
    excerpt:
      'Hardwired vs. NEMA 14-50, load calcs, permit basics, and why the cheapest install often becomes the most expensive one. A practical guide before you click "buy" on that Wall Connector.',
    category: 'EV Charging',
    readTime: '8 min read',
    date: 'April 28, 2026',
    image: '/media/hero-ev.jpeg',
    sections: [
      {
        heading: 'Level 1 vs. Level 2 — and why you almost certainly want Level 2',
        body: [
          "Level 1 is just a regular 120-volt outlet. It adds about 6–8 km of range per hour. If you drive less than 30 km a day and never need a quick top-up, it works.",
          "Level 2 runs on 240 volts — the same voltage as your dryer or stove — and delivers 40–80 km of range per hour. For most Calgary households, it is the difference between waking up to a full battery and waking up to range anxiety.",
        ],
      },
      {
        heading: 'Hardwired or plug-in?',
        body: [
          "Most home chargers can either be hardwired directly to the panel or plugged into a NEMA 14-50 outlet. Plug-in is portable; hardwired is cleaner, supports higher currents (up to 48A for Tesla Wall Connector, 60A for some commercial units), and avoids the failure point of a plug-and-receptacle interface that sees thousands of hot-unplug cycles over its lifetime.",
          "If the charger lives outside, hardwired is the right call. NEMA 14-50 outlets exposed to weather and unplugging are one of the most common service calls we run.",
        ],
      },
      {
        heading: 'The load calculation nobody tells you about',
        body: [
          "Code requires an electrician to perform a load calculation before adding a 40A or 50A continuous load to your panel. We add up your existing service: heating, range, dryer, AC, hot tub, plus the new charger. If the calculated demand exceeds your service capacity, you have three choices: install a load management device (like a Wallbox Pulsar Plus or Tesla's built-in load sharing), step down to a lower charger amperage, or upgrade the panel.",
          "Skipping the load calc is the most common reason DIY installs and discount installs fail inspection.",
        ],
      },
      {
        heading: 'What it costs in Calgary',
        body: [
          "A straightforward Level 2 install on a 100A or 200A panel, with the charger mounted within 10 metres of the panel, runs $850–$1,600 including the permit. Longer runs, exterior installs, trenching to a detached garage, or panel work to free up capacity all push the number up.",
          "Get a fixed-price quote in writing before any work starts. We won't quote sight-unseen, because nobody can — but the on-site assessment is free.",
        ],
      },
    ],
  },
  {
    slug: 'why-breakers-keep-tripping',
    title: 'Why Your Breakers Keep Tripping (And How to Stop It)',
    excerpt:
      'A tripped breaker is not the problem. It is the solution. Here is how to tell the difference between a nuisance trip and the warning sign that saves your house from a fire.',
    category: 'Maintenance & Repair',
    readTime: '6 min read',
    date: 'April 14, 2026',
    image: '/media/hero-meter.jpeg',
    sections: [
      {
        heading: 'Breakers are doing their job — that is the point',
        body: [
          "A breaker that trips is not broken. It is working exactly as designed: detecting a fault and cutting power before the wire melts or the outlet catches fire. The problem is whatever is causing the trip, not the breaker itself.",
          "Resetting a breaker that keeps tripping is the electrical equivalent of muting the smoke alarm. It does not put out the fire.",
        ],
      },
      {
        heading: 'The three causes — in order of frequency',
        body: [
          "1. Overload. You are pulling more current through that circuit than it is rated for. A 15A circuit can handle about 1,800 watts continuous. A space heater plus a hair dryer plus a coffee maker, all on the same outlet, is going to lose every time. Solution: spread the load, or add a dedicated circuit.",
          "2. Short circuit. A hot wire is touching a neutral or ground somewhere — in an outlet, a fixture, an extension cord, or inside an appliance. This trips the breaker hard and immediately. Solution: find the source. If a breaker trips the instant you reset it, do not keep resetting. Call.",
          "3. Ground fault. Current is leaking to ground through something it should not be — usually moisture, a damaged appliance cord, or a compromised fixture. GFCI and AFCI breakers will trip on much smaller faults than a standard breaker. Solution: identify the device or location, replace the damaged equipment.",
        ],
      },
      {
        heading: 'When to call right away',
        body: [
          "If a breaker is warm or hot to the touch. If you smell anything burning, even faintly. If a breaker trips immediately on reset. If multiple breakers are tripping. If the same breaker has been tripping daily for more than a week. Any of these are signs that the issue is escalating, not stable.",
          "And one more: do not replace a 15A breaker with a 20A breaker to make the tripping stop. We see this constantly. It is unsafe, it is not to code, and it is the most common single cause of electrical fires in older homes.",
        ],
      },
    ],
  },
  {
    slug: 'hot-tub-wiring-guide',
    title: 'Hot Tub Wiring: Code, Costs & Common Mistakes',
    excerpt:
      'A hot tub draws more power than your dryer and sits outside in standing water. The wiring has to be done right the first time — here is what code actually requires.',
    category: 'Hot Tub Installs',
    readTime: '7 min read',
    date: 'March 30, 2026',
    image: '/media/39ce4ad2-aaae-488b-9270-e300cd15716a.png',
    sections: [
      {
        heading: 'What a hot tub actually needs',
        body: [
          "A typical 240V hot tub draws between 30 and 60 amps continuous. That requires a dedicated circuit — no other appliances on the same breaker — protected by a GFCI breaker sized to match the tub's nameplate rating. Most installs land at 50A or 60A on 6 AWG or 8 AWG copper.",
          "Code (CEC 2024) also requires a manual disconnect within sight of the tub but at least 1.5 metres away from the water. This is usually a weatherproof spa disconnect box bolted to the side of the house or a post.",
        ],
      },
      {
        heading: 'The bonding nobody talks about',
        body: [
          "Around your hot tub, every piece of metal — railings, ladders, motors, water heaters, structural rebar in the slab — has to be bonded together with a #6 bare copper conductor and tied back to the tub's bonding lug. This creates an equipotential plane: even if a fault occurs, everything around the tub rises and falls in voltage together, so nothing becomes a shock hazard.",
          "Skipping or shortcutting the bonding is the single most common code violation we find on hot tub installs done by non-electricians. It will fail inspection, and more importantly, it can kill someone.",
        ],
      },
      {
        heading: 'What it costs in Calgary',
        body: [
          "A clean install on a 200A panel with the tub within 10 metres of the panel: $1,400–$2,200 including the GFCI breaker, spa disconnect, conduit run, permit, and inspection. Longer runs, trenching, or panel upgrades to make room push the number up. Older 100A panels often need a sub-panel for the tub circuit.",
          "Most installs are a single-day job. We coordinate with your spa delivery so the electrical is energized and tested the same day the tub is filled.",
        ],
      },
      {
        heading: 'Mistakes we routinely fix',
        body: [
          "Wire too small for the breaker rating. Standard breaker used in place of a GFCI. No disconnect within sight. Disconnect installed too close to the water. Aluminum wire on a tub that requires copper. Missing bonding. Extension cords used to bridge an undersized run. We have seen all of these, often on installs less than two years old. None of them are problems you want to find out about in the middle of a soak.",
        ],
      },
    ],
  },
  {
    slug: 'electrical-safety-older-homes-calgary',
    title: 'Electrical Safety Checklist for Older Calgary Homes',
    excerpt:
      'Knob-and-tube. Aluminum branch wiring. Federal Pacific panels. Two-prong outlets. A walkthrough of what to look for in a Calgary home built before 1990 — and what to do about it.',
    category: 'Safety',
    readTime: '9 min read',
    date: 'March 16, 2026',
    image: '/media/MCC_14963_COMM_SFH_Article_01.jpg',
    sections: [
      {
        heading: 'The 1970s aluminum wiring problem',
        body: [
          "Roughly 450,000 homes across Canada were wired with aluminum branch circuits between 1965 and 1976. Aluminum expands and contracts more than copper, and at every connection point — every outlet, every switch, every junction — that movement loosens the connection over decades. Loose connections heat up. Hot connections start fires.",
          "If your home has aluminum branch wiring, the fix is not necessarily a full rewire. CO/ALR-rated devices, or AlumiConn / COPALUM pigtails installed at every termination, are accepted remediation. But every device in the house needs to be addressed, not just the obvious ones.",
        ],
      },
      {
        heading: 'Panels with known problems',
        body: [
          "Federal Pacific Stab-Lok panels were installed widely in the 1960s and 1970s. Independent testing has shown failure-to-trip rates well above safe limits. Zinsco / Sylvania panels from the same era have similar issues — breakers can fuse to the bus bar and continue passing current under fault conditions.",
          "If you have either of these panels, replacement is not optional. It is the single most impactful safety upgrade you can make in an older home.",
        ],
      },
      {
        heading: 'Knob-and-tube — sometimes okay, often not',
        body: [
          "Pre-WWII Calgary homes often still have some live knob-and-tube wiring in the ceilings or attic. The wiring itself, where undisturbed and not in contact with insulation, is not inherently dangerous. The problem is that it has no ground, it has been spliced and modified by 80 years of homeowners, and it is buried under blown-in insulation that traps heat against the conductors.",
          "Most insurance companies will not write a policy on a home with active knob-and-tube. If you find any during a renovation, it should be removed and replaced at minimum on that circuit.",
        ],
      },
      {
        heading: 'The quick walkthrough',
        body: [
          "Check the panel: brand, age, condition, signs of heat or rust. Open one or two receptacles (with power off): look for aluminum wire, two-conductor cable with no ground, push-in back-stab connections. Test outlets with a $15 plug-in tester for missing grounds, reversed polarity, and bootleg grounds. Check bathroom, kitchen, garage, and exterior outlets for GFCI protection. Check bedrooms (post-2002 builds) for AFCI protection.",
          "Anything you find that gives you pause is worth a 30-minute walkthrough with a master electrician. We do these all the time — and the assessment is free.",
        ],
      },
    ],
  },
  {
    slug: 'smart-lighting-practical-guide',
    title: 'Smart Lighting: A Practical Guide for Real Homes',
    excerpt:
      'Past the marketing — what actually works, what dies after 18 months, and how to wire a smart home without painting yourself into a corner.',
    category: 'Lighting',
    readTime: '6 min read',
    date: 'March 02, 2026',
    image: '/media/hero-reno.png',
    sections: [
      {
        heading: 'Smart bulbs vs. smart switches',
        body: [
          "Smart bulbs are easy: screw in, pair with the app, done. But every fixture you control needs a smart bulb, and the wall switch has to stay on or the bulb loses power and disconnects from the network. In a household where other people flip switches out of habit, smart bulbs become a constant source of frustration.",
          "Smart switches are wired in once and control everything downstream. The bulbs can be cheap LEDs. The wall switch always works the way wall switches are supposed to work. For most installs, this is the better answer.",
        ],
      },
      {
        heading: 'The neutral wire problem',
        body: [
          "Most modern smart switches need a neutral wire at the switch box to power their electronics. Homes built before about 1985 frequently do not have a neutral run to switch boxes — the switch loop only carries hot and switched-hot. This is the #1 reason smart-switch projects stall mid-renovation.",
          "If you do not have a neutral, you have three options: pull a new cable (clean fix, more invasive), use a no-neutral-required switch like the Lutron Caséta line (works reliably, premium price), or relocate the smart logic to the panel with smart breakers. We assess this on the first visit so you do not buy hardware that will not work in your house.",
        ],
      },
      {
        heading: 'Protocols that will still be supported in five years',
        body: [
          "Wi-Fi smart devices are cheap, but they congest your network and most manufacturers abandon firmware support within 3–4 years. Zigbee and Z-Wave are local mesh protocols that do not depend on cloud services — and Matter, the new industry-wide standard, runs over Thread (a Zigbee-derived mesh) with cross-vendor compatibility built in.",
          "If you are wiring a new build or doing a major renovation, plan around Matter. Lutron Caséta remains the most reliable retrofit option for existing homes. Everything else, treat with appropriate skepticism.",
        ],
      },
      {
        heading: 'What we actually install',
        body: [
          "For most homes: Lutron Caséta dimmers and Pico remotes for the rooms that matter (living room, primary bedroom, hallway), regular dumb switches everywhere else. For new builds: pulled neutrals at every switch box, Matter-compatible smart switches in key locations, dedicated circuits for accent and landscape lighting. Simple, reliable, repairable.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
