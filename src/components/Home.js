import React, { Suspense, lazy } from "react";

const ThreeHero = lazy(() => import("./ThreeHero"));
const About = lazy(() => import("./About"));
const Leadership = lazy(() => import("./Leadership"));

const Home = () => (
  <>
    <React.Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <ThreeHero />
      <About />
      <Leadership />
    </React.Suspense>
  </>
);

export default Home;
