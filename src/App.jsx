import "./App.css";
import { Navbar } from "./Page/Navbar.jsx";
import { Banner } from "./Page/Banner.jsx";
import { Suspense } from "react";
import { Loading } from "./Page/Loading.jsx";
import { Skills } from "./Page/Skills.jsx";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {" "}
        <Navbar />
      </Suspense>
      <Banner />
      <Skills />
    </>
  );
}

export default App;
