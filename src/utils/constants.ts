export const personalInfo = {
  name: "NITHIYANANTHAN M",
  displayName: "Nithin",
  title: "Business Analyst | AI-Enthusiast",
  tagline: "Transforming business requirements into innovative solutions through data-driven insights and strategic analysis",
  email: "mcnithin99@gmail.com",
  phone: "+91 9788546486",
  location: "Chennai, India",
  linkedin: "https://www.linkedin.com/in/nithinmc",
  profileImage: "https://raw.githubusercontent.com/NITHINMBA/profile/main/public/Photo%20cut%20bw.JPG"
};

export const aboutInfo = {
  description: "Self-motivated AI-driven Business Analyst with expertise in requirements gathering, stakeholder collaboration, and process optimization. Currently pursuing advanced certifications in Agile methodologies and AI for business applications. Passionate about bridging the gap between business needs and technical solutions through comprehensive analysis and strategic documentation.",
  highlights: [
    "MBA in Operations & HR (94.5% TANCET score)",
    "B.Tech in Information Technology",
    "1+ years of hands-on experience in business analysis",
    "Certified in Agile Project Management and SAFe methodologies"
  ]
};

export const experienceData = [
  {
    role: "Business Analyst (Management Trainee)",
    company: "Bahwan Cybertek Chennai",
    duration: "Dec 2024 - Present",
    current: true,
    responsibilities: [
      "Requirements gathering and stakeholder collaboration",
      "User story creation and story point estimation",
      "User flow diagram design using Draw.io",
      "Wireframe development in Figma and Balsamiq",
      "Cross-functional team coordination"
    ]
  },
  {
    role: "Business Analyst Intern",
    company: "Srushty Global Solutions",
    duration: "June 2024 - Nov 2024",
    current: false,
    responsibilities: [
      "Successfully completed multiple projects including telecom mobile app and IoT water monitoring system",
      "Led requirements analysis and documentation processes",
      "Collaborated with development teams on solution design"
    ]
  }
];

export const projectsData = [
  {
    title: "Telecom Mobile App & CRM Development",
    role: "Business Analyst",
    description: "Led requirements gathering for customer-facing mobile app and internal CRM system",
    deliverables: ["BRDs", "wireframes", "process flows"],
    technologies: ["Figma", "Draw.io", "JIRA"]
  },
  {
    title: "IoT-Based Water Monitoring System",
    role: "Business Analyst", 
    description: "Defined functional and non-functional requirements for real-time water monitoring solution",
    deliverables: ["System behavior documentation", "data flow diagrams", "user requirements"],
    technologies: ["IoT platforms", "documentation tools"]
  }
];

export const skillsData = {
  technicalTools: [
    { name: "Draw.io", description: "Process Flow Design", icon: "FlowChart" },
    { name: "Figma", description: "UI/UX Design", icon: "Figma" },
    { name: "Balsamiq", description: "Wireframing", icon: "Layout" },
    { name: "JIRA", description: "Project Management", icon: "Kanban" },
    { name: "Excel", description: "Data Analysis", icon: "FileSpreadsheet" },
    { name: "PowerBI", description: "Data Visualization", icon: "BarChart3" }
  ],
  coreCompetencies: [
    { name: "Requirements Gathering & Analysis", icon: "Search" },
    { name: "BRD, FRD, PRD Documentation", icon: "FileText" },
    { name: "User Story Creation", icon: "Users" },
    { name: "User Flow Design", icon: "GitBranch" },
    { name: "Wireframe Development", icon: "Smartphone" },
    { name: "Stakeholder Management", icon: "UserCheck" }
  ],
  technologies: [
    { name: "Latest AI Concepts", icon: "Brain" },
    { name: "Fullstack Development Tools", icon: "Code" },
    { name: "AWS", description: "Functional Knowledge", icon: "Cloud" },
    { name: "Agile/Scrum Methodologies", icon: "RefreshCw" },
    { name: "Software Development Lifecycle", icon: "GitCommit" }
  ]
};

export const educationData = [
  {
    degree: "MBA - Operations & HR",
    institution: "University of Madras",
    duration: "2022-2024",
    location: "Chennai, India",
    score: "TANCET: 94.5%"
  },
  {
    degree: "B.Tech - Information Technology", 
    institution: "Anna University (UCEV)",
    duration: "2016-2020",
    location: "Villupuram, India"
  }
];

export const certificationsData = [
  "Atlassian Agile Project Management Professional Certificate",
  "Technical Product Management", 
  "Agile Product Owner",
  "Introduction to SAFe",
  "Business Analysis and Process Management",
  "Generative AI for Business Analyst"
];

export const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Works' },
  { id: 'about', label: 'About' }
];

