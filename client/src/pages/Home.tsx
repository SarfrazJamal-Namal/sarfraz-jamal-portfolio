import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronUp,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const profileImage = "/sarfraz-profile-portfolio-4k.png";

const skillGroups = [
  { label: "Languages", items: ["Python", "JavaScript", "SQL", "C++"], icon: Code2 },
  { label: "Frontend", items: ["React.js", "JavaScript", "HTML", "Tailwind CSS", "Bootstrap", "Responsive Design"], icon: Sparkles },
  { label: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST API Design", "Object Oriented Programming"], icon: BriefcaseBusiness },
  { label: "AI and ML", items: ["LLM Integration (Llama 3, YOLO)", "Retrieval Augmented Generation (RAG)", "Agentic AI System Design", "AI Chatbot Development", "Trained Model Integration"], icon: Sparkles },
  { label: "Databases", items: ["MySQL", "MongoDB", "Firebase", "Schema Design", "Query Optimization"], icon: Database },
  { label: "Security", items: ["JWT Authentication", "Google OAuth", "Email Verification", "Password Hashing and Salting", "Role Based Access Control"], icon: ShieldCheck },
  { label: "Tools and Practices", items: ["Git", "GitHub", "Docker", "VS Code", "Claude", "Cursor", "Copilot", "Agile Development", "Debugging", "Technical Documentation"], icon: Check },
];

const experience = [
  {
    role: "Web Application Development Trainee",
    company: "Swiftly Seva Multi-Utility Pvt. Ltd.",
    meta: "Remote · September 2026 – October 18, 2026",
    detail: "Enrolled in a 4-week web application development training program, focused on hands-on project work and practical skill development.",
  },
  {
    role: "Web Development and Designing Intern",
    company: "Oasis Infobyte",
    meta: "Remote · August 2026 – September 2026",
    detail: "Built and deployed a full stack MERN pizza ordering platform with a responsive React and Tailwind CSS interface, Node.js and Express.js REST APIs, OTP based authentication, and MongoDB Atlas data models. Integrated the Razorpay payment gateway for secure checkout, and built three Python GUI utilities: a BMI calculator, a password generator, and a weather app using the OpenWeatherMap API.",
  },
  {
    role: "Freelance Web Developer and Designer",
    company: "Fiverr and Direct Clients",
    meta: "October 2024 – May 2026",
    detail: "Delivered client projects including logo design, website debugging, feature updates, and complete website design, development, and deployment. Also completed PowerPoint presentations and Word document formatting while managing multiple client deadlines independently.",
  },
];

const projects = [
  { name: "FinEdge Mobile", type: "Offline-First FinTech Platform", date: "September 02, 2026 – September 08, 2026", stack: "React Native · Expo · TypeScript · WatermelonDB/SQLite · RxJS · Zustand · PostgreSQL · Node.js · Express.js", description: "Built an offline-first mobile app with delta syncing to PostgreSQL through a Node.js and Express.js backend. Implemented Argon2id, JWT, and SecureStore authentication, plus a Greedy Settlement Optimizer and budgeting engine with a dynamic Daily Safe Spend Limit." },
  { name: "Universal Summarizer", type: "Agentic AI, RAG Based Platform", date: "Ongoing, 2026", stack: "Python · Node.js · Express.js · MySQL · Llama 3 · RAG · Docker", description: "Building a full stack agentic AI platform that integrates a Llama 3 model into a RAG pipeline to extract or summarize content from any media source, with authentication, access control, and Docker containerization." },
  { name: "AI Based Sentiment Analysis Tool", type: "Applied NLP", date: "October 2024 – January 2025", stack: "Python · Flask · NLP · REST API", description: "Built a Python and Flask tool that processed text data and applied NLP techniques to classify sentiment, exposed through a REST API." },
  { name: "Sustainable Development Goals Platform", type: "Data & SDG Monitoring", date: "August 2025", stack: "Python · Django · Flask · MongoDB · React", description: "Built a Python-based sustainability tracking system for data analytics, visualization, and SDG monitoring." },
  { name: "Distributed Chat Application", type: "Real-Time Messaging", date: "March 2025 – June 2025", stack: "Node.js · Express.js · MongoDB · WebSockets", description: "Built a real-time messaging application with persistent chat history across sessions." },
  { name: "Child Finder Hub", type: "Full-Stack Records Platform", date: "March 2026", stack: "React.js · Node.js · Express.js · MongoDB", description: "Built a full stack web application to manage and search records for missing children, with complete CRUD functionality." },
  { name: "Digital Learning Mentor", type: "Software Engineering Project", date: "May 2025", stack: "Technical documentation · Architecture · Process flows", description: "Built a software engineering project with full technical documentation, architectural diagrams, and process flowcharts." },
  { name: "Hospital Management System", type: "Network Infrastructure", date: "September 2025", stack: "Cisco Packet Tracer · Secure communication", description: "Designed a healthcare network infrastructure focused on secure communication between hospital systems." },
  { name: "Sauda Salaf Database", type: "E-Commerce Database", date: "November 2024", stack: "Python · SQL", description: "Built an e-commerce database project to structure, store, and process inventory and transaction data." },
  { name: "Counting Sort Project", type: "Algorithms", date: "February 2024", stack: "Python · Data Structures and Algorithms", description: "Implemented a counting sort algorithm in Python to reinforce core data structures and algorithms concepts." },
];

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Namal University, Mianwali",
  dates: "October 2022 – June 2026",
  coursework: "Data Structures and Algorithms, Database Systems, Software Engineering, Web Development, Artificial Intelligence, Machine Learning, Object Oriented Programming",
};

