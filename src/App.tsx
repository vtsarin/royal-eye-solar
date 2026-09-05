import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { jsonLd } from './lib/content';
import { getLenis, initLenis, pageTransition } from './lib/motion';
import { injectJsonLd } from './lib/seo';

const Home = lazy(() => import('./routes/Home'));
const Products = lazy(() => import('./routes/Products'));
const Contact = lazy(() => import('./routes/Contact'));
const NotFound = lazy(() => import('./routes/NotFound'));

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

/** Scroll must go through Lenis when it's running, or its virtual position desyncs. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    initLenis();
    injectJsonLd(jsonLd);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <ScrollToTop />
      <main id="main">
        <AnimatePresence mode="wait" initial={false}>
          <Suspense fallback={<div className="min-h-[100svh]" />}>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />
              <Route
                path="/products"
                element={
                  <PageTransition>
                    <Products />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                }
              />
              <Route
                path="*"
                element={
                  <PageTransition>
                    <NotFound />
                  </PageTransition>
                }
              />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </MotionConfig>
  );
}
