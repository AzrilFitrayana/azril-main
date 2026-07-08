import type { Projects } from "@/types/types";

export const projects: Projects = [
  {
    slug: "staffflow",
    img: "/project/StaffFlow.png",
    title: "StaffFlow",
    category: "Employee Management System",
    status: "ARCHIVED",
    statusColor: "#474746",
    stack: ["Laravel", "MySQL", "Bootstrap 5"],
    description:
      "Team management tool that turns scattered spreadsheets into one live dashboard — attendance, leave, and payroll updating in real time.",
    year: "2024",
    role: "Back-end Developer",
    duration: "1 Month",
    overview:
      "StaffFlow is a web-based employee management system built as a capstone project from the Mahir Technology independent study program. Developed together with an 8-person team using Laravel and MySQL.",
    problem:
      "Companies need a centralized way to manage employee administration such as employee data, positions, attendance, leave requests, and payroll instead of relying on manual records that are difficult to maintain.",
    solution:
      "Developed an employee management platform using Laravel MVC architecture with MySQL database. The system provides authentication, employee CRUD, position management, attendance tracking, leave management, and automatic payroll calculation.",
    features: [
      "Authentication system with email and password validation.",
      "Employee management module for storing and managing employee information.",
      "Attendance tracking system with present and absent status management.",
      "Time-based attendance availability logic to control daily attendance records.",
      "Leave management system integrated with employee attendance status.",
      "Payroll calculation based on employee position, allowances, and deductions.",
    ],
    contribution:
      "Worked as part of an 8-person development team and was responsible for developing the Attendance module. Implemented attendance status management, present and absent workflows, attendance history processing, Laravel controller logic, and database integration between employee and attendance records.",
    results: [
      {
        number: "6+",
        title: "Core Modules Developed",
        desc: "Implemented employee management, attendance, leave, position management, authentication, and payroll features.",
        progress: 80,
      },
      {
        number: "8",
        title: "Team Members",
        desc: "Collaborated within an eight-person development team during the independent study program.",
        progress: 80,
      },
      {
        number: "100%",
        title: "Responsive Dashboard",
        desc: "Admin dashboard accessible across devices using Bootstrap 5 responsive layout.",
        progress: 100,
      },
    ],
    links: [
      {
        title: "Portofolio on GitHub — @AzrilFitrayana",
        url: "https://github.com/AzrilFitrayana/",
      },
    ],
  },
  {
    slug: "dripalert",
    img: "/project/Group 1.jpg",
    title: "DripAlert",
    category: "IoT Monitoring System",
    status: "STABLE",
    statusColor: "#5B7CF0",
    stack: ["ESP32", "IOT", "WHATSAPP API"],
    description:
      "A smart IV (Intravenous) monitoring device that detects blocked or depleted drips before nurses do — automatic WhatsApp alerts via optocoupler and load cell sensing.",
    year: "2025",
    role: "IoT Developer",
    duration: "6 Months",
    overview:
      "DripAlert is an IoT-based automatic IV (Intravenous) monitoring system developed as a final thesis project at STMIK DCI Tasikmalaya. The system combines embedded sensors and real-time WhatsApp notifications to help nurses monitor infusion conditions without manual bedside checking.",
    problem:
      "Manual IV monitoring requires nurses to repeatedly check patients, which becomes inefficient when handling multiple patients. Blocked or empty IV drips are often detected only after patients report the issue, causing delayed responses.",
    solution:
      "Built an ESP32-based monitoring device using an optocoupler sensor to detect drip flow and a load cell with HX711 module to measure remaining fluid volume. Critical conditions trigger a Node.js and Express backend that sends automatic WhatsApp alerts through Ultramsg API.",
    features: [
      "Real-time IV drip monitoring using an optocoupler sensor to detect blocked infusion flow.",
      "Infusion volume tracking using load cell and HX711 module to measure remaining fluid levels.",
      "Automated WhatsApp alerts for stopped flow, low volume, and critical infusion conditions.",
      "ESP32-based IoT communication system using WiFi for real-time data transmission.",
      "Automatic condition detection to reduce manual checking and improve patient monitoring efficiency.",
    ],
    contribution:
      "Developed the entire system independently as a final thesis project, including problem research, sensor selection, circuit design using Fritzing, ESP32 firmware development, sensor calibration, and backend integration using Node.js and Express.js with Ultramsg WhatsApp API for real-time notification delivery.",
    results: [
      {
        number: "<5s",
        title: "Alert Delivery",
        desc: "WhatsApp notifications successfully delivered within five seconds after critical IV conditions were detected.",
        progress: 90,
      },
      {
        number: "8/8",
        title: "Testing Scenarios Passed",
        desc: "All functional tests including normal flow, blocked drip, low volume, and emergency conditions worked as expected.",
        progress: 100,
      },
      {
        number: "24/7",
        title: "Real-time Monitoring",
        desc: "Continuous infusion monitoring using ESP32 sensors without requiring additional mobile applications.",
        progress: 95,
      },
    ],
    links: [
      {
        title: "Portofolio on GitHub — @AzrilFitrayana",
        url: "https://github.com/AzrilFitrayana/",
      },
      {
        title: "GitHub Repository",
        url: "https://github.com/AzrilFitrayana/DripAlert-ESP32",
      },
    ],
  },
  {
    slug: "unify",
    img: "/project/unify.jpg",
    title: "Unify",
    category: "University Management Platform · 2026",
    status: "ACTIVE",
    statusColor: "#3AA86A",
    stack: [
      "React.js",
      "Express.js",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
    ],
    description:
      "A data-heavy and relationship-complex full-stack university management dashboard built to master PostgreSQL and relational database architectures.",
    year: "2026",
    role: "Full Stack Developer (Learning)",
    duration: "1 Weeks",
    overview:
      "Unify adalah sebuah aplikasi platform manajemen kelas dan universitas berskala production-grade yang dibangun menggunakan PERN Stack melalui panduan JavaScript Mastery. Fokus utama proyek ini adalah mempelajari manajemen basis data relasional tingkat lanjut menggunakan PostgreSQL dan Drizzle ORM. Aplikasi ini dilengkapi dengan sistem autentikasi multi-role (Admin, Teacher, Student), manajemen departemen dan mata pelajaran, pengaturan kapasitas kelas, serta fitur pendaftaran siswa menggunakan kode undangan instan layaknya Google Classroom.",
    links: [
      {
        title: "Portofolio on GitHub — @AzrilFitrayana",
        url: "https://github.com/AzrilFitrayana/",
      },
      {
        title: "Github Repository Front-end",
        url: "https://github.com/AzrilFitrayana/classroom-frontend",
      },
      {
        title: "Github Repository Back-end",
        url: "https://github.com/AzrilFitrayana/classroom-backend",
      },
      { title: "Live Website", url: "#" },
    ],
  },
  {
    slug: "shayna-lms",
    img: "/project/unify.jpg",
    title: "Shayna LMS",
    category: "Learning Management System",
    status: "ACTIVE",
    statusColor: "#3AA86A",
    stack: ["React.js", "Express.js", "MongoDB", "Tailwind CSS",],
    description:
      "A comprehensive Full-Stack Learning Management System website engineered with MERN Stack to implement complete modern web workflows.",
    year: "2025",
    role: "Full Stack Developer (Learning)",
    duration: "2 Weeks",
    overview:
      "Shayna LMS adalah proyek platform pembelajaran online (E-Learning) yang dipelajari melalui kelas 'Full-Stack JavaScript MERN 2025' di BuildWithAngga. Tujuan utama dari proyek ini adalah menguasai ekosistem non-relasional (NoSQL) menggunakan MongoDB dan menghubungkannya dengan arsitektur Node-Express serta React. Fitur utama mencakup manajemen katalog kursus, halaman kelola materi berbasis video/teks untuk mentor, sistem transaksi/pendaftaran kelas bagi siswa, serta dashboard analytics pendapatan backend.",
    links: [
      {
        title: "Portofolio on GitHub — @AzrilFitrayana",
        url: "https://github.com/AzrilFitrayana/",
      },
      {
        title: "GitHub Repository",
        url: "https://github.com/AzrilFitrayana/Shayna-LMS",
      },
    ],
  },
  {
    slug: "pomodoro-timer",
    img: "/project/pomodoro.png",
    title: "Pomodoro Timer",
    category: "Productivity Web App",
    status: "ACTIVE",
    statusColor: "#3AA86A",
    stack: ["HTML", "CSS", "Javascript"],
    description:
      "A minimal, distraction-free Pomodoro timer that runs entirely in the browser.",
    year: "2024",
    role: "Solo",
    duration: "1 Day",
    overview:
      "Pomodoro Timer is a lightweight productivity web application designed to help users stay focused using the Pomodoro technique. Built with vanilla HTML, CSS, and JavaScript, the app provides a simple timer experience with focused work sessions and scheduled breaks without requiring accounts, installations, or additional dependencies.",
    features: [
      "Custom Pomodoro sessions with focused work time, short breaks, and long break intervals.",

      "Automatic session switching after each timer cycle to maintain productivity flow.",

      "Browser notification support to alert users when a session is completed.",

      "Persistent progress tracking using localStorage to save completed Pomodoro sessions.",

      "Responsive interface optimized for both desktop and mobile devices.",
    ],
    contribution:
      "Developed the Pomodoro timer as a vanilla JavaScript project, implementing timer state management, automatic session transitions, browser notifications, and localStorage persistence without external libraries.",
    links: [
      {
        title: "Portofolio on GitHub — @AzrilFitrayana",
        url: "https://github.com/AzrilFitrayana/",
      },
      {
        title: "GitHub Repository",
        url: "https://github.com/AzrilFitrayana/Pomodoro-Timer",
      },
      {
        title: "Live Website",
        url: "https://effervescent-figolla-529777.netlify.app/",
      },
    ],
  },
  //   {
  //     slug: "resume-checker",
  //     img: "/project/Group 1.jpg",
  //     title: "Resume Checker",
  //     status: "IN REVIEW",
  //     statusColor: "#831F00",
  //     stack: ["Next.js", "TypeScript"],
  //     description:
  //       "An AI-assisted tool that scores resumes against a job description and suggests improvements.",
  //     year: "2026",
  //     role: "Frontend",
  //     duration: "1 Month",
  //     overview:
  //       "Resume Checker gives instant, actionable feedback so candidates can tailor applications with confidence.",
  //     links: [
  //       { title: "Github Repository", url: "https://github.com" },
  //       { title: "Live Website", url: "#" },
  //     ],
  //   },
];
