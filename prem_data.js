/*
  prem_data.js - Single source of truth for Prem's SCIENCE Coach (Luikishi)
  Edit ONLY this file; index.html and the Dashboard both read from it.
  After each unit test: update lastUnit + currentUnit; push scores[]; prepend unitLog[]; adjust skills[]/radar*.
*/
var PREM_DATA = {
  // Meta
  updated:        '15 Aug 2026',
  coachStartDate: '2026-06-28',
  asmopssDate:    '2026-08-09',
  coach:          'Luikishi',
  subject:        'Science',
  goal:           'GOLD medal - ASMOPSS 2027 Science (2026 result: 58.75/97.5, 60.3%)',
  goalShort:      'Gold',

  currentUnit: { n:40, topic:'Chemistry: Mixtures, Solutions &amp; Separating Materials', status:'&#9989; Ready to take &mdash; built 15 Aug 2026. Fourth and final unit of the post-ASMOPSS rotation slice (&sect;50) before Milestone Test 4 &mdash; regular new-content unit (mixtures vs solutions, solute/solvent/soluble/insoluble, sieving/filtering/evaporation), a standard recurring ASMOPSS G4 topic never given its own dedicated unit before. Builds on Unit 2&#39;s dissolving/mass-conservation fact and Unit 19&#39;s water-cycle evaporation fact. Embeds Trap-Recognition Drill #4 and one light spaced-retention re-confirmation of Unit 2&#39;s dissolving-mass fact. Tier-tagged.' },

  lastUnit: {
    n:39, score:19, outOf:20, pct:95, delta:0, prevScore:19, passed:true,
    patternLabel: 'Unit 39 result - Gravity, Forces &amp; Working-Memory Stress Test (19/20, 95% PASS)',
    patternInsight: '<strong>19/20 (95%)</strong> - PASS, matching Unit 38 as the strongest result of the post-ASMOPSS rotation so far. Section A = <strong>4/4 (100%)</strong>. Section B = <strong>6/6 (100%)</strong>. Section C = <strong>9/10 (90%)</strong>. Tier breakdown: Basic 4/4, Intermediate 6/6, Applied 9/10.',
    analysisLabel: 'Both real-exam regressions (Q12 gravity, Q33 magnet-flip) CONFIRMED CLOSED &middot; Trap-Recognition Drill #2 4/4 &middot; one new-task-format miss',
    analysisInsight: 'One miss: Q17. <strong>Real-exam regression findings:</strong> this unit&#39;s whole purpose was to directly re-test two real ASMOPSS 2026 findings under harder conditions &mdash; Q1/Q14 (the gravity equal-fall-rate rule, re-scened as Apollo 15 and a fresh orchard claim) both correct, confirming the real exam&#39;s Q12 finding was exam-day rushing, not a content gap; Q13 (a 2-magnet chain with a physical flip added mid-derivation) also correct, confirming the real exam&#39;s Q33 finding is now closed. <strong>Trap-recognition finding:</strong> Trap-Recognition Drill #2 went a clean 4/4 (Q4, Q9, Q15, Q19), the third unit running strongly on this skill. <strong>Content finding:</strong> the one miss, Q17, asked Prem to rank THREE objects (tennis ball, shuttlecock, crumpled paper) by fall speed &mdash; the first time this program asked for a 3-way ranking rather than a 2-object comparison; he chose the exact reversed order. Every 2-object air-resistance question in the same test (Q1, Q5, Q9, Q14, Q18) was correct, so this reads as a brand-new task format cracking on first exposure, not a regression &mdash; and adds a second, still-tentative data point to the cross-topic "wrong-direction reading" pattern first seen in Mock Test 1.',
    qSummary: '<strong>19 / 20 (95%) - PASS.</strong> Section A 4/4, Section B 6/6, Section C 9/10. Headline: both deliberate real-exam re-tests (Q12 gravity, Q33 magnet-flip) held clean, Trap-Recognition Drill #2 went 4/4, and the one miss (Q17) was a brand-new 3-object ranking format, not a regression. Confirmed next assessment: Unit Test (U40 &mdash; Chemistry: Mixtures, Solutions &amp; Separating Materials).',
    qBreakdown: []
  },

  skills: [
    { name: 'Biology',                  c: 89, t: 85, ev:'U4 Microorganisms 15/15 PERFECT + U8 Photosynthesis 20/20 PERFECT + U11 Human Body Systems 20/20 PERFECT + U14 Cells 19/20 (95%) + U17 Ecosystems 17/20 (85%) - closed G4 Q40, the U1 Q13 gas-exchange thread, and Competition Q24/Q7/Q14/Q32 (Q31 substantially closed) + U20 Gap-Closure Checkpoint 16/20 (80%) - upgraded germination-light to a confirmed recurring gap + Milestone Test 2 36/40 (95%) - three of the four misses were Biology, all isolated single-fact recall slips + U22 Nutrition, Vitamins &amp; a Balanced Diet 15/20 (75%, FAIL) - the third program fail; a precise symptom-to-nutrient reverse-reasoning gap found + U25 Seeds, Plant Reproduction &amp; Dispersal 14/20 (70%, FAIL) - the stamen/pistil confusion CONFIRMED across two formats, the Iron/oxygen fact failed a THIRD consecutive attempt + U26&#39;s two embedded Biology re-test questions (within the Physics test): BOTH gaps CLOSED on the escalated first attempt - Iron (Q9, a delivery-truck-analogy Quick Fix, 4th framing) and stamen/pistil (Q10, a sorting-mini-game Quick Fix, 3rd framing) both answered correctly, confirming the escalation-to-a-different-teaching-device strategy worked for both of these long-running gaps + Milestone Test 3 34/40 (90%): the anther-vs-ovary confusion REGRESSED (Q10) after being closed by U30, germination-light reactivated at bare recall (Q9) despite a correct critique-level answer later in the same test, but the anther-vs-stigma applied check (Q32) held - directly targeted by U31&#39;s Quick Fix and new Classification/Digestion content + U31 Classification &amp; Digestion 16/20 (80%, PASS): the anther-vs-ovary Quick Fix FAILED both dedicated confirming reps identically (Q8, Q16) - a THIRD consecutive miss on this fact across M2&#8594;M3&#8594;U31, now escalated to a genuinely different teaching device (3-way JOB-sort mini-game) in U32; germination-light fully RESOLVED (Q4, Q17); two new gaps found (Q15 analogy-transfer, Q19 fair-test variable confusion) - independently reinforced by an ASMOPSS 2024 G4 Set B retake (1 Aug 2026) missing the identical anther/stigma diagram swap a month apart (Q32)' },
    { name: 'Chemistry / Matter',       c: 94, t: 85, ev:'U5 States/Materials 13/15 (87%) + U9 Reactions 18/20 (90%) + U12 Materials Origins &amp; Classification 19/20 (95%) + U15 Density &amp; Buoyancy 18/20 (90%) - closed G4 Q2, Q17, and Competition Q29/Q19 + U20 Gap-Closure Checkpoint 16/20 (80%) + Milestone Test 2 36/40 (95%) - a clean run with ZERO Chemistry-related misses; every density/materials-adjacent Section B/C question was answered correctly + U24 Density, Buoyancy &amp; Thermal Expansion 19/20 (95%) - CONFIRMS Competition C2&#39;s Q27 (density calculation) and Q30 (buoyancy vs temperature) both closed; the one miss (Q16, heated balloon) reads as a framing-specific slip since the identical logic was answered correctly twice elsewhere in the same test' },
    { name: 'Physics',                  c: 93, t: 85, ev:'U3 Magnetism &amp; Heat 15/15 PERFECT + U6 Circuits 14/15 (93%) + U10 Forces 19/20 (95%) + U13 Light 14/20 (70%, FAIL, later fully closed) + U16 Sound 17/20 (85%) + U18 Energy Transformations 15/20 (75%, FAIL) + U19 Water Cycle 17/20 (85%, PASS, PE/KE swap CONFIRMED CLOSED) + U20 Gap-Closure Checkpoint 16/20 (80%) - Competition Q30 (tides) CONFIRMED CLOSED + Milestone Test 2 36/40 (95%) + U21 Falling Objects, Gravity &amp; Air Resistance 20/20 (100%) PERFECT - CONFIRMS the Competition C2 gravity gap closed on the first attempt + U23 Static Electricity &amp; Electric Charges 16/20 (80%, PASS) - CONFIRMS Competition C2&#39;s Q17b (electrostatic induction) closed across four question framings + U26 Speed, Distance &amp; Time 19/20 (95%, PASS) - Section C (applied reasoning) went a PERFECT 10/10 on a brand-new topic, confirming clean transfer; one isolated bare-formula-recall slip (Q3, Time formula numerator/denominator swap) did not carry into either applied time-calculation question later in the same test + Milestone Test 3 34/40 (90%): two previously-solid facts cracked for the first time under fresh framings - air resistance/gravity (Q2, perfect since U21) and electrostatic induction (Q19, closed across four U23 framings) - plus Speed/Distance formula bare-recall inversions (Q11/Q25) despite correct applied use elsewhere in the same test; force-for-distance (Q15) held as an encouraging confirming rep + U34 Electricity, Magnetism &amp; Forces Recap 17/20 (85%, PASS): both carried-forward ASMOPSS 2024 retake watch-items (magnet-vs-magnetic-material, 3-magnet chain reading) landed as PARTIAL closures at 2/3 each - the magnet-material distinction held except on a &quot;what does this tell us&quot; reverse-inference format (Q6), and the chain method held except on the multi-step derivation (Q11); an isolated conductor/insulator slip (Q2) also surfaced + U39 Gravity, Forces &amp; Working-Memory Stress Test 19/20 (95%, PASS) - directly re-tested two real ASMOPSS 2026 findings under harder conditions and BOTH held clean: the gravity equal-fall-rate rule (Q1, Q14) and the magnet-chain-with-a-flip skill (Q13), both confirming exam-day rushing rather than a genuine content gap; the one miss (Q17) was a brand-new 3-object air-resistance ranking format, never asked before, cracking on first exposure while every 2-object version in the same test held correct' },
    { name: 'Earth &amp; Space',            c: 91, t: 85, ev:'U7 Astronomy 15/15 PERFECT - closed G4 Q32 (final baseline miss); jumped from 50% (untested) to above target in one unit. Untested in M2 (U11-U19 scope); Competition C2 surfaced two new Earth &amp; Space extension gaps (heliocentric/geocentric Venus phases, hemisphere-reversed seasons) slated for U27/U28 + U27 Models of the Solar System 20/20 (100%) PERFECT - CONFIRMS Competition C2&#39;s Q23 gap (heliocentric vs geocentric, Venus&#39;s phases) CLOSED on the first attempt, zero misses across all three sections + U28 Earth&#39;s Tilt &amp; the Seasons 16/20 (80%, PASS right at the bar) - Competition C2&#39;s Q25 gap (hemisphere-reversed seasons) is only PARTIALLY closed: the reversal rule holds when the season word is given directly or reasoned about abstractly, but breaks down when Prem must first derive one hemisphere&#39;s season himself before flipping it (Q6, Q10); a related distance-myth-bust gap also surfaced (Q9, Q18) - both directly targeted by U29&#39;s opening Quick Fix' },
    { name: 'Scientific Investigation', c: 95, t: 85, ev:'Section C 80% (U1), 100% (U2-U8), 90% (U9), 100% (U10), 100% (Milestone 1, 8/8), 100% (U11-U12), 60% (U13), 100% (U14), 90% (U15), 80% (U16-U20) + Milestone Test 2: Section C 8/8 (100%) - a PERFECT run + U21: Section C 10/10 (100%) PERFECT + U22: Section C 8/10 (80%) - a new, first-exposure gap surfaced: interpreting a fair test that shows NO difference as still a valid result + U23: Section C 8/10 (80%) - the null-result fair-test gap did NOT close despite direct remediation, escalated to U24 + U24: Section C 9/10 (90%) - the null-result fair-test gap is finally RESOLVED after escalating to a coin-flip fairness analogy + U25: Section C 7/10 (70%) - a step down, though the misses trace back to confirmed content gaps rather than a fresh reasoning weakness + U26: Section C 10/10 (100%) PERFECT - a full recovery, including two fresh fair-test-design questions applied to a brand-new topic, both answered correctly + U27: Section C 10/10 (100%) PERFECT - the model-testing logic (choosing between two equally-fitting ideas via a new prediction) transferred cleanly to a brand-new topic with zero misses + Milestone Test 3: Section C 8/8 (100%) PERFECT - the SECOND consecutive milestone test with a perfect applied section, now a well-established strength under exam pressure + U31: Section C 7/10 (70%) - a step back, with two of the three misses (Q8, Q16) tracing to the persistent anther-vs-ovary content gap rather than a fresh reasoning weakness, plus one genuinely new analogy-transfer miss (Q15)' },
    { name: 'Applied Reasoning',        c: 95, t: 85, ev:'U1 80%, U2-U8 100%, U9 90%, U10 100%, Milestone 1 100% (8/8), U11-U12 100%, U13 60%, U14 100%, U15 90%, U16-U20 80% + Milestone Test 2: Section B 16/16 AND Section C 8/8 - all 32 applied/reasoning-heavy questions correct + U21: Section B 6/6 AND Section C 10/10 - all 16 correct on a fresh Physics topic + U22: Section B 4/6 AND Section C 8/10 - 12/16, the weakest applied-reasoning result since U13, directly targeted by U23 + U23: Section B 5/6 AND Section C 8/10 - 13/16 (81%), a partial recovery + U24: Section B 6/6 AND Section C 9/10 - 15/16 (94%), the best applied-reasoning result since U21&#39;s perfect run + U25: Section B 4/6 AND Section C 7/10 - 11/16 (69%), the weakest since U22, driven by confirmed content gaps rather than a reasoning-process weakness + U26: Section B 6/6 AND Section C 10/10 - a PERFECT 16/16 (100%), the best applied-reasoning result of the entire program on a brand-new topic + U27: Section B 6/6 AND Section C 10/10 - ANOTHER perfect 16/16 (100%), matching U26 as the program&#39;s best applied-reasoning result, confirming this is now a consistent strength rather than a one-off + U28: Section B 3/6 AND Section C 9/10 - 12/16 (75%), ending the two-unit perfect streak; the Section B dip traces entirely to the two precise, narrow gaps (derive-then-flip, distance-absolutism) rather than a broader reasoning regression, since Section C held at 90% + Milestone Test 3: Section B 14/16 AND Section C 8/8 - 22/24 (92%), a strong result under full 40Q exam pressure, with Section C holding perfect for the second straight milestone + U31: Section B 5/6 AND Section C 7/10 - 12/16 (75%), the dip driven mainly by the recurring anther-vs-ovary content gap rather than a broader reasoning regression' }
  ],
  radarCurrent:  [89, 94, 94, 91, 95, 95],
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
    { unit:18, topic:'Physics: Energy Transformations', score:15, outOf:20, pct:75, passBar:16, date:'2026-07-15' },
    { unit:19, topic:'Physics: Water Cycle', score:17, outOf:20, pct:85, passBar:16, date:'2026-07-15' },
    { unit:20, topic:'Gap-Closure Checkpoint', score:16, outOf:20, pct:80, passBar:16, date:'2026-07-16' },
    { unit:'M2', topic:'Milestone Test 2 - All Units (U11-U20)', score:36, outOf:40, marks:95, marksOutOf:100, pct:95, passBar:32, date:'2026-07-17' },
    { unit:21, topic:'Physics: Falling Objects, Gravity &amp; Air Resistance', score:20, outOf:20, pct:100, passBar:16, date:'2026-07-18' },
    { unit:22, topic:'Biology: Nutrition, Vitamins &amp; a Balanced Diet', score:15, outOf:20, pct:75, passBar:16, date:'2026-07-19' },
    { unit:23, topic:'Physics: Static Electricity &amp; Electric Charges', score:16, outOf:20, pct:80, passBar:16, date:'2026-07-20' },
    { unit:24, topic:'Chemistry: Density, Buoyancy &amp; Thermal Expansion', score:19, outOf:20, pct:95, passBar:16, date:'2026-07-21' },
    { unit:25, topic:'Biology: Seeds, Plant Reproduction &amp; Dispersal', score:14, outOf:20, pct:70, passBar:16, date:'2026-07-21' },
    { unit:26, topic:'Physics: Speed, Distance &amp; Time', score:19, outOf:20, pct:95, passBar:16, date:'2026-07-22' },
    { unit:27, topic:'Earth &amp; Space: Models of the Solar System', score:20, outOf:20, pct:100, passBar:16, date:'2026-07-23' },
    { unit:28, topic:'Earth &amp; Space: Earth&#39;s Tilt &amp; the Seasons', score:16, outOf:20, pct:80, passBar:16, date:'2026-07-23' },
    { unit:29, topic:'Physics: Energy, Forces &amp; Simple Machines', score:18, outOf:20, pct:90, passBar:16, date:'2026-07-24' },
    { unit:30, topic:'Gap-Closure Checkpoint', score:18, outOf:20, pct:90, passBar:16, date:'2026-07-27' },
    { unit:'M3', topic:'Milestone Test 3 - All Units (U21-U30)', score:34, outOf:40, marks:90, marksOutOf:100, pct:90, passBar:32, date:'2026-07-30' },
    { unit:31, topic:'Biology: Classification &amp; Digestion', score:16, outOf:20, pct:80, passBar:16, date:'2026-07-31' },
    { unit:32, topic:'Physics: Heat, Temperature &amp; Materials', score:18, outOf:20, pct:90, passBar:16, date:'2026-08-02' },
    { unit:33, topic:'Biology: Plant Structures &amp; Adaptation', score:20, outOf:20, pct:100, passBar:16, date:'2026-08-03' },
    { unit:34, topic:'Physics: Electricity, Magnetism &amp; Forces Recap', score:17, outOf:20, pct:85, passBar:16, date:'2026-08-06' },
    { unit:35, topic:'Final Gap-Closure Checkpoint', score:17, outOf:20, pct:85, passBar:16, date:'2026-08-07' },
    { unit:'MK1', topic:'Mock Test 1 - Full Syllabus Practice', score:31, outOf:40, marks:77.5, marksOutOf:100, pct:78, passBar:32, date:'2026-08-07' },
    { unit:36, topic:'Scientific Investigation Skills: Multi-Group Fair Tests, Data Trends &amp; Conductors', score:20, outOf:20, pct:100, passBar:16, date:'2026-08-08' },
    { unit:37, topic:'Chemistry: Combustion, Burning &amp; Fire Safety', score:17, outOf:20, pct:85, passBar:16, date:'2026-08-13' },
    { unit:38, topic:'Biology: Plant Reproduction Outcomes &mdash; Fruit vs Seed', score:19, outOf:20, pct:95, passBar:16, date:'2026-08-14' },
    { unit:39, topic:'Physics: Gravity, Forces &amp; Working-Memory Stress Test', score:19, outOf:20, pct:95, passBar:16, date:'2026-08-15' }
  ],
  baseline: { label:'2025 G4 paper', score:28, outOf:40, marks:72.5, marksOutOf:100, pct:72.5,
              g3:{ label:'2025 G3 (official)', marks:55.5, marksOutOf:100, pct:55.5, percentile:88.66 } },

  unitLog: [
    {
      n: 39, badge: 'linear-gradient(135deg,#37474f,#20282d)',
      title: 'Physics: Gravity, Forces &amp; Working-Memory Stress Test',
      tags: [
        { t:'&#9989; 19/20 (95%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Real-exam Q12 gravity regression CLOSED', c:'tgreen' },
        { t:'Real-exam Q33 magnet-flip regression CLOSED', c:'tgreen' },
        { t:'New 3-object ranking format missed', c:'torange' }
      ],
      note: '32nd assessment of the program, third unit of the post-ASMOPSS 2026 rotation (Executive Summary &sect;50) &mdash; not new content, but a deliberate spaced re-test of gravity/air-resistance and multi-step force-combination/magnet-chain skills under harder, closer-to-exam conditions, directly targeting two named real ASMOPSS 2026 findings: Q12 (a heavily-drilled gravity fact confirmed closed via Unit 21&#39;s 20/20 and the ASMOPSS 2024 retake, then still missed on exam day) and Q33 (a magnet chain solved correctly, but a near-identical chain with an added &quot;flip&quot; step missed). Lesson 1 `GravityForces_Lesson_FreeFallUnderPressure.html` (steel theme, 9 screens) opens with 2 quick confirming checks from Unit 38, recaps gravity/air-resistance, then stress-tests it with a 3-object-at-once ranking scenario and Trap-Recognition Drill #2. Lesson 2 `GravityForces_Lesson_CombiningForcesAndMagnetChains.html` covers multi-step force combination and magnet chains WITH a physical flip mid-derivation, ending &quot;Go to Test &rarr;&quot;. Test `Tests\\Unit_39_Test_GravityForcesStressTest.html` (20Q, 4A/6B/10C, PASS_BAR 16, steel theme) directly re-tests both named findings plus embeds Trap-Recognition Drill #2. Built and verified: position-balanced exact 5/5/5/5, a length-margin pass fixed 10 questions, a within-test Jaccard pass fixed 2 near-duplicates (Q6/Q11, Q6/Q16), and a NEW cross-corpus overlap check specifically against the 5 most relevant original teaching units (U21/U29/U30/U34/U35) found and fixed 4 questions (the highest, 0.48, was Q12 vs U34&#39;s own Q11) by giving each a genuinely fresh scene (Apollo 15 Moon scene, dogs-pull-sled, refrigerator magnets, toy-train couplers). Scoring engine verified via a Node harness (perfect run 20/20; all-wrong run 0/20). Per Lui&#39;s deferred request, the Unit Score History chart&#39;s overlapping per-point score-label text was also removed this build cycle (dots, pass-line, and axis labels kept). <strong>TAKEN 15 Aug 2026: 19/20 (95%) - PASS</strong>, matching Unit 38 as the strongest result of the rotation so far. Section A 4/4, Section B 6/6, Section C 9/10. Headline: BOTH deliberate real-exam re-tests held clean on the first attempt &mdash; Q1/Q14 (gravity) and Q13 (magnet-flip) all correct, strong evidence both real-exam findings were exam-day rushing rather than genuine content gaps. Trap-Recognition Drill #2 went a clean 4/4. The one miss, Q17, asked for a 3-way object ranking by fall speed (tennis ball, shuttlecock, crumpled paper) &mdash; the first time this program ever asked for a 3-object ranking rather than a 2-object comparison; Prem chose the exact reversed order, while every 2-object air-resistance question in the same test (Q1, Q5, Q9, Q14, Q18) was correct. Reads as a brand-new task format cracking on first exposure, not a regression &mdash; and gives a second, still-tentative data point to the cross-topic &quot;wrong-direction reading&quot; pattern first seen in Mock Test 1. Results saved to `Lessons\\Tests\\Results\\SCI_U039_Results_2026-08-15.json`. Confirmed next assessment: Unit Test (U40 &mdash; Chemistry: Mixtures, Solutions &amp; Separating Materials, per &sect;50, the fourth and final unit of this rotation slice before Milestone Test 4).',
      status: 'done'
    },
    {
      n: 38, badge: 'linear-gradient(135deg,#1b5e20,#2e7d32)',
      title: 'Biology: Plant Reproduction Outcomes &mdash; Fruit vs Seed',
      tags: [
        { t:'&#9989; 19/20 (95%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Spaced-Retention Checkpoint 3/3', c:'tgreen' },
        { t:'Trap-recognition 4/4', c:'tgreen' },
        { t:'Multi-step-chaining slip on Q13', c:'torange' }
      ],
      note: '31st assessment of the program, second unit of the post-ASMOPSS 2026 rotation (Executive Summary &sect;50), closing the real exam&#39;s Q25 gap (ovary wall &rarr; fruit, ovule &rarr; seed). Two lessons: L1 `FruitAndSeed_Lesson_OvaryToFruitOvuleToSeed.html` opens with 2 quick confirming checks from Unit 37 (oil-fire immediate-action on a fresh campsite scene; trap-recognition strategy generalized beyond fire), then teaches what the ovary and ovule each become after fertilization plus the science fruit-vs-vegetable rule. L2 `FruitAndSeed_Lesson_SeedStructureAndDispersal.html` covers seed structure and matches a fruit&#39;s shape to its dispersal method, running Trap-Recognition Drill #3. Test `Tests/Unit_38_Test_FruitAndSeedOutcomes.html` (20Q, 4A/6B/10C, PASS_BAR 16, leaf/fruit theme) is the FIRST test built entirely under the new same-fact-pair design rule (create-new-test-pack skill G.7, added after Unit 37&#39;s Q5/Q15 finding) and embeds the program&#39;s FIRST Spaced-Retention Checkpoint. <strong>TAKEN 14 Aug 2026: 19/20 (95%), PASS</strong> &mdash; the best result of the post-ASMOPSS rotation so far. Section A 4/4, Section B 6/6, Section C 9/10 &mdash; Basic 4/4, Intermediate 6/6, Applied 9/10. All three spaced-retention items (anther/ovary/stigma roles, duckweed-style root function) came back correct, and Trap-Recognition Drill #3 went a perfect 4/4. The one miss, Q13, asked Prem to chain the full pollination-to-fruit pathway into one multi-step explanation; he attributed the fruit-forming role to the anther instead of the ovary, even though both component facts (ovary&rarr;fruit, anther/ovary team roles) tested correct in isolation elsewhere in the same test &mdash; a narrow multi-step-chaining slip, not a fresh content gap, matching a recurring shape seen with U29&#39;s force-grouping and U34&#39;s magnet-chain derivation. Results saved to `Lessons\\Tests\\Results\\SCI_U038_Results_2026-08-14.json`. Confirmed next assessment: Unit Test (U39 &mdash; Physics: Gravity, Forces &amp; Working-Memory Stress Test, per &sect;50).',
      status: 'done'
    },
    {
      n: 37, badge: 'linear-gradient(135deg,#d84315,#bf360c)',
      title: 'Chemistry: Combustion, Burning &amp; Fire Safety',
      tags: [
        { t:'&#9989; 17/20 (85%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Q5/Q15 duplicate found + fixed', c:'torange' },
        { t:'Trap-recognition 4/5 on first try', c:'tgreen' },
        { t:'FIRST unit of post-ASMOPSS rotation', c:'tblue' }
      ],
      note: '30th assessment of the program, and the first unit of the post-ASMOPSS 2026 rotation (Executive Summary &sect;49-50), weighted toward Physical Science after the retrospective found Physical Science was the weakest strand (52%) carrying 69.2% of the real exam&#39;s marks. Two lessons: L1 `Combustion_Lesson_FireTriangleAndOxygen.html` teaches the fire triangle (fuel+oxygen+heat) and why oxygen, not the far more common nitrogen, actually supports burning - closing the real exam&#39;s Q30 gap. L2 `Combustion_Lesson_FireSafetyAndTrapRecognition.html` matches firefighting methods to the triangle, then teaches Trap-Recognition Drill #1 - spotting absolute/overgeneralized language (&quot;always/never/only/all&quot;) - the real exam&#39;s single highest-value miss cluster (6.25 marks), never drilled anywhere in the program before this unit. Test `Tests/Unit_37_Test_CombustionAndFireSafety.html` (20Q, 4A/6B/10C, PASS_BAR 16, flame theme) is the FIRST test in the program to tag every question with its ASMOPSS tier (Basic/Intermediate/Applied) and report tier-split results in the saved JSON alongside section-split. <strong>Process finding (caught by Lui after the build, not by any automated check): Q5 and the originally-shipped Q15 were near-duplicate questions</strong> - both an oil-pan-fire &quot;what do you do&quot; scenario with the same correct answer, reworded and pinned to different section/tier labels, violating the project&#39;s own standing uniqueness rule. Fixed same day: Q15 rewritten into a genuine Applied-tier synthesis question (why combining water and foam works faster than either alone, since each removes a different fire-triangle side), re-verified position-balanced 5/5/5/5 with zero length-margin violations and zero same-test Jaccard overlap flags. A new standing rule (`feedback-no-near-duplicate-confirming-reps.md`) now requires a same-test uniqueness pass on every future build, not just a cross-corpus check. <strong>TAKEN 13 Aug 2026 (before the fix, so Q5 and the original Q15 count as one gap confirmed twice): 17/20 (85%), PASS.</strong> Section A 4/4, Section B 5/6, Section C 8/10 - Basic 4/4, Intermediate 5/6, Applied 8/10. Headline: the &quot;never use water on an oil fire&quot; rule holds in explain-why framing (Q6, Q17 correct) but not yet in immediate-action framing (Q5/Q15 both missed); Trap-Recognition Drill #1 landed strongly on its first outing, 4 of 5 dedicated questions correct (Q11, Q12, Q14, Q17), with only the most abstract &quot;what&#39;s your strategy&quot; framing (Q20) missed. Both are light, first-pass gaps recommended as short confirming reps in U38, not a dedicated remediation unit. Results saved to `Lessons\\Tests\\Results\\SCI_U037_Results_2026-08-13.json`. Confirmed next assessment: Unit Test (U38 - Biology: Plant Reproduction Outcomes, Fruit vs Seed, per &sect;50).',
      status: 'done'
    },
    {
      n: 36, badge: 'linear-gradient(135deg,#283593,#1a237e)',
      title: 'Scientific Investigation Skills: Multi-Group Fair Tests, Data Trends &amp; Conductors',
      tags: [
        { t:'&#127942; 20/20 (100%) PERFECT', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Conductor/insulator 3x gap CLOSED', c:'tgreen' },
        { t:'Both Mock Test 1 hard-tier fails CLOSED', c:'tgreen' },
        { t:'FINAL assessment before ASMOPSS 2026', c:'tblue' }
      ],
      note: '29th assessment of the program, a BONUS unit built and taken 8 Aug 2026, the day before ASMOPSS 2026 (9 Aug). Lui explicitly reversed the earlier &quot;don&#39;t build new content&quot; caution (&quot;dont worry it&#39;s kinda fun 4him to do all these&quot;), so this was built as a regular Unit Test via `/create-new-test-pack`, directly targeting Mock Test 1&#39;s own hard-tier (Section C) miss pattern - Q36 (a multi-condition fair test) and Q38 (a two-clue reverse-factor habitat inference) - plus the confirmed conductor/insulator 3-instance recurring gap (U34&#8594;U35&#8594;Mock Test 1). Lesson 1 `SciSkills_Lesson_FairTestsAndVariables.html` taught the &quot;clue table&quot; method for multi-group (3+) fair tests. Lesson 2 `SciSkills_Lesson_DataTrendsAndConductors.html` opened with the FOURTH escalation device of the program (a 2-bin conductor/insulator click-to-sort game built around the exact objects Prem had repeatedly missed - a steel spoon, a brass button, a steel paperclip) then covered data-trend/anomaly reading and two-clue reverse-factor inference. Test `Tests\\Unit_36_Test_ScientificInvestigationSkills.html` (20Q, 4A/6B/10C, PASS_BAR 16, indigo theme) gave 3 dedicated conductor/insulator confirming reps, fresh multi-group fair-test scenarios, two-clue reverse-factor questions, and trend/anomaly questions. Built and verified: position-balanced exact 5/5/5/5, a length-margin pass fixed 16 of 20 questions, a Jaccard overlap check fixed 3 near-duplicates, zero hint-leak flags, scoring engine verified via a Node harness (perfect run 20/20; all-wrong run 0/20). Full 10-year-old role-play verification pass completed end-to-end. <strong>TAKEN 8 Aug 2026: 20/20 (100%) - PERFECT, the program&#39;s FIFTH perfect score</strong> (after U8, U21, U27, U33). Section A 4/4, Section B 6/6, Section C 10/10. Headline: a clean sweep - conductor/insulator identification (the CONFIRMED 3-INSTANCE RECURRING GAP) is now CLOSED, all three dedicated confirming reps correct, the FOURTH confirmed instance of the &quot;escalate to a concrete device after 3 misses&quot; strategy working immediately. Both of Mock Test 1&#39;s hard-tier failure modes (multi-group fair-test isolation, two-clue reverse-factor inference) also confirmed closed on every dedicated question. No new watch-items surfaced. <strong>This is the FINAL assessment of the program before ASMOPSS 2026 (9 Aug 2026, tomorrow)</strong> - no further Unit Test or Milestone Test is recommended; every confirmed coaching gap identified across the program is now closed. Results saved to `Lessons\\Tests\\Results\\SCI_U036_Results_2026-08-08.json`.',
      status: 'done'
    },
    {
      n: 'MK1', badge: 'linear-gradient(135deg,#00695c,#00332c)',
      title: 'Mock Test 1 &mdash; Full Syllabus Practice',
      tags: [
        { t:'&#10060; 31/40, 77.5/100 marks (78%) FAIL by 2.5', s:'background:#fdecea;color:#c62828;font-weight:700' },
        { t:'Magnet-material + chain CONFIRMED closed', c:'tgreen' },
        { t:'Conductor/insulator URGENT 3x gap', c:'torange' },
        { t:'New wrong-direction reading pattern', c:'torange' }
      ],
      note: '27th assessment of the program, and the FIRST of up to 2 planned ASMOPSS-style mock tests, built and taken 7 Aug 2026 with 2 days left to ASMOPSS 2026 (9 Aug). NOT a real past paper &mdash; an original test written by Luikishi in the exact G4 Set B format (40 questions, 16A/16B/8C, 1.25/2.5/5 mark weighting = 100 marks total, pass bar 80), covering the FULL syllabus (U1-U35). Weighted toward the themes that recur every year across all 5 real ASMOPSS papers analysed (classification, fair-test/experiment design, light, magnetism, photosynthesis, forces, astronomy, graph/data reading) plus the program&#39;s then-open watch-items: three dedicated magnet-vs-magnetic-material questions at rising difficulty (Q6 direct, Q23 induced-magnetism, Q34 hard reverse-inference), one conductor/insulator recall question (Q10) and one electrical-safety critique (Q40), and dedicated independent/dependent/controlled-variable questions (Q3, Q20). Built and verified: position-balanced exact 10/10/10/10, zero length-margin violations after fixing 27 initially-flagged questions, a Jaccard overlap check caught and fixed 4 near-duplicates, and zero hint-leak flags. Scoring engine verified via a Python harness (perfect run 40/40 = 100 marks; all-wrong run 0/40 = 0 marks). Full 10-year-old role-play verification pass completed end-to-end. <strong>TAKEN 7 Aug 2026: 31/40, 77.5/100 marks (78%) - FAIL by just 2.5 marks, Prem&#39;s best-ever ASMOPSS-format score</strong> (up 6.3 marks over the 71.25-mark ASMOPSS 2024 retake baseline). Section A 12/16 (15/20 marks), Section B 13/16 (32.5/40 marks), Section C 6/8 (30/40 marks). Headline: BOTH of U35&#39;s open watch-items are now CONFIRMED CLOSED - magnet-vs-magnetic-material held across all three difficulty tiers including the fragile reverse-inference format that broke twice before (Q6, Q23, Q34), and the 3-magnet chain (Q33) plus the dependent/controlled-variable vocabulary (Q3, Q20) are both solid. But conductor/insulator (Q10) is now a CONFIRMED 3-INSTANCE RECURRING GAP (U34&#8594;U35&#8594;Mock Test 1) - every miss picked a metal object (a steel spoon, a brass button, a steel paperclip) instead of the real insulator, a specific misconception rather than random error, now the program&#39;s top priority. A new cross-topic &quot;wrong direction&quot; reading pattern also surfaced across Q19, Q21, and Q36 (a data-trend, a shadow-distance relationship, and a multi-condition fair test all read backwards) - an exam-strategy concern distinct from a content gap. Two further isolated misses (Q12, Q15). With only 1 day left to ASMOPSS 2026, Mock Test 2 was NOT built; instead Unit 36 (Scientific Investigation Skills), a dedicated bonus unit targeting the conductor/insulator escalation and multi-condition fair-test reading, was built and taken the same day. Results saved to `Lessons\\Tests\\Results\\MockTest1_ASMOPSS2026_FullSyllabus_Results_2026-08-07.json`.',
      status: 'done'
    },
    {
      n: 35, badge: 'linear-gradient(135deg,#DAA520,#8a6a00)',
      title: 'Final Gap-Closure Checkpoint',
      tags: [
        { t:'&#9989; 17/20 (85%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'3-magnet chain CONFIRMED closed', c:'tgreen' },
        { t:'Magnet-material STILL partial', c:'torange' },
        { t:'FIFTH &amp; FINAL unit - plan complete', c:'tblue' }
      ],
      note: '26th assessment of the program, and the FIFTH and FINAL unit of the prediction-driven final-5-unit sequence before ASMOPSS 2026 (9 Aug - only 3 days away at build time). Review-only capstone, NO new lessons, matching the U20/U30 precedent. `Checkpoint_U35_Review.html` (gold/amber theme) opens with 8 Quick Recap Cards spanning the durable content from Units 21-30 plus U6/U34 circuits and Observation-vs-Inference, then three Priority Refreshers with embedded interactive Quick Checks: (1) a brand-new dedicated fair-test/graph-reading exam-skills refresher - a decision tree for independent/dependent/controlled variables, plus a worked beetroot-seedling bar-chart example explicitly teaching &quot;calculate the difference, don&#39;t just compare heights&quot; - never given dedicated content before despite being a recurring ASMOPSS format; (2) the magnet-vs-magnetic-material reverse-inference trap that caused U34&#39;s Q6 miss, explained explicitly with a fresh steel-washer Quick Check; (3) longer magnet chains, with a fresh 3-magnet worked example (Magnets D/E/F) that deliberately varies U34&#39;s pattern - the given pole sits at the LAST magnet&#39;s far end instead of the first, and the join pattern is REPEL-then-ATTRACT instead of U34&#39;s ATTRACT-then-ATTRACT. Test `Tests\\Unit_35_Test_FinalGapClosureCheckpoint.html` (20Q, 4A/6B/10C, PASS_BAR 16, gold theme) targets: fresh confirming reps for U34&#39;s two now-PARTIALLY-closed watch-items, using scenarios that vary the specific parameters that caused the original misses - a paperclip induced-magnetism reverse-inference question (Q11, replacing U34&#39;s washer/filings framing entirely), a stacked-toy-blocks magnet chain with a different given-position and attract/repel pattern (Q12, Red/Blue/Green blocks instead of a magnet row), plus a magnet-chain exam-strategy question (Q19); a light touch on U34&#39;s isolated Q2 conductor/insulator slip (Q3); five new dedicated fair-test/graph-reading questions (Q5, Q6, Q13, Q14, Q18) plus one general re-reading exam-strategy question (Q20); and a light resweep of durable U21-U30 content (gravity/air resistance implicitly via Section A, static induction, density/heat, speed/distance/time, seasons, combining forces, observation-vs-inference). Position distribution exact 5/5/5/5, fixed from a severe initial 1/4/8/7 skew. A length-margin pass found and fixed 11 questions over the 25% threshold. A Jaccard overlap check caught and fixed 3 near-duplicates: Q8&#39;s speed question originally echoed Unit 30&#39;s cyclist template almost word-for-word (0.615 similarity) - reworded to a cargo-ship-in-nautical-miles scenario; Q11&#39;s magnet-material question echoed the Review page&#39;s own steel-washer Quick Check (0.432) - reworded entirely into a paperclip induced-magnetism scenario testing a deeper, related concept; Q16&#39;s 3-force combining question echoed both Unit 29&#39;s sled question and Milestone Test 3&#39;s wagon question - reworded twice (first to a crate/ropes scenario, still 0.36 similarity to Milestone 3, then to a hot-air-balloon/wind-gusts scenario) before clearing the threshold entirely. A hint-leak scan found zero flags. Both SVG diagrams (the beetroot-seedling bar chart, the D/E/F magnet chain) rasterized and visually verified with no bugs found - a notably clean result after U34&#39;s two diagram bugs. Scoring engine verified via a Python harness mirroring the exact JS scoring logic (perfect run 20/20, correct 4/6/10 section split; all-wrong run 0/20). Full 10-year-old role-play verification pass completed end-to-end across both the Review page and the test - all links to source lessons confirmed valid, all worked-example derivations manually re-checked step-by-step.',
      status: 'done'
    },
    {
      n: 34, badge: 'linear-gradient(135deg,#2e7d32,#1565c0)',
      title: 'Physics: Electricity, Magnetism &amp; Forces Recap',
      tags: [
        { t:'&#9989; 17/20 (85%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Magnet-vs-material PARTIALLY closed', c:'torange' },
        { t:'3-magnet chain PARTIALLY closed', c:'torange' },
        { t:'Isolated conductor/insulator slip', c:'tblue' }
      ],
      note: '25th assessment of the program, and the fourth of the final, prediction-driven 5-unit sequence before ASMOPSS 2026 (9 Aug). Lesson 1 `ElecMagForces_Lesson_CircuitsChargesAndMagnetism.html` (green, 9 screens) recaps circuits (Unit 6: complete-loop rule, conductors/insulators) and static charges (Unit 23: friction, attract/repel, induction), then introduces brand-new content directly targeting a carried-forward ASMOPSS 2024 retake watch-item - the magnet-vs-magnetic-material distinction. Being attracted to a magnet does NOT make an object a magnet itself; the test is whether it can pull OTHER magnetic objects, unaided. This was never explicitly taught despite Unit 3&#39;s strong general magnetism foundation. Lesson 2 `ElecMagForces_Lesson_MagnetChainsAndCombiningForces.html` (blue, 8 screens) teaches a harder 3-magnet chain-reading method (check ONE join at a time, every magnet has two opposite poles, a 4-step worked derivation) directly targeting the retake&#39;s magnet-pole diagram-reading regression on chains harder than Unit 30&#39;s simple 2-magnet check, then recaps forces and combining forces (same-direction adds, opposite subtracts, sort into direction-groups first for 3+ forces). Both lessons include a decision tree and 5Q practice. Test `Tests\\Unit_34_Test_ElectricityMagnetismAndForces.html` (20Q, 4A/6B/10C, PASS_BAR 16) covers circuits/conductors/static-charge recall, two dedicated magnet-vs-magnetic-material questions (Q6, Q13), two dedicated 3-magnet-chain questions (Q11, Q12), and combining-forces reasoning - built with fresh scenarios distinct from both lessons&#39; own practice questions. Position distribution exact 5/5/5/5, fixed from a severe initial 2/9/9/0 skew across 9 questions (Q6, Q8, Q9, Q11, Q12, Q14, Q16, Q17, Q20). A length-margin pass found and fixed 12 questions over the 25% threshold. A Jaccard overlap check flagged one question (a bare N-N/S-S pole-facing recall stem, 0.54-0.56 similarity against Unit 3&#39;s original test) - reworded across 3 passes into a toy-horseshoe-magnets scenario to clear the threshold. A hint-leak check caught one definitional-hint leak (an INSULATOR question&#39;s correct option originally read &quot;a rubber insulating sleeve&quot;, echoing the tested term - reworded to &quot;a rubber bicycle grip&quot;). All three SVG diagrams (circuit loop, 3-magnet chain, combining-forces) rasterized and visually verified - two real bugs found and fixed: a caption-text-clipping bug on the combining-forces diagram (viewBox widened from 340&times;130 to 400&times;140, caption split across two lines), and a structural bug on the 3-magnet chain diagram where Magnet P was drawn at half the width of Magnets Q and R, which misplaced both join labels off the true P-Q and Q-R boundaries (fixed by redrawing all three magnets as equal-width two-pole blocks with bordered segments). A wrong-answer-key bug plus self-contradictory feedback text in Lesson 2&#39;s Practice Q1 (the magnet-chain logic pointed to North but the key said South) was found via manual re-derivation and fixed. Scoring engine verified via a Node harness (perfect run 20/20, correct 4/6/10 split; all-wrong run 0/20). Zero hint-leak flags remaining. <strong>TAKEN 6 Aug 2026: 17/20 (85%) - PASS.</strong> Section A 3/4 (75%), Section B 5/6 (83%), Section C 9/10 (90%). Headline: both retake watch-items landed as PARTIAL closures (2 of 3 dedicated questions each) rather than clean confirms. Magnet-vs-magnetic-material held for two questions but missed specifically on the &quot;what does this tell us&quot; reverse-inference format (Q6), where the wrong answer directly contradicted the question&#39;s own stated premise. The 3-magnet chain method also held for two questions but missed on the multi-step derivation (Q11). A third, isolated miss (Q2, conductor/insulator) reads as a one-off recall slip rather than a new gap. All three findings get dedicated, freshly-varied confirming reps in Unit 35 - the final Gap-Closure Checkpoint before ASMOPSS, only 3 days away. Results saved to `Lessons\\Tests\\Results\\SCI_U034_Results_2026-08-06.json`.',
      status: 'done'
    },
    {
      n: 33, badge: 'linear-gradient(135deg,#2e7d32,#1565c0)',
      title: 'Biology: Plant Structures &amp; Adaptation',
      tags: [
        { t:'&#9989; 20/20 (100%) PERFECT', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Duckweed CONFIRMED closed', c:'tgreen' },
        { t:'Underground stems CONFIRMED closed', c:'tgreen' },
        { t:'4th perfect score of program', c:'tblue' }
      ],
      note: '24th assessment of the program, and the third of the final, prediction-driven 5-unit sequence before ASMOPSS 2026 (9 Aug). Lesson 1 `PlantAdaptations_Lesson_DesertAndWaterPlants.html` (green, 8 screens) opens with a Quick Recall of Unit 1&#39;s root/stem/leaf jobs, then teaches desert-plant adaptations (cactus: spines as reduced leaves, thick water-storing stem, wide shallow roots) and water-plant adaptations (duckweed: floating leaves, short non-anchoring roots since the water itself supports the plant) - directly targeting the ASMOPSS 2024 retake&#39;s duckweed-roots watch-item (Q25). Lesson 2 `PlantAdaptations_Lesson_UndergroundStemsCloserLook.html` (blue, 7 screens) recaps Unit 1&#39;s buds/eyes test (potato = stem, not root) then deepens it into a full tuber/bulb/rhizome/corm classification (potato/onion/ginger/taro) plus a storage-root-vs-stem-tuber contrast (sweet potato/carrot vs potato) - directly targeting the stale, 30+-unit-old underground-stems watch-item last touched in Unit 1. Both lessons include a decision tree and 5Q practice. Test `Tests\\Unit_33_Test_PlantStructuresAndAdaptation.html` (20Q, 4A/6B/10C, PASS_BAR 16) covers desert/water adaptations, duckweed specifically, all four underground stem types, storage roots, general Unit-1 recall, and applied/fair-test reasoning - built with fresh scenarios (mint, turmeric, yam, beet, water hyacinth, garlic) distinct from both lessons&#39; own practice questions. Position distribution exact 5/5/5/5. An initial length-margin pass found 15 questions over the 25% threshold (mostly Section B/C answers carrying embedded reasoning) - rebalanced via trimming over-long correct answers and lengthening short distractors down to zero violations. A Jaccard overlap check against both new lessons caught 3 near-duplicate question stems echoing the lessons&#39; own practice wording - all three reworded with fresh scenarios (a beet-harvesting farmer, a solid-vs-layered corm cut-away, a potato sprouting in a dark cupboard). All three SVG diagrams (cactus, duckweed, tuber/bulb/rhizome/corm comparison) rasterized and visually verified - one text-clipping bug on the duckweed diagram found and fixed (viewBox widened from 320 to 400 to stop the "tiny floating leaves"/"short, dangling roots" captions running past the edge). Scoring engine verified via a Node harness (perfect run 20/20, correct 4/6/10 split; all-wrong run 0/20). Zero hint-leak flags. <strong>TAKEN 3 Aug 2026: 20/20 (100%) - PASS, PERFECT SCORE, the program&#39;s FOURTH perfect score (after U8, U21, U27).</strong> Section A 4/4 (100%), Section B 6/6 (100%), Section C 10/10 (100%). Headline: BOTH priority watch-items CONFIRMED CLOSED on the first dedicated attempt - the ASMOPSS 2024 retake&#39;s duckweed-roots gap, and the stale, 30+-unit-old underground-stem 4-way classification gap. Zero new gaps surfaced anywhere in the test. Results saved to `Lessons\\Tests\\Results\\SCI_U033_Results_2026-08-03.json`.',
      status: 'done'
    },
    {
      n: 32, badge: 'linear-gradient(135deg,#2e7d32,#1565c0)',
      title: 'Physics: Heat, Temperature &amp; Materials',
      tags: [
        { t:'&#9989; 18/20 (90%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Anther/stigma/ovary CLOSED (1st try)', c:'tgreen' },
        { t:'Cold-metal illusion gap found', c:'torange' },
        { t:'Multi-transfer identification gap', c:'torange' }
      ],
      note: '23rd assessment of the program, and the second of the final, prediction-driven 5-unit sequence before ASMOPSS 2026 (9 Aug). Lesson 1 `Heat_Lesson_HeatVsTemperature.html` (green, 8 screens) opens with an ESCALATED anther/stigma/ovary Quick Fix - after the verbal-mnemonic fix failed identically twice in Unit 31 (Q8, Q16), and an independent ASMOPSS 2024 G4 Set B retake (1 Aug 2026) found the same swap on a real diagram-labelling question (Q32) - moving to a genuinely different teaching device: an interactive 3-way click-to-sort mini-game (MAKES/anther, CATCHES/stigma, BECOMES/ovary+ovule), extended from Unit 26&#39;s 2-bin stamen/pistil sorter to force explicit 3-way discrimination between all the previously-confused parts at once. Remaining screens teach heat vs temperature (bathtub-vs-teacup analogy) and measuring temperature on the Celsius scale (0&deg;C/37&deg;C/100&deg;C reference points, SVG thermometer diagram). Lesson 2 `Heat_Lesson_TransferAndMaterials.html` (blue, 7 screens) covers the three ways heat travels (conduction/convection/radiation, SVG diagram), insulators vs conductors of heat (bridging Unit 6&#39;s electrical-conductor content), and melting/freezing/boiling points including the melting-point-equals-freezing-point insight. Test `Tests\\Unit_32_Test_HeatTemperatureAndMaterials.html` (20Q, 4A/6B/10C, PASS_BAR 16) covers heat/temperature/materials content plus two dedicated anther/stigma/ovary confirming reps - a bare-recall stigma question (Section A) and a harder 3-part applied bee-pollination ordering question (Section C) - the third consecutive escalated attempt at this fact. Position distribution exact 5/5/5/5. An initial length-margin pass found 12 questions over the 25% threshold (mostly Section C critique-style answers carrying embedded reasoning) - rebalanced via trimming over-long correct answers and lengthening short distractors down to zero violations (one numeric Celsius-value question retained a 36% margin as an accepted exception, since its option lengths are fixed by the real reference-point values). A Jaccard overlap check against both new lessons caught 2 near-duplicate question stems echoing the lesson&#39;s own practice/Quick-Check wording (the flower bare-recall question, and the boiling-point question) - both reworded with fresh phrasing. Both new SVG diagrams (thermometer, conduction/convection/radiation) rasterized and visually verified with no bugs found. Scoring engine verified via a Node harness (perfect run 20/20, correct 4/6/10 split; all-wrong run 0/20). Zero hint-leak flags. <strong>TAKEN 2 Aug 2026: 18/20 (90%) - PASS.</strong> Section A held perfect at 4/4 (100%), Section B a PERFECT 6/6 (100%), Section C 8/10 (80%). Headline: the escalated anther/stigma/ovary 3-bin sort-game Quick Fix worked cleanly on the FIRST attempt (Q1, Q11 both correct) - the third confirmed instance of the "escalate to a different teaching device" strategy working in this program. Two new gaps surfaced in Section C: Q12 (a cold-metal illusion critique - a metal spoon feels colder than a wooden spoon despite being the same temperature) and Q16 (a simultaneous multi-transfer-type identification miss - a campfire scene showing conduction, convection, and radiation all at once). Results saved to `Lessons\\Tests\\Results\\SCI_U032_Results_2026-08-02.json`.',
      status: 'done'
    },
    {
      n: 31, badge: 'linear-gradient(135deg,#2e7d32,#1565c0)',
      title: 'Biology: Classification &amp; Digestion',
      tags: [
        { t:'&#9989; 16/20 (80%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Anther/ovary Quick Fix FAILED (2x)', c:'torange' },
        { t:'Germination-light RESOLVED', c:'tgreen' },
        { t:'2 new gaps: analogy-transfer, fair-test', c:'tblue' }
      ],
      note: '22nd assessment of the program, and the first of a final, prediction-driven 5-unit sequence for the last week before ASMOPSS 2026 (9 Aug). Built by cross-referencing five past ASMOPSS papers (2022/2023/2024 National Selection G4-6 + 2024/2025 G4 Set B) for recurring themes against Prem&#39;s known gaps. Two lessons: Lesson 1 opens with a Quick Fix on Milestone 3&#39;s two Biology regressions (anther-vs-ovary, germination-light bare recall) before teaching the vertebrate/invertebrate backbone split and the five vertebrate groups; Lesson 2 covers the digestive journey and enzymes, a topic confirmed never yet taught despite recurring on real ASMOPSS papers. Test: 20Q (4A/6B/10C, pass bar 16/20), position-balanced exact 5/5/5/5, zero length-margin violations, a Jaccard overlap check caught and fixed 3 near-duplicates (2 distractor options echoing Unit 11&#39;s own test, 1 flower-part question echoing Units 17/25&#39;s lesson practice), and a tag-balance sweep caught and fixed one unclosed &lt;p&gt; tag. Scoring engine verified via a Node harness (perfect run 20/20, correct 4/6/10 split; all-wrong run 0/20). <strong>TAKEN 31 Jul 2026: 16/20 (80%) - PASS, right at the pass bar.</strong> Section A held perfect at 4/4 (100%), Section B 5/6 (83%), Section C 7/10 (70%). Headline: the anther-vs-ovary Quick Fix FAILED both dedicated confirming reps, identically each time (Q8, Q16), directly motivating the escalation to Unit 32&#39;s 3-way JOB-sort mini-game. The germination-light Quick Fix, by contrast, fully RESOLVED (Q4, Q17 both correct). Two new gaps surfaced: Q15 (analogy-transfer, root hairs to villi) and Q19 (fair-test "what was kept the same" variable confusion). Results saved to `Lessons\\Tests\\Results\\SCI_U031_Results_2026-07-31.json`.',
      status: 'done'
    },
    {
      n: 'M3', badge: 'linear-gradient(135deg,#DAA520,#8a6a00)',
      title: 'Milestone Test 3 - All Units (U21-U30)',
      tags: [
        { t:'&#9989; 34/40, 90/100 marks (90%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Section C PERFECT 8/8 (2nd straight)', c:'tgreen' },
        { t:'Anther/ovary REGRESSED', c:'torange' },
        { t:'Air-resistance + induction cracked fresh', c:'tblue' }
      ],
      note: '21st assessment of the program, following the one-milestone-per-10-units pattern. 40 questions, ASMOPSS-style weighted marks (Section A 16Q &times; 1.25 = 20 marks, Section B 16Q &times; 2.5 = 40 marks, Section C 8Q &times; 5 = 40 marks, 100 total, 80 pass bar) - exact same format as Milestone Tests 1 and 2. Covers cumulative content from U21-U29 (Physics: gravity/air resistance, static electricity, speed/distance/time, energy/forces/simple machines; Biology: nutrition/vitamins, seeds/reproduction/dispersal; Chemistry: density/buoyancy/thermal expansion; Earth &amp; Space: solar system models, Earth&#39;s tilt &amp; seasons) - U30 was review-only with no new content, so its material is folded into the same U21-U29 coverage. Two carried-forward items from U30&#39;s real result get dedicated coverage: the force-for-distance bare-recall trade-off (now a CONFIRMED 2-instance recurring gap after U29&#39;s Q2 and U30&#39;s Q4) gets a bare-recall question plus applied confirming reps, and the NEW anther-vs-stigma pollen producer/receiver confusion (U30&#39;s Q7) gets a bare-recall question plus an applied bee-pollination question. U30&#39;s own two priority closures - 3-force multi-step grouping (Competition C2 Q24) and magnet-pole diagram-reading care (Competition C2 Q19b/c) - each get one confirming rep. Benchmarked against Milestone Test 2&#39;s 95/100. Built under the ANSWER-BALANCE RULE: an initial draft came in badly skewed on position ({1:5, 2:18, 3:16, 4:1}) - fixed via a new bulk position-rebalancing script (reorders each question&#39;s options to a deterministic target position while preserving the correct answer and all three distractor texts) down to an exact 10/10/10/10 split. A length-margin pass found 15 questions over the 25% threshold - fixed via targeted rewording (shortening over-long Section C critique answers, lengthening under-short ones). A Jaccard overlap check against all ten U21-U30 lesson files and all ten U21-U30 test files caught 15 near-duplicates on the first pass (several of the deliberate confirming-rep questions echoing their own source material too closely, since a milestone test resweeping prior content is a live overlap risk) - all reworded with fresh scenarios, objects, and numbers while preserving the exact skill and answer; a second overlap pass caught 4 more near-duplicates from formulaic template phrasing shared with lesson practice questions (e.g. "Using [formula], what is X?") - reworded again down to zero flags. Critically, the reword-then-reverify pass caught SIX stale cross-references the rewordings had left behind (options or "why" explanations still naming the OLD object/number from before a reword, no longer matching the updated question stem - e.g. a frisbee-and-marble question whose options still said "bowling ball"/"ping-pong ball", and four "why" fields with stale arithmetic) - all six found via a full manual line-by-line fact re-derivation (not caught by any automated check) and fixed before reaching Prem, directly following the standing project rule that rewording for overlap can silently break factual correctness. Scoring engine verified via a Node harness (perfect run 40/40 correct, 100/100 marks, correct 16/16/8 section split; all-wrong run 0/40, 0/100 marks). Full 10-year-old role-play verification pass completed end-to-end - instructions clear and actionable, no hint-leaking options anywhere, all facts accurate, nav and save mechanism confirmed. <strong>TAKEN 30 Jul 2026: 34/40, 90/100 marks (90%) - PASS</strong>, the lowest of the three milestones so far, still comfortable. Section C went a PERFECT 8/8 for the second consecutive milestone test. Three confirming reps held (force-for-distance, 3-force grouping, magnet-pole) and the anther-vs-stigma applied check passed, but the anther-vs-ovary confusion REGRESSED after being closed by Unit 30, and two previously-solid facts (air-resistance/gravity, electrostatic induction) cracked for the first time under fresh framings. Only 10 days remained to ASMOPSS at analysis time - Lui chose a prediction-driven final-5-units plan (Units 31-35 + 2 mock tests) built from five past ASMOPSS papers, over a fresh unrelated unit.',
      status: 'done'
    },
    {
      n: 30, badge: 'linear-gradient(135deg,#DAA520,#8a6a00)',
      title: 'Gap-Closure Checkpoint (Units 21-29 review)',
      tags: [
        { t:'&#9989; 18/20 (90%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'C2 Q24 (3-force) CONFIRMED closed', c:'tgreen' },
        { t:'Magnet-pole care CONFIRMED closed', c:'tblue' },
        { t:'Force-for-distance 2x recurring gap', c:'torange' }
      ],
      note: 'Tenth and final unit of the U21-U30 gap-closure cycle, review-only - NO new lessons, following the U20 precedent. Priority target: Unit 29&#39;s new 3-force multi-step grouping gap (Q13). Also resweeps: U28&#39;s hemisphere/distance gaps (CONFIRMED CLOSED, light-touch confirming rep), the magnet-pole diagram-reading care habit (Competition C2 Q19b/c, never yet re-tested), Milestone Test 2&#39;s three isolated Section A slips, Unit 29&#39;s isolated Q2 slip, and general coverage across gravity/air resistance, static induction, density/thermal expansion, seeds/reproduction, speed/distance/time, solar system models, and mechanical energy. `Checkpoint_U30_Review.html` (gold/amber theme matching U20) opens with 10 recap cards (one per U21-U29 topic, plus a bonus U3 magnets card), each linking back to its full source lesson, followed by a Priority Refresher on combining three forces (an explicit 3-step sort-combine-subtract rulebar plus 2 Quick Checks). Test `Tests\\Unit_30_Test_GapClosureCheckpoint.html` (20Q, 4A/6B/10C, PASS_BAR 16, gold theme) resweeps all of the above, including two brand-new 3-force grouping questions (Q11, Q12) built directly off U29&#39;s Q13 miss. Position distribution exact 5/5/5/5 after fixing a drafting slip. An initial length-margin pass found 12 questions over a 25% margin (up to 140.6%) - rebalanced down to zero violations. A Jaccard overlap check against all nine U21-U29 lesson files, U3&#39;s magnet lesson, and all nine U21-U29 test files caught 5 near-duplicates - all four affected questions reworded with fresh scenarios (a sunlit glass marble, a campsite lantern, named-country hemisphere pairs, a ramp-trade framing) while preserving the exact skill tested; re-verification found zero flags remaining, and also caught a factual answer-key error one of the rewordings had introduced (a hemisphere question whose new scenario no longer matched its answer key) - fixed and re-verified before it reached Prem. Scoring engine verified via a Node harness (perfect run 20/20, all-wrong run 0/20, correct 4/6/10 section split). Full 10-year-old role-play verification pass completed end-to-end across both the Review page and the test. **Taken 27 Jul 2026: Section A 3/4, Section B 5/6, Section C 10/10 PERFECT - 18/20 (90%), PASS, matching Unit 29&#39;s result and closing out the entire U21-U30 gap-closure cycle.** Headline finding: Section C&#39;s perfect 10/10 directly validates BOTH priority targets - the two brand-new 3-force questions (Q11, Q12) confirm Competition C2&#39;s Q24 gap (force combination) is now fully CLOSED, and the magnet-pole question (Q13) confirms Competition C2&#39;s Q19b/c diagram-reading care habit is CLOSED - the first re-test of that loose end since the original competition sitting. Two misses: Q4 (force-for-distance bare recall) mirrors U29&#39;s Q2 miss exactly, now a CONFIRMED 2-instance recurring gap in abstract restatement (applied versions remain solid). Q7 is a NEW, narrower gap - anther-vs-stigma (producer vs receiver of pollen), distinct from the already-solid anther-vs-ovary distinction (Q14 correct). Both gaps get dedicated coverage in Milestone Test 3. Results saved to `Lessons\\Tests\\Results\\SCI_U030_Results_2026-07-27.json`.',
      status: 'done'
    },
    {
      n: 29, badge: 'linear-gradient(135deg,#2E7D32,#1565C0)',
      title: 'Physics: Energy, Forces &amp; Simple Machines',
      tags: [
        { t:'&#9989; 18/20 (90%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Both U28 gaps CONFIRMED closed', c:'tgreen' },
        { t:'C2 Q29 CONFIRMED closed', c:'tblue' },
        { t:'New 3-force grouping gap (Q13)', c:'torange' }
      ],
      note: 'Ninth unit of the U21-U30 gap-closure cycle, extending Units 18-19&#39;s energy content and lightly introducing Competition C2&#39;s Q29 (mechanical energy calculation) plus a plain-language, non-vector introduction to Q24 (force combination). Opens with a &quot;Quick Fix from Unit 28&quot; screen (2 Quick Checks) re-drilling U28&#39;s two real-result gaps - the derive-then-flip 2-step hemisphere check, and the distance-plays-zero-role absolutism - a cross-subject Quick Fix following the U23 precedent. Lesson 1 `Energy_Lesson_SimpleMachinesAndWork.html` (green, 8 screens: pocket map, Quick Fix from Unit 28, Quick Recall from Units 10 &amp; 18, why, &quot;What Does Work Really Mean?&quot; [SVG: pushing a box that moves vs pushing a wall that doesn&#39;t, Work = Force &times; Distance moved, zero work if nothing moves, foreshadowing the hovering-helicopter idea], &quot;Simple Machines: Trading Force for Distance&quot; [SVG of a long, gentle ramp with a heavy ball and a dashed height-reference line], decision tree [lever/ramp/pulley selection], 5Q practice). Lesson 2 `Energy_Lesson_MechanicalEnergyAndCombiningForces.html` (blue, 7 screens: pocket map, Quick Recall from Lesson 1, why, &quot;Calculating Stored Energy &amp; Lifting Force&quot; [formula GPE = mass &times; 10 &times; height, Force = mass &times; 10, worked example: a 2 kg toy drone hovering 5 m, explicitly framing &quot;10&quot; as a taught simplification of gravity&#39;s real ~9.8 pulling strength, bridging U18 and U21], &quot;Combining Forces: Add or Cancel?&quot; [SVG extending U10&#39;s tug-of-war analogy: same-direction forces add fully, opposite-direction forces subtract, equal-and-opposite forces cancel completely], decision tree, 5Q practice). Test `Tests\\Unit_29_Test_EnergyForcesSimpleMachines.html` (20Q, 4A/6B/10C, PASS_BAR 16) covers work/machine basics, GPE and lifting-force calculations, same-vs-opposite-direction force combination, an embedded Earth &amp; Space re-test of U28&#39;s derive-then-flip gap (Q10) and its distance-absolutism gap (Q18), plus Section C critique/synthesis questions (the &quot;10&quot; simplification vs exact truth, a crane-holding-still zero-work question, a 3-force combination problem, a lever/see-saw application, a pulley application, equal-opposite tow-truck cancellation, an 8kg&times;2m-vs-2kg&times;8m trick question, and a final helicopter-hovering force-vs-work synthesis question). Force-combination content deliberately excludes the real competition&#39;s vector-triangle geometry, per the Executive Summary&#39;s own prior recommendation that this is beyond G4 level. Position distribution exact 5/5/5/5 after fixing two drafting errors. An initial length-margin pass found 11 questions over a 25% margin (up to 118.8%) - rebalanced down to zero violations. A Jaccard overlap check against both new lessons caught 3 near-duplicates (all against Lesson 2&#39;s own practice questions) - all three reworded with fresh scenarios (a cliff-edge rock, a shopper&#39;s rice sack, a school sports-day box-carry); a stricter cross-unit check against Units 10, 18 &amp; 21&#39;s own lesson files found zero overlaps. Two SVG diagrams were rasterized and visually verified, with a confusing ramp-diagram wording bug and a text-overlap bug both found and fixed. Scoring engine verified via a Node harness (perfect run 20/20, all-wrong run 0/20, correct 4/6/10 section split). Full 10-year-old role-play verification pass completed end-to-end. **Taken 24 Jul 2026: Section A 3/4, Section B 6/6, Section C 9/10 - 18/20 (90%), PASS, the best result since U27&#39;s perfect score.** Headline finding: BOTH of U28&#39;s carried-forward gaps are CONFIRMED CLOSED on the first attempt - the derive-then-flip hemisphere re-test (Q10) and the distance-absolutism re-test (Q18) were both answered correctly. Competition C2&#39;s Q29 gap (mechanical energy calculation) is also CONFIRMED CLOSED - every GPE/lifting-force question, including a trick question, was correct. Two isolated misses: Q2 (an isolated recall-vs-application split on force-for-distance phrasing - the identical trade was applied correctly twice elsewhere) and Q13 (a genuinely new gap - combining THREE forces requires grouping by direction FIRST, but all three magnitudes were added together instead; every individual two-force question was correct, isolating the gap to the multi-step grouping sequence). Directly targeted by Unit 30&#39;s Priority Refresher. Results saved to `Lessons\\Tests\\Results\\SCI_U029_Results_2026-07-24.json`.',
      status: 'done'
    },
    {
      n: 28, badge: 'linear-gradient(135deg,#2E7D32,#1565C0)',
      title: 'Earth &amp; Space: Earth&#39;s Tilt &amp; the Seasons',
      tags: [
        { t:'&#9989; 16/20 (80%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'C2 Q25 PARTIALLY closed', c:'torange' },
        { t:'Derive-then-flip gap found', c:'tblue' },
        { t:'Distance-absolutism gap found', c:'torange' }
      ],
      note: 'Eighth unit of the U21-U30 gap-closure cycle, extending Unit 7&#39;s astronomy content and directly targeting Competition C2&#39;s Q25 gap (hemisphere-reversed seasons). Lesson 1 `Seasons_Lesson_EarthsTiltAndSeasons.html` (green, 7 screens: pocket map, Quick Recall of Unit 7&#39;s rotation/revolution facts, why, THE TILT screen with an SVG diagram showing Earth at its June and December orbit positions and how the fixed 23.5&deg; tilt points the same hemisphere toward or away from the Sun at different times of year, a MYTH VS MECHANISM screen busting the &quot;seasons are caused by distance&quot; myth with an SVG comparing direct vs slanted sunlight rays plus the real fact that Earth is closest to the Sun in January and farthest in July, decision tree, 5Q practice). Lesson 2 `Seasons_Lesson_HemisphereReversal.html` (blue, 7 screens: pocket map, Quick Recall, why [a Scientist&#39;s Tool screen on transferring a rule to a new, unshown case], THE REVERSAL screen with a full 4-way hemisphere season-pairing table (Summer&harr;Winter, Autumn&harr;Spring), real-life applications [Christmas in Australia = summer, reversed school-holiday months, the equator exception], decision tree, 5Q practice). Test `Tests\\Unit_28_Test_EarthsTiltAndTheSeasons.html` (20Q, 4A/6B/10C, PASS_BAR 16) covers tilt basics, applying tilt direction to hemisphere seasons, the distance myth-bust, and applied scientific-reasoning questions (critiquing claims, transferring the direct-vs-slanted-rays logic to a new context, the equator exception, day-length reasoning). Position distribution exact 5/5/5/5. An initial length-margin pass found 9 questions over a 25% margin (up to 114% on one) - rebalanced across two rounds of edits down to a max 24.1% margin, none over. A Jaccard overlap check against both new lessons caught two near-duplicate questions (echoing Lesson 2&#39;s own practice wording) - both reworded with fresh scenario framings; a stricter cross-unit check against Unit 7&#39;s own lesson files found zero overlaps. One SVG text-overlap bug (December-position labels colliding with the Earth graphic) was found via rasterization and fixed. Scoring engine verified via a Node harness (perfect run 20/20, all-wrong run 0/20, correct 4/6/10 section split). **Taken 23 Jul 2026: Section A 4/4, Section B 3/6, Section C 9/10 - 16/20 (80%), PASS, right at the pass bar.** Headline finding: Competition C2&#39;s Q25 gap (hemisphere-reversed seasons) is **PARTIALLY closed** - the reversal rule itself holds when the season word is given directly (Q12) or reasoned about abstractly (Q7, Q17, Q19), but breaks down specifically when Prem must first derive one hemisphere&#39;s season himself (from a physical description or scene) before flipping it for the other - both Q6 and Q10 were missed, with the SAME season given for both hemispheres instead of the correct opposite. A second gap: the &quot;distance doesn&#39;t cause seasons&quot; myth-bust is only partially absolute - Q9 and Q18 were both missed, with Prem still giving distance partial credit when asked point-blank whether it plays any role at all, even though the relative facts (Q11, Q13, Q16) are all solid. Both gaps are directly targeted by Unit 29&#39;s opening Quick Fix screen. Results saved to `Lessons\\Tests\\Results\\SCI_U028_Results_2026-07-23.json`.',
      status: 'done'
    },
    {
      n: 27, badge: 'linear-gradient(135deg,#2E7D32,#1565C0)',
      title: 'Earth &amp; Space: Models of the Solar System',
      tags: [
        { t:'&#9989; 20/20 (100%) PERFECT', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'C2 Q23 (Venus phases) CLOSED', c:'tgreen' },
        { t:'Zero misses, all 3 sections', c:'tblue' },
        { t:'3rd perfect score of program', c:'torange' }
      ],
      note: 'Seventh unit of the U21-U30 gap-closure cycle, extending Unit 7&#39;s solar-system content and directly targeting Competition C2&#39;s Q23 gap (heliocentric vs geocentric models, Venus&#39;s phases). Lesson 1 `SolarSystem_Lesson_GeocentricVsHeliocentric.html` (green, 7 screens: pocket map, Quick Recall of Unit 7&#39;s Sun-centred layout, why, the old GEOCENTRIC idea with an SVG diagram and the real historical reasoning behind why it was a genuinely reasonable belief before telescopes, the new HELIOCENTRIC idea with an SVG diagram bridging directly to what Unit 7 already taught as fact and naming Copernicus, decision tree distinguishing the two models, 5Q practice). Lesson 2 `SolarSystem_Lesson_VenusPhasesEvidence.html` (blue, 7 screens: pocket map, Quick Recall, why [a Scientist&#39;s Tool screen on testing between two equally-fitting ideas via a new, different prediction], Venus showing phases like the Moon [bridging Unit 7], a two-panel SVG diagram comparing the geocentric prediction (crescent-only) against the heliocentric prediction (full range) plus Galileo&#39;s actual 1610 telescope observation, decision tree, 5Q practice). Test `Tests\\Unit_27_Test_ModelsOfTheSolarSystem.html` (20Q, 4A/6B/10C, PASS_BAR 16) covers both models, Copernicus and Galileo, Venus&#39;s phases, and applied scientific-reasoning questions critiquing claims about the history of science. Position distribution exact 5/5/5/5. An initial length-margin pass found 12 questions with a uniquely-longest correct answer (up to 186% margin) - rebalanced down to a max ~24% margin, none over; a position-balance bug was also caught and fixed (Q20&#39;s correct answer was drafted at the wrong index). A Jaccard overlap check against both new lessons found zero near-duplicate questions. Both new SVG diagrams were rasterized and visually verified - one caption-text overflow bug found and fixed. Scoring engine verified via a Node harness (perfect run 20/20, all-wrong run 0/20, correct 4/6/10 section split). **Taken 23 Jul 2026: Section A 4/4, Section B 6/6, Section C 10/10 - 20/20 (100%), PASS, PERFECT SCORE - the program&#39;s third (after U8, U21).** Headline finding: Competition C2&#39;s Q23 gap (heliocentric vs geocentric models, Venus&#39;s phases as evidence) is CONFIRMED CLOSED - zero misses across all three sections on a topic taught for the first time this unit, beyond Unit 7&#39;s basic Sun-centred-layout fact. Results saved to `Lessons\\Tests\\Results\\SCI_U027_Results_2026-07-23.json`.',
      status: 'done'
    },
    {
      n: 26, badge: 'linear-gradient(135deg,#1565C0,#66BB6A)',
      title: 'Physics: Speed, Distance &amp; Time',
      tags: [
        { t:'&#9989; 19/20 (95%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Both escalated Quick Fixes CLOSED', c:'tgreen' },
        { t:'Section C perfect 10/10', c:'tblue' },
        { t:'One isolated formula slip (Q3)', c:'torange' }
      ],
      note: 'Sixth unit of the U21-U30 gap-closure cycle, a new foundational Physics topic touching the plain-language idea behind Competition C2&#39;s Q28 (average speed) without needing the underlying algebra. Also carries two ESCALATED Quick Fixes for U25&#39;s two significant unresolved gaps - the stamen/pistil (anther-vs-ovary) confusion, CONFIRMED twice within U25&#39;s single test (Q3 bare recall, Q18 descriptive scenario), and the Iron/oxygen fact, now failed on a THIRD consecutive attempt across three different framings (U22 diet-symptom, U23 breathless-athlete, U25 blood-test) - both moved to genuinely different teaching devices rather than another quiz-style re-test, following the precedent set by U24&#39;s successful resolution of the null-result fair-test gap via a coin-flip analogy. Lesson 1 `SpeedDistanceTime_Lesson_WhatIsSpeed.html` (green, 8 screens: pocket map, an ESCALATED Iron Quick Fix using a brand-new "delivery-truck" analogy [iron atoms as trucks whose one job is carrying oxygen] with 2 quick-checks, an ESCALATED stamen/pistil Quick Fix using an interactive click-to-sort mini-game [5 flower parts sorted into STAMEN/PISTIL bins with immediate feedback, replacing passive diagram-viewing with active retrieval practice], why, the Speed = Distance &divide; Time formula with a worked example, comparing speeds with a cheetah-vs-greyhound worked example, decision tree, 5Q practice). Lesson 2 `SpeedDistanceTime_Lesson_TheDSTTriangle.html` (blue, 8 screens: pocket map, Quick Recall, why, the full Distance-Speed-Time cover-up triangle with an SVG diagram and all three rearranged formulas, worked examples including a unit-conversion caution, a NEW "Average Speed" screen explaining - without algebra - why equal-distance segments at different speeds do NOT average to the simple midpoint, decision tree, 5Q practice). Test `Tests\\Unit_26_Test_SpeedDistanceTime.html` (20Q, 4A/6B/10C, PASS_BAR 16) covers the speed formula and all three rearrangements, comparing speeds, the average-speed concept, and fair-test reasoning applied to speed comparisons, plus one re-test question each for Iron (4th framing: supplement-bottle-label) and stamen/pistil (3rd framing: mislabelled-diagram correction). Position distribution exact 5/5/5/5. An initial length-margin pass found 5 questions with a uniquely-longest correct answer (up to 90% margin) - rebalanced down to a max ~22% margin, none over. A Jaccard overlap check caught two near-duplicate calculation questions echoing lesson practice wording - both reworded with fresh vehicles/contexts. The new DST-triangle SVG diagram was rasterized and visually verified with no bugs found. Scoring engine verified via a Node harness (perfect run 20/20, all-wrong run 0/20, correct 4/6/10 section split). **Taken 22 Jul 2026: Section A 3/4, Section B 6/6, Section C 10/10 - 19/20 (95%), PASS, a strong bounce-back from U25&#39;s fail.** Headline finding: BOTH of U25&#39;s escalated Quick Fixes worked on the first attempt - the Iron re-test (Q9) and the stamen/pistil re-test (Q10) were both answered correctly, closing two significant, multi-attempt gaps in a single unit - the second confirmed instance of the "escalate to a different teaching device" principle working in this program. One isolated miss: Q3 (a bare Time-formula recall slip) did not carry into either applied time-calculation question later in the test. Results saved to `Lessons\\Tests\\Results\\SCI_U026_Results_2026-07-22.json`.',
      status: 'done'
    },
    {
      n: 25, badge: 'linear-gradient(135deg,#2E7D32,#66BB6A)',
      title: 'Biology: Seeds, Plant Reproduction &amp; Dispersal',
      tags: [
        { t:'&#9888; 14/20 (70%) FAIL', s:'background:#ffe0b2;color:#c05621;font-weight:700' },
        { t:'Stamen/pistil CONFIRMED (2x)', c:'torange' },
        { t:'Iron 3rd consecutive fail', c:'torange' },
        { t:'Germination app-split found', c:'tblue' }
      ],
      note: 'Fifth unit of the U21-U30 gap-closure cycle, targeting Milestone Test 2&#39;s Q9 (germination soil-vs-warmth confusion) and Q10 (anther-vs-ovary mix-up), plus carrying forward the still-open Iron symptom-to-nutrient gap from U22/U23. Lesson 1 `Seeds_Lesson_GerminationToSeedling.html` (green, 8 screens: pocket map, an escalated Iron re-test Quick Fix screen with 2 Quick Checks split into symptom-recognition vs causal-mechanism testing - since two prior attempts [U22, U23] both defaulted to Calcium - Quick Recall of U17&#39;s germination rule, why, "The Real Reasons Behind the Rule" [WHY warmth matters via temperature-sensitive helper substances, WHY soil isn&#39;t needed yet via the seed&#39;s own stored food], a NEW "Seed to Seedling" stage-transition screen [germinating seed vs growing seedling needs], decision tree, 5Q practice). Lesson 2 `Seeds_Lesson_ReproductionAndDispersal.html` (blue, 8 screens: pocket map, Quick Recall, why, a Male vs Female flower-parts recap WITH a new labelled flower-anatomy SVG diagram directly targeting the anther-vs-ovary confusion, the full pollination-fertilization-seed cycle recap, NEW seed dispersal content [wind/animal/water] with an SVG diagram, decision tree, 5Q practice). Test `Tests\\Unit_25_Test_SeedsPlantReproduction.html` (20Q, 4A/6B/10C, PASS_BAR 16) directly re-tests M2&#39;s Q9 and Q10 gaps across multiple fresh framings, plus a third, differently-framed Iron question (a blood-test scenario) to further triangulate whether the gap is the oxygen-carrying fact itself or general symptom recognition. Position distribution exact 5/5/5/5. An initial length-margin pass found the correct answer was the longest option in 9/20 questions (one with a 101% margin) - rebalanced across one round of edits down to 6/20, all under a ~21% margin. A Jaccard overlap check against both new lessons caught three near-duplicates (a definitional pollination question, a male-team stamen question, and a water-dispersal question all echoing lesson practice wording too closely) - all three reworded with fresh framings and examples. Both new SVG diagrams (flower anatomy cross-section, seed dispersal methods) rasterized and visually verified with no bugs found. Scoring engine verified via a Node harness (20 valid questions, correct 4/6/10 section split). **Taken 21 Jul 2026: Section A 3/4, Section B 4/6, Section C 7/10 - 14/20 (70%), FAIL, ties Unit 13 as the lowest score of the program.** Headline finding: the stamen/pistil confusion is now **CONFIRMED** across two question formats in this one test (Q3 bare recall missed, Q18 descriptive scenario missed - reversed labels). The Iron/oxygen fact **failed a THIRD consecutive attempt** (Q9, blood-test scenario) with a NEW error signature - no longer the old Calcium-default guess, meaning the core fact itself, not just a guessing habit, remains unretained. Germination shows a **bare-recall-vs-application split** (Q1 correct, Q13 wrong), matching the pattern first seen in the U13&rarr;U14&rarr;U15 light-source arc - Milestone 2&#39;s Q9 germination gap is only PARTIALLY closed. Two lighter, likely isolated misses round out the result (Q10 dispersal feature, Q15 pollination vocabulary). Both major gaps escalated to genuinely different teaching approaches (a delivery-truck analogy for Iron, an interactive sorting game for stamen/pistil) in U26, following U24&#39;s successful precedent of escalating rather than repeating a lighter fix. Results saved to `Lessons\\Tests\\Results\\SCI_U025_Results_2026-07-21.json`.',
      status: 'done'
    },
    {
      n: 24, badge: 'linear-gradient(135deg,#0097A7,#4DD0E1)',
      title: 'Chemistry: Density, Buoyancy &amp; Thermal Expansion',
      tags: [
        { t:'&#9989; 19/20 (95%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Q27/Q30 CONFIRMED closed', c:'tgreen' },
        { t:'Null-result gap RESOLVED (3rd attempt)', c:'tblue' },
        { t:'One light framing-specific slip (Q16)', c:'torange' }
      ],
      note: 'Fourth unit of the U21-U30 gap-closure cycle, extending U15&#39;s density/buoyancy content into calculation and temperature effects. Lesson 1 `Density_Lesson_CalculatingDensity.html` (green, 8 screens: pocket map, an ESCALATED "Quick Fix" screen for the null-result fair-test gap that has now failed to close twice [U22, U23] - a coin-flip fairness analogy plus 2 quick-checks, explicitly naming the wrong instinct before correcting it - Quick Recall of U15&#39;s density shortcuts, why, the Density = Mass &divide; Volume formula with a worked example, comparing objects the shortcuts can&#39;t handle, decision tree [shortcut vs calculate], 5Q practice). Lesson 2 `Density_Lesson_ThermalExpansionAndBuoyancy.html` (blue, 8 screens: pocket map, Quick Recall from Lesson 1, why, thermal expansion with a particle-spacing SVG diagram, why heating lowers density, buoyancy &amp; temperature with a hot-air-balloon SVG diagram and a convection-current stove-pot example, PLUS a new teaching callout on why hollow steel ships float despite solid steel being denser than water, decision tree, 5Q practice). Test `Tests\\Unit_24_Test_DensityBuoyancyThermalExpansion.html` (20Q, 4A/6B/10C, PASS_BAR 16) directly targets Competition C2&#39;s Q27 (density calculation, via a gold-ring identification question, Q19) and Q30 (buoyancy vs temperature, via Q9/Q14/Q18/Q20), plus a saucepan-lid null-result fair-test question (Q12) as the THIRD consecutive attempt at that stubborn gap. Position distribution exact 5/5/5/5. An initial length-margin pass found the correct answer was the longest option in 12/20 questions - rebalanced across two rounds of edits down to a max ~16% margin on any single question, with only 4 questions retaining a small unique-longest margin (all under 16%). A Jaccard overlap check caught four near-duplicate mass/volume calculation scenarios that too closely mirrored U24 Lesson 1&#39;s own worked examples and practice questions (a block/rock template) - all four rewritten with fresh objects (toy car, crystal, ornaments, iron ore/granite) and phrasing. Both new SVG diagrams (particle-spacing thermal-expansion diagram, hot-air-balloon buoyancy diagram) rasterized and visually verified - one label-overflow bug (the "cooler air outside" caption running past the viewBox edge) found and fixed. Scoring engine verified via a Node harness (20 valid questions, correct 4/6/10 section split). **Taken 21 Jul 2026: Section A 4/4, Section B 6/6, Section C 9/10 - 19/20 (95%), PASS, the best result since U21&#39;s perfect score.** Headline finding: Competition Q27 (density calculation) and Q30 (buoyancy vs temperature) are both **CONFIRMED CLOSED** - the gold-ring question (Q19) and the full hollow-ship/temperature/buoyancy cluster (Q9, Q14, Q18, Q20) were all answered correctly. Most significantly, **the null-result fair-test gap - stubborn across two prior remediation attempts (U22, U23) - is finally RESOLVED** (Q12, the saucepan-lid experiment, answered correctly), validating the decision to escalate to a genuinely different teaching approach (a coin-flip analogy) rather than repeating the same style of fix a third time. The one miss, Q16 (a heated sealed balloon, "heating adds mass" distractor chosen), reads as a framing-specific slip rather than a fresh gap - the identical same-mass-bigger-volume-lower-density logic was tested in Q13 and Q20, both answered correctly. Results saved to `Lessons\\Tests\\Results\\SCI_U024_Results_2026-07-21.json`.',
      status: 'done'
    },
    {
      n: 23, badge: 'linear-gradient(135deg,#F9A825,#6A1B9A)',
      title: 'Physics: Static Electricity &amp; Electric Charges',
      tags: [
        { t:'&#9989; 16/20 (80%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Q17b induction CONFIRMED closed', c:'tgreen' },
        { t:'Vitamin C closed, Iron persists', c:'tblue' },
        { t:'Null-result gap 2nd consecutive miss', c:'torange' }
      ],
      note: 'Third unit of the U21-U30 gap-closure cycle, and the first static-electricity content anywhere in the program. Lesson 1 `Static_Lesson_ChargesAndFriction.html` (green, 8 screens: pocket map, a "Quick Fix from Unit 22" screen with 3 quick-checks re-drilling the symptom-to-nutrient reverse-lookup [3-step check] and the null-result fair-test teaching note, Quick Recall of U6&#39;s electrons, why, protons/electrons/neutral-vs-charged, charging-by-friction with a balloon-and-hair SVG diagram, decision tree, 5Q practice). Lesson 2 `Static_Lesson_InductionAndEverydayEffects.html` (blue, 8 screens: pocket map, Quick Recall from Lesson 1, why, electrostatic induction/polarisation with a balloon-and-paper SVG diagram [directly targets Competition C2&#39;s Q17b gap], everyday effects [balloon-on-wall, static cling, hair standing up, doorknob shock], lightning with a storm-cloud SVG diagram, decision tree, 5Q practice). Test `Tests\\Unit_23_Test_StaticElectricityElectricCharges.html` (20Q, 4A/6B/10C, PASS_BAR 16) directly targets Q17b (induction), plus embeds 3 fresh-scenario verification questions re-testing both of U22&#39;s open gaps: Q7/Q8 (symptom-to-nutrient, Vitamin C and Iron scenarios) and Q14 (null-result fair test). Built and audited under the new no-definitional-hints rule from the start: Section A uses bare-term options only (grep-checked clean for `, important for`/`, needed`/`, since` patterns). Position distribution exact 5/5/5/5. An initial length-margin pass found Section C&#39;s correct answer was the longest option in 8/10 questions - rebalanced by lengthening distractors across Q11/Q13/Q14/Q16/Q17/Q18/Q19 down to 5/10, matching the natural rate elsewhere in the test. A Jaccard overlap check caught two near-duplicates against the lesson&#39;s own practice/quick-check content (a plastic-rod-and-wool scenario, and an induction claim-correction option) - both rewritten with fresh materials/wording. SVG diagrams rasterized and visually verified (balloon/hair, balloon/paper induction, storm cloud/lightning) - all clear and accurate. Scoring engine verified via a Node harness (ALL CORRECT = 20/20 with correct 4/6/10 section split, ALL WRONG = 0/20). **Taken 20 Jul 2026: Section A 3/4, Section B 5/6, Section C 8/10 - 16/20, PASS, right at the 16/20 bar.** Headline finding: Competition Q17b (electrostatic induction) is **CONFIRMED CLOSED** - all four induction questions (Q4, Q11, Q16, Q19) answered correctly across four different framings. The "Quick Fix from Unit 22" screen partially worked: **the Vitamin C symptom-to-nutrient direction is now CLOSED** (Q7 correct, a fresh mountaineer/scurvy scenario), **but the Iron direction persists** (Q8 wrong, same Calcium-default guess as U22&#39;s Q10, despite an almost identical Quick Check scenario). More concerning: **the null-result fair-test gap failed to close for a SECOND consecutive attempt** (Q14, two identical rubbed rods with the same result, answered "throw this result away" instead of accepting it as a valid finding) - escalated to a dedicated two-rep teaching treatment in U24. Q3 (chose "charging by conduction" over "charging by friction") reads as a test-design artifact - "conduction" was never taught in either U23 lesson, and all 7 other friction-charging questions were correct; flagged as a new standing rule against untaught-vocabulary distractors. Q20 shows a narrow synthesis-level ordering slip (correctly identified both friction AND induction occurred in a two-stage scenario, but reversed which stage was which) - a new combined-scenario format, not a re-emergence of either concept individually. Results saved to `Lessons\\Tests\\Results\\SCI_U023_Results_2026-07-20.json`.',
      status: 'done'
    },
    {
      n: 22, badge: 'linear-gradient(135deg,#1565C0,#64B5F6)',
      title: 'Biology: Nutrition, Vitamins &amp; a Balanced Diet',
      tags: [
        { t:'&#9888; 15/20 (75%) FAIL', s:'background:#ffe0b2;color:#c05621;font-weight:700' },
        { t:'Sections A+B 7/10', c:'tgreen' },
        { t:'Section C 8/10', c:'tblue' },
        { t:'Symptom&rarr;nutrient gap found', c:'torange' }
      ],
      note: 'Second unit of the U21-U30 gap-closure cycle. Lesson 1 `Nutrition_Lesson_NutrientsAndBalancedDiet.html` (green, 7 screens: pocket map, Quick Recall of U11&#39;s digestive system, why, the six nutrient groups [carbohydrates, protein, fats, vitamins &amp; minerals, fibre, water], a balanced-plate pie-chart SVG diagram with a food-group legend, decision tree, 5Q practice). Lesson 2 `Nutrition_Lesson_VitaminsAndMinerals.html` (blue, 8 screens: pocket map, Quick Recall from Lesson 1, why, a key-vitamins-and-minerals grid [A, C, D, calcium, iron], a Vitamin-C food-source SVG diagram, the real story of scurvy and James Lind&#39;s 1747 fair-test experiment aboard HMS Salisbury with a ship SVG diagram, decision tree, 5Q practice). Test `Tests\\Unit_22_Test_NutritionVitaminsBalancedDiet.html` (20Q, 4A/6B/10C, PASS_BAR 16) directly targets Competition C2&#39;s Q18 gap (a Vitamin C fact), plus applies the same fair-test reasoning skill (Lind&#39;s experiment) in a fresh scenario. Built answer-balance-clean from the start: position distribution exact 5/5/5/5, zero length-margin flags after one round of fixes (Q18 and Q14 initially came in over-margin, fixed by rebalancing option lengths). A Jaccard overlap check caught one real near-duplicate - test Q20 mirrored Lesson 2&#39;s own practice Q5 "eat a lot of food" claim-correction template almost exactly - rewritten into a fresh applied-assessment scenario; remaining flags (Vitamin C/Iron/Calcium option-word overlaps) are expected false positives from the small fixed vitamin/mineral vocabulary, same pattern as prior units&#39; umbra/penumbra or magnet-pole term sets. Scoring engine verified via a Node harness (ALL CORRECT = 20/20 with correct 4/6/10 section split, ALL WRONG = 0/20, MIXED matches hand calculation). **Taken 19 Jul 2026: Section A 3/4, Section B 4/6, Section C 8/10 - 15/20, FAIL, below the 16/20 pass bar, the third program fail.** Headline finding: Competition Q18 (Vitamin C) is **NOT yet confirmed closed** - a precise symptom-to-nutrient reverse-reasoning gap found (Q7, Q10, both defaulted to guessing Calcium), distinct from the solid diet-to-deficiency forward reasoning (Q9, Q19 both correct). A new fair-test null-result-interpretation gap also surfaced (Q17, Q12). **Post-hoc integrity fix (19 Jul 2026, flagged by Lui): Q2/Q3/Q4 had hint-leaking options** (a "Term, its-own-defining-clause" format) - fixed to bare-term options for all future takers; Prem&#39;s Q3/Q4 (both already correct) should be read with reduced confidence since he saw the leaked version. Both open gaps are directly targeted by Unit 23&#39;s "Quick Fix from Unit 22" screen and 3 embedded verification questions. Results saved to `Lessons\\Tests\\Results\\SCI_U022_Results_2026-07-19.json`.',
      status: 'done'
    },
    {
      n: 21, badge: 'linear-gradient(135deg,#1565C0,#64B5F6)',
      title: 'Physics: Falling Objects, Gravity &amp; Air Resistance',
      tags: [
        { t:'&#9989; 20/20 (100%) PERFECT', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'All sections 100%', c:'tgreen' },
        { t:'Competition Q16/Q22 CONFIRMED closed', c:'tblue' },
        { t:'Obs-vs-inference now fully closed', c:'torange' }
      ],
      note: 'First unit of a fresh 10-unit rotation, combining Milestone 2 and Competition C2 findings into a single gap-closure plan (U21-U30). Lesson 1 `Gravity_Lesson_WhatIsGravity.html` (green, 7 screens: pocket map, Quick Recall of U10&#39;s mass-vs-weight distinction, why, what gravity does, the surprising same-fall-rate-for-every-mass fact with a strobe-style SVG diagram and a Galileo anecdote, decision tree, 5Q practice). Lesson 2 `Gravity_Lesson_AirResistanceAndFreeFall.html` (blue, 8 screens: pocket map, Quick Recall from Lesson 1, why, what air resistance is [a friction-like force], shape/surface-area SVG diagram, the real 1971 Apollo 15 hammer-and-feather Moon experiment as an SVG reveal tying both lessons together, decision tree, 5Q practice). Test `Tests\\Unit_21_Test_FallingObjectsGravityAirResistance.html` (20Q, 4A/6B/10C, PASS_BAR 16). **Taken 18 Jul 2026: 20/20 (100%), PERFECT - Section A 4/4, Section B 6/6, Section C 10/10.** Every question directly targeting Competition C2&#39;s Q16-vs-Q22 finding was answered correctly, CONFIRMING the gravity/air-resistance gap closed on the first attempt. Bonus: Q17 (an embedded observation-vs-inference question) was also correct - the third clean rep in a row since U18&#39;s refresher, upgrading that skill to fully closed. No new gaps surfaced. Results saved to `Lessons\\Tests\\Results\\SCI_U021_Results_2026-07-18.json`.',
      status: 'done'
    },
    {
      n: 'C2', badge: 'linear-gradient(135deg,#1a237e,#b71c1c)',
      title: 'ASMOPSS 2023 - Science G4-6 (2nd Round National Selection) - Real Competition Paper',
      tags: [
        { t:'&#9888; 19.5/102 - 19% - no pass bar', s:'background:#ffe0b2;color:#c05621;font-weight:700' },
        { t:'Harder round - G4-6 combined', c:'torange' },
        { t:'Score staircases with curriculum level', c:'tblue' },
        { t:'Q16 vs Q22 gravity gap found', c:'tgreen' }
      ],
      note: 'A genuine ASMOPSS Thailand 2023 2nd Round National Selection paper (Science Primary, sat 1 Oct 2023), converted into an interactive, self-scoring test - real diagrams cropped from the original PDF (the bar-magnet photo, all 5 circulatory-system flow diagrams, and the muscle-tissue photo), answers verified against the official ASMOPSS answer key. <strong>This round combines Grades 4, 5 and 6 into one paper and is noticeably harder than Prem&#39;s usual G4 division</strong> - kept as a stretch/challenge paper, no pass/fail bar shown. Taken 17 Jul 2026: <strong>19.5/102 marks (19%).</strong> Score staircases cleanly by part - Part I (MCQ) 12/30 (40%), Part II (blanks) 5.5/30 (partial credit, 1/10 fully correct), Part III (essay/calc) 2/42 (0/5 fully correct) - directly tracking how far each part sits above Prem&#39;s taught G4 curriculum, not a mastery concern. Several blanks were left honestly blank ("Idk", ".", "?") rather than guessed. <strong>Headline finding: Q16 (copper vs paper falling in air, CORRECT) vs Q22 (iron ball/feather on the Moon, WRONG) reveal a half-formed gravity rule</strong> - Prem understands the with-air-resistance fall-rate rule but not yet the no-air/vacuum equal-fall-rate rule - directly targeted by U21. Other real gaps found: Q17b electrostatic induction (untaught), Q19b/c a magnet-pole diagram-reading slip, Q18 a Vitamin C fact, Q27/Q29/Q30 density/energy/buoyancy calculation extensions, Q23/Q25 heliocentric-vs-geocentric Venus phases and hemisphere-reversed seasons. Q24/Q28 (force vectors, algebra-based speed) confirmed genuinely beyond G4. Results saved to `Lessons\\Tests\\Results\\SCI_ASMOPSS2023_G4to6_NationalSelection_Results_2026-07-17.json`.',
      status: 'done'
    },
    {
      n: 'M2', badge: 'linear-gradient(135deg,#DAA520,#8a6a00)',
      title: 'Milestone Test 2 - All Units (U11-U20)',
      tags: [
        { t:'&#9989; 36/40 (95%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Section B+C 32/32 PERFECT', c:'tgreen' },
        { t:'Section A 12/16', c:'tblue' },
        { t:'Both U20 open items CONFIRMED', c:'torange' }
      ],
      note: '11th assessment of the program, following Milestone Test 1&#39;s pattern of one milestone after every 10 unit tests. Taken 17 Jul 2026: <strong>36/40 (95/100 marks, 95%) - PASS</strong>, second-best milestone result after Milestone 1&#39;s 98.75/100. Section A (basic recall) 12/16 (75%) - four misses. Section B (applying) 16/16 (100%) - perfect. Section C (think like a scientist) 8/8 (100%) - perfect. <strong>Headline finding: every single Section B and Section C question was answered correctly</strong> - all four misses fell in the lowest-value Section A recall section. Both of U20&#39;s open items were directly re-tested and both came back correct: Q24 (sunny-vs-dark germination jars) and Q32 (apple/claw-marks observation-vs-inference). But a distinct germination sub-error appeared instead: Q9 (Section A, soil-vs-warmth confusion, NOT the light misconception). The other three misses (Q3 light-source, Q4 cell-wall/membrane, Q10 anther/ovary) are isolated single-fact recall slips with no shared mechanism. Results saved to `Lessons\\Tests\\Results\\SCI_M02_Results_2026-07-17.json`.',
      status: 'done'
    },
    {
      n: 20, badge: 'linear-gradient(135deg,#DAA520,#8a6a00)',
      title: 'Gap-Closure Checkpoint',
      tags: [
        { t:'&#9989; 16/20 (80%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 8/10', c:'tgreen' },
        { t:'Section C 8/10', c:'tblue' },
        { t:'Q30 (tides) CONFIRMED closed', c:'torange' }
      ],
      note: 'Scored 16/20 (80%) - right at the pass bar, Prem&#39;s lowest passing score of the whole cycle, and the tenth and final unit test of the post-Milestone-1 cycle. Section A (mixed gap recall) 3/4 - missed Q4 (germination requirements). Section B (applying gap concepts) 5/6 - missed Q7 (a density fast-read inversion). Section C (think like a scientist) 8/10 - missed Q15 (observation vs inference) and Q18 (germination light-vs-dark). Headline finding: every one of the 3 weighted tide questions was answered correctly, so Competition Q30 (tides) is now CONFIRMED CLOSED - the priority target of this checkpoint. But Q4 and Q18 together UPGRADE the germination "seeds don&#39;t need light" slip (first seen in U17) to a confirmed 2-instance recurring gap, so Competition Q31 is NOT yet confirmed closed. Q7 is a FOURTH confirmed instance of the recurring fast-read MORE/LESS density-inversion pattern (after U6, U10, U15). Q15 shows observation-vs-inference reasoning is still inconsistent across framings. All other previously-tracked gaps (Q9, Q3, Q2/Q17, Q10, Q29, Q14/Q7-nitrogen, Q32, Q13/Q19) were reconfirmed closed. Milestone Test 2 gives dedicated coverage to both open items. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
    },
    {
      n: 19, badge: 'linear-gradient(135deg,#0288D1,#4FC3F7)',
      title: 'Physics: Water Cycle',
      tags: [
        { t:'&#9989; 17/20 (85%) PASS', s:'background:#e6f4ea;color:#1b5e20;font-weight:700' },
        { t:'Sections A+B 9/10', c:'tgreen' },
        { t:'Section C 8/10', c:'tblue' },
        { t:'Q3 CONFIRMED closed &middot; Q30 NOT yet closed', c:'torange' }
      ],
      note: 'Scored 17/20 (85%) - above the 16/20 pass bar, ninth unit of the U11-U20 gap-closure plan. Section A (water cycle basics) 3/4 - missed Q4. Section B (applying water cycle concepts) 6/6 - perfect. Section C (think like a scientist) 8/10 - missed Q15 and Q19. The "Quick Fix from Unit 18" remediation worked on the FIRST attempt - both embedded PE/KE recap questions (Q3 standalone-definition, Q7 moving-object transformation) were answered correctly, confirming Competition Q3 (hydroelectric power) is now CLOSED. Q15 and Q19 reveal a NEW, internally consistent tide-frequency misconception: Prem currently believes tides cycle once a day (one high, one low), not roughly twice a day as taught - Competition Q30 (tides) is therefore NOT yet confirmed closed, and is the priority focus of Unit 20&#39;s Gap-Closure Checkpoint. Q4 (snow vs sleet) was an isolated bare-recall slip, not a pattern. Results saved to Lessons\\Tests\\Results\\.',
      status: 'done'
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
