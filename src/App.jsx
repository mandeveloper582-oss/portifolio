import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import PageTransition from "./components/PageTransition";

const Home = lazy(() => import("./pages/Home"));
const Resume = lazy(() => import("./pages/Resume"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Helmet>
        <title>Lencho Ahmed | MERN Stack Developer</title>
        <meta
          name="description"
          content="Premium MERN Stack developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and EmailJS."
        />
        <meta property="og:title" content="Lencho Ahmed | MERN Stack Developer" />
        <meta
          property="og:description"
          content="Modern portfolio showcasing full-stack web development, product design, and freelance services."
        />
        <meta property="og:image" content="/og-image.svg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.svg" />
      </Helmet>

      <ScrollProgress />
      <AnimatedBackground />
      <CustomCursor />
      <Navbar />

      <PageTransition>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageTransition>

      <Footer />
    </>
  );
}

export default App;