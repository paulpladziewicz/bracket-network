import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";
import Navbar from "../components/nav/Navbar";

const en = {
  title: "Title",
  desc: "Yes, English.",
};
const es = {
  title: "Title",
  desc: "Yes, Español.",
};

function HomePage() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <Layout>
      <Head>
        <title>Bracket Network</title>
        <link rel="icon" href="/images/logo-rec.svg" />
      </Head>
      <Navbar />
      <div className="text-xl font-bold text-indigo-500">{t.hero}</div>
      <p>{t.desc}</p>

      <Image
        src="/images/responsive-design-1.jpeg"
        alt="Responsive Websites"
        width={1217}
        height={684}
      />
      <h1 className="h1 font-semibold mb-8" style={{ color: "#010440" }}>
        Custom Built Modern Websites
      </h1>
    </Layout>
  );
}

export default HomePage;
