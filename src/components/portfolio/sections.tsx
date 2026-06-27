"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Award,
  Globe,
  Send,
  ExternalLink,
  Calendar,
  Building2,
  Briefcase,
} from "lucide-react";
import {
  profile,
  skillCategories,
  projects,
  experiences,
  education,
} from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/* ---------------------------------------------------------------- HERO */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:pl-24 lg:pr-8 pt-20 lg:pt-0"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* glow */}
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-brand/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-brand/20 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center text-center gap-8">
            {/* Avatar */}
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute inset-0 rounded-full bg-brand/40 blur-2xl" />
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full p-1.5 bg-gradient-to-br from-brand via-brand to-purple-500/60">
                <div className="h-full w-full rounded-full overflow-hidden bg-surface-3 ring-2 ring-border">
                  <Image
                    src={profile.avatar}
                    alt={`Avatar de ${profile.name}`}
                    width={160}
                    height={160}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              {profile.available && (
                <span className="absolute bottom-1 right-1 flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/90 text-emerald-50 text-[10px] font-medium shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  Disponible
                </span>
              )}
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="space-y-3">
              <p className="text-sm sm:text-base text-muted-foreground font-medium tracking-wide">
                Hola, soy
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="brand-gradient-text">{profile.firstName}</span>{" "}
                <span className="text-foreground">{profile.lastName}</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                {profile.role} ·{" "}
                <span className="text-brand font-medium">{profile.roleSubtitle}</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-sm sm:text-base text-muted-foreground/90 leading-relaxed"
            >
              {profile.tagline} Stack principal:{" "}
              <span className="text-foreground">JavaScript/TypeScript, React, Node.js</span> y
              bases de datos SQL/NoSQL. Abierto a oportunidades remotas.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-brand text-primary-foreground hover:bg-brand/90 shadow-lg glow-sm group"
              >
                Ver mis proyectos
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-brand/30 text-foreground hover:bg-brand/10 hover:text-brand hover:border-brand"
              >
                <a href={`mailto:${profile.email}`}>
                  <Download className="mr-2 h-4 w-4" />
                  Contáctame
                </a>
              </Button>
            </motion.div>

            {/* Quick info chips */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-2 pt-2"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-surface-2 px-3 py-1.5 rounded-full border border-border">
                <MapPin className="h-3.5 w-3.5 text-brand" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-surface-2 px-3 py-1.5 rounded-full border border-border">
                <Briefcase className="h-3.5 w-3.5 text-brand" />
                {profile.company}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-surface-2 px-3 py-1.5 rounded-full border border-border">
                <Sparkles className="h-3.5 w-3.5 text-brand" />
                2+ años de experiencia
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- ABOUT */
export function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 lg:pl-24 lg:pr-8 py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Sobre mí"
          title="Construyo productos web de principio a fin"
          subtitle="Developer full stack con foco en código mantenible, performance y experiencias de usuario claras."
        />

        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2"
          >
            <Card className="glass h-full p-6 sm:p-8 border-border/60">
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                {profile.about.map((para, i) => (
                  <p key={i} className={i === 0 ? "text-foreground/90 font-medium" : ""}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-8 pt-6 border-t border-border/60">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-4 w-4 text-brand" />
                  <h3 className="text-sm font-semibold text-foreground">Idiomas</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {profile.languages.map((lang) => (
                    <div key={lang.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-foreground font-medium">{lang.name}</span>
                        <span className="text-muted-foreground">{lang.level}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-surface-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-brand/70 to-brand"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Education + Certifications */}
          <div className="space-y-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="glass p-6 border-border/60">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-4 w-4 text-brand" />
                  <h3 className="text-sm font-semibold text-foreground">Educación</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.title} className="space-y-1">
                      <p className="text-sm font-medium text-foreground leading-snug">
                        {edu.title}
                      </p>
                      <p className="text-xs text-brand">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="glass p-6 border-border/60">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-4 w-4 text-brand" />
                  <h3 className="text-sm font-semibold text-foreground">Certificaciones</h3>
                </div>
                <div className="space-y-3">
                  {profile.certifications.map((cert) => (
                    <div key={cert.title} className="space-y-0.5">
                      <p className="text-sm font-medium text-foreground leading-snug">
                        {cert.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- SKILLS */
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative px-4 sm:px-6 lg:pl-24 lg:pr-8 py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Skills"
          title="Tecnologías con las que trabajo"
          subtitle="Stack modern, optimizado para rendimiento y DX. Enfoque full stack cubriendo frontend, backend y DevOps."
        />

        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="glass h-full p-6 border-border/60 hover:border-brand/40 transition">
                <h3 className="text-lg font-semibold text-foreground mb-1">{cat.title}</h3>
                <p className="text-xs text-muted-foreground mb-6">
                  {cat.skills.length} tecnologías principales
                </p>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-xs text-brand font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-surface-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-brand/60 via-brand to-brand rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech stack chips */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {[
            "React",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Python",
            "FastAPI",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
            "PostgreSQL",
            "MySQL",
            "Docker",
            "AWS EC2",
            "WhatsApp API",
            "REST APIs",
            "Responsive Design",
          ].map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-surface-2 text-muted-foreground border-border/60 hover:border-brand/40 hover:text-brand transition"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ PROJECTS */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 lg:pl-24 lg:pr-8 py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Portfolio"
          title="Proyectos destacados"
          subtitle="Una selección de trabajos recientes en producción y activos, con foco en resultados de negocio."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="glass h-full p-0 overflow-hidden border-border/60 hover:border-brand/40 transition group">
                {/* Image header */}
                <div className="relative aspect-[16/9] overflow-hidden bg-surface-3">
                  <Image
                    src={project.image}
                    alt={`Vista previa de ${project.title}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand/90 text-primary-foreground text-[10px] font-semibold uppercase tracking-wide shadow">
                      <CheckCircle2 className="h-3 w-3" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-brand transition">
                      {project.title}
                    </h3>
                    <p className="text-xs text-brand mt-0.5">{project.tagline}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-brand mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-brand/10 text-brand border-brand/20 text-[10px] font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-brand hover:text-brand/80 font-medium pt-2 transition"
                    >
                      Ver proyecto en vivo
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- EXPERIENCE */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative px-4 sm:px-6 lg:pl-24 lg:pr-8 py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Experiencia"
          title="Trayectoria profesional"
          subtitle="Roles donde entregué valor en producción con responsabilidad full stack."
        />

        <div className="mt-12 space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <Card className="glass p-6 sm:p-8 border-border/60 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand to-brand/30" />
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Left column */}
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs text-brand font-medium">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-brand flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5" />
                        {exp.company}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {exp.type} · {exp.location} · {exp.duration}
                      </p>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                        Logros clave
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-foreground/90"
                          >
                            <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-surface-2 text-muted-foreground border-border/60 text-[10px]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ CONTACT */
export function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    if (!name || !email || !message) {
      toast({
        title: "Faltan datos",
        description: "Por favor completá todos los campos antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent(`Portfolio · Mensaje de ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    toast({
      title: "Listo, abriendo tu cliente de correo",
      description: "Vas a poder enviar el mensaje desde tu app de email.",
    });
    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 lg:pl-24 lg:pr-8 py-20 lg:py-28"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Contacto"
          title="¿Tenés un proyecto en mente?"
          subtitle="Abierto a oportunidades full stack, frontend o backend — remoto o en Córdoba. Escribime y hablemos."
        />

        <div className="grid lg:grid-cols-5 gap-6 mt-12">
          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-2 space-y-4"
          >
            <ContactRow
              icon={Mail}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactRow
              icon={Phone}
              label="Teléfono"
              value={profile.phone}
              href={`tel:+${profile.phoneRaw}`}
            />
            <ContactRow
              icon={MapPin}
              label="Ubicación"
              value={profile.location}
            />
            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value={profile.linkedinHandle}
              href={profile.linkedin}
            />
            <ContactRow
              icon={Github}
              label="GitHub"
              value="@gonzalo-callejas"
              href={profile.github}
            />

            <Card className="glass p-5 border-brand/30 mt-4">
              <div className="flex items-start gap-3">
                <span className="grid place-items-center h-9 w-9 rounded-lg bg-brand/15 text-brand shrink-0">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Disponible para nuevos proyectos
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Tiempo de respuesta habitual: menos de 24 hs.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Card className="glass p-6 sm:p-8 border-border/60">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-foreground">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      className="bg-surface-2 border-border/60 focus-visible:ring-brand/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-surface-2 border-border/60 focus-visible:ring-brand/50"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-medium text-foreground">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="¿Sobre qué querés hablar?"
                    className="bg-surface-2 border-border/60 focus-visible:ring-brand/50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-foreground">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Contame un poco sobre tu proyecto, rol o idea…"
                    className="bg-surface-2 border-border/60 focus-visible:ring-brand/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto bg-brand text-primary-foreground hover:bg-brand/90 shadow-lg glow-sm group"
                >
                  <Send className="mr-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                  Enviar mensaje
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- FOOTER */
export function FooterSection() {
  return (
    <footer className="px-4 sm:px-6 lg:pl-24 lg:pr-8 py-10 mt-auto border-t border-border/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-brand text-primary-foreground font-bold text-xs">
            GC
          </span>
          <div>
            <p className="text-sm font-medium text-foreground">{profile.name}</p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} · {profile.role}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="grid place-items-center h-9 w-9 rounded-lg bg-surface-2 text-muted-foreground hover:text-brand hover:bg-surface-3 transition"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="grid place-items-center h-9 w-9 rounded-lg bg-surface-2 text-muted-foreground hover:text-brand hover:bg-surface-3 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="grid place-items-center h-9 w-9 rounded-lg bg-surface-2 text-muted-foreground hover:text-brand hover:bg-surface-3 transition"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* --------------------------------------------------------- HELPERS */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="text-center max-w-2xl mx-auto space-y-3"
    >
      <motion.div variants={fadeUp}>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs text-brand font-medium uppercase tracking-wide">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="text-sm sm:text-base text-muted-foreground"
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <Card className="glass p-4 border-border/60 hover:border-brand/40 transition group">
      <div className="flex items-center gap-3">
        <span className="grid place-items-center h-10 w-10 rounded-lg bg-brand/10 text-brand shrink-0 group-hover:bg-brand group-hover:text-primary-foreground transition">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold">
            {label}
          </p>
          <p className="text-sm text-foreground truncate">{value}</p>
        </div>
      </div>
    </Card>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}
