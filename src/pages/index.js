import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

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
            Start Your Journey
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/periodic-table">
            Explore the Periodic Table
          </Link>
        </div>
      </div>
    </header>
  );
}

function CreditSection() {
  return (
    <section className={styles.creditSection}>
      <div className="container">
        <div className={styles.creditBox}>
          <Heading as="h2">Credit & Foundation</Heading>
          <p>
            The <strong>AI Periodic Table</strong> concept was presented by <strong>Martin Keen</strong> from {' '}
            <strong>IBM Technology</strong>. We love this framework for organizing
            the complex landscape of AI concepts, and we've adapted and extended it
            to create a learning guide for our team at Jahnel Group.
          </p>
          <p>
            This is our way of making sense of the overwhelming world of AI
            terminology and turning it into a clear, navigable growth path.
          </p>
          <div className={styles.videoContainer}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ESBMgZHzfG0"
              title="AI Periodic Table Explained by IBM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className={styles.videoCaption}>
            <a
              href="https://www.youtube.com/watch?v=ESBMgZHzfG0"
              target="_blank"
              rel="noopener noreferrer">
              Watch on YouTube ↗
            </a>
          </p>
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
      name: 'Foundation',
      tagline: 'Understand and use AI effectively',
      description:
        'Build a solid mental model. Understand the vocabulary, capabilities, and limitations. Use AI tools effectively in your daily work.',
      color: 'foundation',
    },
    {
      name: 'Practitioner',
      tagline: 'Build and deploy AI features',
      description:
        'Implement AI-powered features in production. Understand technical details, make architecture decisions, and troubleshoot issues.',
      color: 'practitioner',
    },
    {
      name: 'Expert',
      tagline: 'Architect systems and lead others',
      description:
        'Design complex AI systems, evaluate emerging technologies, and elevate the capabilities of those around you.',
      color: 'expert',
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
            <div key={idx} className={clsx(styles.tierCard, styles[`tier${tier.color}`])}>
              <Heading as="h3">{tier.name}</Heading>
              <p className={styles.tierTagline}>{tier.tagline}</p>
              <p>{tier.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.tiersCta}>
          <Link
            className="button button--primary button--lg"
            to="/docs/tiers/overview">
            Explore Learning Tiers
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
        <Heading as="h2">Learning AI Starts With You</Heading>
        <p>
          Every expert was once a beginner. Every complex system is built from simple elements.
        </p>
        <p>
          Pick up the periodic table, identify where you are, and take the next step.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
        </div>
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
        <CreditSection />
        <WhatYoullGain />
        <LearningTiers />
        <CallToAction />
      </main>
    </Layout>
  );
}
