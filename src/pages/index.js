import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Icon from '../../static/aofuji.svg';

const features = [
  {
    title: 'Minimal Analytics',
    description: (
      <p>Focuses exclusively on page views and device info with ~1KB gzipped tracker.</p>
    ),
  },
  {
    title: 'GDPR/CCPA Compliant',
    description: (
      <p>No cookie usage, no cross-site tracking, collecting data completely anonymously.</p>
    ),
  },
  {
    title: 'Serverless Support',
    description: (
      <p>No need to manually manage servers thanks to Serverless and cloud database services.</p>
    ),
  },
];
function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      {description}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout description="Minimal alternative to Google Analytics">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <Icon className={styles.heroImage} />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttonWrapper}>
            <Link className="button button--primary button--lg" to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            <Link className="button button--primary button--lg" to="https://demo.aofuji.ink">
              Online Demo
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.featureWrapper}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
