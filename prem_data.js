/*
  prem_data.js - Single source of truth for Prem's SCIENCE Coach (Luikishi)
  Edit ONLY this file; index.html and the Dashboard both read from it.
  After each unit test: update lastUnit + currentUnit; push scores[]; prepend unitLog[]; adjust skills[]/radar*.
*/
var PREM_DATA = {
  // Meta
  updated:        '2 Jul 2026',
  coachStartDate: '2026-06-28',
  asmopssDate:    '2026-08-09',
  coach:          'Luikishi',
  subject:        'Science',
  goal:           'GOLD medal - ASMOPSS 2026 Science',
  goalShort:      'Gold',

  currentUnit: { n:3, topic:'Physics: Magnetism &amp; Heat', status:'Lessons ready &middot; Test ready' },

  lastUnit: {
    n:2, score:15, outOf:15, marks:null, marksOutOf:null, pct:100, delta:null, prevScore:null,
    patternLabel: 'Unit 2 result - Chemistry/Matter: What Is Matter? (15/15, PERFECT)',
    patternInsight: '<strong>15/15 (100%)</strong> - pass bar is 12/15. Section A (what is matter warm-up) = <strong>5/5</strong>. Section B (gases, mass &amp; volume) = <strong>5/5</strong>, fully closing the baseline Matter &amp; Mass content gap (2025 Q7, Q11). Section C (dissolving/think like a scientist, applied) = <strong>5/5</strong> - up from U1\'s 4/5, resolving 2025 Q33 (dissolving &amp; mass) and stacking a second clean pass on fair-test reasoning. No misses at all.',
    analysisLabel: 'Target: GOLD - next up U3 Physics: Magnetism &amp; Heat (built, HTML format)',
    analysisInsight: 'Two units in, applied/experiment reasoning has gone from a baseline weak spot to a genuine strength (Section C: 80% in U1, 100% in U2) - the single biggest lever for gold is now trending the right way. U3 attacks the Physics one-offs (2025 Q18 magnets/poles, Q19 heat-conduction fair test) while keeping the applied-reasoning beat in every lesson.',
    qSummary: '<strong>15 / 15 (100%)</strong> - Perfect score, no misses.',
    qBreakdown: []
  },

  skills: [
    { name: 'Biology',                  c: 68, t: 85, ev:'U1 Plants 14/15 (content 10/10) closed the biggest Bio gap; ecosystems/human body/microorganisms still untested' },
    { name: 'Chemistry / Matter',       c: 90, t: 85, ev:'U2 Matter &amp; Mass 15/15 PERFECT - closed G4 Q7/11/33; now above target' },
    { name: 'Physics',                  c: 63, t: 85, ev:'G3 Physical 66% strongest; G4 Q3/18/19; U3 (magnetism/heat) built, awaiting test' },
    { name: 'Earth &amp; Space',            c: 50, t: 80, ev:'G3 Earth/Space 50%; G4 Q32' },
    { name: 'Scientific Investigation', c: 70, t: 85, ev:'Section C 80% (U1) then 100% (U2) - two strong results in a row on fair tests/controls/conclusions' },
    { name: 'Applied Reasoning',        c: 78, t: 85, ev:'U1 Section C 80%, U2 Section C 100% - consistent upward trend' }
  ],
  radarCurrent:  [68, 90, 63, 50, 70, 78],
  radarTarget:   [85, 85, 85, 80, 85, 85],
  radarBaseline: [53, 55, 63, 50, 45, 60],

  outOf: 15,
  scores: [
    { unit:1, topic:'Biology: Plants', score:14, outOf:15, pct:93, passBar:12, date:'2026-07-02' },
    { unit:2, topic:'Chemistry/Matter: What Is Matter?', score:15, outOf:15, pct:100, passBar:12, date:'2026-07-02' }
  ],
  baseline: { label:'2025 G4 paper', score:28, outOf:40, marks:72.5, marksOutOf:100, pct:72.5,
              g3:{ label:'2025 G3 (official)', marks:55.5, marksOutOf:100, pct:55.5, percentile:88.66 } },

  unitLog: [
    {
      n: 3, badge: 'linear-gradient(135deg,#5C6BC0,#7986CB)',
      title: 'Physics: Magnetism &amp; Heat',
      tags: [
        { t:'Ready &#128221;', c:'tpurple' },
        { t:'L1: Magnets &amp; Poles', c:'tgreen' },
        { t:'L2: Heat, Conduction &amp; Fair Tests', c:'tblue' },
        { t:'Targets 2025 Q18, Q19', c:'torange' }
      ],
      note: 'U3 attacks the Physics one-offs from the baseline: magnet poles and heat-conduction fair tests. L1: magnetic vs non-magnetic materials, the two-pole rule, and reading rows of magnets (attract/repel joint by joint) - targets 2025 Q18. L2: conduction, good conductors vs insulators, and a rods-in-hot-water fair-test design (same logic as the classic wax-melting demo) - targets 2025 Q19. Built in the established single-page HTML test format.',
      status: 'pending'
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
      label: 'Scientific Investigation (fair tests, controls, conclusions) - TOP LEVERAGE for gold',
      pill: 'p1', pillText: 'Focus',
      score: 'Two strong results in a row: U1 Section C 4/5 (80%), U2 Section C 5/5 (100%) - nailed controls, mass-conservation reasoning, and fair-test design each time. Trending from weak spot to strength; keep training it inside every unit so it holds under exam pressure.',
      fillClass: 'g2', fillPct: 70
    },
    {
      label: 'Physics one-offs: magnetism &amp; heat conduction - U3 now',
      pill: 'p1', pillText: 'U3 now',
      score: 'G4: Q18 (magnet poles/arrangement) and Q19 (heat-conduction fair test). U3 lessons + HTML test built - poles/attract-repel rules, conductors vs insulators, and a rods-in-hot-water fair-test design.',
      fillClass: 'g2', fillPct: 65
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
      score: 'U1 scored 14/15 (93%), Sections A+B 10/10. Baseline Plants misses (Q20, 24, 34, 40) resolved except a lingering thread on leaf/stomata gas exchange (Q13/Q34) - watch for it in later rotation.',
      fillClass: 'g3', fillPct: 95
    },
    {
      label: 'Remaining one-offs: circuits, classification, astronomy',
      pill: 'p3', pillText: 'Later rotation',
      score: 'G4: Q3 (circuits), Q16 (classification), Q32 (night sky). Physics/Earth&amp;Space is otherwise his strongest strand (G3 66%), so these are targeted top-ups, not rebuilds - picked up in later rotation units.',
      fillClass: 'g3', fillPct: 62
    }
  ]
};
