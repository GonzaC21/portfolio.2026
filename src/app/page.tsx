import { Sidebar } from "@/components/portfolio/sidebar";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection,
  FooterSection,
} from "@/components/portfolio/sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar />
      <main className="flex-1 lg:pl-20 pt-14 lg:pt-0">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
