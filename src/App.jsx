import "./App.css";
import { Navbar } from "./Page/Navbar.jsx";
import { Banner } from "./Page/Banner.jsx";
import { Suspense } from "react";
import { Loading } from "./Page/Loading.jsx";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {" "}
        <Navbar />
      </Suspense>
      <Banner />
    </>
  );
}

export default App;
