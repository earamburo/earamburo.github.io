import '@/styles/portfolio-v2.css';
import NavV2 from '@/components/v2/NavV2';
import HeroV2 from '@/components/v2/HeroV2';
import ProjectsCarousel from '@/components/v2/ProjectsCarousel';
import ExperienceTimeline from '@/components/v2/ExperienceTimeline';
import SkillsV2 from '@/components/v2/SkillsV2';
import ContactV2 from '@/components/v2/ContactV2';
import FooterV2 from '@/components/v2/FooterV2';

export default function PortfolioV2() {
  return (
    <div className="pv2">
      <NavV2 />
      <main>
        <HeroV2 />
        <SkillsV2 />
        <ExperienceTimeline />
        <ProjectsCarousel />
        <ContactV2 />
      </main>
      <FooterV2 />
    </div>
  );
}
