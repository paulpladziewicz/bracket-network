import { useRouter } from "next/router";
import en from "../locales/en";
import es from "../locales/es";

import Navbar from "../components/nav/Navbar";

function HomePage() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <div>
      <Navbar />
      <div className="text-xl font-bold text-indigo-500">{t.about.title}</div>
      <p>{t.about.desc}</p>
    </div>
  );
}

export default HomePage;
