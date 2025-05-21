import React, { Suspense, lazy } from "react";

const ThreeHero = lazy(() => import("./ThreeHero"));
const About = lazy(() => import("./About"));

const Home = () => (
  <>
    <React.Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <ThreeHero />
      <About />
    </React.Suspense>
  </>
);

export default Home;
