import {useRouter} from "next/router";
import Image from "next/image";
import Layout from "../components/Layout";
import Navbar from "../components/nav/Navbar";

const en = {
    title: "Title",
    desc: "Yes, English.",
    p1: "This is a frase."
};
const es = {
    title: "Title",
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
            <div className="w-6/12">
                <Image
                    src="/images/stock-image.jpeg"
                    alt="Picture of the author"
                    width={500}
                    height={300}
                    priority
                />
            </div>
            <Image
                src="/images/stock-image.jpeg"
                alt="Picture of the author"
                width={1280}
                height={853.333333333333333}
                priority
            />
            <p>{t.desc}</p>
            <p>{t.p1}</p>
        </Layout>
    );
}

export default HomePage;
