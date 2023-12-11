import "./App.css";
import { Navbar } from "./Page/Navbar.jsx";
import { Banner } from "./Page/Banner.jsx";
import { Suspense } from "react";
import { Loading } from "./Page/Loading.jsx";
import { Skills } from "./Page/Skills.jsx";
import { Projects } from "./Page/Projects.jsx";
import { Contact } from "./Page/Contact.jsx";
import { Footer } from "./Page/Footer.jsx";
import { Study } from "./Page/Study.jsx";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {" "}
        <Navbar />
      </Suspense>
      <Banner />
      <Skills />
      <Projects />
      <Study />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
