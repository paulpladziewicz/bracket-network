import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";
import Navbar from "../components/nav/Navbar";
import Section from "../components/Section";

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
  const {locale} = router;
  const t = locale === "en" ? en : es;

  return (
    <Layout>
      <Head>
        <title>Bracket Network</title>
        <link rel="icon" href="/images/logo-rec.svg"/>
      </Head>
      <Navbar/>
      <div className="text-xl font-bold text-indigo-500">{t.hero}</div>
      <p>{t.desc}</p>

      <div className='w-1/2'>
        <Image
          src="/images/responsive-design-1.jpeg"
          alt="Responsive Websites"
          width={1217}
          height={684}
        />
      </div>

      <h1 className="h1 font-semibold mb-8" style={{color: "#010440"}}>
        Custom Built Modern Websites
      </h1>

      <Section
        title="Plan With Us"
        text="We'll help reduce the complexity of picking the right technologies for long-term growth."
        image="/images/stock-image.jpeg"
      />

      <Section
        title="Best In Class"
        text="Get the project done right the first time."
        image="/images/stock-image.jpeg"
      />
      <Section
        title="Hire The Best"
        text="Get the project done right the first time."
        image="/images/stock-image.jpeg"
      />

      <div className="my-section mx-4">
        <div className="mx-auto" style={{ maxWidth: "500px" }}>
          <h2 id="contact" className="h2 font-bold">
            Contact Me
          </h2>
          <h3 className="text-2xl text-indigo-700 font-bold mb-4 mt-2">
            Happy to help.
          </h3>
          <p className="mt-2 mb-6 text-gray-600">
            Feel free to contact me directly at ppladziewicz@gmail.com as well.
          </p>
          <form
            className="flex flex-col"
            id="contact"
            method="post"
            action="https://www.bracketnetwork.com/"
          >
            <label className="mb-2 font-bold text-xl ml-1">Name</label>
            <input
              className="border-2 rounded p-2"
              type="text"
              name="name"
              id="name"
            />

            <label className="mt-5 mb-2 font-bold text-xl ml-1">Email</label>
            <input
              className="border-2 rounded p-2"
              type="email"
              name="email"
              id="email"
            />

            <label className="mt-5 mb-2 font-bold text-xl ml-1">Subject</label>
            <input
              className="border-2 rounded p-2"
              type="text"
              name="subject"
              id="subject"
            />

            <label className="mt-5 mb-2 font-bold text-xl ml-1">Message</label>
            <textarea
              className="border-2 rounded p-2 resize-none"
              name="message"
              id="message"
              rows="5"
            />

            <button
              className="inline-block mt-5 py-2 px-3 bg-indigo-600 text-white rounded-lg shadow-md w-max"
              type="submit"
            >
              Reach Out
            </button>
          </form>
        </div>
      </div>

    </Layout>
  );
}

export default HomePage;
