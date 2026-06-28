/*
  prem_data.js - Single source of truth for Prem's SCIENCE Coach (Luikishi)
  Edit ONLY this file; index.html and the Dashboard both read from it.
  After each unit test: update lastUnit + currentUnit; push scores[]; prepend unitLog[]; adjust skills[]/radar*.
*/
var PREM_DATA = {
  // Meta
  updated:        '28 Jun 2026',
  coachStartDate: '2026-06-28',
  asmopssDate:    '2026-08-09',
  coach:          'Luikishi',
  subject:        'Science',
  goal:           'GOLD medal - ASMOPSS 2026 Science',
  goalShort:      'Gold',

  currentUnit: { n:1, topic:'Biology: Plants - Parts, Water Transport &amp; Investigation', status:'Lessons ready &middot; Test pending' },

  lastUnit: {
    n:'Dx', score:28, outOf:40, marks:72.5, marksOutOf:100, pct:72.5, delta:null, prevScore:null,
    patternLabel: 'Baseline - ASMOPSS 2025 Grade 4 Science paper (diagnostic)',
    patternInsight: '<strong>28/40 questions = 72.5 / 100 marks (72.5%).</strong> Weighted paper: Q1-14 = 1.25m, Q15-26 &amp; Q33-36 = 2.5m, Q27-30 &amp; Q37-40 = 5m. He lost <strong>27.5 marks, 22.5 of them on the 2.5- and 5-mark questions</strong> - almost all experiment design/interpretation. Strong on cheap recall, bleeding marks on the expensive applied ones. (G3 last year = 55.5/100, so a big jump.)',
    analysisLabel: 'Target: GOLD - 6 weeks out. Next: U1 Biology: Plants (built)',
    analysisInsight: 'Gold needs the high-mark applied questions. U1 attacks his biggest content cluster (plants) while introducing experiment-reasoning in familiar content. Then U2 Matter &amp; Mass, U3 Physics (magnetism/heat), U4 Investigation Skills, rotating onward. Hardening experiment reasoning every unit is the highest-leverage move toward gold.',
    qSummary: '<strong>72.5 / 100 marks (28/40 Q)</strong> - Wrong: Q3, 7, 11, 16, 18, 19, 20, 24, 32, 33, 34, 40',
    qBreakdown: [
      { q:'Q3',  topic:'Energy in a circuit &middot; 1.25m', lvl:'w', pass:false, note:'&#10007; initial energy = chemical (battery).' },
      { q:'Q7',  topic:'Air in ball: mass &amp; volume &middot; 1.25m', lvl:'w', pass:false, note:'&#10007; gases have mass.' },
      { q:'Q11', topic:'What has mass / is matter &middot; 1.25m', lvl:'w', pass:false, note:'&#10007; concept of matter.' },
      { q:'Q16', topic:'Classification chart &middot; 2.5m', lvl:'h', pass:false, note:'&#10007; classify objects A-D.' },
      { q:'Q18', topic:'Magnets: poles &middot; 2.5m', lvl:'h', pass:false, note:'&#10007; possible arrangement.' },
      { q:'Q19', topic:'Heat + fair test &middot; 2.5m', lvl:'h', pass:false, note:'&#10007; fair test for conduction.' },
      { q:'Q20', topic:'Plant water transport + control &middot; 2.5m', lvl:'h', pass:false, note:'&#10007; valid set-up to prove transport.' },
      { q:'Q24', topic:'Underground stems &middot; 2.5m', lvl:'h', pass:false, note:'&#10007; which parts are underground stems.' },
      { q:'Q32', topic:'Astronomy: night sky &middot; 1.25m', lvl:'w', pass:false, note:'&#10007; why constellations change.' },
      { q:'Q33', topic:'Matter: dissolving &amp; mass &middot; 2.5m', lvl:'h', pass:false, note:'&#10007; rock sugar vs crystals.' },
      { q:'Q34', topic:'Leaf air spaces / gas &middot; 2.5m', lvl:'h', pass:false, note:'&#10007; bubbles = air from leaf.' },
      { q:'Q40', topic:'Mould: conditions for life &middot; 5m', lvl:'h', pass:false, note:'&#10007; air/water/food for mould (biggest drop).' }
    ]
  },

  skills: [
    { name: 'Biology',                  c: 53, t: 85, ev:'G3 Bio 50% weakest; G4 plant misses Q20/24/34/40' },
    { name: 'Chemistry / Matter',       c: 55, t: 85, ev:'G4 Q7/11/33; part of G3 Physical 66%' },
    { name: 'Physics',                  c: 63, t: 85, ev:'G3 Physical 66% strongest; G4 Q3/18/19' },
    { name: 'Earth &amp; Space',            c: 50, t: 80, ev:'G3 Earth/Space 50%; G4 Q32' },
    { name: 'Scientific Investigation', c: 45, t: 85, ev:'G4 Q19/20/33/34/40 experiment design (top gap)' },
    { name: 'Applied Reasoning',        c: 60, t: 85, ev:'G3 Applied 50% vs field 32%' }
  ],
  radarCurrent:  [53, 55, 63, 50, 45, 60],
  radarTarget:   [85, 85, 85, 80, 85, 85],
  radarBaseline: [53, 55, 63, 50, 45, 60],

  outOf: 15,
  scores: [],
  baseline: { label:'2025 G4 paper', score:28, outOf:40, marks:72.5, marksOutOf:100, pct:72.5,
              g3:{ label:'2025 G3 (official)', marks:55.5, marksOutOf:100, pct:55.5, percentile:88.66 } },

  unitLog: [
    {
      n: 1, badge: 'linear-gradient(135deg,#2E7D32,#66BB6A)',
      title: 'Biology: Plants - Parts, Water Transport &amp; Investigation',
      tags: [
        { t:'Pending &#128197;', c:'tpurple' },
        { t:'L1: Plant Parts &amp; Jobs', c:'tgreen' },
        { t:'L2: Water Transport + Be a Scientist', c:'tblue' },
        { t:'Targets 2025 Q20, Q24, Q34', c:'torange' }
      ],
      note: 'U1 opens on Prem&rsquo;s biggest gap cluster (plants) and historical weakness (Biology), while introducing experiment-reasoning. L1: roots, stems incl. <strong>underground stems</strong> (potato/ginger - the 2025 Q24 miss), leaves, flowers. L2: roots-to-stem-to-leaves, coloured-water experiment (Q20), leaf-bubble experiment (Q34), and a first taste of fair tests/controls. Test plants-only, 15 Q, applied Section C. Pass 12/15.',
      status: 'pending'
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
      score: 'G4: 5 of 12 misses (Q19,20,33,34,40) are design/read-an-experiment questions - and they carry the most marks (22.5 of 27.5 lost marks). G3 echoed it: beats the field on applied (50% vs 32%) but the top applied band is where gold is won. Trained inside every unit from U1 L2 on.',
      fillClass: 'g2', fillPct: 45
    },
    {
      label: 'Biology: Plants - biggest content cluster (U1 now)',
      pill: 'p1', pillText: 'U1 now',
      score: 'G4: Q20 (water transport), Q24 (underground stems), Q34 (leaf gas), Q40 (mould). G3: Biology weakest strand 50% and the largest (54 of 100 marks). Highest-return content fix - U1.',
      fillClass: 'g2', fillPct: 50
    },
    {
      label: 'Matter &amp; Mass (what is matter, gases have mass, dissolving) - U2',
      pill: 'p2', pillText: 'U2 next',
      score: 'G4: Q7 (air has mass), Q11 (what has mass), Q33 (dissolving &amp; mass). Foundational physical-science concepts that also underpin many experiment questions. Planned for U2.',
      fillClass: 'g2', fillPct: 55
    },
    {
      label: 'Physics &amp; Earth/Space one-offs: circuits, magnetism, heat, classification, astronomy',
      pill: 'p3', pillText: 'Later rotation',
      score: 'G4: Q3 (circuits), Q16 (classification), Q18 (magnets), Q19 (heat), Q32 (night sky). Physics is his strongest strand (G3 66%), so targeted top-ups, not rebuilds - picked up across later units (U3+).',
      fillClass: 'g3', fillPct: 62
    }
  ]
};
