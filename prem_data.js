/*
  prem_data.js - Single source of truth for Prem's SCIENCE Coach (Luikishi)
  Edit ONLY this file; index.html and the Dashboard both read from it.
  After each unit test: update lastUnit + currentUnit; push scores[]; prepend unitLog[]; adjust skills[]/radar*.
*/
var PREM_DATA = {
  // Meta
  updated:        '4 Jul 2026',
  coachStartDate: '2026-06-28',
  asmopssDate:    '2026-08-09',
  coach:          'Luikishi',
  subject:        'Science',
  goal:           'GOLD medal - ASMOPSS 2026 Science',
  goalShort:      'Gold',

  currentUnit: { n:6, topic:'Physics: Electricity &amp; Circuits', status:'Lessons ready &middot; Test ready' },

  lastUnit: {
    n:5, score:13, outOf:15, marks:null, marksOutOf:null, pct:87, delta:-2, prevScore:15,
    patternLabel: 'Unit 5 result - Chemistry: States of Matter &amp; Materials (13/15, 87%)',
    patternInsight: '<strong>13/15 (87%)</strong> - pass bar is 12/15, comfortable pass but first non-perfect since Unit 1. Section A (states/materials warm-up) = <strong>4/5</strong> (missed Q1: named the HEATING pair instead of the COOLING pair - a direction mix-up). Section B (applying changes of state &amp; properties) = <strong>4/5</strong> (missed Q10: a two-property sort - placed an absorbent+soft material in the opposite Waterproof+Hard box). Section C (think like a scientist, applied) = <strong>5/5</strong> - a FOURTH straight 100%.',
    analysisLabel: 'Target: GOLD - next up U6 Physics: Electricity &amp; Circuits (built, HTML format)',
    analysisInsight: 'Five units in, five passes, four of the last five perfect. Applied/experiment reasoning (Section C: 80% U1, 100% U2, 100% U3, 100% U4, 100% U5) is a durable strength across five different content areas. Both U5 misses are specific and fixable, not conceptual gaps - a heating/cooling direction slip and one two-property classification box - and U6\'s Quick Recall screen opens with a recap of both before new content. U6 closes the last individual baseline miss (Q3, energy in a circuit) and continues the rotation into electricity.',
    qSummary: '<strong>13 / 15 (87%)</strong> - Two misses: Q1 (cooling vs heating direction) and Q10 (two-property classification, opposite corner). Section C (applied reasoning) still 5/5.',
    qBreakdown: [
      { q:'Q1', topic:'Changes of state - cooling vs heating direction', lvl:'w', pass:false, note:'Chose the HEATING pair (melting/evaporating) instead of the COOLING pair (freezing/condensing) - a direction mix-up, not a gap in what each change means.' },
      { q:'Q10', topic:'Two-property classification chart (Absorbent/Waterproof x Hard/Soft)', lvl:'h', pass:false, note:'Placed a soft, absorbent material in the opposite corner (Waterproof + Hard) instead of Absorbent + Soft. Got the OTHER two-property sort on the test right (Q14) - reads as a slip, not a blind spot, but worth a recap since this targets baseline Q16.' }
    ]
  },

  skills: [
    { name: 'Biology',                  c: 90, t: 85, ev:'U4 Microorganisms 15/15 PERFECT - closed G4 Q40; now above target' },
    { name: 'Chemistry / Matter',       c: 87, t: 85, ev:'U5 States/Materials 13/15 (87%) - baseline Q16 classification improving but not fully closed (Q10 miss)' },
    { name: 'Physics',                  c: 90, t: 85, ev:'U3 Magnetism &amp; Heat 15/15 PERFECT - closed G4 Q18/19; U6 (circuits/electricity) built, awaiting test' },
    { name: 'Earth &amp; Space',            c: 50, t: 85, ev:'G3 Earth/Space 50%; G4 Q32 - target normalised to 85 like every other strand' },
    { name: 'Scientific Investigation', c: 88, t: 85, ev:'Section C 80% (U1), 100% (U2), 100% (U3), 100% (U4), 100% (U5) - five units of evidence, four straight 100%' },
    { name: 'Applied Reasoning',        c: 89, t: 85, ev:'U1 Section C 80%, U2-U5 Section C 100% - consistently above target across five content areas' }
  ],
  radarCurrent:  [90, 87, 90, 50, 88, 89],
  radarTarget:   [85, 85, 85, 85, 85, 85],
  radarBaseline: [53, 55, 63, 50, 45, 60],

  outOf: 15,
  scores: [
    { unit:1, topic:'Biology: Plants', score:14, outOf:15, pct:93, passBar:12, date:'2026-07-02' },
    { unit:2, topic:'Chemistry/Matter: What Is Matter?', score:15, outOf:15, pct:100, passBar:12, date:'2026-07-02' },
    { unit:3, topic:'Physics: Magnetism &amp; Heat', score:15, outOf:15, pct:100, passBar:12, date:'2026-07-02' },
    { unit:4, topic:'Biology: Microorganisms', score:15, outOf:15, pct:100, passBar:12, date:'2026-07-03' },
    { unit:5, topic:'Chemistry: States of Matter &amp; Materials', score:13, outOf:15, pct:87, passBar:12, date:'2026-07-04' }
  ],
  baseline: { label:'2025 G4 paper', score:28, outOf:40, marks:72.5, marksOutOf:100, pct:72.5,
              g3:{ label:'2025 G3 (official)', marks:55.5, marksOutOf:100, pct:55.5, percentile:88.66 } },

  unitLog: [
    {
      n: 6, badge: 'linear-gradient(135deg,#00838F,#4DD0E1)',
      title: 'Physics: Electricity &amp; Circuits',
      tags: [
        { t:'Ready &#128221;', c:'tpurple' },
        { t:'L1: Building a Circuit', c:'tgreen' },
        { t:'L2: Conductors &amp; Faults', c:'tblue' },
        { t:'Targets 2025 Q3', c:'torange' }
      ],
      note: 'U6 continues the rotation into electricity and closes the last individual baseline miss (Q3, initial energy form in a circuit). L1: what makes a circuit complete, open vs closed switches, and the energy transfer chain (chemical in the battery &rarr; electrical in the loop &rarr; light/heat at the bulb) - plus a Quick Recall recap of two Unit 5 misses (heating/cooling direction, two-property classification). L2: electrical conductors vs insulators, a step-by-step decision-tree check for diagnosing a circuit fault, and fair-testing which material conducts. Built in the established single-page HTML test format.',
      status: 'pending'
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
      score: 'Five results: U1 Section C 4/5 (80%), U2/U3/U4/U5 Section C 5/5 (100% each) - nailed controls, mass-conservation, fair-test design and multi-step reasoning every time across five different content areas. No longer remediation - the goal now is holding this under real exam pressure on 9 Aug.',
      fillClass: 'g2', fillPct: 88
    },
    {
      label: 'Classification (sorting by properties) - improving, one slip remains',
      pill: 'p2', pillText: 'Watch',
      score: 'G4: Q16 (classification chart of objects A-D). U5\'s dedicated two-property classification lesson resolved one of two test questions on this skill (Q14 correct, Q10 missed - opposite corner on both axes). Reads as a slip, not a blind spot, since the other sort was correct - a quick recap is built into Unit 6\'s Quick Recall screen before moving on.',
      fillClass: 'g2', fillPct: 75
    },
    {
      label: 'Physics: circuits &amp; energy transfer - U6 now',
      pill: 'p1', pillText: 'U6 now',
      score: 'G4: Q3 (initial energy form in a circuit - battery = chemical energy) - the last individual baseline miss. U6 lessons + HTML test built - complete circuits, switches, the chemical&rarr;electrical&rarr;light/heat energy chain, conductors vs insulators, and fault-finding.',
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
      label: 'Remaining one-off: astronomy',
      pill: 'p3', pillText: 'Later rotation',
      score: 'G4: Q32 (night sky/constellations) - the last untouched individual baseline miss once U6 (circuits) is done. Earth &amp; Space is otherwise his weakest strand on the radar (50%), so this is picked up alongside other first-time Earth &amp; Space content in a later rotation unit.',
      fillClass: 'g3', fillPct: 65
    }
  ]
};
