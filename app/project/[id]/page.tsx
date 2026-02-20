"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { projects, type Skill } from "../projects-data";
import { EncryptedText } from "@/components/ui/encrypted-text";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projects[projectId];
  const images = project?.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!project) {
    return (
      <>
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
        <div className="flex min-h-screen items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
              Projet non trouvé
            </h1>
            <button
              onClick={() => router.push("/#projects")}
              className="px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
            >
              Retour aux projets
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
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
          <button
            onClick={() => router.push("/")}
            className="text-black dark:text-white hover:opacity-70 transition"
          >
            <Image
              src="/images/icon.png"
              alt="Retour vers le haut"
              width={50}
              height={50}
              className=""
            />
          </button>
          <div className="w-12 h-12"></div>
        </div>
      </header>

      <main className="pt-20">
        <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
          <div className="w-full max-w-4xl">
            {/* Carousel d'images */}
            <div className="mb-12">
              <div className="relative h-96 rounded-lg overflow-hidden bg-zinc-900">
                <Image
                  src={images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />

                {/* Boutons navigation carousel */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                      aria-label="Image précédente"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                      aria-label="Image suivante"
                    >
                      →
                    </button>

                    {/* Indicateurs d'images */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                          aria-label={`Aller à l'image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Compteur d'images */}
              {images.length > 1 && (
                <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                  {currentImageIndex + 1} / {images.length}
                </p>
              )}
            </div>

            {/* Titre et description */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
                <EncryptedText text={project.title} revealDelayMs={50} />
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-8">
                {project.description}
              </p>
            </div>

            {/* Technologies utilisées */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Technologies utilisées
              </h2>
              <div className="flex flex-wrap gap-4">
                {project.skills.map((skill: Skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg border-zinc-300 dark:border-zinc-700"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={24}
                      height={24}
                    />
                    <span className="text-black dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contenu détaillé */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                À propos du projet
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.content}
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex gap-4 flex-wrap">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Visiter le projet →
                </a>
              )}
              <button
                onClick={() => router.push("/#projects")}
                className="px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
              >
                Retour aux projets
              </button>
            </div>
          </div>
        </section>
      </main>
      <br />
      <footer className="text-center py-4 text-sm text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900">
        &copy; {new Date().getFullYear()} Romain Sebbe. Tous droits réservés.
        <br />
      </footer>
    </>
  );
}
