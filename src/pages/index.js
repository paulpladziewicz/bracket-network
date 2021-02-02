import p from "../components/Paragraph.js";

const en = {
  title: "Hello World",
};

const es = {
  title: "Hola Mundo",
};

function HomePage() {
  return (
    <div>
      <div className="text-xl font-bold text-indigo-500">{en.title}</div>
      <p
        en="This is an example in English."
        es="This is an example in Spanish."
      />
    </div>
  );
}

export default HomePage;
