import { useRouter } from "next/router";
import Head from "next/head";
import en from "../locales/en";
import es from "../locales/es";

import Layout from "../components/Layout";
import Navbar from "../components/nav/Navbar";

function HomePage() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <Layout>
      <Head>
        <title>Bracket Network</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <div className="text-xl font-bold text-indigo-500">{t.hero}</div>
      <p>Hello, in English.</p>
    </Layout>
  );
}

export default HomePage;
