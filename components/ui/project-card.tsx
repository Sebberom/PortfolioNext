"use client";
import Image from "next/image";
import Link from "next/link";
import { NeonGradientCard } from "./neon-gradient-card";
import React from "react";

interface Skill {
  name: string;
  icon: string;
}

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  skills: Skill[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  thumbnail,
  skills,
}) => {
  return (
    <Link href={`/project/${id}`}>
      <NeonGradientCard>
        <div className="overflow-hidden rounded-lg cursor-pointer">
          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <h3 className="text-xl font-semibold text-black dark:text-white line-clamp-2">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
              {description}
            </p>

            {/* Skills at bottom left */}
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative group/skill"
                  title={skill.name}
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={28}
                    height={28}
                    className="opacity-70 group-hover/skill:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </NeonGradientCard>
    </Link>
  );
};