export const productDesignContent = {
  title: 'Rural Women’s Saving App',
  description:
    'Empower rural women with a simple, secure, and accessible digital platform for saving, investing, and withdrawing money easily, fostering financial independence and inclusion.',
  highlights: [],
  logo: "https://raw.githubusercontent.com/NITHINMBA/profile/c43aa89035f87009da3c89834a7194ee92722877/public/sslogo.png",
  mockupUrl: 'https://nithinmba.github.io/shesaves-prototype-pink/'
};

export const healHubContent = {
  title: 'HealHub',
  description: 'This clinic management system automates patient registration, appointment scheduling, doctor availability management, and multi-channel communications — reducing manual work, eliminating human errors, and improving patient satisfaction and trust.',
  problemStatement: {
    title: '❌ Problem Statement',
    description: 'Traditional clinic workflows rely heavily on manual operations for patient data, appointment booking, and doctor coordination. This results in:',
    points: [
      'Time-consuming processes & patient wait times',
      'Manual errors in registration and scheduling',
      'Communication gaps between patients, staff, and doctors',
      'No centralized view of patient medical history',
      'Reduced patient satisfaction and clinic reputation',
    ]
  },
  asIsProcess: {
    title: '🔎 As-Is Process (Current State)',
    steps: [
      'Patient contacts clinic (visit, call, message, or email).',
      'Front-desk staff registers details manually.',
      'Doctor’s availability is checked by phone or in-person.',
      'Patient waits while confirmation is made.',
      'Appointment is scheduled manually and passed to the doctor.',
    ],
    actors: 'Patient, Front-desk staff, Doctor',
    painPoints: 'Manual errors, delays, lack of records, miscommunication'
  },
  toBeProcess: {
    title: '✅ To-Be Process (Future State with HealHub)',
    steps: [
        'Patient details entered in HealHub (new or existing record).',
        'Patient360 instantly retrieves medical history and insights.',
        'Doctor availability is tracked in real-time.',
        'Appointment slots are scheduled directly in the system.',
        'Doctors access Doctors360 to review assigned appointments and patient insights.',
        'Doctors update their availability through a dedicated interface.',
        'Interaction360 enables staff to handle communications from patients across phone, email, SMS, and WhatsApp in one place.',
    ],
    actors: 'Patient, Front-desk staff, Doctor, Clinic Admin',
    benefits: 'Faster, accurate, transparent, and patient-centric operations'
  },
  systemFeatures: {
    title: '🏗️ System Features (HealHub Modules)',
    modules: [
      {
        title: '1. User Management',
        points: ['Role-based access (Admin, FrontDesk, Doctor)', 'Secure login and permissions']
      },
      {
        title: '2. Patient360',
        points: ['Centralized patient records (demographics, medical history, allergies, past visits)', 'Easy search and retrieval for Admin & FrontDesk', 'Data insights for better consultation preparation']
      },
      {
        title: '3. Doctors360 (for Admin & FrontDesk)',
        points: ['Unified view of each doctor’s profile, specialty, and schedule', 'Access to doctor-specific appointments and assigned patients', 'Helps staff manage doctor-patient coordination efficiently']
      },
      {
        title: '4. Appointment Management',
        points: ['Availability View (Admin & FrontDesk): Check doctor availability and schedule patients', 'Availability Update (Doctors): Update working hours, leave, or exceptions', 'Real-time conflict checks to avoid double bookings']
      },
      {
        title: '5. Interaction360 (for Admin & FrontDesk)',
        points: ['Omnichannel hub for patient communications (Calls, SMS, WhatsApp, Email)', 'Assign queries, track status (Open/Closed), and convert into appointments', 'Improves transparency and reduces missed messages']
      }
    ]
  },
  nonFunctionalRequirements: {
    title: '🔐 Non-Functional Requirements',
    points: [
      'Availability: 24/7 uptime to handle emergencies',
      'Security: Encrypted patient data, role-based access',
      'Scalability: Support large volumes of patients and appointments',
      'Usability: Intuitive UI with minimal clicks for staff efficiency'
    ]
  },
  stakeholderEngagements: {
    title: '👥 Stakeholder Engagements',
    engagements: [
      'Front-desk Staff: Faster registration, easy access to patient & doctor data',
      'Doctors: Update availability, access patient insights quickly',
      'Clinic Admin: Oversee operations, manage users, monitor KPIs',
      'Patients: Reduced wait times, improved trust, better consultation experience'
    ],
    methods: 'Methods: Training, Workshops, Feedback Surveys'
  },
  impact: {
    title: '📊 Impact & Value Proposition',
    points: [
      'Reduced manual errors in scheduling and data entry',
      'Minimized patient waiting time through instant availability checks',
      'Improved doctor efficiency with quick access to patient insights (Doctors360)',
      'Enhanced communication tracking with Interaction360',
      'Strengthened clinic reputation & patient trust through digitization.'
    ]
  },
  logo: null,
  mockupUrl: ''
};
