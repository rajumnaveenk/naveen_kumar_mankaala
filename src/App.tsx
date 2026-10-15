import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Code2,
  Download,
  FileText,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  Palette,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const highlights = [
  'Strengthened front-end delivery efficiency by establishing reusable UI components and standardized front-end practices, enabling greater consistency, maintainability, and scalability across enterprise web applications.',
  'Contributed to successful digital modernization and migration initiatives across global client engagements, supporting AEM migrations, legacy form transformation, responsive UI enhancements, and accessibility-driven improvements to elevate digital experience quality.',
];

const competencies = [
  'UI/UX Engineering & User-Centric Design',
  'Component-Based & Reusable UI Development',
  'Responsive & Mobile-First Web Design',
  'Accessibility & WCAG/ADA Compliance',
  'AEM Migration & Digital Modernization',
  'Content Strategy & Digital Experience Management',
  'Web Performance & Cross-Browser Optimization',
];

const skills = [
  { label: 'Frontend & Web', value: 'HTML5, CSS3, Sass, JavaScript, TypeScript, jQuery, Bootstrap 3/4' },
  { label: 'Frameworks & Libraries', value: 'Angular 2–17, Angular Material' },
  { label: 'Adobe Technologies', value: 'Adobe Experience Manager (AEM), Adobe CQ5, AEM Front-end, Adaptive Forms, Content Fragments, Experience Fragments, Adobe Forms Designer' },
  { label: 'Design & Prototyping', value: 'Adobe Photoshop, Figma' },
  { label: 'Productivity', value: 'MS Word, MS Excel, MS PowerPoint' },
];

