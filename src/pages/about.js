import { useRouter } from "next/router";
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
    <div>
      <Navbar />
      <div className="text-xl font-bold text-indigo-500">{t.title}</div>
      <img className="w-1/3" src="/images/stock-image.jpg" alt="" />
      <p>{t.desc}</p>
    </div>
  );
}

export default HomePage;
