export const skills = {
  Languages: [
    { name: 'Python', level: 85 },
    { name: 'C', level: 80 },
    { name: 'C++', level: 70 },
    { name: 'JavaScript', level: 85 },
  ],
  Frontend: [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'React', level: 75 },
  ],
  Backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'Flask', level: 75 },
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 70 },
    { name: 'Supabase', level: 70 },
  ],
  'ML & Tools': [
    { name: 'Pandas', level: 75 },
    { name: 'NumPy', level: 70 },
    { name: 'Scikit-learn', level: 70 },
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 60 },
    { name: 'Figma', level: 70 },
  ],
};

export const projects = [
  {
    name: "DOP Portal — Director's Office Portal",
    icon: '🏛️',
    stamp: 'Internship',
    date: 'May – Jul 2026 · LNMIIT Summer Internship',
    teaser: "Digitizing the Director's Office workflow at LNMIIT — meetings, approvals and documents, end to end.",
    points: [
      "Full-stack web app built during my summer internship for the Director's Office at LNMIIT",
      'Digitizes meeting requests, visitor approvals, calendar events, documents, tasks and announcements',
      'Replaces manual, paper-based processes with a secure, role-based digital system',
      'Accessible from any device via browser',
    ],
    tech: ['Node.js', 'React', 'MySQL'],
    github: 'https://github.com/Harshitaarathore/DOP-Portal-Final',
    live: 'https://dop-portal-final.vercel.app',
  },
  {
    name: 'TrustLens — Scam Detection Platform',
    icon: '🛡️',
    stamp: 'Hackathon MVP',
    date: 'Jan – Feb 2026 · Team of 3',
    teaser: 'AI-driven scam detection with on-chain verification, built in a 72-hour hackathon sprint.',
    points: [
      'Built an AI-driven platform that evaluates online communities for scams, spam and fake engagement',
      'Implemented the backend on Supabase for auth, database management and real-time updates',
      'Integrated a Solana-based token workflow with on-chain verification via Monad blockchain',
      'Led a team of 3 to a functional MVP inside a 72-hour hackathon window',
    ],
    tech: ['Supabase', 'Solana', 'Monad', 'AI APIs'],
    github: 'https://github.com/Harshitaarathore/trustlens',
  },
  {
    name: 'Loan Pre-Eligibility Prediction System',
    icon: '📊',
    stamp: 'Completed',
    date: 'Feb – May 2026',
    teaser: 'An ML pipeline that predicts loan pre-eligibility from applicant data, deployed with Flask.',
    points: [
      'Built an ML model to predict loan pre-eligibility from applicant financial and demographic data',
      'Handled preprocessing: missing values, feature encoding, normalization',
      'Compared Logistic Regression, Decision Tree and Random Forest to optimize accuracy and F1-score',
      'Deployed with Flask for a real-time eligibility check web interface',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    github: 'https://github.com/Harshitaarathore/loan-pre-eligibility-system',
  },
  {
    name: 'Lost & Found Management System',
    icon: '🔎',
    stamp: 'Deployed',
    date: 'Oct – Nov 2025',
    teaser: 'A campus-wide system replacing WhatsApp groups and notice boards for lost & found items.',
    points: [
      'Built a full-stack web app to manage lost and found items across a university campus',
      'Implemented item reporting, search and status-tracking with Node.js and MySQL',
      'Replaced manual notice boards and WhatsApp coordination with one centralized system',
    ],
    tech: ['Node.js', 'MySQL', 'JavaScript'],
  },
  {
    name: 'BK Solar & Battery — Business Website',
    icon: '☀️',
    stamp: 'Live',
    date: 'May – Jun 2025',
    teaser: 'A responsive site for a real-world solar and battery solutions provider.',
    points: [
      'Designed and built a responsive site for a real-world solar and battery solutions provider',
      'Built dynamic product showcases and a customer inquiry form with JavaScript',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Harshitaarathore/BK_solar_and_Batteries',
  },
];

export const timeline = [
  { type: 'Education', year: '2024 — 2028', title: 'B.Tech, Computer Science', place: 'JK Lakshmipat University, Jaipur, Rajasthan' },
  { type: 'Hackathon', year: 'Sep 2025', title: 'Smart India Hackathon (SIH)', place: 'National-level hackathon' },
  { type: 'Hackathon', year: 'Jan 2026', title: 'LNMIIT Hackathon (LNM Hack)', place: 'Competitive build sprint' },
  { type: 'Internship', year: 'May – Jul 2026', title: "Summer Intern — Director's Office Portal", place: 'LNMIIT' },
];

export const certs = [
  { name: 'Database — Infosys Springboard', link: '/certificates/dbms-springboard.pdf' },
  { name: 'Cybersecurity Simulation — TATA', link: '/certificates/tata-certificate.pdf' },
  { name: 'LNMIIT Summer Internship (LUSIP) 2026', link: '/certificates/lusip-2026.pdf' },
   { name: 'Finance Research Analyst Internship — Wintern Whiz', link: '/certificates/Cert-2.pdf' },
];