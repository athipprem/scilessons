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

  currentUnit: { n:'M2', topic:'Milestone Test 2 - All Units (U11-U20)', status:'Test ready &middot; no lessons, per the milestone-test rule &middot; 40 questions spanning U11-U19 content (Biology: Human Body Systems, Cells, Ecosystems/Life Cycles; Chemistry: Materials Origins &amp; Classification, Density &amp; Buoyancy; Physics: Light, Sound, Energy Transformations, Water Cycle/Tides), weighted like a real ASMOPSS paper (1.25/2.5/5 marks, 100 total, pass bar 80) and directly benchmarked against Milestone Test 1&#39;s 98.75/100 result. Gives dedicated coverage to the two open items flagged by U20&#39;s Gap-Closure Checkpoint: the germination &quot;seeds don&#39;t need light&quot; recurring misconception and evidence-based observation-vs-inference reasoning.' },

  lastUnit: {
    n:20, score:16, outOf:20, pct:80, delta:-5, prevScore:85, passed:true,
    patternLabel: 'Unit 20 result - Gap-Closure Checkpoint (16/20, 80% - PASS, right at the bar)',
    patternInsight: '<strong>16/20 questions (80%)</strong> - right at the 16/20 pass bar, Prem&#39;s lowest passing score of the whole U11-U20 cycle. Tenth and final unit test of the post-Milestone-1 rotation - review-only capstone, no new lessons, sweeping 13 Competition gap items across all of U11-U19. Section A (basic recall, warm-up) = <strong>3/4</strong> - one miss. Section B (applying the checkpoint topics) = <strong>5/6</strong> - one miss. Section C (think like a scientist, applied reasoning) = <strong>8/10</strong> - two misses.',
    analysisLabel: 'Competition Q30 (tides) CONFIRMED CLOSED &middot; germination &quot;no light needed&quot; rule UPGRADED to a confirmed recurring gap &middot; a 4th instance of the fast-read MORE/LESS inversion pattern found',
    analysisInsight: 'The best news: all three weighted tide questions (Q11 timing prediction, Q12 24-hour counting, Q13 claim critique) were answered correctly, confirming Competition Q30 is now CLOSED on the first Gap-Closure Checkpoint attempt - the dedicated review-page refresher worked. The real finding: two misses (Q4, Q18) both trace to one belief - Prem currently thinks seeds need light to germinate. U17&#39;s Q3 miss on this exact fact was originally read as a bare recall slip; missing it again here, in two different framings (a bare &quot;not needed&quot; recall question and an applied sunny-jar-vs-dark-jar scenario), upgrades it to a genuine, still-open 2-instance recurring misconception that needs a dedicated fix rather than embedded recap coverage alone. A third miss (Q7, a same-volume/different-mass density comparison) is a FOURTH confirmed instance of the recurring fast-read MORE/LESS inversion pattern (after U6, U10, U15) - Prem still has the density rule itself (Q5&#39;s harder oil/water reasoning was correct), so this reads as a persistent quick-read habit, not a conceptual gap. A fourth miss (Q15, observation vs inference - a hiker finding paw prints) shows this skill remains inconsistent across framings: Q14 (a direct cause-effect framing) was correct in the same sitting. Every other gap swept by this checkpoint - Q9, Q3, Q2, Q17, Q10, Q14, Q7 (nitrogen), Q32 - was reconfirmed closed.',
    qSummary: '<strong>16 / 20 (80%) - PASS</strong>, right at the bar. Competition Q30 (tides) CONFIRMED CLOSED - all 3 weighted tide questions correct. Germination&#39;s &quot;no light needed&quot; rule is now a confirmed 2-instance recurring gap (U17 + U20). A 4th instance of the fast-read MORE/LESS density-comparison inversion surfaced. Observation-vs-inference remains inconsistent across framings.',
    qBreakdown: [
      { q:'Q4', topic:'Germination requirements (Section A recall) - part of the confirmed light misconception', lvl:'a', pass:false, note:'Asked which item is NOT something a germinating seed needs. Correct answer is Sunlight; Prem chose Water instead - consistent with believing light IS needed, so he avoided picking it as the "not needed" item.' },
      { q:'Q7', topic:'Density comparison (Section B) - 4th confirmed fast-read MORE/LESS inversion', lvl:'b', pass:false, note:'Two same-volume lumps of clay, 80g vs 45g, asked which is MORE dense. Chose the lighter 45g lump instead of the correct 80g one - same error shape as U6 Q7, U10 Q7, and U15 Q9.' },
      { q:'Q15', topic:'Observation vs inference (Section C) - still inconsistent across framings', lvl:'c', pass:false, note:'A hiker finds wet paw prints near a stream. Chose an inference ("an animal walked through recently") over the direct observation ("prints and droplets are visible right now"). Q14 in the same test (a different framing) was answered correctly.' },
      { q:'Q18', topic:'Germination light-vs-dark (Section C) - confirms the light misconception, second instance', lvl:'c', pass:false, note:'Two jars, one sunny one dark, both equally warm/damp/aired. Chose "only the sunny jar germinates" instead of "both jars germinate equally" - directly confirms the belief that light is required, matching Q4.' }
    ]
  },

  skills: [
    { name: 'Biology',                  c: 93, t: 85, ev:'U4 Microorganisms 15/15 PERFECT + U8 Photosynthesis 20/20 PERFECT + U11 Human Body Systems 20/20 PERFECT + U14 Cells 19/20 (95%, 17/18 Biology-content questions correct - the one miss was an embedded Physics recap question, not Cells content) + U17 Ecosystems 17/20 (85%) - closed G4 Q40, the U1 Q13 gas-exchange thread, and the Competition paper&#39;s Q24, Q7, Q14, and Q32 gaps (Q31 substantially closed) + U20 Gap-Closure Checkpoint 16/20 (80%) - reconfirmed Q7/Q14/Q32 closed, but two germination misses (Q4, Q18) UPGRADE the &quot;seeds don&#39;t need light&quot; slip (first seen in U17) to a confirmed 2-instance recurring gap - Competition Q31 is therefore NOT yet confirmed closed and needs a dedicated fix' },
    { name: 'Chemistry / Matter',       c: 91, t: 85, ev:'U5 States/Materials 13/15 (87%) + U9 Reactions 18/20 (90%) + U12 Materials Origins &amp; Classification 19/20 (95%) + U15 Density &amp; Buoyancy 18/20 (90%) - closed G4 Q2, Q17, and Competition Q29/Q19; U15&#39;s one content-side miss (Q9, oil/water direction) was a fast-read slip, not a density-concept gap + U20 Gap-Closure Checkpoint 16/20 (80%) - reconfirmed Q2/Q17 closed, but Q7 (a same-volume/different-mass density comparison) is a FOURTH confirmed instance of the recurring fast-read MORE/LESS inversion pattern (after U6, U10, U15) - a persistent quick-read habit, not a conceptual gap, since the harder Q5 reasoning was correct' },
    { name: 'Physics',                  c: 91, t: 85, ev:'U3 Magnetism &amp; Heat 15/15 PERFECT + U6 Circuits 14/15 (93%) + U10 Forces 19/20 (95%) + U13 Light 14/20 (70%, FAIL) + U14&#39;s embedded recap (comparison-framing correct, standalone still backwards) + U15&#39;s standalone recap Q4 answered CORRECTLY + U16 Sound 17/20 (85%) + U18 Energy Transformations 15/20 (75%, SECOND FAIL) + U19 Water Cycle 17/20 (85%, PASS) - closed G4 Q18/19/Q3 and Competition Q9 (speed of sound); U13&#39;s point-vs-broad-source inversion is FULLY closed; U16 surfaced a pitch/volume property-misattribution pattern; U18&#39;s potential-vs-kinetic energy vocabulary swap was CONFIRMED CLOSED by U19 on the first remediation attempt (Competition Q3 now closed); U19 surfaced a NEW tide-frequency misconception + U20 Gap-Closure Checkpoint 16/20 (80%) - Competition Q30 (tides) now CONFIRMED CLOSED (all 3 weighted tide questions correct), the checkpoint&#39;s top priority target, and Q3/Q10/Q9 all reconfirmed closed too' },
    { name: 'Earth &amp; Space',            c: 90, t: 85, ev:'U7 Astronomy 15/15 PERFECT - closed G4 Q32 (final baseline miss); jumped from 50% (untested) to above target in one unit' },
    { name: 'Scientific Investigation', c: 89, t: 85, ev:'Section C 80% (U1), 100% (U2-U8), 90% (U9), 100% (U10), 100% (Milestone 1, 8/8), 100% (U11, 10/10), 100% (U12, 10/10), 60% (U13, 6/10), 100% (U14, 10/10), 90% (U15, 9/10), 80% (U16, 8/10), 80% (U17, 8/10), 70% (U18, 7/10), 80% (U19, 8/10), 80% (U20, 8/10) - U20&#39;s two Section C misses were a fast-read inversion slip and an observation-vs-inference miss in a harder evidence-based framing (a direct cause-effect framing, in the same test, was answered correctly); the U18 PE/KE swap and U19&#39;s tide fix both held durable under fresh checkpoint scenarios' },
    { name: 'Applied Reasoning',        c: 88, t: 85, ev:'U1 80%, U2-U8 100%, U9 90%, U10 100%, Milestone 1 100% (8/8), U11 100% (10/10), U12 100% (10/10), U13 60% (6/10), U14 100% (10/10), U15 90% (9/10), U16 80% (8/10), U17 80% (8/10), U18 70% (7/10), U19 80% (8/10), U20 80% (8/10) - U20&#39;s lowest-of-the-cycle result (16/20, right at the pass bar) reflects a genuine recurring germination misconception and a persistent fast-read habit rather than a reasoning-skill decline; Milestone Test 2 gives dedicated coverage to both open items' }
  ],
  radarCurrent:  [93, 91, 91, 90, 89, 88],
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
    { unit:20, topic:'Gap-Closure Checkpoint', score:16, outOf:20, pct:80, passBar:16, date:'2026-07-16' }
  ],
  baseline: { label:'2025 G4 paper', score:28, outOf:40, marks:72.5, marksOutOf:100, pct:72.5,
              g3:{ label:'2025 G3 (official)', marks:55.5, marksOutOf:100, pct:55.5, percentile:88.66 } },

  unitLog: [
    {
      n: 'C2', badge: 'linear-gradient(135deg,#1a237e,#b71c1c)',
      title: 'ASMOPSS 2023 - Science G4-6 (2nd Round National Selection) - Real Competition Paper',
      tags: [
        { t:'Ready &#128221;', c:'tpurple' },
        { t:'Harder round - G4-6 combined', c:'torange' },
        { t:'30Q - MCQ + short answer + essay', c:'tblue' },
        { t:'Stretch challenge, no pass bar', c:'tgreen' }
      ],
      note: 'A genuine ASMOPSS Thailand 2023 2nd Round National Selection paper (Science Primary, sat 1 Oct 2023), converted into an interactive, self-scoring test - real diagrams cropped from the original PDF (the bar-magnet photo, all 5 circulatory-system flow diagrams, and the muscle-tissue photo), answers verified against the official ASMOPSS answer key. <strong>This round combines Grades 4, 5 and 6 into one paper and is noticeably harder than Prem&#39;s usual G4 division</strong> - several Part III questions use algebra-based physics (average speed with equal-distance vs equal-time splits, force-vector resultants, density with thermal expansion, mechanical energy formulas) that go beyond the G4 curriculum. Kept as a stretch/challenge paper, not a like-for-like benchmark - no pass/fail bar or baseline comparison is shown, just a raw score out of the paper&#39;s own total. Format: Part I = 15 multiple-choice (2 marks each, 30 total); Part II = 10 fill-in-the-blank short answers (3 marks each, several with 2-3 blanks, 30 total); Part III = 5 essay/calculation questions (Q29 and Q30 use the source&#39;s own explicit 12-mark breakdowns; Q26-28 use an estimated 2 marks per sub-part since the source doesn&#39;t publish a breakdown for these three - true grand total is 102, not a forced 100). Short-answer and essay blanks are auto-graded via flexible keyword/text matching (numeric answers match regardless of units typed, e.g. &quot;0&quot;, &quot;0N&quot;, and &quot;0 N&quot; all match) - the full official reasoning is always shown after submitting so any correctly-reasoned-but-differently-worded answer is still visible. Scoring engine verified via a Node harness (all-correct = 102/102, all-wrong = 0/102, plus spot checks on every short-answer blank&#39;s matching logic).',
      status: 'pending'
    },
    {
      n: 'M2', badge: 'linear-gradient(135deg,#DAA520,#8a6a00)',
      title: 'Milestone Test 2 - All Units (U11-U20)',
      tags: [
        { t:'Ready &#128221;', c:'tpurple' },
        { t:'No lessons &middot; test-only, per milestone rule', c:'tgreen' },
        { t:'40Q &middot; ASMOPSS-weighted &middot; 100 marks', c:'tblue' },
        { t:'11th assessment of the cycle', c:'torange' }
      ],
      note: '11th assessment of the program, following Milestone Test 1&#39;s pattern of one milestone after every 10 unit tests. No new lessons, per the milestone-test rule. `Milestone_02_Test.html` mirrors Milestone 1&#39;s exact structure and theme: 40 questions, 16A/16B/8C, ASMOPSS-weighted marks (1.25/2.5/5), 100 marks total, PASS_MARKS 80, benchmarked against Milestone 1&#39;s own 98.75/100 result. Covers U11-U19 content (U20 excluded - it was review-only with no new content of its own). Gives dedicated coverage to the two open items flagged by U20&#39;s Gap-Closure Checkpoint analysis: the germination "seeds don&#39;t need light" misconception, now a confirmed 2-instance recurring gap (Q9 basic recall, Q24 applied sunny-vs-dark-jar scenario), and evidence-based observation-vs-inference reasoning (Q32, apple/claw-marks scenario). Built and verified under the ANSWER-BALANCE RULE (exact 10/10/10/10 position spread, pre-planned via a repeating pattern before drafting, zero margin violations after a dedicated Section C fix pass) and a Jaccard overlap check against all 18 relevant U11-U19 lesson files plus 12 prior test files (only 1 acceptable low-similarity false-positive remaining). A mandatory 10-year-old role-play pass caught 4 real issues (a stale "why" explanation left over from an earlier scenario rewrite, an awkward physical scenario, an ambiguous exclusion-based question, and a debatable "hard" material classification) - all fixed. Scoring engine verified via a Node harness across all-correct, all-wrong, and mixed-score cases.',
      status: 'pending'
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
