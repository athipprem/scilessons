/*
  prem_data.js - Single source of truth for Prem's SCIENCE Coach (Luikishi)
  Edit ONLY this file; index.html and the Dashboard both read from it.
  After each unit test: update lastUnit + currentUnit; push scores[]; prepend unitLog[]; adjust skills[]/radar*.
*/
var PREM_DATA = {
  // Meta
  updated:        '22 Jul 2026',
  coachStartDate: '2026-06-28',
  asmopssDate:    '2026-08-09',
  coach:          'Luikishi',
  subject:        'Science',
  goal:           'GOLD medal - ASMOPSS 2026 Science',
  goalShort:      'Gold',

  currentUnit: { n:27, topic:'Earth &amp; Space: Models of the Solar System', status:'Lessons + test ready &middot; seventh unit of the U21-U30 gap-closure cycle, extending Unit 7&#39;s solar-system content and directly targeting Competition C2&#39;s Q23 gap (heliocentric vs geocentric models, Venus&#39;s phases). Lesson 1 `SolarSystem_Lesson_GeocentricVsHeliocentric.html` (green, 7 screens: pocket map, Quick Recall of Unit 7&#39;s Sun-centred layout, why, the old GEOCENTRIC idea (Earth-centred, with an SVG diagram and the real historical reasoning behind why it was a genuinely reasonable belief before telescopes), the new HELIOCENTRIC idea (Sun-centred, with an SVG diagram, bridging directly to what Unit 7 already taught as fact, and naming Copernicus), decision tree distinguishing the two models, 5Q practice). Lesson 2 `SolarSystem_Lesson_VenusPhasesEvidence.html` (blue, 7 screens: pocket map, Quick Recall from Lesson 1, why (a Scientist&#39;s Tool screen on testing between two equally-fitting ideas via a new, different prediction), Venus showing phases like the Moon (bridging Unit 7&#39;s Moon-phases content), a two-panel SVG diagram comparing the geocentric prediction (crescent-only) against the heliocentric prediction (full range) plus Galileo&#39;s actual 1610 telescope observation, decision tree, 5Q practice). Test `Tests\\Unit_27_Test_ModelsOfTheSolarSystem.html` (20Q, 4A/6B/10C, PASS_BAR 16) covers both models, Copernicus and Galileo, Venus&#39;s phases, and applied scientific-reasoning questions (critiquing claims about the history of science, evaluating what evidence supports which model). Position distribution exact 5/5/5/5. An initial length-margin pass found 12 questions with a uniquely-longest correct answer (up to 186% margin, mostly in Section C&#39;s critique-style questions) - rebalanced across one round of edits (lengthening distractors, trimming a few overly-long correct answers) down to a max ~24% margin, none over; a position bug was also caught and fixed during this pass (Q20&#39;s correct answer was at position 2 instead of the intended position 4). A Jaccard overlap check against both new lessons found zero near-duplicate questions. Both new SVG diagrams (geocentric/heliocentric side-by-side comparison, Venus phase-prediction comparison) were rasterized and visually verified - one caption-text overflow bug found and fixed (two captions ran past the diagram edge at the original font size, fixed by splitting each into two shorter lines). Scoring engine verified via a Node harness (20 valid questions, correct 4/6/10 section split, perfect run scores 20/20, all-wrong run scores 0/20).' },

  lastUnit: {
    n:26, score:19, outOf:20, pct:95, delta:25, prevScore:70, passed:true,
    patternLabel: 'Unit 26 result - Physics: Speed, Distance &amp; Time (19/20, 95% - PASS, a strong bounce-back from Unit 25&#39;s fail)',
    patternInsight: '<strong>19/20 questions (95%)</strong> - PASS, comfortably above the 16/20 bar. Section A (basic recall) = <strong>3/4 (75%)</strong>. Section B (applying, &#9733;) = <strong>6/6 (100%)</strong>. Section C (think like a scientist, &#9733;&#9733;) = <strong>10/10 (100%, perfect)</strong>.',
    analysisLabel: 'BOTH escalated Quick Fixes from Unit 25 CONFIRMED CLOSED on the first attempt &middot; Iron/oxygen fact resolved via delivery-truck analogy &middot; stamen/pistil resolved via sorting mini-game &middot; one isolated bare-recall formula slip',
    analysisInsight: 'Headline finding: both of Unit 25&#39;s significant open gaps closed on their escalated first attempt. The Iron re-test (Q9, a supplement-bottle-label scenario, the fourth different framing tried) was answered correctly - &quot;carrying oxygen around the body&quot; - after the fact had failed on THREE consecutive prior attempts (U22 symptom, U23 athlete, U25 blood-test). The stamen/pistil re-test (Q10, a mislabelled-diagram correction, the third different framing tried) was also answered correctly - &quot;Pistil&quot; - after this exact skill had been missed TWICE within Unit 25&#39;s own single test. Both gaps closed via genuinely different teaching devices (a &quot;delivery-truck&quot; analogy for Iron, an interactive click-to-sort mini-game for stamen/pistil) rather than another quiz-style re-test - the SECOND confirmed instance in this program of the &quot;escalate to a different teaching device after a lighter fix fails&quot; principle working (after Unit 24&#39;s coin-flip resolution of the null-result fair-test gap). The one miss, Q3 (a bare Time-formula recall question, numerator/denominator swapped), reads as an isolated bare-recall-only slip, not a procedural gap - both Q1 (Speed formula) and Q2 (Distance formula) were correct in the same short run, and both APPLIED time-calculation questions later in the test (Q7, Q15) used the correct formula orientation throughout. Section C went a perfect 10/10, confirming clean transfer of applied/scientific reasoning to a brand-new topic.',
    qSummary: '<strong>19 / 20 (95%) - PASS, a strong bounce-back from Unit 25&#39;s FAIL, comfortably above the 16/20 pass bar.</strong> Headline: BOTH of Unit 25&#39;s significant open gaps (stamen/pistil, Iron/oxygen) CLOSED on their escalated first attempt - the second confirmed case in this program of switching to a genuinely different teaching device after a lighter fix repeatedly failed. One isolated miss: Q3, a bare Time-formula recall slip that did not carry into any applied calculation later in the same test. Section C (applied/scientific reasoning) went a perfect 10/10.',
    qBreakdown: []
  },

  skills: [
    { name: 'Biology',                  c: 90, t: 85, ev:'U4 Microorganisms 15/15 PERFECT + U8 Photosynthesis 20/20 PERFECT + U11 Human Body Systems 20/20 PERFECT + U14 Cells 19/20 (95%) + U17 Ecosystems 17/20 (85%) - closed G4 Q40, the U1 Q13 gas-exchange thread, and Competition Q24/Q7/Q14/Q32 (Q31 substantially closed) + U20 Gap-Closure Checkpoint 16/20 (80%) - upgraded germination-light to a confirmed recurring gap + Milestone Test 2 36/40 (95%) - three of the four misses were Biology, all isolated single-fact recall slips + U22 Nutrition, Vitamins &amp; a Balanced Diet 15/20 (75%, FAIL) - the third program fail; a precise symptom-to-nutrient reverse-reasoning gap found + U25 Seeds, Plant Reproduction &amp; Dispersal 14/20 (70%, FAIL) - the stamen/pistil confusion CONFIRMED across two formats, the Iron/oxygen fact failed a THIRD consecutive attempt + U26&#39;s two embedded Biology re-test questions (within the Physics test): BOTH gaps CLOSED on the escalated first attempt - Iron (Q9, a delivery-truck-analogy Quick Fix, 4th framing) and stamen/pistil (Q10, a sorting-mini-game Quick Fix, 3rd framing) both answered correctly, confirming the escalation-to-a-different-teaching-device strategy worked for both of these long-running gaps' },
    { name: 'Chemistry / Matter',       c: 94, t: 85, ev:'U5 States/Materials 13/15 (87%) + U9 Reactions 18/20 (90%) + U12 Materials Origins &amp; Classification 19/20 (95%) + U15 Density &amp; Buoyancy 18/20 (90%) - closed G4 Q2, Q17, and Competition Q29/Q19 + U20 Gap-Closure Checkpoint 16/20 (80%) + Milestone Test 2 36/40 (95%) - a clean run with ZERO Chemistry-related misses; every density/materials-adjacent Section B/C question was answered correctly + U24 Density, Buoyancy &amp; Thermal Expansion 19/20 (95%) - CONFIRMS Competition C2&#39;s Q27 (density calculation) and Q30 (buoyancy vs temperature) both closed; the one miss (Q16, heated balloon) reads as a framing-specific slip since the identical logic was answered correctly twice elsewhere in the same test' },
    { name: 'Physics',                  c: 94, t: 85, ev:'U3 Magnetism &amp; Heat 15/15 PERFECT + U6 Circuits 14/15 (93%) + U10 Forces 19/20 (95%) + U13 Light 14/20 (70%, FAIL, later fully closed) + U16 Sound 17/20 (85%) + U18 Energy Transformations 15/20 (75%, FAIL) + U19 Water Cycle 17/20 (85%, PASS, PE/KE swap CONFIRMED CLOSED) + U20 Gap-Closure Checkpoint 16/20 (80%) - Competition Q30 (tides) CONFIRMED CLOSED + Milestone Test 2 36/40 (95%) + U21 Falling Objects, Gravity &amp; Air Resistance 20/20 (100%) PERFECT - CONFIRMS the Competition C2 gravity gap closed on the first attempt + U23 Static Electricity &amp; Electric Charges 16/20 (80%, PASS) - CONFIRMS Competition C2&#39;s Q17b (electrostatic induction) closed across four question framings + U26 Speed, Distance &amp; Time 19/20 (95%, PASS) - Section C (applied reasoning) went a PERFECT 10/10 on a brand-new topic, confirming clean transfer; one isolated bare-formula-recall slip (Q3, Time formula numerator/denominator swap) did not carry into either applied time-calculation question later in the same test' },
    { name: 'Earth &amp; Space',            c: 90, t: 85, ev:'U7 Astronomy 15/15 PERFECT - closed G4 Q32 (final baseline miss); jumped from 50% (untested) to above target in one unit. Untested in M2 (U11-U19 scope); Competition C2 surfaced two new Earth &amp; Space extension gaps (heliocentric/geocentric Venus phases, hemisphere-reversed seasons) slated for U27/U28' },
    { name: 'Scientific Investigation', c: 92, t: 85, ev:'Section C 80% (U1), 100% (U2-U8), 90% (U9), 100% (U10), 100% (Milestone 1, 8/8), 100% (U11-U12), 60% (U13), 100% (U14), 90% (U15), 80% (U16-U20) + Milestone Test 2: Section C 8/8 (100%) - a PERFECT run + U21: Section C 10/10 (100%) PERFECT + U22: Section C 8/10 (80%) - a new, first-exposure gap surfaced: interpreting a fair test that shows NO difference as still a valid result + U23: Section C 8/10 (80%) - the null-result fair-test gap did NOT close despite direct remediation, escalated to U24 + U24: Section C 9/10 (90%) - the null-result fair-test gap is finally RESOLVED after escalating to a coin-flip fairness analogy + U25: Section C 7/10 (70%) - a step down, though the misses trace back to confirmed content gaps rather than a fresh reasoning weakness + U26: Section C 10/10 (100%) PERFECT - a full recovery, including two fresh fair-test-design questions applied to a brand-new topic (comparing toy-car ramp speeds, paper airplanes thrown by different students), both answered correctly, confirming fair-test reasoning transfers cleanly to new content' },
    { name: 'Applied Reasoning',        c: 93, t: 85, ev:'U1 80%, U2-U8 100%, U9 90%, U10 100%, Milestone 1 100% (8/8), U11-U12 100%, U13 60%, U14 100%, U15 90%, U16-U20 80% + Milestone Test 2: Section B 16/16 AND Section C 8/8 - all 32 applied/reasoning-heavy questions correct + U21: Section B 6/6 AND Section C 10/10 - all 16 correct on a fresh Physics topic + U22: Section B 4/6 AND Section C 8/10 - 12/16, the weakest applied-reasoning result since U13, directly targeted by U23 + U23: Section B 5/6 AND Section C 8/10 - 13/16 (81%), a partial recovery + U24: Section B 6/6 AND Section C 9/10 - 15/16 (94%), the best applied-reasoning result since U21&#39;s perfect run + U25: Section B 4/6 AND Section C 7/10 - 11/16 (69%), the weakest since U22, driven by confirmed content gaps (stamen/pistil, iron) rather than a reasoning-process weakness + U26: Section B 6/6 AND Section C 10/10 - a PERFECT 16/16 (100%), the best applied-reasoning result of the entire program, on a brand-new topic (speed/distance/time) - confirms the U25 dip was content-specific, not a reasoning regression' }
  ],
  radarCurrent:  [90, 94, 94, 90, 92, 93],
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
    { unit:26, topic:'Physics: Speed, Distance &amp; Time', score:19, outOf:20, pct:95, passBar:16, date:'2026-07-22' }
  ],
  baseline: { label:'2025 G4 paper', score:28, outOf:40, marks:72.5, marksOutOf:100, pct:72.5,
              g3:{ label:'2025 G3 (official)', marks:55.5, marksOutOf:100, pct:55.5, percentile:88.66 } },

  unitLog: [
    {
      n: 27, badge: 'linear-gradient(135deg,#2E7D32,#1565C0)',
      title: 'Earth &amp; Space: Models of the Solar System',
      tags: [
        { t:'Ready &#128221;', c:'tpurple' },
        { t:'Seventh unit of the U21-U30 cycle', c:'torange' },
        { t:'Targets C2 Q23 (Venus phases)', c:'tblue' },
        { t:'2 lessons + 20Q test', c:'tgreen' }
      ],
      note: 'Seventh unit of the U21-U30 gap-closure cycle, extending Unit 7&#39;s solar-system content and directly targeting Competition C2&#39;s Q23 gap (heliocentric vs geocentric models, Venus&#39;s phases). Lesson 1 `SolarSystem_Lesson_GeocentricVsHeliocentric.html` (green, 7 screens: pocket map, Quick Recall of Unit 7&#39;s Sun-centred layout, why, the old GEOCENTRIC idea with an SVG diagram and the real historical reasoning behind why it was a genuinely reasonable belief before telescopes, the new HELIOCENTRIC idea with an SVG diagram bridging directly to what Unit 7 already taught as fact and naming Copernicus, decision tree distinguishing the two models, 5Q practice). Lesson 2 `SolarSystem_Lesson_VenusPhasesEvidence.html` (blue, 7 screens: pocket map, Quick Recall, why [a Scientist&#39;s Tool screen on testing between two equally-fitting ideas via a new, different prediction], Venus showing phases like the Moon [bridging Unit 7], a two-panel SVG diagram comparing the geocentric prediction (crescent-only) against the heliocentric prediction (full range) plus Galileo&#39;s actual 1610 telescope observation, decision tree, 5Q practice). Test `Tests\\Unit_27_Test_ModelsOfTheSolarSystem.html` (20Q, 4A/6B/10C, PASS_BAR 16) covers both models, Copernicus and Galileo, Venus&#39;s phases, and applied scientific-reasoning questions critiquing claims about the history of science. Position distribution exact 5/5/5/5. An initial length-margin pass found 12 questions with a uniquely-longest correct answer (up to 186% margin) - rebalanced down to a max ~24% margin, none over; a position-balance bug was also caught and fixed (Q20&#39;s correct answer was drafted at the wrong index). A Jaccard overlap check against both new lessons found zero near-duplicate questions. Both new SVG diagrams were rasterized and visually verified - one caption-text overflow bug found and fixed. Scoring engine verified via a Node harness (perfect run 20/20, all-wrong run 0/20, correct 4/6/10 section split).',
      status: 'pending'
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
