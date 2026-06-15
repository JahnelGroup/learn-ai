import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import HomePeriodicTable from '@site/src/components/PeriodicTable/HomePeriodicTable';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Learn AI
        </Heading>
        <p className="hero__subtitle">
          Your personal roadmap through the AI landscape
        </p>
        <p className={styles.heroTagline}>
          Jahnel Group
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/upskilling-playbook/overview">
            Build a Program
          </Link>
        </div>
      </div>
    </header>
  );
}

function AudienceRouter() {
  return (
    <section className={styles.routerSection}>
      <div className="container">
        <div className={styles.routerGrid}>
          <Link to="/docs/building-ai-systems/" className={clsx(styles.routerDoor, styles.routerDoorLearn)}>
            <span className={styles.routerIcon} aria-hidden="true">🎓</span>
            <Heading as="h2" className={styles.routerTitle}>Learn AI</Heading>
            <p className={styles.routerDescription}>
              You want to level up your own AI skills. Start with the framework,
              find where you are, and work through the pillars at your own pace.
            </p>
            <span className={styles.routerLink}>Explore the learning path →</span>
          </Link>
          <Link to="/docs/upskilling-playbook/overview" className={clsx(styles.routerDoor, styles.routerDoorBuild)}>
            <span className={styles.routerIcon} aria-hidden="true">🏗️</span>
            <Heading as="h2" className={styles.routerTitle}>Build a Program</Heading>
            <p className={styles.routerDescription}>
              You lead a team and want to upskill them. The Playbook shows you how
              to design tiers, build rubrics, and measure adoption, using ours as the worked example.
            </p>
            <span className={styles.routerLink}>Open the Playbook →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function BuildingAISection() {
  const levels = [
    { number: 1, name: 'Chat', description: 'Isolated Q&A in browser', path: '/docs/ai-productivity/levels/chat' },
    { number: 2, name: 'Context', description: 'Manually providing files, screenshots, code', path: '/docs/ai-productivity/levels/context' },
    { number: 3, name: 'Connected', description: 'AI has access to your environment', path: '/docs/ai-productivity/levels/connected' },
    { number: 4, name: 'Customized', description: 'Personal commands, project prompts, hooks', path: '/docs/ai-productivity/levels/customized' },
    { number: 5, name: 'Autonomous', description: 'Multi-step tasks with review/supervision', path: '/docs/ai-productivity/levels/autonomous' },
  ];

  return (
    <section className={styles.buildingAISection}>
      <div className="container">
        <p className={styles.eyebrow}>For Learners</p>
        <div className={styles.cardsContainer}>
          {/* Building AI Systems Card */}
          <div className={styles.card}>
            <Heading as="h2">Building AI Systems</Heading>
            <p className={styles.cardDescription}>
            The <a href="https://www.youtube.com/watch?v=ESBMgZHzfG0" target="_blank" rel="noopener noreferrer">AI Periodic Table</a> concept was presented by <strong>Martin Keen</strong> from <strong>IBM Technology</strong>. We love this framework at <a href="https://jahnelgroup.com" target="_blank" rel="noopener">Jahnel Group</a> for organizing AI concepts.
            </p>
            <div className={styles.periodicTableWrapper}>
              <HomePeriodicTable />
            </div>
          </div>

          {/* AI Productivity Levels Card */}
          <div className={styles.card}>
            <Heading as="h2">AI Productivity</Heading>
            <p className={styles.cardDescription}>
              Progress through 5 levels of AI-assisted productivity.
            </p>
            <div className={styles.levelsContainer}>
              {levels.map((level) => (
                <Link
                  key={level.number}
                  to={level.path}
                  className={styles.levelItem}
                >
                  <span className={styles.levelNumber}>Level {level.number}</span>
                  <div className={styles.levelContent}>
                    <span className={styles.levelName}>{level.name}</span>
                    <span className={styles.levelDescription}>{level.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYoullGain() {
  const benefits = [
    {
      title: 'A Structured Mental Model',
      description:
        'The AI Periodic Table gives you a framework to organize every AI concept you encounter. Instead of drowning in terminology, you\'ll see how pieces connect.',
    },
    {
      title: 'Reveal Unknown Unknowns',
      description:
        'You don\'t know what you don\'t know. This framework systematically exposes gaps in your knowledge so you can fill them intentionally.',
    },
    {
      title: 'Clear Growth Path',
      description:
        'No more wondering "what should I learn next?" Each tier builds on the previous with concrete skills and practical projects.',
    },
    {
      title: 'Credibility in Conversations',
      description:
        'When a client asks about AI capabilities, you\'ll speak from genuine understanding—not memorized buzzwords.',
    },
  ];

  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          What You'll Gain
        </Heading>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, idx) => (
            <div key={idx} className={styles.benefitCard}>
              <Heading as="h3">{benefit.title}</Heading>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningTiers() {
  const tiers = [
    {
      name: 'Foundation Tier',
      tagline: 'Understand and use AI effectively',
      description:
        'Build a solid mental model. Understand the vocabulary, capabilities, and limitations. Use AI tools effectively in your daily work.',
      color: 'foundation',
      path: '/docs/building-ai-systems/tiers/foundation',
    },
    {
      name: 'Practitioner Tier',
      tagline: 'Build and deploy AI features',
      description:
        'Implement AI-powered features in production. Understand technical details, make architecture decisions, and troubleshoot issues.',
      color: 'practitioner',
      path: '/docs/building-ai-systems/tiers/practitioner',
    },
    {
      name: 'Expert Tier',
      tagline: 'Architect systems and lead others',
      description:
        'Design complex AI systems, evaluate emerging technologies, and elevate the capabilities of those around you.',
      color: 'expert',
      path: '/docs/building-ai-systems/tiers/expert',
    },
  ];

  return (
    <section className={styles.tiersSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Learning Tiers
        </Heading>
        <p className={styles.sectionSubtitle}>
          Tiers are milestones in your journey, not finish lines. They give us a shared
          vocabulary to understand where we are and where we're headed.
        </p>
        <div className={styles.tiersGrid}>
          {tiers.map((tier, idx) => (
            <Link
              key={idx}
              to={tier.path}
              className={clsx(styles.tierCard, styles[`tier${tier.color}`])}
            >
              <Heading as="h3">{tier.name}</Heading>
              <p className={styles.tierTagline}>{tier.tagline}</p>
              <p>{tier.description}</p>
            </Link>
          ))}
        </div>
        <div className={styles.tiersCta}>
          <Link
            className="button button--primary button--lg"
            to="/docs/building-ai-systems/tiers/overview">
            Explore Learning Tiers
          </Link>
        </div>
      </div>
    </section>
  );
}

function PlaybookTeaser() {
  const cards = [
    {
      title: 'Design tiers',
      description:
        'Define the milestones that take a team from curious to capable—and the levels within each.',
      path: '/docs/upskilling-playbook/designing-tiers-levels',
    },
    {
      title: 'Build rubrics',
      description:
        'Turn fuzzy "is someone good at AI?" questions into clear, assessable criteria people trust.',
      path: '/docs/upskilling-playbook/building-rubrics',
    },
    {
      title: 'Measure with The Climb',
      description:
        'Track real adoption over time with a model that captures progress, not just activity.',
      path: '/docs/upskilling-playbook/measuring-adoption',
    },
  ];

  return (
    <section className={styles.teaserSection}>
      <div className="container">
        <p className={styles.eyebrow}>For Program Builders</p>
        <Heading as="h2" className={styles.sectionTitle}>
          The Upskilling Playbook
        </Heading>
        <p className={styles.sectionSubtitle}>
          Leading a team? Here's how to build your own AI upskilling program, using ours as the worked example.
        </p>
        <div className={styles.teaserGrid}>
          {cards.map((card, idx) => (
            <Link key={idx} to={card.path} className={styles.teaserCard}>
              <Heading as="h3">{card.title}</Heading>
              <p>{card.description}</p>
              <span className={styles.teaserLink}>Read more →</span>
            </Link>
          ))}
        </div>
        <div className={styles.tiersCta}>
          <Link
            className="button button--primary button--lg"
            to="/docs/upskilling-playbook/overview">
            Open the Playbook
          </Link>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <Heading as="h2">Wherever You're Starting, Start Here</Heading>
        <p>
          Sharpening your own AI skills? Read the periodic table, find where you are, and take the next step.
        </p>
        <p>
          Building a program for your team? The Playbook hands you the whole framework to take and run with.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/building-ai-systems/">
            Start Learning
          </Link>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/upskilling-playbook/overview">
            Build a Program
          </Link>
        </div>
        <p className={styles.ctaSoft}>
          Putting it into practice is real work. If you'd rather not do it alone, <a href="https://jahnelgroup.com" target="_blank" rel="noopener noreferrer">Jahnel Group</a> can help.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Learn AI - Your guide to mastering AI at Jahnel Group">
      <HomepageHeader />
      <main>
        <AudienceRouter />
        <BuildingAISection />
        <WhatYoullGain />
        <LearningTiers />
        <PlaybookTeaser />
        <CallToAction />
      </main>
    </Layout>
  );
}