const experiences = [
  {
    period: 'Apr 2025 — Oct 2026',
    company: 'Tata Consultancy Services (Contract)',
    title: 'Front-end Engineer',
    project: 'Becton Dickinson (BD)',
    client: 'US Client',
    tech: 'AEM Front-end, Content Authoring, HTML5, CSS3, JavaScript, jQuery, React.js',
    bullets: [
      'Contributed to front-end development and enhancement of enterprise web experiences for Becton Dickinson, supporting new features and ongoing platform improvements.',
      'Developed and integrated reusable UI components to strengthen functionality, consistency, maintainability, and overall user experience.',
      'Ensured cross-browser compatibility across Chrome, Edge, Firefox, and Safari through structured validation and testing.',
      'Collaborated with the development and design teams to implement UI/UX enhancements, troubleshoot front-end issues, and optimize usability and application performance.',
    ],
  },
  {
    period: 'Jan 2025 — Mar 2025',
    company: 'Tata Consultancy Services (Contract)',
    title: 'Front-end Engineer',
    project: 'USAA — AEM Migration',
    client: 'US Client',
    tech: 'AEM Front-end, Content Authoring, HTML5, CSS3',
    bullets: [
      'Created and configured Content Fragments and Experience Fragments using WCM keys to support structured AEM content migration.',
      'Supported AEM migration activities while maintaining UI consistency and responsive behavior across digital experiences.',
      'Performed comprehensive content validation and quality checks to ensure accuracy, consistency, and readiness of migrated content.',
    ],
  },
  {
    period: 'Apr 2014 — Aug 2024',
    company: 'Virtusa Consulting Services',
    title: 'Senior Software Engineer | 2022 — 2024',
    project: 'Revolving — USA Client',
    client: 'USA Client',
    tech: 'HTML5, CSS3, Bootstrap 4, JavaScript, Angular/Angular 2–17, Adobe AEM, Agile/Scrum',
    bullets: [
      'Revamped front-end architecture and UI experiences using HTML5, CSS3, Bootstrap 4, and JavaScript to strengthen usability, responsiveness, and performance.',
      'Developed modular and reusable UI components, while enhancing existing components to improve consistency and user engagement.',
      'Implemented front-end solutions aligned with WCAG accessibility standards, supporting inclusive and accessible digital experiences.',
    ],
  },
  {
    period: '2021 — 2022',
    company: 'Virtusa Consulting Services',
    title: 'Associate Consultant',
    project: 'Wiley — Adobe Digital Marketing',
    client: 'USA Client',
    tech: 'HTML5, Sass, Bootstrap 4, JavaScript, AEM Front-end, Agile/Scrum',
    bullets: [
      'Engineered custom and reusable UI components using HTML5, Sass, Bootstrap 4, and JavaScript to enhance website functionality and interactivity.',
      'Implemented responsive and accessibility-focused front-end solutions, improving usability and consistency across digital experiences.',
    ],
  },
  {
    period: '2020 — 2021',
    company: 'Virtusa Consulting Services',
    title: 'Associate Consultant',
    project: 'New York Life Insurance Company — Adobe Forms Migration',
    client: 'USA Client',
    tech: 'Adobe Forms Designer',
    bullets: [
      'Executed large-scale PDF form migration initiatives using Adobe Forms Designer, supporting the transition of legacy forms into updated digital formats.',
      'Enhanced existing PDF forms by restructuring and modifying content, layouts, and interactive elements to improve usability and user interaction.',
    ],
  },
  {
    period: '2019 — 2020',
    company: 'Virtusa Consulting Services',
    title: 'Engineer',
    project: 'New York Life Insurance Company — Adobe',
    client: 'USA Client',
    tech: 'HTML5, CSS3, Bootstrap 4, JavaScript, AEM Front-end, Agile/Scrum',
    bullets: [
      'Developed AEM Adaptive Forms to streamline digital form submission and improve the overall form interaction experience.',
      'Engineered JavaScript-based validation mechanisms to strengthen data accuracy and support error-free form interactions.',
      'Performed cross-platform and responsive compatibility testing to ensure consistent form behavior and usability across devices.',
    ],
  },
  {
    period: '2018 — 2019',
    company: 'Virtusa Consulting Services',
    title: 'Engineer',
    project: 'LxBS — USA Client',
    client: 'USA Client',
    tech: 'HTML5, CSS3, Bootstrap, TypeScript, Pyroshop, Angular 6–8',
    bullets: [
      'Designed and developed interactive, responsive UI components using Angular 6–8, HTML5, CSS3, and Bootstrap.',
      'Leveraged Angular Material to build scalable interface components and support consistent front-end development.',
      'Validated device responsiveness and UI behavior to ensure optimized user experiences across supported platforms.',
    ],
  },
  {
    period: '2016 — 2018',
    company: 'Virtusa Consulting Services',
    title: 'Engineer',
    project: 'A&E Networks — USA Client',
    client: 'USA Client',
    tech: 'HTML5, CSS3, Bootstrap 3, TypeScript, Photoshop, Angular 2',
    bullets: [
      'Developed front-end architecture and responsive interfaces using Angular 2, TypeScript, HTML5, CSS3, and Bootstrap 3.',
      'Customized Angular Material components to align interface design with application-specific design and usability requirements.',
    ],
  },
  {
    period: '2014 — 2016',
    company: 'Virtusa Consulting Services',
    title: 'Associate Engineer',
    project: 'Cisco Systems, Inc.',
    client: 'Technology Client',
    tech: 'HTML5, CSS3, Adobe CQ5/AEM, Photoshop',
    bullets: [
      'Developed and enhanced enterprise web experiences using Adobe CQ5/AEM, HTML5, CSS3, and Photoshop.',
      'Created custom UI components to strengthen website functionality, visual consistency, and user engagement.',
      'Performed detailed responsive testing and optimization to ensure seamless experiences across mobile and tablet devices.',
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const downloadPortfolio = () => {
    window.print();
  };

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Naveen Kumar Mankaala home" onClick={closeMenu}>
          <span className="brand-mark">NK</span>
          <span className="brand-name">Naveen Kumar <strong>Mankaala</strong></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <button className="nav-download" onClick={downloadPortfolio}>
            <Download size={16} /> Download CV
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> UI/UX Developer & Front-end Engineer</p>
            <h1>Designing digital experiences that feel <em>clear, capable, and human.</em></h1>
            <p className="hero-intro">Front-end engineer and AEM specialist with <strong>11+ years</strong> of experience creating accessible, scalable, and high-performing digital experiences for enterprise organizations.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">Explore my work <ArrowDown size={17} /></a>
              <a className="button button-ghost" href="#contact">Let&apos;s connect <MoveRight size={17} /></a>
            </div>
            <div className="hero-proof">
              <span><strong>11+</strong> years experience</span>
              <span><strong>AEM</strong> DIGITAL EXPERIENCE DEVELOPER</span>
              <span><strong>WCAG</strong> focused</span>
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="portrait-card">
              <img className="portrait-image" src="dist\assets\Naveen_kumar_M.jpeg" alt="Naveen Kumar Mankaala" />
            </div>
          </div>
        </section>

        <section id="about" className="section-wrap content-section about-section">
          <div className="section-heading"><p className="eyebrow">01 — About me</p><h2>Turning complexity into <span>clarity.</span></h2></div>
          <div className="about-grid">
            <div className="about-lead"><p>For more than a decade, I&apos;ve worked at the intersection of thoughtful design and robust engineering. I build interfaces that are not only visually polished, but reliable, accessible, and genuinely useful.</p><p>My experience spans AEM, Angular, responsive web development, content strategy, and digital modernization for global organizations — always with a focus on the people using the product.</p></div>
            <div className="competency-panel"><p className="panel-label">What I bring</p>{competencies.map((item, index) => <div className="competency" key={item}><span>0{index + 1}</span><strong>{item}</strong><ChevronRight size={16} /></div>)}</div>
          </div>
        </section>

        <section className="section-wrap content-section highlights-section">
          <div className="section-heading compact"><p className="eyebrow">02 — Highlights</p><h2>Built for <span>impact.</span></h2></div>
          <div className="highlight-grid">{highlights.map((highlight, index) => <article className="highlight-card" key={highlight}><span className="highlight-number">0{index + 1}</span><p>{highlight}</p><ArrowUpRight size={20} /></article>)}</div>
        </section>

        <section id="experience" className="section-wrap content-section experience-section">
          <div className="section-heading"><p className="eyebrow">03 — Career timeline</p><h2>A career of <span>continuous evolution.</span></h2></div>
          <div className="timeline">{experiences.map((experience, index) => <article className="timeline-item" key={`${experience.project}-${experience.period}`}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-content"><div className="timeline-topline"><span className="timeline-period">{experience.period}</span><span className="timeline-company">{experience.company}</span></div><h3>{experience.title}</h3><p className="project-line"><strong>Project:</strong> {experience.project} <span>·</span> <strong>Technologies:</strong> {experience.tech}</p><ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}</div>
        </section>

        <section id="skills" className="section-wrap content-section skills-section">
          <div className="section-heading"><p className="eyebrow">04 — Technical toolkit</p><h2>The tools behind the <span>craft.</span></h2></div>
          <div className="skills-layout"><div className="skills-list">{skills.map((skill) => <div className="skill-row" key={skill.label}><div className="skill-icon">{skill.label === 'Design & Prototyping' ? <Palette size={19} /> : skill.label === 'Frameworks & Libraries' ? <Code2 size={19} /> : <Globe2 size={19} />}</div><div><h3>{skill.label}</h3><p>{skill.value}</p></div></div>)}</div><div className="skill-statement"><span className="statement-mark">&ldquo;</span><p>Great digital work is where empathy meets precision.</p><span className="statement-caption">— Naveen Kumar Mankaala</span></div></div>
        </section>

        <section id="education" className="section-wrap content-section credentials-section">
          <div className="credential-card"><div className="credential-icon"><GraduationCap size={23} /></div><div><p className="eyebrow">Education</p><h3>B.Sc. (Computer Science)</h3><p>Indian Institute of Management and Commerce (IIMC), Hyderabad <span>· 2013</span></p></div></div>
          <div className="credential-card"><div className="credential-icon"><Award size={23} /></div><div><p className="eyebrow">Certification</p><h3>Web Technologies & 2D Animation</h3><p>Arena Animation Institute <span>· 2014</span></p></div></div>
          <div className="credential-card internship-card"><div className="credential-icon"><BriefcaseBusiness size={23} /></div><div><p className="eyebrow">Internship</p><h3>Image Associate Intern · Tech Mahindra</h3><p>2-month internship focused on Adobe Photoshop, image retouching, color correction, quality optimization, and visual design.</p></div></div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-wrap contact-inner">
            <div>
              <p className="eyebrow">05 — Contact</p>
              <h2>Let&apos;s make something <em>meaningful.</em></h2>
              <p className="contact-copy">Have a digital experience that needs more clarity, care, or momentum? I&apos;d love to hear about it.</p>
            </div>
            <div className="contact-details">
              <a href="mailto:naveen.kumar97044@gmail.com"><Mail size={19} />
                <span>naveen.kumar97044@gmail.com</span>
                <ArrowUpRight size={17} /></a><a href="tel:+919010388707"><Phone size={19} /><span>+91 9010388707</span>
                <ArrowUpRight size={17} /></a><a href="https://www.linkedin.com/in/naveen-kumar-mankaala-b9800b14a/" target="_blank" rel="noopener noreferrer"><Linkedin size={19} /><span>LinkedIn profile</span>
                <ArrowUpRight size={17} /></a><div>
                  <MapPin size={19} /><span>Hyderabad, India</span></div>
                  <p>English · Hindi · Telugu</p>
                  </div>
                  </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><p>© 2026 Naveen Kumar Mankaala</p><div className="footer-links"><a href="mailto:naveen.kumar97044@gmail.com" aria-label="Email Naveen"><Mail size={17} /></a><a href="#top" aria-label="Back to top"><ArrowUpRight size={17} /></a></div></footer>
    </div>
  );
}

export default App;
