import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Dan</strong>.<br></br>
          <br></br>I am a mission-driven creator, optimizer, and technologist,
          excited by the idea of continuously iterating on how myself and my
          teams produce, and get things done more efficiently and effectively
          day-to-day.
          <br></br>
          <br></br>I take a data-driven and user-oriented approach when faced
          with new problems. Driven by user-experience and business results, I
          thrive on teamwork and collaboration. I have a get-stuff-done
          attitude, and enthusiasm for getting my hands dirty.
          <br></br>
          <br></br>
          In my free time, I am passionate about fitness, meditation, art and
          culture, organizational structures, psychology, entrepreneurship, and
          the history and development of the internet.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>{" "}
    </Layout>
  );
}
