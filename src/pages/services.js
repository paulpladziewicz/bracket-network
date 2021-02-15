import {useRouter} from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/nav/Navbar";


const en = {
  title: "Services",
  desc: "Yes, English.",
  p1: "This is a frase."
};
const es = {
  title: "¿Cómo puedo ayudarle?",
  desc: "Yes, Español.",
  p1: "Esto es un frase."
};

function HomePage() {
  const router = useRouter();
  const {locale} = router;
  const t = locale === "en" ? en : es;

  return (
    <Layout>
      <Navbar/>
      <div className="text-xl font-bold text-indigo-500">{t.title}</div>
      <p>{t.desc}</p>
      <p>{t.p1}</p>
    </Layout>
  );
}

export default HomePage;