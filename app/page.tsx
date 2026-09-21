import { auth, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <header>
        <div className="wrap header-inner">
          <div className="brand">Omeili Chinedu Alexander</div>
          <nav style={{ display: "flex", alignItems: "center" }}>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
              style={{ marginLeft: 28 }}
            >
              <button type="submit" className="logout-btn">
                Log out
              </button>
            </form>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="status-line">
            <span className="status-dot"></span>
            300L Computer Science, University of Nigeria Nsukka — currently on
            rotation at UBA Advanced Analytics
          </div>
          <h1>
            I build software with a bias toward things that eventually move,
            sense, and decide on their own.
          </h1>
          <p>
            Full-stack developer working toward embodied AI and robotics. Along
            the way, I ship real products — ticketing platforms, creator tools,
            analytics dashboards — and I&apos;m currently learning how a Tier-1
            African bank actually runs its data operations from the inside.
          </p>
          <div className="hero-meta">
            <div>
              <span>Lagos, Nigeria</span>
            </div>
            <div>
              <span>CGPA 3.8 / 5.0</span>
            </div>
            <div>
              <span>Graduating 2027</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="wrap">
          <h2>About</h2>
          <div className="prose">
            <p>
              I started at UNN with nothing beyond basic HTML — everything since
              has been self-directed. Three years in, I&apos;ve shipped several
              full-stack products solo, from concept through deployment, while
              carrying a 3.8 CGPA and preparing for the kind of engineering
              roles that don&apos;t yet fully exist in Nigeria: embodied AI and
              robotics, the space NVIDIA, Figure AI, Boston Dynamics, and
              Tesla&apos;s Optimus program are defining right now.
            </p>
            <p>
              The nearer-term target is a Microsoft Nigeria software engineering
              internship. In the meantime, I&apos;m six months into a SIWES
              internship at UBA, which has put me inside both IT Care operations
              and, more recently, Advanced Analytics — a useful contrast to the
              greenfield product work I do on my own time.
            </p>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <h2>Experience</h2>
          <div className="exp-card">
            <div className="exp-head">
              <div className="exp-role">SIWES Intern</div>
              <div className="exp-dates">Jun 2026 — Present</div>
            </div>
            <div className="exp-org">UBA Plc — UBA House, Marina, Lagos</div>
            <ul className="exp-list">
              <li>
                Started in IT Care: handled IAM (Active Directory, BVN
                retrieval, password resets), ITSM ticket logging, distribution
                list management, and branch network monitoring.
              </li>
              <li>
                Worked directly with RQ (UBA&apos;s biometric capture system)
                and Finacle, the bank&apos;s core banking platform.
              </li>
              <li>
                Proactively requested and secured a rotation into Advanced
                Analytics, where I&apos;m now working with SQL Server, Tableau,
                and Power BI.
              </li>
              <li>
                Scoping a SIWES defense project: a cross-border transfer
                assistant concept referencing UBA&apos;s Leo AI chatbot and the
                PAPSS payment system, with guardrails against transaction-data
                hallucination.
              </li>
              <li>Informally trained a junior intern during the rotation.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <h2>Selected work</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-name">entri</div>
              <div className="project-desc">
                A Nigerian event ticketing platform, built solo end-to-end.
                Covers auth, dashboard, event browsing, event detail, checkout
                with promo codes, and confirmation.
              </div>
              <div className="tag-row">
                <span className="tag">Next.js 15</span>
                <span className="tag">React 19</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Clerk</span>
              </div>
              <a
                className="project-link"
                href="https://github.com/bogoszn"
                target="_blank"
                rel="noopener"
              >
                View on GitHub
              </a>
            </div>
            <div className="project-card">
              <div className="project-name">Kallio</div>
              <div className="project-desc">
                A monetization engine for African creators selling digital
                products globally — addressing payment friction, poor
                conversion, and fragmented seller workflows.
              </div>
              <div className="tag-row">
                <span className="tag">Product design</span>
                <span className="tag">Next.js</span>
              </div>
              <a
                className="project-link"
                href="https://github.com/bogoszn"
                target="_blank"
                rel="noopener"
              >
                View on GitHub
              </a>
            </div>
            <div className="project-card">
              <div className="project-name">Verso</div>
              <div className="project-desc">
                A real-time collaborative document editor, built as a skills
                exercise — real-time sync, rich text editing, multi-user
                presence.
              </div>
              <div className="tag-row">
                <span className="tag">Next.js</span>
                <span className="tag">Supabase</span>
                <span className="tag">Socket.io</span>
                <span className="tag">Tiptap</span>
              </div>
              <a
                className="project-link"
                href="https://github.com/bogoszn"
                target="_blank"
                rel="noopener"
              >
                View on GitHub
              </a>
            </div>
            <div className="project-card">
              <div className="project-name">StockSage</div>
              <div className="project-desc">
                An AI-assisted validation tool for Nigerian Stock Exchange (NGX)
                investors, helping surface signal from noise before a trade
                decision.
              </div>
              <div className="tag-row">
                <span className="tag">AI / LLM</span>
                <span className="tag">React</span>
              </div>
              <a
                className="project-link"
                href="https://github.com/bogoszn"
                target="_blank"
                rel="noopener"
              >
                View on GitHub
              </a>
            </div>
            <div className="project-card">
              <div className="project-name">SaveIQ</div>
              <div className="project-desc">
                A Naira-denominated savings tracker, built to make personal
                saving habits visible and easy to stick to.
              </div>
              <div className="tag-row">
                <span className="tag">React</span>
              </div>
              <a
                className="project-link"
                href="https://github.com/bogoszn"
                target="_blank"
                rel="noopener"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <h2>Skills &amp; certifications</h2>
          <div className="skills-grid">
            <div className="skills-col">
              <h3>Stack</h3>
              <div className="skills-list">
                <span className="skill-pill">React</span>
                <span className="skill-pill">TypeScript</span>
                <span className="skill-pill">Next.js</span>
                <span className="skill-pill">Tailwind CSS</span>
                <span className="skill-pill">Supabase</span>
                <span className="skill-pill">Clerk</span>
                <span className="skill-pill">Socket.io</span>
                <span className="skill-pill">Tiptap</span>
                <span className="skill-pill">Anthropic API</span>
                <span className="skill-pill">Gemini API</span>
              </div>
            </div>
            <div className="skills-col">
              <h3>Certifications</h3>
              <div className="cert">
                <div className="cert-name">NVIDIA DLI — RAG Agents</div>
                <div className="cert-meta">
                  NVIDIA Deep Learning Institute, March 2026
                </div>
              </div>
              <div className="cert">
                <div className="cert-name">
                  NVIDIA DLI — Multimodal AI Agents
                </div>
                <div className="cert-meta">
                  NVIDIA Deep Learning Institute, March 2026
                </div>
              </div>
              <div className="cert">
                <div className="cert-name">Virtual Assistant Certification</div>
                <div className="cert-meta">ALX Africa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap">
          <h2>Contact</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:alexomeili06@gmail.com">alexomeili06@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <span>+234 907 608 7047</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://linkedin.com/in/alexander-omeili"
                target="_blank"
                rel="noopener"
              >
                alexander-omeili
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/bogoszn"
                target="_blank"
                rel="noopener"
              >
                bogoszn
              </a>
            </div>
          </div>
          <div className="foot-note">Signed in as {session?.user?.email}</div>
        </div>
      </footer>
    </>
  );
}