const certifications = [
  "Complete Full Stack Web Development Bootcamp, Udemy · July 2025",
  "Google Data Analytics Professional Certificate, Coursera",
  "Cyber Security Workshop, 15 Hours Lab Training",
  "Student of the Year, Namal University · April 2025",
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleProjects = useMemo(() => showAllProjects ? projects : projects.slice(0, 6), [showAllProjects]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <main>
      <nav className={`site-nav ${scrolled ? "is-scrolled" : ""}`} aria-label="Primary navigation">
        <div className="nav-inner">
          <button className="brand" onClick={() => scrollTo("top")} aria-label="Back to top">
            <span className="brand-mark">SJ</span>
            <span>Sarfraz Jamal</span>
          </button>
          <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>
            ))}
            <a className="nav-cta" href="#contact" onClick={(event) => { event.preventDefault(); scrollTo("contact"); }}>Let’s talk <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> Available for on-site, remote, or hybrid work</div>
            <p className="hero-kicker">Computer Science Graduate · Software Engineering · AI / ML</p>
            <h1>Building clear, capable systems for <em>real-world use.</em></h1>
            <p className="hero-summary">I’m Sarfraz Jamal, a Computer Science graduate from Namal University Mianwali with hands-on experience across software engineering, web development, and AI/ML integration for automation, ready deployment, and API-driven systems.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => scrollTo("projects")}>Explore my work <ArrowUpRight size={18} /></button>
              <a className="text-link" href="mailto:sarfrazjamal56@gmail.com">sarfrazjamal56@gmail.com <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-facts">
              <span><MapPin size={16} /> Ara Akbar Shah, Kot Addu</span>
              <span><GraduationCap size={16} /> Namal University, Mianwali</span>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-backdrop" />
            <div className="portrait-frame"><img src={profileImage} alt="Portrait of Sarfraz Jamal" /></div>
            <div className="portrait-caption"><span>01</span><span>Sarfraz Jamal</span></div>
          </div>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="intro-band" id="about">
        <div className="container intro-grid">
          <div className="intro-label"><span className="eyebrow">01 / Profile</span><Quote size={34} strokeWidth={1.3} /></div>
          <div>
            <p className="lead">Comfortable building full stack applications, integrating REST APIs, and connecting AI models into working products.</p>
            <p className="muted-copy">Actively looking for an internship or job opportunity. I care about understandable interfaces, dependable backend logic, and shipping work that can be used—not just demonstrated.</p>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="container">
          <SectionHeading eyebrow="02 / Experience" title="A practical foundation." intro="Training, internships, and freelance work across the full product cycle—from a first idea to a deployed, usable experience." />
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item" key={item.role}>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-main"><h3>{item.role}</h3><p className="company">{item.company}</p><p className="experience-detail">{item.detail}</p></div>
                <p className="experience-meta">{item.meta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <SectionHeading eyebrow="03 / Selected projects" title="From models to meaningful products." intro="A selection of academic, independent, and client-facing builds documented in my CV." />
          <div className="project-feature">
            <div className="project-feature-number">0{activeProject + 1}</div>
            <div className="project-feature-copy"><p className="eyebrow">Featured build</p><h3>{projects[activeProject].name}</h3><p className="project-type">{projects[activeProject].type}</p><p>{projects[activeProject].description}</p><div className="stack-line">{projects[activeProject].stack}</div></div>
            <div className="project-switcher">{projects.slice(0, 6).map((project, index) => <button key={project.name} className={index === activeProject ? "active" : ""} onClick={() => setActiveProject(index)}><span>0{index + 1}</span>{project.name}<ArrowUpRight size={15} /></button>)}</div>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => <article className="project-card" key={project.name}><div className="project-card-top"><span>0{index + 1}</span><span>{project.date}</span></div><h3>{project.name}</h3><p className="project-type">{project.type}</p><p>{project.description}</p><div className="project-tags">{project.stack.split(" · ").slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}
          </div>
          <button className="show-more" onClick={() => setShowAllProjects(!showAllProjects)}>{showAllProjects ? <>Show fewer projects <ChevronUp size={18} /></> : <>View all projects <ChevronDown size={18} /></>}</button>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <SectionHeading eyebrow="04 / Capabilities" title="The tools behind the work." intro="A focused toolkit spanning interfaces, APIs, data, security, and applied AI." />
          <div className="skills-grid">{skillGroups.map((group) => { const Icon = group.icon; return <article className="skill-card" key={group.label}><Icon size={21} strokeWidth={1.6} /><h3>{group.label}</h3><div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>; })}</div>
        </div>
      </section>

      <section className="section education-section">
        <div className="container education-grid">
          <div><SectionHeading eyebrow="05 / Education" title="Grounded in computer science." /><div className="degree-line"><img className="university-logo" src="/namal-university-logo-4k.png" alt="Namal University logo" /><div><h3>{education.degree}</h3><p>{education.school}</p></div><span>{education.dates}</span></div><div className="coursework"><span className="eyebrow">Coursework</span><p>{education.coursework}</p></div></div>
          <div className="fyp-card"><span className="eyebrow">Final Year Project · October 2025 – June 2026</span><h3>AI Powered Cotton Yield and Boll Health Estimation</h3><ul><li>Built a production-ready platform combining FastAPI, MySQL, and React, with trained machine learning models powering cotton yield and boll health predictions from smartphone images.</li><li>Integrated an AI chatbot into the platform to guide users through the prediction process.</li><li>Secured the platform with Google OAuth, email verification, salted password hashing, JWT sessions, and role based access control, containerized with Docker.</li></ul></div>
        </div>
      </section>

      <section className="section credentials-section">
        <div className="container credentials-grid">
          <div><SectionHeading eyebrow="06 / Credentials" title="Proof points beyond the build." /><div className="credential-list">{certifications.map((item, index) => <div className="credential-row" key={item}><span>0{index + 1}</span><p>{item}</p><Check size={16} /></div>)}</div></div>
          <div className="language-card"><span className="eyebrow">Languages & interests</span><h3>Always learning, always building.</h3><p><strong>Languages</strong><br />English (Professional), Urdu (Native)</p><p><strong>Interests</strong><br />Software Development, Artificial Intelligence, Web Development, Cricket, Gardening</p></div>
        </div>
      </section>

      <section className="closing-section" id="contact">
        <div className="container closing-inner"><div><span className="eyebrow">07 / Contact</span><h2>Let’s make the next<br /><em>useful thing.</em></h2></div><div className="contact-panel"><p>For internship, job, or project opportunities, reach me directly.</p><a href="mailto:sarfrazjamal56@gmail.com"><Mail size={18} /> sarfrazjamal56@gmail.com <ArrowUpRight size={16} /></a><a href="tel:+923269349235"><Phone size={18} /> +92 326 9349235 <ArrowUpRight size={16} /></a><div className="social-links"><a href="https://www.linkedin.com/in/sarfraz-jamal-b59b23346/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href="https://github.com/SarfrazJamal-Namal" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a></div></div></div>
      </section>

      <footer className="site-footer"><div className="container footer-inner"><span>© 2026 Sarfraz Jamal</span><span>Computer Science · Software · AI / ML</span><button onClick={() => scrollTo("top")}>Back to top <ChevronUp size={16} /></button></div></footer>
    </main>
  );
}

export default Home;
