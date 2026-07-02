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

  currentUnit: { n:2, topic:'Chemistry/Matter: What Is Matter? Mass, Volume &amp; Dissolving', status:'Lessons ready &middot; Test ready' },

  lastUnit: {
    n:1, score:14, outOf:15, marks:null, marksOutOf:null, pct:93, delta:null, prevScore:null,
    patternLabel: 'Unit 1 result - Biology: Plants (14/15, PASS)',
    patternInsight: '<strong>14/15 (93%)</strong> - pass bar is 12/15. Sections A+B (plant-parts content, incl. underground stems Q6&ndash;7 targeting the 2025 Q24 miss) = <strong>10/10</strong>, fully closing the Plants content gap. Section C (applied/experiment reasoning) = <strong>4/5</strong> - he nailed the control-group question (Q12) and the fair-test design question (Q14), exactly the skill that cost him marks on the 2025 papers. Only miss: Q13 (leaf bubbles = air escaping from stomata/air spaces - he said "food made by the leaf"), the same idea behind the 2025 Q34 miss - a recurring gap worth a quick reinforcement.',
    analysisLabel: 'Target: GOLD - next up U2 Matter &amp; Mass (built, HTML format)',
    analysisInsight: 'U1 proved the coaching approach works: content mastery is fast once taught from zero, and applied/experiment reasoning is climbing (Section C 80%) - the single biggest lever for gold. U2 attacks the Matter &amp; Mass cluster (2025 Q7, 11, 33: gases have mass, mass vs volume, dissolving) while continuing to bake in fair-test reasoning every unit.',
    qSummary: '<strong>14 / 15 (93%)</strong> - Only miss: Q13 (leaf bubbles = stomata/air escape, said "food made by leaf")',
    qBreakdown: [
      { q:'Q13', topic:'Leaf bubbles = stomata/air spaces &middot; applied', lvl:'h', pass:false, note:'&#10007; said "food made by leaf" instead of air escaping - same idea as 2025 Q34.' }
    ]
  },

  skills: [
    { name: 'Biology',                  c: 68, t: 85, ev:'U1 Plants 14/15 (content 10/10) closed the biggest Bio gap; ecosystems/human body/microorganisms still untested' },
    { name: 'Chemistry / Matter',       c: 55, t: 85, ev:'G4 Q7/11/33; U2 in progress' },
    { name: 'Physics',                  c: 63, t: 85, ev:'G3 Physical 66% strongest; G4 Q3/18/19' },
    { name: 'Earth &amp; Space',            c: 50, t: 80, ev:'G3 Earth/Space 50%; G4 Q32' },
    { name: 'Scientific Investigation', c: 56, t: 85, ev:'U1 Sec C 4/5 - nailed control (Q12) &amp; fair test (Q14); still the top lever for gold' },
    { name: 'Applied Reasoning',        c: 67, t: 85, ev:'U1 Section C 80%, up from G3 Applied 50%' }
  ],
  radarCurrent:  [68, 55, 63, 50, 56, 67],
  radarTarget:   [85, 85, 85, 80, 85, 85],
  radarBaseline: [53, 55, 63, 50, 45, 60],

  outOf: 15,
  scores: [
    { unit:1, topic:'Biology: Plants', score:14, outOf:15, pct:93, passBar:12, date:'2026-07-02' }
  ],
  baseline: { label:'2025 G4 paper', score:28, outOf:40, marks:72.5, marksOutOf:100, pct:72.5,
              g3:{ label:'2025 G3 (official)', marks:55.5, marksOutOf:100, pct:55.5, percentile:88.66 } },

  unitLog: [
    {
      n: 2, badge: 'linear-gradient(135deg,#EF6C00,#FFB74D)',
      title: 'Chemistry/Matter: What Is Matter? Mass, Volume &amp; Dissolving',
      tags: [
        { t:'Ready &#128221;', c:'tpurple' },
        { t:'L1: What Is Matter?', c:'tgreen' },
        { t:'L2: Mass, Volume &amp; Dissolving', c:'tblue' },
        { t:'Targets 2025 Q7, Q11, Q33', c:'torange' }
      ],
      note: 'U2 attacks the second-biggest content cluster from the baseline: matter, mass vs volume, and dissolving. L1: what matter is (incl. things that are NOT matter - light/sound), the three states, and the classic "gases have mass" misconception (balloon/football demo) - targets 2025 Q7 &amp; Q11. L2: mass vs volume, dissolving &amp; conservation of mass, plus a fair-test beat on crushed vs lump sugar - targets 2025 Q33. First unit built in the new single-page HTML test format - instant score + explanations, save-to-file for Luikishi.',
      status: 'pending'
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
      score: 'U1 evidence: nailed the control-group (Q12) and fair-test-design (Q14) questions - real progress from the baseline weak spot (5 of 12 G4 misses were design/read-an-experiment questions). Still the single biggest lever for gold - trained inside every unit.',
      fillClass: 'g2', fillPct: 56
    },
    {
      label: 'Matter &amp; Mass (what is matter, gases have mass, dissolving) - U2 now',
      pill: 'p1', pillText: 'U2 now',
      score: 'G4: Q7 (air has mass), Q11 (what has mass), Q33 (dissolving &amp; mass). Foundational physical-science concepts that also underpin many experiment questions. U2 lessons + HTML test built.',
      fillClass: 'g2', fillPct: 55
    },
    {
      label: 'Biology: Plants - CLOSED &#9989;',
      pill: 'p3', pillText: 'Done',
      score: 'U1 scored 14/15 (93%), Sections A+B 10/10. Baseline Plants misses (Q20, 24, 34, 40) resolved except a lingering thread on leaf/stomata gas exchange (Q13/Q34) - watch for it in later rotation.',
      fillClass: 'g3', fillPct: 95
    },
    {
      label: 'Physics &amp; Earth/Space one-offs: circuits, magnetism, heat, classification, astronomy',
      pill: 'p3', pillText: 'Later rotation',
      score: 'G4: Q3 (circuits), Q16 (classification), Q18 (magnets), Q19 (heat), Q32 (night sky). Physics is his strongest strand (G3 66%), so targeted top-ups, not rebuilds - picked up across later units (U3+).',
      fillClass: 'g3', fillPct: 62
    }
  ]
};
