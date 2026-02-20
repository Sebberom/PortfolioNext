"use client";

import { useEffect, FormEvent } from "react";
import Image from "next/image";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Sidebar } from "@/components/ui/sidebar";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { ProjectCard } from "@/components/ui/project-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectsScrollAnimation } from "@/components/ui/projects-scroll-animation";
import { Timeline } from "antd";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
// import { AvatarCircles } from "@/components/ui/avatar-circles";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { projects } from "@/app/project/projects-data";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const navLinks = [
    { label: "À propos", href: "#about" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const pinWrap = document.querySelector(".pin-wrap") as HTMLElement;
    if (pinWrap) {
      const pinWrapWidth = pinWrap.offsetWidth;
      const horizontalScrollLength = pinWrapWidth - window.innerWidth;
      gsap.to(".pin-wrap", {
        scrollTrigger: {
          trigger: "#sectionPin",
          pin: true,
          scrub: true,
          start: "top top",
          end: pinWrapWidth,
        },
        x: -horizontalScrollLength,
        ease: "none",
      });
    }
  }, []);

  // handler for contact form submission
  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const subject = `Message de ${name}`;
    const body = `Email: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:Romain.Sebbe@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Sidebar links={navLinks} />
      <div className="fixed inset-0 -z-10">
        <ShootingStars
          minSpeed={10}
          maxSpeed={30}
          minDelay={1200}
          maxDelay={4200}
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          starWidth={10}
          starHeight={1}
          className="opacity-80"
        />
        <StarsBackground
          starDensity={0.0015}
          allStarsTwinkle={true}
          twinkleProbability={0.7}
          minTwinkleSpeed={0.5}
          maxTwinkleSpeed={1}
          className="opacity-50"
        />
      </div>
      <ScrollProgress />
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between h-16 px-4 md:px-8">
          {/* Left Navigation */}
          <nav className="flex gap-4 text-sm font-medium"></nav>

          {/* Center Title */}
          <h1 className="text-xl font-bold text-black dark:text-white absolute left-1/2 -translate-x-1/2"></h1>

          {/* Right Logo - Back to Top */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            aria-label="Back to top"
          >
            <Image
              src="/images/icon.png"
              alt="Retour vers le haut"
              width={50}
              height={50}
              className=""
            />
          </div>
        </div>
      </header>
      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section
          id="home"
          className="flex min-h-screen items-center justify-center pt-16 relative z-10"
        >
          <div className="w-full max-w-3xl px-16 py-32">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="text-4xl font-bold text-black dark:text-white">
                <EncryptedText
                  text="SEBBE Romain"
                  encryptedClassName="text-neutral-500"
                  revealedClassName="dark:text-white text-black"
                  revealDelayMs={50}
                />
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                <EncryptedText
                  text="Développeur et intégrateur web / Étudiant en informatique / Game developer"
                  encryptedClassName="text-neutral-500"
                  revealedClassName="dark:text-white text-black"
                  revealDelayMs={30}
                />
              </p>
            </div>
          </div>
          <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center">
            <OrbitingCircles>
              <Image
                src="/images/node.png"
                alt="Node.js icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/React.png"
                alt="React icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/Next.png"
                alt="Next.js icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/Angular.png"
                alt="Angular icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/aframe.png"
                alt="A-Frame icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/typescript.png"
                alt="TypeScript icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/unity.png"
                alt="Unity icon"
                width={50}
                height={50}
                className=""
              />
            </OrbitingCircles>
            <OrbitingCircles radius={100} reverse>
              <Image
                src="/images/github.png"
                alt="GitHub icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/HTML.png"
                alt="HTML icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/CSS.png"
                alt="CSS icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/Csharp.png"
                alt="C# icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/figma.png"
                alt="Figma icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/adobe.png"
                alt="Adobe icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/php.png"
                alt="PHP icon"
                width={50}
                height={50}
                className=""
              />
              <Image
                src="/images/sql.png"
                alt="SQL icon"
                width={50}
                height={50}
                className=""
              />
            </OrbitingCircles>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex min-h-screen items-center justify-center relative z-10"
        >
          <div className="w-full max-w-3xl px-16 py-32">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="text-4xl font-bold text-black dark:text-white">
                <EncryptedText
                  text="A propos de moi"
                  encryptedClassName="text-neutral-500"
                  revealedClassName="dark:text-white text-black"
                  revealDelayMs={50}
                />
              </h1>
              <p className="text-lg text-zinc-100 dark:text-zinc-100">
                Bonjour ! Je m&rsquo;appelle Romain Sebbe, né le 12 novembre
                2005, j&rsquo;ai actuellement 20 ans et je suis actuellement
                étudiant en BUT Métiers du Multimédia et de l&rsquo;Internet à
                l&rsquo;IUT de Rouen.
              </p>
              <p className="text-lg text-zinc-100 dark:text-zinc-100">
                Passionné par le domaine de l&rsquo;informatique depuis mon plus
                jeune âge, je me suis orienté vers le développement web et la
                conception de jeux vidéo avec pour objectif de faire de ma
                passion mon métier.
              </p>
              <p className="text-lg text-zinc-100 dark:text-zinc-100">
                Consomateur de contenu en ligne depuis mon enfance, j&rsquo;ai
                appris l&rsquo;anglais très tôt de manière autodidacte et
                possède un niveau que nombreux considèrent comme biligue.
              </p>
              <p className="text-lg text-zinc-100 dark:text-zinc-100">
                En dehors de mes études, je suis un grand amateur de jeux vidéo
                et de musique, ce qui m&rsquo;inspire souvent dans mes projets
                créatifs.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden flex-col left-10 items-center justify-center">
            <Image
              src="/images/PhotoRomain.png"
              alt="Photo Sde Romain Sebbe"
              width={500}
              height={500}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="relative right-10 text-zinc-700 dark:text-zinc-300">
            <Timeline
              items={[
                {
                  title: "2021-2023",
                  content:
                    "Bac Général européen spécialité NSI / Physique-Chimie",
                  styles: {
                    rail: {
                      color: "white",
                      backgroundColor: "white",
                    },
                    content: {
                      color: "white",
                      fontWeight: "bold",
                    },
                    title: {
                      color: "white",
                      fontWeight: "bold",
                    },
                  },
                },
                {
                  title: "2023-2025",
                  content: "DUT Métiers du Multimédia et de l'Internet",
                  styles: {
                    rail: {
                      color: "white",
                      backgroundColor: "white",
                    },
                    content: {
                      color: "white",
                      fontWeight: "bold",
                    },
                    title: {
                      color: "white",
                      fontWeight: "bold",
                    },
                  },
                },
                {
                  title: "2025",
                  content:
                    "Stage de 2 mois au sein de l'université de Rouen à l'ufr des scienses de l'homme et de la scocité en tant que développeur web",
                  styles: {
                    rail: {
                      color: "white",
                      backgroundColor: "white",
                    },
                    content: {
                      color: "white",
                      fontWeight: "bold",
                    },
                    title: {
                      color: "white",
                      fontWeight: "bold",
                    },
                  },
                },
                {
                  title: "2025-2026",
                  content: "BUT Métiers du Multimédia et de l'Internet",
                  styles: {
                    rail: {
                      color: "white",
                      backgroundColor: "white",
                    },
                    content: {
                      color: "white",
                      fontWeight: "bold",
                    },
                    title: {
                      color: "white",
                      fontWeight: "bold",
                    },
                  },
                },
              ]}
            />
          </div>
          <div className="relative w-50% overflow-hidden flex-col items-center justify-center"></div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="relative z-10"
          style={{ height: "400vh" }}
        >
          <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
            {/* Horizontal scroll container */}
            <div className="px-16 py-8 mt-50">
              <h1 className="text-4xl font-bold text-black dark:text-white top-50%">
                <EncryptedText
                  text="Projets"
                  encryptedClassName="text-neutral-500"
                  revealedClassName="dark:text-white text-black"
                  revealDelayMs={50}
                />
              </h1>
            </div>

            <div className="flex-1 overflow-hidden flex items-center">
              <div id="projects-container" className="flex gap-8 px-16">
                {Object.entries(projects).map(([id, project]) => (
                  <div key={id} className="w-2xl flex-shrink-0 h-96">
                    <ProjectCard
                      id={id}
                      title={project.title}
                      description={project.description}
                      thumbnail={project.thumbnail}
                      skills={project.skills}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ProjectsScrollAnimation />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex min-h-screen items-start justify-start relative z-10 pt-32"
        >
          <div className="w-full px-16 py-32">
            <div className="flex flex-col items-start gap-3 text-left mb-8">
              <h1 className="text-4xl font-bold text-black dark:text-white">
                <EncryptedText
                  text="Contact"
                  encryptedClassName="text-neutral-500"
                  revealedClassName="dark:text-white text-black"
                  revealDelayMs={50}
                />
              </h1>
            </div>

            {/* two-column layout: left = form + info, right = where to find me */}
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Left side - contact form and direct info */}
              <div className="flex-1">
                <NeonGradientCard>
                  <h2 className="text-2xl font-bold mb-4">Me contacter</h2>
                  <form
                    onSubmit={handleContactSubmit}
                    className="flex flex-col gap-4"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Votre nom"
                      required
                      className="px-4 py-2 border rounded-md"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Votre adresse e-mail"
                      required
                      className="px-4 py-2 border rounded-md"
                    />
                    <textarea
                      name="message"
                      placeholder="Votre message"
                      rows={5}
                      required
                      className="px-4 py-2 border rounded-md"
                    />
                    <RainbowButton
                      type="submit"
                      className="px-6 py-2 bg-pink-500 text-white rounded-md hover: scale-105 transition-transform"
                      variant="outline"
                    >
                      Envoyer
                    </RainbowButton>
                  </form>

                  <div className="mt-8 space-y-2 text-zinc-700 dark:text-zinc-300 text-sm">
                    <p>
                      📧 &nbsp;
                      <a
                        href="mailto:Romain.Sebbe@gmail.com"
                        className="hover:underline"
                      >
                        Romain.Sebbe@gmail.com
                      </a>
                    </p>
                    <p>
                      📞 &nbsp;
                      <a href="tel:+1234567890" className="hover:underline">
                        +33 6 12 34 56 78
                      </a>
                    </p>
                  </div>
                </NeonGradientCard>
              </div>

              {/* Right side - where to find me */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Où me trouver</h2>
                <ul className="space-y-6 text-zinc-700 dark:text-zinc-300 text-lg">
                  <li className="flex items-center gap-2">
                    <a
                      href="https://github.com/Sebberom"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-2xl font-bold mb-4"
                    >
                      <Image
                        src="/images/github.png"
                        alt="GitHub logo"
                        width={50}
                        height={50}
                      />
                      <span>@Sebberom</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-2xl font-bold mb-4">
                    <a
                      href="/images/CvSebbe.pdf"
                      download="CvSebbe.pdf"
                      className="flex items-center gap-2 text-2xl font-bold mb-4"
                    >
                      <Image
                        src="/images/cv.png"
                        alt="CV logo"
                        width={50}
                        height={50}
                      />
                      <span>Télécharger mon curriculum vitae</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-2xl font-bold mb-4">
                    <a
                      href="https://www.linkedin.com/in/romain-sebbe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Image
                        src="/images/linkedin.png"
                        alt="LinkedIn logo"
                        width={50}
                        height={50}
                      />
                      <span>Romain Sebbe</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="text-center py-4 text-sm text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900">
        &copy; {new Date().getFullYear()} Romain Sebbe. Tous droits réservés.
        <br />
      </footer>
    </>
  );
}
