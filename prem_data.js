/*
  prem_data.js - Single source of truth for Prem's SCIENCE Coach (Luikishi)
  Edit ONLY this file; index.html and the Dashboard both read from it.
  After each unit test: update lastUnit + currentUnit; push scores[]; prepend unitLog[]; adjust skills[]/radar*.
*/
var PREM_DATA = {
  // Meta
  updated:        '15 Jul 2026',
  coachStartDate: '2026-06-28',
  asmopssDate:    '2026-08-09',
  coach:          'Luikishi',
  subject:        'Science',
  goal:           'GOLD medal - ASMOPSS 2026 Science',
  goalShort:      'Gold',

  currentUnit: { n:19, topic:'Physics: Water Cycle', status:'Lessons + test ready &middot; 20 questions (4A/6B/10C) covering evaporation, condensation, precipitation (rain/snow/sleet/hail) and collection as a continuous loop, reservoirs (bridging U18&#39;s hydroelectric-dam concept), and tides (Moon&#39;s gravity pulling two bulges, roughly two highs/two lows a day) - directly targets the real Competition paper&#39;s Q30 (tides), ninth unit of the U11-U20 gap-closure plan. Carries a mandatory "Quick Fix from Unit 18" remediation screen (3 quick-check questions) addressing the potential-vs-kinetic energy vocabulary swap surfaced by U18&#39;s real 15/20 result, plus 2 fresh-scenario PE/KE recap questions embedded in the test itself (stone-on-a-cliff and an electric mixer - deliberately different framings from the Quick Fix screen&#39;s own water-wheel/roller-coaster examples).' },

  lastUnit: {
    n:18, score:15, outOf:20, pct:75, delta:-10, prevScore:85, passed:false,
    patternLabel: 'Unit 18 result - Physics: Energy Transformations (15/20, 75% - FAIL)',
    patternInsight: '<strong>15/20 questions (75%)</strong> - below the 16/20 pass bar, the SECOND fail of the whole program (after U13), eighth unit of the U11-U20 gap-closure plan. Section A (energy basics, warm-up) = <strong>3/4</strong> - one miss. Section B (applying energy concepts) = <strong>5/6</strong> - one miss. Section C (think like a scientist, applied reasoning) = <strong>7/10</strong> - three misses.',
    analysisLabel: 'Genuine potential-vs-kinetic energy vocabulary swap in dynamic/multi-point contexts &middot; hydroelectric chain (Competition Q3) fully intact &middot; observation-vs-inference refresher confirmed working',
    analysisInsight: 'All five misses (Q2, Q8, Q11, Q14, Q16) trace to ONE identifiable pattern: Prem correctly names potential and kinetic energy when a question is static/isolated (a single still object), but SWAPS the two labels whenever a question describes a dynamic, multi-point, or transformation scenario (something moving, or comparing two moments in a fall/swing/spin). This is structurally the same shape as U13&#39;s point-vs-broad-source inversion - a genuine one-directional conceptual swap, not scattered slips. Critically, all FIVE hydroelectric-specific questions (Q3, Q9, Q15, Q19, Q20 - the direct target of the real Competition paper&#39;s Q3, zero credit on the original attempt) were answered CORRECTLY: the reservoir&rarr;dam&rarr;penstock&rarr;turbine&rarr;generator ENGINEERING CHAIN is solidly understood, only the underlying PE/KE vocabulary labelling is swapped in dynamic framings. Competition Q3 is therefore NOT YET confirmed fully closed pending this vocabulary fix, but the chain-level understanding is a strong sign it will close quickly. Separately, the observation-vs-inference refresher folded into this unit&#39;s Quick Recall (per U16/U17&#39;s confirmed 2-instance pattern) worked on first use - Q13 (clouds-darkening observation-vs-inference scenario) was answered correctly. A proportionate "Quick Fix from Unit 18" remediation (a dedicated recap screen plus 3 quick-check questions covering the three specific failure-mode framings: bare definition, transformation-with-motion, and multi-point trajectory) is folded into Unit 19&#39;s Lesson 1, plus 2 fresh-scenario recap questions embedded directly in the U19 test.',
    qSummary: '<strong>15 / 20 (75%) - FAIL.</strong> Hydroelectric engineering chain (Competition Q3 target) fully intact - all 5 related questions correct. Five misses (Q2, Q8, Q11, Q14, Q16) share one pattern: potential and kinetic energy labels get swapped whenever the scenario is dynamic or multi-point, while static/isolated framings are answered correctly. Observation-vs-inference refresher (Q13) confirmed working on first use.',
    qBreakdown: [
      { q:'Q2', topic:'Potential vs kinetic energy - bare definition (Section A)', lvl:'a', pass:false, note:'Swapped the definitions of potential and kinetic energy in a standalone recall framing - the first sign of the pattern that repeats through the rest of the test.' },
      { q:'Q8', topic:'Potential vs kinetic energy - transformation-with-motion (Section B)', lvl:'b', pass:false, note:'A scenario describing an object gaining speed as it falls/swings - chose the label backwards for which form of energy increases and which decreases.' },
      { q:'Q11', topic:'Potential vs kinetic energy - multi-point trajectory (Section C)', lvl:'c', pass:false, note:'Asked to compare energy at two different points in a motion (e.g. top vs bottom of a swing/fall) - swapped which point has more potential vs more kinetic energy.' },
      { q:'Q14', topic:'Potential vs kinetic energy - applied reasoning (Section C)', lvl:'c', pass:false, note:'Same swap pattern in a fresh applied scenario - confirms this is a consistent directional error, not an isolated slip.' },
      { q:'Q16', topic:'Potential vs kinetic energy - applied reasoning (Section C)', lvl:'c', pass:false, note:'Fifth and final instance of the same swap - by this point the pattern is unambiguous across five different framings, all in Sections B/C (applied/dynamic contexts), never in a purely static one.' }
    ]
  },

  skills: [
    { name: 'Biology',                  c: 95, t: 85, ev:'U4 Microorganisms 15/15 PERFECT + U8 Photosynthesis 20/20 PERFECT + U11 Human Body Systems 20/20 PERFECT + U14 Cells 19/20 (95%, 17/18 Biology-content questions correct - the one miss was an embedded Physics recap question, not Cells content) + U17 Ecosystems 17/20 (85%) - closed G4 Q40, the U1 Q13 gas-exchange thread, and the Competition paper&#39;s Q24, Q7, Q14, and Q32 gaps (Q31 substantially closed); U17&#39;s three misses were a germination recall slip, a confirmed 2-instance observation-vs-inference pattern, and a novel fertilization-evidence reasoning gap - none a Biology-content weakness' },
    { name: 'Chemistry / Matter',       c: 92, t: 85, ev:'U5 States/Materials 13/15 (87%) + U9 Reactions 18/20 (90%) + U12 Materials Origins &amp; Classification 19/20 (95%) + U15 Density &amp; Buoyancy 18/20 (90%) - closed G4 Q2, Q17, and Competition Q29/Q19; U15&#39;s one content-side miss (Q9, oil/water direction) was a fast-read slip, not a density-concept gap' },
    { name: 'Physics',                  c: 88, t: 85, ev:'U3 Magnetism &amp; Heat 15/15 PERFECT + U6 Circuits 14/15 (93%) + U10 Forces 19/20 (95%) + U13 Light 14/20 (70%, FAIL) + U14&#39;s embedded recap (comparison-framing correct, standalone still backwards) + U15&#39;s standalone recap Q4 answered CORRECTLY + U16 Sound 17/20 (85%) + U18 Energy Transformations 15/20 (75%, SECOND FAIL) - closed G4 Q18/19/Q3 and Competition Q9 (speed of sound); U13&#39;s point-vs-broad-source inversion is FULLY closed; U16 surfaced a pitch/volume property-misattribution pattern; U18 revealed a genuine potential-vs-kinetic energy vocabulary swap in dynamic/multi-point contexts, though the hydroelectric engineering chain targeting Competition Q3 was fully intact (5/5) - remediation folded into U19' },
    { name: 'Earth &amp; Space',            c: 90, t: 85, ev:'U7 Astronomy 15/15 PERFECT - closed G4 Q32 (final baseline miss); jumped from 50% (untested) to above target in one unit' },
    { name: 'Scientific Investigation', c: 90, t: 85, ev:'Section C 80% (U1), 100% (U2-U8), 90% (U9), 100% (U10), 100% (Milestone 1, 8/8), 100% (U11, 10/10), 100% (U12, 10/10), 60% (U13, 6/10), 100% (U14, 10/10), 90% (U15, 9/10), 80% (U16, 8/10), 80% (U17, 8/10), 70% (U18, 7/10) - U18&#39;s three Section C misses were all the same potential-vs-kinetic energy vocabulary swap (applied/dynamic framings), not a reasoning-process failure; observation-vs-inference refresher (Q13) held correctly, confirming that fix is durable' },
    { name: 'Applied Reasoning',        c: 89, t: 85, ev:'U1 80%, U2-U8 100%, U9 90%, U10 100%, Milestone 1 100% (8/8), U11 100% (10/10), U12 100% (10/10), U13 60% (6/10), U14 100% (10/10), U15 90% (9/10), U16 80% (8/10), U17 80% (8/10), U18 70% (7/10) - U18&#39;s dip is a Physics vocabulary-labelling issue (PE/KE swap), not a decline in reasoning skill itself; a targeted "Quick Fix" remediation folded into U19' }
  ],
  radarCurrent:  [95, 92, 88, 90, 90, 89],
  radarTarget:   [85, 85, 85, 85, 85, 85],
  radarBaseline: [53, 55, 63, 50, 45, 60],

  outOf: 15,
  scores: [
    { unit:1, topic:'Biology: Plants', score:14, outOf:15, pct:93, passBar:12, date:'2026-07-02' },
    { unit:2, topic:'Chemistry/Matter: What Is Matter?', score:15, outOf:15, pct:100, passBar:12, date:'2026-07-02' },
    { unit:3, topic:'Physics: Magnetism &amp; Heat', score:15, outOf:15, pct:100, passBar:12, date:'2026-07-02' },
    { unit:4, topic:'Biology: Microorganisms', score:15, outOf:15, pct:100, passBar:12, date:'2026-07-03' },
    { unit:5, topic:'Chemistry: States of Matter &amp; Materials', score:13, outOf:15, pct:87, passBar:12, date:'2026-07-04' },
    { unit:6, topic:'Physics: Electricity &amp; Circuits', score:14, outOf:15, pct:93, passBar:12, date:'2026-07-04' },
    { unit:7, topic:'Earth &amp; Space: Astronomy', score:15, outOf:15, pct:100, passBar:12, date:'2026-07-05' },
    { unit:8, topic:'Biology: Photosynthesis', score:20, outOf:20, pct:100, passBar:16, date:'2026-07-05' },
    { unit:9, topic:'Chemistry: Reactions', score:18, outOf:20, pct:90, passBar:16, date:'2026-07-05' },
    { unit:10, topic:'Physics: Forces', score:19, outOf:20, pct:95, passBar:16, date:'2026-07-06' },
    { unit:'M1', topic:'Milestone Test 1 - All Units (U1-U10)', score:39, outOf:40, marks:98.75, marksOutOf:100, pct:99, passBar:32, date:'2026-07-07' },
    { unit:11, topic:'Biology: Human Body Systems', score:20, outOf:20, pct:100, passBar:16, date:'2026-07-09' },
    { unit:12, topic:'Chemistry: Materials - Origins &amp; Classification', score:19, outOf:20, pct:95, passBar:16, date:'2026-07-09' },
    { unit:13, topic:'Physics: Light', score:14, outOf:20, pct:70, passBar:16, date:'2026-07-10' },
    { unit:14, topic:'Biology: Cells', score:19, outOf:20, pct:95, passBar:16, date:'2026-07-11' },
    { unit:15, topic:'Chemistry: Density &amp; Buoyancy', score:18, outOf:20, pct:90, passBar:16, date:'2026-07-12' },
    { unit:16, topic:'Physics: Sound', score:17, outOf:20, pct:85, passBar:16, date:'2026-07-13' },
    { unit:17, topic:'Biology: Ecosystems', score:17, outOf:20, pct:85, passBar:16, date:'2026-07-14' },
    { unit:18, topic:'Physics: Energy Transformations', score:15, outOf:20, pct:75, passBar:16, date:'2026-07-15' }
  ],
  baseline: { label:'2025 G4 paper', score:28, outOf:40, marks:72.5, marksOutOf:100, pct:72.5,
              g3:{ label:'2025 G3 (official)', marks:55.5, marksOutOf:100, pct:55.5, percentile:88.66 } },

  unitLog: [
    {
      n: 19, badge: 'linear-gradient(135deg,#0288D1,#4FC3F7)',
      title: 'Physics: Water Cycle',
      tags: [
        { t:'Ready &#128221;', c:'tpurple' },
        { t:'20 Questions (4A/6B/10C)', c:'tgreen' },
        { t:'Targets Competition Q30 (tides)', c:'tblue' },
        { t:'9th unit &middot; carries U18 PE/KE Quick Fix', c:'torange' }
      ],
      note: 'Ninth unit of the U11-U20 block. Lesson 1 covers the four-stage water cycle (evaporation, condensation, precipitation, collection) as a continuous loop, bridging from Unit 2/5&#39;s evaporation/condensation content, and opens with a mandatory "Quick Fix from Unit 18" screen - 3 quick-check questions covering the exact three failure-mode framings (bare definition, transformation-with-motion, multi-point trajectory) that revealed a potential-vs-kinetic energy vocabulary swap in U18&#39;s real result. Lesson 2 covers precipitation types (rain/snow/sleet/hail by temperature), reservoirs (bridging U18&#39;s hydroelectric-dam concept), and tides via a hand-built labelled diagram (Earth, Moon, two gravity-pulled bulges) explaining why there are roughly two high tides and two low tides a day - directly targeting the real Competition paper&#39;s Q30 (tides). Test: 20Q (4A/6B/10C), PASS_BAR 16/20, includes 2 embedded PE/KE recap questions in fresh scenarios (stone-on-a-cliff, electric mixer) distinct from the lesson&#39;s own Quick Fix examples, built and verified under the ANSWER-BALANCE RULE (5/5/5/5 position spread, all strict-longest-correct margins &le;2 words) and a zero-overlap Jaccard check against both lessons. Part of the U11-U20 GAP-CLOSURE PLAN - see Executive Summary.',
      status: 'pending'
    },
    {
      n: 18, badge: 'linear-gradient(135deg,#F9A825,#FFD54F)',
      title: 'Physics: Energy Transformations',
      tags: [
        { t:'&#9888; 15/20 (75%) FAIL', s:'background:#ffe0b2;color:#c05621;font-weight:700' },
        { t:'Sections A+B 8/10', c:'tgreen' },
        { t:'Section C 7/10', c:'tblue' },
        { t:'PE/KE swap - remediation in U19', c:'torange' }
      ],
      note: 'Scored 15/20 (75%) - below the 16/20 pass bar, the SECOND fail of the whole program (after U13), eighth unit of the U11-U20 gap-closure plan. Section A (energy basics) 3/4. Section B (applying energy concepts) 5/6. Section C (think like a scientist) 7/10. All five misses (Q2, Q8, Q11, Q14, Q16) share one identical pattern: potential and kinetic energy are correctly labelled in static/isolated framings, but SWAPPED whenever the scenario is dynamic or multi-point (motion, transformation, comparing two moments in a fall/swing) - the same structural shape as U13&#39;s point-vs-broad-source inversion. Critically, all FIVE hydroelectric-specific questions (Q3, Q9, Q15, Q19, Q20 - the direct target of the real Competition paper&#39;s Q3, zero credit on the original attempt) were answered CORRECTLY: the reservoir&rarr;dam&rarr;penstock&rarr;turbine&rarr;generator engineering chain is solidly understood, only the underlying PE/KE vocabulary labelling is swapped. Competition Q3 is NOT YET confirmed fully closed pending this vocabulary fix. The observation-vs-inference refresher folded into this unit&#39;s Quick Recall (per U16/U17&#39;s confirmed pattern) worked on first use - Q13 was answered correctly. A "Quick Fix from Unit 18" remediation (recap screen + 3 quick-check questions) plus 2 fresh-scenario recap questions embedded in the test are folded into Unit 19. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 17, badge: 'linear-gradient(135deg,#2E7D32,#66BB6A)',
      title: 'Biology: Ecosystems',
      tags: [
        { t:'&#9989; 17/20 (85%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 9/10', c:'tgreen' },
        { t:'Section C 8/10', c:'tblue' },
        { t:'Q7, Q14, Q32 CONFIRMED closed', c:'torange' }
      ],
      note: 'Scored 17/20 (85%) - above the 16/20 pass bar, seventh unit of the U11-U20 gap-closure plan. Section A (ecosystems basics) 3/4 - missed Q3. Section B (applying ecosystems concepts) 6/6 - perfect. Section C (think like a scientist) 8/10 - missed Q13 and Q16. Every question targeting the real Competition paper&#39;s Q7 (air composition/nitrogen) and Q14 (pollution vs the greenhouse effect) was answered correctly, and both flower-part-labelling questions (Q32) were correct - all three gaps CONFIRMED closed. Germination (Q31) is substantially closed: both applied germination scenarios were answered correctly, and the one miss (Q3) was a bare recall slip choosing the exact "soil, light, warmth" combination the lesson flagged as the deliberate "NOT needed" surprise. Q13 (observation vs inference) is now a SECOND CONSECUTIVE unit-test miss after U16 - upgraded from "watch for recurrence" to a confirmed 2-instance recurring pattern; a refresher screen is now folded into U18&#39;s Quick Recall. Q16 (a bird pollinating a flower whose ovary later swells into a seed pod) revealed a genuinely NEW reasoning gap: Prem correctly applies the taught caution that pollination doesn&#39;t guarantee fertilization, but doesn&#39;t yet reliably apply the reverse - recognizing that visible seed-pod development IS strong positive evidence fertilization succeeded. A fair, first-exposure gap, not a repeat of taught content. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 16, badge: 'linear-gradient(135deg,#2E7D32,#66BB6A)',
      title: 'Physics: Sound',
      tags: [
        { t:'&#9989; 17/20 (85%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 9/10', c:'tgreen' },
        { t:'Section C 8/10', c:'tblue' },
        { t:'Competition Q9 CONFIRMED closed', c:'torange' }
      ],
      note: 'Scored 17/20 (85%) - above the 16/20 pass bar, seventh unit of the U11-U20 gap-closure plan. Section A (sound basics) 4/4 - perfect. Section B (applying sound concepts) 5/6 - missed Q8. Section C (think like a scientist) 8/10 - missed Q13 and Q16. Every question targeting the real Competition paper&#39;s Q9 (speed of sound in water vs air, and the solids/liquids/gases ranking) was answered correctly, confirming that gap is now FULLY closed. Q8 and Q16 share a NEW error shape not seen in any prior unit: Prem correctly defines pitch and volume as separate properties in isolation, but unreliably maps a new scenario&#39;s underlying cause to the right one of the two - a property-misattribution pattern, distinct from the established fast-read direction-inversion pattern (U6/U10/U15). New standing coaching fix: name the physical cause first, then decide which property it maps to. Q13 (observation vs inference) was confirmed via the lesson archive to be an established cross-unit skill already taught in U15&#39;s Density lesson - an isolated recall miss, not a fresh Sound-specific gap. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 15, badge: 'linear-gradient(135deg,#2E7D32,#66BB6A)',
      title: 'Chemistry: Density &amp; Buoyancy',
      tags: [
        { t:'&#9989; 18/20 (90%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 9/10', c:'tgreen' },
        { t:'Section C 9/10', c:'tblue' },
        { t:'Competition Q10 FULLY closed', c:'torange' }
      ],
      note: 'Scored 18/20 (90%) - comfortably above the 16/20 pass bar, fifth unit of the U11-U20 gap-closure plan. Section A (density basics) 4/4 - perfect, including the standalone Physics recap question. Section B (applying density) 5/6 - missed Q9 (oil poured on water - wrong float/sink direction), the THIRD confirmed instance of a recurring fast-read MORE/LESS inversion pattern (after U6&#39;s Q7 and U10&#39;s Q7). Section C (think like a scientist) 9/10 - missed Q16 (helium balloon gas-density generalisation), an undertrained-content gap since that generalisation was only ever taught via a short teaching note, never given a practice question. Q4 (a candle flame as a standalone point source) was answered CORRECTLY, fully closing the three-unit Competition Q10 remediation arc (U13 fail &rarr; U14 partial fix &rarr; U15 full fix). Competition Q29 and Q19 question styles were also answered correctly, confirming both closed. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 14, badge: 'linear-gradient(135deg,#2E7D32,#66BB6A)',
      title: 'Biology: Cells',
      tags: [
        { t:'&#9989; 19/20 (95%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 9/10', c:'tgreen' },
        { t:'Section C 10/10', c:'tblue' },
        { t:'Q10 partially closed - comparison vs standalone split', c:'torange' }
      ],
      note: 'Scored 19/20 (95%) - comfortably above the 16/20 pass bar, a strong recovery from Unit 13&#39;s 70% fail, fourth unit of the U11-U20 gap-closure plan. Section A (cells basics) 3/4 - missed Q4. Section B (applying cells) 6/6 - perfect. Section C (think like a scientist) 10/10 - perfect. The only miss, Q4 (a firefly as a single point source of light, standalone/non-comparison framing), was answered backwards - the same direction as U13&#39;s original inversion. But Q10 (a comparison framing: keychain flashlight vs wide lantern) was answered CORRECTLY, revealing a comparison-vs-standalone recall split: comparative reasoning about which of two sources gives a sharper/softer shadow is now reliable, but standalone recall of a single source&#39;s behaviour is not. Competition paper&#39;s Q10 gap is now classified as PARTIALLY confirmed closed - one more standalone recap question folded into Unit 15&#39;s test to verify further. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 13, badge: 'linear-gradient(135deg,#F9A825,#FFD54F)',
      title: 'Physics: Light',
      tags: [
        { t:'&#9888; 14/20 (70%) FAIL', s:'background:#ffe0b2;color:#c05621;font-weight:700' },
        { t:'Sections A+B 8/10', c:'tgreen' },
        { t:'Section C 6/10', c:'tblue' },
        { t:'Point vs broad source inverted - remediation in U14', c:'torange' }
      ],
      note: 'Scored 14/20 (70%) - below the 16/20 pass bar, the first fail of the whole program, third unit of the U11-U20 gap-closure plan. Section A (light basics) 4/4. Section B (applying light concepts) 4/6. Section C (think like a scientist) 6/10. All six misses (Q7, Q10, Q13, Q15, Q18, Q20) share one identical backwards rule: Prem believes POINT sources give soft/fuzzy shadows and BROAD sources give sharp shadows - the opposite of the taught rule - while four direct-restatement questions (Q8, Q11, Q12, Q17) were answered correctly, confirming this is a genuine one-directional misconception, not scattered slips. This means the Competition paper&#39;s Q10 gap (umbra/penumbra) is NOT yet confirmed closed. Rather than a full remediation lesson, a proportionate fix was folded into Unit 14: a dedicated "Quick Fix" recap screen plus 2 embedded verification questions in the U14 test. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 12, badge: 'linear-gradient(135deg,#37474F,#78909C)',
      title: 'Chemistry: Materials - Origins &amp; Classification',
      tags: [
        { t:'&#9989; 19/20 (95%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 9/10', c:'tgreen' },
        { t:'Section C 10/10', c:'tblue' },
        { t:'Confirms Competition Q2, Q17 closed', c:'torange' }
      ],
      note: 'Scored 19/20 (95%) - comfortably above the 16/20 pass bar, second unit of the U11-U20 gap-closure plan. Section A (materials basics) 4/4. Section B (applying classification) 5/6 - missed Q8, a foam-floats-in-both-liquids question; Prem answered with the beeswax lesson example&#39;s "floats in water, sinks in oil" pattern instead of this question&#39;s own "lighter than BOTH liquids" premise - an anchoring slip on a nearby worked example, not a content gap. Section C (think like a scientist) 10/10 - a THIRD straight clean run under the ANSWER-BALANCE RULE, and every question targeting Competition Q2 (rubber/silk origin traps) and Q17 (hard/soft/floats-in-oil flowchart) was answered correctly, confirming both gaps closed. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 11, badge: 'linear-gradient(135deg,#C2185B,#F06292)',
      title: 'Biology: Human Body Systems',
      tags: [
        { t:'&#9989; 20/20 PERFECT', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 10/10', c:'tgreen' },
        { t:'Section C 10/10', c:'tblue' },
        { t:'Confirms Competition Q24 closed', c:'torange' }
      ],
      note: 'Scored 20/20 (100%) - a perfect score, comfortably above the 16/20 pass bar, and the first unit of the U11-U20 gap-closure plan. Lesson 1 covered the digestive, respiratory and circulatory systems as a team; Lesson 2 went deep on breathing and gas exchange, directly building toward the real ASMOPSS 2024 competition paper&#39;s Q24 miss (gas composition in a poorly-ventilated space). Section C alone carried FOUR questions rehearsing that exact reasoning across fresh scenarios (a stuck lift, a sealed blanket, a stuffy classroom, and a claim-critique) - all four answered correctly, directly confirming the Q24 gap is closed, not just taught. Second full test scored clean under the ANSWER-BALANCE RULE (after Milestone Test 1&#39;s 8/8). Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 'C1', badge: 'linear-gradient(135deg,#1a237e,#b71c1c)',
      title: 'ASMOPSS 2024 - Science G4 (Set B) - Real Competition Paper',
      tags: [
        { t:'&#9888; 20/40 - 53% - below pass', s:'background:#ffe0b2;color:#c05621;font-weight:700' },
        { t:'13/20 misses on untaught topics', c:'tblue' },
        { t:'Only 1 clear miss on taught content', c:'tgreen' },
        { t:'Curriculum-breadth signal, not a regression', c:'torange' }
      ],
      note: 'A genuine, complete ASMOPSS 2024 Grade 4 Science competition paper (Set B, sat 4 Aug 2024 in Thailand), converted into an interactive, self-scoring test - real diagrams from the original paper, official ASMOPSS weighting (100 marks total, pass bar 80/100). Answers verified against the official ASMOPSS answer key. Sat 7 Jul 2026: <strong>20/40 questions, 52.5/100 marks (53%) - below pass.</strong> 13 of 20 misses were on topics never taught yet (sound, energy transformation, environmental science, density, germination, tides, meteor showers, detailed flower anatomy). Only 1 clear miss (a photosynthesis leaf-swap slip) was on solidly-taught content. This is a curriculum-breadth signal, not a mastery regression - see Executive Summary &sect;15 for the full miss-by-miss analysis. Directly informed the U11-U20 GAP-CLOSURE PLAN (&sect;16), which folds every one of these gap topics into the next 10 units.',
      status: 'done'
    },
    {
      n: 'M1', badge: 'linear-gradient(135deg,#DAA520,#8a6a00)',
      title: 'Milestone Test 1 - All Units (U1-U10)',
      tags: [
        { t:'&#9989; 39/40 PASS - 99% personal best', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Section A 15/16, Section B 16/16', c:'tgreen' },
        { t:'Section C 8/8 PERFECT', c:'tblue' },
        { t:'Only miss Q5', c:'torange' }
      ],
      note: 'Scored 39/40 (98.75/100 marks, 99%) - a commanding PASS above the 80/100 bar and Prem&#39;s best result of the whole program, up +26.25 marks from the 72.5/100 baseline. Section A (basic recall) 15/16 - one miss, Q5 (bacteria/fungi classification - chose Plants instead of Microorganisms), an easy-question recall slip, not a real gap (U4 Microorganisms was a separate 15/15 perfect). Section B (applying) 16/16 - perfect. Section C (think like a scientist) 8/8 - perfect, and built + verified under the new ANSWER-BALANCE RULE, so this result fully resolves the answer-length/position hint caveat flagged after U8-U10. Every original baseline gap cluster is now closed under exam-style weighted-mark conditions. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 10, badge: 'linear-gradient(135deg,#1565C0,#64B5F6)',
      title: 'Physics: Forces',
      tags: [
        { t:'&#9989; 19/20 PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Section A 4/4, Section B 5/6', c:'tgreen' },
        { t:'Section C 10/10', c:'tblue' },
        { t:'Misses Q7 (friction inversion)', c:'torange' }
      ],
      note: 'Scored 19/20 (95%) - comfortably above the 16/20 pass bar, Prem&#39;s best score since U8. Section A (force basics, contact vs non-contact) 4/4 - perfect. Section B (balanced/unbalanced forces, gravity, friction) 5/6 - missed Q7, an ice-rink friction inversion (chose the smoother/lower-friction surface when asked which has MORE friction) - the same error shape as U6&#39;s Q7 conductor/insulator inversion. Section C (think like a scientist) 10/10 - perfect. This was the FIRST unit built under the new lesson practice lock + score summary rule. <strong>Important:</strong> Prem flagged that Section C&#39;s correct answer was consistently the longest, most detailed option - a real, quantitatively-confirmed hint pattern found across U8-U10 (fixed going forward via the new ANSWER-BALANCE RULE, first applied to Milestone Test 1). U10 was the LAST unit test before Milestone Test 1 - all 10 units are now complete. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 9, badge: 'linear-gradient(135deg,#4E342E,#A1887F)',
      title: 'Chemistry: Reactions',
      tags: [
        { t:'&#9989; 18/20 PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 9/10', c:'tgreen' },
        { t:'Section C 9/10', c:'tblue' },
        { t:'Misses Q1, Q11', c:'torange' }
      ],
      note: 'Scored 18/20 (90%) - comfortably above the 16/20 pass bar. Section A (reactions basics) 3/4 - missed Q1 (an opening-question definition slip). Section B (signs of a reaction) 6/6 - perfect. Section C (think like a scientist) 9/10 - ends a seven-straight-100% streak with one miss, Q11, a colour-change-as-proof trap in a paint-mixing framing; the equivalent reasoning in a dissolving framing (Q17) was answered correctly, so this reads as framing sensitivity rather than a reasoning gap. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 8, badge: 'linear-gradient(135deg,#00695C,#4DB6AC)',
      title: 'Biology: Photosynthesis',
      tags: [
        { t:'&#9989; 20/20 PERFECT', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 10/10', c:'tgreen' },
        { t:'Section C 10/10', c:'tblue' },
        { t:'No misses', c:'torange' }
      ],
      note: 'Scored 20/20 (100%) - a perfect score, comfortably above the 16/20 pass bar, and the first test in the new 20-question format. Sections A+B (photosynthesis recipe, chlorophyll, gas exchange, factors affecting rate) 10/10. Section C (think like a scientist) 10/10 - a seventh straight 100%, held at double the previous applied-question volume with no fatigue-driven errors. Directly closed the Unit 1 Q13 / baseline Q34 leaf-bubbles-vs-photosynthesis thread - the opening Section C question re-tested that exact scenario and was answered correctly. This result confirmed the 20Q/4A-6B-10C format as permanent going forward. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 7, badge: 'linear-gradient(135deg,#4527A0,#9575CD)',
      title: 'Earth &amp; Space: Astronomy',
      tags: [
        { t:'&#9989; 15/15 PERFECT', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 10/10', c:'tgreen' },
        { t:'Section C 5/5', c:'tblue' },
        { t:'No misses', c:'torange' }
      ],
      note: 'Scored 15/15 (100%) - a perfect score, comfortably above the 12/15 pass bar. Sections A+B (rotation/revolution, Moon phases, solar system) 10/10, fully resolving baseline Q32 (different constellations on different nights) - the very last individual question remaining anywhere on the original baseline diagnostic. Section C (think like a scientist) 5/5 - a sixth straight 100%. Earth &amp; Space jumped from 50% (untested since baseline) straight to a perfect result. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 6, badge: 'linear-gradient(135deg,#00838F,#4DD0E1)',
      title: 'Physics: Electricity &amp; Circuits',
      tags: [
        { t:'&#9989; 14/15 PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 9/10', c:'tgreen' },
        { t:'Section C 5/5', c:'tblue' },
        { t:'Misses Q7', c:'torange' }
      ],
      note: 'Scored 14/15 (93%) - comfortably above the 12/15 pass bar, bounced back from Unit 5\'s dip. Missed Q7 (picked two metals - both conductors - when asked for a pair of good electrical insulators; correct answer was rubber and dry wood). Section C (think like a scientist) 5/5 - a fifth straight 100%. Baseline Q3 (initial energy form in a circuit) fully resolved - only Q32 (astronomy) remains of the entire original diagnostic. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 5, badge: 'linear-gradient(135deg,#0288D1,#4FC3F7)',
      title: 'Chemistry: States of Matter &amp; Materials',
      tags: [
        { t:'&#9989; 13/15 PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 8/10', c:'tgreen' },
        { t:'Section C 5/5', c:'tblue' },
        { t:'Misses Q1, Q10', c:'torange' }
      ],
      note: 'Scored 13/15 (87%) - comfortably above the 12/15 pass bar, first non-perfect since Unit 1. Missed Q1 (named the heating pair instead of the cooling pair of changes of state) and Q10 (a two-property classification sort - opposite corner). Section C (think like a scientist) 5/5 - a fourth straight 100%. Baseline classification gap (Q16) improving but not fully closed - a recap is built into Unit 6\'s Quick Recall screen. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 4, badge: 'linear-gradient(135deg,#6D4C41,#A1887F)',
      title: 'Biology: Microorganisms',
      tags: [
        { t:'&#9989; 15/15 PERFECT', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 10/10', c:'tgreen' },
        { t:'Section C 5/5', c:'tblue' },
        { t:'No misses', c:'torange' }
      ],
      note: 'Scored 15/15 (100%) - a perfect score, comfortably above the 12/15 pass bar. Sections A+B (what microorganisms are, decomposers, mould growth needs) 10/10, fully closing the 2025 microorganisms gap (Q40). Section C (think like a scientist) 5/5 - a third straight 100%, the last unaddressed baseline miss now resolved. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 3, badge: 'linear-gradient(135deg,#5C6BC0,#7986CB)',
      title: 'Physics: Magnetism &amp; Heat',
      tags: [
        { t:'&#9989; 15/15 PERFECT', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 10/10', c:'tgreen' },
        { t:'Section C 5/5', c:'tblue' },
        { t:'No misses', c:'torange' }
      ],
      note: 'Scored 15/15 (100%) - a perfect score, comfortably above the 12/15 pass bar. Sections A+B (magnets/poles, conductors/insulators) 10/10, fully closing the 2025 Physics gap (Q18). Section C (think like a scientist) 5/5 - a second straight 100%, resolving 2025 Q19 (heat-conduction fair test) on brand-new content. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 2, badge: 'linear-gradient(135deg,#EF6C00,#FFB74D)',
      title: 'Chemistry/Matter: What Is Matter? Mass, Volume &amp; Dissolving',
      tags: [
        { t:'&#9989; 15/15 PERFECT', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 10/10', c:'tgreen' },
        { t:'Section C 5/5', c:'tblue' },
        { t:'No misses', c:'torange' }
      ],
      note: 'Scored 15/15 (100%) - a perfect score, comfortably above the 12/15 pass bar. Sections A+B (what is matter, gases/mass/volume) 10/10, fully closing the 2025 Matter &amp; Mass gap (Q7, 11, 33). Section C (dissolving/think like a scientist) 5/5 - up from U1\'s 4/5, a second clean pass on fair-test reasoning. First unit tested in the new single-page HTML test format - results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 1, badge: 'linear-gradient(135deg,#2E7D32,#66BB6A)',
      title: 'Biology: Plants - Parts, Water Transport &amp; Investigation',
      tags: [
        { t:'&#9989; 14/15 PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 10/10', c:'tgreen' },
        { t:'Section C 4/5', c:'tblue' },
        { t:'Only miss Q13', c:'torange' }
      ],
      note: 'Scored 14/15 (93%) - comfortably above the 12/15 pass bar. Plant-parts content (Sections A+B) 10/10, fully closing the 2025 Plants gap (Q20, 24, 34, 40). Applied/experiment reasoning (Section C) 4/5 - nailed the control-group (Q12) and fair-test (Q14) questions. Only miss: Q13, the leaf-bubbles/stomata idea, echoing 2025 Q34 - flagged for a quick reinforcement. Taken in the last DOCX-format unit test; HTML format starts at U2.',
      status: 'done'
    },
    {
      n: 'G4', badge: 'linear-gradient(135deg,#4527A0,#7C3AED)',
      title: 'Baseline - ASMOPSS 2025 Grade 4 Science paper',
      tags: [
        { t:'72.5 / 100 marks', s:'background:#f3e9ff;color:#4527A0;font-weight:700' },
        { t:'28 / 40 questions', c:'tpurple' },
        { t:'Loses the high-mark applied Qs', c:'torange' }
      ],
      note: '28/40 questions = <strong>72.5/100 marks</strong> (weighted 1.25/2.5/5). Lost 27.5 marks, 22.5 on the 2.5/5-mark band, almost all experiment design/interpretation. Clusters: Plants (Q20,24,34,40) and Matter &amp; Mass (Q7,11,33); scattered: circuits Q3, classification Q16, magnets Q18, heat Q19, astronomy Q32. He changed/crossed out many answers - coach him to commit to a structured first answer.',
      status: 'done'
    },
    {
      n: 'G3', badge: 'linear-gradient(135deg,#00695C,#00897B)',
      title: 'Prior - ASMOPSS 2025 Grade 3 Science (official result)',
      tags: [
        { t:'55.5 / 100 - Honorable Mention', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'88.66th percentile', c:'tgreen' },
        { t:'Applied 50% vs field 32%', c:'tgreen' }
      ],
      note: 'Official Grade 3 result (Aug 2025). 55.5/100, Honorable Mention, national rank 306/2,833 (field mean 38.8, about +1.3 SD). By difficulty: Basic 64%, Intermediate 54%, <strong>Applied 50% vs field 32%</strong>. By strand: <strong>Physical 66% strongest; Biology 50% weakest</strong> (largest strand); Earth/Space 50%. The Grade-4 jump to 72.5/100 shows real progress on harder material.',
      status: 'done'
    }
  ],

  priorityGaps: [
    {
      label: 'Scientific Investigation (fair tests, controls, conclusions) - established strength, keep sharp',
      pill: 'p1', pillText: 'Maintain',
      score: 'Nine results: U1 Section C 4/5 (80%), U2-U8 Section C 5/5 or 10/10 (100% each), U9 Section C 9/10 (90%) - nailed controls, mass-conservation, fair-test design and multi-step reasoning almost every time across nine different content areas. U9\'s one miss was a colour-change-as-proof framing trap, not a reasoning failure - the same logic applied correctly in a different framing (Q17). Goal remains holding this under real exam pressure on 9 Aug.',
      fillClass: 'g2', fillPct: 90
    },
    {
      label: 'Classification (sorting by properties) - improving, one slip remains',
      pill: 'p2', pillText: 'Watch',
      score: 'G4: Q16 (classification chart of objects A-D). U5\'s dedicated two-property classification lesson resolved one of two test questions on this skill (Q14 correct, Q10 missed - opposite corner on both axes). Reads as a slip, not a blind spot, since the other sort was correct.',
      fillClass: 'g2', fillPct: 75
    },
    {
      label: 'Earth &amp; Space: astronomy - CLOSED &#9989;',
      pill: 'p3', pillText: 'Done',
      score: 'U7 scored 15/15 (100%), perfect. Baseline Q32 (different constellations on different nights) fully resolved - this was the very last individual question remaining anywhere on the original baseline diagnostic. Every baseline gap identified at diagnostic is now closed.',
      fillClass: 'g3', fillPct: 95
    },
    {
      label: 'Physics: circuits &amp; energy transfer - CLOSED &#9989;',
      pill: 'p3', pillText: 'Done',
      score: 'U6 scored 14/15 (93%). Baseline Q3 (initial energy form in a circuit) fully resolved - complete circuits, switches, and the chemical&rarr;electrical&rarr;light/heat energy chain all mastered. One isolated miss on conductor/insulator identification (Q7), not on the circuits/energy content this gap targeted.',
      fillClass: 'g3', fillPct: 95
    },
    {
      label: 'Biology: microorganisms &amp; decomposition - CLOSED &#9989;',
      pill: 'p3', pillText: 'Done',
      score: 'U4 scored 15/15 (100%), perfect. Baseline microorganisms miss (Q40, bread-mould) fully resolved - what microorganisms are, decomposers, and what mould needs to grow all mastered. Every clustered baseline gap is now closed.',
      fillClass: 'g3', fillPct: 95
    },
    {
      label: 'Physics: magnetism &amp; heat conduction - CLOSED &#9989;',
      pill: 'p3', pillText: 'Done',
      score: 'U3 scored 15/15 (100%), perfect. Baseline Physics misses (Q18, Q19) fully resolved - pole rules, magnet-row reasoning, conductors vs insulators, and fair-test design for heat conduction all mastered.',
      fillClass: 'g3', fillPct: 95
    },
    {
      label: 'Matter &amp; Mass - CLOSED &#9989;',
      pill: 'p3', pillText: 'Done',
      score: 'U2 scored 15/15 (100%), perfect. Baseline Matter &amp; Mass misses (Q7, 11, 33) fully resolved - gases have mass, mass vs volume, dissolving/conservation of mass all mastered.',
      fillClass: 'g3', fillPct: 95
    },
    {
      label: 'Biology: Plants - CLOSED &#9989;',
      pill: 'p3', pillText: 'Done',
      score: 'U1 scored 14/15 (93%), Sections A+B 10/10. Baseline Plants misses (Q20, 24, 34) resolved. The lingering leaf/stomata gas-exchange thread (Q13/Q34) is now also closed - U8 (Photosynthesis, 20/20 perfect) directly re-tested that exact scenario and Prem answered it correctly.',
      fillClass: 'g3', fillPct: 95
    }
  ]
};
