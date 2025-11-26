import clsx from 'clsx';
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
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Документация по использованию редактора вязания CustomKnits.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Документация для редактора вязания CustomKnits"
    >
      <HomepageHeader />
      <main>
        <section className="container margin-vert--lg">
          <p>
            Добро пожаловать! Здесь собрана документация по проекту
            <strong> CustomKnits</strong>: как начать работу, пользоваться редактором
            узоров, работать с пряжей и плотностью, экспортировать результат и многое
            другое.
            <br /><br />
            И сам проект, и эта документация находятся в активной разработке, поэтому
            интерфейс и набор функций могут со временем меняться.
          </p>
        </section>
      </main>
    </Layout>
  );
}
