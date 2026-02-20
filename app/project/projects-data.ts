export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  content: string;
  skills: Skill[];
  projectUrl?: string;
}

export const projects: Record<string, Project> = {
  "project-1": {
    title: "Anomalia & Co",
    description:
      "Jeu vidéo de type survival horror développé sous Unity, mettant en scène un protagoniste dont un proche est dans un état de santé critique. Ne pouvant pas payé les soins, il accepte un travail de nuit en tant que \"observateur de terrain\". Cependant lorsqu'il arrive sur place, il reçoit des instructions particulières de la part de son employeur : rester dans la maison pendant 6 heures, ne pas toucher à quoi que ce soit et en cas d'anomalie lui en envoyer une photo. Cependant, les choses ne se passent pas comme prévu et le protagoniste va devoir faire face à des événements de plus en plus étranges et inquiétants.",
    thumbnail: "/images/Anomalia1.png",
    images: [
      "/images/Anomalia1.png",
      "/images/Anomalia2.png",
      "/images/Anomalia3.png",
      "/images/Anomalia4.png",
      "/images/Anomalia5.png",
      "/images/Anomalia6.png",
      "/images/Anomalia7.png",
      "/images/Anomalia8.png",
    ],
    content:
      "Le projet comprend : un prototype foctionel du jeu avec 3 niveaux, une cénématique, un système de gestion des anomalies, un système d'inventaire, 2 objets utilisables par le joueur, un scénario, une bande-annonce, un site web de présentation du projet, une charte graphique avec logos moodboard et direction artistique ainsi que des affiches promotionnelles. Le projet n'a pas été publié sur les plateformes de distribution de jeux vidéo, cependant si vous souhaitez y jouer, n'hésitez pas à me contacter pour que je puisse vous fournir une copie du jeu.",
    skills: [
      { name: "Unity", icon: "/images/unity.png" },
      { name: "C#", icon: "/images/Csharp.png" },
      { name: "GitHub", icon: "/images/github.png" },
      { name: "Blender", icon: "/images/blender.png" },
      { name: "Photoshop", icon: "/images/photoshop.png" },
      { name: "Ilustrator", icon: "/images/ilustrator.png" },
      { name: "Figma", icon: "/images/figma.png" },
      { name: "Trello", icon: "/images/trello.png" },
      { name: "Première Pro", icon: "/images/premiere-pro.png" },
      { name: "React", icon: "/images/react.png" },
    ],
    projectUrl: "https://anomalia.gamer.gd",
  },
  "project-2": {
    title: "Whisper SHS Evolution 2.0",
    description:
      "Mise en place d'un portail d'IA de transcription audio à texte pour les étudiants de l'UFR des sciences de l'homme et de la société de l'université de rouen.",
    thumbnail: "/images/Whisper1.png",
    images: [
      "/images/Whisper1.png",
      "/images/Whisper2.png",
      "/images/Whisper3.png",
      "/images/Whisper4.png",
    ],
    content:
      "Ce projet a consisté à développer un portail web permettant aux étudiants de l'UFR des sciences de l'homme et de la société de l'université de rouen d'utiliser un service d'IA de transcription audio à texte pour des fins académiques. Ce projet est passé tout d'abord par une phase d'apropriation de la technologie d'IA de Open AI, de la base de donnée de l'université et de la logique derière l'envoie et le traitement des fichiers audio. Ensuite, j'ai créer une maquète graphique sur figma afin de confirmer les besoins et attentes du commanditaire. Enfin j'ai développé le portail web comprenant : une page d'authentification relié au système multipasse de l'unviersitée, une page d'acceuil comportant un formulaire d'envoie de fichier audio et vidéo accompagner d'une bar de chargement donnant à l'utilisateur un feed-back visuel, une section à propos informant les utilisateurs sur l'utilisation du portail, une section de contact et crédits ainsi qu'une modale de résumé de l'envoie du fichier. Le projet a été publié sur le domaine de l'université et est actuellement en service pour les étudiants de l'UFR des sciences de l'homme et de la société.",
    skills: [
      { name: "HTML", icon: "/images/HTML.png" },
      { name: "PHP", icon: "/images/php.png" },
      { name: "SQL", icon: "/images/sql.png" },
      { name: "CSS", icon: "/images/css.png" },
      { name: "JavaScript", icon: "/images/js.png" },
      { name: "Bootstrap", icon: "/images/bootstrap.png" },
      { name: "Python", icon: "/images/python.png" },
      { name: "Figma", icon: "/images/figma.png" },
    ],
    projectUrl: "https://shs-app.univ-rouen.fr/whisper-shs/",
  },
  "project-3": {
    title: "Dashboard d'accidents de la route",
    description:
      "Un petit projet de site one-page présentant un dashboard de statistiques sur les accidents de la route dans la région de Nievre en France.",
    thumbnail: "/images/Dashboard1.png",
    images: ["/images/Dashboard1.png", "/images/Dashboard2.png"],
    content:
      "Ce projet était mon premier projet de développement web comportant des éléments intéractifs, il fut réalisé sur de bref délais, dans le cadre de cours de développement web à l'institut universitaire technologique de Rouen. Le projet a consisté à créer un site one-page présentant un dashboard de statistiques sur les accidents de la route dans la région de Nievre en France dans un but de sensibilisation et d'information sur la sécurité routière. Le projet a été réalisé en utilisant HTML, PHP, SQL, Bootstrap et JavaScript. Ce projet est important pour moi car il me permet d'avoir un comparatif avec mes projets actuels et de constater les progrès que j'ai réalisés. Le projet n'a pas été publié en ligne, cependant si vous souhaitez le voir, n'hésitez pas à me contacter pour que je puisse vous fournir une copie du projet.",
    skills: [
      { name: "PHP", icon: "/images/php.png" },
      { name: "SQL", icon: "/images/sql.png" },
      { name: "JavaScript", icon: "/images/js.png" },
      { name: "Bootstrap", icon: "/images/bootstrap.png" },
    ],
  },
  "project-4": {
    title: "Mon portfolio",
    description:
      "Ce site est l'un de mes projets personnels les plus récents et reflète mon évolution en tant que développeur web. Il a été conçu pour présenter mes compétences, mes expériences et mes projets de manière professionnelle et attrayante.",
    thumbnail: "/images/Portfolio1.png",
    images: [
      "/images/Portfolio1.png",
      "/images/Portfolio2.png",
      "/images/Portfolio3.png",
      "/images/Portfolio4.png",
    ],
    content:
      "Ce projet consiste à créer un portfolio personnel pour présenter mes compétences, mes expériences et mes projets de manière professionnelle et attrayante. Le site a été développé en utilisant Next.js, React et TypeScript, et il met en avant mes réalisations de manière interactive et visuellement agréable. Je n'ai pas besoin de vous donner d'url pour ce projet, puisque vous êtes actuellement en train de le visiter ;) ! Ce projet est important pour moi car il me permet de mettre en avant mon travail et de montrer mes compétences à des employeurs potentiels ou à toute personne intéressée par mon parcours. De plus, il me permet de partager mes projets et de recevoir des retours constructifs pour continuer à m'améliorer en tant que développeur web.Ce dernier comprend : un logo, une section d'accueil, une section à propos, une section projets, une section de contact, une page pour chaque projets ainsi que des animations visuelles pour rendre l'expérience utilisateur plus agréable.",
    skills: [
      { name: "Next.js", icon: "/images/Next.png" },
      { name: "React", icon: "/images/react.png" },
      { name: "TypeScript", icon: "/images/typescript.png" },
      { name: "Tailwind CSS", icon: "/images/tailwind.png" },
      { name: "Ilustrator", icon: "/images/ilustrator.png" },
      { name: "Node.js", icon: "/images/node.png" },
    ],
  },
};
