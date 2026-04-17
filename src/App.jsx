import React, { useState } from 'react'
import {
  Shield,
  Cloud,
  Terminal,
  Code,
  Lock,
  Globe,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  Award,  
  Briefcase,
  Database,
  Layout,
  Network
} from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const personal = {
    name: "Osama Alaa Aldeen",
    title: "Cloud & Cybersecurity Engineer",
    tagline: "Securing multi-cloud environments • Penetration Testing • DevSecOps",
    location: "Amman, Jordan",
    email: "Osama_Alaeddin@protonmail.com",
    github: "https://github.com/osama336",
    linkedin: "https://www.linkedin.com/in/osama-alaa-aldeen-46a768298"
  }

  const certifications = [
    { name: "AWS Certified Cloud Practitioner", link: "https://www.credly.com/badges/0743f6c1-7daa-4f4a-8fac-92bd4c6e9299", issuer: "Amazon Web Services", icon: <Cloud className="w-7 h-7 text-orange-400" /> },
    { name: "Oracle Cloud Infrastructure 2025 Certified Networking Professional", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=92460EA8651324DA6A324D6CDD03B7DCF95E69C19C797C914654D3A18437DCA6", issuer: "Oracle", icon: <Cloud className="w-7 h-7 text-red-400" /> },
    { name: "Cyber Warriors Training Certificate", link: "https://www.linkedin.com/in/osama-alaa-aldeen-46a768298/overlay/Certifications/1776297976/treasury/?profileId=ACoAAEgD8pIBozbe5vJm1GPbDcfRre7LhXOjeWw", issuer: "National Cyber Security Center (NCSCJO)", icon: <Shield className="w-7 h-7 text-emerald-400" /> },
    { name: "Oracle Cloud Infrastructure 2025 Migration Architect Certified Professional", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9B6CC78728D56BCD7CCAC7E70D39180FA8A2F520BCF035555A0648E148F59F73", issuer: "Oracle", icon: <Cloud className="w-7 h-7 text-emerald-400" /> },
    { name: "Oracle Cloud Infrastructure 2025 Multicloud Architect Certified Professional", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CF7EEE60058B58B473EDC6E3F8E997177071C23CDA81C2206149D0C976B0E6CA", issuer: "Oracle", icon: <Cloud className="w-7 h-7 text-emerald-400" /> },
    { name: "Oracle Cloud Infrastructure 2025 Certified Architect Associate", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=AD5290E812D3E4B9A3FACAC09BB34720D488E9891E960B1EB296E682B47C0CC7", issuer: "Oracle", icon: <Cloud className="w-7 h-7 text-emerald-400" /> },
    { name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=973B6FA11C6FFD5C3F0D763155A45214198FE68FB7727D23B5D4F115DEB09EE0", issuer: "Oracle", icon: <Cloud className="w-7 h-7 text-emerald-400" /> }
  ]

  const skills = {
    cloud: ["Oracle Cloud Infrastructure", "AWS", "Google Cloud", "Azure"],
    devops: ["Terraform", "Docker", "Git", "GitHub Actions", "Kubernetes"],
    security: ["Penetration Testing", "Kali Linux", "Burp Suite", "IDS/IPS", "OWASP ZAP", "Vulnerability Assessment"],
    scripting: ["Python", "Bash", "JavaScript", "PowerShell"],
    fullstack: ["HTML", "CSS", "Bootstrap", "React", "Nodejs","Postman"],
    Database: ["MySql", "PostgreSQL", "Oracle SQL", "PL/SQL", "Mongodb"],
    Networking: ["TCP/IP & OSI Model",
      "Network Scanning & Enumeration (Nmap)",
      "Firewalls & Security Groups",
      "VPN & Secure Tunneling",
      "Wireshark / Packet Analysis",
      "Network Segmentation & VLANs",
      "DNS & Subnetting",
      "Cloud Networking (VPC, VNet, Subnets)"]
  }

  const projects = [
    {
      title: "Network Anomaly Detection System",
      description: "The system relies on: Collecting and analyzing data using the LUFlow dataset (benign, malicious, outlier). Training an ANN model using Keras to achieve high accuracy and reduce false positives. Developing an interactive interface with Streamlit to monitor live traffic via Tshark.",
      tech: ["Python", "Keras", "Tshark", "Pandas", "Streamlit", "Numpy"],
      category: "Security & Deep Learning",
      link: "https://github.com/osama336/Network-Anomaly-Detection-System"
    },
    {
      title: "Tic-Tac-Toe Game using React.js",
      description: "A classic Tic-Tac-Toe game developed using React.js with a clean, modern interface and responsive design. Players take turns placing X and O on a 3×3 grid, with real-time win detection, draw handling, and a reset button. Built with functional components, useState for game state management, and simple CSS for styling",
      tech: ["HTML", "CSS", "JavaScript", "React.js","Minimax Algorithm for AI"],
      category: "Full Stack MERN Developer",
      link: "https://tic-tac-toe-game-three-sigma.vercel.app/"
    },
        {
      title: "MealDetails Modal Component",
      description: "A responsive and elegant React modal component that displays detailed information about a meal fetched from TheMealDB API .",
      tech: ["Axios", "Bootstrap 5", "TheMealDB API", "React.js"],
      category: "Full Stack MERN Developer",
      link: "https://meal-details.vercel.app/"
    },
    {
      title: "NahamStore Penetration Testing Report",
      description: "Detailed penetration testing report for NahamStore, covering vulnerabilities such as SQL Injection, XSS, and RCE with exploitation steps and mitigation strategies.",
      tech: ["Kali Linux", "Burp Suite", "Nmap", "Gobuster", "Sqlmap", "dirsearch"],
      category: "Penetration Testing",
      link: "#"
    }
  ]

  const experience = [
    {
      role: "Nashama 11 BootCamp",
      company: "National Cyber Security Center (NCSCJO)",
      period: "February 2025 - Present",
      location: "Amman, Jordan",
      description: "Participating in an intensive 440-hour cybersecurity training program focused on hands-on technical skills, English proficiency, and soft skills development. Covered fundamentals, network & OS security, cryptography, offensive/defensive techniques, and practical workshops with Nmap, Burp Suite, Metasploit, Wireshark, and SIEM platforms."
    }
    ,
    {
      role: "Full Stack MERN Developer (Intern) ",
      company: "Digital Opportunity Trust (DOT) Jordan",
      period: "December 2025 - February 2025",
      location: "Amman, Jordan",
      description: "Experienced in building modern, scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Specialized in creating responsive user interfaces, RESTful APIs, secure authentication, and efficient data management. Passionate about clean code, performance optimization, and delivering end-to-end solutions from database to frontend."
    }
    ,
    {
      role: "Cloud Engineer (Intern) ",
      company: "Extreme Cloud Systems",
      period: "August 2025 - November 2025",
      location: "Amman, Jordan",
      description: "Designed and implemented secure multi-cloud architectures across OCI, AWS, Azure, and GCP, incorporating network segmentation, least-privilege IAM, and automated logging/monitoring. Automated infrastructure provisioning and deployments using Terraform and GitHub Actions, enabling consistent, repeatable, and auditable environments with built-in security controls"
    },
    {
      role: "Penetration Tester (Intern)",
      company: "Green Circle for Cybersecurity",
      period: "April 2025 - July 2025",
      location: "Amman, Jordan",
      description: "Conducted security assessments on web applications, APIs, Network, and cloud environments. Identified critical vulnerabilities (SQLi, XSS, IDOR, broken access control) and delivered detailed reports."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-900 selection:text-cyan-100">

      {/* ─── FIXED NAVBAR ──────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-cyan-500" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-cyan-400">Osama Alaa Aldeen</span>
              </span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Skills', 'Projects', 'Certifications', 'Experience','Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              ))}

            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-slate-300 hover:text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-lg">
            <div className="px-4 py-5 space-y-4">
              {['About', 'Skills', 'Projects', 'Certifications','Experience', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-base font-medium text-slate-300 hover:text-cyan-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cyan-400 font-medium"
              >
                GitHub →
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section id="about" className="pt-28 pb-24 px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-900/60 text-cyan-400 text-sm font-medium mb-6">
              <Globe className="w-4 h-4" /> Available for Full-Time, Remote, and Hybrid Work
            </div>

            <h1 className="text-4xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              {personal.name}<br />
            </h1>

            <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl">
              Cloud & Cybersecurity Engineer from Amman, Jordan.<br />
              Focused on multi-cloud security, infrastructure automation, penetration testing and building resilient systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan-700 hover:bg-cyan-600 font-semibold rounded-lg transition shadow-lg shadow-cyan-950/30"
              >
                View Projects
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-700 hover:border-cyan-600 font-semibold rounded-lg transition"
              >
                Contact
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-blue-950/20 border border-cyan-800/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-cyan-600/10 blur-2xl"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQEkDMZLlqqZrQ/profile-displayphoto-scale_400_400/B4EZtLHV6GHUAg-/0/1766491777740?e=1778112000&v=beta&t=Gy2HOw1YYwFofnSb4_GeLhXtlZRJcH6ZiJ4lY5mfWCE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ────────────────────────────────────────────── */}
      <section id="skills" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], i) => {
              const colors = ['cyan', 'emerald', 'rose', 'violet']
              const color = colors[i % colors.length]

              return (
                <div
                  key={category}
                  className={`bg-slate-950/80 p-7 rounded-2xl border border-slate-800 hover:border-${color}-700/50 transition-all duration-300 group`}
                >
                  {category === 'cloud' && <Cloud className={`w-12 h-12 text-${color}-500 mb-6 group-hover:scale-110 transition-transform`} />}
                  {category === 'devops' && <Terminal className={`w-12 h-12 text-${color}-500 mb-6 group-hover:scale-110 transition-transform`} />}
                  {category === 'security' && <Lock className={`w-12 h-12 text-${color}-500 mb-6 group-hover:scale-110 transition-transform`} />}
                  {category === 'scripting' && <Code className={`w-12 h-12 text-${color}-500 mb-6 group-hover:scale-110 transition-transform`} />}
                  {category === 'fullstack' && <Layout className={`w-12 h-12 text-${color}-500 mb-6 group-hover:scale-110 transition-transform`} />} {/* or Globe / Code */}
                  {category === 'Database' && <Database className={`w-12 h-12 text-${color}-500 mb-6 group-hover:scale-110 transition-transform`} />}
                  {category === 'Networking' && <Network className={`w-12 h-12 text-${color}-500 mb-6 group-hover:scale-110 transition-transform`} />}

                  <h3 className="text-2xl font-semibold mb-5 capitalize">{category}</h3>

                  <ul className="space-y-3 text-slate-300">
                    {items.map(skill => (
                      <li key={skill} className="flex items-center gap-2">
                        <ChevronRight className={`w-5 h-5 text-${color}-500/70`} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ──────────────────────────────────────────── */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Selected Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-slate-900/70 rounded-2xl border border-slate-800 hover:border-cyan-800/60 hover:shadow-2xl hover:shadow-cyan-950/20 transition-all duration-300 group overflow-hidden"
              >
                <div className="p-7">
                  <div className="flex justify-between items-start mb-5">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-900/50">
                      {project.category}
                    </span>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="text-xs bg-slate-950 px-3 py-1 rounded-full border border-slate-700 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS */}
      <section id="certifications" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div>
            <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
              <Award className="w-10 h-10 text-yellow-500" />
              Certifications
            </h2>

            <div className="space-y-6">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="bg-slate-950/80 p-6 rounded-xl border border-slate-800 flex items-start gap-5 hover:border-slate-600 transition-all group"
                >
                  <div className="bg-slate-900 p-4 rounded-full shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-slate-400 text-sm mt-1">
                      {cert.issuer} • {cert.date}
                    </p>

                    {cert.description && (
                      <p className="text-slate-300 mt-3 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    )}

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-cyan-400 text-sm mt-3 hover:underline"
                      >
                        View Credential
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {certifications.length === 0 && (
                <p className="text-slate-500 text-center py-8">
                  Certifications in progress — stay tuned!
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* ─── EXPERIENCE ──────────────────────────────────────────────────── */}
<section id="experience" className="py-20 lg:py-24">
  <div className="max-w-7xl mx-auto px-5 sm:px-8">
    <div>
      <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
        <Briefcase className="w-10 h-10 text-emerald-500" />
        Experience
      </h2>

      <div className="space-y-14 border-l-2 border-slate-800 pl-10 relative">
        {experience.map((exp, i) => (
          <div key={i} className="relative group">
            {/* Timeline dot with glow */}
            

            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>

            <div className="mt-1.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm">
              <span className="text-cyan-400 font-medium">{exp.company}</span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-500">
                <span>{exp.period}</span>
                <span className="hidden sm:inline">•</span>
                <span>{exp.location}</span>
              </div>
            </div>

            <p className="mt-4 text-slate-300 leading-relaxed">
              {exp.description}
            </p>

            {exp.achievements && exp.achievements.length > 0 && (
              <ul className="mt-4 space-y-2 text-slate-400 text-sm pl-5 list-disc marker:text-cyan-500">
                {exp.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {experience.length === 0 && (
          <p className="text-slate-500 text-center py-8">
            Experience details coming soon — actively building and training!
          </p>
        )}
      </div>
    </div>
  </div>
</section>

    {/* ─── CONTACT ───────────────────────────────────────────── */ }
    < section id = "contact" className = "py-24 text-center" >
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">
          Let's Secure the Future Together
        </h2>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Interested in cloud security architecture, penetration testing, DevSecOps pipelines and multi-cloud projects<br /><br />
          Based in Amman, open to global opportunities. Feel free to reach out for collaborations or remote roles.

        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-700 hover:bg-cyan-600 font-semibold rounded-xl transition shadow-lg shadow-cyan-950/30"
          >
            <Mail className="w-6 h-6" />
            Osama_Alaeddin@protonmail.com
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-slate-700 hover:border-cyan-600 font-semibold rounded-xl transition"
          >
            <Linkedin className="w-6 h-6" />
            LinkedIn
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-slate-700 hover:border-cyan-600 font-semibold rounded-xl transition"
          >
            <Github className="w-6 h-6" />
            GitHub
          </a>
        </div>

        <footer className="mt-20 pt-10 border-t border-slate-800 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Osama Alaa Aldeen</p>
          <p className="mt-2">Built with React • Tailwind CSS v4 • Vite</p>
        </footer>
      </div>
      </section >
    </div >
  )
}
