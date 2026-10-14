import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <>
      <section className="hero page-wrap">
        <div className="hero-kicker">
          <span className="status-dot" /> CREATIVE DIRECTION · PERFORMANCE VIDEO · PRODUCTION LEADERSHIP
        </div>

        <div className="hero-main">
          <div className="hero-copy">
            <p className="hero-tag">Available for select projects</p>
            <h1>
              Freelance creative lead
              <br />
              for <em>brands that want more.</em>
            </h1>

            <div className="hero-chips">
              <span className="hero-chip">
                <span className="mini-dot" /> India • UAE • US • UK
              </span>
              <span className="hero-chip">
                <span className="mini-dot" /> 6M+ views generated
              </span>
            </div>

            <div className="hero-aside">
              <p>
                I’m Rajeev Verma. I bring creative thinking, commercial storytelling and production
                systems together to make video work harder for D2C brands, campaigns and founders.
              </p>
              <div className="hero-actions">
                <Link className="button button-dark" href="/work">
                  Explore selected work <ArrowUpRight size={16} />
                </Link>
                <Link className="text-button" href="/contact">
                  Discuss a project ↗
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <Image
              className="hero-portrait"
              src="/images/rajeev-verma.png"
              alt=""
              fill
              priority
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 42vw, 540px"
            />
            <div className="hero-photo-label">
              <span className="status-dot" />
              BEHIND THE FRAME
            </div>
            <div className="hero-photo-caption">
              <span>CREATIVE DIRECTION · PERFORMANCE VIDEO</span>
              <strong>Rajeev Verma</strong>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>BASED IN GURUGRAM, INDIA</span>
          <span>
            SCROLL TO EXPLORE <ArrowDownRight size={14} />
          </span>
          <span>AVAILABLE FOR SELECT PROJECTS</span>
        </div>
      </section>

      <div className="signal-bar" aria-label="Creative capabilities">
        <div className="signal-track">
          <span>Creative strategy</span>
          <span>Performance content</span>
          <span>Brand storytelling</span>
          <span>Production oversight</span>
          <span>Editing & motion</span>
          <span>Creative strategy</span>
          <span>Performance content</span>
          <span>Brand storytelling</span>
          <span>Production oversight</span>
          <span>Editing & motion</span>
        </div>
      </div>

      <section className="featured section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2>
              Work that starts
              <br />
              <em>with a question.</em>
            </h2>
          </div>
          <Link className="text-button" href="/work">
            View all projects <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="project-grid">
          {projects
            .filter((p) => p.featured)
            .slice(0, 6)
            .map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
        </div>

        <p className="asset-note">Original project media is being prepared for publication.</p>
      </section>

      <section className="capability-band">
        <div className="section-wrap capability-inner">
          <span className="eyebrow">02 / WHAT I BRING</span>
          <h2>
            Good creative needs
            <br />
            good <em>thinking behind it.</em>
          </h2>
          <div className="capability-grid">
            <article>
              <span>01</span>
              <h3>Performance creative</h3>
              <p>Hooks, UGC and influencer concepts, variants and testing support.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Creative direction</h3>
              <p>Campaign ideas, visual direction, storytelling and shoot planning.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Production & post</h3>
              <p>Editing, motion graphics, sound design and finishing.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Team & workflow</h3>
              <p>Quality standards, review systems and dependable delivery.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="approach section-wrap">
        <div>
          <span className="eyebrow">03 / THE APPROACH</span>
          <h2>
            Clarify. Create.
            <br />
            <em>Align. Learn.</em>
          </h2>
        </div>
        <div className="approach-copy">
          <p>
            Creative leadership isn&apos;t only about generating ideas. It is about finding the real
            constraint, choosing a direction, helping a team execute and learning from the outcome.
          </p>
          <Link className="text-button" href="/about">
            More about my approach ↗
          </Link>
        </div>
      </section>

      <section className="home-contact">
        <span className="eyebrow">HAVE A BRIEF TO TALK THROUGH?</span>
        <h2>
          Let’s get to
          <br />
          <em>the good part.</em>
        </h2>
        <Link className="button button-light" href="/contact">
          Start a conversation <ArrowUpRight size={16} />
        </Link>
      </section>
    </>
  );
}
