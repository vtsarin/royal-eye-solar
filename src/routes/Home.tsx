import { SunPathHero } from '../hero/SunPathHero';
import { TrustStrip } from '../sections/TrustStrip';
import { About } from '../sections/About';
import { ProductPillars } from '../sections/ProductPillars';
import { WhyRoyalEye } from '../sections/WhyRoyalEye';
import { Benefits } from '../sections/Benefits';
import { BrandMarquee } from '../sections/BrandMarquee';
import { Coverage } from '../sections/Coverage';
import { HowItWorks } from '../sections/HowItWorks';
import { CtaBand } from '../components/CtaBand';
import { routeMeta } from '../lib/content';
import { useSeo } from '../lib/seo';

export default function Home() {
  useSeo('/', routeMeta['/'].title, routeMeta['/'].description);

  return (
    <>
      <SunPathHero />
      <TrustStrip />
      <About />
      <ProductPillars />
      <WhyRoyalEye />
      <Benefits />
      <BrandMarquee />
      <Coverage />
      <HowItWorks />
      <CtaBand />
    </>
  );
}
