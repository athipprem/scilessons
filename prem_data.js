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

  currentUnit: { n:5, topic:'Chemistry: States of Matter &amp; Materials', status:'Lessons ready &middot; Test ready' },

  lastUnit: {
    n:4, score:15, outOf:15, marks:null, marksOutOf:null, pct:100, delta:null, prevScore:null,
    patternLabel: 'Unit 4 result - Biology: Microorganisms (15/15, PERFECT)',
    patternInsight: '<strong>15/15 (100%)</strong> - pass bar is 12/15. Section A (microorganism basics warm-up) = <strong>5/5</strong>. Section B (applying helpful/harmful + growth-needs) = <strong>5/5</strong>, fully closing the baseline microorganisms content gap (2025 Q40, bread-mould). Section C (think like a scientist, applied) = <strong>5/5</strong> - a THIRD straight 100%, resolving the last unaddressed baseline miss. No misses at all.',
    analysisLabel: 'Target: GOLD - next up U5 Chemistry: States of Matter &amp; Materials (built, HTML format)',
    analysisInsight: 'Four units in, four passes, three of them perfect in a row. Applied/experiment reasoning (Section C: 80% U1, 100% U2, 100% U3, 100% U4) is a durable strength across four different content areas. Every clustered baseline gap (Plants, Matter &amp; Mass, Physics, microorganisms) is now closed. U5 continues the Biology&rarr;Chemistry&rarr;Physics rotation, deepens U2\'s matter foundation into changes of state and materials, and targets baseline Q16 (classification) via sorting materials by properties.',
    qSummary: '<strong>15 / 15 (100%)</strong> - Perfect score, no misses.',
    qBreakdown: []
  },

  skills: [
    { name: 'Biology',                  c: 90, t: 85, ev:'U4 Microorganisms 15/15 PERFECT - closed G4 Q40; now above target' },
    { name: 'Chemistry / Matter',       c: 90, t: 85, ev:'U2 Matter &amp; Mass 15/15 PERFECT - closed G4 Q7/11/33; U5 (states/materials) built, awaiting test' },
    { name: 'Physics',                  c: 90, t: 85, ev:'U3 Magnetism &amp; Heat 15/15 PERFECT - closed G4 Q18/19; now above target' },
    { name: 'Earth &amp; Space',            c: 50, t: 80, ev:'G3 Earth/Space 50%; G4 Q32' },
    { name: 'Scientific Investigation', c: 85, t: 85, ev:'Section C 80% (U1), 100% (U2), 100% (U3), 100% (U4) - now at target, four units of evidence' },
    { name: 'Applied Reasoning',        c: 87, t: 85, ev:'U1 Section C 80%, U2+U3+U4 Section C 100% - consistently above target across four content areas' }
  ],
  radarCurrent:  [90, 90, 90, 50, 85, 87],
  radarTarget:   [85, 85, 85, 80, 85, 85],
  radarBaseline: [53, 55, 63, 50, 45, 60],

  outOf: 15,
  scores: [
    { unit:1, topic:'Biology: Plants', score:14, outOf:15, pct:93, passBar:12, date:'2026-07-02' },
    { unit:2, topic:'Chemistry/Matter: What Is Matter?', score:15, outOf:15, pct:100, passBar:12, date:'2026-07-02' },
    { unit:3, topic:'Physics: Magnetism &amp; Heat', score:15, outOf:15, pct:100, passBar:12, date:'2026-07-02' },
    { unit:4, topic:'Biology: Microorganisms', score:15, outOf:15, pct:100, passBar:12, date:'2026-07-03' }
  ],
  baseline: { label:'2025 G4 paper', score:28, outOf:40, marks:72.5, marksOutOf:100, pct:72.5,
              g3:{ label:'2025 G3 (official)', marks:55.5, marksOutOf:100, pct:55.5, percentile:88.66 } },

  unitLog: [
    {
      n: 5, badge: 'linear-gradient(135deg,#0288D1,#4FC3F7)',
      title: 'Chemistry: States of Matter &amp; Materials',
      tags: [
        { t:'Ready &#128221;', c:'tpurple' },
        { t:'L1: Changes of State', c:'tgreen' },
        { t:'L2: Material Properties', c:'tblue' },
        { t:'Targets 2025 Q16', c:'torange' }
      ],
      note: 'U5 continues the Biology&rarr;Chemistry&rarr;Physics rotation and deepens U2\'s matter foundation. L1: the four changes of state (melting, freezing, evaporating, condensing) and proving mass is conserved when matter changes state. L2: material properties (hard/soft, flexible/rigid, waterproof/absorbent, transparent/opaque), sorting materials with a two-property classification chart - targets baseline Q16 (classification chart) - plus choosing the best material for a job and fair-testing a property. Built in the established single-page HTML test format.',
      status: 'pending'
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
      score: 'Four results: U1 Section C 4/5 (80%), U2/U3/U4 Section C 5/5 (100% each) - nailed controls, mass-conservation, fair-test design and multi-step reasoning every time across four different content areas. No longer remediation - the goal now is holding this under real exam pressure on 9 Aug.',
      fillClass: 'g2', fillPct: 85
    },
    {
      label: 'Classification (sorting by properties) - U5 now',
      pill: 'p1', pillText: 'U5 now',
      score: 'G4: Q16 (classification chart of objects A-D) - the last individual content-cluster-adjacent miss. U5 lessons + HTML test built - material properties, sorting materials using a two-property classification chart, and choosing the right material for a job.',
      fillClass: 'g2', fillPct: 60
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
      score: 'U1 scored 14/15 (93%), Sections A+B 10/10. Baseline Plants misses (Q20, 24, 34) resolved except a lingering thread on leaf/stomata gas exchange (Q13/Q34) - watch for it in later rotation.',
      fillClass: 'g3', fillPct: 95
    },
    {
      label: 'Remaining one-offs: circuits, astronomy',
      pill: 'p3', pillText: 'Later rotation',
      score: 'G4: Q3 (initial energy form in a circuit) and Q32 (night sky/constellations). Physics/Earth&amp;Space is otherwise his strongest strand (G3 66%), so these are targeted top-ups, not rebuilds - picked up in later rotation units (electricity, Earth &amp; Space).',
      fillClass: 'g3', fillPct: 65
    }
  ]
};
