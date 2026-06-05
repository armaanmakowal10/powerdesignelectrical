/** Blog post data. Each post becomes a separate route at /blog/:slug. */

export const BLOG_POSTS = [
  {
    slug: 'when-to-upgrade-electrical-panel',
    title: 'When to Upgrade Your Electrical Panel in Calgary',
    excerpt:
      'Flickering lights, warm breakers, and a 60-amp service that can barely keep up — the warning signs your panel is begging for help, 100-amp vs. 200-amp service explained, and what a panel upgrade actually costs in Calgary.',
    category: 'Panel Upgrades',
    readTime: '11 min read',
    date: 'May 12, 2026',
    image: '/media/panel-upgrade.jpg',
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
      {
        heading: '100-amp vs. 200-amp service: which do you actually need?',
        body: [
          "The most common question we hear from Calgary homeowners is whether 100-amp service is enough or whether they should jump straight to a 200-amp panel upgrade. The honest answer depends on your load. A small home with gas heat, a gas range, and modest electrical demand can often live comfortably on 100 amps. But the moment you add an EV charger, central air conditioning, an electric range, a hot tub, or electric heating, you start pushing the limits of a 100-amp service.",
          "For most modern Calgary households planning to stay in their home for years, a 200-amp service upgrade is the smarter long-term investment. It future-proofs your home for electrification — EV chargers, heat pumps, solar, and battery storage are all becoming standard — and the cost difference between installing a 100-amp and a 200-amp panel during the same upgrade is small compared to the cost of upgrading twice.",
          "A licensed electrician performs a formal load calculation under the Canadian Electrical Code to determine your real demand. This is not guesswork. We add up your heating, cooling, ranges, dryers, water heating, and dedicated circuits, apply the code demand factors, and tell you exactly what service size your home requires.",
        ],
      },
      {
        heading: 'How long does an electrical panel upgrade take in Calgary?',
        body: [
          "Most residential panel upgrades in Calgary are completed in a single day. The power is shut off in the morning, the old panel and service entrance are removed, the new panel is installed, every circuit is re-landed and labelled, and power is restored by the end of the day after the rough-in inspection.",
          "If your service mast, meter base, or service entrance cable also needs replacing — common on homes built before 1990 — plan for a second day. We coordinate the power disconnect and reconnect directly with Enmax (now Enmax Power), so you are not left chasing the utility yourself. We handle the permit, the inspection booking, and the utility coordination as part of the job.",
        ],
      },
      {
        heading: 'Signs of an outdated electrical panel in older Calgary homes',
        body: [
          "Calgary's older neighbourhoods — Bowness, Inglewood, Forest Lawn, Renfrew, Killarney, and the inner-city communities — have a high concentration of homes with original panels that are now 40 to 60 years old. If you own one of these homes, there are specific brands and configurations to watch for.",
          "Federal Pacific Electric (FPE) Stab-Lok panels and Zinsco panels both have documented histories of breakers failing to trip under fault conditions, which is a genuine fire risk. Fuse boxes, while not inherently unsafe, indicate a service that is likely undersized and unsupported for modern loads. Sixty-amp service is no longer sufficient for almost any occupied home and is frequently flagged during home inspections and insurance renewals.",
          "If you are buying or selling a home in Calgary and the inspection report flags the electrical panel, a panel upgrade quote from a licensed master electrician gives you real numbers to work with during negotiation — and removes a common deal-breaker before closing.",
        ],
      },
      {
        heading: 'Does a panel upgrade increase home value?',
        body: [
          "Yes — and in two ways. First, a modern 200-amp panel removes a red flag that scares off buyers and complicates financing and insurance. Homes with FPE panels, fuse boxes, or 60-amp service routinely see deals fall through or sale prices reduced. Second, a 200-amp service is now an expected feature for buyers who own or plan to own an electric vehicle, want central air, or expect to add modern high-draw appliances.",
          "A documented, permitted, inspected panel upgrade is a selling feature you can point to. Keep the permit and inspection certificate with your home records — it is proof the work was done to the Canadian Electrical Code by a licensed contractor, which is exactly what a buyer's inspector and insurer want to see.",
        ],
      },
      {
        heading: 'Book a panel assessment with a Calgary master electrician',
        body: [
          "Power Design Electrical is a master-electrician-led contractor serving Calgary, Airdrie, Cochrane, Chestermere, and Okotoks. We have completed hundreds of residential panel and service upgrades across the region since 2010, every one of them permitted, inspected, and documented.",
          "If your breakers are tripping, your lights flicker, your panel runs hot, or you are planning to add an EV charger, hot tub, or air conditioning, book a free on-site panel assessment. We will perform a proper load calculation, explain whether you need a 100-amp or 200-amp service, and give you a fixed-price quote in writing before any work begins.",
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
    readTime: '12 min read',
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
          "Get a fixed-price quote in writing before any work starts. We do not quote sight-unseen, because nobody can — but the on-site assessment is free.",
        ],
      },
      {
        heading: 'Which EV chargers do Calgary electricians install?',
        body: [
          "The most common Level 2 home chargers we install in Calgary are the Tesla Wall Connector (hardwired, up to 48A), ChargePoint Home Flex (plug-in or hardwired, 16–50A), Grizzl-E (hardwired, Canadian-made, excellent in cold weather), JuiceBox 40 and 48, and Wallbox Pulsar Plus. All of these are compatible with any J1772 vehicle and can be configured for Tesla with an adapter.",
          "Cold-weather performance matters in Calgary. The Grizzl-E and ChargePoint Home Flex are both rated to –40°C, which is what you want on a January morning when your car has been sitting outside overnight. Avoid chargers with plastic enclosures rated only to 0°C — they do not survive a real Alberta winter.",
        ],
      },
      {
        heading: 'Can I install an EV charger in a detached garage in Calgary?',
        body: [
          "Yes — and this is one of the most common installs we do. Most Calgary homes with back alleys have detached garages, and the most common question is whether to run a new circuit from the house or install a sub-panel in the garage. For a single EV charger, a dedicated circuit from the main panel is usually sufficient and less expensive. If the garage also powers a welder, a woodworking shop, a heater, and a refrigerator, a sub-panel makes more sense.",
          "The run from house to garage is usually underground conduit through the back yard — a half-day of trenching followed by the electrical work. We pull the permit, schedule the inspection, and fill the trench. Most detached garage EV installs are completed in a single day.",
        ],
      },
      {
        heading: 'EV charger rebates available to Calgary homeowners',
        body: [
          "The federal government's Canada Greener Homes Grant has offered rebates for Level 2 EV charger installation, and various utility programs have come and gone. As of 2026, check the Natural Resources Canada portal for current federal incentives. Some charger manufacturers also offer mail-in rebates. We keep up with what is current and will flag any applicable rebates during the quote process.",
          "Regardless of rebates, a properly installed Level 2 charger pays for itself quickly in avoided public charging costs — typically within 18–36 months for an average Calgary household driving 15,000–20,000 km per year.",
        ],
      },
      {
        heading: 'Book your EV charger installation in Calgary',
        body: [
          "Power Design Electrical installs EV chargers across Calgary, Airdrie, Cochrane, Chestermere, and Okotoks. Every install is permitted, inspected, and backed by a master electrician. Book a free on-site assessment and we will confirm your panel capacity, recommend the right charger and amperage for your vehicle and driving habits, and give you a fixed price in writing.",
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
    readTime: '10 min read',
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
      {
        heading: 'How to identify which circuit is causing the problem',
        body: [
          "When a breaker trips, start by unplugging everything on that circuit before resetting it. If the breaker holds with nothing plugged in, plug devices back in one at a time until it trips again — that is your culprit. If the breaker trips even with nothing on the circuit, the problem is in the wiring or the breaker itself, not in an appliance.",
          "Check your panel directory. Most Calgary homes have circuits labeled at the panel, but the labels are often wrong or out of date after decades of renovations. A proper circuit map — which we create as part of any panel assessment — tells you exactly what is on each breaker, so troubleshooting takes minutes instead of hours.",
        ],
      },
      {
        heading: 'AFCI and GFCI breakers: why they trip differently',
        body: [
          "Arc Fault Circuit Interrupter (AFCI) breakers are required in bedrooms and living areas in homes built or renovated after 2002 under the Canadian Electrical Code. They trip on arc faults — tiny sparks inside walls, behind outlets, or in lamp cords that a standard breaker would never detect. If your AFCI breaker trips repeatedly with no obvious overload, the arc fault could be a damaged extension cord, a loose connection in an outlet, or deteriorating wiring inside the wall.",
          "Ground Fault Circuit Interrupter (GFCI) protection is required in kitchens, bathrooms, garages, and outdoor locations. GFCI breakers and outlets trip on very small current imbalances — as little as 5 milliamps. Moisture, a faulty appliance, or even a long extension cord outdoors can cause nuisance trips. If a GFCI in the bathroom keeps tripping, check for moisture in the outlet box and test every appliance on that circuit.",
        ],
      },
      {
        heading: 'Breaker panel repair and replacement in Calgary',
        body: [
          "If a breaker trips every time you reset it, the breaker itself may have failed — they do wear out, especially in panels that have seen years of nuisance trips. A replacement breaker for most residential panels costs $30–$80 for the part. The labour to swap it safely, with the panel live, is a licensed-electrician job.",
          "Power Design Electrical handles breaker replacements, circuit troubleshooting, and electrical repair across Calgary, Airdrie, and the surrounding area. Same-day service is available for urgent issues. Book a free assessment and we will find the cause, not just reset the breaker.",
        ],
      },
    ],
  },
  {
    slug: 'hot-tub-wiring-guide',
    title: 'Hot Tub Wiring in Calgary: Code, Costs & Common Mistakes',
    excerpt:
      'A hot tub draws more power than your dryer and sits outside in standing water. The wiring has to be done right the first time — here is what code actually requires.',
    category: 'Hot Tub Installs',
    readTime: '11 min read',
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
      {
        heading: 'Do I need a permit for hot tub wiring in Calgary?',
        body: [
          "Yes — always. Hot tub wiring is one of the most consistently inspected electrical projects in Calgary because the combination of electricity and water is inherently high-risk. The Safety Codes Council requires a permit for any new 240V circuit, and the inspection specifically checks GFCI protection, disconnect placement and rating, wire sizing, and the bonding system.",
          "An unpermitted hot tub install creates real liability. If something goes wrong — a shock, a fire, water damage — your insurance company will ask for the permit. If you cannot produce it, the claim may be denied. If you bought a home with an existing hot tub and no permit on file, have a licensed electrician inspect and document the installation before you use it.",
        ],
      },
      {
        heading: 'Hot tub wiring for Calgary winters: what to consider',
        body: [
          "Calgary's climate creates unique considerations for outdoor electrical installations. Conduit runs exposed to freeze-thaw cycles need proper weatherproof fittings and expansion allowances. The spa disconnect box must be rated for outdoor use and properly sealed against moisture intrusion from snowmelt and rain. Underground conduit runs to the tub location need to be buried below frost depth — a minimum of 600mm in Calgary — to prevent ground movement from damaging the conduit.",
          "We also strongly recommend a dedicated 20A circuit for an outdoor GFCI outlet near the tub for accessories — towel warmers, speakers, lighting — rather than running extension cords from the house. It costs little extra to add during the installation and eliminates the temptation to use improvised power solutions near water.",
        ],
      },
      {
        heading: 'Book hot tub wiring in Calgary',
        body: [
          "Power Design Electrical wires hot tubs and swim spas across Calgary, Airdrie, Cochrane, and Chestermere. We coordinate with your spa delivery, pull the permit, install the disconnect and GFCI breaker, complete the bonding, and have the tub energized and inspected before you fill it. Book a free on-site assessment and get a fixed-price quote in writing.",
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
    readTime: '13 min read',
    date: 'March 16, 2026',
    image: '/media/MCC_14963_COMM_SFH_Article_01.jpg',
    sections: [
      {
        heading: 'The 1970s aluminum wiring problem',
        body: [
          "Roughly 450,000 homes across Canada were wired with aluminum branch circuits between 1965 and 1976. Aluminum expands and contracts more than copper, and at every connection point — every outlet, every switch, every junction — that movement loosens the connection over decades. Loose connections heat up. Hot connections start fires.",
          "If your home has aluminum branch wiring, the fix is not necessarily a full rewire. CO/ALR-rated devices, or AlumiConn / COPALUM pigtails installed at every termination, are accepted remediation methods. But every device in the house needs to be addressed, not just the obvious ones.",
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
          "Pre-WWII Calgary homes often still have some live knob-and-tube wiring in the ceiling or attic. The wiring itself, where undisturbed and not in contact with insulation, is not inherently dangerous. The problem is that it has no ground, it has been spliced and modified by 80 years of homeowners, and it is buried under blown-in insulation that traps heat against the conductors.",
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
      {
        heading: 'Two-prong outlets: do they need to be replaced?',
        body: [
          "Two-prong ungrounded outlets are not immediately dangerous, but they are a sign of an older wiring system that lacks equipment grounding. Modern electronics, appliances, and surge protectors all rely on a ground path to operate safely and to protect against damage from voltage spikes. Using a three-to-two prong adapter ('cheater plug') defeats the purpose of the ground entirely.",
          "The code-compliant solution is either to run a ground wire from the outlet back to the panel (requires opening walls), replace ungrounded outlets with GFCI outlets (which provide shock protection without a ground, and can be labeled 'No Equipment Ground'), or rewire the circuit entirely. A master electrician can assess which approach makes sense for each circuit in your home.",
        ],
      },
      {
        heading: 'Electrical inspections for Calgary home buyers',
        body: [
          "If you are buying a home in Calgary built before 1990, a dedicated electrical inspection by a licensed master electrician is one of the most valuable due-diligence steps you can take — separate from the general home inspection. A general inspector does a visual check; an electrician opens the panel, tests circuits, identifies the wiring type, and produces a written report with specific remediation recommendations.",
          "We regularly perform pre-purchase electrical inspections across Calgary's older neighbourhoods: Renfrew, Bridgeland, Inglewood, Forest Lawn, Bowness, Killarney, Altadore, Mount Pleasant, and Capitol Hill. The inspection typically takes 60–90 minutes and costs $250–$500. The findings give you either confidence in the home or leverage in negotiation — both worth the investment.",
        ],
      },
      {
        heading: 'How to prioritize electrical upgrades in an older Calgary home',
        body: [
          "Not every issue in an older home needs to be fixed immediately. Here is how we advise homeowners to prioritize: First, address anything with a documented safety failure history — FPE and Zinsco panels come first, always. Second, address anything that affects insurance — knob-and-tube, aluminum branch wiring without remediation, missing GFCI protection. Third, address capacity issues — insufficient amperage for your actual load. Fourth, address convenience and efficiency — added circuits, outlet locations, lighting upgrades.",
          "A phased upgrade plan means you are not writing one large check, but you are also not leaving hazards unaddressed. We are happy to create a written priority list after a walkthrough so you know exactly what to fix now and what can wait.",
        ],
      },
    ],
  },
  {
    slug: 'smart-lighting-practical-guide',
    title: 'Smart Lighting & Pot Light Installation in Calgary: A Practical Guide',
    excerpt:
      'Beyond the marketing — what actually works, what dies after 18 months, and how to wire a smart home without painting yourself into a corner. Plus pot lights, outdoor lighting, and what needs a permit.',
    category: 'Lighting',
    readTime: '11 min read',
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
      {
        heading: 'Smart lighting installation in Calgary: what requires an electrician?',
        body: [
          "Swapping a smart bulb requires no electrician. Swapping a smart switch requires turning off the breaker and working inside the electrical box — technically legal for a homeowner in Alberta on their own home, but only if the work does not require a permit. Adding new circuits for under-cabinet lighting, landscape lighting, or dedicated smart home circuits requires a permit and a licensed electrician.",
          "The most common point where a DIY smart lighting project needs a professional: discovering there is no neutral wire at the switch box, or discovering the existing wiring is too short, damaged, or in aluminum. We handle both — and we do not charge a diagnostic fee if we are quoting the repair.",
        ],
      },
      {
        heading: 'Pot light and recessed lighting installation in Calgary',
        body: [
          "One of the most requested upgrades in Calgary homes is replacing outdated fluorescent fixtures and surface-mount lights with LED pot lights. A typical main floor conversion — 10 to 16 pot lights across living room, dining room, and kitchen — is a one-day job and transforms the feel of the space.",
          "Code requires AFCI protection on lighting circuits in living areas in newer homes, IC-rated fixtures where the pot light is in contact with insulation, and proper junction box support for heavier pendant fixtures. We handle the permits where required, coordinate with drywall if ceiling work is needed, and can add dimmer switches and 3-way controls as part of the same visit.",
        ],
      },
      {
        heading: 'Outdoor and landscape lighting wiring in Calgary',
        body: [
          "Calgary's short summer evenings make outdoor lighting more valuable than in many other cities — well-lit decks, patios, pathways, and garage areas extend usable outdoor time and add security. A properly wired outdoor lighting circuit uses weatherproof boxes and covers, UV-rated cable or conduit, GFCI protection, and fixtures rated for the temperature range we actually see here.",
          "Low-voltage landscape lighting runs on a transformer plugged into an outdoor outlet — no permit needed for the lights themselves, but a new outdoor outlet requires a permit and licensed installation. Line-voltage outdoor fixtures (porch lights, security floods, garage sconces) are standard electrical work and can usually be added to an existing exterior circuit without a panel upgrade.",
        ],
      },
    ],
  },
  {
    slug: 'licensed-electrician-calgary-what-to-expect',
    title: 'Hiring a Licensed Electrician in Calgary: What to Expect, What to Ask, and What It Costs',
    excerpt:
      'From booking to final inspection — a complete, no-fluff guide to hiring an electrician in Calgary. What licenses matter, which questions filter out the bad ones, and how to read a quote before you sign.',
    category: 'Hiring Tips',
    readTime: '10 min read',
    date: 'June 4, 2026',
    image: '/media/IMG_8759.jpg',
    sections: [
      {
        heading: 'Why licensing matters more than you think',
        body: [
          "In Alberta, all electrical work beyond simple device swaps must be performed by — or directly supervised by — a Journeyman Electrician. Any project that involves new circuits, panel work, service upgrades, or outdoor wiring must be permitted, and permits can only be pulled by a registered Electrical Contractor. A Master Electrician has passed a further exam and holds personal liability for code compliance.",
          "When you hire Power Design Electrical, a Master Electrician is on every job. That is not marketing — it means the person signing off on your permit has passed provincial code exams and carries professional accountability. Ask any electrician you call: 'Will a Master Electrician be on site?' If the answer is no, or vague, that is your first red flag.",
          "You can verify a contractor's registration on the ECAA (Electrical Contractors Association of Alberta) website. An unregistered contractor cannot legally pull permits in Calgary, which means their work is uninspected and uninsured — and that becomes your problem at resale or at the next insurance renewal.",
        ],
        image: '/media/IMG_8839.jpg',
        imageAlt: 'Power Design master electrician working on a residential electrical panel in Calgary',
      },
      {
        heading: 'The five questions every Calgary homeowner should ask before booking',
        body: [
          "1. Are you a registered Electrical Contractor in Alberta? If yes, they should be able to give you their contractor registration number on the spot. Look it up on the ECAA directory.",
          "2. Will you pull a permit for this work? For any new circuit, panel work, service upgrade, hot tub, EV charger, or garage sub-panel, the answer must be yes. A contractor who tries to talk you out of a permit is trying to avoid inspection — which means they are not confident the work will pass.",
          "3. Do you carry liability insurance? Ask for the certificate. A minimum of $2 million in general liability is standard. Workers compensation (WCB) coverage is separate and also required.",
          "4. Is your quote fixed-price or time-and-materials? Time-and-materials billing gives you no ceiling. A reputable contractor can provide a fixed price after a site assessment for most residential projects.",
          "5. Can you provide references from similar work in the last 12 months? Google reviews matter. A contractor with 50+ reviews and a 4.8+ average has a track record. Three reviews and a shiny website do not.",
        ],
      },
      {
        heading: 'Understanding a Calgary electrical quote — line by line',
        body: [
          "A proper written quote should include: a description of the scope of work (not just 'electrical work'), materials listed separately from labour, permit fees itemized, and a clear statement of what is not included. Watch for vague line items like 'miscellaneous materials' without a cap — these become budget overruns.",
          "Labour rates for a licensed electrician in Calgary currently run $95–$135 per hour depending on the firm and the complexity of the work. Beware of quotes significantly below this range: either the person is unlicensed, uninsured, or the quote will grow once they are inside your walls.",
          "Travel and dispatch fees vary. Some contractors charge a flat trip fee ($75–$150), others roll it into hourly billing. Ask explicitly. For small repair jobs, trip fees can represent 30–40% of the total invoice.",
          "The permit fee is charged by the Safety Codes Council based on the value of the work. Your contractor should be able to estimate it. If they are not pulling permits and suggest you should not worry about it, walk away.",
        ],
      },
      {
        heading: 'What the permit and inspection process actually looks like',
        body: [
          "For most residential projects in Calgary, your electrician files for an electrical permit through the Safety Codes Council before work begins. The permit fee is typically $100–$400 depending on the scope. After the rough-in work is complete (before walls are closed), an inspector from an accredited inspection agency does a rough-in inspection. A final inspection follows once the job is complete and power is energized.",
          "You, as the homeowner, should receive a copy of the permit and the inspection certificate. Keep these with your home documents. They prove the work was code-compliant at the time of installation — which matters for insurance, for resale, and for any future renovation that touches those circuits.",
          "In Calgary, electrical permits are filed through Alberta's Safety Codes Council. Your contractor handles the paperwork, but you are the permit holder on owner-occupied homes and have the right to check permit status online.",
        ],
      },
      {
        heading: 'Typical project costs in Calgary (2025–2026)',
        body: [
          "Electrical panel upgrade (100A to 200A): $3,500–$6,500 depending on whether the service mast needs replacing and whether the meter base upgrade is included. Coordinate with Enmax — they must pull and replace the meter.",
          "EV charger installation (Level 2, 40A hardwired): $850–$1,800 depending on distance from panel, whether exterior conduit is needed, and whether any load management is required.",
          "Hot tub wiring (240V, 50A GFCI, spa disconnect, bonding): $1,400–$2,400.",
          "Dedicated circuit addition (kitchen appliance, home office, basement): $350–$700 per circuit.",
          "Smoke and CO detector installation (interconnected, hardwired): $150–$350 for a typical single-family home.",
          "Electrical inspection (older home purchase): $250–$500 for a full walkthrough with written report — one of the best investments you can make before closing.",
          "These ranges reflect permitted, inspected work by a licensed contractor. Unlicensed quotes will often be lower. They are lower because someone is cutting out a permit, skipping insurance, or doing the work themselves without the required supervision. That saving evaporates the first time you need to make an insurance claim or sell the property.",
        ],
      },
      {
        heading: 'Red flags that should end a conversation',
        body: [
          "Cash-only pricing with no written quote. 'We can skip the permit on this one.' No business address — only a cell phone number. Unable to provide an ECAA registration number. Pressure to book the same day without a site visit. Quotes given over the phone for anything more complex than a fixture swap.",
          "Electrical work done wrong does not always announce itself immediately. Loose connections arc quietly inside walls for months before they cause a fire. Undersized wiring runs hot for years before it fails. The protection against all of this is licensed, permitted, inspected work — and a contractor who stands behind what they do.",
        ],
      },
      {
        heading: 'Why Calgary homeowners choose Power Design Electrical',
        body: [
          "We are a master-electrician-led Calgary electrical contractor serving Calgary, Airdrie, Cochrane, Chestermere, and Okotoks. Every job is permitted, every job is inspected, and the master electrician who quotes your project is the same person responsible for the quality of the work. No bait-and-switch, no subcontracting without disclosure.",
          "We have completed over 1,000 residential and commercial electrical projects in the Calgary area since 2010. Our Google and HomeStars reviews reflect real customers with real names — not anonymous testimonials. If you are comparing contractors, we welcome the comparison. Book a free on-site assessment and see for yourself.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
